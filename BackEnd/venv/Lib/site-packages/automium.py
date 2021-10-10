#!/usr/bin/python
# -*- coding: utf-8 -*-

# Hive Automium System
# Copyright (C) 2008-2014 Hive Solutions Lda.
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

__copyright__ = "Copyright (c) 2008-2014 Hive Solutions Lda."
""" The copyright for the module """

__license__ = "Apache License, Version 2.0"
""" The license for the module """

import os
import sys
import stat
import time
import json
import errno
import sched
import shutil
import getopt
import zipfile
import datetime
import subprocess

LOOP_TIME = 20
""" The default time to be used in between iteration
of the build automation process (delay time) """

RECURSION = (0, 0, 0, LOOP_TIME, 0)
""" The default recursion list to be used for the
control of the iteration process """

TIMESTAMP_PRECISION = 100.0
""" The precision to be used for the timestamp integer
identifier calculation (more precision less collisions) """

VERSION = "0.2.6"
""" The current version value for the automium executable """

RELEASE = "130"
""" The release value, should be an internal value related
with the build process """

BUILD = "1"
""" The build value, representing the sub release value
existent in the build process """

RELEASE_DATE = "25 February 2013"
""" The release date value for the current version """

BRANDING_TEXT = "Hive Automium System %s (Hive Solutions Lda. r%s:%s %s)"
""" The branding text value the template based values
should be defined as constants """

VERSION_PRE_TEXT = "Python "
""" The version pre text value, that appears before the printing
of the branding text second line """

DEBUG = True
""" The current verbose level control, in case this flag
is set there will be much more information in the output """

OS_ALIAS = {
    "nt" : "win32",
    "posix" : "unix"
}
""" Map defining the various alias to the operative system
names based on the python definition of the names """

def delta_string(delta, counts = 2):
    # starts the counter value (number of elements
    # and the valid flag)
    counter = 0
    valid = False

    # starts the initial buffer string as
    # an empty string (no delta value)
    buffer = ""

    # calculates the delta resulting value for the
    # number of days in the delta in case this value
    # is greater than zero it must be processed
    value = delta / 86400
    if value > 0:
        # retrieves the appropriate format string according
        # to the resulting value
        if value == 1: format = "%d day "
        else: format = "%d days "

        # formats the value using the format string and the
        # resulting value and then update the value of the
        # counter and sets the valid flag
        buffer += format % value
        counter += 1
        valid = True

    # checks if the current counter reached the count limit
    # in such case returns the current buffer stripped
    if counter == counts: return buffer.rstrip()

    # calculates the delta resulting value for the
    # number of hours in the delta in case this value
    # is greater than zero it must be processed
    value = (delta % 86400) / 3600
    if valid or value > 0:
        # retrieves the appropriate format string according
        # to the resulting value
        if value == 1: format = "%d hour "
        else: format = "%d hours "

        # formats the value using the format string and the
        # resulting value and then update the value of the
        # counter and sets the valid flag
        buffer += format % value
        counter += 1
        valid = True

    # checks if the current counter reached the count limit
    # in such case returns the current buffer stripped
    if counter == counts: return buffer.rstrip()

    # calculates the delta resulting value for the
    # number of minutes in the delta in case this value
    # is greater than zero it must be processed
    value = (delta % 3600) / 60
    if valid or value > 0:
        # retrieves the appropriate format string according
        # to the resulting value
        if value == 1: format = "%d minute "
        else: format = "%d minutes "

        # formats the value using the format string and the
        # resulting value and then update the value of the
        # counter and sets the valid flag
        buffer += format % value
        counter += 1
        valid = True

    # checks if the current counter reached the count limit
    # in such case returns the current buffer stripped
    if counter == counts: return buffer.rstrip()

    # calculates the delta resulting value for the
    # number of seconds in the delta
    value = delta % 60

    # retrieves the appropriate format string according
    # to the resulting value
    if value == 1: format = "%d second "
    else: format = "%d seconds "

    # formats the value using the format string and the
    # resulting value and then update the value of the
    # counter and sets the valid flag
    buffer += format % value
    counter += 1
    valid = True

    # the end of execution has been reached so the buffer must
    # be stripped and returned
    return buffer.rstrip()

