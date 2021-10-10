#!/usr/bin/python
# -*- coding: utf-8 -*-

# Hive Automium System
# Copyright (C) 2008-2012 Hive Solutions Lda.
#
# This file is part of Hive Automium System.
#
# Hive Automium System is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# Hive Automium System is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with Hive Automium System. If not, see <http://www.gnu.org/licenses/>.

__author__ = "João Magalhães <joamag@hive.pt>"
""" The author(s) of the module """

__version__ = "1.0.0"
""" The version of the module """

__revision__ = "$LastChangedRevision$"
""" The revision number of the module """

__date__ = "$LastChangedDate$"
""" The last change date of the module """

__copyright__ = "Copyright (c) 2008-2012 Hive Solutions Lda."
""" The copyright for the module """

__license__ = "GNU General Public License (GPL), Version 3"
""" The license for the module """

import os
import time
import json
import shutil
import zipfile
import datetime
import automium

import quorum

import base
import build

class Project(base.Base):

    name = dict(
        index = True
    )

    description = dict()

    days = dict(
        type = int
    )

    hours = dict(
        type = int
    )

    minutes = dict(
        type = int
    )

    seconds = dict(
        type = int
    )

    build_file = dict(
        type = quorum.File,
        private = True
    )

    recursion = dict(
        type = int
    )

    next_time = dict(
        type = int
    )

    result = dict(
        type = bool
    )

    build_time = dict(
        type = float
    )

    builds = dict(
        type = int
    )

    result_l = dict()

    build_time_l = dict()

    def __init__(self):
        base.Base.__init__(self)
        self.days = 0
        self.hours = 0
        self.minutes = 0
        self.seconds = 0

    @classmethod
    def validate_new(cls):
        return super(Project, cls).validate_new() + [
            quorum.not_null("name"),
            quorum.not_empty("name"),
            quorum.not_duplicate("name", cls._name()),

            quorum.not_null("description"),
            quorum.not_empty("description"),

            quorum.not_null("build_file"),
            quorum.not_empty("build_file")
        ]

    @classmethod
    def schedule_all(cls):
        projects = cls.find()
        for project in projects: project.schedule()

    @classmethod
    def _build(cls, model, map):
        base.Base._build(model, map)
        next_time = model.get("next_time", 0.0)
        next_time_d = datetime.datetime.fromtimestamp(next_time)
        model["next_time_l"] = next_time_d.strftime("%b %d, %Y %H:%M:%S")

    def pre_create(self):
        base.Base.pre_create(self)

        # creates the folder that will hold the projects contents
        # and touches the build file contents in order to be able
        # flush the data from it into the
        self._create_folder()
        self._touch_file()

        # sets the initial value for the build count so that it
        # starts with the zero value (no builds)
        self.result = None
        self.build_time = 0.0
        self.builds = 0

        # retrieves the current time value and the recursion value for
        # the project and uses it to calculate the initial "next time"
        current_time = time.time()
        recursion = self._get_recursion()
        self.recursion = recursion
        self.next_time = current_time + recursion

    def post_create(self):
        base.Base.post_create(self)

        # runs the initial schedule operation on the project so
        # that it starts the first build process
        self.schedule()

    def pre_update(self):
        base.Base.pre_update(self)

        # in case the current build file is empty unsets
        # it so that no override to empty occurs otherwise
        # touches the build file to flush it's contents
        if self.build_file.is_empty(): del self.build_file
        else: self._touch_file()

        # retrieves the current time value and the recursion value for
        # the project and uses it to calculate the initial "next time"
        current_time = time.time()
        recursion = self._get_recursion()
        self.recursion = recursion
        self.next_time = current_time + recursion

    def pre_delete(self):
        base.Base.pre_delete(self)

        self._delete_folder()
        builds = build.Build.find(project = self.name)
        for _build in builds: _build.delete()

    def schedule(self):
        # retrieves the various required project attributes
        # for the scheduling process they are going to be used
        # in the scheduling process
        next_time = self.next_time or time.time()

        # retrieves the "custom" run function to be used as the
        # work for the scheduler
        _run = self.get_run(schedule = True)

        # inserts a new work task into the execution (thread)
        # for the next (target time)
        quorum.insert_work(next_time, _run)

    def get_folder(self):
        # retrieves the reference to the configuration value
        # containing the path the projects directory and uses
        # it to "compute" the path to the project directory
        projects_folder = quorum.conf("PROJECTS_FOLDER")
        project_folder = os.path.join(projects_folder, self.name)
        return project_folder

    def get_previous_build(self):
        _build = build.Build.get(
            sort = [("id", -1)],
            raise_e = False,
            project = self.name
        )
        return _build

    def get_latest_build(self):
        project_folder = self.get_folder()
        builds_folder = os.path.join(project_folder, "builds")
        build_ids = os.listdir(builds_folder)
        if not build_ids: return None
        build_ids.sort(reverse = True)
        build_id = build_ids[0]
        return self.get_build(build_id)

    def get_build(self, id):
        project_folder = self.get_folder()
        builds_folder = os.path.join(project_folder, "builds")
        build_folder = os.path.join(builds_folder, id)
        build_path = os.path.join(build_folder, "description.json")
        build_file = open(build_path, "rb")
        try: build_m = json.load(build_file)
        finally: build_file.close()

        build_m = build.Build.new(model = build_m)
        return build_m

    def get_run(self, schedule = False):
        def _run():
            # retrieves the current time as the initial time
            # for the build automation execution
            initial_time = time.time()

            # "calculates" the build file path using the projects
            # folder as the base path for such calculus
            project_folder = self.get_folder()
            build_path = os.path.join(project_folder, "_build")
            _build_path = os.path.join(build_path, "build.json")

            # opens the build file descriptor and parses using
            # the json parser then closes the file
            build_file = open(_build_path, "rb")
            try: configuration = json.load(build_file)
            finally: build_file.close()

            # creates the initial map for the options that are
            # going to be sent for the automium system
            options = {}

            # tries to retrieve the previous build and from it tries
            # to retrieve the version to be used in the verification
            # process (in case no validation the automium process
            # does not occurs)
            previous_build = self.get_previous_build()
            if previous_build:
                options["previous"] = previous_build.get_version()

            # executes the automium task using the the build path
            # and the configuration map as parameters, then sets
            # the current (execution) path as the project folder
            # so that the resulting files are placed there
            result = automium.run(
                build_path,
                configuration,
                options = options,
                current = project_folder
            )

            # retrieves the currently associated project, must updated
            # version of it in order to make changed on it as a result
            # of the build (order) operation
            project = Project.get(build = False, name = self.name)

            # in case the result is valid a new build must be processed
            # and saved in the current data source, otherwise ignores
            # the build as it was not created (probably skipped)
            if result:
                # retrieves the latest build associated with the project
                # and uses them to update the project structure with
                # the new value (then flushes the project contents)
                build = project.get_latest_build()
                build.build_m()
                project.result = build.result
                project.result_l = build.result_l
                project.build_time = build.delta
                project.build_time_l = build.delta_l
                project.builds = project.builds + 1
                build.project = project.name
                build.save()
                project.save()

            # in case schedule flag is not set, no need to
            # recalculate the new "next time" and put the
            # the new work into the scheduler, returns now
            if not schedule: return

            # retrieves the recursion integer value and uses
            # it to recalculate the next time value setting
            # then the value in the project value
            recursion = project._get_recursion()
            next_time = initial_time + recursion
            project.next_time = next_time

            # re-saves the project because the next time value
            # has changed (flushes contents) then schedules the
            # project putting the work into the scheduler
            project.save()
            project.schedule()

        # returns the "custom" run function that contains a
        # transitive closure on the project identifier
        return _run

    def get_config(self):
        project_folder = self.get_folder()
        build_path = os.path.join(project_folder, "_build")
        _build_path = os.path.join(build_path, "build.json")
        build_file = open(_build_path, "rb")
        try: config = build_file.read()
        finally: build_file.close()
        return config

    def _create_folder(self):
        project_folder = self.get_folder()
        if os.path.isdir(project_folder): return
        os.makedirs(project_folder)

    def _delete_folder(self):
        project_folder = self.get_folder()
        if not os.path.isdir(project_folder): return
        shutil.rmtree(project_folder, ignore_errors = True)

    def _touch_file(self):
        # in case the current entity does not have the build
        # file currently defined returns immediately
        if not hasattr(self, "build_file"): return

        # retrieves the reference to the file that holds the
        # contents for the description of the build
        project_folder = self.get_folder()
        file_path = os.path.join(project_folder, "build.atm")
        file = open(file_path, "wb")
        try: file.write(self.build_file.data)
        finally: file.close()

        # retrieves the complete path to the build information
        # directory and in case it exists removes the complete
        # sets of files and directories and then re-constructs
        # the directory with an empty structure
        build_path = os.path.join(project_folder, "_build")
        if os.path.isdir(build_path): shutil.rmtree(build_path)
        os.makedirs(build_path)

        # extracts all the files contained in the automium file
        # into the "just" created directory (deployment operation)
        zip_file = zipfile.ZipFile(file_path, "r")
        zip_file.extractall(build_path)

    def _get_recursion(self):
        return self.days * 86400\
            + self.hours * 3600\
            + self.minutes * 60\
            + self.seconds
