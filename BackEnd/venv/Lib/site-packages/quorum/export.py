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
import zipfile
import tempfile

try: import bson
except: bson = None

class ExportManager(object):

    db = None
    single = None
    multiple = None

    def __init__(self, db, single = (), multiple = ()):
        self.db = db
        self.single = single
        self.multiple = multiple

    def import_data(self, file_path):
        temporary_path = tempfile.mkdtemp()
        base_path = temporary_path
        single_path = os.path.join(base_path, "settings")

        self._deploy_zip(file_path, temporary_path)

        for name, _key in self.single:
            collection = self.db[name]
            source_path = os.path.join(single_path, "%s.json" % name)
            file = open(source_path, "rb")
            try: data = file.read()
            finally: file.close()
            self._import_single(collection, data)

        for name, _key in self.multiple:
            source_directory = os.path.join(base_path, name)
            if not os.path.exists(source_directory): continue

            collection = self.db[name]
            items = os.listdir(source_directory)
            data = []

            for item in items:
                value, _extension = os.path.splitext(item)
                source_path = os.path.join(source_directory, item)
                file = open(source_path, "rb")
                try: _data = file.read()
                finally: file.close()

                data.append((value, _data))

            self._import_multiple(collection, data)

    def export_data(self, file_path):
        temporary_path = tempfile.mkdtemp()
        base_path = temporary_path
        single_path = os.path.join(base_path, "settings")
        if not os.path.exists(single_path): os.makedirs(single_path)

        for name, key in self.single:
            collection = self.db[name]
            data = self._export_single(collection, key)
            target_path = os.path.join(single_path, "%s.json" % name)
            file = open(target_path, "wb")
            try: file.write(data)
            finally: file.close()

        for name, key in self.multiple:
            collection = self.db[name]
            data = self._export_multiple(collection, key)

            target_directory = os.path.join(base_path, name)
            if not os.path.exists(target_directory): os.makedirs(target_directory)

            for value, _data in data:
                target_path = os.path.join(target_directory, "%s.json" % value)
                file = open(target_path, "wb")
                try: file.write(_data)
                finally: file.close()

        self._create_zip(file_path, temporary_path)

    def _import_single(self, collection, data):
        data_s = json.loads(data)
        for _key, entity in data_s.items():
            collection.insert(entity)

    def _import_multiple(self, collection, data):
        for _value, _data in data:
            data_s = json.loads(_data)
            collection.insert(data_s)

    def _export_single(self, collection, key = "id"):
        entities = collection.find()
        _entities = {}
        for entity in entities:
            value = entity[key]
            _entities[value] = entity
        return json.dumps(_entities, cls = MongoEncoder)

    def _export_multiple(self, collection, key = "id"):
        entities = collection.find()
        data = []
        for entity in entities:
            value = entity[key]
            _data = json.dumps(entity, cls = MongoEncoder)
            data.append((value, _data))
        return data

    def _deploy_zip(self, zip_path, path):
        zip_file = zipfile.ZipFile(zip_path, "r")

        try: zip_file.extractall(path)
        finally: zip_file.close()

    def _create_zip(self, zip_path, path):
        zip_file = zipfile.ZipFile(
            zip_path,
            "w",
            compression = zipfile.ZIP_DEFLATED
        )

        try:
            list = os.listdir(path)
            for name in list:
                _path = os.path.join(path, name)

                if os.path.isfile(_path): zip_file.write(_path, zipfile.ZIP_DEFLATED)
                else: self.__add_to_zip(zip_file, _path, base = path)
        finally:
            zip_file.close()

    def __add_to_zip(self, zip_file, path, base = ""):
        list = os.listdir(path)
        for name in list:
            _path = os.path.join(path, name)
            _path_out = _path[len(base):]

            if os.path.isfile(_path):
                zip_file.write(
                    _path,
                    _path_out,
                    zipfile.ZIP_DEFLATED
                )
            elif os.path.isdir(_path):
                self.__add_to_zip(zip_file, _path, base = base)

class MongoEncoder(json.JSONEncoder):

    def default(self, obj, **kwargs):
        if isinstance(obj, bson.objectid.ObjectId): return str(obj)
        else: return json.JSONEncoder.default(obj, **kwargs)