def byte_string(bytes):
    # sets the float value as the default option
    # for the byte string calculus
    is_float = True

    # calculates the giga byte integer value for the
    # currently provided set of bytes and it case
    # it's greater that zero proceed to calculus
    value = int(round(float(bytes) / 1073741824.0))
    if value > 0:
        # checks if the value is meant to be plural
        # and if it should be set as float value with
        # one decimal place (value to short)
        if value == 1: format = "%.1f GByte"
        elif value < 10: format = "%.1f GBytes"
        else: format = "%d GBytes"; is_float = True

        # converts the value into a decimal value in
        # case it's the case and formats it
        if is_float: value = float(bytes) / 1073741824.0
        return format % value

    # calculates the mega byte integer value for the
    # currently provided set of bytes and it case
    # it's greater that zero proceed to calculus
    value = int(round(float(bytes) / 1048576.0))
    if value > 0:
        # checks if the value is meant to be plural
        # and if it should be set as float value with
        # one decimal place (value to short)
        if value == 1: format = "%.1f MByte"
        elif value < 10: format = "%.1f MBytes"
        else: format = "%d MBytes"; is_float = True

        # converts the value into a decimal value in
        # case it's the case and formats it
        if is_float: value = float(bytes) / 1048576.0
        return format % value

    # calculates the kilo byte integer value for the
    # currently provided set of bytes and it case
    # it's greater that zero proceed to calculus
    value = int(round(float(bytes) / 1024.0))
    if value > 0:
        # checks if the value is meant to be plural
        # and if it should be set as float value with
        # one decimal place (value to short)
        if value == 1: format = "%.1f KByte"
        elif value < 10: format = "%.1f KBytes"
        else: format = "%d KBytes"; is_float = True

        # converts the value into a decimal value in
        # case it's the case and formats it
        if is_float: value = float(bytes) / 1024.0
        return format % value

    # calculates the byte integer value for the
    # currently provided set of bytes and it case
    # it's greater that zero proceed to calculus
    value = bytes
    if value > 0:
        # checks if the value is meant to be plural
        # and if it should be set as float value with
        # one decimal place (value to short)
        if value == 1: format = "%.1f Byte"
        elif value < 10: format = "%.1f Bytes"
        else: format = "%d Bytes"; is_float = True

        # converts the value into a decimal value in
        # case it's the case and formats it
        if is_float: value = float(bytes)
        return format % value

    # returns the default and only option left
    # as the zero bytes case
    return "0 Bytes"

def information():
    # print the branding information text and then displays
    # the python specific information in the screen
    print(BRANDING_TEXT % (VERSION, RELEASE, BUILD, RELEASE_DATE))
    print(VERSION_PRE_TEXT + sys.version)

def resolve_os():
    # retrieves the current specific operative system
    # name and then resolves it using the alias map
    os_name = os.name
    os_name = OS_ALIAS.get(os_name, os_name)
    return os_name

def resolve_file(files):
    # resolves the current operative system descriptive
    # name so that it's possible to correctly resolve
    # the correct file to be used
    os_name = resolve_os()

    # tries to retrieve the appropriate execution
    # file using both the "exact" operative system
    # name or in case it fails the wildcard based
    # operative system name , then returns it to the
    # caller method for execution
    file = files.get(os_name, None) or files.get("*", None)
    return file

def get_size(path):
    # sets the initial value for the total path
    # size (start at the initial value)
    total_size = 0

    # walks through the path to count the bytes in
    # each element
    for directory_path, _names, file_names in os.walk(path):
        # iterate over all the file names in the current
        # directory to count their size and "join" their
        # size to the current accumulator
        for file_name in file_names:
            file_path = os.path.join(directory_path, file_name)
            total_size += os.path.getsize(file_path)

    # returns the accumulator value containing the complete
    # set of byte count
    return total_size

