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

import acl
import base
import config
import daemon
import error
import exceptions
import execution
import export
import extras
import jsonf
import mail
import model
import mongodb
import redisdb
import request
import session
import typesf
import util
import validation

from acl import *
from base import *
from config import *
from daemon import *
from error import *
from exceptions import *
from execution import *
from jsonf import *
from mail import *
from model import *
from typesf import *
from util import *
from validation import *

from mongodb import get_connection as get_mongo
from mongodb import get_db as get_mongo_db
from mongodb import drop_db as drop_mongo_db
from mongodb import dumps as dumps_mongo
from redisdb import get_connection as get_redis
from redisdb import dumps as dumps_redis
