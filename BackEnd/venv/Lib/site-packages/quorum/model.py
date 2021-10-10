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

import copy

import util
import types
import mongodb
import validation
import exceptions

TYPE_DEFAULTS = {
    str : "",
    int : 0,
    float : 0.0
}
""" The default values to be set when a type
conversion fails for the provided string value """

class Model(object):

    def __init__(self, model = None):
        self.__dict__["model"] = model or {}

    def __getattribute__(self, name):
        try:
            model = object.__getattribute__(self, "model")
            if name in model: return model[name]
        except AttributeError: pass
        cls = object.__getattribute__(self, "__class__")
        definition = cls.definition()
        if name in definition: raise AttributeError(
            "attribute '%s' is not set" % name
        )
        return object.__getattribute__(self, name)

    def __setattr__(self, name, value):
        is_base = name in self.__dict__
        if is_base: self.__dict__[name] = value
        else: self.model[name] = value

    def __delattr__(self, name):
        try:
            model = object.__getattribute__(self, "model")
            if name in model: del model[name]
        except AttributeError: pass

    @classmethod
    def new(cls, model = None, safe = True, build = False):
        instance = cls()
        instance.apply(model, safe_a = safe)
        build and cls.build(instance.model, False)
        return instance

    @classmethod
    def get(cls, *args, **kwargs):
        map, build, skip, limit, sort, raise_e = cls._get_attrs(kwargs, (
            ("map", False),
            ("build", True),
            ("skip", 0),
            ("limit", 0),
            ("sort", None),
            ("raise_e", True)
        ))

        collection = cls._collection()
        model = collection.find_one(
            kwargs, skip = skip, limit = limit, sort = sort
        )
        if not model and raise_e: raise RuntimeError("%s not found" % cls.__name__)
        if not model and not raise_e: return model
        cls.types(model)
        build and cls.build(model, map)
        return cls.types(model) if map else cls.new(model = model, safe = False)

    @classmethod
    def find(cls, *args, **kwargs):
        map, build, skip, limit, sort = cls._get_attrs(kwargs, (
            ("map", False),
            ("build", True),
            ("skip", 0),
            ("limit", 0),
            ("sort", None)
        ))

        collection = cls._collection()
        models = [cls.types(model) for model in collection.find(
            kwargs, skip = skip, limit = limit, sort = sort
        )]
        build and [cls.build(model, map) for model in models]
        models = models if map else [cls.new(model = model, safe = False) for model in models]
        return models

    @classmethod
    def delete_c(cls, *args, **kwargs):
        collection = cls._collection()
        collection.remove(kwargs)

    @classmethod
    def definition(cls):
        # in case the definition are already "cached" in the current
        # class (fast retrieval) returns immediately
        if "_definition" in cls.__dict__: return cls._definition

        # creates the map that will hold the complete definition of
        # the current model
        definition = {}

        # retrieves the complete model hierarchy for the current model
        # this should allow the method to retrieve the complete set
        # of fields for the current model
        hierarchy = cls.hierarchy()

        # iterates over all the classes in the hierarchy to creates the
        # map that will contain the various names of the current model
        # associated with its definition map
        for _cls in hierarchy:
            for name, value in _cls.__dict__.items():
                if name.startswith("_"): continue
                if not type(value) == types.DictionaryType: continue
                definition[name] = value

        # sets the "default" definition for the based identifier
        # (underlying identifier attribute)
        definition["_id"] = dict()

        # saves the currently generated definition under the current
        # class and then returns the contents of it to the caller method
        cls._definition = definition
        return definition

    @classmethod
    def definition_n(cls, name):
        definition = cls.definition()
        return definition.get(name, {})

    @classmethod
    def setup(cls):
        indexes = cls.indexes()
        collection = cls._collection()
        for index in indexes: collection.ensure_index(index)

    @classmethod
    def validate(cls):
        return []

    @classmethod
    def validate_new(cls):
        return cls.validate()

    @classmethod
    def build(cls, model, map = False):
        cls.rules(model, map)
        cls._build(model, map)

    @classmethod
    def rules(cls, model, map):
        for name, _value in model.items():
            definition = cls.definition_n(name)
            is_private = definition.get("private", False)
            if not is_private: continue
            del model[name]

    @classmethod
    def types(cls, model):
        for name, value in model.items():
            if name == "_id": continue
            if value == None: continue
            definition = cls.definition_n(name)
            _type = definition.get("type", str)
            try: model[name] = _type(value) if _type else value
            except: model[name] = TYPE_DEFAULTS.get(_type, None)

        return model

    @classmethod
    def all_parents(cls):
        # in case the all parents are already "cached" in the current
        # class (fast retrieval) returns immediately
        if "_all_parents" in cls.__dict__: return cls._all_parents

        # creates the list to hold the various parent
        # entity classes, populated recursively
        all_parents = []

        # retrieves the parent entity classes from
        # the current class
        parents = cls._bases()

        # iterates over all the parents to extend
        # the all parents list with the parent entities
        # from the parent
        for parent in parents:
            # retrieves the (all) parents from the parents
            # and extends the all parents list with them,
            # this extension method avoids duplicates
            _parents = parent.all_parents()
            all_parents += _parents

        # extends the all parents list with the parents
        # from the current entity class (avoids duplicates)
        all_parents += parents

        # caches the all parents element in the class
        # to provide fast access in latter access
        cls._all_parents = all_parents

        # returns the list that contains all the parents
        # entity classes
        return all_parents

    @classmethod
    def hierarchy(cls):
        # in case the hierarchy are already "cached" in the current
        # class (fast retrieval) returns immediately
        if "_hierarchy" in cls.__dict__: return cls._hierarchy

        # retrieves the complete set of parents for the current class
        # and then adds the current class to it
        all_parents = cls.all_parents()
        hierarchy = all_parents + [cls]

        # saves the current hierarchy list under the class and then
        # returns the sequence to the caller method
        cls._hierarchy = hierarchy
        return hierarchy

    @classmethod
    def increments(cls):
        # in case the increments are already "cached" in the current
        # class (fast retrieval) returns immediately
        if "_increments" in cls.__dict__: return cls._increments

        # creates the list that will hold the various names that are
        # meant to be automatically incremented
        increments = []

        # retrieves the map containing the definition of the class with
        # the name of the fields associated with their definition
        definition = cls.definition()

        # iterate over all the names in the definition to retrieve their
        # definition and check if their are of type increment
        for name in definition:
            _definition = cls.definition_n(name)
            is_increment = _definition.get("increment", False)
            if not is_increment: continue
            increments.append(name)

        # saves the increment list under the class and then
        # returns the sequence to the caller method
        cls._increments = increments
        return increments

    @classmethod
    def indexes(cls):
        # in case the indexes are already "cached" in the current
        # class (fast retrieval) returns immediately
        if "_indexes" in cls.__dict__: return cls._indexes

        # creates the list that will hold the various names that are
        # meant to be indexed in the data source
        indexes = []

        # retrieves the map containing the definition of the class with
        # the name of the fields associated with their definition
        definition = cls.definition()

        # iterate over all the names in the definition to retrieve their
        # definition and check if their are of type index
        for name in definition:
            _definition = cls.definition_n(name)
            is_index = _definition.get("index", False)
            if not is_index: continue
            indexes.append(name)

        # saves the index list under the class and then
        # returns the sequence to the caller method
        cls._indexes = indexes
        return indexes

    @classmethod
    def safes(cls):
        # in case the safes are already "cached" in the current
        # class (fast retrieval) returns immediately
        if "_safes" in cls.__dict__: return cls._safes

        # creates the list that will hold the various names that are
        # meant to be safe values in the data source
        safes = []

        # retrieves the map containing the definition of the class with
        # the name of the fields associated with their definition
        definition = cls.definition()

        # iterate over all the names in the definition to retrieve their
        # definition and check if their are of type safe
        for name in definition:
            _definition = cls.definition_n(name)
            is_safe = _definition.get("safe", False)
            if not is_safe: continue
            safes.append(name)

        # saves the safes list under the class and then
        # returns the sequence to the caller method
        cls._safes = safes
        return safes

    @classmethod
    def _build(cls, model, map):
        pass

    @classmethod
    def _collection(cls):
        name = cls._name()
        db = mongodb.get_db()
        collection = db[name]
        return collection

    @classmethod
    def _name(cls):
        # retrieves the class object for the current instance and then
        # converts it into lower case value in order to serve as the
        # name of the collection to be used
        name = cls.__name__.lower()
        return name

    @classmethod
    def _get_attrs(cls, kwargs, attrs):
        _attrs = []

        for attr, value in attrs:
            if not attr in kwargs:
                _attrs.append(value)
                continue

            value = kwargs[attr]
            del kwargs[attr]
            _attrs.append(value)

        return _attrs

    @classmethod
    def _bases(cls):
        """
        Retrieves the complete set of base (parent) classes for
        the current class, this method is safe as it removes any
        class that does not inherit from the entity class.

        @rtype: List/Tuple
        @return: The set containing the various bases classes for
        the current class that are considered valid.
        """

        # retrieves the complete set of base classes for
        # the current class and in case the object is not
        # the bases set returns the set immediately
        bases = cls.__bases__
        if not object in bases: return bases

        # converts the base classes into a list and removes
        # the object class from it, then returns the new bases
        # list (without the object class)
        bases = list(bases)
        bases.remove(object)
        return bases

    @classmethod
    def _increment(cls, name):
        _name = cls._name() + ":" + name
        db = mongodb.get_db()
        value = db.counters.find_and_modify(
            query = {
                "_id" : _name
            },
            update = {
                "$inc" : {
                    "seq" : 1
                }
            },
            upsert = True
        )
        value = value or db.counters.find_one({
            "_id" : _name
        })
        return value["seq"]

    def val(self, name, default = None):
        return self.model.get(name, default)

    def build_m(self, model = None):
        """
        Builds the currently defined model, this should run
        additional computation for the current model creating
        new (calculated) attributes and deleting other.

        This method should me used carefully to avoid validation
        problems and other side effects.

        @type model: Map
        @param model: The model map to be used for the build
        operation in case none is specified the currently set
        model is used instead.
        """

        cls = self.__class__
        model = model or self.model
        cls.build(self.model)

    def apply(self, model = None, safe = None, safe_a = True):
        # calls the complete set of event handlers for the current
        # apply operation, this should trigger changes in the model
        self.pre_apply()

        # retrieves the reference to the class associated
        # with the current instance
        cls = self.__class__

        # creates the base safe map from the provided map or
        # builds a new map that will hold these values
        safe = safe or {}

        # verifies if the base safe rules should be applied
        # to the current map of safe attributes
        if safe_a:
            safes = cls.safes()
            for _safe in safes:
                safe[_safe] = True

        model = model or util.get_object()
        for name, value in model.items():
            is_safe = safe.get(name, False)
            if is_safe: continue
            self.model[name] = value
        cls = self.__class__
        cls.types(self.model)

        # calls the complete set of event handlers for the current
        # apply operation, this should trigger changes in the model
        self.post_apply()

    def copy(self, build = False):
        cls = self.__class__
        _copy = copy.deepcopy(self)
        build and cls.build(_copy.model, False)
        return _copy

    def is_new(self):
        return not "_id" in self.model

    def save(self, validate = True):
        # checks if the instance to be saved is a new instance
        # or if this is an update operation
        is_new = self.is_new()

        # runs the validation process in the current model, this
        # should ensure that the model is ready to be saved in the
        # data source, without corruption of it, only run this process
        # in case the validate flag is correctly set
        validate and self._validate()

        # calls the complete set of event handlers for the current
        # save operation, this should trigger changes in the model
        self.pre_save()
        is_new and self.pre_create()
        not is_new and self.pre_update()

        # filters the values that are present in the current
        # model so that only those are stored in
        model = self._filter()

        # in case the current model is not new must create a new
        # model instance and remove the main identifier from it
        if not is_new: _model = copy.copy(model); del _model["_id"]

        # retrieves the reference to the store object to be used and
        # uses it to store the current model data
        store = self._get_store()
        if is_new: self._id = store.insert(model); self.apply(model)
        else: store.update({"_id" : model["_id"]}, {"$set" : _model})

        # calls the post save event handlers in order to be able to
        # execute appropriate post operations
        self.post_save()
        is_new and self.post_create()
        not is_new and self.post_update()

    def delete(self):
        # calls the complete set of event handlers for the current
        # delete operation, this should trigger changes in the model
        self.pre_delete()

        # retrieves the reference to the store object to be able to
        # execute the removal command for the current model
        store = self._get_store()
        store.remove({"_id" : self._id})

        # calls the underlying delete handler that may be used to extend
        # the default delete functionality
        self._delete()

        # calls the complete set of event handlers for the current
        # delete operation, this should trigger changes in the model
        self.post_delete()

    def reload(self):
        is_new = self.is_new()
        if is_new: raise RuntimeError("Can't reload a new model entity")
        cls = self.__class__
        return cls.get(_id = self._id)

    def map(self):
        model = self._filter()
        return model

    def dumps(self):
        return mongodb.dumps(self.model)

    def pre_validate(self):
        pass

    def pre_save(self):
        pass

    def pre_create(self):
        pass

    def pre_update(self):
        pass

    def pre_delete(self):
        pass

    def post_validate(self):
        pass

    def post_save(self):
        pass

    def post_create(self):
        pass

    def post_update(self):
        pass

    def post_delete(self):
        pass

    def pre_apply(self):
        pass

    def post_apply(self):
        pass

    def _get_store(self):
        return self.__class__._collection()

    def _delete(self):
        pass

    def _validate(self, model = None):
        # calls the event handler for the validation process this
        # should setup the operations for a correct validation
        self.pre_validate()

        # starts the model reference with the current model in
        # case none is defined
        model = model or self.model

        # retrieves the class associated with the current instance
        # to be able to retrieve the correct validate methods
        cls = self.__class__

        # checks if the current model is new (create operation)
        # and sets the proper validation methods retrieval method
        is_new = self.is_new()
        if is_new: method = cls.validate_new
        else: method = cls.validate

        # runs the validation process on the various arguments
        # provided to the account and in case an error is returned
        # raises a validation error to the upper layers
        errors, object = validation.validate(
            method,
            object = model,
            build = False
        )
        if errors: raise exceptions.ValidationError(errors, object)

        # calls the event handler for the validation process this
        # should finish the operations from a correct validation
        self.post_validate()

    def _filter(self):
        # creates the model that will hold the "filtered" model
        # with all the items that conform with the class specification
        model = {}

        # retrieves the class associated with the current instance
        # to be able to retrieve the correct definition methods
        cls = self.__class__

        # retrieves the (schema) definition for the current model
        # to be "filtered" it's going to be used to retrieve the
        # various definitions for the model fields
        definition = cls.definition()

        # retrieves the complete list of fields that are meant to be
        # automatically incremented for every save operation
        increments = cls.increments()

        # iterates over all the increment fields and increments their
        # fields so that a new value is set on the model
        for name in increments: model[name] = cls._increment(name)

        # iterates over all the model items to filter the ones
        # that are not valid for the current class context
        for name, value in self.model.items():
            if not name in definition: continue
            value = value.json_v() if hasattr(value, "json_v") else value
            model[name] = value

        # returns the model containing the "filtered" items resulting
        # from the validation of the items against the model class
        return model