def run(path, configuration, options = {}, current = None, file_c = None):
    # retrieves the series of configuration values used
    # in the running, defaulting to the pre defined values
    # in case they are not defined
    run_name = configuration.get("name", "Configuration File")
    scripts = configuration.get("scripts", {})
    files = configuration.get("files", {"*" : "build.bat"})
    files_v = configuration.get("verify", {})

    # retrieves the list of arguments to be sent to the
    # processes to be executed (provides configuration)
    # then creates a string with it's values
    args = options.get("args", [])
    args_s = " ".join(args)

    # resolves the "correct" file path from the provided
    # files map, this is done using the current os name
    script = resolve_file(scripts)
    file = resolve_file(files)
    file_v = resolve_file(files_v)

    # calculates the new execution directory (to be set
    # in the correct position) and then changed into it
    script_path = script and os.path.join(path, script)
    file_path = os.path.join(path, file)
    file_v_path = file_v and os.path.join(path, file_v)

    # sets the executing name as the file path resolved
    # this is the script to be executed
    name = script_path or file_path
    name_v = file_v_path

    # prints the command line information
    print("------------------------------------------------------------------------")
    print("Building '%s'..." % run_name)

    # retrieves the current timestamp and then converts
    # it into the default integer "view" note that an
    # extra precision timestamp is also created for the
    # purpose of being used as the build identifier
    timestamp = time.time()
    timestamp_s = int(timestamp)
    timestamp_p = int(timestamp * TIMESTAMP_PRECISION)
    timestamp_sp = str(timestamp_p)

    # sets the current timestamp string with precision as
    # the identifier for the current build
    build_id = timestamp_sp

    # sets the appropriate shell execution flag according
    # to the currently executing operative system
    if os.name == "nt": shell = False
    else: shell = False

    # retrieves the current working directory and then uses
    # it to (compute) the complete temporary path
    current = current or os.getcwd()
    tmp_path = os.path.join(current, "tmp")
    log_path = os.path.join(tmp_path, "automium.log")
    builds_path = os.path.join(current, "builds")
    build_path = os.path.join(builds_path, "%s" % build_id)

    # in case the current path is not absolute (must) create
    # the complete path by joining the name with the current
    # path value (complete path construction)
    if not os.path.isabs(name): name = os.path.join(current, name)
    if name_v and not os.path.isabs(name_v): name_v = os.path.join(current, name_v)

    # normalizes both the path to the "normal" script and the path
    # to the verification script (for correct visualization)
    name = name and os.path.normpath(name)
    name_v = name_v and os.path.normpath(name_v)

    # in case the script file to be executed does not exists
    # in the current path raises an exception
    if not os.path.exists(name): raise RuntimeError("Build script '%s' not found" % name)

    # in case the verify script file to be executed does not exists
    # in the current path raises an exception
    if name_v and not os.path.exists(name_v): raise RuntimeError("Verify script '%s' not found" % name_v)

    # in case the temporary path already exists must remove it to
    # avoid possible duplicated files problem and then recreates
    # the temporary path to be used in the current operation
    os.path.exists(tmp_path) and shutil.rmtree(
        tmp_path,
        ignore_errors = False,
        onerror = _remove_error
    )
    os.makedirs(tmp_path)

    # checks the current permissions on the name of the file
    # to be executed (it must contain execution permission)
    # otherwise such permission must be added
    _stat = os.stat(name)
    _mode = _stat.st_mode
    if not _mode & stat.S_IXUSR: os.chmod(name, _mode | stat.S_IXUSR)

    # tries to retrieve the value of the previous version in case it's
    # set prints the information on it
    previous = options.get("previous", None)
    if previous: print("Verifying changes from version '%s'..." % previous)

    # opens the null file to be used for the output of the verify
    # process (it's meant to be ignored)
    null_file = open(os.devnull, "wb")

    try:
        # prints information about the file that is going to be
        # executed to inform the end user
        if name_v: print("Executing '%s'..." % name_v)

        # runs the default verify operation command, this should
        # trigger the build automation process, retrieves the
        # return value that should represent the success of the
        # verification process, note that the command is only run
        # in case the name (path) exists
        process = name_v and subprocess.Popen(
            _create_args(
                name_v,
                file = file_c,
                previous = previous
            ),
            shell = shell,
            cwd = tmp_path
        ) or None
        process and process.communicate()
        return_value = process.returncode if process else 0
    finally:
        # closes the null file to avoid any leak of file descriptors
        # from the operative system
        null_file.close()

    # in case the return value from the verification process is
    # not zero must skip the build it's not required, returns the
    # function immediately with an invalid value indicating that
    # no build has occurred (skipped build)
    if not return_value == 0:
        print("Skipped current build, operation not required")
        cleanup(current = current)
        return False

    # otherwise in case the previous value was set must print a
    # message indicating the version change
    elif previous:
        print("Build has changed, must perform operation")

    # opens the file that will be used for the logging of
    # the operation
    log_file = open(log_path, "wb")

    try:
        # prints information about the file that is going to be
        # executed to inform the end user
        print("Executing '%s'..." % name)

        # runs the default build operation command, this should
        # trigger the build automation process, retrieves the
        # return value that should represent the success
        process = subprocess.Popen(
            _create_args(
                name,
                file = file_c,
                extend = args
            ),
            stdin = None,
            stdout = log_file,
            stderr = log_file,
            shell = shell,
            cwd = tmp_path
        )
        process.communicate()
        return_value = process.returncode
    finally:
        # closes the file immediately to avoid any file control
        # leaking (could cause memory leak problems)
        log_file.close()

    # in case the version file was created must read it and set
    # the version string with its value, then removes the file
    if os.path.exists(tmp_path + "/verify/VERSION"):
        version_file = open(tmp_path + "/verify/VERSION")
        try: version = version_file.read().strip()
        finally: version_file.close()
        os.remove(tmp_path + "/verify/VERSION")
    # otherwise must set the version string with the default (unset)
    # value, no version was set by the "builder"
    else:
        version = None

    # in case the log file was created must read it and set
    # the log string with its value, then removes the file
    if os.path.exists(tmp_path + "/verify/LOG"):
        log_file = open(tmp_path + "/verify/LOG")
        try: log = log_file.read().strip()
        finally: log_file.close()
        os.remove(tmp_path + "/verify/LOG")
    # otherwise must set the log string with the default (unset)
    # value, no log was set by the "builder"
    else:
        log = ""

    # starts the sequence value with an empty list and then
    # iterates over the log lines splitting the values over
    # the tab character and adds the map structure to the log
    # sequence structure
    log_s = []
    log_lines = log.split("\n")
    for log_line in log_lines:
        if not log_line: continue
        id, user, date, message = log_line.split("\t")
        log_s.append({
            "id" : id,
            "user" : user,
            "date" : date,
            "message" : message
        })

    # creates the directory(s) used for the log and then moves
    # the log file into it (final target place)
    not os.path.exists(tmp_path + "/build/log") and os.makedirs(tmp_path + "/build/log")
    shutil.move(log_path, tmp_path + "/build/log/automium.log")

    # creates the directory(s) used for the various builds and then
    # moves the resulting contents into the correct target build
    # directory for the current build, then deletes the verify
    # directory contained in the temporary path
    not os.path.exists(builds_path) and os.makedirs(builds_path)
    shutil.move(tmp_path + "/build", build_path)

    # removes the temporary directory (avoids problems with
    # leaking file from execution)
    shutil.rmtree(tmp_path, ignore_errors = False, onerror = _remove_error)

    # retrieves the (final) timestamp then converts it into the
    # default integer base value and then calculates the delta values
    timestamp_f = time.time()
    timestamp_f = int(timestamp_f)
    delta = timestamp_f - timestamp_s

    # retrieves the current date time information and
    # then formats it according to the value to be displayed
    now = datetime.datetime.now()
    now_string = now.strftime("%d/%m/%y %H:%M:%S")

    # retrieves the proper success string according to the
    # result from the batch file execution
    if return_value == 0: success = "SUCCEEDED"
    else: success = "FAILED"

    # retrieves the name of the current operative system in
    # order to put it in the description
    os_name = resolve_os()

    # retrieves the total directory size for the build, this
    # is an interesting diagnostic metric
    size = get_size(build_path)
    size_string = byte_string(size)

    # calculate the string that describes the delta time in
    # an easy to understand value
    _delta_string = delta_string(delta)

    # creates the map that describes the current build
    # to be used to output this information into a descriptive
    # json file that may be interpreted by third parties
    description = {
        "id" : build_id,
        "system" : os_name,
        "version" : version,
        "size" : size,
        "size_string" : size_string,
        "start_time" : timestamp_s,
        "end_time" : timestamp_f,
        "delta" : delta,
        "log" : log_s,
        "args" : args_s,
        "result" : return_value == 0
    }
    description_s = json.dumps(description)
    description_s = description_s.encode("utf-8")
    description_path = os.path.join(build_path, "description.json")
    description_file = open(description_path, "wb")
    try: description_file.write(description_s)
    finally: description_file.close()

    # prints the command line information and returns the control
    # to the caller method in success (build completed)
    print("Build finished and %s" % success)
    print("Files for the build stored at 'builds/%s'" % timestamp_p)
    print("Total time for build automation %s" % _delta_string)
    print("Finished build automation at %s" % now_string)
    return True

