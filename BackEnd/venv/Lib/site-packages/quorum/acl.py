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

import json
import flask
import functools

def check_basic_auth(username, password):
    authorization = flask.request.authorization
    if not authorization: return False
    if not authorization.username == username: return False
    if not authorization.password == password: return False
    return True

def check_login(token):
    if "username" in flask.session and not token: return True
    if "*" in flask.session.get("tokens", []): return True
    if token in flask.session.get("tokens", []): return True
    return False

def ensure_basic_auth(username, password, json_s = False):
    check = check_basic_auth(username, password)
    if check: return

    if json_s: return flask.Response(
            json.dumps({
                "exception" : {
                    "message" : "Unauthorized for operation"
                }
            }),
            status = 401,
            mimetype = "application/json"
        )
    else:
        return flask.redirect(
            flask.url_for("login")
        )

def ensure_login(token = None, json_s = False):
    if check_login(token): return None

    if json_s:
        return flask.Response(
            json.dumps({
                "exception" : {
                    "message" : "Not enough permissions for operation"
                }
            }),
            status = 403,
            mimetype = "application/json"
        )
    else:
        return flask.redirect(
            flask.url_for("login")
        )

def ensure_user(username):
    _username = flask.session.get("username", None)
    if not _username == None and username == _username: return
    raise RuntimeError("Permission denied")

def ensure_session(object):
    if object.get("sesion_id", None) == flask.session.get("session_id", None): return
    raise RuntimeError("Permission denied")

def ensure(token = None, json = False):

    def decorator(function):
        @functools.wraps(function)
        def interceptor(*args, **kwargs):
            ensure = ensure_login(token, json)
            if ensure: return ensure
            return function(*args, **kwargs)

        return interceptor

    return decorator

def ensure_auth(username, password, json = False):

    def decorator(function):
        @functools.wraps(function)
        def interceptor(*args, **kwargs):
            ensure = ensure_basic_auth(username, password, json)
            if ensure: return ensure
            return function(*args, **kwargs)

        return interceptor

    return decorator
