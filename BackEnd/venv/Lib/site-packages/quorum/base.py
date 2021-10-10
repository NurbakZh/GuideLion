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
import json
import atexit
import logging
import inspect

import mail
import model
import config
import session
import redisdb
import mongodb
import request
import execution

APP = None
""" The reference to the top level application
that is being handled by quorum """

BASE_VALUES= (
    "DEBUG"
    "REDISTOGO_URL",
    "MONGOHQ_URL",
    "SMTP_HOST",
    "SMTP_USER",
    "SMTP_PASSWORD"
)

def load(app, execution = True, redis_session = False, mongo_database = None, name = None, models = None):
    global APP

    load_all()
    debug = config.conf("DEBUG", False)
    redis_url = config.conf("REDISTOGO_URL", None)
    mongo_url = config.conf("MONGOHQ_URL", None)
    smtp_host = config.conf("SMTP_HOST", None)
    smtp_user = config.conf("SMTP_USER", None)
    smtp_password = config.conf("SMTP_PASSWORD", None)

    if not debug and name: start_log(app, name)
    if redis_url: redisdb.url = redis_url
    if mongo_url: mongodb.url = mongo_url
    if smtp_host: mail.SMTP_HOST = smtp_host
    if smtp_user: mail.SMTP_USER = smtp_user
    if smtp_password: mail.SMTP_PASSWORD = smtp_password
    if execution: start_execution()
    if redis_session: app.session_interface = session.RedisSessionInterface(url = redis_url)
    if mongo_database: mongodb.database = mongo_database
    if models: setup_models(models)
    app.request_class = request.Request
    APP = app

def load_all():
    load_config(3)
    load_base()

def load_config(offset = 1):
    element = inspect.stack()[offset]
    module = inspect.getmodule(element[0])
    base_folder = os.path.dirname(module.__file__)
    config_path = os.path.join(base_folder, "quorum.json")

    if not os.path.exists(config_path): return
    config_file = open(config_path, "rb")
    try: config.config_g = json.load(config_file)
    finally: config_file.close()

def load_base():
    for name in BASE_VALUES:
        value = os.getenv(name, None)
        if not value: continue
        config.config_g[name] = value

def start_log(app, name):
    if os.name == "nt": path_t = "%s"
    else: path_t = "/var/log/%s"
    path = path_t % name
    file_handler = logging.FileHandler(path)
    file_handler.setLevel(logging.WARNING)
    app.logger.addHandler(file_handler)

def start_execution():
    # creates the thread that it's going to be used to
    # execute the various background tasks and starts
    # it, providing the mechanism for execution
    execution.background = execution.ExecutionThread()
    execution.background.start()

@atexit.register
def stop_execution():
    # stop the execution thread so that it's possible to
    # the process to return the calling
    execution.background and execution.background.stop()

def setup_models(models):
    for _name, value in models.__dict__.items():
        try: is_valid = issubclass(value, model.Model)
        except: is_valid = False
        if not is_valid: continue
        value.setup()

def base_path(*args, **kwargs):
    return os.path.join(APP.root_path, *args)