def cleanup(current = None):
    # retrieves the current working directory and then uses
    # it to (compute) the complete temporary path, then in
    # case the temporary path exists removes it
    current = current or os.getcwd()
    tmp_path = os.path.join(current, "tmp")
    os.path.exists(tmp_path) and shutil.rmtree(tmp_path, ignore_errors = False, onerror = _remove_error)

def schedule(path, configuration, options):
    # creates the scheduler object with the default
    # time and sleep functions (default behavior)
    scheduler = sched.scheduler(time.time, time.sleep)

    # tries to retrieve the recursion list from the configuration
    # in case it fails the default recursion list is used
    recursion = configuration.get("recursion", RECURSION)
    days, hours, minutes, seconds, miliseconds = recursion
    loop_time = days * 86400.0 + hours * 3600.0 + minutes * 60.0 + seconds + miliseconds / 1000.0

    # iterates continuously for the loop on the scheduler
    # this will enter the new task into it and then run
    # the next scheduler task
    while True:
        # enters the run task into the scheduler and then
        # runs it properly
        scheduler.enter(loop_time, 1, run, (configuration, options))
        scheduler.run()

def _create_args(name, file = None, previous = None, extend = []):
    args = []
    base = os.path.basename(name)
    _name, extension = os.path.splitext(base)
    if extension == ".py": args.append("python")
    if name: args.append(name)
    if file: args.append("--file=%s" % file)
    if previous: args.append("--previous=%s" % previous)
    if extend: args.extend(extend)
    return args

