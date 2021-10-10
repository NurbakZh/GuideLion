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
import sys
import json
import stat
import errno
import shutil
import getopt
import legacy
import subprocess

CROSS = {
    "arm-linux-gnueabihf" : "armhf",
    "arm-none-linux-gnueabi" : "armhf",
    "arm-none-linux-gnueabihf" : "armhf",
    "arm-unknown-linux-gnueabi" : "armhf",
    "arm-unknown-linux-gnueabihf" : "armhf",
    "arm-rasp-linux-gnueabi" : "armhf",
    "arm-rasp-linux-gnueabihf" : "armhf"
}
""" The map defining the complete association
between the cross compilation name as the
architecture value associated with them """

config = {}
""" The top level global configuration to
be used across all the definitions and
operations """

def build(config_path, arch = None, cross = None):
    # in case the provided config path is not valid raises an
    # error indicating the problem
    if not config_path:
        raise RuntimeError("Invalid configuration path '%s'" % config_path)

    # calls the default underlying build command to be able
    # initialize the proper structures for each os
    _build()

    # in case the cross compilation value is defined and
    # the architecture one is not tries to resolve the
    # architecture from the cross compilation value
    if cross: arch = arch or _rarch(cross)

    # tries to retrieve the proper architecture definition in
    # accordance with the specification defaulting to the pre-defined
    # values (smart values) in case no architecture is provided
    arch = arch or _arch()

    # opens the configuration file for reading and
    # reads the complete set of contents creating the
    # configuration definition map
    file = open(config_path, "rb")
    try: data = file.read()
    finally: file.close()

    # decodes the provided data with the proper encoding
    # and then retrieves the proper ata structure from json
    data = data.decode("utf-8")
    _config = json.loads(data)

    # creates the various configuration variables
    # from the provided configuration map , defaulting
    # to the pre-defined values in some cases
    name = _config.get("name", "default")
    version = _config.get("version", "0.0.0")
    name_cap = name and name[0].upper() + name[1:]
    name_ver = name + "-" + version
    name_arc = name_ver + "-" + arch
    name_raw = name_arc + "-raw"
    name_src = name_arc + "-src"

    # retrieves the current working directory and uses
    # it to construct the various base directories to be
    # set in the paths related map
    cwd = os.getcwd()
    build_f = os.path.join(cwd, "build")
    repo_f = os.path.join(build_f, "repo")
    target_f = os.path.join(build_f, "target")
    tmp_f = os.path.join(target_f, "tmp")
    result_f = os.path.join(target_f, "result")
    dist_f = os.path.join(target_f, "dist")
    paths = {
        "build" : build_f,
        "repo" : repo_f,
        "target" : target_f,
        "tmp" : tmp_f,
        "result" : result_f,
        "dist" : dist_f
    }

    # sets the various "new" elements of the configuration
    # to be sets for the current environment
    _config["paths"] = paths
    _config["architecture"] = arch
    _config["arch"] = arch
    _config["name_cap"] = name_cap
    _config["name_ver"] = name_ver
    _config["name_arc"] = name_arc
    _config["name_raw"] = name_raw
    _config["name_src"] = name_src

    # loads the current configuration with the provided
    # configuration map so that they are stored in the
    # corresponding global structure
    load(_config)

    # creates the various paths associated with the
    # currently loaded configuration (flush operation)
    create_paths()

def cleanup():
    tmp_f = path("tmp")
    exists = tmp_f and os.path.exists(tmp_f) or False
    if not exists: return
    remove(tmp_f)

