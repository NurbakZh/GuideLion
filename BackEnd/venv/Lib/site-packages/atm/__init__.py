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

from . import base
from . import exceptions
from . import hash
from . import pack
from . import repo
from . import static
from . import test

from . import build as _build
from . import environ as _environ
from . import load as _load

from .base import build, cleanup, parse_args, load, create_paths, move, copy, remove,\
    conf, conf_s, path, assert_c
from .build import autogen, configure, make, msbuild, pysdist, ensure_dev
from .environ import environ_s, environ
from .exceptions import AutomiumException
from .hash import Hash, hash_d
from .load import download
from .pack import compress, deb, capsule, colony, zip, tar
from .repo import git, git_v
from .static import DEB_CONTROL
from .test import pytest
