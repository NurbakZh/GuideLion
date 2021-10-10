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

import uuid
import flask
import pickle
import datetime

import werkzeug.datastructures

import redisdb

class RedisSession(werkzeug.datastructures.CallbackDict, flask.sessions.SessionMixin):

    def __init__(self, initial = None, sid = None, new = False):
        def on_update(self): self.modified = True
        werkzeug.datastructures.CallbackDict.__init__(self, initial, on_update)

        self.sid = sid
        self.new = new
        self.modified = False

class RedisSessionInterface(flask.sessions.SessionInterface):

    serializer = pickle
    """ The serializer to be used for the values
    contained in the session (used on top of the class) """

    session_class = RedisSession
    """ The class to be used to encapsulate a session
    the generated object will be serialized """

    def __init__(self, _redis = None, prefix = "session:", url = None):
        if _redis == None: _redis = redisdb._get_connection(url)

        self.redis = _redis
        self.prefix = prefix

    def generate_sid(self):
        return str(uuid.uuid4())

    def get_redis_expiration_time(self, app, session):
        if session.permanent: return app.permanent_session_lifetime
        return datetime.timedelta(days = 1)

    def get_seconds(self, delta):
        return (delta.microseconds + (delta.seconds + delta.days * 24 * 3600) * 10 ** 6) / 10 ** 6

    def open_session(self, app, request):
        # tries to retrieve the session identifier from the
        # application cookie (or from parameters) in case
        # none is found generates a new one using the default
        # strategy and returns a new session object with that
        # session identifier
        sid = request.args.get("sid", request.args.get("session_id"))
        sid = sid or request.form.get("sid", request.form.get("session_id"))
        sid = sid or request.cookies.get(app.session_cookie_name)
        if not sid:
            sid = self.generate_sid()
            return self.session_class(sid = sid)

        # tries to retrieve the session value from redis in
        # case the values is successfully found loads it using
        # the serializer and returns the session object
        value = self.redis.get(self.prefix + sid)
        if not value == None:
            data = self.serializer.loads(value)
            return self.session_class(data, sid = sid)

        # returns a new session object with an already existing
        # session identifier, but not found in data source (redis)
        return self.session_class(sid = sid, new = True)

    def save_session(self, app, session, response):
        # retrieves the domain associated with the cookie to
        # be able to correctly modify it
        domain = self.get_cookie_domain(app)

        if not session:
            self.redis.delete(self.prefix + session.sid)
            if session.modified: response.delete_cookie(
                app.session_cookie_name,
                domain = domain
            )
            return

        redis_expire = self.get_redis_expiration_time(app, session)
        cookie_expire = self.get_expiration_time(app, session)
        value = self.serializer.dumps(dict(session))
        total_seconds = self.get_seconds(redis_expire)
        self.redis.setex(
            self.prefix + session.sid,
            value,
            int(total_seconds)
        )

        response.set_cookie(
            app.session_cookie_name,
            session.sid,
            expires = cookie_expire,
            httponly = True,
            domain = domain
        )