def parse_args(args = None, names = ()):
    # creates the map that will hold the parsed values
    # from the provided arguments and retrieves the part
    # of the system arguments to be used
    values = {}
    args = sys.argv[1:] if args == None else args

    # converts the names tuple into a list and extends
    # it with the pre-defined automium arguments (required
    # to provide compatibility)
    names = list(names)
    names.extend(("keep", "previous=", "file="))

    # retrieves the complete set of names that have an
    # associated value to be used in the parsing stage
    names_v = [name[:-1] for name in names if name.endswith("=")]

    # parses the various arguments using the normalized manned
    # and then sets the various values in the values map
    options, _arguments = getopt.getopt(args, "kp:f:", names)
    for option, argument in options:
        extended = option.startswith("--")
        name = option[2:] if extended else option[1:]
        if name in names_v: values[name] = argument
        else: values[name] = True

    # returns the map containing the various parsed values
    # so that they can be used in a simplified manner
    return values

def load(_config):
    global config
    for key, value in _config.items():
        config[key] = value

def create_paths():
    paths = config.get("paths", {})
    for _name, path in paths.items():
        if os.path.isdir(path): continue
        os.makedirs(path)

def move(src, dst):
    shutil.move(src, dst)

def copy(src, dst, replace = True, create = True, symlinks = True):
    is_dir = os.path.isdir(src)
    _is_dir = os.path.exists(dst)
    exists = os.path.exists(dst)
    if exists and replace: remove(dst)
    if not os.path.exists(dst) and create and not is_dir: os.makedirs(dst)
    if is_dir: shutil.copytree(src, dst, symlinks = symlinks)
    else: shutil.copy(src, dst)

def remove(path):
    exists = os.path.exists(path)
    is_dir = os.path.isdir(path)
    if not exists: return
    if is_dir: shutil.rmtree(path, ignore_errors = False, onerror = _remove_error)
    else: os.remove(path)

def conf(name, default = None):
    return config.get(name, default)

def conf_s(name, value):
    config[name] = value

def path(name, default = None):
    paths = config.get("paths", {})
    return paths.get(name, default)

def assert_c(commands = ()):
    missing = []
    for command in commands:
        try:
            process = subprocess.Popen(
                command.split(),
                stdout = subprocess.PIPE,
                stderr = subprocess.STDOUT
            )
            process.communicate()
        except OSError:
            missing.append(command)

    if not missing: return

    missing_s = ", ".join(missing)
    raise RuntimeError(
        "Required command(s) are missing or invalid: %s" % missing_s
    )

def _build_nt():
    pass

def _build_default():
    pass

def _build():
    name = os.name
    if name == "nt": return _build_nt()
    else: return _build_default()

def _arch_nt():
    return os.environ.get("PROCESSOR_ARCHITECTURE", "all")

def _arch_default():
    # creates the buffer that will hold the data resulting
    # from the output of the architecture information command
    # and then starts the map that contains each of the variables
    buffer = legacy.StringIO()
    variables = {}

    try:
        # calls the command that outputs the architecture variables
        # information and then retrieves the buffer contents
        process = subprocess.Popen(["dpkg-architecture"], stdout = subprocess.PIPE)
        output, _error = process.communicate()
        result = process.returncode
        contents = result == 0 and output or ""
    except: contents = ""
    finally: buffer.close()

    # strips the contents information to avoid any additional
    # unused characters (provides better compatibility)
    contents = contents.strip()

    # splits the retrieved contents around the newline
    # character (line splitting) and then iterates over
    # them to retrieve the name and values for each of
    # them and set them in the variables map
    lines = contents and contents.split("\n") or []
    for line in lines:
        name, value = line.split("=")
        variables[name] = value

    # returns the building architecture to be used for the
    # process of building the package
    return variables.get("DEB_BUILD_ARCH", "all")

def _arch():
    name = os.name
    if name == "nt": return _arch_nt()
    else: return _arch_default()

def _rarch(cross):
    arch = CROSS.get(cross, None)
    arch = arch or cross.split("-", 1)[0]
    return arch

def _remove_error(func, path, exc):
    excvalue = exc[1]
    if func in (os.rmdir, os.remove) and excvalue.errno == errno.EACCES:
        os.chmod(path, stat.S_IRWXU | stat.S_IRWXG | stat.S_IRWXO)
        func(path)
    else:
        raise