def _remove_error(func, path, exc):
    excvalue = exc[1]
    if func in (os.rmdir, os.remove) and excvalue.errno == errno.EACCES:
        os.chmod(path, stat.S_IRWXU | stat.S_IRWXG | stat.S_IRWXO)
        func(path)
    else:
        raise

def create(path, configuration, file_c):
    # retrieves the series of configuration values used
    # in the running, defaulting to the pre defined values
    # in case they are not defined
    name = configuration.get("name", "default")
    scripts = configuration.get("scripts", {})
    files = configuration.get("files", {})
    files_v = configuration.get("verify", {})

    # creates the name of the package file from the base name
    # described in the configuration and creates the complete
    # list of names to be written to the package file
    name_pack = name + ".atm"
    names = scripts.values() + files.values() + files_v.values()

    # prints the command line information
    print("------------------------------------------------------------------------")
    print("Packing '%s' into '%s'..." % (name, name_pack))

    # retrieves the current timestamp and then converts
    # it into the default integer "view"
    timestamp = time.time()
    timestamp_s = int(timestamp)

    # opens the "target" zip file for write operation, then
    # iterates over all the names of files and adds them into
    # the pack file, one file step is "used" to add the meta
    # build file to the root of the file
    zip = zipfile.ZipFile(name_pack, "w")
    try:
        for name in names:
            name_f = os.path.join(path, name)
            zip.write(name_f, name)
        zip.write(file_c, "build.json")
    finally:
        zip.close()

    # retrieves the (final) timestamp then converts it into the
    # default integer base value and then calculates the delta values
    timestamp_f = time.time()
    timestamp_f = int(timestamp_f)
    delta = timestamp_f - timestamp_s

    # retrieves the current date time information and
    # then formats it according to the value to be displayed
    now = datetime.datetime.now()
    now_string = now.strftime("%d/%m/%y %H:%M:%S")

    # calculate the string that describes the delta time in
    # an easy to understand value
    _delta_string = delta_string(delta)

    # prints the command line information and returns the control
    # to the caller method in success (build completed)
    print("Total time for pack operation %s" % _delta_string)
    print("Finished automation file packing at %s" % now_string)
    return True

