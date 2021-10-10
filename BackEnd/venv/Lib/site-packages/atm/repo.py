#!/usr/bin/python
# -*- coding: utf-8 -*-

# Hive Automium System
# Copyright (C) 2008-2014 Hive Solutions Lda.
#
# This file is part of Hive Automium System.
#
# Hive Automium System is free software: you can redistribute it and/or modify
# it under the terms of the Apache License as published by the Apache
# Foundation, either version 2.0 of the License, or (at your option) any
# later version.
#
# Hive Automium System is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# Apache License for more details.
#
# You should have received a copy of the Apache License along with
# Hive Automium System. If not, see <http://www.apache.org/licenses/>.

__author__ = "João Magalhães <joamag@hive.pt>"
""" The author(s) of the module """

__version__ = "1.0.0"
""" The version of the module """

__revision__ = "$LastChangedRevision$"
""" The revision number of the module """

__date__ = "$LastChangedDate$"
""" The last change date of the module """

__copyright__ = "Copyright (c) 2008-2014 Hive Solutions Lda."
""" The copyright for the module """

__license__ = "Apache License, Version 2.0"
""" The license for the module """

import os
import subprocess

from . import base

def git(url = None, path = None, clean = False):
    # retrieves the various default values from the
    # configuration in case their were not provided
    url = url or base.conf("repo", None)
    path = path or base.path("repo", None)

    result = subprocess.call([
        "git",
        "clone",
        url,
        path,
        "--quiet"
    ])
    if not result == 0: raise RuntimeError("Problem cloning repository using git")

    # in case the clean option is not set returns immediately
    # to avoid any extra remove operation
    if not clean: return

    # retrieves the full path to the various files and directories
    # that are meant to be removed and then removes them, this should
    # sanitize the repository from extra metadata files
    git_path = os.path.join(path, ".git")
    gitignore_path = os.path.join(path, ".gitignore")
    base.remove(git_path)
    base.remove(gitignore_path)

def git_v(_version, url = None):
    # retrieves the various default values from the
    # configuration in case their were not provided
    url = url or base.conf("repo", None)

    # clones the repository to the target (verify) directory
    # to be used for the processing of the log
    result = subprocess.call([
        "git",
        "clone",
        url,
        "verify",
        "--quiet"
    ])
    if not result == 0: raise RuntimeError("Problem cloning repository using git")

    # retrieves the current working directory so that it's saved
    # and then changed the current directory to the verify directory
    cwd = os.getcwd()
    os.chdir("verify")
    try:
        # puts the current revision in the head branch into
        # the version file and then opens the file to be able
        # to prettify it into the normalized version value
        result = os.system("git rev-parse HEAD > VERSION")
        if not result == 0: raise RuntimeError("Problem executing 'rev-parse' using git")

        # opens the created version file and reads the version from
        # it by stripping all the extra characters from it
        version_file = open("VERSION")
        try: version = version_file.read().strip()
        finally: version_file.close()

        # calls the appropriate log command for the git according to
        # the existence or not of the previous version value
        if _version: result = os.system(
            "git log " + _version + "..HEAD --pretty=format:\"%h%x09%an%x09%ad%x09%s\" > LOG"
        )
        else: result = os.system(
            "git log --pretty=format:\"%h%x09%an%x09%ad%x09%s\" > LOG"
        )
        if not result == 0: raise RuntimeError("Problem executing 'log' using git")
    finally:
        # changes the directory back to the original value in
        # order to restore the settings to the original value
        os.chdir(cwd)

    # returns the version that was "just" read from the git
    # repository, this value should be verified
    return version
