#!/usr/bin/python
# -*- coding: utf-8 -*-

# Hive Flask Quorum
# Copyright (C) 2008-2012 Hive Solutions Lda.
#
# This file is part of Hive Flask Quorum.
#
# Hive Flask Quorum is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# Hive Flask Quorum is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with Hive Flask Quorum. If not, see <http://www.gnu.org/licenses/>.

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
import sys
import time
import atexit
import signal

class Daemon:
    """
    A generic daemon class that provides the general
    daemon capabilities. In order to inherit the daemon
    capabilities override the run method.
    """

    pidfile = None
    """ The path to the file that will hold the
    pid of the created daemon """

    stdin = None
    """ The file path to the file to be used
    as the standard input of the created process """

    stdout = None
    """ The file path to the file to be used
    as the standard output of the created process """

    stderr = None
    """ The file path to the file to be used
    as the standard error of the created process """

    def __init__(self, pid_file, stdin = "/dev/null", stdout = "/dev/null", stderr = "/dev/null"):
        """
        Constructor of the class.

        @type pidfile: String
        @param pidfile: The path to the pid file.
        @type stdin: String
        @param stdin: The file path to the file to be used
        as the standard input of the created process.
        @type stdout: String
        @param stdout: The file path to the file to be used
        as the standard output of the created process.
        @type stderr: String
        @param stderr: The file path to the file to be used
        as the standard error of the created process.
        """

        self.pidfile = pid_file
        self.stdin = stdin
        self.stdout = stdout
        self.stderr = stderr

    def daemonize(self, register = True):
        """
        Do the UNIX double-fork magic, see Stevens "Advanced
        Programming in the UNIX Environment" for details (ISBN 0201563177).

        This is considered the main method for the execution
        of the daemon strategy.

        @type register: bool
        @param register: If a cleanup function should be register for
        the at exit operation.
        @see: http://www.erlenstar.demon.co.uk/unix/faq_2.html#SEC16
        """

        try:
            pid = os.fork() #@UndefinedVariable
            if pid > 0: sys.exit(0)
        except OSError, error:
            sys.stderr.write(
                "first fork failed: %d (%s)\n" % (error.errno, error.strerror)
            )
            sys.exit(1)

        # decouples the current process from parent environment
        # should create a new group of execution
        os.chdir("/")
        os.setsid() #@UndefinedVariable
        os.umask(0)

        try:
            # runs the second for and then exits from
            # the "second" parent process
            pid = os.fork() #@UndefinedVariable
            if pid > 0:  sys.exit(0)
        except OSError, error:
            sys.stderr.write(
                "second fork failed: %d (%s)\n" % (error.errno, error.strerror)
            )
            sys.exit(1)

        # redirect standard file descriptors
        sys.stdout.flush()
        sys.stderr.flush()
        si = file(self.stdin, "r")
        so = file(self.stdout, "a+")
        se = file(self.stderr, "a+", 0)
        os.dup2(si.fileno(), sys.stdin.fileno())
        os.dup2(so.fileno(), sys.stdout.fileno())
        os.dup2(se.fileno(), sys.stderr.fileno())

        # write pidfile, updating the data in it
        # this should mark the process as running
        register and atexit.register(self.cleanup)
        register and signal.signal(signal.SIGTERM, self.cleanup_s)
        pid = str(os.getpid())
        file(self.pidfile, "w+").write("%s\n" % pid)

    def start(self, register = True):
        try:
            # checks for a pidfile to check if the daemon
            # already runs, in such case retrieves the pid
            # of the executing daemon
            pid_file = file(self.pidfile, "r")
            pid_contents = pid_file.read().strip()
            pid = int(pid_contents)
            pid_file.close()
        except IOError:
            pid = None

        # in case the pid value is loaded, prints an error
        # message to the standard error and exists the current
        # process (avoids duplicated running)
        if pid:
            message = "pidfile %s already exists, daemon already running ?\n"
            sys.stderr.write(message % self.pidfile)
            sys.exit(1)

        # daemonizes the current process and then starts
        # the daemon structures (runs the process)
        self.daemonize(register = register)
        self.run()

    def stop(self):
        try:
            # checks for a pidfile to check if the daemon
            # already runs, in such case retrieves the pid
            # of the executing daemon
            pid_file = file(self.pidfile, "r")
            pid_contents = pid_file.read().strip()
            pid = int(pid_contents)
            pid_file.close()
        except IOError:
            pid = None

        if not pid:
            message = "pidfile %s does not exist, daemon not running ?\n"
            sys.stderr.write(message % self.pidfile)
            return

        try:
            while True:
                os.kill(pid, signal.SIGTERM) #@UndefinedVariable
                time.sleep(0.1)
        except OSError, error:
            error = str(error)
            if error.find("No such process") > 0:
                pid_exists = os.path.exists(self.pidfile)
                pid_exists and os.remove(self.pidfile)
            else:
                sys.exit(1)

    def restart(self):
        """
        Restarts the daemon process stopping it and
        then starting it "again".
        """

        self.stop()
        self.start()

    def cleanup(self):
        """
        Performs a cleanup operation in the current daemon
        releasing all the structures locked by it.
        """

        self.delete_pid()

    def cleanup_s(self, signum, frame):
        """
        Cleanup handler for the signal handler, this handler
        takes extra arguments required by the signal handler
        caller.

        @type signum: int
        @param signum: The identifier of the signal that has
        just been raised.
        @type frame: Object
        @param frame: The object containing the current program
        frame at the time of the signal raise.
        """

        self.cleanup()

    def delete_pid(self):
        """
        Removes the current pid file in case it exists in the
        current file system.

        No error will be raised in case no pid file exists.
        """

        pid_exists = os.path.exists(self.pidfile)
        pid_exists and os.remove(self.pidfile)

    def run(self):
        """
        You should override this method when you subclass
        daemon. It will be called after the process has been
        daemonized by start or restart methods.
        """

        pass