def main():
    # sets the default path to the configuration file to be used
    # for the current automium "session"
    file_path = "build.json"

    # displays the branding information on the screen so that
    # the user gets a feel of the product
    information()

    # starts the map containing the various options to be sent
    # to the "run" procedure
    options = {}

    # sets the default variable values for the various options
    # to be received from the command line
    pack = False
    keep = False

    # retrieves the set of valid arguments for parsing and starts
    # the list that will containing the results of the filtering
    args = sys.argv[1:]
    result = []

    # iterates over all the available arguments to filter the
    # ones that comply with the defining capture rules, otherwise
    # the parsing of the options would raise an error
    for arg in args:
        args_s = [arg for arg_s in ("-c", "-k", "--pack", "--keep") if arg == arg_s]
        args_l = [arg for arg_l in ("-f:", "-p:", "--file=", "--previous=") if arg.startswith(arg_l)]
        result.extend(args_s)
        result.extend(args_l)

    # parses the various options from the command line and then
    # iterates over the map of them top set the appropriate values
    # for the variables associated with the options
    _options, _arguments = getopt.getopt(result, "ckf:p:", ["pack", "keep", "file=", "previous="])
    for option, argument in _options:
        if option in ("-c", "--pack"): pack = True
        elif option in ("-k", "--keep"): keep = True
        elif option in ("-f", "--file"): file_path = argument
        elif option in ("-p", "--previous"): options["previous"] = argument

    # verifies if the path to the configuration file that was
    # set exists in the file system in case it does not raises
    # an exception indicating the problem
    if not os.path.exists(file_path):
        raise RuntimeError("Missing build file '%s'" % file_path)

    # open the configuration file and loads the contents
    # from it assuming it's a json based file
    file = open(file_path, "rb")
    try: contents = file.read()
    finally: file.close()

    # decodes the proper contents using the default encoding
    # ands then reads them as proper json structured values
    contents = contents.decode("utf-8")
    configuration = json.loads(contents)

    # retrieves the current working directory and uses it to
    # construct the final configuration file path
    cwd = os.getcwd()
    file_path_f = os.path.join(cwd, file_path)

    # sets the arguments to be passed to the underlying processes
    # to be created as the set of arguments that were not interpreted
    # as options (and as such must be passed to the lower processes)
    options["args"] = args

    # "calculates" the base path for the execution of the various
    # scripts based on the current configuration file location
    path = os.path.dirname(file_path)

    # in case the pack flag is set creates the packed file otherwise
    # and in case the keep flag value is set starts the process in
    # schedule mode otherwise runs "just" one iteration
    if pack: create(path, configuration, file_path_f)
    elif keep: schedule(path, configuration, options)
    else: run(path, configuration, options = options, file_c = file_path_f)

def main_s():
    try: main()
    except: pass

if __name__ == "__main__":
    try: DEBUG and not main() or main_s()
    finally: cleanup()
