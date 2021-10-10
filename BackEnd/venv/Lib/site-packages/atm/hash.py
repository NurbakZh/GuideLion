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
import legacy
import hashlib

BUFFER_SIZE = 4096
""" The size of the buffer to be used when reading
from the file, should match a normal disk block """

RESUME_FILES = {
    "md5" : "MD5SUMS",
    "sha256" : "SHA256SUMS"
}
""" The map associating the hash type with the name
of the resume file to be used """

class Hash:
    """
    Class that handles the hashing abstraction for
    a series of hashes and a given file.
    """

    def __init__(self, file_path, types):
        self.file_path = file_path
        self.types = types
        self.hashes = {}

        self._create()

    def update(self, data):
        for type in self.types:
            hash = self.hashes[type]
            hash.update(data)

    def dump_file(self):
        # iterates over all the type of hash files
        # to dump the file contents for the file
        # associated with the hash type
        for type in self.types:
            # retrieves the hash for the current type in iteration
            # and uses it to compute the hexadecimal digest
            hash = self.hashes[type]
            digest = hash.hexdigest()

            # retrieves the "base" file name for the current file
            # path associated with the hash
            name = os.path.basename(self.file_path)

            # tries to retrieve the method to be used to retrieve the
            # format string for the current type and then calls it with
            # the current digest and name values
            method = getattr(self, "_" + type + "_format")
            format = method(digest, name)
            format = legacy.bytes(format)

            # opens the hash file for write purposes and then writes
            # the resulting format string into it closing the file
            # afterwards (to avoid memory leaks)
            file = open(self.file_path + "." + type, "wb")
            try: file.write(format + b"\n")
            finally: file.close()

    def formats(self):
        _formats = {}

        # iterates over all the type of hash files
        # to dump the file contents for the file
        # associated with the hash type
        for type in self.types:
            # retrieves the hash for the current type in iteration
            # and uses it to compute the hexadecimal digest
            hash = self.hashes[type]
            digest = hash.hexdigest()

            # retrieves the "base" file name for the current file
            # path associated with the hash
            name = os.path.basename(self.file_path)

            # tries to retrieve the method to be used to retrieve the
            # format string for the current type and then calls it with
            # the current digest and name values
            method = getattr(self, "_" + type + "_format")
            format = method(digest, name)

            _formats[type] = format

        return _formats

    def _md5_format(self, digest, name):
        return "%s *%s" % (digest, name)

    def _sha256_format(self, digest, name):
        return "%s *%s" % (digest, name)

    def _create(self):
        for type in self.types:
            hash = hashlib.new(type)
            self.hashes[type] = hash

def hash_d(path = None, types = ("md5", "sha256")):
    """
    Computes the various hash values for the provided
    directory, the names of the generated files should
    conform with the base name for the file.

    In case no path is provided the current working directory
    is used instead.

    @type path: String
    @param path: The path to the directory for which the
    hash values will be computed.
    @type types: Tuple
    @param types: The various types of hash digests to be
    generated for the various files in the directory.
    """

    # sets the default value for the path as the current
    # working directory (allows default operations)
    path = path or os.getcwd()

    # in case the provided path does not represents a valid
    # directory path (not possible to hash values) must raise
    # an exception indicating the problem
    if not os.path.isdir(path):
        raise RuntimeError("Invalid directory path '%s'" % path)

    # creates the map to be used to hold the various digest
    # values for the various types of hashes
    digests = {}

    # retrieves the various entries for the provided
    # directory path and iterates over them to create
    # the various hash value for them
    entries = os.listdir(path)
    for entry in entries:
        # constructs the complete path to the file to
        # be hashes and then opens it for reading
        file_path = os.path.join(path, entry)
        file = open(file_path, "rb")

        # creates the hash structure for the current file
        # and for the "selected" hash types
        hashes = Hash(file_path, types)

        try:
            # iterates continuously in order to be able to
            # read the complete data contents from the file
            # and update the hash accordingly
            while True:
                data = file.read(BUFFER_SIZE)
                if not data: break
                hashes.update(data)
        finally:
            # closes the file as it's not going to be used
            # anymore (avoids descriptor leaks)
            file.close()

        # dumps the file for the hashes structure (should
        # create the various files) and then stores the hashes
        # structure in the digest structure
        hashes.dump_file()
        digests[file_path] = hashes

    # creates the map that will hold the various resume files
    # to be used for each of the hash types, then iterates over
    # the complete set of hash types to create them
    files = {}
    for type in types:
        # tries to retrieve the name of the resume file for the
        # current hash type in iteration in case it's not fond
        # raises an exception indicating the invalid hash type
        resume_name = RESUME_FILES.get(type, None)
        if resume_name == None:
            raise RuntimeError("Invalid hash type '%s'" % type)

        # creates the full path to the resume file and opens it
        # for writing in binary form and sets it in the map
        file_path = os.path.join(path, resume_name)
        file = open(file_path, "wb")
        files[type] = file

    # iterates over all the hash elements in the digests map
    # and retrieves the various formats for the items flushing
    # them into the appropriate resume files
    for _file_path, hashes in digests.items():
        formats = hashes.formats()
        for type, format in formats.items():
            file = files[type]
            format = legacy.bytes(format)
            file.write(format + b"\n")

    # iterates over all the resume files to close them in order
    # to avoid any memory leak
    for type, file in files.items(): file.close()
