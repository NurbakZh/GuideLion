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
import shutil
import datetime
import automium

import quorum

import base

class Build(base.Base):

    id = dict(
        index = True
    )

    project = dict(
        index = True
    )

    result = dict(
        type = bool,
        index = True
    )

    start_time = dict(
        type = float,
        index = True
    )

    end_time = dict(
        type = float,
        index = True
    )

    delta = dict(
        type = int,
        index = True
    )

    size = dict(
        type = int,
        index = True
    )

    size_string = dict()

    system = dict(
        index = True
    )

    @classmethod
    def _build(cls, model, map):
        base.Base._build(model, map)
        result = model.get("result", False)
        delta = model.get("delta", 0)
        start_time = model.get("start_time", 0.0)
        end_time = model.get("end_time", 0.0)
        stat_time_d = datetime.datetime.fromtimestamp(start_time)
        end_time_d = datetime.datetime.fromtimestamp(end_time)
        model["result_l"] = result and "passed" or "failed"
        model["delta_l"] = automium.delta_string(delta)
        model["start_time_l"] = stat_time_d.strftime("%b %d, %Y %H:%M:%S")
        model["end_time_l"] = end_time_d.strftime("%b %d, %Y %H:%M:%S")

    def pre_delete(self):
        base.Base.pre_delete(self)

        self._delete_folder()

    def post_apply(self):
        base.Base.post_apply(self)

    def get_folder(self):
        # retrieves the reference to the configuration value
        # containing the path the projects directory and uses
        # it to "compute" the path to the build directory
        projects_folder = quorum.conf("PROJECTS_FOLDER")
        project_folder = os.path.join(projects_folder, self.project)
        build_folder = os.path.join(project_folder, "builds", self.id)
        return build_folder

    def get_file_path(self, path):
        build_folder = self.get_folder()
        return os.path.join(build_folder, path)

    def get_files(self, path):
        path_f = self.get_file_path(path)
        entries = os.listdir(path_f)
        path and entries.insert(0, "..")
        return entries

    def get_version(self):
        build_folder = self.get_folder()
        version_path = os.path.join(build_folder, "VERSION")
        if not os.path.exists(version_path): return None
        version_file = open(version_path, "rb")
        try: version = version_file.read()
        finally: version_file.close()
        version = version.strip()
        return version

    def get_log(self):
        build_folder = self.get_folder()
        log_folder = os.path.join(build_folder, "log")
        log_path = os.path.join(log_folder, "automium.log")
        log_file = open(log_path, "rb")
        try: log = log_file.read()
        finally: log_file.close()
        return log

    def _delete_folder(self):
        build_folder = self.get_folder()
        if not os.path.isdir(build_folder): return
        shutil.rmtree(build_folder, ignore_errors = True)
