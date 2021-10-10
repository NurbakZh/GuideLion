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

import exceptions

def errors_json(function):
    @functools.wraps(function)
    def interceptor(*args, **kwargs):
        try:
            return function(*args, **kwargs)
        except exceptions.ValidationError, error:
            invalid_m = {}
            for name, _errors in error.errors.items():
                invalid_m[name] = _errors[0]

            return flask.Response(
                json.dumps({
                    "error" : error.message,
                    "invalid" : invalid_m,
                    "exception" : {
                        "message" : error.message,
                        "errors" : error.errors
                    }
                }),
                status = error.code,
                mimetype = "application/json"
            )
        except exceptions.OperationalError, error:
            return flask.Response(
                json.dumps({
                    "error" : error.message,
                    "exception" : {
                        "message" : error.message
                    }
                }),
                status = error.code,
                mimetype = "application/json"
            )

    return interceptor
