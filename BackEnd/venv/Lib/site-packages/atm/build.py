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

import copy as _copy

from . import base
from . import environ

DEV_HOME = "\\dev"
""" The default directory to the development directory
to be used in the building stages """

def autogen(path = None, clean = False):
    path = path or "./autogen.sh"
    result = subprocess.call([
        path
    ])
    if not result == 0: raise RuntimeError("Problem executing autogen not successful")

    if not clean: return

    base_path = os.path.dirname(path)
    cache = os.path.join(base_path, "autom4te.cache")
    autogen = os.path.join(base_path, "autogen.sh")
    makefile = os.path.join(base_path, "Makefile-autoconfig")
    base.remove(cache)
    base.remove(autogen)
    base.remove(makefile)

def configure(path = None, args = (), includes = (), libraries = (), cflags = None, cross = None):
    # creates the pre-defined path for the configuration
    # file to be used in case it was not provided
    path = path or "./configure"

    # in case the provided cflags are not valid or set sets
    # the value as and empty string, in order to avoid any
    # string manipulation problem
    cflags = cflags or os.environ.get("CFLAGS", "")

    # converts both the includes and the libraries tuples
    # into a list in order to make it mutable
    args = list(args)
    includes = list(includes)
    libraries = list(libraries)

    # in case the cross (compilation) flag is set must add
    # both the associated include and library directories
    # to the current lists (provides compatibility)
    if cross:
        # creates a lambda function that verifies if the string
        # formating element is present in the provided string in
        # such case the string is considered as belonging to a
        # template (formatting may be used)
        is_t = lambda x: "%s" in x

        # retrieves the base value for the cross compilation
        # name useful for the build value of the configure
        cross_base = cross.split("-", 1)[0]

        # applies the cross compilation host value to the templates
        # based include and library values to obtain the final values
        # in case no template elements exist the original value is set
        includes = [is_t(include) and include % cross or include for include in includes]
        libraries = [is_t(library) and library % cross or library for library in libraries]

        # adds both the build and the host parameters to the set
        # of arguments to be used in the configure command
        args.insert(0, "--build=%s" % cross_base)
        args.insert(0, "--host=%s" % cross)

        # adds the base optional paths referring the cross compilation
        # toolchain, should be the base directories to be used)
        includes.insert(0, "/opt/%s/include" % cross)
        libraries.insert(0, "/opt/%s/lib" % cross)

    # copies the current set of environment variables and
    # creates the includes string from the various provided
    # include paths and sets the cflags variable with it
    env = _copy.copy(os.environ)
    includes_s = ""
    libraries_s = ""
    for include in includes: includes_s += "-I" + include + " "
    for library in libraries: libraries_s += "-L" + library + " "
    cflags = (includes_s + " " + libraries_s + " " + cflags).strip()
    if cflags: env["CFLAGS"] = cflags
    if cross: env["PATH"] = "/opt/%s/bin" % cross + ":" + env.get("PATH", "")

    # runs the configuration process with the newly set environment
    # variables and in case the execution fails raises an exception
    result = subprocess.call([
        path
    ] + list(args), env = env)
    if not result == 0: raise RuntimeError("Problem executing configure not successful")

def make(install = True):
    result = subprocess.call([
        "make"
    ])
    if not result == 0: raise RuntimeError("Problem executing make not successful")

    if not install: return

    result = subprocess.call([
        "make",
        "install"
    ])
    if not result == 0: raise RuntimeError("Problem executing make install not successful")

def msbuild(path, conf = "Release", includes = (), libraries = (), dev = True):
    # ensures that the development settings are correctly set
    # in the environment in case the development mode is set
    # then calls the msbuild command to start the process
    dev and ensure_dev(includes = includes, libraries = libraries)
    result = subprocess.call([
        "msbuild",
        path,
        "/p:Configuration=%s" % conf,
        "/p:VCBuildAdditionalOptions=/useenv"
    ])
    if not result == 0: raise RuntimeError("Problem executing msbuild not successful")

def pysdist(setup = "setup.py", process = False):
    result = subprocess.call([
        "python",
        setup,
        "process" if process else "clean",
        "sdist"
    ])
    if not result == 0: raise RuntimeError("Python sdist build failed")

def ensure_dev(includes = (), libraries = ()):
    dev_home = environ.environ("DEV_HOME", DEV_HOME)
    environ.environ_s("INCLUDE", dev_home + "\\include")
    environ.environ_s("LIB", dev_home + "\\lib")
    environ.environ_s("PATH", dev_home + "\\bin")
    environ.environ_s("PATH", dev_home + "\\util")
    for include in includes: environ.environ_s("INCLUDE", include)
    for library in libraries: environ.environ_s("LIB", library)
