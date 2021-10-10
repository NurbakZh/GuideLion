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

import sys
import time
import heapq
import threading

SLEEP_TIME = 0.5
""" The amount of time to sleep between iteration
this amount should be small enough to provide some
resolution level to the schedule execution """

background = None
""" The background execution task to be started by
the quorum execution system (global value) """

class ExecutionThread(threading.Thread):
    """
    The thread to be used in the execution of "random"
    "callables" for a provided time, this thread contains
    a series of thread safe method for operating over
    the work tuples.
    """

    run_flag = True
    """ The flag that controls the running operations
    of the execution thread, once this value is unset
    the thread is exited """

    work_list = []
    """ The list containing the various work descriptors
    for the work to be done, this work is going to be
    run in a single thread (in sequence) """

    work_lock = None
    """ The lock that control the access to the list of
    work to be executed """

    def __init__(self):
        """
        Constructor of the class.
        """

        threading.Thread.__init__(self)

        self.daemon = True
        self.work_list = []
        self.work_lock = threading.RLock()

    def run(self):
        # iterates continuously (executing work)
        # while the run flag is set
        while self.run_flag:
            # creates a list list that will would the
            # work tuples to be executed (this way the
            # lock problem is avoided)
            execution_list = []

            # acquires the lock to access the list
            # of work and execute it
            self.work_lock.acquire()

            # retrieves the current time, this variable
            # is going to be used to check if the work in
            # iteration should be run or not
            current_time = time.time()

            try:
                # iterates continuously to execute all the
                # work that can be executed in the work list
                while True:
                    # in case there is no work pending to be
                    # executed must exist immediately
                    if not self.work_list: break

                    # retrieves the current work tuple to
                    # be used and executes it in case the
                    # time has passed
                    _time, callable = self.work_list[0]
                    if _time < current_time: execution_list.append(callable); heapq.heappop(self.work_list)
                    else: break
            finally:
                # releases the work lock providing access
                # to the work list
                self.work_lock.release()

            # iterates over all the "callables" in the execution
            # list to execute their operations
            for callable in execution_list:
                # executes the "callable" and log the error in case the
                # execution fails (must be done to log the error)
                try: callable()
                except BaseException, exception:
                    print sys.stderr.write(str(exception) + "\n")

            # sleeps for a while so that the process may
            # released for different tasks
            time.sleep(SLEEP_TIME)

    def stop(self):
        self.run_flag = False

    def insert_work(self, target_time, callable):
        work = (target_time, callable)
        self.work_lock.acquire()
        try: heapq.heappush(self.work_list, work)
        finally: self.work_lock.release()

def insert_work(target_time, callable):
    background.insert_work(target_time, callable)
