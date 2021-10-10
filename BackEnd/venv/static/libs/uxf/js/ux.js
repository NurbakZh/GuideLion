// Hive UX Framework
// Copyright (C) 2010-2012 Hive Solutions Lda.
//
// This file is part of Hive UX Framework.
//
// Hive UX Framework is confidential and property of Hive Solutions Lda.,
// its usage is constrained by the terms of the Hive Solutions
// Confidential Usage License.
//
// Hive UX Framework should not be distributed under any circumstances,
// violation of this may imply legal action.
//
// If you have any questions regarding the terms of this license please
// refer to <http://www.hive.pt/licenses/>.

// __author__    = João Magalhães <joamag@hive.pt> & Luís Martinho <lmartinho@hive.pt>
// __version__   = 1.0.0
// __revision__  = $LastChangedRevision$
// __date__      = $LastChangedDate$
// __copyright__ = Copyright (c) 2010-2012 Hive Solutions Lda.
// __license__   = Hive Solutions Confidential Usage License (HSCUL)

(function($) {
    jQuery.fn.uxapply = function(options) {
        // the default values for the apply
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // retrieves the body
            var _body = jQuery("body");

            // retrieves the meta source element to be started in the
            // first state of the apply (going to create functions)
            var source = jQuery(".source", matchedObject).not(".template .source");

            // retrieves the various elements based on their attribute
            // values (attribute based selection)
            var dataWidth = jQuery("[data-width]", matchedObject).not(".template [data-width]");
            var dataDisabled = jQuery("[data-disabled]", matchedObject).not(".template [data-disabled]");

            // retrieves the various elements
            var overlay = jQuery(".overlay", matchedObject).not(".template .overlay");
            var form = jQuery(".form", matchedObject).not(".template .form");
            var button = jQuery(".button", matchedObject).not(".template .button");
            var buttonGroup = jQuery(".button-group", matchedObject).not(".template .button-group");
            var textField = jQuery(".text-field", matchedObject).not(".template .text-field");
            var textArea = jQuery(".text-area", matchedObject).not(".template .text-area");
            var dropField = jQuery(".drop-field", matchedObject).not(".template .drop-field");
            var selectField = jQuery(".select-field", matchedObject).not(".template .select-field");
            var checkField = jQuery(".check-field", matchedObject).not(".template .check-field");
            var radioField = jQuery(".radio-field", matchedObject).not(".template .radio-field");
            var tagField = jQuery(".tag-field", matchedObject).not(".template .tag-field");
            var incrementalField = jQuery(".incremental-field", matchedObject).not(".template .incremental-field");
            var toggleField = jQuery(".toggle-field", matchedObject).not(".template .toggle-field");
            var dropTag = jQuery(".drop-tag", matchedObject).not(".template .drop-tag");
            var table = jQuery(".table", matchedObject).not(".template .table");
            var image = jQuery(".image", matchedObject).not(".template .image");
            var calendar = jQuery(".calendar", matchedObject).not(".template .calendar");
            var menulink = jQuery(".menu-link", matchedObject).not(".template .menu-link");
            var slider = jQuery(".slider", matchedObject).not(".template .slider");
            var scrollList = jQuery(".scroll-list", matchedObject).not(".template .scroll-list");
            var overlayPanel = jQuery(".overlay-panel", matchedObject).not(".template .overaly-panel");
            var overlaySearch = jQuery(".overlay-search", matchedObject).not(".template .overaly-search");
            var window = jQuery(".window", matchedObject).not(".template .window");
            var wizard = jQuery(".wizard", matchedObject).not(".template .wizard");
            var panel = jQuery(".panel", matchedObject).not(".template .panel");
            var tabPanel = jQuery(".tab-panel", matchedObject).not(".template .tab-panel");
            var panelMore = jQuery(".panel-more", matchedObject).not(".template .panel-more");
            var panelStack = jQuery(".panel-stack", matchedObject).not(".template .panel-stack");
            var breadcrumbs = jQuery(".breadcrumbs", matchedObject).not(".template .breadcrumbs");
            var hightlightBox = jQuery(".hightlight-box", matchedObject).not(".template .hightlight-box");
            var replacer = jQuery(".replacer", matchedObject).not(".template .replacer");
            var dataSource = jQuery(".data-source", matchedObject).not(".template .data-source");
            var filter = jQuery(".filter", matchedObject).not(".template .filter");
            var hoveringbox = jQuery(".hovering-box", matchedObject).not(".template .hovering-box");
            var headerNotification = jQuery(".header-notification",
                    matchedObject).not(".template .header-notification");
            var link = jQuery(".link", matchedObject).not(".template .link");
            var linkConfirm = jQuery(".link-confirm", matchedObject).not(".template .link-confirm");
            var list = jQuery(".list", matchedObject).not(".template .list");
            var selectList = jQuery(".select-list", matchedObject).not(".template .select-list");
            var sourceList = jQuery(".source-list", matchedObject).not(".template .source-list");
            var crossList = jQuery(".cross-list", matchedObject).not(".template .cross-list");
            var progressBar = jQuery(".progress-bar", matchedObject).not(".template .progress-bar");
            var passwordMeter = jQuery(".password-meter", matchedObject).not(".template .password-meter");
            var changer = jQuery(".changer", matchedObject).not(".template .changer");
            var contentChanger = jQuery(".content-changer", matchedObject).not(".template .content-changer");
            var dateTime = jQuery(".date-time", matchedObject).not(".template .date-time");
            var enumeration = jQuery(".enumeration", matchedObject).not(".template .enumeration");
            var number = jQuery(".number", matchedObject).not(".template .number");
            var timestamp = jQuery(".timestamp", matchedObject).not(".template .timestamp");
            var slideshow = jQuery(".slideshow", matchedObject).not(".template .slideshow");
            var chart = jQuery(".chart", matchedObject).not(".template .chart");
            var video = jQuery(".video", matchedObject).not(".template .video");
            var uploader = jQuery(".uploader", matchedObject).not(".template .uploader");
            var transformFlip = jQuery(".transform-flip", matchedObject).not(".template .transform-flip");
            var fileDrop = jQuery(".file-drop", matchedObject).not(".template .file-drop");
            var imageUpload = jQuery(".image-upload", matchedObject).not(".template .image-upload");
            var shortcuts = jQuery(".shortcuts", matchedObject).not(".template .shortcuts");
            var scan = jQuery(".scan", matchedObject).not(".template .scan");
            var focus = jQuery(".focus", matchedObject).not(".template .focus");
            var nameChange = jQuery(".name-change", matchedObject).not(".template .name-change");
            var _print = jQuery(".print", matchedObject).not(".template .print");
            var _eval = jQuery(".eval", matchedObject).not(".template .eval");

            // retrieves the various gateway elements
            var gatewayPrint = jQuery(".gateway-print", matchedObject).not(".template .gateway-print");

            // checks if the body element is meant to have the gateway plugin
            // loaded on it (for external symbol access)
            var gateway = _body.hasClass("gateway");

            // checks if the body element should wait for load to make its
            // appearance visible (shown after ux apply)
            var waitLoad = _body.hasClass("wait-load");

            // in case the gateway flag is set adds the gateway
            // plugin reference to the current body
            gateway && _body.uxgateway();

            // starts the various custom data source functions
            // to be used
            source.uxsource();

            // applies the various attribute base plugins
            dataWidth.uxdatawidth();

            // applies the scan plugin (must have register priority)
            scan.uxscan();

            // applies the various component plugins
            overlay.uxoverlay();
            form.uxform();
            button.uxbutton();
            buttonGroup.uxbuttongroup();
            textField.uxtextfield();
            textArea.uxtextfield();
            dropField.uxdropfield();
            selectField.uxselectfield();
            checkField.uxcheckfield();
            radioField.uxradiofield();
            tagField.uxtagfield();
            incrementalField.uxincrementalfield();
            toggleField.uxtogglefield();
            dropTag.uxdroptag();
            table.uxtable();
            image.uximage();
            calendar.uxcalendar();
            menulink.uxmenulink();
            slider.uxslider();
            scrollList.uxscrolllist();
            overlayPanel.uxoverlaypanel();
            overlaySearch.uxoverlaysearch();
            window.uxwindow();
            wizard.uxwizard();
            panel.uxpanel();
            tabPanel.uxtabpanel();
            panelMore.uxpanelmore();
            panelStack.uxpanelstack();
            breadcrumbs.uxbreadcrumbs();
            hightlightBox.uxhightlightbox();
            replacer.uxreplacer();
            dataSource.uxdatasource();
            filter.uxfilter();
            hoveringbox.uxhoveringbox();
            headerNotification.uxheadernotification();
            link.uxlink();
            linkConfirm.uxlinkconfirm();
            list.uxlist();
            selectList.uxselectlist();
            sourceList.uxsourcelist();
            crossList.uxcrosslist();
            progressBar.uxprogressbar();
            passwordMeter.uxpasswordmeter();
            changer.uxchanger();
            contentChanger.uxcontentchanger();
            dateTime.uxdatetime();
            enumeration.uxenumeration();
            number.uxnumber();
            timestamp.uxtimestamp();
            slideshow.uxslideshow();
            chart.uxchart();
            video.uxvideo();

            // applies the various transform plugins
            transformFlip.uxtransformflip();

            // applies the various file plugins
            fileDrop.uxfiledrop();
            imageUpload.uximageupload();

            // applies the various shortcut plugins
            shortcuts.uxshortcuts();

            // applies the focus plugins
            focus.uxfocus();

            // applies the name change plugin
            nameChange.uxnamechange();

            // applies the error plugin
            textField.uxerror();
            textArea.uxerror();
            table.uxerror();

            // applies the uploader plugin
            uploader.uxuploader();

            // applies the print plugin
            _print.uxprint();

            // applies the browser plugin
            _body.uxbrowser();

            // applies the eval (javascript evalutation)
            // this is a dangerous operation
            _eval.uxeval();

            // applies the gateway plugins
            gatewayPrint.uxgprint();

            // applies the various attribute based plugins (post
            // structure construction apply)
            dataDisabled.uxdisable();

            // shows the body in case it's meant to be
            // shown only after the ux script execution
            waitLoad && _body.show();
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the body
            var _body = jQuery("body");

            try {
                // overrides the current alert function
                // with the ux alert method
                alert = function(message, callback) {
                    // shows the alert window
                    _body.uxalert(message, callback);

                    // returns null to notify the caller
                    // of the requirement for a callback
                    return null;
                };

                // overrides the current confirm function
                // with the ux confirm method
                confirm = function(message, callback) {
                    // shows the confirm window
                    _body.uxconfirm(message, callback);

                    // returns null to notify the caller
                    // of the requirement for a callback
                    return null;
                };
            } catch (exception) {
            }
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxdatawidth = function(query, callback, options) {
        // the default values for the data query json
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the matched object, to update
            // their respective values
            matchedObject.each(function(index, element) {
                        // retrieves the current element for iteration
                        var _element = jQuery(element);

                        // retrieves the value from the width element
                        // and then updates the css attributes of it accordingly
                        var width = _element.attr("data-width");
                        _element.css("min-width", width + "px");
                        _element.css("width", width + "px");
                        _element.css("max-width", width + "px");
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.uxclone = function(value) {
        // in case the provided value is not valid or
        // in case it's not an object returns the same
        // object to the caller method
        if (value == null || typeof value !== "object") {
            return value;
        }

        // creates the base copy of the value by using
        // the same constructor and then iterates over
        // the various attributes in the value to copy
        // them into the copy
        var copy = value.constructor();
        for (var name in value) {
            // in case the current value does not have
            // the current attribute (invalid attribute)
            // must skip current iteration
            if (!value.hasOwnProperty(name)) {
                continue;
            }

            // copies the original value into the target
            // copy structure
            copy[name] = value[name];
        }

        // returns the resulting copy structure to the
        // caller method
        return copy;
    };
})(jQuery);

(function($) {
    jQuery.uxequals = function(first, second) {
        // allocates space for the variables that will be
        // used to store the temporary values, no multiple
        // allocation will be used (performance)
        var element;
        var valueF;
        var valueS;
        var type;
        var valid;

        // iterates over all the elements (keys) in the
        // first element to verify the present of them
        // in the second value
        for (element in first) {
            // retrieves the second value for the element
            // key in iteration in case the value is defined
            // continues the loop (valid) otherwise continues
            // the control and returns with invalid
            valueS = second[element];
            if (valueS !== undefined) {
                continue;
            }
            return false;
        }

        // iterates over all the elements (keys) in the
        // second element to verify the present of them
        // in the first value
        for (element in second) {
            // retrieves the first value for the element
            // key in iteration in case the value is defined
            // continues the loop (valid) otherwise continues
            // the control and returns with invalid
            valueF = first[element];
            if (valueF !== undefined) {
                continue;
            }
            return false;
        }

        // iterates over all the elements (keys) in the first
        // element to be able to compare each of the items
        for (element in first) {
            // retrieves both the first and second values for
            // the current element (key reference)
            valueF = first[element];
            valueS = second[element];
            type = typeof(valueF);

            // by default the comparision of the elements is
            // considered to be valid
            valid = true;

            // switched over the type for the value and runs the
            // appropriate comparision operations
            switch (type) {
                case "object" :
                    valid = jQuery.uxequals(valueF, valueS);
                    break;

                default :
                    valid = valueF === valueS;
                    break;
            }

            // in case the result of the comparision was valid
            // continues the loop to the other comparision operations
            if (valid) {
                continue;
            }

            // in case the the comparision operation has failed the
            // control has reached this place and an invalid result
            // must be returned to the caller function
            return false;
        }

        // in case the control as reached this place all the
        // tests have passed and the structures are considered
        // equal (deep comparision)
        return true;
    };
})(jQuery);

(function($) {
    jQuery.uxruntimeerror = function(message) {
        return {
            message : message
        }
    };
})(jQuery);

(function($) {
    jQuery.uxexception = function(message) {
        return {
            message : message
        }
    };
})(jQuery);

(function($) {
    jQuery.uxround = function(value, decimalPlaces) {
        // rounds the specified value to the
        // specified number of decimal places
        var rounder = Math.pow(10, decimalPlaces);
        return Math.round(value * rounder) / rounder;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxdataqueryjson = function(query, callback, options) {
        // the default timeout to be used in the request
        // (this value is used to delay the request)
        var DEFAULT_TIMEOUT = 250;

        // the default values for the data query json
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // iterates over all the object to retrieve the
            // result associated
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the results for the element and query
                        _getResults(_element, query, callback);
                    });
        };

        var _getResults = function(element, query, callback) {
            // retrieves the id part of the url
            var id = query["id"];

            // retrieves the "main" filter string
            var filterString = query["filterString"];

            // retrieves the sort tuple to be used to sort
            // the resulting set of elements
            var sort = query["sort"] || ["default", "descending"];

            // retrieves the filter tuples to be used to filter
            // the result set around certain rules
            var filters = query["filters"] || [];

            // retrieves the record count information
            var startRecord = query["startRecord"];
            var numberRecords = query["numberRecords"];

            // unpacks the sort value and the sort oder from the
            // sort tuple and uses them to create the "final" sort
            // string to be used in the query string
            var sortValue = sort ? sort[0] : null;
            var sortOrder = sort ? sort[1] : null;
            var sortString = sort ? sortValue + ":" + sortOrder : null;

            // creates the list that will hold the various filter strings
            // to be sent to the remote handler
            var _filters = [];

            // iterates over all the filters to "serialize" their data into
            // a simple string to the remote handler
            for (var index = 0; index < filters.length; index++) {
                // retrieves the current filter in iteration and
                // unpack it into the various components
                var filter = filters[index];
                var attribute = filter[0];
                var operation = filter[1];
                var value = filter[2];

                // in case the current value is a sequence must join
                // all of its values arround the separator token
                var isSequence = typeof value == "object";
                if (isSequence) {
                    value = value.join(";")
                }

                // creates the serialized filter string and adds it
                // to the list of filters to be sent to the handler
                var _filter = attribute + ":" + operation + ":" + value;
                _filters.push(_filter);
            }

            // sets the initial filter flag value
            var filter = false;

            // in case the start record and the number
            // of records is set
            if (startRecord != null && numberRecords != null) {
                // sets the filter flag
                filter = true;
            }

            // retrieves the elements url and data values to be used
            // for the processing of the "remote" query
            var url = element.data("url");
            var data = element.data("data");
            var cacheD = element.data("cache_d");

            // adds the id (part) to the url (in case
            // it's necessary)
            url += id ? "/" + id + ".json" : ""

            // increments the value of the number of records (to provide
            // an extra value for more items verification)
            numberRecords = numberRecords ? numberRecords + 1 : numberRecords;

            // checks if the data source is still dirty
            // this will be used to check if a timeout should
            // be used in the remote query
            var isDirty = matchedObject.data("is_dirty");
            matchedObject.data("is_dirty", true);

            // tries to retrieve the timeout attribute from the matched
            // object and then parse as integer as a fallback the default
            // timeout value is used, note that if the data source is
            // not dirty no timeout is used (instant query)
            var timeout = matchedObject.attr("data-timeout");
            timeout = !isDirty ? 0 : timeout
                    ? parseInt(timeout)
                    : DEFAULT_TIMEOUT;

            // creates the map containing the definition of the
            // query to be sent to the data source, then creates
            // the corresponding hash value to be used as the
            // (unique) identifier of the query
            var query = {
                filter_string : filterString,
                sort : sortString,
                filters : _filters,
                start_record : startRecord,
                number_records : numberRecords
            }
            var queryHash = _queryHash(query);

            // retrieves the current timestamp as the identifier
            // for the current request (assumes uniqueness)
            var identifier = new Date().getTime();

            // sets the current request identifier in the
            // matched object this is going to be used later
            // to identify if the request pending is the same
            // or if a new request has come in between
            matchedObject.data("current", identifier)

            // retrieves the cache structure for the matched object
            // and tries to find the result from the cache in case
            // their found calls the callback immediately with them
            var cache = matchedObject.data("cache");
            var cacheItem = cache[queryHash];
            if (cacheItem) {
                callback(cacheItem.validItems, cacheItem.moreItems,
                        cacheItem.extraItems);
                return;
            }

            // sets a timeout for the request to be performed, this
            // timeout will allow the performing of a delayed request
            // (ths way resource usage is minimized)
            setTimeout(function() {
                // retrieves the current identifier from the
                // matched object and checks it against the
                // clojure based identifier in case it's not
                // the same (the current request is not the
                // latest no need to perform it)
                var current = matchedObject.data("current");
                if (current != identifier) {
                    // returns immediately not going to perform
                    // the request (not required)
                    return;
                }

                // iterates over all the data components to
                // be added (custom query) and adds the items
                // to the current query, this is a query extension
                for (var key in data) {
                    query[key] = data[key];
                }

                // executes the remote ajax call, with the provided
                // query and for the defined url
                jQuery.ajax({
                            url : url,
                            dataType : "text",
                            data : query,
                            error : function(request, status, error) {
                                // retrieves the current identifier from the
                                // matched object and checks it against the
                                // clojure based identifier in case it's not
                                // the same (the current response is not the
                                // latest no need to parse it)
                                var current = matchedObject.data("current");
                                if (current != identifier) {
                                    // returns immediately not going to parse
                                    // the response (not required)
                                    return;
                                }

                                // retrieves the body
                                var _body = jQuery("body");

                                // shows an info window about the problem retrieving
                                // the data from the remote data source
                                _body.uxinfo(
                                        "There was an error retrieving json data",
                                        "Warning", "warning");

                                // calls the callback with the failure values
                                callback(null, null);
                            },
                            success : function(data) {
                                // parses the data, retrieving the valid items
                                var validItems = jQuery.parseJSON(data);
                                var extraItems = validItems;

                                // in case the received (items) is not a list
                                // (single retrieval)
                                if (!(validItems.constructor == Array)) {
                                    // tries to retrieve the (private) base
                                    // values that will serve as prototype for
                                    // the retrieval of the valid items
                                    var baseValue = validItems._base;

                                    // constructs a list of valid items
                                    // from the single valid item
                                    validItems = baseValue
                                            ? validItems[baseValue]
                                            : [validItems];
                                }

                                // retrieves the valid items length to check if there
                                // is more items available
                                var validItemsLength = validItems.length;
                                var moreItems = validItemsLength == numberRecords;

                                // filters the valid valid items using the calculated
                                // end slice to filter the "extra" items
                                var endSlice = numberRecords ? numberRecords
                                        - 1 : 1;
                                validItems = validItems.slice(0, endSlice);

                                // retrieves the current cache structure and updates
                                // it with the newly found item, indexing it by the
                                // (representing) query hash value, note that if the
                                // cache disable flag is set no value is set in cache
                                var cache = matchedObject.data("cache");
                                cache[queryHash] = cacheD ? null : {
                                    validItems : validItems,
                                    moreItems : moreItems,
                                    extraItems : extraItems
                                };

                                // retrieves the current identifier from the
                                // matched object and checks it against the
                                // clojure based identifier in case it's not
                                // the same (the current response is not the
                                // latest no call the callback for it)
                                var current = matchedObject.data("current");
                                if (current != identifier) {
                                    // returns immediately not going to send
                                    // the response (not required)
                                    return;
                                }

                                // calls the callback with the valid items
                                // note that extra items are applied
                                callback(validItems, moreItems, extraItems);
                            }
                        });
            }, timeout);
        };

        var _queryHash = function(query) {
            // retrieves the various components of the query to
            // be used to construct the query string and run the
            // hash function on it
            var filterString = query.filter_string;
            var sort = query.sort;
            var filters = query.filters;
            var startRecord = query.start_record;
            var numberRecords = query.number_records;

            // joins the various filter string to create a complete
            // filter string
            var _filters = filters.join();

            // creates the final query string from the various components
            // of the query and creates the digest for it returning it to
            // the caller function
            var queryString = filterString + sort + _filters
                    + String(startRecord) + String(numberRecords);
            var hash = Md5.digest(queryString);
            return hash;
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxdataquerylocal = function(query, callback, options) {
        // the default values for the data query local
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // iterates over all the object to retrieve the
            // result associated
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the results for the element and query
                        _getResults(_element, query, callback);
                    });
        };

        var _getResults = function(element, query, callback) {
            // retrieves the id part of the url
            var id = query["id"];

            // retrieves the "main" filter string and attribute
            var filterString = query["filterString"];
            var filterAttributes = query["filterAttributes"];

            // retrieves the record count information
            var startRecord = query["startRecord"];
            var numberRecords = query["numberRecords"];

            // sets the initial filter flag value
            var filter = false;

            // in case the start record and the number
            // of records is set
            if (startRecord != null && numberRecords != null) {
                // sets the filter flag
                filter = true;
            }

            // retrieves the element items
            var items = element.data("items");

            // creates a list to hold (the valid) items
            var validItems = [];

            // in case the id value is set, there's
            // a need to filter the items
            if (id) {
                // creates the list to hold the valid
                // items for the id value
                var itemsId = [];

                // iterates over the range of items (indexes)
                for (var index = 0; index < items.length; index++) {
                    // retrieves the current item, and
                    // then retrieves and casts the item id
                    var item = items[index];
                    var itemId = parseInt(item["id"]);

                    // in case the item id does not
                    // represent a number
                    if (isNaN(itemId)) {
                        // continues the loop
                        continue;
                    }

                    // in case the current item
                    // id is the id to be found
                    if (itemId == id) {
                        // adds the item to the items
                        // id list
                        itemsId.push(item);
                    }
                }

                // sets the list of items for the id
                // as the current usable list of items
                items = itemsId;
            }

            // iterates over all the items to check for a valid
            // prefix (starts with)
            for (var index = 0; index < items.length; index++) {
                // retrieves the current item
                var currentItem = items[index];

                // in case the filter attributes are defined
                if (filterAttributes) {
                    // starts the compare strings list
                    var compareStrings = [];

                    // iterates over all the filter attributes
                    for (var _index = 0; _index < filterAttributes.length; _index++) {
                        // retrieves the current filter attribute
                        var filterAttribute = filterAttributes[_index];

                        // retrieves the compare string and adds it
                        // to the compare strings list
                        var compareString = currentItem[filterAttribute];
                        compareStrings.push(compareString);
                    }
                }
                // otherwise in case the current item is a map the
                // default attribute must be used
                else if (typeof currentItem == "object") {
                    // retrieves the name attribute from the current
                    // item and sets it in the list of compaare strings
                    var name = currentItem["name"];
                    var compareStrings = [name];
                }
                // otherwise the current item must be a string
                // and so it's used directly as the compare strings
                else {
                    // sets the current item as the only
                    // compare string
                    var compareStrings = [currentItem];
                }

                // iterates over all the compare string for the filter
                // string comparison
                for (var _index = 0; _index < compareStrings.length; _index++) {
                    // retrieves the current compare string
                    var compareString = compareStrings[_index];

                    // checks if the compare string (current item) starts with the
                    // current filter string
                    if (compareString.indexOf(filterString) == 0) {
                        // adds the current item to the list
                        // of valid items (valid item)
                        validItems.push(currentItem);

                        // breaks the loop
                        break;
                    }
                }
            }

            // retrieves the valid items length to check if there
            // is more items available
            var validItemsLength = validItems.length;
            var moreItems = validItemsLength > startRecord + numberRecords;

            // filters "some" valid items (in
            // case the filter options flag is set)
            var validItems = filter ? validItems.slice(startRecord, startRecord
                            + numberRecords) : validItems;

            // calls the callback with the "valid" items
            callback(validItems, moreItems);
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxdataquery = function(query, callback, options) {
        // the default values for the data query
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // iterates over all the object to retrieve the
            // result associated
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the results for the element and query
                        _getResults(_element, query, callback);
                    });
        };

        var _getResults = function(element, query, callback) {
            // retrieves the element type, to construct
            // the data query method name
            var elementType = element.data("type");
            var dataQueryMethodName = "uxdataquery" + elementType;

            // runs the data query method for the specific
            // data source type
            element[dataQueryMethodName](query, callback);
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxdatasourcecountries = function(options) {
        // the set of countries to be used
        var COUNTRIES = ["Afghanistan", "Albania", "Algeria", "Andorra",
                "Angola", "Antigua & Deps", "Argentina", "Armenia",
                "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
                "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize",
                "Benin", "Bhutan", "Bolivia", "Bosnia Herzegovina", "Botswana",
                "Brazil", "Brunei", "Bulgaria", "Burkina", "Burundi",
                "Cambodia", "Cameroon", "Canada", "Cape Verde",
                "Central African Rep", "Chad", "Chile", "China", "Colombia",
                "Comoros", "Congo", "Congo {Democratic Rep}", "Costa Rica",
                "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
                "Djibouti", "Dominica", "Dominican Republic", "East Timor",
                "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
                "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France",
                "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
                "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
                "Haiti", "Honduras", "Hungary", "Iceland", "India",
                "Indonesia", "Iran", "Iraq", "Ireland {Republic}", "Israel",
                "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan",
                "Kazakhstan", "Kenya", "Kiribati", "Korea North",
                "Korea South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
                "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
                "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia",
                "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
                "Malta", "Marshall Islands", "Mauritania", "Mauritius",
                "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
                "Montenegro", "Morocco", "Mozambique", "Myanmar, {Burma}",
                "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
                "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan",
                "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru",
                "Philippines", "Poland", "Portugal", "Qatar", "Romania",
                "Russian Federation", "Rwanda", "St Kitts & Nevis", "St Lucia",
                "Saint Vincent & the Grenadines", "Samoa", "San Marino",
                "Sao Tome & Principe", "Saudi Arabia", "Senegal", "Serbia",
                "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
                "Slovenia", "Solomon Islands", "Somalia", "South Africa",
                "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland",
                "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
                "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad & Tobago",
                "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
                "Ukraine", "United Arab Emirates", "United Kingdom",
                "United States", "Uruguay", "Uzbekistan", "Vanuatu",
                "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
                "Zimbabwe"];

        // the default values for the data source local
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the elements in the matched object
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // updates the items data in the current element
                        // ands runs the initializer of the items data
                        // source extension
                        _element.data("items", COUNTRIES);
                        _element.uxdatasourceitems();
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxdatasourcegenders = function(options) {
        // the set of genders to be used
        var GENDERS = ["Male", "Female"];

        // the default values for the data source local
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the elements in the matched object
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // updates the items data in the current element
                        // ands runs the initializer of the items data
                        // source extension
                        _element.data("items", GENDERS);
                        _element.uxdatasourceitems();
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxdatasourceitems = function(options) {
        // the default values for the data source local
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the elements in the matched object
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the currently loaded items in the element
                        // to update it in the element
                        var items = _element.data("items");

                        // updates the data style of the data source to local
                        // and adds the item elements into it, then runs the
                        // initializer of the local data source extension
                        _element.attr("data-type", "local");
                        for (var index = 0; index < items.length; index++) {
                            // retrieves the current item in iteration and checks
                            // if the type of it is a string, conditional action
                            var item = items[index];
                            var isString = typeof item == "string";

                            // in case the current item is a string it must be
                            // added directly
                            if (isString) {
                                _element.append("<li>" + item + "</li>");
                            } else {
                                // starts the string value with the initial
                                // list item
                                var _string = "<li>";

                                // iterates over all the keys in the item to
                                // create the various span elements representing
                                // the various attributes
                                for (key in item) {
                                    // retrieves the value associated the current key
                                    // and appends the span associated with the key
                                    var value = item[key];
                                    _string += "<span name=\"" + key + "\">"
                                            + value + "</span>";
                                }

                                // adds the final list reference to the string and then
                                // adds the list item to the string and the complete string
                                // value list item to the element
                                _string += "</li>";
                                _element.append(_string);
                            }
                        }
                        _element.uxdatasourcelocal();
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxdatasourcejson = function(options) {
        // the default values for the data source json
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the elements in the matched object
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // updates the query element
                        _updateQueryElement(_element, options);
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        var _updateQueryElement = function(element, options) {
            // retrieves the various attributes that are
            // going to be used for configuration
            var url = element.attr("data-url")
            var cacheDisabled = element.attr("data-cache_disabled")

            // updates the element data
            element.data("type", "json");
            element.data("url", url);
            element.data("cache_d", cacheDisabled);
            element.data("data", {});
            element.data("cache", {});
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxdatasourcelocal = function(options) {
        // the default values for the data source local
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the elements in the matched object
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // updates the query element
                        _updateQueryElement(_element, options);
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        /**
         * Retrieves the sub-elements for the given element. The structure to be
         * returned may be a map or a list depending on the type of internal dom
         * structure of the element.
         *
         * @param {Element}
         *            element The element to be used to retrieve the
         *            sub-elements structure.
         * @return {List/Map} The created sub-elements structure.
         */
        var _getElements = function(element) {
            // retrieves the element children
            var elementChildren = element.children();

            // retrieves the name attribute for the element
            // children to check if the structure is a list
            // or a structured map
            var nameAttribute = elementChildren.attr("name");

            // checks the data structure to be used and
            // creates it accordingly
            var isList = nameAttribute === undefined;
            var dataStructure = isList ? [] : {};

            // iterates over all the children of the element
            // to populate the data structure
            elementChildren.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the children of the element
                        // to check if the element contains children
                        var children = _element.children();
                        var containsChildren = children.length > 0;

                        // in case the element contains children
                        if (containsChildren) {
                            // retrieves the "composite" element value
                            var elementValue = _getElements(_element);
                        }
                        // otherwise there are no children and
                        // the ement contents must be directly
                        // processed
                        else {
                            // retrieves the element value directly
                            // from the element contents
                            var elementValue = _element.html();
                        }

                        // in case the data structure is a list
                        if (isList) {
                            // adds the element value to the
                            // data structure (list)
                            dataStructure.push(elementValue);
                        }
                        // otherwise the data structure must be a map
                        else {
                            // retrieves the element name and sets
                            // the element value in the data structure
                            // for the element name
                            var elementName = _element.attr("name");
                            dataStructure[elementName] = elementValue;
                        }
                    });

            // returns the (created) data structure
            return dataStructure;
        };

        var _updateQueryElement = function(element, options) {
            // retrieves the elements (items)
            // for the element
            var items = _getElements(element);

            // checks if the no remove class (flag) is set
            var noRemove = element.hasClass("no-remove");

            // empties the element (no need to
            // hold all the elements in dom)
            !noRemove && element.empty();

            // updates the element data
            element.data("type", "local");
            element.data("items", items);
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxdatasource = function(options) {
        // the default values for the data source
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the elements in the matched object
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // updates the query element
                        _updateQueryElement(_element, options);

                        // triggers the ready event on the data source
                        // this should be able to notifiy possible listeners
                        // that the data is ready to be managed and "explored"
                        _element.trigger("data_ready");
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        var _updateQueryElement = function(element) {
            // retrieves the element type, to construct
            // the data source method name
            var type = element.attr("data-type");
            var dataSourceMethodName = "uxdatasource" + type;

            // updates the query element for the specific
            // data source type
            element[dataSourceMethodName]();

            // retrieves the query attribute for the element
            var queryAttribute = element.attr("data-query_attribute");

            // updates the element data
            element.data("query_attribute", queryAttribute);
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxsource = function(query, callback, options) {
        // the default values for the data query json
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over each of the matched object
            // to create the various data source functions
            matchedObject.each(function(index, element) {
                        // retrieves the current element
                        var _element = jQuery(this);

                        // retrieves the name to be used in the created
                        // source for the element
                        var name = _element.attr("data-name");

                        // retrieves the various child list items to
                        // be parsed and creates the list structure that
                        // will hold them in such case
                        var items = jQuery("> li", _element);
                        var _items = [];

                        // iterates over each of the items to construct
                        // the various structures
                        items.each(function(index, element) {
                                    // retrieves the current item in iteration
                                    var item = jQuery(this);

                                    // retrieves both the name and the value
                                    // of the current item in iteration
                                    var name = item.attr("data-name")
                                            || item.html();
                                    var value = item.html();

                                    // creates the item structure with the name
                                    // and the value set
                                    _item = {
                                        "name" : name,
                                        "value" : value
                                    };

                                    // adds the item to the "logical" list
                                    // containing the various items
                                    _items.push(_item);
                                });

                        // creates the jquery function associated with the
                        // newly created data souce function
                        jQuery.fn["uxdatasource" + name] = _dataSource(_items);
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        var _dataSource = function(items) {
            var _function = function(options) {
                // sets the matched object as the current context
                // value (instance)
                var matchedObject = this;

                // iterates over all the elements in the matched
                // to be able to create the various item data sources
                matchedObject.each(function(index, element) {
                            // retrievs the current element in iteration to
                            // update it with the proper generalized data source
                            var _element = jQuery(this);

                            // updates the items data in the current element
                            // ands runs the initializer of the items data
                            // source extension
                            _element.data("items", items);
                            _element.uxdatasourceitems();
                        });
            };

            return _function;
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxerror = function(method, options) {
        // the regex for string character regex,
        // for string replacement
        var STRING_CHARACTER_REGEX = new RegExp("'", "g");

        // the default values for the error
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the matched objects
            matchedObject.each(function(index, element) {
                // retrieves the element reference
                var _element = jQuery(element);

                // tries to retrieve the error from the matched object
                var error = _element.attr("data-error");

                // in case the error attribute is not defined
                if (!error) {
                    // returns immediately
                    return;
                }

                // tries to retrieve the no error class (flag)
                // from the matched object
                var noError = _element.hasClass("no-error");

                // in case the no error class is defined
                if (noError) {
                    // returns immediately
                    return;
                }

                // retrieves the parent form to retrieve
                // the error box to be shown
                var form = _element.parents("form");
                var errorBox = jQuery(".error-box");
                errorBox.show();

                // replaces the string character in the error
                // message list
                var error = error.replace(STRING_CHARACTER_REGEX, "\"");

                // replaces the list joining character in order
                // to virtually "join" multiple lists
                var listJoinCharacter = new RegExp("\\]\\[", "g");
                var error = error.replace(listJoinCharacter, ", ");

                try {
                    // parses the error structure
                    var errorStructure = jQuery.parseJSON(error);
                } catch (exception) {
                    // sets the error structure with no error enabled
                    // from the provided error (must be a simmple
                    // error string element)
                    var errorStructure = []
                }

                // iterates over all the error messages in the
                // error structure (errors list)
                for (var index = 0; index < errorStructure.length; index++) {
                    // retrieves the current error message
                    var errorMessage = errorStructure[index];

                    // creates the error description html
                    var errorDescriptionHtml = "<div class=\"error-description\">"
                            + errorMessage + "</div>";

                    // creates the error description element and adds it
                    // after the element
                    var errorDescription = jQuery(errorDescriptionHtml);
                    jQuery(errorDescriptionHtml).insertAfter(_element);
                }
            });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

jQuery.expr[":"].parents = function(a, i, m) {
    return jQuery(a).parents(m[3]).length > 0;
};

(function($) {
    jQuery.fn.uxvideo = function(options) {
        // the map for the youtube
        // base addresses
        var YOUTUBE_MAP = {
            "youtube.com" : true,
            "www.youtube.com" : true
        };

        // the map for the vimeo
        // base addresses
        var VIMEO_MAP = {
            "vimeo.com" : true,
            "www.vimeo.com" : true
        };

        // the map for the daily motion
        // base addresses
        var DAILY_MOTION_MAP = {
            "dailymotion.com" : true,
            "www.dailymotion.com" : true
        };

        // the default values for the timestamp
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the matched object
            // elements to update the video value
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the url (html) from the element
                        // and then trims it
                        var url = _element.html();
                        url = url.trim();

                        // parses the url retrieving the
                        // url information
                        var urlInformation = parseUrl(url);

                        // retrieves the base name from the url information
                        var baseName = urlInformation["baseName"];

                        // in case the video is of type youtube
                        if (YOUTUBE_MAP[baseName]) {
                            updateYoutube(_element, options, urlInformation);
                        }
                        // in case the video is of type vimeo
                        else if (VIMEO_MAP[baseName]) {
                            updateVimeo(_element, options, urlInformation);
                        }
                        // in case the video is of type daily motion
                        else if (DAILY_MOTION_MAP[baseName]) {
                            updateDailyMotion(_element, options, urlInformation);
                        }
                    });
        };

        var updateYoutube = function(matchedObject, options, urlInformation) {
            // retrieves the options map to then retrieve
            // the video id from it
            var optionsMap = urlInformation["optionsMap"];
            var videoId = optionsMap["v"];

            // retrieves the width and the height
            var width = matchedObject.attr("data-width");
            var height = matchedObject.attr("data-height");

            // retrieves the hd (high definition) value
            var hd = matchedObject.attr("data-hd");

            // retrieves the info
            var info = matchedObject.attr("data-info");

            // retrieves the chromeless value
            var chromeless = matchedObject.attr("data-chromeless");

            // retrieves the auto play value
            var autoPlay = matchedObject.attr("data-auto_play");

            // calculates the default width and height values
            width = width ? width : 560;
            height = height ? height : 315;

            // calculates the hd value
            var hdValue = hd ? "hd=1" : "hd=0";

            // calculates the info value
            var infoValue = info ? "showinfo=1" : "showinfo=0";

            // calculates the controls value
            var controlsValue = chromeless ? "controls=0" : "controls=1";

            // calculates the auto play value
            var autoPlayValue = autoPlay ? "autoplay=1" : "autoplay=0";

            // updates the matched object html with the video iframe
            matchedObject.html("<iframe width=\""
                    + width
                    + "\" height=\""
                    + height
                    + "\" src=\"http://www.youtube.com/embed/"
                    + videoId
                    + "?"
                    + hdValue
                    + "&"
                    + infoValue
                    + "&"
                    + controlsValue
                    + "&"
                    + autoPlayValue
                    + "\" frameborder=\"0\" webkitAllowFullScreen allowfullscreen></iframe>");
        };

        var updateVimeo = function(matchedObject, options, urlInformation) {
            // retrieves the resource reference
            var resourceReference = urlInformation["resourceReference"];

            // retrieves the width and the height
            var width = matchedObject.attr("data-width");
            var height = matchedObject.attr("data-height");

            // retrieves the info
            var info = matchedObject.attr("data-info");

            // retrieves the auto play value
            var autoPlay = matchedObject.attr("data-auto_play");

            // calculates the default width and height values
            width = width ? width : 560;
            height = height ? height : 315;

            // calculates the info value
            var infoValue = autoPlay
                    ? "title=1&byline=1&portrait=1"
                    : "title=0&byline=0&portrait=0";

            // calculates the auto play value
            var autoPlayValue = autoPlay ? "autoplay=1" : "autoplay=0";

            // updates the matched object html with the video iframe
            matchedObject.html("<iframe src=\"http://player.vimeo.com/video"
                    + resourceReference
                    + "?"
                    + infoValue
                    + "&"
                    + autoPlayValue
                    + "\" width=\""
                    + width
                    + "\" height=\""
                    + height
                    + "\" frameborder=\"0\" webkitAllowFullScreen allowFullScreen></iframe>");
        };

        var updateDailyMotion = function(matchedObject, options, urlInformation) {
            // retrieves the resource reference
            var resourceReference = urlInformation["resourceReference"];

            // retrieves the width and the height
            var width = matchedObject.attr("data-width");
            var height = matchedObject.attr("data-height");

            // retrieves the chromeless value
            var chromeless = matchedObject.attr("data-chromeless");

            // retrieves the auto play value
            var autoPlay = matchedObject.attr("data-auto_play");

            // calculates the default width and height values
            width = width ? width : 560;
            height = height ? height : 315;

            // calculates the chromeless value
            var chromelessValue = chromeless ? "chromeless=1" : "chromeless=0";

            // calculates the auto play value
            var autoPlayValue = autoPlay ? "autoplay=1" : "autoplay=0";

            // updates the matched object html with the video iframe
            matchedObject.html("<iframe src=\"http://www.dailymotion.com/embed"
                    + resourceReference
                    + "?"
                    + chromelessValue
                    + "&"
                    + autoPlayValue
                    + "\" width=\""
                    + width
                    + "\" height=\""
                    + height
                    + "\" frameborder=\"0\" webkitAllowFullScreen allowfullscreen></iframe>");
        };

        var parseUrl = function(url) {
            // creates the url regex (for url validation)
            var urlRegex = /(\w+\:\/\/)?([^\:\/\?#]+)(\:\d+)?((\/[^\?#]+)*)\/?(\?(([^#])*))?(#(.*))?/g;

            // executes the url regex against the url
            var match = urlRegex.exec(url);

            // retrieves and parses the various url component from
            // the (url) match
            var protocol = match[1] ? match[1].slice(0, -3) : null;
            var baseName = match[2] ? match[2] : null;
            var port = match[3] ? match[3].slice(1) : null;
            var resourceReference = match[4] ? match[4] : null;
            var options = match[7] ? match[7] : null;
            var location = match[9] ? match[9] : null;

            // splits the various options arround the and character
            var optionsSplit = options ? options.split("&") : [];

            // creates the options map
            var optionsMap = {};

            // iterates over all the split token in the options
            // split list
            for (var index = 0; index < optionsSplit.length; index++) {
                // retrieves the (current) option
                var option = optionsSplit[0];

                // splits the option arround the separator
                var optionSplit = option.split("=");

                // in case there are at least two
                // values in the option split
                if (optionSplit.length > 1) {
                    // retrieves the name and the value
                    // from the option split
                    var optionName = optionSplit[0];
                    var optionValue = optionSplit[1];
                } else {
                    // retrieves the name from the
                    // option split and sets the value
                    // to null
                    var optionName = optionSplit[0];
                    var optionValue = null;
                }

                // sets the option in the options map
                optionsMap[optionName] = optionValue;
            }

            // creates the url information map, from the
            // various url components
            var urlInformation = {
                protocol : protocol,
                baseName : baseName,
                port : port,
                resourceReference : resourceReference,
                options : options,
                location : location,
                optionsMap : optionsMap
            }

            // returns the url information map
            return urlInformation;
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxg = function(strict) {
        // the name of the gateway plugin, should not
        // change during the timeline
        var GATEWAY_PLUGIN_NAME = "Colony Gateway Plugin";

        // retrieves the values for the strict option
        strict = strict ? strict : false;

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Checks if a plugin with the provided name exists in the current
         * browser environment.
         *
         * @param name
         *            The name of the plugin to be checked for existence.
         * @return If a plugin with the provided name exists in the current
         *         environment.
         */
        var _hasPlugin = function(name) {
            // in case the navigator or the navigator plugins
            // are not defined, impossible to test the presence
            // of the plugin in the environment
            if (!navigator || !navigator.plugins) {
                // returns immediately in error
                return false;
            }

            // retrieves the number of plugins that exist
            // in the current environment
            var pluginsCount = navigator.plugins.length;

            // iterates over all the plugins in the current environment
            // to try to find the one requested
            for (var index = 0; index < pluginsCount; index++) {
                // retrieves the current plugin for the iteration
                var currentPlugin = navigator.plugins[index];

                // in case the name of the current plugin is the
                // one to being searched
                if (currentPlugin.name == name) {
                    // returns valid the plugin was found
                    return true;
                }
            }

            // by default returns false does not exits
            return false;
        };

        // checks if the current environment contains the
        // gateway plugin (only in case the strict flag is set)
        var hasPlugin = strict ? _hasPlugin(GATEWAY_PLUGIN_NAME) : true;

        // in case the plugin does not exists in the current
        // environment no need to find the reference
        if (!hasPlugin) {
            // returns immediately with no reference
            return null;
        }

        // tries to retrieve the (colony) gateway, reference
        // from the matched object
        var gateway = jQuery("#colony-gateway", matchedObject);
        var gatewayElement = gateway.length > 0 ? gateway.get(0) : null;

        // checks if the default status method is available, defaulting
        // to invalid in case it's not
        gatewayElement = gatewayElement && gatewayElement.status
                ? gatewayElement
                : null;

        // returns the reference to the gateway element
        return gatewayElement;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxgateway = function(options) {
        // the name of the gateway plugin, should not
        // change during the timeline
        var GATEWAY_PLUGIN_NAME = "Colony Gateway Plugin";

        // the default values for the print
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // tries to retrieve the gateway from the currently
            // matched object an in case it already exists avoids
            // the inclusion of it
            var gateway = jQuery("#colony-gateway", matchedObject);
            if (gateway.length > 0) {
                return;
            }

            // checks if the current environment contains the
            // gateway plugin (only in case the strict flag is set)
            var hasPlugin = _hasPlugin(GATEWAY_PLUGIN_NAME);

            // adds the colony gateway code to the current matched object
            // only in case the plugin exists in the current environment
            hasPlugin
                    && matchedObject.append("<object id=\"colony-gateway\" type=\"application/x-colony-gateway\" width=\"0\" height=\"0\"></object>")
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        /**
         * Checks if a plugin with the provided name exists in the current
         * browser environment.
         *
         * @param name
         *            The name of the plugin to be checked for existence.
         * @return If a plugin with the provided name exists in the current
         *         environment.
         */
        var _hasPlugin = function(name) {
            // in case the navigator or the navigator plugins
            // are not defined, impossible to test the presence
            // of the plugin in the environment
            if (!navigator || !navigator.plugins) {
                // returns immediately in error
                return false;
            }

            // retrieves the number of plugins that exist
            // in the current environment
            var pluginsCount = navigator.plugins.length;

            // iterates over all the plugins in the current environment
            // to try to find the one requested
            for (var index = 0; index < pluginsCount; index++) {
                // retrieves the current plugin for the iteration
                var currentPlugin = navigator.plugins[index];

                // in case the name of the current plugin is the
                // one to being searched
                if (currentPlugin.name == name) {
                    // returns valid the plugin was found
                    return true;
                }
            }

            // by default returns false does not exits
            return false;
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxgprint = function(method, options) {
        // the default values for the print
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // registers for the click event on the matched
            // object (should trigger the print)
            matchedObject.click(function() {
                        // retrieves the element reference and runs the print
                        // process on it
                        var element = jQuery(this);
                        _print(element, options);
                    });
        };

        var _print = function(matchedObject, options) {
            // retrieves the element reference and then
            // uses it to retrieve the url to the binie
            // resource containing the document description
            var element = matchedObject;
            var binieUrl = element.attr("data-binie") || options["binie"];

            // retrieves the reference to the document element
            var _document = jQuery(document);

            // tries to retrieve the reference to the
            // gateway plugin to be used for plugin calls
            var gateway = _document.uxg();

            // in case the gateway was successfully retrieved
            // time to retrieve the binie data to be printed
            if (gateway) {
                // retrieves the printing format associated
                // with the printing infra-structure of the
                // currently loaded gateway
                var format = gateway.pformat();

                // creates the initial data structure to be uses
                // to instruct the data source on how to print
                // the document and how the provided data is structured
                var data = {
                    base_64 : 1,
                    format : format
                };

                // tries to retrive the data processing method for
                // the currently defined format in case it exists
                // calls it with the data structure so that it
                // "completes" it with the "extra" data
                var method = matchedObject["uxgprint" + format];
                method && method(gateway, data);

                // runs the remote call to retrieve the binie
                // contents
                jQuery.ajax({
                            url : binieUrl,
                            data : data,
                            success : function(data, asdasd, aswefwegew) {
                                // prints the "just" received data using the
                                // gateway plugin (direct access to driver)
                                gateway.print(false, data);
                            }
                        });
            }
            // otherwise the normal printing process must be used
            // in case a fallback url exists
            else {
                // tries to retrieve the fallback url and the
                // target for the link
                var fallbackUrl = element.attr("data-fallback")
                        || options["fallback"];
                var target = element.attr("data-target") || options["target"];

                // in case no fallback url is defined, must return
                // immediately (nothing is done)
                if (!fallbackUrl) {
                    // returns immediately, nothing can
                    // be done
                    return;
                }

                // in case the target parameter is set a new window
                // must be created with the defined target
                if (target) {
                    // creates a new window with the defined target
                    window.open(fallbackUrl, target);
                }
                // otherwise the current document is used and the location
                // on it is changed
                else {
                    // sets the new location for the document as the
                    // fallback url
                    document.location = fallbackUrl;
                }
            }
        };

        // switches over the method
        switch (method) {
            case "print" :
                // runs the print process in the matched object
                _print(matchedObject, options);

                // breaks the switch
                break;

            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxgprintpdf = function(gateway, data) {
        // retrieves the complete set of device specifications
        // for the current system and sets the intial value of
        // the default device variable as unset
        var devices = gateway.pdevices();
        var defaultDevice = null;

        // iterates over all the (printing) devices in the system
        // to try to "find" the one that's the default
        for (var index = 0; index < devices.length; index++) {
            var device = devices[index];
            if (!device.isDefault) {
                continue;
            }
            defaultDevice = device;
            break;
        }

        // in case no default device is found must return immediately
        // nothing to be set for the current situation
        if (!defaultDevice) {
            return;
        }

        // updates the data structure with the device with and length
        // for the defined paper size
        data["width"] = defaultDevice["width"];
        data["height"] = defaultDevice["length"];
    };
})(jQuery);

(function($) {
    jQuery.fn.uxchart = function(query, callback, options) {
        // the default values for the data query json
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // retrieves all the bars from the matched
            // object (for width calculation)
            var bars = jQuery(".bar", matchedObject);

            // wraps the bars into the bar container, this
            // should include the proper visuals
            bars.wrap("<div class=\"bar-container\"></div>");

            // iterates over all the bars of the matched object for
            // width calculation
            bars.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the percentage from the elment
                        // and parses it as a float
                        var percentage = _element.attr("data-percentage");
                        percentage = parseFloat(percentage);

                        // checks if the chart is meant to be represented
                        // in a linear manner
                        var linear = _element.attr("data-linear");

                        // in case the linear flag is set the ratio is
                        // meant to be the percentage itself
                        if (linear) {
                            // sets the percentage as the ratio to be used
                            // in the bar
                            var ratio = percentage;
                        }
                        // otherwise the ratio must be controlled using a
                        // logarithmic approach
                        else {
                            // calculates the ratio for the current bar, takes
                            // into account the cases where the value is invalid
                            var ratio = (Math.log(percentage + 1) / Math.log(101.0))
                                    * 100.0;
                            ratio = percentage > 0 ? ratio : 0.0;
                        }

                        // converts the ratio into a fixed sized string
                        var ratio = ratio.toFixed(0);

                        // sets the ratio as the element width
                        _element.width(ratio + "%");
                    });

            // iterates over all the bars of the matched object for
            // content overflow testing
            bars.each(function(index, element) {
                // retrieves the element reference
                var _element = jQuery(element);

                // retrieves the first span element
                // as the contents of the bar
                var contents = jQuery("span", element);

                // retrieves both the width of the bar and
                // the width of the contents for overflow
                // testing
                var barWidth = _element.width();
                var contentsWidth = contents.outerWidth();

                // in case the bar width is enought to hold the
                // contents (no overflow)
                if (contentsWidth <= barWidth) {
                    // retursn immediately (continues the loop)
                    return;
                }

                // creates a new transparent bar to hold the external label and
                // adds it to the dom after the element
                var transparentBar = jQuery("<div class=\"bar bar-transparent\"></div>");
                _element.after(transparentBar);

                // moves the contents to the transparent bar (external label)
                transparentBar.append(contents);
            });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

jQuery.uxctrl = function(keycode, callback, arguments) {
    // retrieves the document element
    var _document = jQuery(document);

    // registers for the key down press in the document
    _document.keydown(function(event) {
                // retrieves the key value
                var keyValue = event.keyCode ? event.keyCode : event.charCode
                        ? event.charCode
                        : event.which;

                // sets the default arguments
                var arguments = arguments ? arguments : [];

                // in case the control key is set an
                if (event.ctrlKey && keyValue == keycode) {
                    // calls the callback with the current context
                    // and the arguments
                    callback.apply(this, arguments);

                    // returns false (avoids event propagation)
                    return false;
                }
            });
};

(function($) {
    jQuery.fn.uxkey = function(element, options) {
        // the default values for the key
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the global option
            var global = options["global"] ? options["global"] : true;

            // iterates over all the matched objects
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the data attributes
                        var key = _element.attr("data-key");
                        var url = _element.attr("data-url");

                        // converts the key to integer
                        var keyInteger = parseInt(key);

                        // in case the key does not represent an integer
                        if (isNaN(keyInteger)) {
                            // returns immediately
                            return;
                        }

                        // retrieves the target object base on the global option
                        var targetObject = global ? jQuery(document) : _element;

                        // registers for the key up in the target
                        // object element
                        targetObject.keyup(function(event) {
                                    // retrieves the key value
                                    var keyValue = event.keyCode
                                            ? event.keyCode
                                            : event.charCode
                                                    ? event.charCode
                                                    : event.which;

                                    // in case the ctrl or the alt keys
                                    // are pressed no need to handle the event
                                    // (default behavior is not desired)
                                    if (event.ctrlKey || event.altKey) {
                                        // returns immediately
                                        return;
                                    }

                                    // switches over the key value
                                    switch (keyValue) {
                                        // in case it's the target key
                                        case keyInteger :
                                            // sets the "new" document location
                                            document.location = url;

                                            // breaks the switch
                                            break;

                                        // in case it's default
                                        default :
                                            // breaks the switch
                                            break;
                                    }
                                });
                    });
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxscan = function(element, options) {
        // the ammount of time to considered between letter sending any letter
        // sending in bettwen this value is discarded, This value should be
        // small enought do discard the keyboard presses
        var LETTER_INTERVAL = 80;

        // the ration value to be used to calculate the complete interval for
        // the word based on the length of it (in letters), this value is going
        // to be multiplied by the letter interval
        var WORD_RATIO = 0.8;

        // the ammount of time to considered between scannings any scanning in
        // bettwen this value is discarded
        var SCAN_INTERVAL = 400;

        // the minimum length of the sequence to be consdiered a valid scan
        // value
        var MINIMUM_LENGTH = 6;

        // the default values for the key
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the global option
            var global = options["global"] ? options["global"] : true;

            // iterates over all the matched objects
            matchedObject.each(function(index, element) {
                // retrieves the element reference
                var _element = jQuery(element);

                // retrieves the target object base on the global option
                var targetObject = global ? jQuery(document) : _element;

                targetObject.keydown(function(event) {
                            // verifies if the event must be propagated or not
                            _verifyPropagation(targetObject, event);
                        });

                targetObject.keypress(function(event) {
                            // verifies if the event must be propagated or not
                            _verifyPropagation(targetObject, event);
                        });

                // registers for the key down press in the target
                // object reference
                targetObject.keyup(function(event) {
                            // retrieves the current data and then uses it
                            // to retrieve the current timestamp
                            var currentDate = new Date();
                            var currentTime = currentDate.getTime();

                            // retrieves the various data attribute from the target
                            // object for the scanning
                            var sequence = targetObject.data("sequence") || "";
                            var previousTime = targetObject.data("previous_time")
                                    || currentTime;
                            var initialTime = targetObject.data("initial_time")
                                    || currentTime;
                            var ignoring = targetObject.data("ignoring") || false;

                            // calculates the delta (difference) value between the
                            // current time and the previous time
                            var delta = currentTime - previousTime;

                            // retrieves the key value for the current event
                            var keyValue = event.keyCode
                                    ? event.keyCode
                                    : event.charCode
                                            ? event.charCode
                                            : event.which;

                            // in case the ignoring mode is set need
                            // to check if we can get out of it
                            if (ignoring) {
                                // in case the delta time is less than the
                                // time between scan (not getting out of ignore mode)
                                if (delta < SCAN_INTERVAL) {
                                    // in case the current key is an enter
                                    // (time to send the scan error)
                                    if (keyValue == 13) {
                                        // triggers the scan error event
                                        targetObject.trigger("scan_error",
                                                [sequence]);
                                    }

                                    // updates the previous time data in the target
                                    // object and returns the control
                                    targetObject.data("previous_time",
                                            currentTime);
                                    return;
                                }
                                // otherwise the scan interval time has passed and
                                // we're out of the ignore mode
                                else {
                                    // updates the ignoring flag in the target object
                                    targetObject.data("ignoring", false);
                                }
                            }

                            // in case the current delta is more that the interval
                            // allowed between letters (probably keyboard or first
                            // letter of the scanning)
                            if (delta > LETTER_INTERVAL) {
                                // in case the delta is less than the scan interval
                                // (this is not the first letter) must enter in the
                                // ignore mode
                                if (delta < SCAN_INTERVAL) {
                                    // in case the current key is an enter
                                    // (time to send the scan error)
                                    if (keyValue == 13) {
                                        // triggers the scan error event
                                        targetObject.trigger("scan_error",
                                                [sequence]);
                                    }

                                    // updates the target object data to reflect
                                    // the ignore mode entrance and returns the control
                                    targetObject.data("sequence", null);
                                    targetObject.data("previous_time",
                                            currentTime);
                                    targetObject.data("initial_time", null);
                                    targetObject.data("ignoring", true);
                                    return;
                                }
                                // otherwise this is considered to be the first letter
                                // of the sequence and so the values must be reset
                                else {
                                    // resets the sequence to an empty string and
                                    // sets the initial time (of the sequence) to the
                                    // the current timestamp
                                    sequence = "";
                                    initialTime = currentTime;
                                }
                            }

                            // in case the current key is an enters, must check if
                            // the sequence can be finished
                            if (keyValue == 13) {
                                // retrieves the length of the current sequence, defaulting
                                // to zero in case no sequence is present
                                var sequenceLength = sequence
                                        ? sequence.length
                                        : 0;

                                // calculates the delta value to the total time and them
                                // verifies if it is valid
                                var deltaTotal = currentTime - initialTime;
                                var deltaValid = deltaTotal < sequenceLength
                                        * WORD_RATIO * LETTER_INTERVAL;

                                // checks if the current sequence is valid, it is
                                // considered to be valid in case it's not empty
                                // the length respect the minimum size and the delta
                                // time for the word is valid
                                var isValid = sequence
                                        && sequence.length >= MINIMUM_LENGTH
                                        && deltaValid;

                                // in case the sequence is considered to be valid
                                // the scan event is triggered
                                isValid
                                        && targetObject.trigger("scan",
                                                [sequence])

                                // resets the various data values in the
                                // the target object to reflect the default values
                                targetObject.data("sequence", null);
                                targetObject.data("previous_time", null);
                                targetObject.data("initial_time", null);

                                // in case the sequence is not valid no need
                                // to stop the event propagation
                                if (!isValid) {
                                    // returns immediately (avoids event propagation)
                                    return
                                }

                                // the sequence is considered valid and so the event must
                                // be avoided by any other handler (avoid possible problems)
                                event.stopPropagation();
                                event.stopImmediatePropagation();
                                event.preventDefault();
                            } else {
                                // updates the sequence with the character representation
                                // of the current key value (appends it to the sequence)
                                sequence += String.fromCharCode(keyValue);

                                // updates the various target object data values to reflect
                                // the current scan state
                                targetObject.data("sequence", sequence);
                                targetObject.data("previous_time", currentTime);
                                targetObject.data("initial_time", initialTime);
                            }
                        });
            });
        };

        /**
         * Verifies if the current (key) event should be propagated in the
         * current context (crucial for correct working).
         *
         * @param {Element}
         *            targetObject The target object for the verification.
         * @param {Event}
         *            event The event to be used in the verification.
         */
        var _verifyPropagation = function(targetObject, event) {
            // retrieves the current data and then uses it
            // to retrieve the current timestamp
            var currentDate = new Date();
            var currentTime = currentDate.getTime();

            // retrieves the various data attribute from the target
            // object for the scanning
            var sequence = targetObject.data("sequence") || "";
            var previousTime = targetObject.data("previous_time")
                    || currentTime;
            var initialTime = targetObject.data("initial_time") || currentTime;
            var ignoring = targetObject.data("ignoring") || false;

            // calculates the delta (difference) value between the
            // current time and the previous time
            var delta = currentTime - previousTime;

            // retrieves the key value for the current event
            var keyValue = event.keyCode ? event.keyCode : event.charCode
                    ? event.charCode
                    : event.which;

            // in case the key is not an enter no need to do any
            // extra verification
            if (keyValue != 13) {
                // returns immediately (no extra verification required)
                return;
            }

            // retrieves the length of the current sequence, defaulting
            // to zero in case no sequence is present
            var sequenceLength = sequence ? sequence.length : 0;

            // calculates the delta value to the total time and them
            // verifies if it is valid
            var deltaTotal = currentTime - initialTime;
            var deltaValid = deltaTotal < sequenceLength * WORD_RATIO
                    * LETTER_INTERVAL;

            // checks if the current sequence is valid, it is
            // considered to be valid in case it's not empty
            // the length respect the minimum size and the delta
            // time for the word is valid
            var isValid = sequence && sequence.length >= MINIMUM_LENGTH
                    && deltaValid;

            // in case the sequence is not valid no need
            // to stop the event propagation
            if (!isValid) {
                // returns immediately (avoids event propagation)
                return
            }

            // the sequence is considered valid and so the event must
            // be avoided by any other handler (avoid possible problems)
            event.stopPropagation();
            event.stopImmediatePropagation();
            event.preventDefault();
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxshortcuts = function(element, options) {
        // the default values for the shortcuts
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // retrieves all the elements to apply key
            var key = jQuery(".key", matchedObject).not(".template .key");

            // applies the key
            key.uxkey();
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the global option
            var global = options["global"] ? options["global"] : true;

            // iterates over all the matched objects
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the target object base on the global option
                        var targetObject = global ? jQuery(document) : _element;

                        // registers for the key up in the target
                        // object element
                        targetObject.keyup(function(event) {
                                    // retrieves the key value
                                    var keyValue = event.keyCode
                                            ? event.keyCode
                                            : event.charCode
                                                    ? event.charCode
                                                    : event.which;

                                    // switches over the key value
                                    switch (keyValue) {
                                        // in case it's a j key
                                        case 74 :
                                            // sends the current element to the
                                            // next "element"
                                            matchedObject.uxnext();

                                            // breaks the switch
                                            break;

                                        // in case it's a k key
                                        case 75 :
                                            // sends the current element to the
                                            // previous "element"
                                            matchedObject.uxprevious();

                                            // breaks the switch
                                            break;

                                        // in case it's default
                                        default :
                                            // breaks the switch
                                            break;
                                    }
                                });
                    });
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxcenter = function(topOffset, leftOffset, useMargin, avoidTop, avoidLeft) {
        // sets the jquery matched object
        var matchedObject = this;

        // retrieves the top and left offsets
        var topOffset = topOffset ? topOffset : 0;
        var leftOffset = leftOffset ? leftOffset : 0;

        // retrieves the use margin flag
        var useMargin = useMargin ? useMargin : false;

        // retrieves the avoid top and avoid left
        // flags values
        var avoidTop = avoidTop ? avoidTop : false;
        var avoidLeft = avoidLeft ? avoidLeft : false;

        // retrieves the window
        var _window = jQuery(window);

        // retrieves the window dimensions
        var windowHeight = _window.height();
        var windowWidth = _window.width();

        // retrieves the window scroll values
        var windowSrollTop = _window.scrollTop();
        var windowSrollLeft = _window.scrollLeft();

        // retrieves the matched object dimensions
        var matchedObjectHeight = matchedObject.outerHeight();
        var matchedObjectWidth = matchedObject.outerWidth();

        // calculates the element positions
        var topPosition = ((windowHeight - matchedObjectHeight) / 2);
        var leftPosition = ((windowWidth - matchedObjectWidth) / 2);

        // recalculates the element positions according to the
        // top and left offsets in percentage
        topPosition -= topOffset * topPosition;
        leftPosition -= leftOffset * leftPosition;

        // adds the extra scroll position to the top position of
        // the element so that the element is "scroll centered"
        topPosition += windowSrollTop;
        leftPosition += windowSrollLeft;

        // in case the reference attribute to be used for centering
        // the element is the margin
        if (useMargin) {
            // sets the element (matched object) margins
            !avoidTop && matchedObject.css("margin-top", topPosition + "px");
            !avoidLeft && matchedObject.css("margin-left", leftPosition + "px");
        }
        // otherwise the "normal" centering should be used
        else {
            // sets the element (matched object) position
            !avoidTop && matchedObject.css("top", topPosition + "px");
            !avoidLeft && matchedObject.css("left", leftPosition + "px");
        }

        // returns the object
        return this;
    }
})(jQuery);

/**
 * jQuery replacer plugin, this jQuery plugin provides the base infra-structure
 * for the creation of a replacer component.
 *
 * @name jquery-replacer.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxreplacer = function(options) {
        // the default values for the replacer
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the matched objects
            // to check for target value existence
            matchedObject.each(function(index, element) {
                        // retrieves the replacer
                        var replacer = jQuery(element);

                        // retrieves the selector value for the target
                        // and then uses it to retrieve the target
                        var targetSelector = replacer.attr("data-target");
                        var target = jQuery(targetSelector);

                        // retrieves the target element value
                        var value = target.uxvalue();

                        // replaces the elements (not focusing in the
                        // target element)
                        value && _replace(replacer, options, false);
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // register for the click event on the matched
            // object (replacement action)
            matchedObject.click(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // replaces the elements (focusing in the
                        // target element)
                        _replace(element, options, true);
                    });
        };

        var _replace = function(matchedObject, options, focus) {
            // retrieves the selector value for the target
            // and then uses it to retrieve the target
            var targetSelector = matchedObject.attr("data-target");
            var target = jQuery(targetSelector);

            // checks if the current target is a text field or a
            // text area in case it's not the target for focus
            // should be a sub element that is a text field (or area)
            var isTextField = target.hasClass("text-field")
                    || target.hasClass("text-area");
            focusTarget = isTextField ? target : jQuery(
                    ".text-field, .text-area", target);

            // hides the matched object and then shows (and focus)
            // the target (element)
            matchedObject.hide();
            target.show();
            focus && focusTarget.focus();
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxcursor = function(position) {
        // the default values for the next
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object and retrieves
        // the first element from it
        var matchedObject = this;
        var firstElement = matchedObject.get(0);

        // in case the set selection range function
        // is available
        if (firstElement.setSelectionRange) {
            // sets the element selection range
            firstElement.setSelectionRange(position, position);
        }
        // otherwise in case create text range function
        // is available
        else if (firstElement.createTextRange) {
            // creates a new text range
            var range = firstElement.createTextRange();

            // collapses the range and moves the character
            // to the appropriate position
            range.collapse(true);
            range.moveEnd("character", position);
            range.moveStart("character", position);

            // selects the range
            range.select();
        }

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxfocus = function(options) {
        // the default values for the next
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // in case the matched object is not defined
            // or in case it's an empty list must return
            // immediatly initialization is not meant to
            // be run (corruption may occur)
            if (!matchedObject || matchedObject.length == 0) {
                return;
            }

            // retrieves the complete set of currently focused
            // elements and blurs them so that none remain
            // focused, this operation is required otherwise any
            // blur operation in the element would be ignored
            var focused = jQuery(":focus");
            focused.blur();

            // iterates over each of the matched
            // objects to focus on them
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // focus on the element
                        _element.focus();

                        // retrieves the (data) value from the element (from
                        // data value) and then retrieves the length from it
                        // and then uses it to set the cursor position
                        // on the element (moves the cursor)
                        var dataValue = _element.attr("data-value");
                        var dataValueLength = dataValue ? dataValue.length : 0;
                        _element.uxcursor(dataValueLength);
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxnext = function(options) {
        // the default values for the next
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // retrieves the next url element from the
            // matched object and then retrieves the (textual) value
            var nextUrl = jQuery(".next-url", matchedObject);
            var nextUrlValue = nextUrl.text();

            // trims the next url value
            nextUrlValue = nextUrlValue.trim();

            // in case the next url value is not valid
            if (!nextUrlValue) {
                // returns immediately
                // (no url change)
                return;
            }

            // sets the new location in the document (redirect)
            document.location = nextUrlValue;
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxprevious = function(options) {
        // the default values for the previous
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // retrieves the previous url element from the
            // matched object and then retrieves the (textual) value
            var previousUrl = jQuery(".previous-url", matchedObject);
            var previousUrlValue = previousUrl.text();

            // trims the previous url value
            previousUrlValue = previousUrlValue.trim();

            // in case the previous url value is not valid
            if (!previousUrlValue) {
                // returns immediately
                // (no url change)
                return;
            }

            // sets the new location in the document (redirect)
            document.location = previousUrlValue;
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery scroll to plugin, this jQuery plugin provides the base infra-structure
 * for smooth scrolling in the viewport.
 *
 * @name jquery-scrollto.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 * @credits Ariel Flesler <aflesler@gmail.com>
 */
(function(jQuery) {
    // sets the scroll to to be the global function
    // scrolling the window
    var uxscrollto = jQuery.uxscrollto = function(target, duration, settings) {
        jQuery(window).uxscrollto(target, duration, settings);
    };

    // creates the map of scroll default values
    uxscrollto.defaults = {
        axis : "xy",
        duration : parseFloat($.fn.jquery) >= 1.3 ? 0 : 1
    };

    /**
     * Returns the element that needs to be animated to scroll the window.
     *
     * @param {Object}
     *            scope The current scope to be used.
     * @return {Element} The input element.
     */
    uxscrollto.window = function(scope) {
        // returns the scrollable element for
        // the window element
        return jQuery(window)._scrollable();
    };

    /**
     * Returns the real elements to scroll (supports window/iframes, documents
     * and regular nodes).
     *
     * @return {Element} The input element.
     */
    jQuery.fn._scrollable = function() {
        return this.map(function() {
            // retrieves the element
            var element = this

            // checks if the current element is in fact
            // a window
            var isWindow = !element.nodeName
                    || jQuery.inArray(element.nodeName.toLowerCase(), [
                                    "iframe", "#document", "html", "body"]) != -1;

            // in case the element is not a window
            // it's scrollable
            if (!isWindow) {
                // returns immediately the element
                return element;
            }

            // retrieves the document from the window
            var _document = (element.contentWindow || element).document
                    || element.ownerDocument || element;

            // returns the scrollable element from the document
            // based on the current browser
            return jQuery.browser.safari
                    || _document.compatMode == "BackCompat"
                    ? _document.body
                    : _document.documentElement;
        });
    };

    jQuery.fn.uxscrollto = function(target, duration, settings) {
        // in case the target is not defined or in
        // case it's an empty array
        if (!target || target.length == 0) {
            // returns immeidately
            return;
        }

        // in case the duration is an object
        if (typeof duration == "object") {
            settings = duration;
            duration = 0;
        }

        // in case the setting is a function
        // (on after function)
        if (typeof settings == "function") {
            settings = {
                onAfter : settings
            };
        }

        // incase the target is the maximum
        if (target == "max") {
            // set the target to a really big
            // value
            target = 9e9;
        }

        // exteds the settings with the default setttings
        settings = jQuery.extend({}, uxscrollto.defaults, settings);

        // speed is still recognized for backwards compatibility
        duration = duration || settings.speed || settings.duration;

        // makes sure the settings are given right
        settings.queue = settings.queue && settings.axis.length > 1;

        if (settings.queue) {
            // let's keep the overall duration
            duration /= 2;
        }

        settings.offset = both(settings.offset);
        settings.over = both(settings.over);

        return this._scrollable().each(function() {
            // retrieves the element and then based on
            // it retrieves the jquery element, target
            // target offset, attributes and window
            var element = this;
            var _element = jQuery(element)
            var _target = target;
            var targetOffset;
            var attributes = {}
            var win = _element.is("html, body");

            // switches over the target
            switch (typeof _target) {
                // in case it's a number or string
                // will pass the regex
                case "number" :
                case "string" :
                    if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(_target)) {
                        _target = both(_target);
                        break;
                    }
                    // relative selector, avoids break
                    _target = jQuery(_target, this);
                case "object" :
                    // in case it's a dom element or jquery element
                    if (_target.is || _target.style) {
                        // retrieves the real position of the target
                        targetOffset = (_target = jQuery(_target)).offset();
                    }
            }

            jQuery.each(settings.axis.split(""), function(i, axis) {
                // retrieves the position and converts it to lower case
                // then retrieves the key to the position, the old
                // element and the maximum between the axis and the element
                var position = axis == "x" ? "Left" : "Top";
                var positionLower = position.toLowerCase();
                var key = "scroll" + position;
                var old = element[key];
                var max = uxscrollto.max(element, axis);

                // in case there is a target offset defined
                if (targetOffset) {
                    attributes[key] = targetOffset[positionLower]
                            + (win ? 0 : old - _element.offset()[positionLower]);

                    // in case it's a dom element, reduces the margin
                    if (settings.margin) {
                        attributes[key] -= parseInt(_target.css("margin"
                                + position))
                                || 0;
                        attributes[key] -= parseInt(_target.css("border"
                                + position + "Width"))
                                || 0;
                    }

                    attributes[key] += settings.offset[positionLower] || 0;

                    if (settings.over[positionLower])
                        // scrolls to a fraction of its width/height
                        attributes[key] += _target[axis == "x"
                                ? "width"
                                : "height"]()
                                * settings.over[positionLower];
                }
                // otherwise no offset should be used
                else {
                    // sets the value as the target position
                    var value = _target[positionLower];

                    // handles the percentage values
                    attributes[key] = value.slice && value.slice(-1) == "%"
                            ? parseFloat(value) / 100 * max
                            : value;
                }

                // in case it's umber or "number"
                if (/^\d+$/.test(attributes[key])) {
                    // checks the limits
                    attributes[key] = attributes[key] <= 0 ? 0 : Math.min(
                            attributes[key], max);
                }

                // in case it's queueing axes
                if (!i && settings.queue) {
                    // avoids wasting time animating, if there's no need
                    if (old != attributes[key]) {
                        // intermediate animation
                        animate(settings.onAfterFirst);
                    }

                    // avoids animating this axis again in the next iteration
                    delete attributes[key];
                }
            });

            /**
             * Animate function that run the animation and calls the given
             * callback at the end of the animation.
             *
             * @param {Function}
             *            callback The callback to be called at the end of the
             *            animation.
             */
            var animate = function(callback) {
                _element.animate(attributes, duration, settings.easing,
                        callback && function() {
                            callback.call(this, target, settings);
                        });
            };

            // runs the animation and calls
            // the on after callback at the end
            animate(settings.onAfter);
        }).end();
    };

    /**
     * Goes to maximum scrolling, works on quirks mode It only fails (not too
     * badly) on IE, quirks mode.
     *
     * @param {Element}
     *            element The element to be used aas reference for the scroll.
     * @param {String}
     *            axis The axis to be used in scroll reference.
     * @return {Element} The input element.
     */
    uxscrollto.max = function(element, axis) {
        // retrieves both the dimension and the scroll
        // references
        var dimensions = axis == "x" ? "Width" : "Height";
        var scroll = "scroll" + dimensions;

        // in case the element represents an html or
        // body element
        if (!jQuery(element).is("html, body")) {
            // returns the element scroll minus the element
            // dimensions
            return element[scroll]
                    - jQuery(element)[dimensions.toLowerCase()]();
        }

        // creates the size key and retrieves
        // the html and body elements from the
        // element's owner document
        var size = "client" + dimensions;
        var html = element.ownerDocument.documentElement;
        var body = element.ownerDocument.body;

        // returns the maximum between the scroll of
        // the html and body minus the minimum between
        // the html and body size
        return Math.max(html[scroll], body[scroll])
                - Math.min(html[size], body[size]);
    };

    /**
     * Sets the value in a map containing the top and left keys. In the map the
     * value is set for both the top and left keys.
     *
     * @param {Map}
     *            value The value to be set in both keys in a map.
     * @return {Map} The map with the top and left key set to the value.
     */
    var both = function(value) {
        return typeof value == "object" ? value : {
            top : value,
            left : value
        };
    };
})(jQuery);

jQuery.uxvisible = function(element, offset, delta, parent) {
    // retreives the offset value, talking into
    // acccount the default value
    offset = offset ? offset : 0;

    // retrieves the delta value that can be used to
    // control the poistion of the element to be teste
    // for visibility (margin delta)
    delta = delta ? delta : 0;

    // retrieves the parent element for which the check
    // for visibility will be made, in case none is provided
    // the check is considered global (window)
    parent = parent ? parent : window;

    // retrieves the window and the "proper"
    // element reference
    var _parent = jQuery(parent);
    var element = jQuery(element);

    // retrieves the element height (for overflow calculation)
    var elementHeight = element.outerHeight();

    // retrieves the offset values for the parent element (view)
    // and calculates the height of that view taking into account
    // if the current parent is the window (avoids problems)
    var viewOffset = _parent.offset();
    var viewOffsetTop = viewOffset ? viewOffset.top : 0;
    var viewHeight = _parent[0] == window
            ? _parent.height()
            : _parent.outerHeight();
    var viewScrollTop = _parent.scrollTop();

    // retrieves the offset top the top of the element taking into
    // account if the current parent in use is the window element
    var elementOffsetTop = _parent[0] == window
            ? element.offset().top
            : element.offset().top + viewScrollTop;

    // retrieves the top and bottom positions of the
    // view(port) element
    var viewTop = viewOffsetTop + viewScrollTop + offset;
    var viewBottom = viewOffsetTop + viewScrollTop + viewHeight;

    // retrieves the element top and bottom positions
    var elementTop = elementOffsetTop + delta;
    var elementBottom = elementTop + element.outerHeight();

    // runs the intersection test on the element against
    // the view(port) values
    return ((elementBottom >= viewTop) && (elementTop <= viewBottom)
            && (elementBottom <= viewBottom) && (elementTop >= viewTop));
};

(function($) {
    jQuery.fn.uxscroll = function(options) {
        // the default values for the scrill
        var defaults = {
            offset : 0,
            padding : 0,
            parent : window
        };

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // in case the matched object is not defined
            // or in case it's an empty list
            if (!matchedObject || matchedObject.length == 0) {
                // returns immediately
                return;
            }

            // retrieves the offset and padding from the options
            var offset = options["offset"];
            var padding = options["padding"];
            var parent = options["parent"];

            // retrieves the matched object height and
            // offset to top (from offset)
            var height = matchedObject.outerHeight();
            var _offset = matchedObject.offset();
            var offsetTop = _offset.top;

            // retrieves the top elements and then uses them
            // to retrieve the current offset to top in the viewport
            var topElements = jQuery("html, body");
            var htmlElement = jQuery("html");
            var _body = jQuery("body");
            var htmlScrollTop = htmlElement.scrollTop();
            var bodyTop = _body.scrollTop();
            var scrollTop = htmlScrollTop > bodyTop ? htmlScrollTop : bodyTop;

            // retrieves the parent element reference to
            // be used for attribute calculation
            var _parent = jQuery(parent);

            // updates the scroll top value taking into account if the
            // current parent elemeent is the window
            scrollTop = _parent[0] == window ? scrollTop : _parent.scrollTop();

            // retrieves the height of the parent element
            var parentHeight = _parent[0] == window
                    ? _parent.height()
                    : _parent.outerHeight();

            // calculates the top offset value for the parent element
            // to be used for some calculus (in no window mode)
            var parentOffset = _parent.offset();
            var parentOffsetTop = parentOffset
                    ? parentOffset.top - scrollTop
                    : 0;

            // calculates the bottom position for the matched object
            // and uses the value to determine if the element is position
            // below of above the position of the scroll viewport
            var bottomPosition = offsetTop - parentOffsetTop
                    + matchedObject.outerHeight();
            var isBelow = scrollTop + parentHeight < bottomPosition;

            // calculates the appropriate (new) scroll top value taking
            // into account if the element is below the viewport or
            // abover, this calculus also takes into account the offset
            // and padding values
            var scrollTop = isBelow ? offsetTop - parentOffsetTop
                    - parentHeight + height + padding : offsetTop
                    - parentOffsetTop - offset - padding;

            // changes the scroll top value in the parent element,
            // this should make visible the matched object
            _parent.scrollTop(scrollTop);
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxattr = function(attrName, attrNameTarget) {
        // sets the jquery matched object
        var matchedObject = this;

        // creates the attribute selector
        var attributeSelector = "[" + attrName + "]";

        // retrieves the elements that contain the attribute
        var attributeElements = jQuery(attributeSelector, matchedObject);

        // iterates over all the attribute elements
        attributeElements.each(function(index, element) {
                    // retrieves the current attribute element
                    var attributeElement = jQuery(element);

                    // retrieves the attribute and re-sets it
                    // under the "new" attribute name
                    var attribute = attributeElement.attr(attrName);
                    attributeElement.attr(attrNameTarget, attribute);
                });
    }
})(jQuery);

(function($) {
    jQuery.fn.uxbrowser = function(options) {
        // the data browser values
        var DATA_BROWSER = [{
                    string : navigator.userAgent,
                    subString : "Chrome",
                    identity : "Chrome"
                }, {
                    string : navigator.userAgent,
                    subString : "OmniWeb",
                    versionSearch : "OmniWeb/",
                    identity : "OmniWeb"
                }, {
                    string : navigator.vendor,
                    subString : "Apple",
                    identity : "Safari",
                    versionSearch : "Version"
                }, {
                    prop : window.opera,
                    identity : "Opera"
                }, {
                    string : navigator.vendor,
                    subString : "iCab",
                    identity : "iCab"
                }, {
                    string : navigator.vendor,
                    subString : "KDE",
                    identity : "Konqueror"
                }, {
                    string : navigator.userAgent,
                    subString : "Firefox",
                    identity : "Firefox"
                }, {
                    string : navigator.vendor,
                    subString : "Camino",
                    identity : "Camino"
                }, {
                    string : navigator.userAgent,
                    subString : "Netscape",
                    identity : "Netscape"
                }, {
                    string : navigator.userAgent,
                    subString : "MSIE",
                    identity : "Explorer",
                    versionSearch : "MSIE"
                }, {
                    string : navigator.userAgent,
                    subString : "Gecko",
                    identity : "Mozilla",
                    versionSearch : "rv"
                }, {
                    string : navigator.userAgent,
                    subString : "Mozilla",
                    identity : "Netscape",
                    versionSearch : "Mozilla"
                }];

        // the data os values
        var DATA_OS = [{
                    string : navigator.platform,
                    subString : "Win",
                    identity : "Windows"
                }, {
                    string : navigator.platform,
                    subString : "Mac",
                    identity : "Mac"
                }, {
                    string : navigator.userAgent,
                    subString : "iPhone",
                    identity : "iPhone/iPod"
                }, {
                    string : navigator.platform,
                    subString : "Linux",
                    identity : "Linux"
                }];

        // the default values for the browser
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // retrieves the browser information
            var browserName = _searchString(DATA_BROWSER) || "Unknown browser";
            var browserVersion = _searchVersion(navigator.userAgent)
                    || _searchVersion(navigator.appVersion)
                    || "Unknown version";
            var browserOs = _searchString(DATA_OS) || "Unknown OS";

            // lower cases the browser values
            browserName = browserName.toLowerCase();
            browserOs = browserOs.toLowerCase();

            // adds the browser classes to the body item
            matchedObject.addClass(browserName);
            matchedObject.addClass(browserName + "-" + browserVersion);
            matchedObject.addClass(browserOs);
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        var _searchString = function(data) {
            for (var index = 0; index < data.length; index++) {
                var dataString = data[index].string;
                var dataProp = data[index].prop;
                jQuery.fn.uxbrowser.versionSearchString = data[index].versionSearch
                        || data[index].identity;
                if (dataString) {
                    if (dataString.indexOf(data[index].subString) != -1) {
                        return data[index].identity;
                    }
                } else if (dataProp) {
                    return data[index].identity;
                }
            }
        };

        var _searchVersion = function(dataString) {
            // tries to search for the version search string
            var index = dataString.indexOf(jQuery.fn.uxbrowser.versionSearchString);

            // in case the version search string is not found
            if (index == -1) {
                // returns immediately
                return;
            }

            return parseFloat(dataString.substring(index
                    + jQuery.fn.uxbrowser.versionSearchString.length + 1));
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxdisable = function(options) {
        // the default values for the disable
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the matched objects
            matchedObject.each(function(index, element) {
                        // retrieves the element reference and
                        // adds the disabled class from to it
                        var _element = jQuery(element);
                        _element.addClass("disabled");

                        // checks if the currently element is an input field
                        // in case it is sets the disabled attribute
                        var isInput = _element.is("input, textarea");
                        isInput && _element.attr("disabled", "1");

                        // triggers the disabled event on the element
                        // to indicate that it has been disabled
                        _element.triggerHandler("disabled");
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxenable = function(method, options) {
        // the default values for the enable
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the matched objects
            matchedObject.each(function(index, element) {
                        // retrieves the element reference and
                        // removes the disabled class from the it
                        var _element = jQuery(element);
                        _element.removeClass("disabled");

                        // checks if the currently matche object is an input field
                        // in case it is removes the disabled attribute
                        var isInput = _element.is("input, textarea");
                        isInput && _element.removeAttr("disabled");

                        // triggers the enabled event on the element
                        // to indicate that it has been enabled
                        _element.triggerHandler("enabled");
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxfields = function(nested) {
        // returns the complete set of fields (valid fields)
        // for the provided context, note that in case the
        // nested flag is not set and a field is contained
        // inside a valid parent field it's filtered
        var fields = jQuery("[data-object]", this);
        fields = nested ? fields : fields.not(":parents([data-object])");
        return fields;
    }
})(jQuery);

(function($) {
    jQuery.fn.uxfloat = function() {
        // sets the jquery matched object
        var matchedObject = this;

        // retrieves the string representation value
        // from the matched object as uses it to convert
        // it into a float value and verifies the conversion,
        // in case it failed default to a zero value
        var value = matchedObject.uxvalue();
        var valueF = parseFloat(value);
        valueF = isNaN(valueF) ? 0.0 : valueF;

        // returns the value that was retrieved and converted
        // into a float value
        return valueF;
    }
})(jQuery);

(function($) {
    jQuery.fn.uxint = function() {
        // sets the jquery matched object
        var matchedObject = this;

        // retrieves the string representation value
        // from the matched object as uses it to convert
        // it into a integer value and verifies the conversion,
        // in case it failed default to a zero value
        var value = matchedObject.uxvalue();
        var valueI = parseInt(value);
        valueI = isNaN(valueI) ? 0 : valueI;

        // returns the value that was retrieved and converted
        // into a integer value
        return valueI;
    }
})(jQuery);

(function($) {
    jQuery.fn.uxprint = function(method, options) {
        // the default values for the enable
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // in case the matched object is empty
            if (matchedObject.length == 0) {
                // returns immediately
                return;
            }

            // pritns the current document
            // to the printer
            window.print();
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxreset = function() {
        // sets the jquery matched object
        var matchedObject = this;

        // iterates over all the elements that were selected
        // in order to perform the reset operation in each of them
        matchedObject.each(function(index, element) {
                    // retrieves the reference to the current
                    // element for which the reset operation will
                    // be perfomed and the value set to the original
                    var _element = jQuery(this);

                    // retrieves the object (type) for the currently
                    // matched object then uses it to construct the method
                    // name to be used and uses it to retrieve the the
                    // value for the component
                    var object = _element.attr("data-object");
                    var method = _element["ux" + object]
                    method && method.call(_element, "reset");
                });
    }
})(jQuery);

(function($) {
    jQuery.fn.uxvalue = function() {
        // sets the jquery matched object
        var matchedObject = this;

        // tries to retrieve the complete set of arguments
        // for the value operation (in case an argument is
        // provided this is a set operation)
        var options = arguments.length > 0 ? {
            value : arguments[0]
        } : {};
        var _arguments = ["value", options];

        // retrieves the correct fallback method to be used to
        // retrieve (or set) the value according to its type
        var valueF = matchedObject.is("input, textarea")
                ? matchedObject.val
                : matchedObject.text;

        // retrieves the object (type) for the currently
        // matched object then uses it to contruct the method
        // name to be used and uses it to retrieve the the
        // value for the component
        var object = matchedObject.attr("data-object");
        var method = matchedObject["ux" + object]
        var value = method
                ? method.apply(matchedObject, _arguments)
                : valueF.apply(matchedObject, arguments);

        // returns the just retrived value from the component
        // to the caller method
        return value;
    }
})(jQuery);

(function($) {
    jQuery.fn.uxdatetime = function(options) {
        // the default values for the name change
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the matched objects
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the form associated with the current
                        // element so that it can be registered for the submit event
                        var form = _element.parents(".form");

                        // retrieves the value of the utc offset flag
                        // (if the utc flag is set the date is set to work
                        // in the utc zone)
                        var utc = _element.hasClass("utc");

                        // registers for the form submit event so that the
                        // complete data may be created and set correctly
                        form.submit(function() {
                                    // retrieves the data and time components of
                                    // the date and time component
                                    var date = jQuery(".date", _element);
                                    var time = jQuery(".time", _element);

                                    // creates the complete date string by joining the string
                                    // values of both the data and the time
                                    var dateString = date.val() + " "
                                            + time.val();

                                    // retrieves the current value and then uses it to parse
                                    // it as current timestamp
                                    var currentTimestamp = utc
                                            ? (Date.parse(dateString + " UTC") / 1000)
                                            : Date.parseUtc(dateString) / 1000;

                                    // retrieves the name attribute from the date element
                                    // and then removes it to avoid sending the literal date value
                                    var name = date.attr("name");
                                    date.removeAttr("name");
                                    time.removeAttr("name");

                                    // creates the hidden field to submit the timestamp value
                                    // described in the text field
                                    time.after("<input type=\"hidden\" name=\""
                                            + name + "\" value=\""
                                            + String(currentTimestamp)
                                            + "\" />");
                                });
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxenumeration = function(options) {
        // the regex for string character regex,
        // for string replacement
        var STRING_CHARACTER_REGEX = new RegExp("'", "g");

        // the default values for the name change
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the matched objects
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the enum attribute, for latter
                        // json parsing
                        var _enum = _element.attr("data-enum");

                        // replaces the string character in the error
                        // message list and then parses it as json
                        var _enum = _enum.replace(STRING_CHARACTER_REGEX, "\"");
                        var enumList = jQuery.parseJSON(_enum);

                        // retrieves the (element) value
                        var value = _element.html();

                        // "calculates" the number of (decimal) places
                        // in case none is provided zero decimal places
                        // are used
                        var valueInteger = parseInt(value);
                        valueInteger = isNaN(valueInteger) ? 1 : valueInteger;

                        // retrieves the enum value from the enum
                        // and then converts it into a string
                        var enumValue = enumList[valueInteger - 1];
                        var enumValueString = String(enumValue);

                        // sets the enum value string in the element and
                        // adds the processed class to it
                        _element.html(enumValueString);
                        _element.addClass("processed");
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxnumber = function(options) {
        // the default values for the name change
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the matched objects
            matchedObject.each(function(index, element) {
                // retrieves the element reference
                var _element = jQuery(element);

                // retrieves the various attributes of
                // the element
                var places = _element.attr("data-places");
                var separator = _element.attr("data-separator");
                var magnitudeSeparator = _element.attr("data-magnitude_separator");

                // retrieves the (element) value
                var value = _element.html();

                // "calculates" the number of (decimal) places
                // in case none is provided zero decimal places
                // are used
                var placesInteger = parseInt(places);
                placesInteger = isNaN(placesInteger) ? 0 : placesInteger;

                // parses the value as a float value, and then
                // converts it back to float string using the
                // defined number of decimal places
                var valueFloat = parseFloat(value);
                var valueString = valueFloat.toFixed(placesInteger);

                // in case the "parsed" float value is not valid must
                // set the element as processed to display it and return
                // immediately (avoids dead lock in visual value)
                var invalid = isNaN(valueFloat);
                if (invalid) {
                    _element.addClass("processed");
                    return;
                }

                // retrieves the value string replacing the decimal
                // separator in case one was defined
                valueString = separator
                        ? valueString.replace(".", separator)
                        : valueString;

                // in case the magnitude separator is defined
                // there's a necessecity to process it by spliting
                // the value string into integer and decimal part
                if (magnitudeSeparator) {
                    // retrieves the value for the separator
                    separator = separator ? separator : ".";

                    // splits the value string and then retrives
                    // the integer part of the value
                    var valueStringSplit = valueString.split(separator);
                    var integerPart = valueStringSplit[0];

                    // in case the value string split contains
                    // at least two elements (decimal part exists)
                    if (valueStringSplit.length > 1) {
                        // retrieves the decimal part from the
                        // value string split
                        var decimalPart = valueStringSplit[1];
                    }
                    // otherwise no decimal part exists
                    else {
                        // unsets the decimal part
                        var decimalPart = null;
                    }

                    // retrieves the initial index value, using
                    // the modulus of the inter part length
                    // or three the division jump
                    var initialIndex = integerPart.length % 3
                            ? integerPart.length % 3
                            : 3;

                    // retrieves the initial integer part for
                    // magnitute
                    var _integerPart = integerPart.slice(0, initialIndex);

                    // iterates over the rest of the integer part to separate
                    // it using the magnitude separator
                    for (var index = initialIndex; index < integerPart.length; index += 3) {
                        // adds the magnitude separator and current slice of the integer part
                        // to the current re-calculated integer part
                        _integerPart += magnitudeSeparator
                                + integerPart.slice(index, index + 3);
                    }

                    // sets the integer part as the recently calculated
                    // integer part
                    integerPart = _integerPart;

                    // re-calculates the value string takning into account if
                    // there is a decimal part to the number in case it exists
                    // it concatenates the integer and the decimal part using the separator
                    // otherwise only the integer part is used in the value string
                    valueString = decimalPart ? integerPart + separator
                            + decimalPart : integerPart;
                }

                // sets the new value string in the element and
                // adds the processed class to it
                _element.html(valueString);
                _element.addClass("processed");
            });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxtemplate = function(attributes, options) {
        // the default values for the template
        var defaults = {};

        // sets the default attributes value
        var attributes = attributes ? attributes : {};

        // sets the default options value
        var options = options ? options : {
            apply : true,
            nullify : true,
            defaultValue : ""
        };

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        var _applyTemplate = function(element) {
            // retrieves the ux apply option
            var apply = options["apply"];

            // clones the element creating the template
            // element value
            var templateElement = element.clone();

            // applies the template to the template element, retrieving
            // the template contents
            var templateContents = __applyTemplate(templateElement, attributes);

            // set the template contents in the template element
            // and then removes the template class from it
            templateElement.html(templateContents);
            templateElement.removeClass("template");

            // applies the ux in the element, in case the
            // apply flag is set
            apply && templateElement.uxapply();

            // re-sets the the "obfuscated" name and src
            // attributes to the original form
            templateElement.uxattr("data-name", "name");
            templateElement.uxattr("data-src", "src");

            // returns the template element (cloned element)
            return templateElement;
        }

        /**
         * Applies the given attributes to the given template contents string.
         * The attributes map should contain a list of attribute to be applied
         * to the template. The nullify string may control what value should be
         * used to describe a null value (empty string or null string).
         *
         * @param {String}
         *            templateContents The string containing the template
         *            contents.
         * @param {Map}
         *            attributes The map of attributes to be used.
         * @param {Boolean}
         *            nullify If the attribute should be nullified in case it's
         *            null.
         * @param {String}
         *            defaultValue The default value to be used in case a null
         *            or undefined value is resolved from the current map of
         *            values in template rendering.
         * @param {String}
         *            baseKey The base key value to be used in all of the keys.
         * @return {String} The resulting template contents (after apply).
         */
        var _applyAttributes = function(templateContents, attributes, nullify, defaultValue, baseKey) {
            // retrieves the various default value to be used
            // in the template rendering
            var defaultValue = defaultValue ? defaultValue : "";
            var baseKey = baseKey ? baseKey : "";

            // converts the attribute to (jquery) element
            var attributesElement = jQuery(attributes);

            // iterates over all the attributes
            for (var key in attributes) {
                // retrieves the value of the attribute to be set
                var attributeValue = attributes[key];

                // creates the "final" key value from the
                // base key value
                key = baseKey + key;

                // in case the attribute value is null
                // (special case)
                if (attributeValue == null) {
                    // sets the appropriate attribute value according
                    // to the nullify value
                    attributeValue = nullify ? defaultValue : "null";
                }

                // retrieves the type of the attribute value
                // for later checking
                var attributeValueType = typeof attributeValue;

                // in case the attribute value is
                // an object
                if (attributeValueType == "object") {
                    // re-calculates the (new) base key to be
                    // sued in next iteration
                    var newBaseKey = key + ".";

                    // applies the attributes to the template contens
                    // based in the current attribute value and with
                    // the new base key value
                    templateContents = _applyAttributes(templateContents,
                            attributeValue, nullify, defaultValue, newBaseKey);
                }
                // otherwise the attribute value must be
                // a simple basic type
                else {
                    // creates the regular expression for globar search on the key
                    var keyRegex = new RegExp("%\\[" + key + "\\]", "g");

                    // replaces the template strings in the html
                    templateContents = templateContents.replace(keyRegex,
                            attributeValue);
                }
            }

            // returns the templte contents
            return templateContents;
        };

        var __applyTemplate = function(templateElement, attributes) {
            // retrieves the nullify option
            var nullify = options["nullify"];
            var defaultValue = options["defaultValue"];

            // retrirves the for each elments for the current template element
            var foreachElements = jQuery(".template-foreach", templateElement).not(".template-foreach .template-foreach");

            // iterates over all the for each elements
            foreachElements.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the variable for the element
                        var variableName = _element.attr("data-variable");
                        var variable = attributes[variableName];

                        // retrieves the target element (type) for the for
                        // each substituin
                        var target = _element.attr("data-target");

                        // start the for each buffer
                        var forEachBuffer = "";

                        // iterates over all the items in the variable
                        for (var variableIndex in variable) {
                            // retrieves the (current) variable item
                            var variableItem = variable[variableIndex];

                            // creates the template element
                            var _templateElement = _element.clone();

                            // applies the template to the current element
                            var forEachTemplateElement = __applyTemplate(
                                    _templateElement, variableItem);

                            // adds the new element to the for each
                            // buffer string value
                            forEachBuffer += "<" + target + ">"
                                    + forEachTemplateElement + "</" + target
                                    + ">";
                        }

                        // replaces the element value with the value
                        // in the for each buffer
                        _element.replaceWith(forEachBuffer);
                    });

            // retrieves the template contents
            var templateContents = templateElement.html();

            // applies the attributes to the template contents
            // in case the template contents is correctly set
            templateContents = templateContents
                    ? _applyAttributes(templateContents, attributes, nullify,
                            defaultValue)
                    : templateContents;

            // returns the template contents
            return templateContents;
        };

        // initializes the plugin
        initialize();

        // applies the template to the matched object
        // and retrieves the resulting template item
        var templateItem = _applyTemplate(matchedObject, attributes);

        // returns the template item
        return templateItem;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxtimestamp = function(method, options) {
        // the various regex values for the time
        // date format part replacement
        var YEAR_CHARACTER = new RegExp("%Y", "g");
        var MONTH_CHARACTER = new RegExp("%m", "g");
        var DAY_CHARACTER = new RegExp("%d", "g");
        var HOUR_CHARACTER = new RegExp("%H", "g");
        var MINUTE_CHARACTER = new RegExp("%M", "g");
        var SECOND_CHARACTER = new RegExp("%S", "g");
        var FULL_MONTH_CHARACTER = new RegExp("%B", "g");
        var ABBREVIATED_MONTH_CHARACTER = new RegExp("%b", "g");

        // the lists for the month string values
        var FULL_MONTHS = ["January", "February", "March", "April", "May",
                "June", "July", "August", "September", "October", "November",
                "December"];
        var ABBREVIATED_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        // the default values for the timestamp
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the matched object
            // elements to update the timestamp value
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the current timestamp string
                        // value from the element and converts
                        // it into an integer
                        var timestampString = _element.html();
                        var timestamp = parseInt(timestampString);

                        // in case the timestamp could not be parsed
                        // (the timestamp is not a number)
                        if (isNaN(timestamp)) {
                            // adds the processed class to show the value
                            // even for the default value (fallback)
                            _element.addClass("processed");

                            // returns immediately (no change)
                            return;
                        }

                        // retrieves the format from the element
                        var format = _element.attr("data-format");

                        // retrieves the utc (value) from the element
                        var utc = _element.attr("data-utc");

                        // converts the timestamp into a date object
                        var date = new Date(timestamp * 1000);

                        // processes the provided datae string according
                        // to the given format string
                        var dateString = _processDate(date, format, utc);

                        // sets the "new" formated date value in the element and
                        // adds the processed class to it
                        _element.html(dateString);
                        _element.addClass("processed");
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        var _processDate = function(date, format, utc) {
            // retrieves the various components of the date
            var year = utc ? date.getUTCFullYear() : date.getFullYear();
            var month = utc ? date.getUTCMonth() + 1 : date.getMonth() + 1;
            var day = utc ? date.getUTCDate() : date.getDate();
            var hours = utc ? date.getUTCHours() : date.getHours();
            var minutes = utc ? date.getUTCMinutes() : date.getMinutes();
            var seconds = utc ? date.getUTCSeconds() : date.getSeconds();

            // retrieves the full and abbreviated month values
            var fullMonth = FULL_MONTHS[month - 1];
            var abbreviatedMonth = ABBREVIATED_MONTHS[month - 1];

            // in case the format is defined, the date is
            // meant to be formatted
            if (format) {
                // replaces all the format values wit the proper
                // date values in the format string
                format = format.replace(YEAR_CHARACTER, year);
                format = format.replace(MONTH_CHARACTER, _getStringValue(month,
                                2));
                format = format.replace(DAY_CHARACTER, _getStringValue(day, 2));
                format = format.replace(HOUR_CHARACTER, _getStringValue(hours,
                                2));
                format = format.replace(MINUTE_CHARACTER, _getStringValue(
                                minutes, 2));
                format = format.replace(SECOND_CHARACTER, _getStringValue(
                                seconds, 2));
                format = format.replace(FULL_MONTH_CHARACTER, fullMonth);
                format = format.replace(ABBREVIATED_MONTH_CHARACTER,
                        abbreviatedMonth);

                // sets the date string as the final format
                var dateString = format;
            }
            // otherwise the default date format is to be used
            else {
                // creates the date string with the default
                // (complete) format
                var dateString = year + "-" + _getStringValue(month, 2) + "-"
                        + _getStringValue(day, 2) + " "
                        + _getStringValue(hours, 2) + ":"
                        + _getStringValue(minutes, 2) + ":"
                        + _getStringValue(seconds, 2)
            }

            // returns the processed date string
            return dateString;
        }

        /**
         * Converts the given value to a string and appends the padding
         * character for the length remaining according to the "target" value
         * length.
         *
         * @param {String}
         *            value The value to be converted to string and appended
         *            with the padding characters.
         * @param {Integer}
         *            valueLength The "target" value length to be set in the
         *            retrieved string.
         * @param {String}
         *            padding The padding character to be used when setting the
         *            target size in the string.
         * @return {String} The string resulting from the conversion of the
         *         given value.
         */
        var _getStringValue = function(value, valueLength, padding) {
            // retrieves the padding value
            var padding = padding ? padding : "0";

            // converts the value to a string and retrives
            // the length of it
            var stringValue = String(value);
            var stringValueLength = stringValue.length;

            // iterates over the range of the remaining string value
            for (var index = stringValueLength; index < valueLength; index++) {
                // adds the padding (character) to the string value
                stringValue = padding + stringValue;
            }

            // returns the string value
            return stringValue;
        };

        // switches over the method
        switch (method) {
            case "format" :
                // retrieve both the date, the format and the utc from the map
                // of provided options, to be sent to the process date
                // function for processing
                var date = options["date"];
                var format = options["format"];
                var utc = options["utc"];

                // processes (formats the date) and returns it
                return _processDate(date, format, utc);

            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxwiki = function(message, options) {
        // the default values for the wiki
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        // creates the various regular expressions for substitution
        var newlineRegex = RegExp("\\\\n", "g");
        var boldStartRegex = RegExp("\\[", "g");
        var boldEndRegex = RegExp("\\]", "g");

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {

        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        var _process = function(message) {
            // replaces the various message items
            var message = message.replace(newlineRegex, "<br/>");
            var message = message.replace(boldStartRegex, "<b>");
            var message = message.replace(boldEndRegex, "</b>");

            // returns the (processed) message
            return message;
        };

        // initializes the plugin
        initialize();

        // processes the message
        var message = _process(message);

        // returns the (processed) message
        return message;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxtransformflip = function(element, options) {
        // the default values for the transform flip
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // checks if the matched object has the no click class
            var noClick = matchedObject.hasClass("no-click");

            // registers for the click event
            !noClick && matchedObject.click(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // checks if the element contains
                        // the flip class for removal
                        if (element.hasClass("flip")) {
                            // removes the flip class
                            element.removeClass("flip");
                        }
                        // otherwise it should be added
                        else {
                            // add the flip class
                            element.addClass("flip");
                        }
                    });
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxalert = function(message, callback, options) {
        // the default values for the alert
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // retrieves the window (alert window) elements
            var window = jQuery(".window.window-alert", matchedObject);
            var windowHeader = jQuery("h1", window);
            var windowContents = jQuery("p", window);
            var windowButtonCancel = jQuery(".button-cancel", window);

            // processes the "wiki" message
            message = matchedObject.uxwiki(message);

            // sets the window properties and hides
            // button cancel
            windowHeader.html("Information");
            windowContents.html(message);
            windowButtonCancel.hide();

            // shows the window
            window.uxwindow("show");
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the window (alert window) elements
            var window = jQuery(".window.window-alert", matchedObject);
            var windowButtonConfirm = jQuery(".button-confirm", window);

            // registers for the click event on the button confirm
            windowButtonConfirm.click(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the associated window
                        var window = element.parents(".window");

                        // hides the window and calls the
                        // callback if defined
                        window.uxwindow("hide");
                        callback && callback(true);
                    });
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery breadcrumbs plugin, this jQuery plugin provides the base
 * infra-structure for the creation of a breadcrumbs component.
 *
 * @name jquery-breadcrumbs.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxbreadcrumbs = function(method, options) {
        // the default values for the window
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // retrieves the index to be set on the initialized
            // object, in case one already exists uses it
            var index = matchedObject.data("index") || 0;

            // sets the initial index information in the breadcrumbs
            // so that the first page is displayed and then runs the
            // breadcrumbs update operation
            matchedObject.data("index", index);
            _update(matchedObject, options);
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        var _next = function(matchedObject, options) {
            // retrieves the breadcrumbs associated with the
            // current breadcrumbs and then counts them obtain
            // the length of the breadcrumbs
            var breadcrumbs = jQuery("> li", matchedObject);
            var breadcrumbsLength = breadcrumbs.length;

            // retrieves the current index from the matched
            // object to update the current breadcrumb index
            var index = matchedObject.data("index");

            // checks if the current index overflows the
            // current count of breadcrumbs
            if (index == breadcrumbsLength - 1) {
                // returns immediately
                return;
            }

            // updates the index value in the matched object
            // and runs the update function on top of the matched
            // object to update the visuals of the breadcrumbs
            matchedObject.data("index", index + 1);
            _update(matchedObject, options);
        };

        var _previous = function(matchedObject, options) {
            // retrieves the current index from the matched
            // object to update the current breadcrumbs index
            var index = matchedObject.data("index");

            // checks if the current index is zero, in case
            // it's, not possible to go to a previous position
            if (index == 0) {
                // returns immediately
                return;
            }

            // updates the index value in the matched object
            // and runs the update function on top of the matched
            // object to update the visuals of the breadcrumbs
            matchedObject.data("index", index - 1);
            _update(matchedObject, options);
        };

        var _set = function(matchedObject, options) {
            // retrieves the index value to be used to update
            // the stack panel index (argument)
            var index = options["index"] ? options["index"] : 0;

            // updates the index value in the matched object
            // and runs the update function on top of the matched
            // object to update the visuals of the stack panel
            matchedObject.data("index", index);
            _update(matchedObject, options);
        };

        var _update = function(matchedObject, options) {
            // retrieves the current index information, to know
            // which breadcrumb should be displayed
            var index = matchedObject.data("index");

            // retrieves the breadcrumbs associated with the
            // current breadcrumbs list
            var breadcrumbs = jQuery("> li", matchedObject);

            // hides all the breadcrumbs to allow the first one
            // to be displayed on top of all (selected)
            breadcrumbs.removeClass("selected");

            // retrieves the current breadcrumb in the breadcrumbs
            // and selects it in the current context
            var currebtBreadcrumb = jQuery("> li:nth(" + index + ")",
                    matchedObject);
            currebtBreadcrumb.addClass("selected");
        };

        // switches over the method
        switch (method) {
            case "next" :
                // increments the breadcrum to the matched object
                _next(matchedObject, options);

                // breaks the switch
                break;

            case "previous" :
                // decrements the breadcrum from the matched object
                _previous(matchedObject, options);

                // breaks the switch
                break;

            case "set" :
                // sets the breadcrum from the matched object
                _set(matchedObject, options);

                // breaks the switch
                break;

            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery calendar plugin, this jQuery plugin provides the base infra-structure
 * for the creation of a calendar component.
 *
 * @name jquery-calendar.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function(jQuery) {
    jQuery.fn.uxcalendar = function(method, options) {
        // the list of week days in english language
        var WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

        // the list of year month in english language
        var YEAR_MONTHS = ["January", "February", "March", "April", "May",
                "June", "July", "August", "September", "October", "November",
                "December"];

        // the (maximum) number of days in the calendar
        var NUMBER_DAYS = 42;

        // the default values for the text field
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // creates the week days string (with the initial
            // table row string)
            var weekDaysString = "<tr>";

            // iterates over all the week days to add them to the week
            // days string
            for (var index = 0; index < WEEK_DAYS.length; index++) {
                // retrieves the current week day
                var weekDay = WEEK_DAYS[index];

                // adds the week day partial string to the week days string
                weekDaysString += "<th><span>" + weekDay + "</span></th>";
            }

            // finishes the week days string
            weekDaysString += "</tr>"

            // adds the calendar header component to the matched object
            matchedObject.append("<div class=\"calendar-header\">"
                    + "<a class=\"calendar-arrow calendar-arrow-left\"></a>"
                    + "<span class=\"calendar-title\"></span>"
                    + "<a class=\"calendar-arrow calendar-arrow-right\"></a>"
                    + "</div>");

            // adds the calendar content component to the matched object
            matchedObject.append("<table class=\"calendar-content\">"
                    + "<thead>" + weekDaysString + "</thead>"
                    + "<tbody></tbody>" + "</table>");

            // creates a new date object to retrieve
            // the current year, month and day
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();

            // creates the initial current (day) reference object
            var current = {
                year : year,
                month : month,
                day : day
            };

            // sets the year and the month in the matched
            // object data
            matchedObject.data("year", year);
            matchedObject.data("month", month);

            // sets the current day object in the matched
            // object
            matchedObject.data("current", current);

            // updates the value for the matched object
            _update(matchedObject, options);
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the arrow from the matched object
            var arrowLeft = jQuery(".calendar-arrow-left", matchedObject);
            var arrowRight = jQuery(".calendar-arrow-right", matchedObject);

            // registers for the click event the arrow left
            arrowLeft.click(function() {
                        // retrievs the element
                        var element = jQuery(this);

                        // retrieves the calendar for the element
                        var calendar = element.parents(".calendar");

                        // decrements the month for the calendar
                        _decrementMonth(calendar, options);
                    });

            // registers for the click event the arrow right
            arrowRight.click(function() {
                        // retrievs the element
                        var element = jQuery(this);

                        // retrieves the calendar for the element
                        var calendar = element.parents(".calendar");

                        // increments the month for the calendar
                        _incrementMonth(calendar, options);
                    });
        };

        /**
         * Sets a new "current" value in the calendar, after the set is done a
         * visual update is run to ensure that the modifications are reflected
         * in the ui.
         *
         * @param {Element}
         *            matchedObject The reference to the current matched object.
         * @param {Map}
         *            options The map of options to be used.
         */
        var _set = function(matchedObject, options) {
            // retrieves the "new" current value for the calendar
            var current = options["current"];

            // unpacks the current value into year and month
            var year = current["year"];
            var month = current["month"]

            // updates the year and month values
            // in the matched object
            matchedObject.data("year", year);
            matchedObject.data("month", month);

            // updates the current value in the matched object
            matchedObject.data("current", current);

            // updates the matched object state, updating
            // the visual state
            _update(matchedObject, options);
        };

        /**
         * Resets the state of the calendar to the state defined in the current
         * state. The ui of the calendar will reflect the changes.
         *
         * @param {Element}
         *            matchedObject The reference to the current matched object.
         * @param {Map}
         *            options The map of options to be used.
         */
        var _reset = function(matchedObject, options) {
            // retrieves the current value from the
            // matched object
            var current = matchedObject.data("current");

            // unpacks the current value into year and month
            var year = current["year"];
            var month = current["month"]

            // updates the year and month values
            // in the matched object
            matchedObject.data("year", year);
            matchedObject.data("month", month);

            // updates the matched object state, updating
            // the visual state
            _update(matchedObject, options);
        };

        /**
         * Updates the state of the calendar, updating the month values and the
         * header title.
         *
         * @param {Element}
         *            matchedObject The reference to the current matched object.
         * @param {Map}
         *            options The map of options to be used.
         */
        var _update = function(matchedObject, options) {
            // in case the matched object does not contains any
            // elements (empty matched object)
            if (matchedObject.length == 0) {
                // returns immediately (nothing to be done)
                return;
            }

            // retrieves the current (viewable) year
            // and month values
            var year = matchedObject.data("year");
            var month = matchedObject.data("month") - 1;

            // retrieves the current (day) from the calendar
            var current = matchedObject.data("current");

            // unpacks the current day into year, month
            // and day
            var currentDayYear = current["year"];
            var currentDayMonth = current["month"] - 1;
            var currentDayNumber = current["day"];

            // creates the dates for the initial and the final
            // day of the month
            var initialDay = new Date(year, month, 1);
            var finalDay = new Date(year, month + 1, 0);

            // retrieve the dates for the final day of the previous
            // month and the initial day of the next month
            var finalDayPrevious = new Date(year, month, 0);
            var intialDayNext = new Date(year, month + 1, 1);

            // retrieves the week day of the initial day of
            // the current month and the month date of the
            // final day of the current and previous months
            var initialDayWeek = initialDay.getDay();
            var finalDayNumber = finalDay.getDate();
            var finalDayPreviousNumber = finalDayPrevious.getDate();

            // retrieves the previous year and the previous month
            var previousYear = finalDayPrevious.getFullYear();
            var previousMonth = finalDayPrevious.getMonth();

            // retrieves the next year and the next month
            var nextYear = intialDayNext.getFullYear();
            var nextMonth = intialDayNext.getMonth();

            // creates the initial list of days
            var days = []

            // iterates over all the final days of the previous month
            for (var index = 0; index < initialDayWeek; index++) {
                // calculates the (current) previous day from the final day
                // of the previous month, the initial week day and the index
                var previousDay = finalDayPreviousNumber
                        - (initialDayWeek - index) + 1;

                // in case the (current) previous day is the currently select day
                if (previousYear == currentDayYear
                        && previousMonth == currentDayMonth
                        && previousDay == currentDayNumber) {
                    // adds the day tuple with the active class in it
                    days.push([previousYear, previousMonth, previousDay,
                            "faded active"]);
                }
                // otherwise it's just a "normal" day
                else {
                    // adds the day tuple
                    days.push([previousYear, previousMonth, previousDay,
                            "faded"]);
                }
            }

            // iterates over all the days of the current month
            for (var index = 0; index < finalDayNumber; index++) {
                // calculates the (current) day
                var day = index + 1;

                // in case the (current) day is the currently select day
                if (year == currentDayYear && month == currentDayMonth
                        && day == currentDayNumber) {
                    // adds the day tuple with the active class in it
                    days.push([year, month, day, "active"]);
                }
                // otherwise it's just a "normal" day
                else {
                    // adds the day tuple
                    days.push([year, month, day, ""]);
                }
            }

            // "takes" a snapshot at the current length
            // of the days list for "extra" days calculus
            var daysLength = days.length;

            for (var index = daysLength; index < NUMBER_DAYS; index++) {
                // calculates the (current) next day from the days length
                // and the current index
                var nextDay = index - daysLength + 1;

                // in case the (current) next day is the currently select day
                if (nextYear == currentDayYear && nextMonth == currentDayMonth
                        && nextDay == currentDayNumber) {
                    // adds the day tuple with the active class in it
                    days.push([nextYear, nextMonth, nextDay, "faded active"]);
                }
                // otherwise it's just a "normal" day
                else {
                    // adds the day tuple
                    days.push([nextYear, nextMonth, nextDay, "faded"]);
                }
            }

            // starts the html code string
            var htmlCode = "";

            // unsets the line open flag
            var lineOpen = false;

            // iterates over all the days created in the days list
            for (var index = 0; index < days.length; index++) {
                // checks if the current cell is of type
                // start (line) cell (end/start of week)
                var isStartCell = index % 7 == 0;

                // in case the current cell is of type
                // start cell (end/start of week)
                if (isStartCell) {
                    // in case there is a line open
                    if (lineOpen) {
                        // adds the close line tag to the
                        // html code
                        htmlCode += "</tr>"
                    }
                    // otherwise it must be the first line
                    else {
                        // sets the line open flag
                        lineOpen = true;
                    }

                    // adds the open line tag to the
                    // html code
                    htmlCode += "<tr>";
                }

                // retrieves the current day tuple
                // from the list of days
                var dayTuple = days[index];

                // unpacks the day tuple into year,
                // month, day and day class
                var _year = dayTuple[0];
                var _month = dayTuple[1];
                var _day = dayTuple[2];
                var dayClass = dayTuple[3];

                // adds the cell code to the html code string
                htmlCode += "<td class=\"" + dayClass + "\" data-year=\""
                        + _year + "\" data-month=\"" + _month
                        + "\" data-day=\"" + _day + "\" >" + _day + "</td>";
            }

            // in case there is a line (still) open
            if (lineOpen) {
                // adds the close line tag to the
                // html code
                htmlCode += "</tr>";
            }

            // retrieves the table body (contents area) and
            // clears it
            var tableBody = jQuery("tbody", matchedObject);
            tableBody.empty();

            // adds the (generated) html code to the table body
            tableBody.append(htmlCode);

            // retrieves the calendar title and updates it
            // accordingly
            var title = jQuery(".calendar-title", matchedObject);
            title.html(YEAR_MONTHS[month] + " " + String(year));

            // updates the (cell) handlers in the matched object
            _updateHandlers(matchedObject, options);
        };

        var _incrementMonth = function(matchedObject, options) {
            // sets the calendar as the matched object
            var calendar = matchedObject;

            // retrieves the (current) year and month from the calendar
            var year = matchedObject.data("year");
            var month = matchedObject.data("month");

            // in case the final month is the current month
            if (month == 12) {
                // increments the year value and sets the
                // month value as the first month
                year++;
                month = 1;
            }
            // otherwise a different month is set
            else {
                // increments the month value
                month++;
            }

            // sets the year and the month in the
            // calendar data
            calendar.data("year", year);
            calendar.data("month", month);

            // updates the value for the calendar
            _update(calendar, options);
        };

        var _decrementMonth = function(matchedObject, options) {
            // sets the calendar as the matched object
            var calendar = matchedObject;

            // retrieves the (current) year and month from the calendar
            var year = matchedObject.data("year");
            var month = matchedObject.data("month");

            // in case the first month is the current month
            if (month == 1) {
                // decrements the year value and sets the
                // month value as the last month
                year--;
                month = 12;
            }
            // otherwise a different month is set
            else {
                // decrements the month value
                month--;
            }

            // sets the year and the month in the
            // calendar data
            calendar.data("year", year);
            calendar.data("month", month);

            // updates the value for the calendar
            _update(calendar, options);
        };

        var _updateHandlers = function(matchedObject, options) {
            // retrieves all the (valid) cells from the matched object
            var cells = jQuery("tbody td", matchedObject)

            // registrs for the click event in the cells
            cells.click(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the calendar for the element
                        var calendar = element.parents(".calendar");

                        // retrieves all the (valid) cells from the calendar
                        var cells = jQuery("tbody td", calendar);

                        // retrieves the various day elements from
                        // the current element and then parses them
                        // into integer values
                        var year = element.attr("data-year");
                        var month = element.attr("data-month");
                        var day = element.attr("data-day");
                        var yearInteger = parseInt(year);
                        var monthInteger = parseInt(month) + 1;
                        var dayInteger = parseInt(day);

                        // creates the new current day reference object
                        var current = {
                            year : yearInteger,
                            month : monthInteger,
                            day : dayInteger
                        };

                        // updates the current (day) value
                        // in the calendar
                        calendar.data("current", current);

                        // removes the active class from all
                        // the cells and then adds the active
                        // class only to the clicked one
                        cells.removeClass("active");
                        element.addClass("active");

                        // triggers the current change event
                        calendar.triggerHandler("current_change", [current]);
                    });
        };

        // switches over the method
        switch (method) {
            case "set" :
                // sets the new current value in the matched object
                _set(matchedObject, options);

                // breaks the switch
                break;

            case "reset" :
                // resets the matched object to the value
                // in the current state
                _reset(matchedObject, options);

                // breaks the switch
                break;

            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxchanger = function(path, callback, options) {
        // the default timeout to be used in the changer
        var DEFAULT_TIMEOUT = 1000;

        // the default section count to be used in the changer
        var DEFAULT_SECTION_COUNT = 2;

        // the default values for the alert
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // sets the initial index in the matched
            // object (resets the counter)
            matchedObject.data("index", 0);
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the timeout value from the element
                        // defaulting to the default timeout (constant) value
                        var timeout = _element.attr("data-timeout")
                                ? parseInt(_element.attr("data-timeout"))
                                : DEFAULT_TIMEOUT;

                        // sets the interval handler using the "just" retrieved
                        // timeout value
                        setInterval(function() {
                                    // updates the changer value to show the "next" section
                                    _update(_element, options);
                                }, timeout)
                    });
        };

        var _update = function(matchedObject, options) {
            // retrieves the number of sections in the matched object
            // defaulting to the default section count
            var sectionCount = matchedObject.attr("data-section_count")
                    ? parseInt(matchedObject.attr("data-section_count"))
                    : DEFAULT_SECTION_COUNT;

            // retrieves the current index from the matched object
            var index = matchedObject.data("index");

            // hides the matched object (to provide the cross fadding
            // effect in the changing)
            matchedObject.fadeOut(500, function() {
                        // removes the
                        matchedObject.removeClass("section-" + (index + 1));

                        // increments the current index value
                        index += 1;

                        // in case the current value "overflows" the current
                        // section count the index calue is reseted
                        index == sectionCount ? index = 0 : index = index;

                        // adds the new section calss and shows the matched object
                        // with a fade effect
                        matchedObject.addClass("section-" + (index + 1));
                        matchedObject.fadeIn(300);

                        // updates the index in the mateched object data
                        matchedObject.data("index", index);

                        // triggers the change event so that external "listeners"
                        // may change their behavior in accordance
                        matchedObject.triggerHandler("change");
                    });
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery check field plugin, this jQuery plugin provides the base
 * infra-structure for the creation of a check field component.
 *
 * @name jquery-check-field.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function(jQuery) {
    jQuery.fn.uxcheckfield = function(options) {
        // the default values for the check field
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the matched object
            matchedObject.each(function(index, element) {
                        // retrieves the element refence
                        var _element = jQuery(element);
                        _update(_element, options);
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the (possible) next check field label
            // to register it for checking
            var checkFieldLabel = matchedObject.next(".check-field-label");

            // registers the check field label for the click
            // event to check the associated check field
            checkFieldLabel.click(function() {
                        // retrieves the current element and uses it to retrieve
                        // the previous check field
                        var element = jQuery(this);
                        var checkField = element.prev(".check-field");

                        // toggles the "just" retrieved check field, this should
                        // change its boolean value
                        _toggle(checkField, options);
                    });
        };

        var _toggle = function(matchedObject, options) {
            // retrieves the current checked state from the matched
            // object and "invert" it to toggle the state
            var checked = matchedObject.attr("checked");
            var _checked = checked ? false : true;

            // checks the current matched object by setting
            // the its checked attribute
            matchedObject.attr("checked", _checked);
        };

        var _update = function(matchedObject, options) {
            // retrives the value and the checked value
            var value = matchedObject.attr("value");
            var checked = matchedObject.attr("data-checked");

            // in case the checked value is the same
            // as the value (current option)
            if (checked == value) {
                // sets the element as checked
                matchedObject.attr("checked", true);
            }
            // otherwise it's not the selected element
            else {
                // sets the element as unchecked
                matchedObject.attr("checked", false);
            }
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery button group plugin, this jQuery plugin provides the base
 * infra-structure for the creation of a button group component.
 *
 * @name jquery-button-group.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function(jQuery) {
    jQuery.fn.uxbuttongroup = function(method, options) {
        // the default values for the button
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves all the buttons associated with the button
            // group so that the click may be handled correctly
            var buttons = jQuery(".button", matchedObject);

            // registers for the click event on the button contained
            // in the button group
            buttons.click(function() {
                        // retrieves the current element
                        var element = jQuery(this);

                        // retrieves the button index (inside the button group)
                        var index = element.index();

                        // retrieves the button group associated with the
                        // button (associated button group) then uses it to
                        // trigger the index changed event, the returning value
                        // for this event must defines if the event should be
                        // completely handled (click enabling)
                        var buttonGroup = element.parents(".button-group");
                        var continueChange = buttonGroup.triggerHandler(
                                "index_changed", [index]);
                        if (continueChange == false) {
                            return;
                        }

                        // retieves all the button associated with the button group
                        // then removes the selected class from them
                        var buttons = jQuery(".button", buttonGroup);
                        buttons.removeClass("selected");

                        // adds the selected class to the current element (selects it)
                        element.addClass("selected");
                    });
        };

        // switches over the method
        switch (method) {
            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery button plugin, this jQuery plugin provides the base infra-structure
 * for the creation of a button component.
 *
 * @name jquery-button.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function(jQuery) {
    jQuery.fn.uxbutton = function(method, options) {
        // the default values for the button
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the matched objects
            // to update the submit values
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the element attribute value
                        var link = _element.attr("data-link");
                        var submit = _element.attr("data-submit");
                        var action = _element.attr("data-action");
                        var window = _element.attr("data-window");
                        var windowOpen = _element.attr("data-window_open");

                        // sets the "new" element data
                        _element.data("link", link);
                        _element.data("submit", submit);
                        _element.data("action", action);
                        _element.data("window", window);
                        _element.data("window_open", windowOpen);
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the body
            var _body = jQuery("body");

            // registers for the click event
            matchedObject.click(function(event) {
                        // retrieves the element in order trigger
                        // the action operation
                        var element = jQuery(this);

                        // verifies if the button is currently disabled
                        // and in such cases prevents the propagation and
                        // returns control immediately to the caller method
                        var isDisabled = element.hasClass("disabled");
                        if (isDisabled) {
                            event.stopPropagation();
                            event.stopImmediatePropagation();
                            return;
                        }

                        // checks if the current click is from a middle
                        // button and in such case sets the new window
                        // option to open the link in a new window
                        var window = event.which == 2
                        options["window"] = window;

                        // triggers the handling of the click event to
                        // the button sub system
                        __trigger(element, options);
                    });

            // registers for focus event
            matchedObject.mousedown(function(event) {
                        // retrieves the element
                        var element = jQuery(this);

                        // checks if the button is disabled in case
                        // it is, nothing should be done returns the
                        // control to the caller function immediately
                        var isDisabled = element.hasClass("disabled");
                        if (isDisabled) {
                            return;
                        }

                        // adds the click class to the element
                        element.addClass("click");

                        // creates the mouse up handler function so that
                        // there is a clojure in the element
                        var _mouseUpHandler = function(event) {
                            // retrieves the body
                            var _body = jQuery("body");

                            // removes the click class from the element
                            element.removeClass("click");

                            // unbinds the mouse up event from the body
                            _body.unbind("mouseup", _mouseUpHandler);
                        };

                        // register for the mouse up in the body
                        _body.mouseup(_mouseUpHandler);

                        // checks if the current click is a middle click
                        // and in such case stops the propagation of the
                        // event avoid the default behavior
                        var isMiddle = event.which == 2;
                        if (isMiddle) {
                            event.stopPropagation();
                            event.preventDefault();
                        }
                    });

            // iterates over each of the buttons to
            // register for their specific handlers
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the parent form and then
                        // registers for the submit event on them
                        // so that the button may be disabled registers
                        // also for the unlock event so that the disabled
                        // class is remove in such ocasions
                        var parentForm = _element.parents("form");
                        parentForm.submit(function() {
                                    // adds the disabled class to the button
                                    // to avoid further submits
                                    _element.addClass("disabled");
                                });
                        parentForm.bind("unlock", function() {
                                    // removes the disabled class from the
                                    // element (because the form is in the
                                    // normal state again)
                                    _element.removeClass("disabled");
                                });
                    });
        };

        var __trigger = function(matchedObject, options) {
            // retrieves the current matched object as the
            // element
            var element = matchedObject;

            // checks if the button is disabled in case
            // it is, nothing should be done returns the
            // control to the caller function immediately
            var isDisabled = element.hasClass("disabled");
            if (isDisabled) {
                return;
            }

            // retrieves the action flags from the element
            var link = element.data("link");
            var action = element.data("action");
            var submit = element.data("submit");
            var windowOpen = element.data("window_open");

            // links the element in case the link flag is set
            link && __link(element, options);

            // "actions" the element in case the action flag is set
            action && __action(element, options);

            // submits the element in case the submit flag is set
            submit && __submit(element, options);

            // opens the window associated with the provided selector
            // it should be displayed as modal in the current viewport
            windowOpen && __windowOpen(element, options);
        };

        var __submit = function(matchedObject, options) {
            // in case the window flag is set returns immediately
            // no need to submit the form
            var _window = matchedObject.data("window") || options["window"];
            if (_window) {
                return;
            }

            // retrieves the parent form
            var parentForm = matchedObject.parents("form");

            // adds the disabled class to the matched
            // object (avoids duplicate submit)
            matchedObject.addClass("disabled");

            // submits the parent form, triggering
            // the change in the current document
            parentForm.submit();
        };

        var __action = function(matchedObject, options) {
            // in case the window flag is set returns immediately
            // no need to take any action
            var _window = matchedObject.data("window") || options["window"];
            if (_window) {
                return;
            }

            // retrieves the parent form
            var parentForm = matchedObject.parents("form");

            // retrieves the current action from the matched
            // object and then updates the action attribute
            // in the parent form
            var action = matchedObject.data("action");
            parentForm.attr("action", action);
        };

        var __link = function(matchedObject, options) {
            // retrieves the matched object link and the
            // (open in) window flag
            var link = matchedObject.data("link");
            var _window = matchedObject.data("window") || options["window"];

            // checks the window flag and in case it's set
            // opens a new window with the link otherwise
            // sets the "new" document location in
            _window ? window.open(link, "_blank") : document.location = link;
        };

        var __windowOpen = function(matchedObject, options) {
            // retrieves the window open value from the matched object
            // this valud should contain the window selector
            var windowOpen = matchedObject.data("window_open");

            // retrieves the window to be show and display it on
            // the current viewport
            var window = jQuery(windowOpen);
            window.uxwindow("show");
        };

        // switches over the method
        switch (method) {
            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxconfirm = function(message, callback, options) {
        // the default values for the confirm
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // retrieves the window (alert window) elements
            var window = jQuery(".window.window-alert", matchedObject);
            var windowHeader = jQuery("h1", window);
            var windowContents = jQuery("p", window);
            var windowButtonConfirm = jQuery(".button-confirm", window);
            var windowButtonCancel = jQuery(".button-cancel", window);

            // processes the "wiki" message
            message = matchedObject.uxwiki(message);

            // sets the window properties and shows
            // button cancel
            windowHeader.html("Confirm");
            windowContents.html(message);
            windowButtonCancel.show();

            // shows the window
            window.uxwindow("show");
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the window (alert window) elements
            var window = jQuery(".window.window-alert", matchedObject);
            var windowButtonConfirm = jQuery(".button-confirm", window);
            var windowButtonCancel = jQuery(".button-cancel", window);

            // registers for the click event on the button confirm
            windowButtonConfirm.click(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the associated window
                        var window = element.parents(".window");

                        // hides the window and calls the
                        // callback if defined
                        window.uxwindow("hide");
                        callback && callback(true);
                    });

            // registers for the click event on the button cancel
            windowButtonCancel.click(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the associated window
                        var window = element.parents(".window");

                        // hides the window and calls the
                        // callback if defined
                        window.uxwindow("hide");
                        callback && callback(false);
                    });
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxcontentchanger = function(path, callback, options) {
        // the default timeout to be used in the changer
        var DEFAULT_TIMEOUT = 1000;

        // the default values for the alert
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // sets the initial index in the matched
            // object (resets the counter)
            matchedObject.data("index", 0);

            // retrieves the first panel for the matched
            // object and shows it
            var firstPanel = jQuery("> .changer-panel:first", matchedObject);
            firstPanel.show();
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // rerieves the trigger (element) attribute, this is
                        // going to be used to retrieve the element to be used
                        // for the binding of the change event in case the trigger
                        // mode is enabled
                        var trigger = _element.attr("data-trigger");

                        // retrieves the timeout of the element, to be
                        // used in case the timeout mode is enabled, defaults
                        // to the default timeout
                        var timeout = _element.attr("data-timeout")
                                ? parseInt(_element.attr("data-timeout"))
                                : DEFAULT_TIMEOUT;

                        // in case the trigger mode is enable must bind the
                        // element to the change event
                        if (trigger) {
                            // retrieves the trigger element and bind to
                            // the change event of it to process the update
                            var triggerElement = jQuery(trigger);
                            triggerElement.bind("change", function() {
                                        // updates the changer value to show the
                                        // "next" section
                                        _update(_element, options);
                                    });
                        }
                        // otherwise the interval mode is enabled, the timeout
                        // must be used to set the interval
                        else {
                            // sets a new inteval with the defined timeout value
                            // (this is considered to be the default behavior)
                            setInterval(function() {
                                        // updates the changer value to show the
                                        //"next" section
                                        _update(_element, options);
                                    }, timeout);
                        }
                    });
        };

        var _update = function(matchedObject, options) {
            // retrieves all the panels (children) from the
            // matched object and then counts them as the
            // section count value
            var panels = matchedObject.children(".changer-panel");
            var sectionCount = panels.length;

            // retrieves the current index from the matched
            // object
            var index = matchedObject.data("index");

            // hides all of the panels (to avoid the visibility of
            // any of the panels)
            panels.hide();

            // increments the index value
            index += 1;

            // in case the current value "overflows" the current
            // section count the index calue is reseted
            index == sectionCount ? index = 0 : index = index;

            // retrieves the current panel to be shown and
            // shows it
            var panel = panels.get(index)
            jQuery(panel).show();

            // updates the index value data in the matched object
            matchedObject.data("index", index);
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery cross list plugin, this jQuery plugin provides the base
 * infra-structure for the creation of a cross list component.
 *
 * @name jquery-cross-list.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxcrosslist = function(method, options) {
        // the default values for the panel
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            matchedObject.each(function(index, element) {
                // retrieves the element reference
                var _element = jQuery(element);

                // retrieves the data source associated with the
                // element, to "propagate" it to the source list
                var dataSource = jQuery("> .data-source", _element);

                // retrieves both the list that contains the various items
                // to populate the target list and the items themselves
                var items = jQuery(".items", _element)
                var itemsList = jQuery("li", items) || jQuery();

                // retrieves the various attributes from the element to
                // be used in propagation and as options
                var elementName = _element.attr("name");
                var elementOrder = _element.attr("data-order");
                var sourceName = _element.attr("data-source");
                var targetName = _element.attr("data-target");
                var numberOptions = _element.attr("data-number_options");
                var duplicates = _element.attr("data-duplicates") || false;

                // creates the various section elements
                var sourceSection = jQuery("<div class=\"section source-section\"></div>");
                var crossSection = jQuery("<div class=\"section cross-section\"></div>");
                var targetSection = jQuery("<div class=\"section target-section\"></div>");

                // creates the various title elements
                var sourceTitle = jQuery("<h2>" + sourceName + "</h2>");
                var targetTitle = jQuery("<h2>" + targetName + "</h2>");

                // creates the various source elements
                var sourceList = jQuery("<div class=\"source-list\"></div>");
                var targetList = jQuery("<div class=\"source-list\"></div>");

                // creates the (local) data source to be used in the target
                // section, this data source is going to be constantly manpulated
                // throught the internal items list
                var targetSource = jQuery("<ul class=\"data-source\" data-type=\"local\"></ul>");

                // creates the various arrow elements to be used to "cross" the
                // elements from one side to the other
                var arrowRight = jQuery("<div class=\"arrow arrow-right\"></div>");
                var arrowLeft = jQuery("<div class=\"arrow arrow-left\"></div>");

                // creates the clear element to be used to clear the ui after the
                // creation of the various "floating" sections
                var clear = jQuery("<div class=\"clear\"></div>");

                // iterates over each of the items in the list of predefined items
                // to add them to the local (and target) data souce, initial setting
                // then removes the items section to avoid extra elements in dom
                itemsList.each(function(index, element) {
                            var _element = jQuery(this);
                            targetSource.append(_element);
                        });
                items.remove();

                // in case the (source) data source is defined adds it to the source
                // list then in case the element name is defined sets it in the target
                // list to provide correct form submission
                dataSource.length && sourceList.append(dataSource);
                elementName && targetList.attr("name", elementName);
                elementOrder && targetList.attr("data-order", elementOrder);

                // in case the number of options is set propagates the setting to the
                // source list so that the number of options is limited
                numberOptions
                        && sourceList.attr("data-number_options", numberOptions);

                // starts the target data source and then adds it to the target list
                // this data source is going to be manipulated through the items
                targetSource.uxdatasource();
                targetList.append(targetSource);

                // retrieves the target set of items in the data
                // source (local) and sets them as the exclusion
                // list of items in the source list (avoids duplicated)
                // exposure of items
                var targetItems = targetSource.data("items");
                !duplicates && sourceList.data("exclusion", targetItems);

                // starts the various source list elements
                sourceList.uxsourcelist();
                targetList.uxsourcelist();

                // in case the source and the target names are defined adds
                // the titles to the corresponding sections
                sourceName && sourceSection.append(sourceTitle);
                targetName && targetSection.append(targetTitle);

                // adds the source and target list to the corresponding
                // sections (floating panels)
                sourceSection.append(sourceList);
                targetSection.append(targetList);

                // adds both arrows to the cross section
                crossSection.append(arrowRight);
                crossSection.append(arrowLeft);

                // adds the top level elements to the element, this should
                // trigger the display of the element
                _element.append(sourceSection);
                _element.append(crossSection);
                _element.append(targetSection);
                _element.append(clear);

                // triggers the items changed event both in the source list
                // and in the target list
                sourceList.trigger("items_changed");
                targetList.trigger("items_changed");
            });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves both the target and the source list
            // for the currently selected object
            var sourceList = jQuery(".source-section .select-list",
                    matchedObject);
            var targetList = jQuery(".target-section .select-list",
                    matchedObject);

            // retrieves the arrows for the currently matched object
            // these "buttons" control the flow between sections
            var arrowLeft = jQuery(".arrow-left", matchedObject);
            var arrowRight = jQuery(".arrow-right", matchedObject);

            // registers for the order changed event in the target
            // list so that the local data source associated is changed
            // to reflect the new order in the elements
            targetList.bind("order_changed", function(event, element) {
                // retrieves the current element and uses it to retrieve
                // the associate top cross list element
                var _element = jQuery(this);
                var selectList = _element;
                var crossList = _element.parents(".cross-list");

                // retrieves the text field associated with the target
                // section and in case it contains a value the ordering
                // of the elements is ignored
                var textField = jQuery(".target-section .text-field", crossList);
                var textFieldValue = textField.attr("value");
                if (textFieldValue) {
                    return;
                }

                // retrieves the target data source and then
                // uses it to retrieve the items from its data
                var targetSource = jQuery(".target-section .data-source",
                        crossList);
                var targetItems = targetSource.data("items");

                // retrieves the complete set of items in the select
                // list (ignoring the clone element)
                var items = jQuery("li:not(.clone)", selectList);

                // clears the target element list from all the element
                // inserted (going to reconstruct it)
                targetItems.splice(0, targetItems.length)

                // iterates over all the items currently in the target
                // list to insert their value in the target items list
                for (var index = 0; index < items.length; index++) {
                    // retrieves the reference to the current item
                    // to be added to the target items list
                    var item = jQuery(items[index]);

                    // retrieves the data value from the selected item defaulting
                    // to the html represention in case none is provided
                    var dataValue = item.attr("data-value");
                    var htmlValue = item.html();
                    dataValue = dataValue ? dataValue : htmlValue;

                    // adds the data value to the target items list
                    targetItems.push(dataValue);
                }
            });

            // registers for the selected event on the source list to
            // transfer the selected elements to the target list
            sourceList.bind("selected", function(event, element) {
                        // retrieves the current element and uses it to retrieve
                        // the associate top cross list element
                        var _element = jQuery(this);
                        var crossList = _element.parents(".cross-list");

                        // retrieves the flag that controls if duplicates
                        // should be avoided (default to false)
                        var duplicates = crossList.attr("data-duplicates") || false;

                        // retrieves the target list associated with the
                        // cross list (current context)
                        var targetList = jQuery(".target-section .select-list",
                                crossList);

                        // retrieves the target data source and then
                        // uses it to retrieve the items from its data
                        var targetSource = jQuery(
                                ".target-section .data-source", crossList);
                        var targetItems = targetSource.data("items");

                        // removes the selected class from the element
                        element.removeClass("selected");

                        // retrieves the data value from the element defaulting
                        // to the html represention in case none is provided
                        var dataValue = element.attr("data-value");
                        var htmlValue = element.html();
                        dataValue = dataValue ? dataValue : htmlValue;

                        // in case the data value exists in the target items
                        // must return immediately cannot add duplicates to
                        // the target list
                        var exists = targetItems.indexOf(dataValue) != -1;
                        if (!duplicates && exists) {
                            return;
                        }

                        // clones the element in case duplicated elements are
                        // allowed in the current source list
                        element = duplicates ? element.clone(true) : element;

                        // adds the data value to the target items and then
                        // apends the element to the target list
                        targetItems.push(dataValue);
                        targetList.append(element);
                        targetList.trigger("items_changed");
                    });

            // registers for the selected event on the source list to
            // transfer the selected elements to the target list
            targetList.bind("selected", function(event, element) {
                        // retrieves the current element and uses it to retrieve
                        // the associate top cross list element
                        var _element = jQuery(this);
                        var crossList = _element.parents(".cross-list");

                        // retrieves the flag that controls if duplicates
                        // should be avoided (default to false)
                        var duplicates = crossList.attr("data-duplicates") || false;

                        // retrieves the source list associated with the
                        // cross list (current context)
                        var sourceList = jQuery(".source-section .select-list",
                                crossList);

                        // retrieves the target data source and then
                        // uses it to retrieve the items from its data
                        var targetSource = jQuery(
                                ".target-section .data-source", crossList);
                        var targetItems = targetSource.data("items");

                        // retrieves the data value from the element defaulting
                        // to the html represention in case none is provided
                        var dataValue = element.attr("data-value");
                        var htmlValue = element.html();
                        dataValue = dataValue ? dataValue : htmlValue;

                        // retrieves the index of the data value in the
                        // target items and then uses it to remove the item
                        // from the list of target items
                        var index = targetItems.indexOf(dataValue);
                        targetItems.splice(index, 1);

                        // removes the selected class from the element and
                        // adds it to the source list
                        element.removeClass("selected");
                        duplicates
                                ? element.remove()
                                : sourceList.append(element)
                                        && sourceList.trigger("items_changed");
                    });

            // registers for the click event on the left arrow to be
            // able to tranfers the selected target elements back to
            // the source list
            arrowLeft.click(function() {
                        // retrieves the current element and then uses it to
                        // retrieve the parent cross list element
                        var element = jQuery(this);
                        var crossList = element.parents(".cross-list");

                        // retrieves the flag that controls if duplicates
                        // should be avoided (default to false)
                        var duplicates = crossList.attr("data-duplicates") || false;

                        // retrieves both the source list and the target list
                        // to be able to "transfer" the selected items
                        var sourceList = jQuery(".source-section .select-list",
                                crossList);
                        var targetList = jQuery(".target-section .select-list",
                                crossList);

                        // retrieves the target data source and then
                        // uses it to retrieve the items from its data
                        var targetSource = jQuery(
                                ".target-section .data-source", crossList);
                        var targetItems = targetSource.data("items");

                        // retrieves the list of selected items in the target list
                        var selectedItems = jQuery("li.selected", targetList);

                        // iterates over all the selected items to remove them from
                        // the target items (data source)
                        for (var index = 0; index < selectedItems.length; index++) {
                            // retrieves the current selected item in iteration
                            var selectedItem = selectedItems[index];
                            var _selectedItem = jQuery(selectedItem);

                            // retrieves the data value from the selected item defaulting
                            // to the html represention in case none is provided
                            var dataValue = _selectedItem.attr("data-value");
                            var htmlValue = _selectedItem.html();
                            dataValue = dataValue ? dataValue : htmlValue;

                            // retrieves the index of the data value in the target
                            // items list and then uses it to remove the item from
                            // the list of target items
                            var _index = targetItems.indexOf(dataValue);
                            targetItems.splice(_index, 1);
                        }

                        // removes the selected class from the selected items and then
                        // appends the various selected items to the source list
                        selectedItems.removeClass("selected");
                        duplicates
                                ? selectedItems.remove()
                                : sourceList.append(selectedItems)
                                        && sourceList.trigger("items_changed");
                    });

            // registers for the click event on the right arrow to be
            // able to tranfers the selected source elements into
            // the target list
            arrowRight.click(function() {
                        // retrieves the current element and then uses it to
                        // retrieve the parent cross list element
                        var element = jQuery(this);
                        var crossList = element.parents(".cross-list");

                        // retrieves the flag that controls if duplicates
                        // should be avoided (default to false)
                        var duplicates = crossList.attr("data-duplicates") || false;

                        // retrieves both the source list and the target list
                        // to be able to "transfer" the selected items
                        var sourceList = jQuery(".source-section .select-list",
                                crossList);
                        var targetList = jQuery(".target-section .select-list",
                                crossList);

                        // retrieves the target data source and then
                        // uses it to retrieve the items from its data
                        var targetSource = jQuery(
                                ".target-section .data-source", crossList);
                        var targetItems = targetSource.data("items");

                        // retrieves the list of selected items in the source list
                        // and then removes the selected class from them
                        var selectedItems = jQuery("li.selected", sourceList);
                        selectedItems.removeClass("selected");

                        // creates the list that will hold the various items
                        // considered to be valid (no duplicates)
                        var validItems = [];

                        // iterates over the list of selected items to filter the ones
                        // that are duplicated values
                        for (var index = 0; index < selectedItems.length; index++) {
                            // retrieves the current selected item in iteration
                            var selectedItem = selectedItems[index];
                            var _selectedItem = jQuery(selectedItem);

                            // retrieves the data value from the selected item defaulting
                            // to the html represention in case none is provided
                            var dataValue = _selectedItem.attr("data-value");
                            var htmlValue = _selectedItem.html();
                            dataValue = dataValue ? dataValue : htmlValue;

                            // checks if the data value already exists in the list of target
                            // items in case it does continues the loop (duplicated value)
                            var exists = targetItems.indexOf(dataValue) != -1;
                            if (!duplicates && exists) {
                                continue;
                            }

                            // clones the selected item in case duplicated elements are
                            // allowed in the current source list
                            selectedItem = duplicates
                                    ? _selectedItem.clone(true)[0]
                                    : selectedItem;

                            // adds the selected items to the valid items and adds the data
                            // value to the list of target items (data source)
                            validItems.push(selectedItem);
                            targetItems.push(dataValue);
                        }

                        // convers the list of valid items into an element and adds
                        // it to the target list (should display the items visually)
                        var _validItems = jQuery(validItems);
                        targetList.append(_validItems);
                        targetList.trigger("items_changed");
                    });
        };

        // switches over the method
        switch (method) {
            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery drop field plugin, this jQuery plugin provides the base
 * infra-structure for the creation of a drop field component.
 *
 * @name jquery-drop-field.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function(jQuery) {
    jQuery.fn.uxdropfield = function(method, options) {
        // the default values for the drop field
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {
            numberOptions : 6,
            filterOptions : true
        };

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // sets the ux global object representation as drop
            // field, this value may be used latter for fast ux
            // object type access (hash based conditions)
            matchedObject.attr("data-object", "dropfield");

            // iterates over all the matched objects
            matchedObject.each(function(index, element) {
                // retrieves the element reference
                var _element = jQuery(element);

                // retrieves the drop field contents and the value
                // fields from the current element in iteration
                var dropFieldContents = jQuery(".drop-field-contents", _element);
                var valueFields = jQuery(".value-field", _element);

                // retrieves the number of options and the filter
                // options from the provided options map
                var numberOptions = options["numberOptions"];
                var filterOptions = options["filterOptions"];

                // checks if the element (drop field) is of type select
                var isSelect = _element.hasClass("drop-field-select");

                // retrieves both the display, extra, value and link attributes
                var displayAttribute = _element.attr("data-display_attribute");
                var extraAttribute = _element.attr("data-extra_attribute");
                var valueAttribute = _element.attr("data-value_attribute");
                var linkAttribute = _element.attr("data-link_attribute");

                // retrieves the filter attributes and converts it
                // to a list of string from the token separator
                var filterAttributes = _element.attr("data-filter_attributes");
                var filterAttributesList = filterAttributes
                        ? filterAttributes.split(",")
                        : null;

                // retrieves the text field (element)
                var textField = jQuery(".text-field", _element);

                // in case there is no text field defined for the
                // current element one must be created
                if (textField.length == 0) {
                    // retrieves the various attributes from the element
                    // to be propagated to the text field
                    var name = _element.attr("name");
                    var value = _element.attr("value");
                    var originalValue = _element.attr("data-original_value");
                    var error = _element.attr("data-error");
                    var type = _element.attr("data-type");
                    var decimalPlaces = _element.attr("data-decimal_places");

                    // creates the text field element and sets the various
                    // attributes in it
                    var textField = jQuery("<input type=\"text\" class=\"text-field\" />");
                    textField.attr("name", name);
                    textField.attr("value", value);
                    textField.attr("data-original_value", originalValue);
                    textField.attr("data-error", error);
                    textField.attr("data-type", type);
                    textField.attr("data-decimal_places", decimalPlaces);

                    // appends the text field to the element and runs the
                    // text field initializer
                    _element.append(textField);
                    textField.uxtextfield();
                }

                // retrieves the text field value and if it's currently
                // in the "lowered" state
                var textFieldValue = textField.attr("value");
                var textFieldIsLower = textField.hasClass("lower");

                // sets the appropriate text field value taking into account
                // if the text field is lowered (empty field) or if the value
                // is correctly set (otherwise)
                textFieldValue = textFieldIsLower ? "" : textFieldValue;

                // adds the "extra" html to the matched object,
                // in case no drop field contents is found
                dropFieldContents.length == 0
                        && _element.append("<div class=\"drop-field-clear\"></div>")
                        && _element.append("<ul class=\"drop-field-contents\"></ul>");

                // retrieves the hidden field and tries
                // to retrieve its value
                var hiddenField = jQuery(".hidden-field", _element);
                var hiddenFieldValue = hiddenField.attr("value");

                // creates the map that will hold the complete set of
                // value field associated with the attribute to be set
                // no each of them
                var _valueFields = {};

                // iterates over all the value fields to process them
                // and set them in the element associated with the
                // attribute they "represent"
                valueFields.each(function(element, index) {
                            // retrieves the current element (value field) in
                            // iteration and the attribute it represents
                            var _element = jQuery(this);
                            var attribute = _element.attr("data-attribute");

                            // sets the current element (value field) in the
                            // map associated with the attribute it represents
                            _valueFields[attribute] = _element;
                        });

                // adds the lock class to the element
                // in case the hidden field value is already set and valid
                hiddenFieldValue && _element.addClass("drop-field-lock");

                // disables the auto complete in the text field element
                // and in the hidden field (side effects are generated
                // if the autcomplete is not disabled)
                textField.attr("autocomplete", "off");
                hiddenField.attr("autocomplete", "off");

                // ses the text field as read only in case the drop
                // field is of type select
                isSelect && textField.attr("readonly", "true");

                // avoids the escape handling in the text field, the drop
                // field will handle them manually
                textField.data("avoid_escape", true);

                // sets the initial element values
                _element.data("cache", {});
                _element.data("value", textFieldValue);
                _element.data("selection", 0);
                _element.data("mouse_control", false);
                _element.data("display_attribute", displayAttribute);
                _element.data("extra_attribute", extraAttribute);
                _element.data("value_attribute", valueAttribute);
                _element.data("link_attribute", linkAttribute);
                _element.data("filter_attributes", filterAttributesList);
                _element.data("number_options", numberOptions);
                _element.data("filter_options", filterOptions);
                _element.data("value_fields", _valueFields);
            });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the body
            var _body = jQuery("body");

            // retrieves the matched object elements
            var dropFieldContents = jQuery(".drop-field-contents",
                    matchedObject);
            var textField = jQuery(".text-field", matchedObject);

            // checks if the drop field click event is already
            // registerd in the body and set the variable as
            // true to avoid further registrations
            var isRegistered = _body.data("drop_field_click");
            _body.data("drop_field_click", true);

            // iterates over each of the matched objects
            // to register the select elements
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // in case the current element is not of type
                        // drop field select
                        if (!_element.hasClass("drop-field-select")) {
                            // returns immediately
                            // (continues the loop)
                            return;
                        }

                        // retrieves the drop field and the drop field elements
                        var dropField = _element;
                        var textField = jQuery(".text-field", dropField);
                        var dropFieldContents = jQuery(".drop-field-contents",
                                dropField);

                        // checks if the drop field is of type select
                        var isSelect = dropField.hasClass("drop-field-select");

                        // registers for the click event in the text field
                        // (select click)
                        isSelect && textField.click(function(event) {
                                    // checks if the drop field to verify that the
                                    // drop field is not disabled, in case it is
                                    // no action is done
                                    var isDisabled = dropField.hasClass("disabled");
                                    if (isDisabled) {
                                        return;
                                    }

                                    // in case the drop field contents is visible
                                    // (should move the cursor)
                                    if (dropFieldContents.is(":visible")) {
                                        // hides the drop field contents
                                        dropFieldContents.hide();
                                    }
                                    // otherwise it should show the updated
                                    // drop field contents
                                    else {
                                        // tries to retieve the updated flag from the
                                        // drop field and in case it's not been already
                                        // updated, runs the update process on it after
                                        // that sets the updated flag on its data
                                        var updated = dropField.data("updated");
                                        !updated && _update(dropField, options);
                                        dropField.data("updated", true)

                                        // shows the drop field contents
                                        dropFieldContents.show();
                                    }

                                    // stops the event propagation
                                    // (avoids immediate closing of
                                    // the drop field contents)
                                    event.stopPropagation();
                                    event.preventDefault();
                                });
                    });

            // binds the drop field do the enabled event
            // so that is possible to propagate the enabling
            matchedObject.bind("enabled", function() {
                        // retrieves the current element and the associated
                        // text field element
                        var element = jQuery(this);
                        var textField = jQuery(".text-field", element);

                        // enables the text field associated with
                        // the element (drop field)
                        textField.uxenable();
                    });

            // binds the drop field to the disabled event
            // so that is possible to propagate the disabling
            matchedObject.bind("disabled", function() {
                        // retrieves the current element and the associated
                        // text field element
                        var element = jQuery(this);
                        var textField = jQuery(".text-field", element);

                        // disables the text field associated with
                        // the element (drop field)
                        textField.uxdisable();
                    });

            // registers for the click event in the body
            !isRegistered && _body.click(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves all the visible drop fields contents
                        // contained in the current element context (body)
                        var dropFieldContents = jQuery(
                                ".drop-field .drop-field-contents:visible",
                                element);

                        // hides the drop field contents
                        dropFieldContents.hide();
                    });

            // registers for the key down even on the text field
            textField.keydown(function(event) {
                        // retrieves th current element
                        var element = jQuery(this);

                        // retrieves the drop field associated with the
                        // current element (text field) and then retrieves
                        // its contents
                        var dropField = element.parents(".drop-field");
                        var dropFieldContents = jQuery(".drop-field-contents",
                                dropField);

                        // checks if the drop field to verify that the
                        // drop field is not disabled, in case it is
                        // no action is done
                        var isDisabled = dropField.hasClass("disabled");
                        if (isDisabled) {
                            return;
                        }

                        // retrieves the event key code
                        var eventKeyCode = event.keyCode
                                ? event.keyCode
                                : event.which;

                        // in case the pressed key is not the escape
                        // key no need to act
                        if (eventKeyCode != 27) {
                            // returns immediately
                            return;
                        }

                        // in case the drop field contents are
                        // visible must act accordingly
                        if (dropFieldContents.is(":visible")) {
                            // hides the drop field contents
                            dropFieldContents.hide();
                        }
                        // otherwise the normal behavior applies
                        // must blur from the element
                        else {
                            // blurs from the element (unfocus)
                            element.blur();
                        }
                    });

            // registers for the focus event in the matched object
            // in order to propagate it to the underlying elements
            // that are "focusable"
            matchedObject.focus(function() {
                        // retrieves the element and the associated text
                        // field and propagates the focus event to it
                        var element = jQuery(this);
                        var textField = jQuery(".text-field", element);
                        textField.focus();
                    });

            // registers for the blur event in the matched object
            // in order to propagate it to the underlying elements
            // that are "focusable"
            matchedObject.blur(function() {
                        // retrieves the element and the associated text
                        // field and propagates the blur event to it
                        var element = jQuery(this);
                        var textField = jQuery(".text-field", element);
                        textField.blur();
                    });

            // registers for the focus event in the text field
            textField.focus(function(event) {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the parent dopr field associated
                        // with the current text field in event
                        var dropField = element.parents(".drop-field");

                        // adds the focus class to the drop field indicating
                        // that the current drop field "contains" focus
                        dropField.addClass("focus");

                        // avoids the propagation of the event otherwise
                        // a loop may be created
                        event.stopPropagation();
                    });

            // registers for the blur event in the text field
            textField.blur(function(event) {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the drop field in order to get
                        // the mouse control flag
                        var dropField = element.parents(".drop-field");
                        var mouseControl = dropField.data("mouse_control");

                        // hides the drop field contents, only in case the mouse
                        // control flag is set, prevents the browser from hidding
                        // the drop field contents in case before the click event
                        // is propagated
                        !mouseControl && dropFieldContents.hide();

                        // checks if the drop field is of type select
                        var isSelect = dropField.hasClass("drop-field-select");

                        // updates the drop field data, only in case
                        // current drop field is not of type select
                        !isSelect && _update(dropField, options);

                        // removes the focus class from the parent drop field
                        // it's not focused anymore
                        dropField.removeClass("focus");

                        // avoids the propagation of the event otherwise
                        // a loop may be created
                        event.stopPropagation();
                    });

            // registers for the mouse enter event in the drop field contents
            dropFieldContents.mouseenter(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the drop field to set the
                        // mouse control flag
                        var dropField = element.parents(".drop-field");
                        dropField.data("mouse_control", true);
                    });

            // registers for the mouse leave event in the drop field contents
            dropFieldContents.mouseleave(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the drop field to unset the
                        // mouse control flag
                        var dropField = element.parents(".drop-field");
                        dropField.data("mouse_control", false);
                    });

            // registers for the key down event in the text field
            textField.keydown(function(event) {
                // retrieves the element
                var element = jQuery(this);

                // retrieves the drop field and the drop field elements
                var dropField = element.parents(".drop-field");
                var hiddenField = jQuery(".hidden-field", dropField);
                var hiddenTemplate = jQuery(".hidden-template", dropField);
                var textField = jQuery(".text-field", dropField);
                var dropFieldContents = jQuery(".drop-field-contents",
                        dropField);
                var template = jQuery(".template", dropField);

                // checks if the drop field to verify that the
                // drop field is not disabled, in case it is
                // no action is done
                var isDisabled = dropField.hasClass("disabled");
                if (isDisabled) {
                    return;
                }

                // retrieves the event key code
                var eventKeyCode = event.keyCode ? event.keyCode : event.which;

                // switches over the event key code
                switch (eventKeyCode) {
                    // in case it's the tab key
                    case 9 :
                        // in case the drop field contents is visible
                        if (dropFieldContents.is(":visible")) {
                            // retrieves the selected list item
                            var listItemSelected = jQuery(
                                    ".drop-field-contents > .selected",
                                    dropField);

                            // retrieves the value, the logic value
                            // and the value link from the selected list item
                            var value = listItemSelected.attr("data-display");
                            var valueLogic = listItemSelected.attr("data-value");
                            var valueLink = listItemSelected.attr("data-link");

                            // retrieves the complete set of value fields from the drop
                            // field to apply the item values into them
                            var valueFields = dropField.data("value_fields");

                            // retrieves the item associated with the selected list item
                            // so that it may be used for the template rendering
                            var item = listItemSelected.data("item");

                            // applies the template to the template (item)
                            // retrieving the resulting template item
                            var templateItem = template.uxtemplate(item);

                            // clears the hidden template elements and then
                            // adds the template item to it
                            hiddenTemplate.empty();
                            hiddenTemplate.append(templateItem);

                            // updates the value fields
                            hiddenField.attr("value", valueLogic);
                            textField.uxtextfield("value", {
                                        value : value
                                    });
                            dropField.data("value", value);

                            // iterates over all the value field to apply the
                            // correct item value to them
                            for (var key in valueFields) {
                                var field = valueFields[key];
                                var _value = item[key];
                                field.attr("value", _value);
                            }

                            // adds the lock class to the drop field
                            // in case the hidden field is present
                            // and there is a logic field "selected"
                            hiddenField.length > 0 && valueLogic
                                    && dropField.addClass("drop-field-lock");

                            // triggers the value select event
                            dropField.triggerHandler("value_select", [value,
                                            valueLogic, item]);

                            // hides the drop field contents
                            dropFieldContents.hide();

                            // stops the event propagation
                            // (avoids extra problems in form)
                            event.stopPropagation();
                            event.preventDefault();
                        }

                        // breaks the switch
                        break;

                    // in case it's the enter key
                    case 13 :
                        // in case the drop field contents is visible
                        if (dropFieldContents.is(":visible")) {
                            // stops the event propagation
                            // (avoids extra problems in form)
                            event.stopPropagation();
                            event.preventDefault();
                        }

                        // breaks the switch
                        break;

                    // in case it's the page up, the
                    // page down, the up or the
                    // down keys
                    case 33 :
                    case 34 :
                    case 38 :
                    case 40 :
                        // stops the event propagation
                        // (avoids extra problems in form)
                        event.stopPropagation();
                        event.preventDefault();

                        // breaks the switch
                        break;
                }
            });

            // registers for the key up event in the text field
            textField.keyup(function(event) {
                // retrieves the element
                var element = jQuery(this);

                // retrieves the drop field and the drop field elements
                var dropField = element.parents(".drop-field");
                var hiddenField = jQuery(".hidden-field", dropField);
                var hiddenTemplate = jQuery(".hidden-template", dropField);
                var textField = jQuery(".text-field", dropField);
                var dropFieldContents = jQuery(".drop-field-contents",
                        dropField);
                var template = jQuery(".template", dropField);

                // retrieves the current value for the hidden field
                // this value must represent if the drop field is
                // currently locked or not
                var hiddenFieldValue = hiddenField.attr("value");

                // checks if the drop field to verify that the
                // drop field is not disabled, in case it is
                // no action is done
                var isDisabled = dropField.hasClass("disabled");
                if (isDisabled) {
                    return;
                }

                // retrieves the event key code
                var eventKeyCode = event.keyCode ? event.keyCode : event.which;

                // switches over the event key code
                switch (eventKeyCode) {
                    // in case it's the enter key
                    case 13 :
                        // in case the drop field contents is visible
                        if (dropFieldContents.is(":visible")) {
                            // retrieves the selected list item
                            var listItemSelected = jQuery(
                                    ".drop-field-contents > .selected",
                                    dropField);

                            // retrieves the value, the logic value
                            // and the value link from the selected list item
                            var value = listItemSelected.attr("data-display");
                            var valueLogic = listItemSelected.attr("data-value");
                            var valueLink = listItemSelected.attr("data-link");

                            // retrieves the complete set of value fields from the drop
                            // field to apply the item values into them
                            var valueFields = dropField.data("value_fields");

                            // retrieves the item associated with the selected list item
                            // so that it may be used for the template rendering
                            var item = listItemSelected.data("item");

                            // applies the template to the template (item)
                            // retrieving the resulting template item
                            var templateItem = template.uxtemplate(item);

                            // clears the hidden template elements and then
                            // adds the template item to it
                            hiddenTemplate.empty();
                            hiddenTemplate.append(templateItem);

                            // updates the value fields
                            hiddenField.attr("value", valueLogic);
                            textField.uxtextfield("value", {
                                        value : value
                                    });
                            dropField.data("value", value);

                            // iterates over all the value field to apply the
                            // correct item value to them
                            for (var key in valueFields) {
                                var field = valueFields[key];
                                var _value = item[key];
                                field.attr("value", _value);
                            }

                            // adds the lock class to the drop field
                            // in case the hidden field is present
                            // and there is a logic field "selected"
                            hiddenField.length > 0 && valueLogic
                                    && dropField.addClass("drop-field-lock");

                            // triggers the value select event
                            dropField.triggerHandler("value_select", [value,
                                            valueLogic, item]);

                            // in case the value link is set
                            if (valueLink) {
                                // retrieves the offset and converts it
                                // into an integer
                                var duration = dropField.attr("data-duration");
                                var durationInteger = parseInt(duration);

                                // checks if the duration integer value is valid
                                // conversion successful
                                var durationValid = !isNaN(durationInteger);

                                // in case the duration is valid (the link is
                                // internal and a scroll to shall be used)
                                if (durationValid) {
                                    // retrieves the offset and converts it
                                    // into an integer
                                    var offset = dropField.attr("data-offset");
                                    var offsetInteger = parseInt(offset);

                                    // creates the settings map based on the offset
                                    var settings = {
                                        offset : isNaN(offsetInteger)
                                                ? 0
                                                : offsetInteger
                                    }

                                    // scrolls to the reference
                                    jQuery.uxscrollto(valueLink,
                                            durationInteger, settings);
                                }
                                // otherwise the link is external and
                                // no scroll to shall be used
                                else {
                                    // changes the document location to
                                    // the value link value
                                    document.location = valueLink;
                                }
                            }

                            // hides the drop field contents
                            dropFieldContents.hide();
                        }

                        // breaks the switch
                        break;

                    // in case it's the escape key
                    case 27 :
                        // hides the drop field contents
                        dropFieldContents.hide();

                        // stops the event propagation (to
                        // avoid colateral problem in text field)
                        event.stopPropagation();

                        // breaks the switch
                        break;

                    // in case it's the page up key
                    case 33 :
                        // in case the drop field contents is visible
                        // (should move the cursor)
                        if (dropFieldContents.is(":visible")) {
                            // sets the "current" selection to the up
                            _upSelection(dropField, options);
                        }
                        // otherwise it should show the updated
                        // drop field contents
                        else {
                            // updates the drop field
                            _update(dropField, options);

                            // shows the drop field contents, only in case
                            // the current drop field contents is not empty
                            !hiddenFieldValue
                                    && !dropFieldContents.is(":empty")
                                    && dropFieldContents.show();
                        }

                        break;

                    // in case it's the page down key
                    case 34 :
                        // in case the drop field contents is visible
                        // (should move the cursor)
                        if (dropFieldContents.is(":visible")) {
                            // sets the "current" selection to the bottom
                            _downSelection(dropField, options);
                        }
                        // otherwise it should show the updated
                        // drop field contents
                        else {
                            // updates the drop field
                            _update(dropField, options);

                            // shows the drop field contents, only in case
                            // the current drop field contents is not empty
                            !hiddenFieldValue
                                    && !dropFieldContents.is(":empty")
                                    && dropFieldContents.show();
                        }

                        break;

                    // in case it's the up key
                    case 38 :
                        // in case the drop field contents is visible
                        // (should move the cursor)
                        if (dropFieldContents.is(":visible")) {
                            // increments the "current" selection
                            _incrementSelection(dropField, options);
                        }
                        // otherwise it should show the updated
                        // drop field contents
                        else {
                            // updates the drop field
                            _update(dropField, options);

                            // shows the drop field contents, only in case
                            // the current drop field contents is not empty
                            !hiddenFieldValue
                                    && !dropFieldContents.is(":empty")
                                    && dropFieldContents.show();
                        }

                        // breaks the switch
                        break;

                    // in case it's the down key
                    case 40 :
                        // in case the drop field contents is visible
                        // (should move the cursor)
                        if (dropFieldContents.is(":visible")) {
                            // decrements the "current" selection
                            _decrementSelection(dropField, options);
                        }
                        // otherwise it should show the updated
                        // drop field contents
                        else {
                            // updates the drop field
                            _update(dropField, options);

                            // shows the drop field contents, only in case
                            // the current drop field contents is not empty
                            !hiddenFieldValue
                                    && !dropFieldContents.is(":empty")
                                    && dropFieldContents.show();
                        }

                        // breaks the switch
                        break;

                    // in case it's any other key
                    default :
                        // checks if the drop field is of type select
                        var isSelect = dropField.hasClass("drop-field-select");

                        // updates the drop field data, only in case
                        // current drop field is not of type select
                        !isSelect && _update(dropField, options);

                        // breaks the switch
                        break;
                }
            });
        };

        var _update = function(matchedObject, options) {
            // retrieves the drop field elements
            var dropField = matchedObject;
            var dataSource = jQuery("> .data-source", dropField);
            var hiddenField = jQuery(".hidden-field", dropField);
            var valueFields = jQuery(".value-field", dropField);
            var hiddenTemplate = jQuery(".hidden-template", dropField);
            var textField = jQuery(".text-field", dropField);
            var dropFieldContents = jQuery(".drop-field-contents", dropField);
            var dropFieldNoResults = jQuery(".drop-field-no-results", dropField);
            var template = jQuery(".template", dropField);

            // retrieves the current drop field value
            var value = dropField.data("value");

            // retrieves the display, value and the link attributes
            var displayAttribute = matchedObject.data("display_attribute");
            var extraAttribute = matchedObject.data("extra_attribute");
            var valueAttribute = matchedObject.data("value_attribute");
            var linkAttribute = matchedObject.data("link_attribute");

            // retrieves the filter attributes
            var filterAttributes = matchedObject.data("filter_attributes");

            // retrieves the number of options to display
            // and if they should be filtered
            var numberOptions = matchedObject.data("number_options");
            var filterOptions = matchedObject.data("filter_options");

            // retrieves the auto size value from the drop field
            // (in case active the drop field is positioned)
            var autoResize = dropField.attr("data-auto_size");

            // retrieves the text field value
            var textFieldValue = textField.attr("value");

            // checks if the drop field is of type select
            var isSelect = dropField.hasClass("drop-field-select");

            // in case the value did not change and the drop field
            // is not of type select (no need to show the contents)
            if (textFieldValue == value && !isSelect) {
                // returns immediately
                return;
            }

            // in case the text field value is empty and the current
            // type is not select the drop field contents panel must
            // be hidden (nova valid data to be shown)
            if (textFieldValue == "" && !isSelect) {
                dropFieldContents.hide();
            }

            // creates the filter string from the text
            // field value in case the select mode is not
            // enabled
            var filterString = isSelect ? "" : textFieldValue;

            // invalidates the "logical" hidden field, may
            // assume the value is in an invalid (transient state)
            // and so there is no "logical" value, avoids doing
            // this in case select field mode is selected (in this
            // mode a value is always selected)
            if (!isSelect) {
                // empties the hidden template and updates the hidden
                // field value (and value field) to empty and then
                // removes the drop field lock class from the drop field
                hiddenTemplate.empty();
                hiddenField.attr("value", "");
                valueFields.attr("value", "");
                dropField.removeClass("drop-field-lock");
            }

            // nullifies the number of options in case it's necessary
            numberOptions = filterOptions ? numberOptions : null;

            // runs the query in the data source
            dataSource.uxdataquery({
                        filterString : filterString,
                        filterAttributes : filterAttributes,
                        startRecord : 0,
                        numberRecords : numberOptions
                    }, function(validItems, moreItems) {
                        // in case the valid items value
                        // is not valid (error occurred)
                        if (!validItems) {
                            // returns immediately
                            return;
                        }

                        // in case the drop field is locked or the containing
                        // text field does not contains focus there is no need
                        // to process the results (something occured in betweed
                        // the request and the response)
                        if ((!isSelect && dropField.hasClass("drop-field-lock"))
                                || !textField.hasClass("focus")) {
                            // returns immediately
                            return;
                        }

                        // empties (clears) the drop field contents
                        dropFieldContents.empty()

                        // in case no valid items were retrieves, must show
                        // the no results element
                        if (validItems.length == 0) {
                            // clones the drop field no results element, to create
                            // an instance to be added, then removes the hidding
                            // class from it
                            var _dropFieldNoResults = dropFieldNoResults.clone();
                            _dropFieldNoResults.removeClass("drop-field-no-results");

                            // adds the filter no results element to the
                            // drop field contents
                            dropFieldContents.append(_dropFieldNoResults);
                        }

                        // retrieves the cache map to be used to determine if the
                        // various elements should be contructed from scratch or
                        // if an already existing element should be used instead
                        var cache = dropField.data("cache");

                        // iterates over all the valid and filtered items
                        // to adds them to the drop field contents
                        for (var index = 0; index < validItems.length; index++) {
                            // retrieves the current item (from the valid items)
                            var currentItem = validItems[index];

                            // triggers the (new) item event so that the
                            // current item may be (changed)
                            dropField.triggerHandler("item", [currentItem]);

                            // tries to retrieve the unique identifier from the
                            // current item to be used as the cache key
                            var uniqueId = currentItem["unique_id"]
                                    || currentItem["uid"];

                            // retrieves the cache map from the drop field and
                            // tries to find the cache item for the unique identifier
                            // in case it's found validates it so that the data contained
                            // in it matches the one cached in such case (valid case)
                            // adds the item to the drop field contents and continues
                            // the loop immediately (no layout rendering)
                            var cacheItem = cache[uniqueId];
                            var cachedData = cacheItem ? cacheItem.data : null;
                            var cacheValid = cachedData ? jQuery.uxequals(
                                    cachedData, currentItem) : false;
                            if (cacheItem && cacheValid) {
                                // sets the cache item as the inner item contained
                                // in the cache item (layout element)
                                cacheItem = cacheItem.item;

                                // sets the current item in the cache item data
                                // so that it can be used for latter template rendering
                                cacheItem.data("item", currentItem);

                                // adds the template item item to the
                                // drop field contents
                                dropFieldContents.append(cacheItem);
                                continue;
                            }

                            // retrieves both the display and the value
                            // attributes for the current item
                            var currentDisplayAttribute = displayAttribute
                                    ? currentItem[displayAttribute]
                                    : currentItem;
                            var currentExtraAttribute = extraAttribute
                                    ? currentItem[extraAttribute]
                                    : null;
                            var currentValueAttribute = valueAttribute
                                    ? currentItem[valueAttribute]
                                    : currentItem;
                            var currentLinkAttribute = linkAttribute
                                    ? currentItem[linkAttribute]
                                    : null;

                            // retrieves the default values for the display
                            // and values taking into account the type of
                            // the retrieved values (in case it's map resolves again)
                            currentDisplayAttribute = currentDisplayAttribute
                                    && typeof currentDisplayAttribute == "object"
                                    ? currentDisplayAttribute["name"]
                                    : currentDisplayAttribute;
                            currentExtraAttribute = currentExtraAttribute
                                    && typeof currentExtraAttribute == "object"
                                    ? currentExtraAttribute["value"]
                                    : currentExtraAttribute;
                            currentValueAttribute = currentValueAttribute
                                    && typeof currentValueAttribute == "object"
                                    ? currentValueAttribute["value"]
                                    : currentValueAttribute;
                            currentLinkAttribute = currentLinkAttribute
                                    && typeof currentLinkAttribute == "object"
                                    ? currentLinkAttribute["link"]
                                    : currentLinkAttribute;

                            // in case the template is defined
                            if (template.length > 0) {
                                // applies the template to the template (item)
                                // retrieving the resulting template item
                                var templateItem = template.uxtemplate(currentItem);

                                // sets the data display and data value
                                // attributes in the template item
                                templateItem.attr("data-display",
                                        currentDisplayAttribute);
                                templateItem.attr("data-value",
                                        currentValueAttribute);

                                // sets the current item in the template item data
                                // so that it can be used for latter template rendering
                                templateItem.data("item", currentItem);
                            }
                            // otherwise the template is not defined and
                            // it must be constructed from base
                            else {
                                // creates the base template item from
                                // the current item
                                var templateItem = jQuery("<li data-display=\""
                                        + currentDisplayAttribute
                                        + "\" data-value=\""
                                        + currentValueAttribute + "\">"
                                        + currentDisplayAttribute + "</li>");

                                // in case the extra attribute value is defined the
                                // subscript section should also be added to
                                // the generated template item
                                currentExtraAttribute
                                        && templateItem.append("<span class=\"subscript-extra\">"
                                                + currentExtraAttribute
                                                + "</span>");

                                // sets the current item in the template item data
                                // so that it can be used for latter template rendering
                                templateItem.data("item", currentItem);
                            }

                            // retrieves the first link element available in the
                            // template item, then uses it to retrieve
                            // its hyperlink reference (in case it's necessary)
                            var linkElement = jQuery("a", templateItem);
                            currentLinkAttribute = linkElement.length
                                    ? linkElement.attr("href")
                                    : currentLinkAttribute;

                            // sets the data link attribute in the
                            // template item in case it's valid
                            currentLinkAttribute
                                    && templateItem.attr("data-link",
                                            currentLinkAttribute);

                            // sets the template item in the cache map
                            // to provide cache for the visual element
                            // only in case the unique id is valid (set)
                            if (uniqueId) {
                                cache[uniqueId] = {
                                    item : templateItem,
                                    data : currentItem
                                }
                            }

                            // adds the template item item to the
                            // drop field contents
                            dropFieldContents.append(templateItem);
                        }

                        // retrieves the "current" list items
                        var listItems = jQuery(".drop-field-contents > *",
                                dropField);

                        // registers for the mouse down event in the list items
                        listItems.mousedown(function(event) {
                                    // avoids event propagation this way the focus
                                    // is not lost when clicking on a list item
                                    // (this is the desired behavior)
                                    event.stopPropagation();
                                    event.preventDefault();
                                });

                        // registers for the click event in the list items
                        listItems.click(function(event) {
                                    // retrieves the element
                                    var element = jQuery(this);

                                    // retrieves the index associated with the current
                                    // selected element and updates the options map with
                                    // this value to condition the index change call
                                    var index = element.index();
                                    options["index"] = index;

                                    // changes the index of the current drop field to match
                                    // the one "required" in the provided options map
                                    _index(dropField, options);

                                    // avoids event propagation this way the focus
                                    // is not lost when clicking on a list item
                                    // (this is the desired behavior)
                                    event.stopPropagation();
                                    event.preventDefault();
                                });

                        // triggers the value unselect event
                        dropField.triggerHandler("value_unselect", []);

                        // retrieves the previous selection (original selection)
                        // using the value from the text field, then tries to guess
                        // the index by comparing the string value agains the
                        // display value of the list item (this is usefull for the
                        // select type drop fields)
                        var preSelection = jQuery("li[data-display='"
                                        + textFieldValue + "']",
                                dropFieldContents);
                        var preSelectionIndex = preSelection.length > 0
                                ? preSelection.index() + 1
                                : 0;

                        // updates the drop field state, note that the index is updated
                        // differenty in case it's a select drop field (uses the pre select
                        // index value)
                        isSelect ? dropField.data("selection",
                                preSelectionIndex) : dropField.data(
                                "selection", 1);
                        dropField.data("value", textFieldValue);

                        // removes the lock class to the drop field
                        dropField.removeClass("drop-field-lock");

                        // shows the drop field contents in case there
                        // are valid items pending to be show otherwise
                        // hides the drop field contents (no need to show)
                        // an empty set of items, the drop field contents
                        // are only shown in case there is still focus in
                        // the text field
                        validItems.length > 0 && textField.hasClass("focus")
                                && (textFieldValue != "" || isSelect)
                                ? dropFieldContents.show()
                                : dropFieldContents.hide();

                        // in case the auto resize options is set
                        // (must position the drop field contents)
                        if (autoResize != "false") {
                            // checks if the current drop field contents component
                            // is visible and in case it's not shows it
                            var isVisible = dropFieldContents.is(":visible");
                            !isVisible && dropFieldContents.show();

                            // retrieves the drop field items
                            var dropFieldContentsItems = dropFieldContents.children();

                            // calculates the drop fields contents with
                            //using the text field width and the drop field
                            // contents items width
                            var textFieldWidth = textField.outerWidth();
                            var dropFieldContentsItemsExtraWidth = dropFieldContentsItems.outerWidth()
                                    - dropFieldContentsItems.width();
                            var dropFieldContentsWidth = textFieldWidth
                                    - dropFieldContentsItemsExtraWidth;

                            // in case the current drop field contents is not visible
                            // hides it back (original visibility)
                            !isVisible && dropFieldContents.hide();

                            // sets the drop field contents width
                            dropFieldContents.width(dropFieldContentsWidth);
                        }

                        // updates the current selection
                        _updateSelection(dropField, options);
                    });
        };

        var _value = function(matchedObject, options) {
            // retrieves the text field associated with the
            // current matched object and runs the value method
            // in it retrieving and returning the value (pipeline)
            var textField = jQuery(".text-field", matchedObject);
            var returnValue = textField.uxtextfield("value", options);
            return returnValue;
        };

        var _incrementSelection = function(matchedObject, options) {
            // retrieves the current selection value
            var selection = matchedObject.data("selection");

            // in case the selection row not "overlfows"
            if (selection > 0) {
                // decrements the current selection
                matchedObject.data("selection", selection - 1);
            }

            // updates the current selection
            _updateSelection(matchedObject, options);
        };

        var _decrementSelection = function(matchedObject, options) {
            // retrieves the current selection value
            var selection = matchedObject.data("selection");

            // retrieves the "current" list items
            var listItems = jQuery(".drop-field-contents > *", matchedObject);

            // in case the selection row not "overlfows"
            if (selection < listItems.length) {
                // increments the current selection
                matchedObject.data("selection", selection + 1);
            }

            // updates the current selection
            _updateSelection(matchedObject, options);
        };

        var _upSelection = function(matchedObject, options) {
            // retrieves the current selection value
            var selection = matchedObject.data("selection");

            // in case the selection row is not the first
            // one (goes to the top)
            if (selection > 1) {
                // resets the current selection to be top
                // selection value
                matchedObject.data("selection", 1);
            }
            // otherwise goes to the "invisible" value
            else {
                // resets the current selection to be base
                // selection value
                matchedObject.data("selection", 0);
            }

            // updates the current selection
            _updateSelection(matchedObject, options);
        };

        var _downSelection = function(matchedObject, options) {
            // retrieves the current selection value
            var selection = matchedObject.data("selection");

            // retrieves the "current" list items
            var listItems = jQuery(".drop-field-contents > *", matchedObject);

            // in case the selection row is not the base
            // one (goes to the bottom)
            if (selection > 0) {
                // resets the current selection to be bottom
                // selection value
                matchedObject.data("selection", listItems.length);
            }
            // otherwise it's the base selection and the drop field
            // must be scrolled to the top
            else {
                // resets the current selection to be top
                // selection value
                matchedObject.data("selection", 1);
            }

            // updates the current selection
            _updateSelection(matchedObject, options);
        };

        var _updateSelection = function(matchedObject, options) {
            // retrieves the current selection value
            var selection = matchedObject.data("selection");

            // retrieves the current list items
            var listItems = jQuery(".drop-field-contents > *", matchedObject);

            // removes the selected class from the current list
            // items (unselection)
            listItems.removeClass("selected");

            // retrieves the list item to be selected
            var selectedListItem = jQuery(".drop-field-contents > :nth-child("
                            + selection + ")", matchedObject);

            // adds the selected class to the selected list item
            selectedListItem.addClass("selected");
        };

        var _set = function(matchedObject, options) {
            // retrieves both the value of the item and the logic
            // value to be set in the hidden field
            var value = options["value"];
            var valueLogic = options["valueLogic"];

            // tries to retieve the item definition from the
            // options in case it's defined
            var item = options["item"] || {};

            // retrieves the drop field elements
            var dropField = matchedObject;
            var hiddenField = jQuery(".hidden-field", dropField);
            var hiddenTemplate = jQuery(".hidden-template", dropField);
            var textField = jQuery(".text-field", dropField);
            var dropFieldContents = jQuery(".drop-field-contents", dropField);

            // retrieves the complete set of value fields from the drop
            // field to apply the item values into them
            var valueFields = dropField.data("value_fields");

            // empties the drop field contents, so that no items
            // are show in the drop field contents (invalidates data)
            dropFieldContents.empty();

            // clears the hidden template elements no valid
            // element is set on it (hidden template is empty)
            hiddenTemplate.empty();

            // updates the value fields, to the values provided
            // in the options map
            hiddenField.attr("value", valueLogic);
            textField.uxtextfield("value", {
                        value : value
                    });
            dropField.data("value", value);
            dropField.data("selection", 1);

            // iterates over all the value field to apply the
            // correct item (from options) value to them
            for (var key in valueFields) {
                var field = valueFields[key];
                var _value = item[key];
                field.attr("value", _value);
            }

            // adds the drop field lock class from the drop field
            // adds the lock symbol to the drop field
            dropField.addClass("drop-field-lock")
        };

        var _reset = function(matchedObject, options) {
            // retrieves the drop field elements
            var dropField = matchedObject;
            var hiddenField = jQuery(".hidden-field", dropField);
            var valueFields = jQuery(".value-field", dropField);
            var hiddenTemplate = jQuery(".hidden-template", dropField);
            var textField = jQuery(".text-field", dropField);
            var dropFieldContents = jQuery(".drop-field-contents", dropField);

            // empties the drop field contents, so that no items
            // are show in the drop field contents
            dropFieldContents.empty();

            // clears the hidden template elements no valid
            // element is set on it (hidden template is empty)
            hiddenTemplate.empty();

            // updates the value fields, to the original
            // "empty" (unset) values
            hiddenField.attr("value", null);
            valueFields.attr("value", null);
            textField.uxtextfield("value", {
                        value : ""
                    });
            dropField.data("value", "");
            dropField.data("selection", 1);

            // removes the drop field lock class from the drop field
            // no need to retain the lock symbol in the drop field
            dropField.removeClass("drop-field-lock");
        };

        var _index = function(matchedObject, options) {
            // retrievs the target index from the provided options
            // map, this value will be used to retrieved the correct
            // child element for the change
            var index = options["index"];

            // retrieves the the various elements required for
            // the changing of the index on the drop field, note
            // that the drop field is set as the current object
            var dropField = matchedObject;
            var hiddenField = jQuery(".hidden-field", dropField);
            var textField = jQuery(".text-field", dropField);
            var template = jQuery(".template", dropField);
            var hiddenTemplate = jQuery(".hidden-template", dropField);
            var dropFieldContents = jQuery(".drop-field-contents", dropField);
            var element = jQuery("> li:nth-child(" + (index + 1) + ")",
                    dropFieldContents);

            // retrieves the value, the logic value
            // and the value link from the element
            var value = element.attr("data-display");
            var valueLogic = element.attr("data-value");
            var valueLink = element.attr("data-link");

            // retrieves the complete set of value fields from the drop
            // field to apply the item values into them
            var valueFields = dropField.data("value_fields");

            // retrieves the item associated with the selected list item
            // so that it may be used for the template rendering
            var item = element.data("item");

            // applies the template to the template (item)
            // retrieving the resulting template item
            var templateItem = template.uxtemplate(item);

            // clears the hidden template elements and then
            // adds the template item to it
            hiddenTemplate.empty();
            hiddenTemplate.append(templateItem);

            // updates the value fields
            hiddenField.attr("value", valueLogic);
            textField.uxtextfield("value", {
                        value : value
                    });
            dropField.data("value", value);

            // iterates over all the value field to apply the
            // correct item value to them
            for (var key in valueFields) {
                var field = valueFields[key];
                var _value = item[key];
                field.attr("value", _value);
            }

            // adds the lock class to the drop field
            // in case the hidden field is present
            // and there is a logic field "selected"
            hiddenField.length > 0 && valueLogic
                    && dropField.addClass("drop-field-lock");

            // triggers the value select event
            dropField.triggerHandler("value_select", [value, valueLogic, item]);

            // in case the value link is set
            if (valueLink) {
                // changes the document location to
                // the value link value
                document.location = valueLink;
            }

            // calculates the new selection index from the element
            // index and updates the data attribute of the drop
            // field accordingly, then runs the update selection
            // to update the graphics
            var selectionIndex = element.index() + 1
            dropField.data("selection", selectionIndex);
            _updateSelection(dropField, options);

            // hides the drop field contents
            dropFieldContents.hide();
        };

        // switches over the method
        switch (method) {
            case "set" :
                // sets the value in the drop field value
                _set(matchedObject, options);

                // breaks the switch
                break

            case "reset" :
                // resets the drop field value
                _reset(matchedObject, options);

                // breaks the switch
                break

            case "index" :
                // selects the proper index value in the drop
                // field, usefull for drop field select elements
                _index(matchedObject, options);

                // breaks the switch
                break

            case "value" :
                // retrieves the value
                var value = _value(matchedObject, options);

                // returns the value
                return value;

            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery drop tag plugin, this jQuery plugin provides the base infra-structure
 * for the creation of a drop tag component.
 *
 * @name jquery-drop-tag.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxdroptag = function(method, options) {
        // the default values for the data query json
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the matched object in order
            // to create their internal structure
            matchedObject.each(function(index, element) {
                        // retrieves the current drop tag element and uses
                        // its title attribute to create the strcture
                        var _element = jQuery(this);
                        var title = _element.attr("data-title");

                        // retrieves the items section from the current element
                        // and in case it does not exists creates an empty version
                        // of it (default behaviour)
                        var items = jQuery("> .items", _element);
                        if (items.length == 0) {
                            _element.append("<ul class=\"items\"></ul>");
                        }

                        // adds the drop tag header and tag element to the
                        // drop tag taking into account the title
                        _element.prepend("<div class=\"drop-tag-header\">"
                                + title + "</div>"
                                + "<div class=\"drop-tag-tag\">"
                                + "<span class=\"drop-tag-text\"></span>"
                                + "<span class=\"drop-tag-close\"></span>"
                                + "</div>");
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the reference to the top level
            // body element
            var _body = jQuery("body");

            // retrieves the various dro tag components to be able to
            // register for actions on them
            var dropTagHeader = jQuery(".drop-tag-header", matchedObject);
            var dropTagClose = jQuery(".drop-tag-close", matchedObject);
            var items = jQuery(".items", matchedObject);
            var listItems = jQuery(".items > li", matchedObject);

            // registers for the click event on the drop tag header
            // to be able to toggle the state of the imtes
            dropTagHeader.click(function(event) {
                        // retrieves the current element and uses it to
                        // gather the associated drop tag
                        var element = jQuery(this);
                        var dropTag = element.parents(".drop-tag");

                        // retrieves the parent tags (container) element
                        // and the drop tags (and items) under it
                        var tags = dropTag.parent(".tags");
                        var dropTags = jQuery(".drop-tag", tags);
                        var dropTagsItems = jQuery("> .items", dropTags);

                        // retrieves the various item associated with the
                        // current drop tag
                        var items = jQuery("> .items", dropTag);

                        // checks if the drop tag is curently in the disable
                        // state in such case returns immediately nothing to
                        // be done on a disabled drop tag
                        var isDisabled = dropTag.hasClass("disabled");
                        if (isDisabled) {
                            return;
                        }

                        // checks if the drop tag is curently in the open
                        // state in order to change it
                        var isOpen = dropTag.hasClass("open");

                        // hides the complete set of drop tag items under
                        // the tags container and removes the open class
                        // from them (click on one hides the others)
                        dropTagsItems.hide();
                        dropTags.removeClass("open");

                        // in case the current drop tag is open must hide
                        // it and remove the open class
                        if (isOpen) {
                            items.hide();
                            dropTag.removeClass("open");
                        }
                        // otherwise must do exactly the opposite
                        else {
                            items.show();
                            dropTag.addClass("open");
                        }

                        // stops the event propagation and prevents
                        // the default operations
                        event.stopPropagation();
                        event.stopImmediatePropagation();
                        event.preventDefault();
                    });

            // registers for the click event on the drop tag
            // close element to revert the drop tag mode to
            // the normal drop mode
            dropTagClose.click(function() {
                        // retrieves the current element, the associated
                        // parent drop tag and the list items
                        var element = jQuery(this);
                        var dropTag = element.parents(".drop-tag");
                        var listItems = jQuery(".items > li.selected", dropTag);

                        // removes the selected class from the "selected" list
                        // item elements (unselects them)
                        listItems.removeClass("selected");

                        // removes the tag mode class from the drop tag
                        // (reverts the state to drop mode)
                        dropTag.removeClass("tag-mode");

                        // triggers the item unselected event the event is triggered without
                        // any arguments
                        dropTag.triggerHandler("item_unselected", [])
                    });

            // registers for the click event on the various list items
            // to select them (go into tag mode)
            listItems.click(function() {
                        // retieves the current element, the drop tag associated with
                        // it and the drop tag text
                        var element = jQuery(this);
                        var dropTag = element.parents(".drop-tag");
                        var dropTagText = jQuery(".drop-tag-text", dropTag);

                        // retrieves the element value as the name and update
                        // the drop tag text with that name
                        var name = element.html();
                        dropTagText.html(name);

                        // adds the selected class to the element, to mark
                        // it as the selected element (selects them)
                        element.addClass("selected");

                        // changes the current drop tag mode to tag mode
                        dropTag.addClass("tag-mode");

                        // triggers the item selected event using the element
                        // as the argument for the event handler
                        dropTag.triggerHandler("item_selected", [element])
                    });

            // registers for the click event on the body element
            // to be able to revert the drop mode to closed
            _body.click(function() {
                        // removes the open class from the matched object and
                        // hides the various items
                        matchedObject.removeClass("open");
                        items.hide();
                    });
        };

        var update = function() {
            // retrieves the various list items for the currently
            // selected object (matched object)
            var listItems = jQuery(".items > li", matchedObject);

            // registers for the click event on the various list items
            // to select them (go into tag mode)
            listItems.click(function() {
                        // retieves the current element, the drop tag associated with
                        // it and the drop tag text
                        var element = jQuery(this);
                        var dropTag = element.parents(".drop-tag");
                        var dropTagText = jQuery(".drop-tag-text", dropTag);

                        // retrieves the element value as the name and update
                        // the drop tag text with that name
                        var name = element.html();
                        dropTagText.html(name);

                        // adds the selected class to the element, to mark
                        // it as the selected element (selects them)
                        element.addClass("selected");

                        // changes the current drop tag mode to tag mode
                        dropTag.addClass("tag-mode");

                        // triggers the item selected event using the element
                        // as the argument for the event handler
                        dropTag.triggerHandler("item_selected", [element])
                    });
        };

        var release = function() {
            var dropTag = matchedObject();

            // removes the tag mode class from the drop tag
            // (reverts the state to drop mode)
            dropTag.removeClass("tag-mode");
        };

        // switches over the method
        switch (method) {
            case "update" :
                // updates the component internal structures
                // to reflect the layout changes
                update();

                // breaks the switch
                break;

            case "release" :
                // updates the component internal structures
                // to reflect the layout changes
                release();

                // breaks the switch
                break;

            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxfiledrop = function(options) {
        // the default values for the plugin
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // registers the matched object for the drag enter event
            matchedObject.bind("dragenter", function(event) {
                        // stops the event propagation and prevents
                        // the default event operation
                        event.stopPropagation();
                        event.preventDefault();

                        // triggers the file enter event
                        matchedObject.triggerHandler("file_enter", [])
                    });

            // registers the matched object for the drag leave event
            matchedObject.bind("dragleave", function(event) {
                        // stops the event propagation and prevents
                        // the default event operation
                        event.stopPropagation();
                        event.preventDefault();

                        // triggers the file leave event
                        matchedObject.triggerHandler("file_leave", [])
                    });

            // registers the matched object for the drag over event
            matchedObject.bind("dragover", function(event) {
                        // stops the event propagation and prevents
                        // the default event operation
                        event.stopPropagation();
                        event.preventDefault();
                    });

            // registers the matched object for the drop event
            matchedObject.bind("drop", function(event) {
                        // stops the event propagation and prevents
                        // the default event operation
                        event.stopPropagation();
                        event.preventDefault();

                        // retrieves the data tranfer and the files
                        // rom the original event
                        var dataTransfer = event.originalEvent.dataTransfer;
                        var files = dataTransfer.files;

                        // triggers the file drop event
                        matchedObject.triggerHandler("file_drop", [files])
                    });
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery filter plugin, this jQuery plugin provides the base infra-structure
 * for the creation of a filter component.
 *
 * @name jquery-filter.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxfilter = function(options) {
        // the default values for the filter
        var defaults = {
            numberRecords : 9
        };

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // retrieves the base options
            var numberRecords = options["numberRecords"];

            // retrieves the filter input
            var filterInput = jQuery(".filter-input", matchedObject);

            // disables the auto complete in the filter input element
            filterInput.attr("autocomplete", "off");

            // sets the matched object base data
            matchedObject.data("filter_string", "");
            matchedObject.data("start_record", 0);
            matchedObject.data("selection", [0]);
            matchedObject.data("pivot", 0);
            matchedObject.data("number_records", numberRecords);
            matchedObject.data("complete", false);
            matchedObject.data("pending", false);

            // iterates over all the matched objects
            matchedObject.each(function(index, element) {
                // retrieves the element reference
                var _element = jQuery(element);

                // retrieves the value for the advanced attribute of the filter
                // (in case it's set the advanced panel should be displayed)
                var advanced = _element.attr("data-advanced");

                // retrieves the value of the no unput value that controls if
                // an input should be created if none is found
                var noInput = _element.attr("data-no_input");

                // retrieves the filter contents and
                // the filter more (if present)
                var filterContents = jQuery("> .filter-contents", _element);
                var filterMore = jQuery("> .filter-more", _element);

                // retrieves the text field (element) assicated with the
                // curernt filter for the main filtering
                var textField = jQuery("> .text-field", _element);

                // in case there is no text field defined for the
                // current element one must be created, only in case
                // the no input flag is not set
                if (textField.length == 0 && !noInput) {
                    // retrieves the various attributes from the element
                    // to be propagated to the text field
                    var name = _element.attr("name");
                    var value = _element.attr("value");
                    var originalValue = _element.attr("data-original_value");
                    var error = _element.attr("data-error");

                    // creates the text field element and sets the various
                    // attributes in it
                    var textField = jQuery("<input type=\"text\" class=\"text-field filter-input\" />");
                    textField.attr("name", name);
                    textField.attr("value", value);
                    textField.attr("data-original_value", originalValue);
                    textField.attr("data-error", error);

                    // preppends the text field to the element and runs
                    // the text field initializer
                    _element.prepend(textField);
                    textField.uxtextfield();
                }

                // creates the element representing the buttons for the filter
                // fild (the more oprtions and the view changer) and adds it
                // to the filter in case the advanced flag is set
                var filterButtons = jQuery("<div class=\"filter-input-buttons\">"
                        + "<div class=\"button filter-input-button filter-input-toggle-advanced filter-input-more\"></div>"
                        + "<div class=\"button filter-input-button filter-input-toggle-views\"></div>"
                        + "<div class=\"clear\"></div>" + "</div>");
                advanced && filterButtons.insertAfter(textField);

                // creates the advanced part of the filter (more options) and adds
                // it to the filter in case the advanced flag is set
                var filterAdvanced = jQuery("<div class=\"filter-advanced\">"
                        + "<div class=\"filter-input-add filter-input-first\"></div>"
                        + "<div class=\"filter-sort\">"
                        + "<div class=\"filter-clear\"></div>"
                        + "</div>"
                        + "<div class=\"filter-advanced-filters\"></div>"
                        + "<div class=\"filter-advanced-buttons\">"
                        + "<div class=\"button small button-grey filter-advanced-select\">Select All</div>"
                        + "<div class=\"button small button-grey disabled filter-advanced-save\">Save</div>"
                        + "<div class=\"filter-clear\"></div>" + "</div>"
                        + "</div>");
                advanced && filterAdvanced.insertAfter(filterButtons);

                // checks for the presence of the proper list class from
                // the element
                var isList = _element.hasClass("list-list");
                var isTable = _element.hasClass("table-list");
                var isGallery = _element.hasClass("gallery-list");

                // retrieves the element button that was just created to
                // add the apropriate class
                var toggleViews = jQuery(".filter-input-toggle-views", _element);

                // adds the appropriate filter input class to the toggle
                // views button accorging to the current mode
                isList && toggleViews.addClass("filter-input-list");
                isTable && toggleViews.addClass("filter-input-table");
                isGallery && toggleViews.addClass("filter-input-gallery");

                // retrieves the data source associated with the element
                // and then uses it to retrieve the various order items
                var dataSource = jQuery("> .data-source", _element);
                var dataOrder = jQuery(".order > li", dataSource);

                // retrieves the sort section of the filter to be used
                // to add more filter sort options and retrieves the
                // associated clear element to be as anchor point
                var filterSort = jQuery(".filter-sort", _element);
                var filterClear = jQuery("> .filter-clear", filterSort);

                // retrieves the filtering section of the filter and then
                // retrieves its items to check for valid filtering
                var filterFiltering = jQuery(".filtering > li", dataSource);

                // iterates over each of the data source order elements
                // to create the associated (visual) sort options
                dataOrder.each(function(index, element) {
                    // retrieves the current element in
                    // iteration to be added
                    var _element = jQuery(this);

                    // retrieves the html (text) value of the current element
                    // in iteration and uses it to create the filter sort option
                    // element and then adds it to the filter sort (from clear)
                    var valueHtml = _element.html();
                    var valueName = _element.attr("data-name");
                    var valueOrder = _element.attr("data-order")
                            || "descending";
                    var filterOption = jQuery("<div class=\"filter-sort-option\">"
                            + valueHtml + "</div>");
                    filterOption.attr("data-name", valueName);
                    filterOption.attr("data-order", valueOrder);
                    filterOption.insertBefore(filterClear);
                });

                // adds the devault sort option to the filter, this value exists for
                // every search and indicates that no sort will occur (default is used)
                filterSort.prepend("<div class=\"filter-sort-option selected equals\" data-order=\"equals\">default</div>");

                // checks if the filtering is enabled and valid for the
                // current context of execution
                var hasFiltering = filterFiltering.length > 0 ? true : false;

                // in case the advanced mode is active adds the initial filter
                // line to the filters area, but only in case there are valid
                // filters and so the filtering is enabled
                advanced && hasFiltering && _addFilter(_element);

                // in case there is currenlty no valid filtering in the data
                // source must disabled the filtering part in the advanced area
                !hasFiltering && _disableFiltering();

                // retrieves the text value from the filter more
                // and then encapsulates it arround the text divisor
                // then adds it in conjuction to the spinner to the
                // filter more component, as the new filter more contents
                var filterMoreText = filterMore.html();
                filterMore.html("<div class=\"text\">" + filterMoreText
                        + "</div>" + "<div class=\"spinner\"></div>");

                // retrieves the filter more length
                var filterMoreLength = filterMore.length;

                // adds the "extra" html to the matched object,
                // in case no filter contents is found
                if (filterContents.length == 0) {
                    // creates the filter contents element and adds it to the
                    // filter according to the filter more status
                    var filterContents = jQuery("<div class=\"filter-contents\"></div>");
                    var filterClear = jQuery("<div class=\"filter-clear\"></div>");
                    filterMoreLength > 0
                            ? filterContents.insertBefore(filterMore)
                                    && filterClear.insertBefore(filterMore)
                            : _element.append(filterContents);
                }

                // sets the various initial data objects in the
                // currently selected filter element
                _element.data("cache", {});

                // updates the element (matched object) state
                // for the initial contents
                _update(_element, options);
            });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the window element reference
            var _window = jQuery(window);

            // retrieves the document element reference
            var _document = jQuery(document);

            // retrieves the body element reference
            var _body = jQuery("body");

            // retrieves the filter input
            var filterInput = jQuery("> .filter-input", matchedObject);

            // retrieves the filter more
            var filterMore = jQuery("> .filter-more", matchedObject);

            // retrieves the text field
            var textField = jQuery("> .text-field", matchedObject);

            // retrieves the references to the various sort
            // buttons to be used in the advanced panel
            var filterOptions = jQuery(".filter-sort-option", matchedObject);

            // retrieves both the toggle advanced and the
            // toggle views buttons
            var toggleAdvanced = jQuery(".filter-input-toggle-advanced",
                    matchedObject);
            var toggleViews = jQuery(".filter-input-toggle-views",
                    matchedObject);

            // retrieves the filter add button to be used to add
            // a new line of filtering to the filter advanced panel
            var filterAdd = jQuery(".filter-advanced > .filter-input-add",
                    matchedObject);

            // retrieves the filter select (all) button used
            // to select the complete set of items in the filter
            var filterSelect = jQuery(".filter-advanced-select", matchedObject);

            // checks if the filter click event is already
            // registerd in the body and set the variable as
            // true to avoid further registrations
            var isRegistered = _body.data("filter_click");
            matchedObject.length > 0 && _body.data("filter_click", true);

            // tries to retrieve the value for the infinite loading
            // support in the matched object (by default it's disabled)
            var infinite = matchedObject.attr("data-infinite") || false;

            // registers for the focus event on the text field
            // to change the visibility of the filter buttons
            textField.focus(function() {
                        // retrieves the current element and uses it to retrieve
                        // the parent filter element
                        var element = jQuery(this);
                        var filter = element.parent(".filter");

                        // retrieves the filter buttons part of the filter
                        // and adds the lower class to them
                        var filterButtons = jQuery(".filter-input-buttons",
                                filter);
                        filterButtons.addClass("lower");
                    });

            // registers for the blur event on the text field
            // to change the visibility of the filter buttons
            textField.blur(function() {
                        // retrieves the current element and uses it to retrieve
                        // the parent filter element
                        var element = jQuery(this);
                        var filter = element.parent(".filter");

                        // retrieves the filter buttons part of the filter
                        // and removes the lower class from them
                        var filterButtons = jQuery(".filter-input-buttons",
                                filter);
                        filterButtons.removeClass("lower");
                    });

            // registers for the key down event in the text field
            textField.keydown(function(event) {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the event key code
                        var eventKeyCode = event.keyCode
                                ? event.keyCode
                                : event.which;

                        // switches over the event key code
                        switch (eventKeyCode) {
                            // in case it's the page up, the
                            // page down, the up or the
                            // down keys
                            case 33 :
                            case 34 :
                            case 38 :
                            case 40 :
                                // stops the event propagation
                                // (avoids extra problems in form)
                                event.stopPropagation();
                                event.preventDefault();

                                // breaks the switch
                                break;
                        }
                    });

            // registers for the key up event in the text field
            textField.keyup(function(event) {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the filter
                        var filter = element.parents(".filter");

                        // retrieves the event key code
                        var eventKeyCode = event.keyCode
                                ? event.keyCode
                                : event.which;

                        // switches over the event key code
                        switch (eventKeyCode) {
                            // in case it's the enter key
                            case 13 :
                                // retrieves the selected list item
                                var listItemSelected = jQuery(
                                        ".filter-contents > .selected", filter);

                                // updates the current selection, runs the
                                // appropriate (default) actions
                                _select(listItemSelected, filter, options);

                                // breaks the switch
                                break;

                            // in case it's the page up key
                            case 33 :
                                // in case the shift key is pressed range mode
                                // must be "activated"
                                if (event.shiftKey) {
                                    // "ups" the "current" range (selection)
                                    _upRange(filter, options);
                                }
                                // otherwise the "normal" up operation
                                // must be used
                                else {
                                    // sets the "current" selection to the up
                                    _upSelection(filter, options);
                                }

                                break;

                            // in case it's the page down key
                            case 34 :
                                // in case the shift key is pressed range mode
                                // must be "activated"
                                if (event.shiftKey) {
                                    // "downs" the "current" range (selection)
                                    _downRange(filter, options);
                                }
                                // otherwise the "normal" up operation
                                // must be used
                                else {
                                    // sets the "current" selection to the bottom
                                    _downSelection(filter, options);
                                }

                                break;

                            // in case it's the up key
                            case 38 :
                                // in case the shift key is pressed range mode
                                // must be "activated"
                                if (event.shiftKey) {
                                    // increments the "current" range (selection)
                                    _incrementRange(filter, options);
                                }
                                // otherwise the "normal" incrementing operation
                                // must be used
                                else {
                                    // increments the "current" selection
                                    _incrementSelection(filter, options);
                                }

                                // stops event propagation (avoids cursor
                                // movement in the text field)
                                event.stopPropagation();

                                // breaks the switch
                                break;

                            // in case it's the down key
                            case 40 :
                                // in case the shift key is pressed range mode
                                // must be "activated"
                                if (event.shiftKey) {
                                    // decrements the "current" range (selection)
                                    _decrementRange(filter, options);
                                }
                                // otherwise the "normal" decrementing operation
                                // must be used
                                else {
                                    // decrements the "current" selection
                                    _decrementSelection(filter, options);
                                }

                                // stops event propagation (avoids cursor
                                // movement in the text field)
                                event.stopPropagation();

                                // breaks the switch
                                break;
                        }
                    });

            // registers for the click event on the filter option
            // buttons to toggle their state
            filterOptions.click(function() {
                        // retrieves the current element and the associated
                        // filter element
                        var element = jQuery(this);
                        var filter = element.parents(".filter");

                        // retrieves the currently selected sort option
                        // to check if it's the sames as the one that
                        // has just been clicked
                        var selectedOption = jQuery(
                                ".filter-sort-option.selected", filter);
                        var isSame = element[0] == selectedOption[0];

                        // retrieves the value for the order attribute of
                        // the element to be used in case new element is selected
                        var order = element.attr("data-order");

                        // checks if the currently selected option is of
                        // type equals in such case returns immediately, nothing
                        // is meant to be done (no change)
                        var isEquals = element.hasClass("equals");
                        if (isEquals) {
                            return;
                        }

                        // in case the clicked option is the same the sorting
                        // order must be changed
                        if (isSame) {
                            // checks if the current sort order is descending and
                            // changes the sort order accordingly
                            var isDescending = selectedOption.hasClass("descending");
                            isDescending
                                    ? selectedOption.removeClass("descending")
                                    : selectedOption.removeClass("ascending");
                            isDescending
                                    ? selectedOption.addClass("ascending")
                                    : selectedOption.addClass("descending");
                        }
                        // otherwise the the element is not the same and the
                        // previous element must be unselected and the new one
                        // selected in descending order
                        else {
                            // removes the selected classes from the selected
                            // option, to unselect the selected option
                            selectedOption.removeClass("selected");
                            selectedOption.removeClass("ascending");
                            selectedOption.removeClass("descending");
                            selectedOption.removeClass("equals");

                            // selects the clicked element by adding the selected
                            // class and the descending class (sort order)
                            element.addClass("selected");
                            element.addClass(order);
                        }

                        // updates the filter state to reflect the changed
                        // in the order for the filter
                        _update(filter, options, true);
                    });

            // registers for the click event in the toggle advanced
            // button to change the state of the advanced panel
            toggleAdvanced.click(function() {
                        // retrieves the current element and the associated
                        // filter element
                        var element = jQuery(this);
                        var filter = element.parents(".filter");

                        // retrieves the advanced panel for the filter component
                        // in order to toggle its visibility
                        var filterAdvanced = jQuery(".filter-advanced", filter);

                        // checks if the advanced button is currently in the
                        // "more" state to toggle the visility of the advanced
                        // panel according to the state
                        var isMore = element.hasClass("filter-input-more");

                        // in case the button is currently in the more state
                        // the advanced panel must be shown
                        if (isMore) {
                            // changes the current filter input states
                            // and shows the filter advanced panel
                            element.removeClass("filter-input-more");
                            element.addClass("filter-input-less");
                            filterAdvanced.show();
                        } else {
                            // changes the current filter input states
                            // and hides the filter advanced panel
                            element.removeClass("filter-input-less");
                            element.addClass("filter-input-more");
                            filterAdvanced.hide();
                        }
                    });

            // registers for the click event in the toggle views
            // button to change the current view visibility
            toggleViews.click(function() {
                        // retrieves the current element and the associated
                        // filter element
                        var element = jQuery(this);
                        var filter = element.parents(".filter");

                        // checks the type of filter currently displayed
                        // in the target filter associated with the toggle button
                        var isList = element.hasClass("filter-input-list");
                        var isTable = element.hasClass("filter-input-table");

                        // checks the type of views possible to be displayed
                        // for the current filter component
                        var hasListView = jQuery(".list-view", filter).length;
                        var hasTableView = jQuery(".table-view", filter).length;
                        var hasGalleryView = jQuery(".gallery-view", filter).length;

                        // in case the current state is list
                        if (isList) {
                            // in case there is no table and gallery views
                            // it's not possible to move "forward", returns
                            // immediately from the function
                            if (!hasTableView && !hasGalleryView) {
                                return;
                            }

                            // removes the list associated classes from both
                            // the element and filter
                            element.removeClass("filter-input-list");
                            filter.removeClass("list-list");

                            // adds the appropriate classes based on the
                            // existence of the table view
                            hasTableView
                                    ? element.addClass("filter-input-table")
                                    : element.addClass("filter-input-gallery");
                            hasTableView
                                    ? filter.addClass("table-list")
                                    : filter.addClass("gallery-list");
                        } else if (isTable) {
                            // in case there is no gallery and list views
                            // it's not possible to move "forward", returns
                            // immediately from the function
                            if (!hasGalleryView && !hasListView) {
                                return;
                            }

                            // removes the table associated classes from both
                            // the element and filter
                            element.removeClass("filter-input-table");
                            filter.removeClass("table-list");

                            // adds the appropriate classes based on the
                            // existence of the gallery view
                            hasGalleryView
                                    ? element.addClass("filter-input-gallery")
                                    : element.addClass("filter-input-list");
                            hasGalleryView
                                    ? filter.addClass("gallery-list")
                                    : filter.addClass("list-list");
                        } else {
                            // in case there is no list and table views
                            // it's not possible to move "forward", returns
                            // immediately from the function
                            if (!hasListView && !hasTableView) {
                                return;
                            }

                            // removes the gallery associated classes from both
                            // the element and filter
                            element.removeClass("filter-input-gallery");
                            filter.removeClass("gallery-list");

                            // adds the appropriate classes based on the
                            // existence of the list view
                            hasListView
                                    ? element.addClass("filter-input-list")
                                    : element.addClass("filter-input-table");
                            hasListView
                                    ? filter.addClass("list-list")
                                    : filter.addClass("table-list");
                        }
                    });

            // registers for the click event on the filter add button
            // to add a new filtering line to the filter
            filterAdd.click(function() {
                        // retrieves the current element and the associated
                        // filter element
                        var element = jQuery(this);
                        var filter = element.parents(".filter");

                        // adds a "new" filter line to the current filter
                        // element (component) and updates the filter
                        _addFilter(filter);
                        _update(filter, options, true);
                    });

            // registers for the click event on the filter select
            // to select all the filter element currently shown
            filterSelect.click(function() {
                        // retrieves the current element and the associated
                        // filter element
                        var element = jQuery(this);
                        var filter = element.parents(".filter");

                        // retrieves the currently (visible) filer elements
                        // to count them for the selection range
                        var filterElements = jQuery(".filter-element", filter);
                        var numberElements = filterElements.length;

                        // creates the list for the elements to be selected
                        // to be part of the selection
                        var selection = []

                        // iterates over the number of elements to insert the
                        // index into the selection list
                        for (var index = 1; index < numberElements + 1; index++) {
                            selection.push(index);
                        }

                        // resets the current selection to be the
                        // currently selected element
                        filter.data("selection", selection);
                        filter.data("pivot", 1);

                        // updates the current selection
                        _updateSelection(filter, options);
                    });

            // registers for the key up in the filter input
            filterInput.keyup(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the (parent) filter
                        var filter = element.parents(".filter");

                        // retrieves the filter string and the filter
                        // input value (to check for string value changes)
                        var filterString = filter.data("filter_string");
                        var filterInputValue = filterInput.attr("data-value");

                        // in case no string value changes occured
                        if (filterString == filterInputValue) {
                            // returns immediately
                            return;
                        }

                        // updates the filter state
                        _update(filter, options);
                    });

            // registers for the click in the filter input
            filterMore.click(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the (parent) filter
                        var filter = element.parents(".filter");

                        // updates the filter state
                        _update(filter, options);
                    });

            // registers for the key down in the document
            // element in case the matched object is valid
            matchedObject.length > 0 && _document.keydown(function(event) {
                        // sets the filter as the matched object
                        var filter = matchedObject;

                        // retrieves the key value
                        var keyValue = event.keyCode
                                ? event.keyCode
                                : event.charCode ? event.charCode : event.which;

                        // switches over the key value
                        switch (keyValue) {
                            // in case it's the enter key
                            case 13 :
                                // retrieves the selected list item
                                var listItemSelected = jQuery(
                                        ".filter-contents > .selected", filter);

                                // updates the current selection, runs the
                                // appropriate (default) actions
                                _select(listItemSelected, filter, options);

                                // breaks the switch
                                break;

                            // in case it's the j key
                            case 74 :
                                // in case the shift key is pressed range mode
                                // must be "activated"
                                if (event.shiftKey) {
                                    // decrements the "current" range (selection)
                                    _decrementRange(filter, options);
                                }
                                // otherwise the "normal" decrementing operation
                                // must be used
                                else {
                                    // decrements the "current" selection
                                    _decrementSelection(filter, options);
                                }

                                // breaks the switch
                                break;

                            // in case it's the k key
                            case 75 :
                                // in case the shift key is pressed range mode
                                // must be "activated"
                                if (event.shiftKey) {
                                    // increments the "current" range (selection)
                                    _incrementRange(filter, options);
                                }
                                // otherwise the "normal" incrementing operation
                                // must be used
                                else {
                                    // increments the "current" selection
                                    _incrementSelection(filter, options);
                                }

                                // breaks the switch
                                break;

                            // in case it's default
                            default :
                                // breaks the switch
                                break;
                        }
                    });

            // registers for the click event in order
            // to avoid problems with deselection
            matchedObject.length > 0 && matchedObject.click(function(event) {
                        // sets the avoid next flag to avoid deselection
                        matchedObject.data("avoid_next", true);
                    });

            // registers for the click event in the body element
            // to deselect the element only in case no previous
            // registration was made (avoids duplicates)
            matchedObject.length > 0 && !isRegistered
                    && _body.click(function(event) {
                                // retrieves the value of the avoid next flag and
                                // then unsets the avoid next flag
                                var avoidNext = matchedObject.data("avoid_next");
                                matchedObject.data("avoid_next", false);

                                // in case the avoid next flag is set
                                if (avoidNext) {
                                    // returns immediately
                                    return;
                                }

                                // resets both the selection and the pivot values
                                matchedObject.data("selection", [0]);
                                matchedObject.data("pivot", 0);

                                // updates the current selection
                                _updateSelection(matchedObject, options);
                            });

            // registers for the scroll event in the window in case
            // the infinite scroll support is enabled
            matchedObject.length > 0 && infinite && _window.scroll(function() {
                        // sets the filter as the matched object, this
                        // considered to be a global singleton handler
                        var filter = matchedObject;

                        // retrieves the top offset of the page, using
                        // the margin element (from the margin top)
                        var margin = jQuery(".margin");
                        var marginOffset = margin.offset();
                        var pageOffset = marginOffset ? marginOffset.top : 0;

                        // retrieves the filter more element height as the
                        // delta value for the visibility testing this way
                        // the visibility test is done agains the top
                        var delta = filterMore.outerHeight() * -1;

                        // checks if the element is visible
                        var isVisible = filterMore.length ? jQuery.uxvisible(
                                filterMore, pageOffset, delta) : false;

                        // updates the filter state
                        isVisible && _update(filter, options);
                    });
        };

        var _update = function(matchedObject, options, force) {
            // retrieves the (parent) filter and the
            // associated template
            var filter = matchedObject;
            var filterInput = jQuery(".filter-input", filter);
            var filterContents = jQuery(".filter-contents", filter);
            var filterNoResults = jQuery(".filter-no-results", filter);
            var filterMore = jQuery(".filter-more", filter);
            var dataSource = jQuery("> .data-source", filter);
            var template = jQuery(".template", filter);

            // retrieves the filter options
            var filterString = filter.data("filter_string");
            var startRecord = filter.data("start_record");
            var numberRecords = filter.data("number_records");
            var complete = filter.data("complete");
            var pending = filter.data("pending");

            // "forces" the number of records to the table list
            numberRecords = filter.hasClass("table-list") ? 14 : numberRecords;

            // retrieves the filter input value, defaulting to empty
            // string in case no valid value is retrieved
            var filterInputValue = filterInput.attr("data-value") || "";

            // sets the initial vaalue for the reset flag
            var reset = false;

            // in case the value in the filter input
            // has changed (reset required)
            if (filterString != filterInputValue || force) {
                // resets the (current) selection value
                filter.data("selection", [0]);
                filter.data("pivot", 0);

                // resets the start record, including
                // the current "local" value
                filter.data("start_record", 0);
                startRecord = 0;

                // sets the reset flag
                reset = true;
            }
            // in case other reason triggers the update (additional
            // care must be taken)
            else {
                // in case the filter is already complete or
                // it has data pending to be retrieved
                if (complete || pending) {
                    // returns immeidately (can not retrieve
                    // any more data for now)
                    return;
                }
            }

            // retrieves the selected sort options and then uses it
            // to retrieve the value to be used for the sorting
            var sortSelected = jQuery(".filter-sort-option.selected", filter);
            var sortValue = sortSelected.attr("data-name")
                    || sortSelected.html();

            // checks if the sort option is currently in the ascending mode
            // and "calculates" the sort order string based on it, then created
            // the sorting list (tuple) to be used in the query
            var isAscending = sortSelected.hasClass("ascending");
            var sortOrder = isAscending ? "ascending" : "descending";
            var sort = sortValue ? [sortValue, sortOrder] : null;

            // retrieves the complete set of (graphical) filter lines to be
            // parser in search for the valid filters
            var filters = jQuery(".filter-advanced-filter", filter);

            // creates the list that will hold the various filter tuples
            // resulting from the gathering of all the valid filters in
            // the current filter
            var _filters = [];

            // iterates over all the filters (lines) in order to create the
            // various filter tuples
            filters.each(function() {
                        // retrieves the current element in iteration
                        var element = jQuery(this);

                        // retrieves the various components of the filter line
                        // (drop field, operation field and value field)
                        var dropField = jQuery(
                                "> .drop-field:not(.operation-field)", element);
                        var operationField = jQuery("> .operation-field",
                                element);
                        var valueField = jQuery("> .value-field", element);

                        // retrieves the data source of the operation field to be
                        // used for the retrieval of the items and operations lists
                        var operationSource = jQuery("> .data-source",
                                operationField);

                        // checks if the current value field is of type drop field
                        // and retrieves the value accordingly
                        var isDropField = valueField.hasClass("drop-field");
                        if (isDropField) {
                            // retrieves the hidden field associated with the value
                            // field and uses its value as the value
                            var hiddenField = jQuery(".hidden-field",
                                    valueField);
                            var value = hiddenField.val();
                        } else {
                            // retrieves the value of the value field using the text
                            // field based approach
                            var value = valueField.uxtextfield("value");
                        }

                        // in case no value is present this filter is ignored
                        // not possible to filter value
                        if (!value) {
                            return;
                        }

                        // retrieves the attribute for the filter line and the currently
                        // selected operation value
                        var attribute = element.data("name")
                                || dropField.uxdropfield("value");
                        var operation = operationField.uxdropfield("value");

                        // retrieves the lists for the items and for the operations
                        var items = operationSource.data("items");
                        var operations = operationSource.data("operations");

                        // retrieves the operation (logical) associated with the current
                        // (graphical) operation value
                        var itemIndex = items.indexOf(operation);
                        var _operation = operations[itemIndex];

                        // creates the filter tuple containing the atrtibutem, the operation
                        // and the value and then adds the filter tuple to the filters list
                        var filter = [attribute, _operation, value];
                        _filters.push(filter);
                    });

            // sets the (query) pending flag in the filter
            filter.data("pending", true);

            // adds the loading class so thath the loading information
            // is presented to the user
            filterMore.addClass("loading");

            // runs the query in the data source
            dataSource.uxdataquery({
                        filterString : filterInputValue,
                        sort : sort,
                        filters : _filters,
                        startRecord : startRecord,
                        numberRecords : numberRecords
                    }, function(validItems, moreItems) {
                        // removes the loading class from the filter more
                        // button so that the loading information is hidden
                        filterMore.removeClass("loading");

                        // in case the valid items value
                        // is not valid (error occurred)
                        if (!validItems) {
                            // unsets the (query) pending flag in the filter
                            filter.data("pending", false);

                            // returns immediately
                            return;
                        }

                        // in case the reset flag is set
                        if (reset) {
                            // retrieves the current filter elements to remove
                            // them (refresh of the list)
                            var filterElements = jQuery(".filter-element",
                                    filter);
                            filterElements.remove();
                        }

                        // retrieves the cache map to be used to determine if the
                        // various elements should be contructed from scratch or
                        // if an already existing element should be used instead
                        var cache = filter.data("cache");

                        // retrieves the valid items reference
                        var _validItems = jQuery(validItems);

                        // retrieves the valid items length
                        var validItemsLength = validItems.length;

                        // iterates over all the valid items to create
                        // proper elements
                        _validItems.each(function(index, element) {
                            // creates the map with the options for the
                            // rendering of the template to changed the
                            // default value to be used
                            var options = {
                                apply : true,
                                nullify : true,
                                defaultValue : "-"
                            };

                            // tries to retrieve the object identifier from the
                            // current item to be used as identifier of the element
                            var objectId = element["object_id"]
                                    || element["oid"];

                            // tries to retrieve the unique identifier from the
                            // current item to be used as the cache key
                            var uniqueId = element["unique_id"]
                                    || element["uid"];

                            // retrieves the cache map from the filter and
                            // tries to find the cache item for the unique identifier
                            // validates it so that the data contained in it matches
                            // the one cached in such case sets the template item as
                            // the cached item (cache match usage)
                            var cacheItem = cache[uniqueId];
                            var cachedData = cacheItem ? cacheItem.data : null;
                            var cacheValid = cachedData ? jQuery.uxequals(
                                    cachedData, element) : false;
                            if (cacheItem && cacheValid) {
                                // sets the item contained in the cache item as
                                // the current cache item (layout item reference)
                                cacheItem = cacheItem.item;

                                // sets the template item as the curreently cached
                                // item so that no construction occurs then removes
                                // the selection classes from it (avoiding possible
                                // layout problems)
                                var templateItem = cacheItem;
                                templateItem.removeClass("selected");
                                templateItem.removeClass("first");
                                templateItem.removeClass("last");
                            }
                            // otherwise must re-create the template item by runing
                            // the template engine again
                            else {
                                // applies the template to the template (item)
                                // retrieving the resulting template item and
                                // setting it the cache map for the unique id
                                // only in case the unique id is valid (set)
                                var templateItem = template.uxtemplate(element,
                                        options);
                                if (uniqueId) {
                                    cache[uniqueId] = {
                                        item : templateItem,
                                        data : element
                                    }
                                }
                            }

                            // sets the object identifier information in the template
                            // item (considered the main identifier for it)
                            templateItem.data("object_id", objectId);

                            // removes the filter element class from the template item,
                            // then adds it to the filter contents
                            templateItem.addClass("filter-element");
                            filterContents.append(templateItem);

                            // registers the template item for the click event
                            // to select the template item in case a click happens
                            templateItem.click(function(event) {
                                // retrieves the template item index
                                var templateItemIndex = templateItem.index();

                                // in case the control key is set must add new
                                // selection to the selection set
                                if (event.ctrlKey) {
                                    // retrieves the current selection for reference
                                    var selection = filter.data("selection");

                                    // checks if the current selection is the initial
                                    // empty selection, in case it's "pops" it from the
                                    // current selection set (avoids problems in selection)
                                    var isInitial = selection.length == 1
                                            && selection[0] == 0;
                                    isInitial && selection.pop();

                                    // in case the current selection is empty it's time to update
                                    // the pivot value (it's the first element of the selection)
                                    selection.length == 0
                                            && filter.data("pivot",
                                                    templateItemIndex + 1);

                                    // retrieves the index of the element in the selection
                                    // index, this is going to be used to check if the element
                                    // is present in the selection set
                                    var elementIndex = selection.indexOf(templateItemIndex
                                            + 1);

                                    // in case the element index is invalid (it's not present
                                    // in the selection set) must be added to set (selection)
                                    if (elementIndex == -1) {
                                        // adds the index to the selection set (selection)
                                        selection.push(templateItemIndex + 1);
                                    }
                                    // otherwise the element is already present in the set
                                    // and must be removed from it (de-selection)
                                    else {
                                        // removes the index from the selection set (selection)
                                        selection.splice(elementIndex, 1);
                                    }
                                }
                                // otherwise in case the shift key is pressed a range selection
                                // must be processed
                                else if (event.shiftKey) {
                                    // retrieves the current index for the selection to check
                                    // it agains the pivot index value
                                    var index = templateItemIndex + 1;

                                    // actions a range selection over the current pivot
                                    // value and the currently defined index
                                    _rangeSelection(index, filter, options);
                                } else {
                                    // sets the current selection to the current
                                    // template item index and updates the pivot
                                    // value accordingly
                                    filter.data("selection", [templateItemIndex
                                                    + 1]);
                                    filter.data("pivot", templateItemIndex + 1);
                                }

                                // updates the current selection
                                _updateSelection(filter, options);
                            });

                            // binds the template item to the selected event
                            templateItem.bind("selected", function() {
                                // retrieves the template item index
                                var templateItemIndex = templateItem.index();

                                // retrieves the current selection and the index of
                                // the selected template index from the filter
                                // to be able check if the element is currently selected
                                var selection = filter.data("selection");
                                var elementIndex = selection.indexOf(templateItemIndex
                                        + 1);

                                // in case the element is currently selected
                                // nothing is to be done
                                if (elementIndex != -1) {
                                    // returns immediately, avoids selection
                                    return;
                                }

                                // resets the current selection to be the
                                // currently selected element
                                filter.data("selection",
                                        [templateItemIndex + 1]);
                                filter.data("pivot", templateItemIndex + 1);

                                // updates the current selection
                                _updateSelection(filter, options);
                            });

                            // binds the template item to the double click event
                            templateItem.dblclick(function() {
                                        // updates the current selection, runs the
                                        // appropriate (default) actions
                                        _select(templateItem, filter, options);
                                    });
                        });

                        // in case there are no items to be shown
                        if (validItemsLength > 0) {
                            // hides the filter no results panel
                            filterNoResults.hide();
                        }
                        // otherwise there are no item to be shown
                        else {
                            // shows the filter no results panel
                            filterNoResults.show();
                        }

                        // in case there are more items available
                        // to be retrieved
                        if (moreItems) {
                            // shows the filter more item
                            filterMore.show();
                        }
                        // otherwise the are no more items to be shown
                        else {
                            // hides the filter more item
                            filterMore.hide();
                        }

                        // retrieves the current list items
                        var listItems = jQuery(".filter-contents > *",
                                matchedObject);

                        // unregisters from the right click in the list
                        // items (avoids duplicates) and then registers
                        // the handler for the context menu
                        listItems.unbind("contextmenu rightclick",
                                _handleContext);
                        listItems.bind("contextmenu rightclick", _handleContext);

                        // retrieves the complete set of menus from the
                        // list items and then initializes them with the
                        // the current filter
                        var menus = jQuery(".menu", listItems);
                        menus.each(function(index, element) {
                                    // retrieves the element reference
                                    // and initializes it as a menu
                                    var _element = jQuery(element);
                                    _initMenu(_element, filter, true);
                                });

                        // registers for the show event in the various menus
                        // to update the visual in such case
                        menus.bind("show", function() {
                                    // retrieves the reference to the current element
                                    // (menu) in iteration
                                    var _element = jQuery(this);

                                    // retrieves ther complete set of buttons currently present
                                    // in the menu and removes the selected class from them
                                    // (avoiding any possible visual problems)
                                    var buttons = jQuery(
                                            ".button:not(.menu-link)", _element);
                                    buttons.removeClass("selected");
                                });

                        // triggers the update complete event
                        filter.triggerHandler("update_complete");

                        // updates the filter data
                        filter.data("filter_string", filterInputValue);
                        filter.data("start_record", startRecord + numberRecords);
                        filter.data("complete", !moreItems);
                        filter.data("pending", false);
                    });
        };

        var _handleContext = function(event) {
            // retrieves the current element
            var element = jQuery(this);

            // retrieves the reference to the window, document,
            // body and the reference to the current context menu
            var _window = jQuery(window);
            var _document = jQuery(document);
            var _body = jQuery("body")
            var contextMenus = jQuery("> .context-menu", _body);
            var menu = jQuery(".context-menu", element);
            var menuContents = jQuery(".context-menu .menu-contents", element);

            // in case there's no context menu for the
            // current element no need to continue
            if (menu.length == 0) {
                // returns immediately no context menu
                // for the current element
                return;
            }

            // retrieves the current set of visible menus and menu
            // contents to be able to control them
            var _menu = jQuery(".menu.active");
            var _menuContents = jQuery(".menu-contents:visible");

            // removes the active class from the visible menus
            // and hides the menu contents
            _menu.removeClass("active");
            _menuContents.hide();

            // clones the menu so that a new instance
            // is used for the context
            menu = menu.clone();
            menu.uxapply();

            // adds the drop menu class to indicate that this is
            // a menu of type drop (provisory)
            menu.addClass("drop-menu");

            // retrieves ther complete set of buttons currently present
            // in the menu and removes the selected class from them
            // (avoiding any possible visual problems)
            var buttons = jQuery(".button:not(.menu-link)", menu);
            buttons.removeClass("selected");

            // retrieves the menu contents reference for the menu
            // to be used for the positioning
            var menuContents = jQuery(".menu-contents:not(.sub-menu)", menu);

            // removes the currently create context menus
            // to avoid duplicates (garbage collection) then
            // appends the new context menu to the body
            contextMenus.remove();
            _body.append(menu);

            // triggers the selected event on the current element
            // so that it changes the selected value
            element.trigger("selected");

            // retrieves the correct scroll position coordinates
            // according to the current browser implementation
            var scrollY = window.scrollY
                    ? window.scrollY
                    : document.body.scrollTop;
            var scrollX = window.scrollX
                    ? window.scrollX
                    : document.body.scrollLeft;

            // updates the menu contents attributes to reflect
            // the proper attributes (position)
            menuContents.css("position", "fixed")
            menuContents.css("margin-left", 0 + "px");
            menuContents.css("margin-top", 0 + "px");
            menuContents.css("top", event.pageY - scrollY + "px");
            menuContents.css("left", event.pageX - scrollX + "px");

            // adds the active class to the menu
            menu.addClass("active");

            // shows the menu contents by fading in
            menuContents.fadeIn(150);

            // prevents the default behavior (avoids
            // possible problems)
            event.stopPropagation();
            event.preventDefault();

            // retrieves the filter associated with the currently
            // selected element
            var filter = element.parents(".filter");

            // initializes the menu structure and event handlers so that
            // the menu becoomes able to respond to the user interactions
            _initMenu(menu, filter);
        };

        var _initMenu = function(menu, filter, stay) {
            // retrieves the complete set of contents for the
            // current menu, to be used further ahead
            var menuContents = jQuery("> .menu-contents", menu);

            // retrieves ther complete set of buttons currently present
            // in the menu to register for their appropriate events and
            // remove the default buton behavior
            var buttons = jQuery(".button:not(.menu-link)", menu);

            // retrieves the target buttons and then retrieves also the non
            // target buttons (these button need to be registered for the
            // varios mouse event to control the sub menu behavior)
            var targetButtons = jQuery(".button[data-target]", menu);
            var nonTargetButtons = jQuery(
                    ":not(.sub-menu) .button:not([data-target])", menu);

            // registers for the mouse enter event so that the
            // menu may be shown
            targetButtons.mouseenter(function() {
                        // retrieves the current element and add the hover
                        // class to it
                        var element = jQuery(this);
                        element.addClass("hover");

                        // creates the timeout to handle the proper show of
                        // the sub menu (but only in case the element is still
                        // correctly slected)
                        setTimeout(function() {
                                    // in case the element is not selected anymore
                                    // need to avoid showing the sub menu
                                    if (!element.hasClass("hover")) {
                                        // returns immediately, avoiding
                                        // the show of the sub menu
                                        return;
                                    }

                                    // show the sub menu for the currently selected
                                    // button element and menu
                                    _showSubMenu(element, menu);
                                }, 500);
                    });

            // registers for the mouse leave event in the target buttons
            // to be able to remove the hover class reference
            targetButtons.mouseleave(function() {
                        // retrieves the current element and removes the
                        // hover class reference
                        var element = jQuery(this);
                        element.removeClass("hover");
                    });

            // registers for the mouse enter event in the
            // non target button to be able to hide the sub menus
            nonTargetButtons.mouseenter(function() {
                        // retrieves the reference to the current element
                        // (the hovered button)
                        var element = jQuery(this);

                        // removes the selected class from the target buttons
                        // so that no target button remains selected
                        targetButtons.removeClass("selected");

                        // creates a timeout to handle the proper hide of the
                        // visible sub menus (selected non target elements)
                        setTimeout(function() {
                                    // retrieves the complete set of visible sub menus
                                    // to be hidden in case of validation passing
                                    var subMenu = jQuery(".sub-menu:visible",
                                            menu);

                                    // checks if the current element (button)
                                    // is still in the ohover state in case it's
                                    // not returns immediately, not meat to hide
                                    // the other sub menus, otherwise hides the complete
                                    // set of sub menus
                                    var isHovered = element.is(":hover");
                                    if (!isHovered) {
                                        return;
                                    }
                                    _hideSubMenu(subMenu);
                                }, 300);
                    });

            // iterates over all the buttons to update their actions
            // and remove the current default button behavior
            buttons.each(function(index, element) {
                // retrieves the current element
                var _element = jQuery(element);

                // removes the link attribute from the element
                // to avoid the button default behavior
                _element.data("link", null);

                // retrieves the index of the element so that is
                // possible to retrieve the equivalent button in
                // the other selected elements
                var elementIndex = _element.index();

                // registers for the click event on the element so
                // that it's possible to "raise" the actions
                _element.click(function(event) {
                            // retrieves the current element
                            var element = jQuery(this);

                            // checks if the currently clicked element is
                            // of type sub element (must open sub menu)
                            var isSubElement = element.hasClass("sub-element");

                            // in case the current element is of type sub element
                            // (special case) must open the submenu
                            if (isSubElement) {
                                // shows the sub menu associated with the element
                                // for the current menu and then returns immediately
                                _showSubMenu(element, menu);
                                return;
                            }

                            // retrieves the complete set of selected list items
                            // to apply the global characteristics to them
                            var selectedListItem = jQuery(
                                    ".filter-contents > .selected", filter);

                            // retrieves the menu contents associated with the
                            // current element and then retrieves the identifier
                            // of that menu contents
                            var _menuContents = element.parents(".menu-contents");
                            var menuId = _menuContents.attr("data-menu_id");

                            // removes the active class from the menu
                            // (should disable the layout)
                            menu.removeClass("active");

                            // hides the menu and removes it from the current
                            // context (it's not going to be used anymore) but
                            // only in case the stay flag is not set
                            menuContents.hide();
                            !stay && menu.remove();

                            // iterates over each of the selected list items
                            // to execute the proper "sequential" action
                            selectedListItem.each(function(index, element) {
                                        // retrieves the current element
                                        var __element = jQuery(element);

                                        // retrieves the buttons associated with the equivalent
                                        // button in its context menu
                                        var button = jQuery(
                                                ".context-menu > .menu-contents[data-menu_id="
                                                        + menuId
                                                        + "] > :nth-child("
                                                        + String(elementIndex
                                                                + 1) + ")",
                                                __element);

                                        // checks if the button is of type document
                                        // (open in same window) and then retrieves the
                                        // value of the link attribute
                                        var isDocument = button.attr("data-document");
                                        var link = button.attr("data-link");

                                        // in cas no link is defined, not possible
                                        // to open the link (must return)
                                        if (!link) {
                                            // returns immediately no need to open
                                            // the link
                                            return;
                                        }

                                        // in case the current button refers a link that
                                        // must be opened as a document and this is the first
                                        // element to be parsed opens the link in the current
                                        // document otherwise creates a new window and opend
                                        // the link in it (external opening)
                                        isDocument && index == 0
                                                ? document.location = link
                                                : window.open(link, "_blank");
                                    });

                            // tries to retrieve the bulk (to many link)
                            // from the element
                            var linkBulk = _element.attr("data-link_bulk");

                            // in case the bulk link exists a recursive operation
                            // call must be made
                            if (linkBulk) {
                                // initializes the string that will hold the various
                                // string identifier values to be sent for the bulk operation
                                var identifiersList = "";

                                // iterates over each of the selected items to update the
                                // list of items accordingly
                                selectedListItem.each(function(index, element) {
                                            // retrieves the current element reference
                                            var __element = jQuery(element);

                                            // retrieves the object id from the current
                                            // element (this is the element identifier)
                                            var objectId = __element.data("object_id");

                                            // in case the index is greater than zero a comma
                                            // must be appended to the identifiers list
                                            if (index > 0) {
                                                // adds the comma to the identifiers list
                                                identifiersList += ",";
                                            }

                                            // adds the identifier to the identifiers list
                                            identifiersList += objectId
                                        });

                                // updates the current documents location to the bulk
                                // link, so that the bulk operation takes place
                                document.location = linkBulk + "?object_id="
                                        + identifiersList;
                            }

                            // stops the event propagation and prevents
                            // the default bahavior (avoids propagation problems)
                            event.stopPropagation();
                            event.preventDefault();
                        });

                // registers for the double click event on the button
                // to avoid unwanted propagation
                _element.dblclick(function(event) {
                            // stops the event propagation and prevents
                            // the default bahavior (avoids propagation problems)
                            event.stopPropagation();
                            event.preventDefault();
                        });
            });
        };

        var _incrementSelection = function(matchedObject, options) {
            // retrieves the current selection value and
            // obtains the first value as the reference value
            var selection = matchedObject.data("selection");
            var _selection = selection[0];

            // in case the selection row not "overlfows"
            if (_selection > 0) {
                // decrements the current selection
                matchedObject.data("selection", [_selection - 1]);
                matchedObject.data("pivot", _selection - 1);
            }

            // updates the current selection
            _updateSelection(matchedObject, options);
        };

        var _decrementSelection = function(matchedObject, options) {
            // retrieves the current selection value and
            // obtains the last value as the reference value
            var selection = matchedObject.data("selection");
            var _selection = selection[selection.length - 1];

            // retrieves the "current" list items
            var listItems = jQuery(".filter-contents > *", matchedObject);

            // in case the selection row not "overlfows"
            if (_selection < listItems.length) {
                // increments the current selection
                matchedObject.data("selection", [_selection + 1]);
                matchedObject.data("pivot", _selection + 1);
            } else {
                // updates the matched object (runs the loading
                // of additional values)
                _update(matchedObject, options);
            }

            // updates the current selection
            _updateSelection(matchedObject, options);
        };

        var _upSelection = function(matchedObject, options) {
            // retrieves the current selection value and
            // obtains the first value as the reference value
            var selection = matchedObject.data("selection");
            var _selection = selection[0];

            // in case the selection row is not the first
            // one (goes to the top)
            if (_selection > 1) {
                // resets the current selection to be top
                // selection value
                matchedObject.data("selection", [1]);
                matchedObject.data("pivot", 1);
            }
            // otherwise goes to the "invisible" value
            else {
                // resets the current selection to be base
                // selection value
                matchedObject.data("selection", [0]);
                matchedObject.data("pivot", 0);
            }

            // updates the current selection
            _updateSelection(matchedObject, options);
        };

        var _downSelection = function(matchedObject, options) {
            // retrieves the current selection value and
            // obtains the last value as the reference value
            var selection = matchedObject.data("selection");
            var _selection = selection[selection.length - 1];

            // retrieves the "current" list items
            var listItems = jQuery(".filter-contents > *", matchedObject);

            // in case the selection row is the last
            // need to load more elements
            if (_selection == listItems.length) {
                // updates the matched object (runs the loading
                // of additional values)
                _update(matchedObject, options);
            }
            // in case the selection row is not the base
            // one (goes to the bottom)
            else if (_selection > 0) {
                // resets the current selection to be bottom
                // selection value
                matchedObject.data("selection", [listItems.length]);
                matchedObject.data("pivot", listItems.length);
            }
            // otherwise it's the base selection and the filter
            // must be scrolled to the top
            else {
                // resets the current selection to be top
                // selection value
                matchedObject.data("selection", [1]);
                matchedObject.data("pivot", 1);
            }

            // updates the current selection
            _updateSelection(matchedObject, options);
        };

        var _updateSelection = function(matchedObject, options) {
            // retrieves the current selection value
            var selection = matchedObject.data("selection");

            // retrieves the current list items
            var listItems = jQuery(".filter-contents > *", matchedObject);

            // removes the selected class from the current list
            // items (unselection) also removes the first and
            // last "control" classes
            listItems.removeClass("selected");
            listItems.removeClass("first");
            listItems.removeClass("last");

            // orders the selection according
            // to the typical arithmetic function
            selection.sort(function(first, second) {
                        // returns the diference between the first
                        // adn the second elements
                        return first - second;
                    });

            // iterates over all the items in the selection
            // to correclty update their control classes
            for (var index = 0; index < selection.length; index++) {
                // retrieves the current the previous and the next
                // selections (for processing)
                var _selection = selection[index];
                var _previous_selection = selection[index - 1];
                var _next_selection = selection[index + 1];

                // retrieves the list item to be selected
                var _selectedListItem = jQuery(".filter-contents > :nth-child("
                                + _selection + ")", matchedObject);

                // adds the selected class to the selected list item
                _selectedListItem.addClass("selected");

                // in case the current index is the first or in case the
                // current selection is not preceded by a contiguous value
                if (index == 0 || _previous_selection != _selection - 1) {
                    // adds the first class to the current selected
                    // list item (indicates that it is the first of
                    // a contiguous selection)
                    _selectedListItem.addClass("first");
                }

                // in case the current index if the last or in case the
                // the current selection is not succeeded by a contiguous value
                if (index == selection.length - 1
                        || _next_selection != _selection + 1) {
                    // adds the last class to the current selected
                    // list item (indicates that it is the last of
                    // a contiguous selection)
                    _selectedListItem.addClass("last");
                }
            }

            // retrieves the complete set of selected list items
            // to apply the global characteristics to them
            var selectedListItem = jQuery(".filter-contents > .selected",
                    matchedObject);

            // retrieves the top offset of the page, using
            // the margin element (from the margin top)
            var margin = jQuery(".margin");
            var marginOffset = margin.offset();
            var pageOffset = marginOffset ? marginOffset.top : 0;

            // tries to retrieve the dom element
            var _element = selectedListItem.get(0);

            // cheks if the element is visible
            var isVisible = _element ? jQuery.uxvisible(selectedListItem,
                    pageOffset) : true;

            // scrolls to the reference in case the
            // element is not visible
            !isVisible && selectedListItem.length == 1
                    && selectedListItem.uxscroll({
                                offset : pageOffset,
                                padding : 10
                            });
        };

        var _incrementRange = function(matchedObject, options) {
            // sets the matched object as the filter reference
            // for further usage
            var filter = matchedObject;

            // retrieves the pivot value and the current selection
            // for the filter reference
            var pivot = filter.data("pivot");
            var selection = filter.data("selection");

            // checks if the pivot is zero and in case it is consider
            // it to be one (first element)
            pivot = pivot == 0 ? 1 : pivot;

            // retrieves the first and last element from the current
            // selection for reference
            var first = selection[0];
            var last = selection[selection.length - 1];

            // in case the current first element is the pivot
            // need to use the last value as reference
            if (first == pivot) {
                // increments the last value and sets it as
                // the proper value
                var value = last - 1;
            }
            // otherwise uses the first value as reference
            else {
                // decrement the first value and sets it as
                // the proper value
                var value = first - 1;
            }

            // in case the current index value is zero
            // it's considered to be invalid, returns immediately
            if (value == 0) {
                // returns immediately, invalid index
                return;
            }

            // runs the range selection process for the currently
            // selected value and then updates the selection
            _rangeSelection(value, filter, options);
            _updateSelection(filter, options);

            // retrieves the complete set of selected list items
            // to apply the global characteristics to them
            var selectedListItem = jQuery(".filter-contents > .selected",
                    matchedObject);

            // retrieves the top offset of the page, using
            // the margin element (from the margin top)
            var margin = jQuery(".margin");
            var marginOffset = margin.offset();
            var pageOffset = marginOffset ? marginOffset.top : 0;

            // in case the current first element is the pivot
            // need to use the last value as reference
            if (first == pivot) {
                // retrieves the last item as the reference one
                var item = jQuery(selectedListItem[selectedListItem.length - 1]);
            }
            // otherwise must use the first one
            else {
                // retrieves the first item as the reference one
                var item = jQuery(selectedListItem[0]);
            }

            // checks if the item is visible and in case it's
            // not scroll the current viewport into the item
            var isVisible = item ? jQuery.uxvisible(item, pageOffset) : true;
            !isVisible && item.uxscroll({
                        offset : pageOffset,
                        padding : 10
                    });
        };

        var _decrementRange = function(matchedObject, options) {
            // sets the matched object as the filter reference
            // for further usage
            var filter = matchedObject;

            // retrieves the pivot value and the current selection
            // for the filter reference
            var pivot = filter.data("pivot");
            var selection = filter.data("selection");

            // checks if the pivot is zero and in case it is consider
            // it to be one (first element)
            pivot = pivot == 0 ? 1 : pivot;

            // retrieves the first and last element from the current
            // selection for reference
            var first = selection[0];
            var last = selection[selection.length - 1];

            // in case the current last element is the pivot
            // need to use the first value as reference
            if (last == pivot) {
                // increments the first value and sets it as
                // the proper value
                var value = first + 1;
            }
            // otherwise uses the last value as reference
            else {
                // increments the last value and sets it as
                // the proper value
                var value = last + 1;
            }

            // retrieves the "current" list items
            var listItems = jQuery(".filter-contents > *", matchedObject);

            // in case the selection row not "overlfows"
            if (value > listItems.length) {
                // updates the matched object (runs the loading
                // of additional values) and returns immediately
                // to avoid further updates
                _update(matchedObject, options);
                return;
            }

            // runs the range selection process for the currently
            // selected value and then updates the selection
            _rangeSelection(value, filter, options);
            _updateSelection(filter, options);

            // retrieves the complete set of selected list items
            // to apply the global characteristics to them
            var selectedListItem = jQuery(".filter-contents > .selected",
                    matchedObject);

            // retrieves the top offset of the page, using
            // the margin element (from the margin top)
            var margin = jQuery(".margin");
            var marginOffset = margin.offset();
            var pageOffset = marginOffset ? marginOffset.top : 0;

            // in case the current last element is the pivot
            // need to use the first value as reference
            if (last == pivot) {
                // retrieves the first item as the reference one
                var item = jQuery(selectedListItem[0]);
            }
            // otherwise must use the last one
            else {
                // retrieves the last item as the reference one
                var item = jQuery(selectedListItem[selectedListItem.length - 1]);
            }

            // checks if the item is visible and in case it's
            // not scroll the current viewport into the item
            var isVisible = item ? jQuery.uxvisible(item, pageOffset) : true;
            !isVisible && item.uxscroll({
                        offset : pageOffset,
                        padding : 10
                    });
        };

        var _upRange = function(matchedObject, options) {
            // sets the matched object as the filter reference
            // for further usage
            var filter = matchedObject;

            // retrieves the pivot value and the current selection
            // for the filter reference
            var pivot = filter.data("pivot");
            var selection = filter.data("selection");

            // runs the range selection process for the currently
            // selected value and then updates the selection
            _rangeSelection(1, filter, options);
            _updateSelection(filter, options);

            // retrieves the complete set of selected list items
            // to apply the global characteristics to them
            var selectedListItem = jQuery(".filter-contents > .selected",
                    matchedObject);

            // retrieves the top offset of the page, using
            // the margin element (from the margin top)
            var margin = jQuery(".margin");
            var marginOffset = margin.offset();
            var pageOffset = marginOffset ? marginOffset.top : 0;

            // retrieves the first item as the reference one
            var item = jQuery(selectedListItem[0]);

            // checks if the item is visible and in case it's
            // not scroll the current viewport into the item
            var isVisible = item ? jQuery.uxvisible(item, pageOffset) : true;
            !isVisible && item.uxscroll({
                        offset : pageOffset,
                        padding : 10
                    });
        };

        var _downRange = function(matchedObject, options) {
            // sets the matched object as the filter reference
            // for further usage
            var filter = matchedObject;

            // retrieves the pivot value and the current selection
            // for the filter reference, then retrieves the current
            // selection reference element
            var pivot = filter.data("pivot");
            var selection = filter.data("selection");
            var _selection = selection[selection.length - 1];

            // retrieves the "current" list items
            var listItems = jQuery(".filter-contents > *", matchedObject);

            // in case the selection row is the last
            // need to load more elements
            if (_selection == listItems.length) {
                // updates the matched object (runs the loading
                // of additional values) and returns immediately
                // to avoid further updates
                _update(matchedObject, options);
                return;
            }

            // runs the range selection process for the currently
            // selected value and then updates the selection
            _rangeSelection(listItems.length, filter, options);
            _updateSelection(filter, options);

            // retrieves the complete set of selected list items
            // to apply the global characteristics to them
            var selectedListItem = jQuery(".filter-contents > .selected",
                    matchedObject);

            // retrieves the top offset of the page, using
            // the margin element (from the margin top)
            var margin = jQuery(".margin");
            var marginOffset = margin.offset();
            var pageOffset = marginOffset ? marginOffset.top : 0;

            // retrieves the last item as the reference one
            var item = jQuery(selectedListItem[selectedListItem.length - 1]);

            // checks if the item is visible and in case it's
            // not scroll the current viewport into the item
            var isVisible = item ? jQuery.uxvisible(item, pageOffset) : true;
            !isVisible && item.uxscroll({
                        offset : pageOffset,
                        padding : 10
                    });
        };

        var _rangeSelection = function(index, matchedObject, options) {
            // sets the matched object as the filter reference
            // for further usage
            var filter = matchedObject;

            // retrieves the current selection and the current
            // pivot item index
            var selection = filter.data("selection");
            var pivot = filter.data("pivot");

            // checks if the pivot is zero and in case it is consider
            // it to be one (first element)
            pivot = pivot == 0 ? 1 : pivot;

            // checks if the current selection is the initial
            // empty selection, in case it's "pops" it from the
            // current selection set (avoids problems in selection)
            var isInitial = selection.length == 1 && selection[0] == 0;
            isInitial && selection.pop();

            // in case the index value is greater than the pivot index
            // it's a range for the down
            if (index >= pivot) {
                // sets the proper initial and final values
                // for the "down" range
                var _initial = pivot;
                var _final = index + 1;
            }
            // otherwise in case the index value is lesser than the pivot
            // index it's a range for the up
            else if (index <= pivot) {
                // sets the proper initial and final values
                // for the "upper" range
                var _initial = index;
                var _final = pivot + 1;
            }

            // creates a new list to hold the new selection values resulting
            // from the range selection
            var _selection = []

            // iterates over the range values to add the selected indexes to
            // the selection list
            for (var index = _initial; index < _final; index++) {
                // adds the index to the list of the selections
                _selection.push(index);
            }

            // updates the selection list in the filter
            filter.data("selection", _selection);
        };

        var _select = function(listItem, matchedObject, options) {
            // sets the filter as the current matched
            // object (back reference)
            var filter = matchedObject;

            // iterates over each of the selected list items
            // to execute their default selection action
            listItem.each(function(index, element) {
                // retrieves the element reference and
                // sets it as the current list item
                var _element = jQuery(element);
                var _listItem = _element;

                // tries to retrieve the value link from the
                // data link attribute in the selected list item
                var valueLink = _listItem.attr("data-link");

                // retrieves the first link element available in the
                // selected list item, then uses it to retrieve
                // its hyperlink reference (in case it's necessary)
                var linkElement = jQuery("a", _listItem);
                var valueLink = valueLink
                        ? valueLink
                        : linkElement.attr("href");

                // in case the value link is set
                if (valueLink) {
                    // retrieves the offset and converts it
                    // into an integer
                    var duration = filter.attr("data-duration");
                    var durationInteger = parseInt(duration);

                    // checks if the duration integer value is valid
                    // conversion successful
                    var durationValid = !isNaN(durationInteger);

                    // in case the duration is valid (the link is
                    // internal and a scroll to shall be used)
                    if (durationValid) {
                        // retrieves the offset and converts it
                        // into an integer
                        var offset = filter.attr("data-offset");
                        var offsetInteger = parseInt(offset);

                        // creates the settings map based on the offset
                        var settings = {
                            offset : isNaN(offsetInteger) ? 0 : offsetInteger
                        }

                        // scrolls to the reference
                        jQuery.uxscrollto(valueLink, durationInteger, settings);
                    }
                    // otherwise the link is external and
                    // no scroll to shall be used
                    else {
                        // in case the current list of item is single
                        // (only one element present) changes the current
                        // document location, otherwise opens a new window
                        // with the value link location (popup)
                        listItem.length <= 1
                                ? document.location = valueLink
                                : window.open(valueLink, "_blank");
                    }
                }
            });
        };

        var _showSubMenu = function(element, menu) {
            // retrieves the target value for the element
            // and then uses it as the selector for the sub menu
            var target = element.attr("data-target");
            var subMenu = jQuery(target, menu);

            // retrieves ther complete set of buttons currently present
            // in the sub menu to register for their appropriate events
            var subButtons = jQuery(".button:not(.menu-link)", subMenu);

            // in case the submenu is currently visible
            // must return immediately not going to show it
            var isVisible = subMenu.is(":visible");
            if (isVisible) {
                return;
            }

            // checks if the sub menu element is already being shown
            // in such case returns immediately to avoid problems
            var showing = subMenu.data("showing");
            if (showing) {
                return;
            }

            // sets the "locking" flag indicating that the sub menu
            // is already being shown
            subMenu.data("showing", true);

            // retrieves the top and left offset positions
            // for the current element (these are the offset
            // position of it)
            var offset = element.offset();
            var top = offset["top"];
            var left = offset["left"];

            // retrieves the element with and then uses
            // it to calculate the margin left for the
            // sub menu element
            var elementWidth = element.outerWidth();
            var marginLeft = elementWidth - 3;

            // retrieves the correct scroll position coordinates
            // according to the current browser implementation
            var scrollY = window.scrollY
                    ? window.scrollY
                    : document.body.scrollTop;
            var scrollX = window.scrollX
                    ? window.scrollX
                    : document.body.scrollLeft;

            // sets the proper postion attributes for the
            // submenu so that it's positioned to the right
            // of the action element
            subMenu.css("position", "fixed")
            subMenu.css("margin-left", marginLeft + "px");
            subMenu.css("margin-top", 0 + "px");
            subMenu.css("top", (top - scrollY) + "px");
            subMenu.css("left", (left - scrollX) + "px");

            // adds the selected class to the element (button)
            // so that it's highlighted
            element.addClass("selected");

            // tries to retrieve the currently registered mouse enter
            // event from the sub buttons in case the event does not exists
            // registers a new function for the handling and sets it in
            // the data for the sub buttons
            var mouseenter = subButtons.data("mouseenter");
            mouseenter = mouseenter || subButtons.mouseenter(function() {
                        element.addClass("selected");
                    });
            subButtons.data("mouseenter", mouseenter);

            // shows the sub menu with a fade effect
            subMenu.fadeIn(150, function() {
                        // unsets the flag that controlls the
                        // showing state of the sub menu
                        subMenu.data("showing", false);
                    });
        };

        var _hideSubMenu = function(subMenu) {
            subMenu.hide();
        };

        var _selectFilter = function(filter, value, select) {
            // retrieves the parent filter object
            var _filter = filter.parents(".filter");

            // retrieves the reference to the value field using
            // the filter to do so
            var valueField = jQuery(".value-field", filter);

            // retrieves both the drop field (value selection) and the
            // operation field from the fielter
            var dropField = jQuery(".drop-field:not(.operation-field)", filter);
            var operationField = jQuery(".drop-field.operation-field", filter);

            // retrieves the data sources associated with the drop field
            // and the operation field (to be manipulated)
            var dropSource = jQuery("> .data-source", dropField);
            var operationSource = jQuery("> .data-source", operationField);

            // retrieves the items, types and names sequences associated with
            // the drop (field) data source
            var items = dropSource.data("items");
            var types = dropSource.data("types");
            var names = dropSource.data("names");
            var elements = dropSource.data("elements");

            // retrieves the current index for the value in the items
            // sequence then uses it to retrieve the associated type
            // and the associated indirect name
            var index = items.indexOf(value);
            var type = types[index];
            var name = names[index];
            var element = elements[index];

            // sets the operation field disabled flag as unset by default
            // (operations allowed by default)
            var disabled = false;

            // sets the (data name) in the filter line to be latter used
            // to perform the query
            filter.data("name", name);

            // removes the currently selected value field (a new one will
            // be set in)
            valueField.remove();

            // switched over the type of the value that was selected
            // (different type will have different operation and different
            // value fields)
            switch (type) {
                case "string" :
                    // creates the list of items and then creates the list
                    // of equivalent operations (index based association)
                    var _items = ["contains", "matches", "begins with",
                            "ends with"];
                    var _operations = ["like", "equals", "rlike", "llike"];

                    // creates the value field as a text field, inserts it
                    // after the operation field and initializes it
                    var valueField = jQuery("<input type=\"text\" class=\"text-field small value-field\" />");
                    valueField.insertAfter(operationField);
                    valueField.uxtextfield();

                    // breaks the switch
                    break;

                case "number" :
                    // creates the list of items and then creates the list
                    // of equivalent operations (index based association)
                    var _items = ["equals", "greater than", "less than"];
                    var _operations = ["equals", "greater", "lesser"];

                    // creates the value field as a text field, inserts it
                    // after the operation field and initializes it
                    var valueField = jQuery("<input type=\"text\" class=\"text-field small value-field\" />");
                    valueField.insertAfter(operationField);
                    valueField.uxtextfield();

                    // breaks the switch
                    break;

                case "date" :
                    // creates the list of items and then creates the list
                    // of equivalent operations (index based association)
                    var _items = ["in", "after", "before"];
                    var _operations = ["in_day", "greater", "lesser"];

                    // creates the value field as a text field (calendar field),
                    // inserts it after the operation field and initializes it
                    var valueField = jQuery("<input type=\"text\" class=\"text-field small value-field\" data-type=\"date\" data-original_value=\"yyyy/mm/dd\" />");
                    valueField.insertAfter(operationField);
                    valueField.uxtextfield();

                    // breaks the switch
                    break;

                case "reference" :
                    // creates the list of items and then creates the list
                    // of equivalent operations (index based association)
                    var _items = ["search"];
                    var _operations = ["equals"];

                    // sets the disabled flag so that no operation changing
                    // action is possible
                    disabled = true

                    // retrieves the url and the type (data source) from
                    // the associated element
                    var url = element.attr("data-surl");
                    var _type = element.attr("data-stype");

                    // retrieves the display and the value attributes from the
                    // element to the propagated to the value field
                    var displayAttribute = element.attr("data-sdisplay_attribute");
                    var valueAttribute = element.attr("data-svalue_attribute");

                    // creates the value field as a drop field (reference field),
                    // inserts it after the operation field and initializes it
                    var valueField = jQuery("<div class=\"drop-field small value-field\">"
                            + "<input type=\"hidden\" class=\"hidden-field\" />"
                            + "<ul class=\"data-source\"></ul>" + "</div>");

                    // retrieves the data source associated with the value
                    // field an then updates the url and the type of the
                    // data source to point to the "reference" elements
                    var valueSource = jQuery("> .data-source", valueField);
                    valueSource.attr("data-url", url);
                    valueSource.attr("data-type", _type);
                    valueSource.uxdatasource();

                    // updates the value field attributes in the value field and then
                    // inserts it after the operation field and initializes it as a
                    // drop field component
                    valueField.attr("data-display_attribute", displayAttribute);
                    valueField.attr("data-value_attribute", valueAttribute);
                    valueField.insertAfter(operationField);
                    valueField.uxdropfield();

                    // breaks the switch
                    break;

                default :
                    // creates the list of items and then creates the list
                    // of equivalent operations (index based association)
                    var _items = ["undefined"];
                    var _operations = [""];

                    // breaks the switch
                    break;
            }

            // updates the various items (operation values) in the
            // operation (data) source
            operationSource.data("items", _items);
            operationSource.data("operations", _operations);

            // unsets the update flag from the operation field (to
            // force a reload of items in the operation field) and
            // then "runs" a reset operation to cleanup the operation
            // field (reset to original state)
            operationField.data("updated", null);
            operationField.uxdropfield("reset");

            // in case the select flag is set a value must be set in
            // the (field) drop field set the value as that field
            select && dropField.uxdropfield("set", {
                        value : value
                    });

            // updates the operation field to be set to the
            // first item in the items sequence
            operationField.uxdropfield("set", {
                        value : _items[0]
                    });

            // in case the disabled flag is set disables the operation
            // field otherwise enables it
            disabled ? operationField.uxdisable() : operationField.uxenable();

            // registers for the value select event in the
            // operation field to update the filter results
            operationField.bind("value_select",
                    function(event, value, valueLogic, item) {
                        // updates the current filter to reflect the
                        // changes in the operation field
                        _update(_filter, options, true);
                    });

            // registers for the value change event in the
            // value field to update the filter results
            valueField.bind("value_change",
                    function(event, value, valueLogic, item) {
                        // updates the current filter to reflect the
                        // changes in the value field
                        _update(_filter, options, true);
                    });

            // registers for the value select event in the
            // value field to update the filter results
            valueField.bind("value_select",
                    function(event, value, valueLogic, item) {
                        // updates the current filter to reflect the
                        // changes in the value field
                        _update(_filter, options, true);
                    });

            // registers for the value unselect event in the
            // value field to update the filter results
            valueField.bind("value_unselect", function(event) {
                        // updates the current filter to reflect the
                        // changes in the value field
                        _update(_filter, options, true);
                    });
        };

        var _addFilter = function(matchedObject, target) {
            // retrieves the data source for the current filter object
            // and retrieves the associated filtering objects
            var dataSource = jQuery("> .data-source", matchedObject);
            var dataFiltering = jQuery(".filtering > li", dataSource);

            // retrieves the advanced filters section of the filter, this
            // area is going to be used to add the "new" filter
            var advancedFilters = jQuery(".filter-advanced-filters",
                    matchedObject);

            // creates the new filter element and the associated drop field
            // operation field (drop field) and the text field
            var filter = jQuery("<div class=\"filter-advanced-filter\"></div>");
            var dropField = jQuery("<div class=\"drop-field drop-field-select small\">"
                    + "<ul class=\"data-source\" data-type=\"local\"></ul>"
                    + "</div>");
            var operationField = jQuery("<div class=\"drop-field drop-field-select small operation-field\">"
                    + "<ul class=\"data-source\" data-type=\"local\"></ul>"
                    + "</div>");

            // creates the remove and add buttons for the filter line
            // and creates the clear element to clear eht float layout strucure
            // (in case it's necessary)
            var remove = jQuery("<div class=\"filter-input-remove\"></div>");
            var add = jQuery("<div class=\"filter-input-add\"></div>");
            var clear = jQuery("<div class=\"filter-clear\"></div>");

            // retrieves the data source element associated with the drop field
            // to be used to select that value of filtering
            var dropSource = jQuery("> .data-source", dropField);

            // creates the initial list to hold the items, types and names associated
            // with them, the index should be associative between them
            var items = []
            var types = []
            var names = []
            var elements = []

            // iterates over each of the data filtering elements to
            // be able to "parse" the items and insert them into the
            // the items and types lists
            dataFiltering.each(function(index, element) {
                        // retrives the current element in iteration
                        var _element = jQuery(this);

                        // retrieves the html value of the element and
                        // retrieves the data type attribute of it to
                        // be used both as the item and the type
                        var dataHtml = _element.html();
                        var dataType = _element.attr("data-type");
                        var dataName = _element.attr("data-name");

                        // adds the data html (item) and the data type
                        // to the corresponding lists
                        items.push(dataHtml);
                        types.push(dataType);
                        names.push(dataName);
                        elements.push(_element);
                    });

            // updates the items, types and names lists in the drop
            // field data source data references
            dropSource.data("items", items);
            dropSource.data("types", types);
            dropSource.data("names", names);
            dropSource.data("elements", elements);

            // registers for the value selection event in the drop field
            // so that the other components are changed according to the
            // value to be used for filtering (data type change)
            dropField.bind("value_select",
                    function(event, value, valueLogic, item) {
                        _selectFilter(filter, value);
                        _update(matchedObject, options, true);
                    });

            // registers for the click event in the remove button to
            // remove the filter line from the list of filters
            remove.click(function() {
                        // retrieves the current button element and uses it
                        // to retrieve the parent filter and remove it
                        var element = jQuery(this);
                        var _filter = element.parents(".filter-advanced-filter");
                        _filter.remove();
                        _update(matchedObject, options, true);
                    });

            // regiters for the click event in the add button to
            // add a new filter line next to the current filter
            add.click(function() {
                        // retrieves the current button element and uses it
                        // to retrieve the parent filter and add a new filter
                        // in the next position
                        var element = jQuery(this);
                        var _filter = element.parents(".filter-advanced-filter");
                        _addFilter(matchedObject, _filter);
                        _update(matchedObject, options, true);
                    });

            // initializes the drop field components both in the
            // drop field and n the operation field
            dropField.uxdropfield("default", {
                        numberOptions : 10,
                        filterOptions : true
                    });
            operationField.uxdropfield("default", {
                        numberOptions : 10,
                        filterOptions : true
                    });

            // adds the various "partial" components to the filter
            // (line) component, there should be a visual impact
            filter.append(dropField);
            filter.append(operationField);
            filter.append(remove);
            filter.append(add);
            filter.append(clear);

            // check if the target element is defined, in such case
            // the filter is inserted after the target, otherwise the
            // filter (line) is prepended to the advanced filters
            target
                    ? filter.insertAfter(target)
                    : advancedFilters.prepend(filter);

            // selects the initial element of the "newly" created filter
            // this is the first value to be viewed by the end user
            _selectFilter(filter, items[0], true);
        };

        var _disableFiltering = function(matchedObject, options) {
            // retrieves the filter add element (in the advanced panel)
            // and disables it to avoid insertion of filters
            var filterAdd = jQuery(".filter-advanced > .filter-input-add",
                    matchedObject);
            filterAdd.hide();
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery header notification plugin, this jQuery plugin provides the base
 * infra-structure for the creation of an header notification component.
 *
 * @name jquery-header-notification.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxheadernotification = function(options) {
        // the default values for the plugin
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the header notification
            // to check if they are empty (should be hidden)
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the contents from the element
                        // to check them for text
                        var contents = _element.html();

                        // in case no contents are available
                        // hides the element
                        !contents && _element.hide();
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the window
            var _window = jQuery(window);

            // retrieves the close links for the notification
            var linkClose = jQuery("> .link-close", matchedObject);

            // register for the click event on the link close
            linkClose.click(function() {
                // retrieves the element
                var element = jQuery(this);

                // retrieves the (parent) header notification
                var headerNotification = element.parent(".header-notification");

                // hides the header notification
                headerNotification.hide();
            });
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxform = function(options) {
        // the default values for the form
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the matched objects
            // to add the submit input button to it
            matchedObject.each(function(index, element) {
                // retrieves the element reference
                var _element = jQuery(element);

                // adds the submit button to the matched
                // object (form), only in case the no keyboard
                // flag is not set
                var noKeyboard = _element.hasClass("no-keyboard");
                !noKeyboard
                        && _element.append("<input type=\"submit\" class=\"submit-button\" />");
            });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // registers for the submit event so that
            // duplicate submits may be avoided
            matchedObject.submit(function(event) {
                        // retrieves the current element
                        var element = jQuery(this);

                        // retrieves the state of the submited flag
                        // and then updates it to the valid value
                        var submited = element.data("submited");
                        element.data("submited", true);

                        // in case the form was not already submited
                        // need to prevent the event
                        if (submited) {
                            // stops the event propagation and
                            // prevents the default behavior (avoids
                            // duplicate submits)
                            event.stopPropagation();
                            event.preventDefault();
                        }

                        // checks if the current element has the ajax form
                        // class, in such cases must avoid normal submission
                        // and instead should submit the form in ajax
                        var isAjax = element.hasClass("form-ajax");
                        if (isAjax) {
                            // schedules the execution of the ajax submit fo
                            // the next tick so that the submit event handlers
                            // may be executed before the submission
                            setTimeout(function() {
                                        submitAjax(element, options);
                                    }, 0);

                            // prevents the default behavior (avoids
                            // the normal submit)
                            event.preventDefault();
                        }
                    });

            // registers for the reset event on the matched object
            // so that the form may perform the reset form operation
            // under such conditions
            matchedObject.bind("reset", function(event) {
                        // retrieves the current element and runs
                        // the reset for operation for it
                        var element = jQuery(this);
                        resetForm(element, options);
                    });
        };

        var submitAjax = function(matchedObject, options) {
            // retrieves the various attributes from the matched
            // object that are going to be used to creates the
            // "simulated" ajax request
            var method = matchedObject.attr("method") || "get";
            var action = matchedObject.attr("action");
            var data = matchedObject.serialize();

            // triggers the submit data handler so that any listening
            // handler may be able to handle the data
            matchedObject.triggerHandler("submit_data");

            // creates the ajax request that is going to simulate
            // a complete form request in the background
            jQuery.ajax({
                type : method,
                url : action,
                data : data,
                complete : function(request, textStatus) {
                    // triggers the unlock event so that the various
                    // items in the form may be re-used again
                    matchedObject.triggerHandler("unlock");
                },
                success : function(data) {
                    // resets the form contents to the original values
                    // this should remove all the values in it
                    resetForm(matchedObject, options);

                    // in case no data was received the connection is
                    // assumed to be down (no data receved) an error
                    // is triggered and the control returned immediately
                    if (!data) {
                        matchedObject.triggerHandler("error");
                        return;
                    }

                    // checks if the success for panel exists in the form
                    // in case it exist it must be shown and the other contents
                    // fo the form hidden
                    var formSuccess = jQuery(".form-success", matchedObject);
                    var hasFormSuccess = formSuccess.length;
                    if (hasFormSuccess) {
                        // retrieves the complate set of items in the form
                        // that are not part of the form success panel
                        var otherItems = jQuery("> :not(.form-success)",
                                matchedObject);

                        // uses the form success panel to render it as a template
                        // using as base the form success template provided then
                        // adds the result to the matched object
                        var formSuccessItem = formSuccess.uxtemplate(data);
                        formSuccessItem.addClass("item")
                        matchedObject.append(formSuccessItem);

                        // hides the other items in the form as shows the just
                        // rendered form success item, then triggers a layout event
                        // to render any changes in the "upper" levels
                        otherItems.hide();
                        formSuccessItem.show();
                        matchedObject.trigger("layout");
                    }

                    // triggerrs the success event on the matched object, this
                    // should indicate that the form was correctly submited
                    matchedObject.triggerHandler("success");
                },
                error : function(request, textStatus, errorThrown) {
                    // resets the form contents to the original values
                    // this should remove all the values in it
                    resetForm(matchedObject, options);

                    // parses the request response data as json (default layout for
                    // the response value) and then uses the result to retrieve the
                    // exception and then the errors list
                    var jsonData = jQuery.parseJSON(request.response);
                    var exception = jsonData["exception"] || {};
                    var errors = exception["errors"] || {};

                    // iterates over all the name in the errors map to sets the
                    // errors value in the various items of the form (error indication)
                    for (var name in errors) {
                        // retrieves the errors list for the current name in
                        // iteration and then converts the list into an
                        // equivalent json string
                        var _errors = errors[name];
                        var _errorsString = JSON.stringify(_errors);

                        // retrieves the field from the form associated with the
                        // provided value and updates it's error state adding the
                        // invalid class to it also
                        var field = jQuery("[name=" + name + "]", matchedObject);
                        field.attr("data-error", _errorsString);
                        field.uxerror();
                        field.addClass("invalid");
                    }

                    // triggers the layout event in order to be able to update any
                    // "upper" components associated with the form
                    matchedObject.trigger("layout");

                    // triggerrs the error event on the matched object, this
                    // should indicate that there was a problem in the form submission
                    matchedObject.triggerHandler("error", [exception]);
                }
            });
        };

        var resetForm = function(matchedObject, options) {
            // retrieves the various fields of the form that contain errors and
            // removes the error state from it (error clear)
            var errorFields = jQuery("[data-error]", matchedObject);
            errorFields.removeAttr("data-error");
            errorFields.uxerror();
            errorFields.removeClass("invalid");

            // retrieves the various error description elements and removes them
            // from the form (error indication removal)
            var errorDescription = jQuery(".error-description", matchedObject);
            errorDescription.remove();

            // retrieves both the form success panel and the other items and then
            // removes the form success (item) panel and shows the "original" items
            // then triggers the layout event to update any "upper" elements
            var formSuccessItem = jQuery(".form-success.item", matchedObject);
            var otherItems = jQuery("> :not(.form-success)", matchedObject);
            formSuccessItem.remove();
            otherItems.show();
            matchedObject.trigger("layout");

            // retrieves the complete set of elements from the matched object
            // and runs the reset operation on all of them, this should be able
            // to restore them to their original values
            var elements = matchedObject.uxfields();
            elements.uxreset();
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxhightlightbox = function(options) {
        // the default values for the data source
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // wraps the matched objec in an highlight box container
            matchedObject.wrap("<div class=\"highlight-box-container\"></div>");
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxhoveringbox = function(options) {
        // the default values for the hovering box
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // registers for the mouse enter in the matched object
            matchedObject.mouseenter(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // schedules a show of the template
                        _scheduleTemplate(element, options);
                    });

            // registers for the mouse leave in the matched object
            matchedObject.mouseleave(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // cancels the show of the template
                        _cancelTemplate(element, options);
                    });
        };

        var _scheduleTemplate = function(matchedObject, options) {
            // retrieves the timeout handler for
            // the matched object
            var timeoutHandler = matchedObject.data("timeoutHandler");

            // in case there is already a
            // timeout handler (schedule pending)
            if (timeoutHandler) {
                // returns immediately
                return;
            }

            // sets the timeout for the showing of the
            // hovering box template
            var timeoutHandler = setTimeout(function() {
                        // showes the template for the given options
                        _showTemplate(matchedObject, options);

                        // unsets the timeout handler in the matched object
                        matchedObject.data("timeoutHandler", null);
                    }, 500);

            // sets the timeout handler in the matched object
            matchedObject.data("timeoutHandler", timeoutHandler);
        };

        var _cancelTemplate = function(matchedObject, options) {
            // retrieves the timeout handler for
            // the matched object
            var timeoutHandler = matchedObject.data("timeoutHandler");

            // in case there is already a
            // timeout handler (schedule pending)
            if (timeoutHandler) {
                // cancels (clears) the current timeout
                clearTimeout(timeoutHandler);

                // unsets the timeout handler in the matched object
                matchedObject.data("timeoutHandler", null);
            }

            // hides the template
            _hideTemplate(matchedObject, options);
        };

        var _containsTemplate = function(matchedObject, options) {
            // retrieves the hovering box template
            var hoveringBoxTemplate = jQuery(".hovering-box-template",
                    matchedObject);

            // checks if the hovering box already contains the template
            var containsTemplate = hoveringBoxTemplate.length > 0;

            // returns the result of the contains template flag
            return containsTemplate;
        };

        var _createTemplate = function(matchedObject, options) {
            // retrieves the id of the hovering
            // box (template) to be used
            var hoveringBoxId = matchedObject.attr("data-hovering-box-id");

            // retrieves the data source id
            var dataSourceId = matchedObject.attr("data-data-source-id");

            // converts the data source id to integer
            var dataSourceId = parseInt(dataSourceId)

            // retrieves the hovering box template and the data
            // source (elements)
            var hoveringBoxTemplate = jQuery("#" + hoveringBoxId);
            var dataSource = jQuery("> .data-source", hoveringBoxTemplate);

            // checks if the matched object contains the hovering
            // box right class (align the element to the right)
            var hoveringBoxRight = matchedObject.hasClass("hovering-box-right");

            // runs the query in the data source
            dataSource.uxdataquery({
                        id : dataSourceId
                    }, function(validItems, moreItems) {
                        // retrieves the current (and only)
                        // item from the list of valid items
                        var currentItem = validItems[0];

                        // applies the template to the hovering box
                        // template (item) retrieving the resulting
                        // template item
                        var templateItem = hoveringBoxTemplate.uxtemplate(currentItem);

                        // adds the template item item to the
                        // element (hovering box)
                        matchedObject.append(templateItem);

                        // in case the hovering box right flag
                        // is not set (no need to align to the right)
                        if (!hoveringBoxRight) {
                            // returns immediately
                            return;
                        }

                        // retrieves both the matched object width
                        // and the template item width
                        var matchedObjectWidth = matchedObject.outerWidth()
                        var templateItemWidth = templateItem.width();

                        // calculates the template item margin left
                        var templateItemMarginLeft = (templateItemWidth - matchedObjectWidth)
                                * -1;

                        // sets the template item margin left
                        templateItem.css("margin-left", templateItemMarginLeft
                                        + "px");
                    });
        };

        var _showTemplate = function(matchedObject, options) {
            // checks if the matched object already contains the template
            var containsTemplate = _containsTemplate(matchedObject, options);

            // in case the matched object does not contain already the template
            // creates it
            !containsTemplate && _createTemplate(matchedObject, options);

            // retrieves the hovering box template
            var hoveringBoxTemplate = jQuery(".hovering-box-template",
                    matchedObject);

            // hides the hovering box template
            hoveringBoxTemplate.show();
        };

        var _hideTemplate = function(matchedObject, options) {
            // retrieves the hovering box template
            var hoveringBoxTemplate = jQuery(".hovering-box-template",
                    matchedObject);

            // hides the hovering box template
            hoveringBoxTemplate.hide();
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uximageupload = function(element, options) {
        // the default values for the image upload
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // sets the matched object as a file drop
            // to get the file drop events
            matchedObject.uxfiledrop();
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // binds the matched object to the file enter
            // event
            matchedObject.bind("file_enter", function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // adds the drag class to the element
                        element.addClass("drag");
                    });

            // binds the matched object to the file leave
            // event
            matchedObject.bind("file_leave", function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // removes the drag class from the element
                        element.removeClass("drag");
                    });

            // binds the matched object to the file
            // drop event
            matchedObject.bind("file_drop", function(event, files) {
                // retrieves the element and saves it
                // as iamge upload (box)
                var element = jQuery(this);
                var imageUpload = element;

                // retrieves the files
                var _files = jQuery(files);

                // iterates over the files
                _files.each(function(index, element) {
                            // creates the image element and adds it to the image upload
                            var image = jQuery("<img class=\"image-upload-image\" />");
                            imageUpload.append(image);

                            // creates a new file reader for reading the file
                            var fileReader = new FileReader();

                            // registers the file reader for the on load
                            // event
                            fileReader.onload = function(event) {
                                // sets the new src attribute in the image
                                image.attr("src", event.target.result);
                            };

                            // reads the file as a data url
                            fileReader.readAsDataURL(element);
                        });

                // removes the drag class from the element
                element.removeClass("drag");
            });
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery image plugin, this jQuery plugin provides the base infra-structure for
 * the creation of a image component.
 *
 * @name jquery-image.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function(jQuery) {
    jQuery.fn.uximage = function(method, options) {
        // the default values for the image
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // registers for the click event on the image to try to show
            // the associated lightbox
            matchedObject.click(function() {
                        // retrieves the element and then uses it to retrieve
                        // the associated lightbox path
                        var element = jQuery(this);
                        var lightboxPath = element.attr("data-lightbox_path");

                        // in case the lightbox path is not defined
                        // no need to show the lightbox
                        if (!lightboxPath) {
                            // returns immediately
                            return;
                        }

                        // shows the lightbox on the body element using the
                        // lightbox path retrieved from the image
                        jQuery("body").uxlightbox(lightboxPath);
                    });
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery incremental field plugin, this jQuery plugin provides the base
 * infra-structure for the creation of a incremental field component.
 *
 * @name jquery-incremental-field.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function(jQuery) {
    jQuery.fn.uxincrementalfield = function(method, options) {
        // the default values for the button
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // wraps the matched object around the the incremental field
            // element so that the buttons may be added, then retrieves
            // the "just" created incremental field and adds the buttons
            // to it (minus and plus buttons)
            matchedObject.wrap("<div class=\"incremental-field\"></div>");
            var incrementalField = matchedObject.parents(".incremental-field");
            incrementalField.prepend("<div class=\"button minus\"></div>");
            incrementalField.append("<div class=\"button plus\"></div>");

            // sets the ux global object representation as incremental
            // field, this value may be used latter for fast ux
            // object type access (hash based conditions)
            incrementalField.attr("data-object", "incrementalfield");

            // removes the incremental field from the text field base element
            // and then add the text field class and registers it as a text field
            matchedObject.removeClass("incremental-field");
            matchedObject.addClass("text-field");
            matchedObject.uxtextfield();
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the incremental field associated with the matched object
            // and then uses it to retrieve the minus and plus buttons
            var incrementalField = matchedObject.parents(".incremental-field");
            var minusButton = jQuery(".button.minus", incrementalField);
            var plusButton = jQuery(".button.plus", incrementalField);

            // registers for the click event on the minus button
            minusButton.click(function() {
                        // retrieves the current element
                        var element = jQuery(this);

                        // retrieves the incremental field associated with
                        // the current element and uses it to decrement the field
                        // note that the text field is focused while the operation
                        // is done this ensures total text field "emulation"
                        var incrementalField = element.parents(".incremental-field");
                        var textField = jQuery(".text-field", incrementalField);
                        textField.focus();
                        __decrement(incrementalField, options);
                        textField.blur();
                    });

            // registers for the click event on the plus button
            plusButton.click(function() {
                        // retrieves the current element
                        var element = jQuery(this);

                        // retrieves the incremental field associated with
                        // the current element and uses it to increment the field
                        // note that the text field is focused while the operation
                        // is done this ensures total text field "emulation"
                        var incrementalField = element.parents(".incremental-field");
                        var textField = jQuery(".text-field", incrementalField);
                        textField.focus();
                        __increment(incrementalField, options);
                        textField.blur();
                    });

            // binds the incremental field do the enabled event
            // so that is possible to propagate the enabling
            incrementalField.bind("enabled", function() {
                        // retrieves the current element and the associated
                        // text field and button elements
                        var element = jQuery(this);
                        var textField = jQuery(".text-field", element);
                        var buttons = jQuery(".button", element);

                        // enables the text field and the buttons associated
                        // with the element (incremental field)
                        textField.uxenable();
                        buttons.uxenable();
                    });

            // binds the incremental field do the disabled event
            // so that is possible to propagate the disabling
            incrementalField.bind("disabled", function() {
                        // retrieves the current element and the associated
                        // text field and button elements
                        var element = jQuery(this);
                        var textField = jQuery(".text-field", element);
                        var buttons = jQuery(".button", element);

                        // disables the text field and the buttons associated
                        // with the element (incremental field)
                        textField.uxdisable();
                        buttons.uxdisable();
                    });
        };

        var __increment = function(incrementalField, options) {
            // retrieves the text field associated with the incremental
            // field then retrieves the current value of it and converts
            // it into a float representation
            var textField = jQuery(".text-field", incrementalField);
            var floatvalue = textField.uxfloat()

            // checks if the incremental field to verify that the
            // incremental field is not disabled, in case it is
            // no action is done
            var isDisabled = incrementalField.hasClass("disabled");
            if (isDisabled) {
                return;
            }

            // increments the float value and uses it to update the
            // text field string representation value
            floatvalue += 1;
            textField.uxtextfield("value", {
                        value : floatvalue
                    });
        };

        var __decrement = function(incrementalField, options) {
            // retrieves the text field associated with the incremental
            // field then retrieves the current value of it and converts
            // it into a float representation
            var textField = jQuery(".text-field", incrementalField);
            var floatvalue = textField.uxfloat();

            // retrieves the data type for associated with the text field
            // for the incremental field (non natural validation)
            var type = textField.attr("data-type");

            // checks if the incremental field to verify that the
            // incremental field is not disabled, in case it is
            // no action is done
            var isDisabled = incrementalField.hasClass("disabled");
            if (isDisabled) {
                return;
            }

            // in case the current text field is of data type natural
            // (negative numbers not allowed) and the value is zero or
            // less no changes are done
            if ((type == "natural" || type == "floatp") && floatvalue <= 0) {
                // returns immediately (avoids changing the value)
                return;
            }

            // decrements the float value and uses it to update the
            // text field string representation value
            floatvalue -= 1;
            textField.uxtextfield("value", {
                        value : floatvalue
                    });
        };

        // switches over the method
        switch (method) {
            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxinfo = function(message, title, type, callback, options) {
        // the default values for the alert
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // retrieves the window (alert window) elements
            var window = jQuery(".window.window-info", matchedObject);
            if (window.length == 0) {
                window = jQuery("<div class=\"window window-info window-hide\">"
                        + "<h1></h1>" + "<p class=\"single\"></p>" + "</div>");
                window.uxwindow();
                matchedObject.append(window);
            }
            var windowHeader = jQuery("h1", window);
            var windowContents = jQuery("p", window);

            // removes the various classes from the window header and
            // then adds the appropriate class according to the type
            windowHeader.removeClass("information");
            windowHeader.removeClass("warning");
            windowHeader.addClass(type || "information");

            // processes the "wiki" message
            message = matchedObject.uxwiki(message);

            // sets the window properties and hides
            // button cancel
            windowHeader.html(title || "Information");
            windowContents.html(message);

            // shows the window
            window.uxwindow("show");
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxlightbox = function(path, callback, options) {
        // the default values for the alert
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // retrieves the window (lightbox window) elements
            var window = jQuery(".window.window-lightbox", matchedObject);
            var windowImage = jQuery("img", window);

            // retrieves the current path from the window image and
            // then checks of it has changed
            var currentPath = windowImage.attr("src");
            var hasChanged = path != currentPath;

            // hides the current window image and sets the image
            // path in the window image (changes the current image
            // in the window)
            hasChanged && windowImage.hide();
            hasChanged && window.addClass("loading");
            windowImage.attr("src", path);
            hasChanged && windowImage.hide();

            // shows the window (should not show the image immediately,
            // but must trigger the loading of it)
            window.uxwindow("show");

            // registers for the end of the image loading, because
            // after that the window must be repositioned in the center
            windowImage.load(function() {
                        // removes the loading class from the window
                        window.removeClass("loading");

                        // shows the window image (back to original state)
                        windowImage.show();

                        // repositions the window in the center of the screen
                        // (the width and height may have changed)
                        window.uxcenter();
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the window (alert window) elements
            var window = jQuery(".window.window-lightbox", matchedObject);
            var windowButtonConfirm = jQuery(".button-confirm", window);

            // registers for the click event on the window
            window.click(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the associated window
                        var window = element;

                        // hides the window and calls the
                        // callback if defined
                        window.uxwindow("hide");
                        callback && callback(true);
                    });

            // registers for the click event on the button confirm
            windowButtonConfirm.click(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the associated window
                        var window = element.parents(".window");

                        // hides the window and calls the
                        // callback if defined
                        window.uxwindow("hide");
                        callback && callback(true);
                    });
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxlinkconfirm = function(message, options) {
        // the default values for the link confirm
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // registers for the click event in
            // the matched object
            matchedObject.click(function(event) {
                        // retrieves the element
                        var element = jQuery(this);

                        // calls the confirm part
                        _call(element, options);

                        // prevents the default event
                        event.preventDefault();
                    });
        };

        var _call = function(matchedObject, options) {
            // retrieves the document
            var _document = jQuery(document);

            // retrieves the message from the matched object
            var message = matchedObject.attr("data-message");

            // calls the confirm window in the document
            _document.uxconfirm(message, function(result) {
                        // in case the result is cancel,
                        // avoids execution
                        if (!result) {
                            // returns immediately
                            return;
                        }

                        // retrieves the matched object location and
                        // sets it in the document
                        var location = matchedObject.attr("href");
                        document.location = location;
                    });
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxlink = function(options) {
        // the default values for the link confirm
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // iterates over each of the elements in
            // the matched object to register for the click event
            matchedObject.each(function(index, element) {
                // retrieves the element reference
                var _element = jQuery(element);

                // retrieves the value for the ajax "flag" attribute
                // to be used to determine if an ajax call should be
                // used instead of the "normal" link behaviour
                var ajax = _element.attr("data-ajax");

                // retrieves the offset and converts it
                // into an integer
                var duration = _element.attr("data-duration");
                var durationInteger = parseInt(duration);

                // checks if the duration integer value is valid
                // conversion successful
                var durationValid = !isNaN(durationInteger);

                // in case the ajax flag set a "special" click handler
                // must be registered to intercept the call and use
                // ajax techniques to retrieve it
                ajax && _element.click(function(event) {
                    // retrieves the element and retrieves the hiperlink
                    // reference value from it to be used as the url
                    var element = jQuery(this);
                    var href = element.attr("href");

                    // prevents the default event (avoids the
                    // effect of the link)
                    event.preventDefault();

                    // runs the remote call to retrieve the resource associated
                    // with the link element, note that cross site reference
                    // rules will applye to this request
                    jQuery.ajax({
                                type : "get",
                                url : href,
                                success : function(data) {
                                    element.triggerHandler("success", [data]);
                                },
                                error : function(request, textStatus, errorThrown) {
                                    element.triggerHandler("error", [request]);
                                }
                            });
                });

                // registers for the click event in
                // the element only in case the dureation is valid
                durationValid && _element.click(function(event) {
                            // retrieves the element
                            var element = jQuery(this);

                            // retrieves the href (link) attribute
                            var href = element.attr("href");

                            // retrieves the offset and converts it
                            // into an integer
                            var offset = element.attr("data-offset");
                            var offsetInteger = parseInt(offset);

                            // creates the settings map based on the offset
                            var settings = {
                                offset : isNaN(offsetInteger)
                                        ? 0
                                        : offsetInteger
                            }

                            // scrolls to the reference
                            jQuery.uxscrollto(href, durationInteger, settings);

                            // prevents the default event (avoids the
                            // effect of the link)
                            event.preventDefault();
                        });
            });
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxlist = function(options) {
        // the default values for the link confirm
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // retrieves the selected links from the matched object
            var selectedLinks = jQuery("> li > a.selected", matchedObject)

            // retrieves the links that represent exapnded sub list
            // for empty sub list verification
            var epandedLinks = jQuery("> li > a > .link-expand:contains(+)",
                    matchedObject)

            // opens the menus for all the selected links
            // of the list
            selectedLinks.each(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the list that contiains the current
                        // element (first list parent) and then uses it
                        // to retrieve the associated list item parent
                        var list = jQuery(element.parents(".list")[0]);
                        var listItem = list.parents("li");

                        // retrieves the list item link and the list item
                        // link expand
                        var listItemLink = jQuery("> a", listItem);
                        var listItemLinkExpand = jQuery(".link-expand",
                                listItem);

                        // shows the the list (sub list)
                        list.show();

                        // changes the list item link expand
                        // to the minus value and adds the open
                        // class to the list item link
                        listItemLinkExpand.html("-");
                        listItemLink.addClass("open");
                    });

            // iterates over each of the expanded links for
            // empty sublist verification
            epandedLinks.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the imediate parent list item and the
                        // associated sub list (for empty verification)
                        var listItem = jQuery(_element.parents("li")[0])
                        var subList = jQuery("> .list", listItem);
                        var subListChildren = subList.children();

                        // in case the sub list contains children
                        // (it's not empty)
                        if (subListChildren.length > 0) {
                            // returns immediately (no need to remove the
                            // list item associated with the element)
                            return;
                        }

                        //  remove the list item associated with
                        // the element
                        listItem.remove();
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the links from the matched object
            var links = jQuery("> li > a", matchedObject)

            // registers for the click event on the links
            // from the list
            links.click(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the list item that contiains the current
                        // element (first list parent) and then uses it
                        // to retrieve the (child) list
                        var listItem = element.parent("li");
                        var list = jQuery("> .list", listItem)

                        // retrieves the parent (upper) list from the
                        // current list item
                        var parentList = listItem.parent(".list");

                        // in case there's no (child) list in the list
                        // element (no child elements present)
                        if (list.length == 0) {
                            return;
                        }

                        // retrieves the list item link and the list item
                        // link expand
                        var listItemLink = jQuery("> a", listItem);
                        var listItemLinkExpand = jQuery(".link-expand",
                                listItem);

                        // in case the element is open (has class
                        // open) need to close the list
                        if (element.hasClass("open")) {
                            // hides the the list (sub list)
                            list.slideUp(350);

                            // changes the list item link expand
                            // to the minus value and adds the open
                            // class to the list item link
                            listItemLinkExpand.html("+");
                            element.removeClass("open");
                        }
                        // otherwise the element is closed
                        // need to open the list
                        else {
                            // retrieves all the sub lists from the parents list
                            var subLists = jQuery("> li > .list", parentList);

                            // retrieves the sub lists item, links and
                            // links expands
                            var subListsItems = subLists.parent("li");
                            var subListsLinks = jQuery("a", subListsItems);
                            var subListsLinkExpands = jQuery(".link-expand",
                                    subListsLinks);

                            // hides the the lists (sub list)
                            subLists.slideUp(350);

                            // changes the sub lists links expand
                            // to the plus value and adds the open
                            // class to the sub lists expands link
                            subListsLinks.removeClass("open");
                            subListsLinkExpands.html("+");

                            // shows the the list (sub list)
                            list.slideDown(350);

                            // changes the list item link expand
                            // to the minus value and adds the open
                            // class to the list item link
                            listItemLinkExpand.html("-");
                            listItemLink.addClass("open");
                        }
                    });
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery menu link plugin, this jQuery plugin provides the base infra-structure
 * for the creation of a menu link for a menu component.
 *
 * @name jquery-menu-link.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxmenulink = function(method, options) {
        // the default values for the eval
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the window and body elements
            var _window = jQuery(window);
            var _body = jQuery("body");

            // retrieves the menu to retieve the
            // menu contents
            var menu = matchedObject.parents(".menu");
            var menuContents = jQuery(".menu-contents", menu);

            // checks if the menu link click event is already
            // registerd in the body and set the variable as
            // true to avoid further registrations
            var isRegistered = _body.data("menu_link_click");
            _body.data("menu_link_click", true);

            // registers for the click in the matched object
            matchedObject.click(function(event) {
                        // retrieves the element
                        var element = jQuery(this);

                        // tries to retrieve the menu selector associated
                        // with the current menu link (this is for custom)
                        // menu references
                        var menuSelector = element.attr("data-menu");

                        // retrieves the menu to retieve the
                        // menu contents
                        var menu = menuSelector
                                ? jQuery(menuSelector)
                                : element.parents(".menu");
                        var menuButton = jQuery("> .menu-button", menu);
                        var menuContents = jQuery(
                                "> .menu-contents:not(.sub-menu)", menu);

                        // retrieves the current set of visible menus and menu
                        // contents to be able to control them
                        var _menu = jQuery(".menu.active");
                        var _menuContents = jQuery(".menu-contents:visible");

                        // checks if the menu is currently active, current
                        // visibility status is based on this flag
                        var isActive = menu.hasClass("active");

                        // iterates over each of the other menu in order to be
                        // able to inactivate their owners
                        _menu.each(function(index, element) {
                                    var _element = jQuery(this);
                                    var owner = _element.data("owner");
                                    owner && owner.removeClass("active");
                                });

                        // removes the active class from the visible menus
                        // and hides the menu contents
                        _menu.removeClass("active");
                        _menuContents.hide();
                        _menuContents.triggerHandler("hidden");

                        // in case the menu already has the active class
                        // (the menu is shown)
                        if (isActive) {
                            // tries to retrieve the current owner of the menu
                            // contents and in case it exists removes the active
                            // class from it
                            var owner = menu.data("owner");
                            owner && owner.removeClass("active");

                            // triggers the hide event handler on the
                            // on the menu and removes the active class
                            // from the same menu
                            menu.triggerHandler("hide");
                            menu.removeClass("active");

                            // hides the menu contents
                            menuContents.hide();
                            menuContents.triggerHandler("hidden");

                            // triggers the hidden event handler on the
                            // on the menu
                            menu.triggerHandler("hidden");
                        }
                        // otherwise the menu contents are probably hidden
                        else {
                            // sets the owner of the menu contents as the current
                            // element as it was the responsible for the show of
                            // the contents
                            menu.data("owner", element);
                            element.addClass("active");

                            // triggers the show event handler on the
                            // on the menu and adds the active class
                            // into the same menu
                            menu.triggerHandler("show");
                            menu.addClass("active");

                            // shows the menu contents an then
                            // repositions them in the display
                            menuContents.show();
                            menuContents.triggerHandler("shown");
                            _reposition(menu, menuButton, element);

                            // triggers the shown event handler on the
                            // on the menu
                            menu.triggerHandler("shown");
                        }

                        // stops the event propagation (avoids
                        // extra problems)
                        event.stopPropagation();
                    });

            // registers for the double click in the matched object
            matchedObject.dblclick(function(event) {
                        // stops the event propagation (avoids
                        // extra problems)
                        event.stopPropagation();
                    });

            // registers for the click event in the menu contents
            menuContents.click(function(event) {
                        // stops the event propagation (avoids
                        // unecessary closing of the window)
                        event.stopPropagation();
                    });

            // register for the click event in the body,
            // only in case the registration was not already made
            !isRegistered && _body.click(function(event) {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the menu to retieve the
                        // menu contents
                        var menu = jQuery(".menu.active", element);
                        var menuContents = jQuery(".menu-contents:visible",
                                menu);

                        // checks if the current menu is of type drop
                        // (it must be removed and not hidden)
                        var isDrop = menu.hasClass("drop-menu");

                        // in case the current menu is of type drop
                        // (must be removed)
                        if (isDrop) {
                            // removes the menu from the environment
                            menu.remove();
                        }
                        // otherwise the normal behavior applies (hidding)
                        else {
                            // tries to retrieve the current owner of the menu
                            // contents and in case it exists removes the active
                            // class from it
                            var owner = menu.data("owner");
                            owner && owner.removeClass("active");

                            // removes the active class from the manu and
                            // then hides the menu contents
                            menu.removeClass("active");
                            menuContents.hide();
                            menuContents.triggerHandler("hidden");
                        }
                    });

            // register for the right click event in the body,
            // only in case the registration was not already made
            !isRegistered && _window.resize(function() {
                        // retrieves the currently active drop menus
                        // to be able to remove them
                        var menu = jQuery(".drop-menu.active");

                        // removes the (drop) menu
                        menu.remove();
                    });

            !isRegistered && _window.scroll(function() {
                        // retrieves the currently active drop menus
                        // to be able to remove them
                        var menu = jQuery(".drop-menu.active");

                        // removes the (drop) menu
                        menu.remove();
                    });
        };

        /**
         * Repositions the given menu element in order to be at the right of the
         * menu link.
         *
         * @param {Element}
         *            menu The menu to be repositioned.
         * @param {Element}
         *            menuButton The button used in the triggering of the menu,
         *            if any.
         * @parm {Element} menuLink The link element used in the triggering of
         *       the menu, if any.
         */
        var _reposition = function(menu, menuButton, menuLink) {
            // retrieves the menu button and contents
            // for the matched object
            menuButton = menuButton || jQuery(".menu-button", menu);
            menuLink = menuLink || jQuery(".menu-link", menu);
            var menuContents = jQuery(".menu-contents", menu);

            // in case no menu link is defined it's not possible
            // to run the reposition operation, not enought information
            // to archive the objective
            if (menuLink.length == 0) {
                return;
            }

            // retrieves the various dimensions from the various elements
            // associated with the menu to be repositioned
            var buttonWidth = menuButton.outerWidth();
            var contentsWidth = menuContents.outerWidth();
            var contentsHeight = menuContents.outerHeight(true);

            // checks if the menu link is of type reference, for such cases
            // the left position will not be used and checks if the menu is
            // meant to be positioned above the menu link structure
            var isReference = menuLink.attr("data-menu");
            var isTop = menuLink.hasClass("menu-top");

            // calculates the margin to the top so that the menu is positioned
            // a bit above the top of the menu link that originated it and sets
            // it the menu contents in case it's meant that way
            var contentsMarginTop = (contentsHeight + 8) * -1;
            isTop && menuContents.css("margin-top", contentsMarginTop + "px");

            // calculates and sets the menu contents margin left, this should
            // be able to position the menu to the left of the corresponding link
            var contentsMarginLeft = ((contentsWidth - buttonWidth) - 2) * -1;
            !isReference
                    && menuContents.css("margin-left", contentsMarginLeft
                                    + "px");
        };

        // switches over the method
        switch (method) {
            case "reposition" :
                // repositions the matched object (menu)
                _reposition(matchedObject);

                // breaks the switch
                break;

            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery notification plugin, this jQuery plugin provides the base
 * infra-structure for the creation of a notification component.
 *
 * @name jquery-notification.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxnotification = function(options) {
        // the default values for the notification
        var defaults = {
            title : "Title",
            message : "Message",
            timeout : 5000,
            fadeTimeout : 500
        };

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // retrieves the title and the message
            // from the options
            var title = options["title"];
            var message = options["message"];

            // retrieves the timeout to be used in the notification
            // from the options
            var timeout = options["timeout"];
            var fadeTimeout = options["fadeTimeout"];

            // creates the message element from the html code
            var messageElement = jQuery("<div class=\"notification\">"
                    + "<p class=\"notification-title\">" + title + "</p>"
                    + "<p class=\"notification-text\">" + message + "</p>"
                    + "</div>");

            // adds message element to the matched object
            matchedObject.append(messageElement);

            // sets the timeout for hiding the notification
            setTimeout(function() {
                        // hides the message element
                        messageElement.fadeOut(fadeTimeout);
                    }, timeout);
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery overlay panel plugin, this jQuery plugin provides the base
 * infra-structure for the creation of an overlay panel component.
 *
 * @name jquery-overlay-panel.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxoverlaypanel = function(options) {
        // the default values for the plugin
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the elements in the matched object
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the vertical offset and
                        // parses it as a float
                        var offset = _element.attr("data-offset");
                        var offsetFloat = parseFloat(offset);

                        // centers the matched object with the
                        // current vertical offset in percentage
                        matchedObject.uxcenter(offsetFloat);
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the window
            var _window = jQuery(window);

            // retrieves the current "global" overlay
            var overlay = jQuery(".overlay");

            // registers for the click event on the element
            // to aovid propagation
            matchedObject.click(function(event) {
                        // stops the event propagation, no need
                        // to propagate clicks to the upper levels
                        event.stopPropagation();
                    });

            // iterates over all the elements in the matched object
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the vertical offset and
                        // parses it as a float
                        var offset = _element.attr("data-offset");
                        var offsetFloat = parseFloat(offset);

                        // retrieves the (ctrl) key and
                        // parses it as an integer
                        var key = _element.attr("data-key");
                        var keyInteger = parseInt(key);
                        var keyIsNaN = isNaN(keyInteger);

                        // registers for the click event in the element
                        _element.click(function(event) {
                                    // stops the event propagation
                                    // (avoids the faulty closing of the window)
                                    event.stopPropagation();
                                });

                        // registers for the control key combination
                        // in the global scope
                        !keyIsNaN && jQuery.uxctrl(keyInteger, function() {
                                    // checks if the element is visible
                                    var elementVisible = _element.is(":visible");

                                    // in case the element is visible
                                    if (elementVisible) {
                                        // hides the current element
                                        _hide(_element, options);
                                    }
                                    // otherwise the element must be invisible
                                    else {
                                        // shows the current element
                                        _show(_element, options);
                                    }
                                });

                        // registers the resize in the window
                        _window.resize(function(event) {
                                    // centers the current element with the
                                    // current vertical offset in percentage
                                    _element.uxcenter(offsetFloat);
                                });

                        // registers the scroll in the window
                        _window.scroll(function() {
                                    // centers the current element with the
                                    // current vertical offset in percentage
                                    _element.uxcenter(offsetFloat);
                                });

                        // registers for the click in the overlay
                        overlay.click(function() {
                                    // checks if the element is visible
                                    var elementVisible = _element.is(":visible");

                                    // in case the element is not visible
                                    if (!elementVisible) {
                                        // returns immediately
                                        return;
                                    }

                                    // hides the element
                                    _hide(_element, options);
                                });
                    });
        };

        var _show = function(matchedObject, options) {
            // retrieve eventual items of the
            // overlay panel
            var textField = jQuery(".text-field", matchedObject);

            // retrieves the overlay element and forces a resize
            // on it to ensure dimensions (ensures proper size)
            var overlay = jQuery(".overlay");
            overlay.trigger("resize");

            // shows the overlay
            overlay.fadeIn(100);

            // shows the matched object
            matchedObject.fadeIn(100);

            // focus in the text field
            textField.focus();
        };

        var _hide = function(matchedObject, options) {
            // retrieves the overlay element
            var overlay = jQuery(".overlay");

            // shows the overlay
            overlay.fadeOut(200);

            // hidrs the matched object
            matchedObject.fadeOut(200);
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery overlay search plugin, this jQuery plugin provides the base
 * infra-structure for the creation of an overlay search component.
 *
 * @name jquery-overlay-search.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxoverlaysearch = function(options) {
        // the default values for the plugin
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the text field for the matched object
            var textField = jQuery(".text-field", matchedObject);

            // registers for the key down event in the overlay
            // search text field
            textField.keydown(function(event) {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the parent overlay search
                        var overlaySearch = element.parents(".overlay-search");

                        // retrieves the key value
                        var keyValue = event.keyCode
                                ? event.keyCode
                                : event.charCode ? event.charCode : event.which;

                        // in case the escape key is pressed
                        // need to hide the overlay search
                        if (keyValue == 27) {
                            // hides the overlay search
                            _hide(overlaySearch, options);
                        }
                    });
        };

        var _hide = function(matchedObject, options) {
            // retrieves the overlay element
            var overlay = jQuery(".overlay");

            // shows the overlay
            overlay.fadeOut(200);

            // hidrs the matched object
            matchedObject.fadeOut(200);
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery overlay plugin, this jQuery plugin provides the base infra-structure
 * for the creation of an overlay component.
 *
 * @name jquery-overlay.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxoverlay = function(options) {
        // the default values for the overlay
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // resizes the overlay in the screen
            _resizeOverlay(matchedObject, options);
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the window
            var _window = jQuery(window);

            // registers the ready event in the window, avoids
            // possible initial resize problem
            _window.ready(function(event) {
                        // resizes the overlay in the screen
                        _resizeOverlay(matchedObject, options);
                    });

            // registers the laod event in the window, avoids
            // possible initial resize problem
            _window.load(function(event) {
                        // resizes the overlay in the screen
                        _resizeOverlay(matchedObject, options);
                    });

            // registers the resize in the window
            _window.resize(function(event) {
                        // resizes the overlay in the screen
                        _resizeOverlay(matchedObject, options);
                    });

            // registers for the click event so that
            // no propagation of it is done
            matchedObject.click(function(event) {
                        // stops the event propagation, no need to propagate
                        // clicks to the upper levels
                        event.stopPropagation();
                    });

            // registers for the resize event on the overlayy
            // so that the overlay may be resized in for such events
            matchedObject.bind("resize", function() {
                        // retrieves teh current element
                        var element = jQuery(this);

                        // resizes the overlay in the screen
                        _resizeOverlay(element, options);
                    });
        };

        var _resizeOverlay = function(matchedObject, options) {
            // retrieves the document and the window
            // element references
            var _document = jQuery(document);
            var _window = jQuery(window);

            // resets the dimensions of the overlay
            // to avoid problems in the document size
            matchedObject.width(0);
            matchedObject.height(0);

            // retrieves the document dimensions, in case
            // the current browser is the internet explorer
            // the window width is used (to avoid the well
            // internet explorer's overflow width bug)
            var documentWidth = jQuery.browser.msie
                    ? _window.width()
                    : _document.width();
            var documentHeight = _document.height();

            // sets the "new" matched object dimensions,
            // using the document as reference
            matchedObject.width(documentWidth);
            matchedObject.height(documentHeight);
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery panel more plugin, this jQuery plugin provides the base
 * infra-structure for the creation of a panel more component.
 *
 * @name jquery-select-list.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxpanelmore = function(options) {
        // the default values for the panel
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over each of the panel more elements
            // to construct their internal structures
            matchedObject.each(function(index, element) {
                        // retrieves the current element (panel more)
                        // and the associated more string
                        var element = jQuery(this);
                        var moreString = element.attr("data-more");

                        // wrapps the current element inside the panel more
                        // contents to be able to change the visibility
                        element.wrapInner("<div class=\"panel-more-contents\"></div>");

                        // adds the panel more action container with the
                        // button and the divider
                        element.append("<div class=\"panel-more-action\">"
                                + "<li class=\"list-more\">"
                                + "<span class=\"button\">" + moreString
                                + "</span>" + "</li>"
                                + "<li class=\"list-divider\"></li>" + "</div>");
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the more button element reference
            // from the matched object
            var moreButton = jQuery("li.list-more .button", matchedObject);

            // registers for the click event on the more
            // button to toggle the contents state
            moreButton.click(function() {
                        // retrieves the current element and uses it to retrieve the
                        // associated panel more and panel more contents
                        var element = jQuery(this);
                        var panelMore = element.parents(".panel-more");
                        var panelMoreContents = jQuery(".panel-more-contents",
                                panelMore);

                        // retrieves the string attributes from the panel
                        // more element
                        var moreString = panelMore.attr("data-more");
                        var lessString = panelMore.attr("data-less");

                        // checks if the the panel more contents is currently
                        // visible, to toggle the visibility
                        var isVisible = panelMoreContents.is(":visible");

                        // checks if the panel more contents is currently visible
                        // in such case must hide it
                        if (isVisible) {
                            // hides the panel more contents and updates
                            // the text value of the more button
                            panelMoreContents.hide();
                            element.html(moreString);
                        } else {
                            // shows the panel more contents and updates
                            // the text value of the more button
                            panelMoreContents.show();
                            element.html(lessString);
                        }
                    });
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery panel stack plugin, this jQuery plugin provides the base
 * infra-structure for the creation of a panel stack component.
 *
 * @name jquery-panel-stack.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxpanelstack = function(method, options) {
        // the default values for the panel
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // retrieves the index to be set on the initialized
            // object, in case one already exists uses it
            var index = matchedObject.data("index") || 0;

            // sets the initial index information in the panel
            // stack so that the first page is displayed and the
            // runs the stack update operation
            matchedObject.data("index", index);
            _update(matchedObject, options);
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        var _next = function(matchedObject, options) {
            // retrieves the panels associated with the
            // current stack and then counts them obtain
            // the length of the stack
            var panels = jQuery("> .panel", matchedObject);
            var panelsLength = panels.length;

            // retrieves the current index from the matched
            // object to update the current panel index
            var index = matchedObject.data("index");

            // checks if the current index overflows the
            // current count of panels
            if (index == panelsLength - 1) {
                // returns immediately
                return;
            }

            // updates the index value in the matched object
            // and runs the update function on top of the matched
            // object to update the visuals of the stack panel
            matchedObject.data("index", index + 1);
            _update(matchedObject, options);
        };

        var _previous = function(matchedObject, options) {
            // retrieves the current index from the matched
            // object to update the current panel index
            var index = matchedObject.data("index");

            // checks if the current index is zero, in case
            // it's, not possible to go to a previous position
            if (index == 0) {
                // returns immediately
                return;
            }

            // updates the index value in the matched object
            // and runs the update function on top of the matched
            // object to update the visuals of the stack panel
            matchedObject.data("index", index - 1);
            _update(matchedObject, options);
        };

        var _set = function(matchedObject, options) {
            // retrieves the index value to be used to update
            // the stack panel index (argument)
            var index = options["index"] ? options["index"] : 0;

            // updates the index value in the matched object
            // and runs the update function on top of the matched
            // object to update the visuals of the stack panel
            matchedObject.data("index", index);
            _update(matchedObject, options);
        };

        var _update = function(matchedObject, options) {
            // retrieves the current index information, to know
            // which panel should be displayed
            var index = matchedObject.data("index");

            // retrieves the panels associated with the
            // current stack
            var panels = jQuery("> .panel", matchedObject);

            // hides all the panels to allow the first one
            // to be displayed on top of all
            panels.hide();

            // retrieves the current panel in the to be shown
            // and shows it in the current context, note that
            // the visibility attribute is also set
            var currentPanel = jQuery("> .panel:nth(" + index + ")",
                    matchedObject);
            currentPanel.show();
            currentPanel.css("visibility", "visible");
        };

        // switches over the method
        switch (method) {
            case "next" :
                // increments the panel to the matched object
                _next(matchedObject, options);

                // breaks the switch
                break;

            case "previous" :
                // decrements the panel from the matched object
                _previous(matchedObject, options);

                // breaks the switch
                break;

            case "set" :
                // sets the panel from the matched object
                _set(matchedObject, options);

                // breaks the switch
                break;

            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery panel plugin, this jQuery plugin provides the base infra-structure for
 * the creation of a panel component.
 *
 * @name jquery-panel.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxpanel = function(method, options) {
        // the default values for the panel
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // creates the panels (count) value
            var panels = 0;

            // starts the panels list in the matched object
            matchedObject.data("panels", panels);
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        var _push = function(matchedObject, options) {
            // retrieves the "new" panel to be pushed
            var panel = options["panel"];

            // retrieves the panels list
            var panels = matchedObject.data("panels");

            // composes the panel with the panel item class
            var panel = "<div class=\"panel-item\">" + panel + "</div>";

            // retrieves the last panel and hides it
            var lastPanel = matchedObject.children(".panel-item:last-child");
            lastPanel.hide();

            // adds the "new" panel in the matched object
            matchedObject.append(panel);

            // retrieves the "new" last panel and applies the ux
            // components to it
            var lastPanel = matchedObject.children(".panel-item:last-child");
            lastPanel.uxapply();

            // increments the number of panels and saves
            // the value in the matched object
            panels++;
            matchedObject.data("panels", panels);
        };

        var _pop = function(matchedObject, options) {
            // retrieves the panels list
            var panels = matchedObject.data("panels");

            // retrieves the last panel and removes it
            var lastPanel = matchedObject.children(".panel-item:last-child");
            lastPanel.remove();

            // retrieves the "new" last panel and shows it
            var lastPanel = matchedObject.children(".panel-item:last-child");
            lastPanel.show();

            // decrements the number of panels and saves
            // the value in the matched object
            panels--;
            matchedObject.data("panels", panels);
        };

        // switches over the method
        switch (method) {
            case "push" :
                // pushes the panel to the matched object
                _push(matchedObject, options);

                // breaks the switch
                break;

            case "pop" :
                // pops a panel from the matched object
                _pop(matchedObject, options);

                // breaks the switch
                break;

            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxpasswordmeter = function(options) {
        // the various regex values for password
        // strength validation
        var NUMBER_REGEX = new RegExp("\\d+");
        var LETTER_LOWER_REGEX = new RegExp("[a-z]");
        var LETTER_UPPER_REGEX = new RegExp("[A-Z]");
        var SPECIAL_CHARACTER_REGEX = new RegExp("[.[!,@,#,$,%,^,&,*,?,_,~,-,£,(,)]");

        // the default values for the name change
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the elements in the matched object
            matchedObject.each(function(index, element) {
                // retrieves the element reference
                var _element = jQuery(element);

                // adds some html to the password meter
                _element.append("<div class=\"password-meter-contents level-0\"></div>")

                // sets the initial data in the element
                _element.data("level", 0);
            });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // iterates over all the elements in the matched object
            matchedObject.each(function(index, element) {
                // retrieves the element reference
                var _element = jQuery(element);

                // retrieves the password meter contents
                var passwordMeterContents = jQuery(".password-meter-contents",
                        _element);

                // retrieves the target reference and then
                // retrieves the target element
                var target = _element.attr("data-target");
                var targetElement = jQuery(target);

                // binds the target element reference to the value change
                // event (to be notified about text changes)
                targetElement.bind("value_change", function() {
                    // retrieves the current target element value
                    var targetElementValue = targetElement.attr("data-value");

                    // retrieves the current level
                    var level = _element.data("level");

                    // calculates the password strength for the current
                    // target element value
                    var passwordStrength = _passwordStrength(targetElementValue);

                    // changes the current level class
                    passwordMeterContents.removeClass("level-" + String(level));
                    passwordMeterContents.addClass("level-"
                            + String(passwordStrength));

                    // updates the level value with the password
                    // strength value
                    _element.data("level", passwordStrength);
                });

            });
        };

        /**
         * Calculates the "theoretical" password strength from the given
         * password. The returned value is an integer ranging from the lowest
         * zero value (unsafest) to a limit value (safest).
         *
         * @param {String}
         *            password The password to be measured for strength.
         * @return {Integer} An integer describing the strength level of the
         *         given password.
         */
        var _passwordStrength = function(password) {
            // starts the strength value
            // counter to the minimum value (zero)
            var strengthValue = 0;

            // retrieves the length of the password
            var passwordLength = password.length;

            // in case the password is not set
            // (empty password)
            if (passwordLength < 1) {
                // returns the strength value
                // immediately
                return strengthValue;
            }

            // increments the strength value
            strengthValue++;

            // in case the password length is less
            // than a minimum of four
            if (passwordLength < 4) {
                // returns the strength value
                // immediately
                return strengthValue;
            }

            // in case the password length is more
            // or equal to eight
            if (passwordLength >= 8) {
                // increments the strength value
                strengthValue++
            }

            // in case the password length is more
            // or equal to eleven
            if (passwordLength >= 11) {
                // increments the strength value
                strengthValue++;
            }

            // in case the password contains at least
            // a number in it
            if (NUMBER_REGEX.test(password)) {
                // increments the strength value
                strengthValue++;
            }

            // in case the password contains both lower case and
            // upper case letters
            if (LETTER_LOWER_REGEX.test(password)
                    && LETTER_UPPER_REGEX.test(password)) {
                // increments the strength value
                strengthValue++;
            }

            // in case the password contains special characters
            // in it (extra security)
            if (SPECIAL_CHARACTER_REGEX.test(password)) {
                // increments the strength value
                strengthValue++;
            }

            // returns the strength value
            return strengthValue;
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxprogressbar = function(method, options) {
        // the default values for the progress bar
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // retrieves the state of the right bar flag
            var rightBar = matchedObject.attr("data-right_bar");

            // adds the progress bar contents to the matched object
            matchedObject.append("<span class=\"progress-bar-bar bar-left\">"
                    + "<span class=\"progress-bar-percentage\">0%</span>"
                    + "</span>");

            // in case the right bar flag is set adds the second progress
            // bar to the matched object
            rightBar
                    && matchedObject.append("<span class=\"progress-bar-bar bar-right\">"
                            + "<span class=\"progress-bar-percentage\">0%</span>"
                            + "</span>");

            // tries to retrieve the percentage and in case it
            // exists changes it
            var percentage = matchedObject.attr("data-percentage");
            percentage && _change(matchedObject, {
                        percentage : percentage
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        /**
         * Changes the current (pecentage) value for the progress bar component.
         *
         * @param {Element}
         *            matchedObject The reference to the current matched object.
         * @param {Map}
         *            options The map of options to be used.
         */
        var _change = function(matchedObject, options) {
            // retrieves the percentage value from the options
            var percentage = options["percentage"] ? options["percentage"] : 0;

            // calculates the remaining percentage for the right
            // handed bar
            var percentageRemaining = 100.0 - percentage;

            // retrieves the progress bar bars
            var progressBarBarLeft = jQuery(".progress-bar-bar.bar-left",
                    matchedObject);
            var progressBarBarRight = jQuery(".progress-bar-bar.bar-right",
                    matchedObject);

            // retrieves the progress bar percentages
            var progressBarPercentageLeft = jQuery(
                    ".progress-bar-bar.bar-left .progress-bar-percentage",
                    matchedObject);
            var progressBarPercentageRight = jQuery(
                    ".progress-bar-bar.bar-right .progress-bar-percentage",
                    matchedObject);

            // updates both the progress bar bar and percentage
            progressBarBarLeft.css("width", percentage + "%");
            progressBarBarRight.css("width", percentageRemaining + "%");
            progressBarPercentageLeft.html(percentage + "%");
            progressBarPercentageRight.html(percentageRemaining + "%");
        };

        // switches over the method
        switch (method) {
            case "change" :
                // initializes the plugin
                _change(matchedObject, options);

                // breaks the switch
                break;

            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery radio field plugin, this jQuery plugin provides the base
 * infra-structure for the creation of a radio field component.
 *
 * @name jquery-radio-field.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function(jQuery) {
    jQuery.fn.uxradiofield = function(options) {
        // the default values for the radio field
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the matched object
            matchedObject.each(function(index, element) {
                        // retrieves the element refence
                        var _element = jQuery(element);
                        _update(_element, options);
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the (possible) next radio field label
            // to register it for checking
            var radioFieldLabel = matchedObject.next(".radio-field-label");

            // registers the radio field label for the click
            // event to check the associated radio field
            radioFieldLabel.click(function() {
                        // retrieves the current element and uses it to retrieve
                        // the previous radio field
                        var element = jQuery(this);
                        var radioField = element.prev(".radio-field");

                        // checks the "just" retrieved radio field, this should
                        // enable its boolean value
                        _check(radioField, options);
                    });
        };

        var _check = function(matchedObject, options) {
            // checks the current matched object by setting
            // the its checked attribute
            matchedObject.attr("checked", true);
        };

        var _update = function(matchedObject, options) {
            // retrives the value and the checked value
            var value = matchedObject.attr("value");
            var checked = matchedObject.attr("data-checked");

            // in case the checked value is the same
            // as the value (current option)
            if (checked == value) {
                // sets the element as checked
                matchedObject.attr("checked", true);
            }
            // otherwise it's not the selected element
            else {
                // sets the element as unchecked
                matchedObject.attr("checked", false);
            }
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery scroll list plugin, this jQuery plugin provides the base
 * infra-structure for the creation of a scroll list component.
 *
 * @name jquery-scroll-list.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxscrolllist = function(options) {
        // the default values for the data query json
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // wraps the matched object arround a scroll list container and then
            // retrieves it and adds the previous and next scroll buttons
            matchedObject.wrap("<div class=\"scroll-list-container\"></div>");
            var scrollListContainer = matchedObject.parents(".scroll-list-container");
            scrollListContainer.prepend("<div class=\"scroll-previous\"></div>"
                    + "<div class=\"scroll-next\"></div>");

            matchedObject.each(function(index, element) {
                // retrieves the current element and uses it to retrieve the
                // parent scroll list container and the previous and next buttons
                var _element = jQuery(this);
                var scrollListContainer = _element.parents(".scroll-list-container");
                var scrollPrevious = jQuery(".scroll-previous",
                        scrollListContainer);
                var scrollNext = jQuery(".scroll-next", scrollListContainer);

                // retrieves the various margin value from the element
                // to update the scoll list container with these elements
                var marginLeft = _element.css("margin-left");
                var marginRight = _element.css("margin-right");
                var marginTop = _element.css("margin-top");
                var marginBottom = _element.css("margin-bottom");

                // updates the scroll list container with the margin values
                // extracted from the element and then resets the element's
                // margin value to the zero value
                scrollListContainer.css("margin-left", marginLeft);
                scrollListContainer.css("margin-right", marginRight);
                scrollListContainer.css("margin-top", marginTop);
                scrollListContainer.css("margin-bottom", marginBottom);
                _element.css("margin", "0px 0px 0px 0px");

                // retrieves the complete set of children of the
                // element that are not clear elements, then counts them
                var children = jQuery("> *:not(.clear)", _element);
                var count = children.length;

                // retrieves the first child and uses it to calculate
                // the complete width for the children
                var first = jQuery(children[0]);
                var width = first.outerWidth(true) * count;

                // calculates the complete scroll witdth to check if the
                // scroll is required in case it's not hides the previous
                // and next operator buttons
                var scrollWidth = scrollListContainer.width();
                var isScrolled = scrollWidth < width;
                if (!isScrolled) {
                    scrollPrevious.hide();
                    scrollNext.hide();
                }

                // updates the element with with the complete width for its
                // elements (required width)
                _element.width(width);
            });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrievs the parent scroll list container and uses
            // it to retrieve the scroll previius and next buttons
            var scrollListContainer = matchedObject.parents(".scroll-list-container");
            var scrollPrevious = jQuery(".scroll-previous", scrollListContainer);
            var scrollNext = jQuery(".scroll-next", scrollListContainer);

            scrollPrevious.click(function() {
                // retrieves the current element and the parent
                // scroll list container to be used in the scroll
                // to the right operation
                var element = jQuery(this);
                var scrollListContainer = element.parents(".scroll-list-container");

                // retrieves the with of the scroll list container to
                // be used in the scroll operation
                var scrollWidth = scrollListContainer.width();

                // animates the scroll right operation using the
                // default animation mechanisms
                scrollListContainer.animate({
                            scrollLeft : "-=" + scrollWidth
                        }, 400);
            });

            scrollNext.click(function() {
                // retrieves the current element and the parent
                // scroll list container to be used in the scroll
                // to the left operation
                var element = jQuery(this);
                var scrollListContainer = element.parents(".scroll-list-container");

                // retrieves the with of the scroll list container to
                // be used in the scroll operation
                var scrollWidth = scrollListContainer.width();

                // animates the scroll left operation using the
                // default animation mechanisms
                scrollListContainer.animate({
                            scrollLeft : "+=" + scrollWidth
                        }, 400);
            });
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery select field plugin, this jQuery plugin provides the base
 * infra-structure for the creation of a select field component.
 *
 * @name jquery-select-field.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function(jQuery) {
    jQuery.fn.uxselectfield = function(method, options) {
        // the default values for the select field
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the text field and the data source
            var textField = jQuery(".text-field", matchedObject);
            var dataSource = jQuery("> .data-source", matchedObject);

            // registers for the change in the text field
            // (select) this occurs when a new option is selected
            textField.change(function() {
                        // retrieves the current element and updates
                        // the current values
                        var element = jQuery(this);
                        _update(element);
                    });

            // iterates over all the matched objects
            matchedObject.each(function(index, element) {
                // retrieves the element reference and the
                // associated data source
                var _element = jQuery(element);
                var textField = jQuery(".text-field", element);
                var dataSource = jQuery("> .data-source", element);

                // retrieves the name of the value to be used for
                // the comparision and then retrieves the name of
                // the attribute to be used in the display
                var value = _element.attr("data-value");
                var display = _element.attr("data-display") || value;

                // binds the data source to the data ready event
                // in order to perform the initial query
                dataSource.bind("data_ready", function() {
                    // runs the initial data query in the data source to
                    // set the options in the select field
                    dataSource.uxdataquery({
                                filterString : "",
                                filterAttributes : [value]
                            }, function(validItems, moreItems) {
                                // in case there are no valid items
                                // returns immediately nothing to be done
                                if (validItems.length == 0) {
                                    // returns immediately
                                    return;
                                }

                                // iterates over all the valid items to create the
                                // proper options and set them in the text field
                                for (var index = 0; index < validItems.length; index++) {
                                    // retrieves the current valid item and then creates
                                    // the option and set the proper data item
                                    var validItem = validItems[index];
                                    var option = jQuery("<option>"
                                            + validItem[display] + "</option>");
                                    option.data("item", validItem);

                                    // adds the option to the text field (select)
                                    textField.append(option);
                                }

                                // updates the current text field setting the proper
                                // value in the template item (render value)
                                _update(textField, options);
                            });
                });
            });
        };

        var _update = function(element, options) {
            // retrieves the select field associated with the
            // current element and then retrieves the template
            // element to be able to render a new element
            var selectField = element.parents(".select-field");
            var template = jQuery(".template", selectField);

            // retrieves the currently selected option element
            // then retrieves its item logical value
            var option = jQuery(":selected", element);
            var item = option.data("item");

            // applies the template to the template (item)
            // retrieving the resulting template item then
            // adds the element class to it in order to be
            // able to identify it
            var templateItem = template.uxtemplate(item);
            templateItem.addClass("element");

            // retrieves the current set of elements present
            // in the select field and removes them, then adds
            // the new item (template item) to the select field
            var element = jQuery(".element", selectField);
            element.remove();
            selectField.append(templateItem);
        };

        // switches over the method
        switch (method) {
            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery select list plugin, this jQuery plugin provides the base
 * infra-structure for the creation of a select list component.
 *
 * @name jquery-select-list.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxselectlist = function(method, options) {
        // the default values for the panel
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over each of the matched object to arrange
            // them according to their options
            matchedObject.each(function(index, element) {
                        // retrieves the current element and uses it
                        // to update ths current arrange structure
                        var _element = jQuery(this);
                        _update(_element, options);
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the various items that exist
            // in the select list
            var listItems = jQuery("li", matchedObject);

            // registers for the items changed event on the matched
            // object to update the visuals of the new elements
            matchedObject.bind("items_changed", function(event) {
                        // retrieves the current element and runs the
                        // visuals update operation on them
                        var element = jQuery(this);
                        _update(element, options);

                        // stops the event propagation to avoid
                        // possible loops in the handling
                        event.stopPropagation();
                    });

            // registers for the click event on the list items
            // to change their selection states
            listItems.click(function(event) {
                // retrieves the current element reference and uses
                // it to retrive the current select list
                var element = jQuery(this);
                var selectList = element.parent(".select-list");

                // checks if the element is currently movinng in that
                // case the click event must be ignored (no focus)
                var isMoving = element.hasClass("moving");
                if (isMoving) {
                    return;
                }

                if (event.ctrlKey) {
                    var action = "change";
                } else if (event.shiftKey) {
                    var action = "contiguous";
                } else {
                    var action = "normal";
                }

                // switches over the action to be performed
                // on the current item selection state
                switch (action) {
                    case "change" :
                        // checks if the element is currently selected and
                        // adds or removes the selected class from it for
                        // each case (complementary)
                        var isSelected = element.hasClass("selected");
                        isSelected
                                ? element.removeClass("selected")
                                : element.addClass("selected");

                        // sets the previous element in the select list
                        // useful for later referral
                        selectList.data("previous", element);

                        // breaks the switch
                        break;

                    case "contiguous" :
                        // retrieves the previous selected element and checks
                        // if it contains the selected, defaulting to null
                        // in case it does not contains such class
                        var previous = selectList.data("previous");
                        previous = previous.hasClass("selected")
                                ? previous
                                : null;

                        // retrieves the base index from the previous element
                        // (in case it's set) and retrieves the target index
                        var baseIndex = previous ? previous.index() : 0;
                        var targetIndex = element.index();

                        // in case the target index is greater than the base index the
                        // index values must be exchanged between
                        if (targetIndex < baseIndex) {
                            var temporary = targetIndex;
                            targetIndex = baseIndex;
                            baseIndex = temporary;
                        }

                        // retrieves the currently selected list items
                        var listItems = jQuery("li.selected", selectList);
                        listItems.removeClass("selected");

                        // iterates over the range of index values (base and target)
                        // to be able to select all the elements
                        for (index = baseIndex; index < targetIndex + 1; index++) {
                            // retrieves the current element in the select list and
                            // adds the selected class to it
                            var _element = jQuery(":nth-child(" + (index + 1)
                                            + ")", selectList);
                            _element.addClass("selected");
                        }

                        // breaks the switch
                        break;

                    case "normal" :
                        // retrieves the currently selected list items
                        var listItems = jQuery("li.selected", selectList);

                        // removes the selected class from all the list items
                        // and then adds then selects the current element
                        listItems.removeClass("selected");
                        element.addClass("selected");

                        // sets the previous element in the select list
                        // useful for later referral
                        selectList.data("previous", element);

                        // breaks the switch
                        break;
                }
            });

            // registers for the double click event on the list itesm
            // to trigger the select action
            listItems.dblclick(function(event) {
                        // retrieves the current element and then uses
                        // it to retrieve the select list
                        var element = jQuery(this);
                        var selectList = element.parent(".select-list");

                        // triggers the select event in the element
                        element.trigger("selected", [element]);
                    });

            // iterates over each of the matched objects
            // to register them agains the submission of the form
            matchedObject.each(function(index, element) {
                // retrieves the current element for iteration
                var _element = jQuery(element);

                // retrieves the containing form
                var parentForm = _element.parents("form");

                // registers for the submit event
                parentForm.submit(function() {
                            // retrieves the name of the element, this value is
                            // going to be used in the input element to be create
                            // in case the name does not exists no submission of
                            // values is created (returns immediately)
                            var elementName = _element.attr("name");
                            if (!elementName) {
                                return;
                            }

                            // removes all the input elements contained inside the
                            // current select list (avoid duplicated submission)
                            _element.remove("input");

                            // retrieves the complete set of elements in the current
                            // select list, this values are going to be used to create
                            // the series of form input elements
                            var listItems = jQuery("li", _element);

                            // iterates over all the element in the list items to
                            // creates the associated input values
                            for (var index = 0; index < listItems.length; index++) {
                                // retrieves the current list items in iteration
                                // and retrieves the value to be used as data value
                                // defaulting to the html value in case none is provided
                                var listItem = jQuery(listItems[index]);
                                var dataValue = listItem.attr("data-value");
                                var htmlValue = listItem.html();
                                dataValue = dataValue ? dataValue : htmlValue;

                                // adds the input element representing the list item
                                // to the list item itself
                                _element.append("<input type=\"hidden\" name=\""
                                        + elementName
                                        + "\" value=\""
                                        + dataValue + "\" />");
                            }
                        });
            });
        };

        var _update = function(matchedObject, options) {
            // retrieves the current element in iteration
            // to be used to add the order element
            var _element = matchedObject;

            // retrieves the value for the order attribute
            // in case no order is set returns immediately
            var order = _element.attr("data-order");
            if (!order) {
                // retrieves the complete set of list items that
                // are considered part of a order structure then
                // retrieves it order icons
                var listItems = jQuery("li.order", _element);
                var orderIcons = jQuery(".order-icon", listItems);

                // removes the order class from the list items and
                // removes the order icons elements
                listItems.removeClass("order");
                orderIcons.remove();

                // returns immediately nothing more to be done
                return;
            }

            // creates the element to be used to sort the elements
            // of the select list
            var orderIcon = jQuery("<div class=\"order-icon\"></div>");

            // retrieves the set of list items in the select
            // list and adds the order icon to them
            var listItems = jQuery("li:not(.order)", _element);
            listItems.prepend(orderIcon);

            // adds the order class to the list items to "notify"
            // of the order visuals intention
            listItems.addClass("order");

            // retrieves the complete set of order icons currently
            // listed under the list items
            var orderIcons = jQuery(".order-icon", listItems);

            // registers for the mouse down event in the order icons
            // to be used for the sorting of the elements
            orderIcons.mousedown(function() {
                // retrieves the current element reference and uses
                // it to retrive the current select list
                var orderIcon = jQuery(this);
                var element = orderIcon.parent("li");
                var selectList = element.parent(".select-list");

                // tries to retrieve the order attribute from the
                // select list in case it's not set ignore the behaviour
                var order = selectList.attr("data-order") || false;
                if (!order) {
                    return;
                }

                // retrieves the reference to the body
                // element for event registration
                var _body = jQuery("body");

                // retrieves the current with for the select
                // list to be used for the contruction of the
                // cloned element
                var selectListWidth = selectList.width();

                // clones the current element and sets it
                // up by adding the clone class then updates its
                // with to reflect the one in the element
                var cloned = element.clone(true);
                cloned.addClass("clone");
                cloned.width(selectListWidth - 12);

                // adds the cloned element to the select list
                // to make its position relative to the select list
                selectList.prepend(cloned);

                // retrieves the top an left position of the element
                // and uses them to position the cloned element
                var elementTop = element.offset().top;
                var elementLeft = element.offset().left;
                cloned.css("top", elementTop + "px");
                cloned.css("left", elementLeft + "px");

                // adds the no select and moving classes to the body
                // element to avoid the selection of any input element
                // and the moving cursor display
                _body.addClass("no-select");
                _body.addClass("do-moving");

                var move = function(event) {
                    // retrives the previous data from the select list
                    // and uses it to set the mouse position
                    var previousOffsetY = selectList.data("offset_y");
                    var previousY = selectList.data("mouse_y");
                    var previousX = selectList.data("mouse_x");
                    var mouseY = event.pageY || previousY;
                    var mouseX = event.pageX || previousX;

                    // retrieves a series of size and position information
                    // in the select list element
                    var selectListHeight = selectList.outerHeight();
                    var selectListTop = selectList.offset().top;
                    var selectListScrollTop = selectList.scrollTop();

                    // retrieves the height of the cloned element
                    var clonedHeight = cloned.outerHeight();

                    // calculates the target y (vertical) position
                    // for the currenly selected element
                    var targetY = mouseY - (clonedHeight / 2);

                    // checks if the target position is overflowing
                    // the top position of the select list
                    if (targetY < selectListTop) {
                        targetY = selectListTop;
                    }
                    // checks if the target position is overflowing
                    // the bottom position of the select list
                    else if (targetY + clonedHeight > selectListTop
                            + selectListHeight) {
                        targetY = selectListTop + selectListHeight
                                - clonedHeight;
                    }

                    // calculates the offset position vertically and uses
                    // it to calculate the index position for the element
                    var offsetY = targetY + selectListScrollTop - selectListTop;
                    var _index = Math.floor(offsetY / clonedHeight);

                    // retrieves the complete set of list items, excluding
                    // the cloned element (not part of the set) and then
                    // retrieves the length of that set
                    var listItems = jQuery("li:not(.clone)", selectList);
                    var numberItems = listItems.length;

                    // normalizes the index value, limiting its range
                    // to the current number of items in the set
                    _index = _index < numberItems ? _index : numberItems - 1;

                    // retrieves the currently targeted list element
                    var listElement = jQuery("li:nth-child(" + (_index + 2)
                                    + ")", selectList);

                    // checks if the current index position is
                    // valid (new position) taking into account
                    // the direction of the movement then in case
                    // it's valid executes the position change
                    var isValid = offsetY > previousOffsetY
                            ? _index + 1 != element.index()
                            : _index + 2 != element.index();
                    isValid && listElement[0] != element[0]
                            && listElement.after(element)
                            && selectList.trigger("order_changed");
                    offsetY == 0 && listElement[0] != element[0]
                            && cloned.after(element)
                            && selectList.trigger("order_changed");

                    // updates the top position of the cloned element
                    // to position it
                    cloned.css("top", targetY + "px");

                    // updates the various data values of the select
                    // list to be used in the next iteration
                    selectList.data("offset_y", offsetY);
                    selectList.data("mouse_y", mouseY);
                    selectList.data("mouse_x", mouseX);
                };

                var remove = function() {
                    // retrieves the items that are consideres to be
                    // cloned elements and removes (no more usage)
                    var cloned = jQuery("li.clone", selectList);
                    cloned.remove();

                    // removes the moving class from the element
                    element.removeClass("moving");

                    // removes the no select from the body element
                    // allowing selection on the body
                    _body.removeClass("no-select");
                    _body.removeClass("do-moving");

                    // unbinds the existing event handlers associated
                    // with the current select list
                    _body.unbind("mouseup", remove);
                    _body.unbind("mousemove", move);
                    selectList.unbind("scroll", move);
                };

                // registers both the remove and the move operation
                // functions for the mouse up and the mouse move events
                _body.mouseup(remove);
                _body.mousemove(move);

                // registers for the scroll event in the select list so
                // that it's possible to handle the movement of the select
                // list as the movement of the mouse dragging
                selectList.scroll(move);

                // adds the moving class to the element
                element.addClass("moving");
            });
        };

        // switches over the method
        switch (method) {
            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery slider bar plugin, this jQuery plugin provides the base
 * infra-structure for the creation of a slider bar component.
 *
 * @name jquery-slider-bar.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxsliderbar = function(method, options) {
        // the default values for the panel
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        // switches over the method
        switch (method) {
            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery slider plugin, this jQuery plugin provides the base infra-structure
 * for the creation of a slider component.
 *
 * @name jquery-slider.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function(jQuery) {
    jQuery.fn.uxslider = function(method, options) {
        // the default values for the text field
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // wraps the slider contents structure
            matchedObject.wrapInner("<div class=\"slider-contents\"></div>");

            // retrieves the first slider panel
            var firstSliderPanel = jQuery(".slider-panel:first-child",
                    matchedObject);

            // adds the active class to the first slider panel
            firstSliderPanel.addClass("active");

            // sets the initial data attributes
            matchedObject.data("lock", false);
            matchedObject.data("offsetLeft", 0);

            // resizes the slider (matched object) dimensions
            _resize(matchedObject, options);

            // updates the slider (matched object) position
            _update(matchedObject, options);
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the document (element)
            var _document = jQuery(document);

            // retrieves the window
            var _window = jQuery(window);

            // retrieves the slider panel arows
            // from the matched object
            var sliderPanelArrowNext = jQuery(".slider-panel-arrow-next",
                    matchedObject);
            var sliderPanelArrowPrevious = jQuery(
                    ".slider-panel-arrow-previous", matchedObject);

            // registers for the click event in the slide panel
            // arrow next
            sliderPanelArrowNext.click(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the current associated slider panel
                        // and checks if it's currently active
                        var sliderPanel = element.parents(".slider-panel");
                        var isSliderPanelActive = sliderPanel.hasClass("active");

                        // in case the current slider panel
                        // is not active
                        if (!isSliderPanelActive) {
                            // returns immediately
                            return;
                        }

                        // retrieves the slider and the slider contents
                        var slider = element.parents(".slider");

                        // moves to the next element
                        _moveNext(slider, options);
                    });

            // registers for the click event in the slider panel
            // arrow previous
            sliderPanelArrowPrevious.click(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the current associated slider panel
                        // and checks if it's currently active
                        var sliderPanel = element.parents(".slider-panel");
                        var isSliderPanelActive = sliderPanel.hasClass("active");

                        // in case the current slider panel
                        // is not active
                        if (!isSliderPanelActive) {
                            // returns immediately
                            return;
                        }

                        // retrieves the slider and the slider contents
                        var slider = element.parents(".slider");

                        // moves to the previous element
                        _movePrevious(slider, options);
                    });

            // registers for the key press in the document
            _document.keypress(function(event) {
                        // retrieves the key value
                        var keyValue = event.keyCode
                                ? event.keyCode
                                : event.charCode ? event.charCode : event.which;

                        // switches over the key value
                        switch (keyValue) {
                            case 37 :
                                // moves to the previous element
                                _movePrevious(matchedObject, options);

                                // breaks the switch
                                break;

                            case 39 :
                                // moves to the next element
                                _moveNext(matchedObject, options);

                                // breaks the switch
                                break;
                        }
                    });

            // registers the resize in the window
            _window.resize(function(event) {
                        // updates the slider
                        _update(matchedObject, options);
                    });
        };

        var _show = function(matchedObject, options) {
            // retrieves the overlay element
            var overlay = jQuery(".overlay");

            // shows the overlay
            overlay.fadeIn(250);

            // shows the matched object
            matchedObject.fadeIn(250);
        };

        var _hide = function(matchedObject, options) {
            // retrieves the overlay element
            var overlay = jQuery(".overlay");

            // hides the overlay
            overlay.fadeOut(250);

            // hides the matched object
            matchedObject.fadeOut(250);
        };

        var _moveNext = function(matchedObject, options) {
            // retrieves the slider and the slider contents
            var slider = matchedObject;
            var sliderContents = jQuery(".slider-contents", matchedObject);

            // checks if the slider is visible
            var sliderVisible = slider.is(":visible");

            // in case the slider is not visible
            if (!sliderVisible) {
                // returns immediately
                return;
            }

            // retrieves the slider attributes
            var lock = slider.data("lock");
            var offsetLeft = slider.data("offsetLeft");

            // in case the lock attribute is set
            // (animation still pending)
            if (lock) {
                // returns immediately
                return;
            }

            // retrieves the currently active slider panel
            // and then retrieves its width
            var sliderPanel = jQuery(".slider-panel.active", matchedObject);
            var sliderPanelWidth = sliderPanel.outerWidth(true);

            // retrieves the next slider panel
            var nextSliderPanel = sliderPanel.next();

            // in case there are no more items to the
            // "right" index is maximum
            if (nextSliderPanel.length == 0) {
                // returns immediately
                return;
            }

            // retrieves the current margin left and then
            // calculates the target margin left base on it (using the slider panel width)
            var currentMarginLeft = parseInt(sliderContents.css("margin-left"));
            var targetMarginLeft = currentMarginLeft - sliderPanelWidth;

            // updates the offset left value
            offsetLeft += sliderPanelWidth;

            // animates the slider contents to the new margin left
            sliderContents.animate({
                        marginLeft : targetMarginLeft
                    }, 500, "linear", function() {
                        slider.data("lock", false);
                    });

            // updates the active classes in the slider panel
            sliderPanel.removeClass("active");
            nextSliderPanel.addClass("active");

            // sets the lock attribute in the slider
            slider.data("lock", true);

            // updates the offset left in the slider data
            slider.data("offsetLeft", offsetLeft);
        };

        var _movePrevious = function(matchedObject, options) {
            // retrieves the slider and the slider contents
            var slider = matchedObject;
            var sliderContents = jQuery(".slider-contents", matchedObject);

            // checks if the slider is visible
            var sliderVisible = slider.is(":visible");

            // in case the slider is not visible
            if (!sliderVisible) {
                // returns immediately
                return;
            }

            // retrieves the slider attributes
            var lock = slider.data("lock");
            var offsetLeft = slider.data("offsetLeft");

            // in case the lock attribute is set
            // (animation still pending)
            if (lock) {
                // returns immediately
                return;
            }

            // retrieves the currently active slider panel
            // and then retrieves its width
            var sliderPanel = jQuery(".slider-panel.active", matchedObject);
            var sliderPanelWidth = sliderPanel.outerWidth(true);

            // retrieves the previous slider panel
            var previousSliderPanel = sliderPanel.prev();

            // in case there are no more items to the
            // "right" index is zero
            if (previousSliderPanel.length == 0) {
                // returns immediately
                return;
            }

            // retrieves the current margin left and then
            // calculates the target margin left base on it (using the slider panel width)
            var currentMarginLeft = parseInt(sliderContents.css("margin-left"));
            var targetMarginLeft = currentMarginLeft + sliderPanelWidth;

            // updates the offset left value
            offsetLeft -= sliderPanelWidth;

            // animates the slider contents to the new margin left
            sliderContents.animate({
                        marginLeft : targetMarginLeft
                    }, 500, "linear", function() {
                        slider.data("lock", false);
                    });

            // updates the active classes in the slider panel
            sliderPanel.removeClass("active");
            previousSliderPanel.addClass("active");

            // sets the lock attribute in the slider
            slider.data("lock", true);

            // updates the offset left in the slider data
            slider.data("offsetLeft", offsetLeft);
        };

        var _update = function(matchedObject, options) {
            // retrieves the slider and the slider contents
            var slider = matchedObject;
            var sliderContents = jQuery(".slider-contents", matchedObject);

            // checks if the slider is visible
            var sliderVisible = slider.is(":visible");

            // in case the slider is not visible shows it
            // in order to retrieve the correct dimensions
            !sliderVisible && slider.show();

            // retrieves the offsert left of the slider
            var offsetLeft = slider.data("offsetLeft");

            // retrieves the window
            var _window = jQuery(window);

            // retrieves the window dimensions
            var windowHeight = _window.height();
            var windowWidth = _window.width();

            // retrieves the windows scroll left
            var windowSrollLeft = _window.scrollLeft();

            // retrieves the first slider panel
            var firstSliderPanel = jQuery(".slider-panel:first-child",
                    matchedObject);
            var firstSliderPanelWidth = firstSliderPanel.outerWidth();

            // calculates the left position for the slider contents
            var leftPosition = ((windowWidth - firstSliderPanelWidth) / 2)
                    + windowSrollLeft - offsetLeft;

            // sets the (margin) left position in the slider contents
            sliderContents.css("margin-left", leftPosition + "px");

            // in case the slider is not visible hides
            // it again to avoid erroneous measurements
            !sliderVisible && slider.hide();
        };

        var _resize = function(matchedObject, options) {
            // retrieves the slider and the slider contents
            // and the slider panels
            var slider = matchedObject;
            var sliderContents = jQuery(".slider-contents", matchedObject);
            var sliderPanels = jQuery(".slider-panel", matchedObject);

            // checks if the slider is visible
            var sliderVisible = slider.is(":visible");

            // in case the slider is not visible shows it
            // in order to retrieve the correct dimensions
            !sliderVisible && slider.show();

            // starts the slider panels width
            var sliderPanelsWidth = 0;

            // iterates over all the slider panels to calculate
            // the total slider panels width
            sliderPanels.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the element width
                        var elementWidth = _element.outerWidth(true);

                        // increments the slider panels with with
                        // the element width
                        sliderPanelsWidth += elementWidth;
                    });

            // sets the slider panels width as the slider
            // contents width
            sliderContents.width(sliderPanelsWidth);

            // in case the slider is not visible hides
            // it again to avoid erroneous measurements
            !sliderVisible && slider.hide();
        };

        // switches over the method
        switch (method) {
            case "show" :
                // shows the matched object
                _show(matchedObject, options);

                // breaks the switch
                break;

            case "hide" :
                // hides the matched object
                _hide(matchedObject, options);

                // breaks the switch
                break;

            case "next" :
                // moves to the next element
                _moveNext(matchedObject);

                // breaks the switch
                break;

            case "previous" :
                // moves to the previous element
                _movePrevious(matchedObject);

                // breaks the switch
                break;

            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery slideshow plugin, this jQuery plugin provides the base infra-structure
 * for the creation of a slideshow component.
 *
 * @name jquery-slideshow.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxslideshow = function(options) {
        // the default values for the data query json
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the slideshow elements to create their
            // internal structure and to populate the initial values
            matchedObject.each(function(index, element) {
                // retrieves the current element
                var _element = jQuery(this);

                // adds the image and the controls section to the current element
                // so that the normal placeholders are available
                _element.prepend("<div class=\"slideshow-image\">" + "<img />"
                        + "</div>" + "<div class=\"slideshow-controls\">"
                        + "<ul class=\"slideshow-alternates\"></ul>" + "</div>");

                // retrieves both the alternates and the items section
                // of the current element to be used for the construction
                // of the correct set of alternates
                var alternates = jQuery(".slideshow-alternates", _element);
                var items = jQuery("> .items li", _element);

                // initializes the list that will hold the various structures
                // representing the various items
                var _items = [];

                // iterates over each of the (element) items to construct the
                // logical structure representation for them
                items.each(function(index, element) {
                            // retrieves the current item (element) and uses it to
                            // retrieve the underlying elements
                            var item = jQuery(this);
                            var elements = jQuery("> *", item);

                            // creates the item structure and insets it to the
                            // list of item structures
                            var _item = {};
                            _items.push(_item);

                            // iterates over each of the components (elements)
                            // to populate the item structure
                            elements.each(function(index, element) {
                                        // retrieves the current element and the name (key)
                                        // attribute and the contents as the value
                                        var element = jQuery(this);
                                        var name = element.attr("data-name");
                                        var value = element.html();

                                        // update the item with the key associated
                                        // with the value
                                        _item[name] = value;
                                    });
                        });

                // iteates over the range of the item to inset the
                // list item representing the alternative for the item
                for (var index = 0; index < _items.length; index++) {
                    alternates.append("<li></li>");
                }

                // sets the list of structural items in the element
                // and then selects the first element (initial position)
                _element.data("items", _items);
                __select(_element, options, 0);

                // creates the interval to update the slideshow position
                // to the next one and then sets it in the current element
                // data (for possible future cancelation)
                var interval = setInterval(function() {
                            __select(_element, options, null);
                        }, 5000);
                _element.data("interval", interval);
            });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the references to the image, details and the
            // alternates to be used for event registration
            var image = jQuery(".slideshow-image", matchedObject);
            var details = jQuery(".slideshow-details", matchedObject);
            var alternates = jQuery(".slideshow-alternates > li", matchedObject);

            // registers for the click event on the image to trigger
            // the url resolution and document change
            image.click(function(event) {
                        // retrieves the current element and the parent
                        // slideshow
                        var element = jQuery(this);
                        var slideshow = element.parents(".slideshow");

                        // retrieves the url information from the slideshow
                        // data and opens the respective url
                        var url = slideshow.data("url");
                        if (url) {
                            var _window = event.which == 2
                            _window
                                    ? window.open(url)
                                    : document.location = url;
                        }
                    });

            // registers for the click event on the details to trigger
            // the url resolution and document change
            details.click(function() {
                        // retrieves the current element and the parent
                        // slideshow
                        var element = jQuery(this);
                        var slideshow = element.parents(".slideshow");

                        // retrieves the url information from the slideshow
                        // data and opens the respective url
                        var url = slideshow.data("url");
                        if (url) {
                            var _window = event.which == 2
                            _window
                                    ? window.open(url)
                                    : document.location = url;
                        }
                    });

            // registers for the click event on the alternates list
            // items to change the current element
            alternates.click(function() {
                        // retrieves the current element and the parent
                        // slideshow
                        var element = jQuery(this);
                        var slideshow = element.parents(".slideshow");

                        // retrieves the current interval and clears it (cancelation)
                        // so that no more automated changing takes place
                        var interval = slideshow.data("interval", interval);
                        clearInterval(interval);

                        // retrieves the index of the curret element index
                        // and selects the equivalent item in the slideshow
                        var index = element.index();
                        __select(slideshow, options, index);
                    });
        };

        var __select = function(matchedObject, options, index) {
            // retrives the currently set items from the matched
            // object and then the currently selected index
            var items = matchedObject.data("items");
            var current = matchedObject.data("index");

            // in case the index value is not set selects the next
            // value (takes care of overflow) otherwise defaults to
            // the request index (from parameter)
            index = index == null ? current + 1 < items.length
                    ? current + 1
                    : 0 : index;

            // in case the current index is the same as the (target)
            // index, no need to select it (returns immediately)
            if (current === index) {
                return;
            }

            // retrieves the list of (selected) alternates and disables
            // the value (going to change the item)
            var alternates = jQuery(".slideshow-alternates > li.active",
                    matchedObject);
            alternates.removeClass("active");

            // retrieves the target index alternate and selects it by adding
            // the active class to it
            var alternate = jQuery(".slideshow-alternates > li:nth-child("
                            + (index + 1) + ")", matchedObject);
            alternate.addClass("active");

            // retrieves the image element for the slideshow and then retrieves
            // the source attribute from it
            var image = jQuery(".slideshow-image > img", matchedObject);
            var source = image.attr("src");

            // retrieves the target item structure to be used to populate
            // the various components for the target state
            var item = items[index];

            // in case the source value is set, there is a previous image
            // must fade it out and only then show the new one
            if (source) {
                // hides the previous image and then shows the new one
                // at the end if the hide operation
                image.fadeOut(300, function() {
                            image.attr("src", item.image);
                            image.fadeIn(750);
                        });
            } else {
                // changes the source field of the image directly to
                // take effect immediately
                image.attr("src", item["image"]);
            }

            // retrieves the detail section of the slideshow to update
            // their set of values
            var details = jQuery(".slideshow-details > *", matchedObject);

            // iterates over each of the details to update the elements
            // with the value from the item structure
            details.each(function(index, element) {
                        // retrieves the current element and the name of it and
                        // updates the contents of it with the correspondent item
                        // structure value
                        var _element = jQuery(this);
                        var name = _element.attr("data-name");
                        _element.html(item[name]);
                    });

            // updates the url with the (current) item url and the
            // index value with the target index
            matchedObject.data("url", item.url);
            matchedObject.data("index", index);
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery source list plugin, this jQuery plugin provides the base
 * infra-structure for the creation of a source list component.
 *
 * @name jquery-source-list.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxsourcelist = function(method, options) {
        // the default values for the panel
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {
            numberOptions : null,
            filterOptions : true
        };

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // retrieves the options values
            var numberOptions = options["numberOptions"];
            var filterOptions = options["filterOptions"];

            // creates the text field element and the select list
            var textField = jQuery("<input type=\"text\" class=\"text-field\" />");
            var selectList = jQuery("<ul class=\"select-list\"></ul>");

            // starts both the text field and the select list and then
            // adds them to the source list (matched object)
            textField.uxtextfield();
            selectList.uxselectlist();
            matchedObject.append(textField);
            matchedObject.append(selectList);

            // iterates over each of the matched objects to start
            // its internal structures and element data
            matchedObject.each(function(index, element) {
                        // retrieves the current element for iteration
                        var _element = jQuery(element);

                        // retrieves the select list element associated
                        // with the current element in iteration
                        var selectList = jQuery(".select-list", _element);

                        // retrieves the name of the current element and
                        // in case it's valid set it in the select list
                        var elementName = _element.attr("name");
                        elementName && selectList.attr("name", elementName);

                        // retrieves the order of the current element and
                        // in case it's valid set it in the select list
                        var elementOrder = _element.attr("data-order");
                        elementOrder
                                && selectList.attr("data-order", elementOrder);

                        // updates the element data with parameters to
                        // be used in the component actions
                        _element.data("number_options", numberOptions);
                        _element.data("filter_options", filterOptions);

                        // runs the update operation using the current
                        // source list with the set of options
                        _update(_element, options);
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the source list elements
            var sourceList = matchedObject;
            var textField = jQuery(".text-field", sourceList);

            // registers the source list to the items changed event
            // to propagate it down to the assicated select list
            sourceList.bind("items_changed", function(event) {
                        // retrieves the current element (source list) and uses
                        // it to retrieve the select list to propagate down the
                        // event (lower propagation)
                        var element = jQuery(this);
                        var selectList = jQuery(".select-list", element);
                        selectList.trigger("items_changed");

                        // stops the event propagation to avoid
                        // possible loops in the handling
                        event.stopPropagation();
                    });

            // registers for the key down event on the text field
            textField.keydown(function(event) {
                        // retrieves th current element
                        var element = jQuery(this);
                        var sourceList = element.parent(".source-list");
                        var selectList = jQuery(".select-list", sourceList);

                        // retrieves the event key code
                        var eventKeyCode = event.keyCode
                                ? event.keyCode
                                : event.which;

                        // retrieves the event key code
                        var eventKeyCode = event.keyCode
                                ? event.keyCode
                                : event.which;

                        // switches over the event key code
                        switch (eventKeyCode) {

                            // in case it's the page up key
                            case 33 :
                                // runs the all up action in the source list
                                _allUp(sourceList, options);

                                // stops the event propagation
                                // (avoids extra problems in form)
                                event.stopPropagation();
                                event.preventDefault();

                                // breaks the switch
                                break;

                            // in case it's the page down key
                            case 34 :
                                // runs the all down action in the source list
                                _allDown(sourceList, options);

                                // stops the event propagation
                                // (avoids extra problems in form)
                                event.stopPropagation();
                                event.preventDefault();

                                // breaks the switch
                                break;

                            // in case it's the up key
                            case 38 :
                                // runs the up action in the source list
                                _up(sourceList, options);

                                // stops the event propagation
                                // (avoids extra problems in form)
                                event.stopPropagation();
                                event.preventDefault();

                                // breaks the switch
                                break;

                            // in case it's the down key
                            case 40 :
                                // runs teh down action in the source list
                                _down(sourceList, options);

                                // stops the event propagation
                                // (avoids extra problems in form)
                                event.stopPropagation();
                                event.preventDefault();

                                // breaks the switch
                                break;
                        }
                    });

            // registers for the key up even on the text field
            textField.keyup(function(event) {
                        // retrieves th current element
                        var element = jQuery(this);
                        var sourceList = element.parent(".source-list");
                        var selectList = jQuery(".select-list", sourceList);

                        // retrieves the event key code
                        var eventKeyCode = event.keyCode
                                ? event.keyCode
                                : event.which;

                        // switches over the event key code
                        switch (eventKeyCode) {
                            // in case it's the enter key
                            case 13 :
                                // retrieves the set of selected element
                                var selectedItems = jQuery("li.selected",
                                        sourceList);

                                // triggers the select event in the select list
                                // only in case there are items selected
                                selectedItems.length
                                        && selectList.trigger("selected",
                                                [selectedItems]);

                                // stops the event propagation
                                // (avoids extra problems in form)
                                event.stopPropagation();
                                event.preventDefault();

                                // breaks the switch
                                break;

                            default :
                                // runs the update operation using the current
                                // source list with the set of options
                                _update(sourceList, options);

                                // breaks the switch
                                break;
                        }
                    });
        };

        var _update = function(matchedObject, options) {
            // retrieves the source list elements
            var sourceList = matchedObject;
            var dataSource = jQuery("> .data-source", sourceList);
            var textField = jQuery(".text-field", sourceList);
            var selectList = jQuery(".select-list", sourceList);

            // retrieves the current source list value
            var value = sourceList.data("value");

            // retrieves both the display, value and link attributes
            var displayAttribute = matchedObject.attr("data-display_attribute");
            var valueAttribute = matchedObject.attr("data-value_attribute");
            var linkAttribute = matchedObject.attr("data-link_attribute");

            // retrieves the filter attributes
            var filterAttributes = matchedObject.data("filter_attributes");

            // retrieves the number of options values (it's a string value)
            var _numberOptions = matchedObject.attr("data-number_options");

            // retrieves the number of options to display
            // and if they should be filtered
            var numberOptions = matchedObject.data("number_options");
            var filterOptions = matchedObject.data("filter_options");

            // retrieves the text field value
            var textFieldValue = textField.attr("value");

            // in case the value did not change (no need to
            // show the contents)
            if (textFieldValue == value) {
                // returns immediately
                return;
            }

            // nullifies the number of options in case it's necessary
            numberOptions = filterOptions ? numberOptions : null;
            numberOptions = _numberOptions
                    ? parseInt(_numberOptions)
                    : numberOptions;

            // runs the query in the data source
            dataSource.uxdataquery({
                        filterString : textFieldValue,
                        filterAttributes : filterAttributes,
                        startRecord : 0,
                        numberRecords : numberOptions
                    }, function(validItems, moreItems) {
                        // in case the valid items value
                        // is not valid (error occurred)
                        if (!validItems) {
                            // returns immediately
                            return;
                        }

                        // retrieves the list of item values to be excluded
                        // fro the resulting list
                        var exclusion = sourceList.data("exclusion");

                        // empties (clears) the select list
                        selectList.empty()

                        // iterates over all the valid and filtered items
                        // to adds them to the select list
                        for (var index = 0; index < validItems.length; index++) {
                            // retrieves the current item (from the valid items)
                            var currentItem = validItems[index];

                            // retrieves both the display and the value
                            // attributes for the current item
                            var currentDisplayAttribute = displayAttribute
                                    ? currentItem[displayAttribute]
                                    : currentItem;
                            var currentValueAttribute = valueAttribute
                                    ? currentItem[valueAttribute]
                                    : currentItem;
                            var currentLinkAttribute = valueAttribute
                                    ? currentItem[linkAttribute]
                                    : null;

                            // creates the base template item from
                            // the current item
                            var templateItem = jQuery("<li data-display=\""
                                    + currentDisplayAttribute
                                    + "\" data-value=\""
                                    + currentValueAttribute + "\">"
                                    + currentDisplayAttribute + "</li>");

                            // checks if the current value is invalid (exists
                            // in the item exclusion list) in case it does exist
                            // must continue the loop (ignores element)
                            var invalid = exclusion
                                    && exclusion.indexOf(currentValueAttribute) != -1;
                            if (invalid) {
                                continue;
                            }

                            // sets the current item in the template item data
                            // so that it can be used for latter template rendering
                            templateItem.data("item", currentItem);

                            // sets the data link attribute in the
                            // template item in case it's valid
                            currentLinkAttribute
                                    && templateItem.attr("data-link",
                                            currentLinkAttribute);

                            // adds the template item item to the
                            // select list
                            selectList.append(templateItem);
                        }

                        // runs the select list initializer again
                        // to update the event handlers in the items
                        selectList.uxselectlist();

                        // updates the source list value with the current
                        // text field value
                        sourceList.data("value", textFieldValue);

                        // triggers the items changed event on the select list
                        // to be used for the update of the layour
                        selectList.trigger("items_changed");
                    });
        };

        var _up = function(matchedObject, options) {
            // sets the source list as the currently
            // matched object
            var sourceList = matchedObject;

            // retrieves the set of selected elements
            // and removes the selected class from them
            var selectedItems = jQuery("li.selected", sourceList);
            selectedItems.removeClass("selected");

            // retrieves the current index value defaulting to zero
            // in case no item is currently selected
            var index = selectedItems.length ? selectedItems.index() : 0;
            var _index = index <= 0 ? 0 : index - 1;

            // updates the index reference in the source list
            // and runs the update list process
            sourceList.data("index", _index);
            _updateList(sourceList, options);
        };

        var _down = function(matchedObject, options) {
            // sets the source list as the currently
            // matched object
            var sourceList = matchedObject;

            // retrieves the set of selected elements
            // and removes the selected class from them
            var selectedItems = jQuery("li.selected", sourceList);
            selectedItems.removeClass("selected");

            // retrieves the complete set of items in the source list
            var items = jQuery("li", sourceList);

            // retrieves the current index value defaulting to minus one
            // in case no item is currently selected
            var index = selectedItems.length ? selectedItems.index() : -1;
            var _index = index >= items.length - 1 ? items.length - 1 : index
                    + 1;

            // updates the index reference in the source list
            // and runs the update list process
            sourceList.data("index", _index);
            _updateList(sourceList, options);
        };

        var _allUp = function(matchedObject, options) {
            // sets the source list as the currently
            // matched object
            var sourceList = matchedObject;

            // retrieves the set of selected elements
            // and removes the selected class from them
            var selectedItems = jQuery("li.selected", sourceList);
            selectedItems.removeClass("selected");

            // sets the current index as zero (top element)
            var index = 0;

            // updates the index reference in the source list
            // and runs the update list process
            sourceList.data("index", index);
            _updateList(sourceList, options);
        };

        var _allDown = function(matchedObject, options) {
            // sets the source list as the currently
            // matched object
            var sourceList = matchedObject;

            // retrieves the set of selected elements
            // and removes the selected class from them
            var selectedItems = jQuery("li.selected", sourceList);
            selectedItems.removeClass("selected");

            // retrieves the complete set of items in the source list
            var items = jQuery("li", sourceList);

            // sets the current index as the last of the items (last
            // item selected)
            var index = items.length - 1;

            // updates the index reference in the source list
            // and runs the update list process
            sourceList.data("index", index);
            _updateList(sourceList, options);
        };

        var _updateList = function(matchedObject, options) {
            // sets the source list as the currently
            // matched object, then uses it to retrieve the
            // associate select list element
            var sourceList = matchedObject;
            var selectList = jQuery(".select-list", sourceList);

            // retrieves the current selected index value
            // in the source list to select and focus it
            var index = sourceList.data("index");

            // retrieves the target item using the "just"
            // provided index value
            var targetItem = jQuery("li:nth-child(" + (index + 1) + ")",
                    sourceList);
            targetItem.addClass("selected");

            // checks if the element is visible, this should be the
            // main reason for the scrolling of the select list
            var isVisible = targetItem && targetItem.length ? jQuery.uxvisible(
                    targetItem, 0, 0, selectList) : true;

            // scrolls to the select list in case the
            // target item is not visible
            !isVisible && targetItem.uxscroll({
                        parent : selectList
                    });
        };

        // switches over the method
        switch (method) {
            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery tab panel plugin, this jQuery plugin provides the base infra-structure
 * for the creation of a tab panel component.
 *
 * @name jquery-tab-panel.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function(jQuery) {
    jQuery.fn.uxtabpanel = function(options) {
        // the default values for the text field
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the tab selectors
            var tabSelectors = jQuery(".tab-selector", matchedObject);

            // registers for the click event
            // in the tab selectors
            tabSelectors.click(function(event) {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the tab panel and the child
                        // tab selectors
                        var tabPanel = element.parents(".tab-panel");
                        var tabs = jQuery(".tab", tabPanel);
                        var tabSelectors = jQuery(".tab-selector", tabPanel);

                        // removes the active class from (all) the tabs
                        // and from (all) the tab selectors
                        tabs.removeClass("active");
                        tabSelectors.removeClass("active");

                        // retrieves the link reference and
                        // then uses it to retrieve the target element
                        var href = element.attr("href");
                        var targetElement = jQuery(href);

                        // adds the active class to both the
                        // element and the target element
                        element.addClass("active");
                        targetElement.addClass("active");

                        // stops the event propagation
                        // (avoids the normal link behaviour)
                        event.stopPropagation();
                        event.preventDefault();
                    })
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery table plugin, this jQuery plugin provides the base infra-structure for
 * the creation of a table component.
 *
 * @name jquery-table.js
 * @author João Magalhães <joamag@hive.pt> & Luís Martinho <lmartinho@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function(jQuery) {
    jQuery.fn.uxtable = function(method, options) {
        // the default values for the table
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the items in the matched object
            matchedObject.each(function(index, element) {
                // retrieves the element reference
                var elementReference = jQuery(element);

                // sets the ux global object representation as table
                // this value may be used latter for fast ux
                // object type access (hash based conditions)
                elementReference.attr("data-object", "table");

                // retrieves all the rows from the element reference
                // and all the text fields associated with the element reference
                var rows = jQuery("tbody > tr:not(.template)", elementReference);
                var textFields = jQuery(
                        "tbody > tr:not(.template) .text-field",
                        elementReference);

                // iterates over all the items in the matched object
                rows.each(function(index, element) {
                            // retrieves the element reference
                            var elementReference = jQuery(element);

                            // retrieves the last row and adds the last class
                            // to it to signal the last element
                            var lastRow = jQuery(":last-child",
                                    elementReference);
                            lastRow.addClass("last");

                            // sets the line id in the element reference
                            elementReference.attr("data-line_id", index + 1);
                        });

                // iterates over all the text fields to update their invalid
                // state in case it's necessary
                textFields.each(function(index, element) {
                            // retrieves the current iteration element
                            // reference for reference
                            var elementReference = jQuery(element);

                            // in case the current element does not containts
                            // the invalid class no need to update the invalid
                            // stat of it
                            if (!elementReference.hasClass("invalid")) {
                                // no need to update the invalid state, returns
                                // immediately
                                return;
                            }

                            // sets the current text field as invalid, updating
                            // all the associated (frontier text fields)
                            _setInvalid(elementReference, options);
                        });

                // retrieves the last row of the table and then
                // adds the last class to it
                var lastRow = jQuery(rows.get(rows.length - 1));
                lastRow.addClass("last");

                // resets the cell padding and the cell spacing properties
                // of the table structure (not required)
                elementReference.attr("cellpadding", "0");
                elementReference.attr("cellspacing", "0");

                // sets the initial the current line id in the
                // element reference
                elementReference.data("current_line_id", rows.length + 1);
            });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the new line element
            var newLine = jQuery(".table-new-line", matchedObject);

            // retrieves the row elements (without the table header, footer and templates)
            var rows = jQuery("tr", matchedObject).not("thead tr").not("tfoot tr").not(".template");

            // registers for the click event in the newline element
            newLine.click(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the table elements
                        var table = element.parents(".table");
                        var tableBody = jQuery("tbody", table);

                        // creates a new line in the table and inserts
                        // it into the table body
                        _newLine(table, tableBody, options);
                    });

            // iterates over all the rows to register their
            // respective line handlers
            rows.each(function(index, element) {
                        // retrieves the current row (element) reference
                        var row = jQuery(element);

                        // registers the handlers for the row (line)
                        _registerLineHandlers(row, options);
                    });

            // iterates over all the items in the matched object
            matchedObject.each(function(index, element) {
                // retrieves the element reference
                var elementReference = jQuery(element);

                // checks if the current table is of type edit, in such
                // case a line should be added in case the table is empty
                // also retrieves the rows for the current element table
                var isEdit = elementReference.hasClass("table-edit");
                var rows = jQuery("tbody > tr:not(.template)", elementReference);

                // retrieves the containing form
                var parentForm = elementReference.parents("form");

                // registers for the submit event
                parentForm.submit(function() {
                    // checks if the flag that disables the auto removal
                    // of the empty field (line) is set
                    var noAutoRemove = elementReference.hasClass("no-auto-remove");

                    // in case the no auto remove flag is set no removal of the
                    // empty line is done
                    if (noAutoRemove) {
                        // returns immediately (no need to proceed
                        // with the row removal)
                        return;
                    }

                    // retrieves the rows from the element reference
                    var rows = jQuery("tbody > tr:not(.template)",
                            elementReference);

                    // in case there are no rows available
                    if (rows.length == 0) {
                        // returns immediately (no need to proceed
                        // with the row removal)
                        return;
                    }

                    // retrieves the table empty field to remove and then
                    // and retrieve the table default field to disable it
                    var tableEmptyField = jQuery(".table-empty-field",
                            elementReference);
                    var tableDefaultField = jQuery(".table-default-field",
                            elementReference);

                    // retrieves the default input (text field) to be disabled
                    // and then removes the name attribute from it disables
                    // the submission of the value through the form
                    var defaultInput = jQuery("input", tableDefaultField);
                    defaultInput.removeAttr("name");

                    // in case there is only one table field element
                    // the table empty filed is removed to avoid it from
                    // being submited (this should only be submited in empty table)
                    (rows.length - tableDefaultField.length > 0)
                            && tableEmptyField.remove();
                });

                // in case the table is of type edit and the table is emtpy
                // a line must be added to the end of the table in
                // case the table is empty
                if (isEdit && rows.length == 0) {
                    // retrieves the table elements
                    var table = elementReference;
                    var tableBody = jQuery("tbody", table);

                    // creates a new line in the table and inserts
                    // it into the table body
                    var _line = _newLine(table, tableBody, options);

                    // adds the class default field to the line and register
                    // for the key down (and up) event on it for the removal
                    // of the default field token
                    _line.addClass("table-default-field");
                    jQuery(".text-field", _line).keydown(function() {
                                _line.removeClass("table-default-field");
                            });
                    jQuery(".text-field", _line).keyup(function() {
                                _line.removeClass("table-default-field");
                            });
                }
            });
        };

        var _registerLineHandlers = function(row, options) {
            // retrieves the table and checks if it editable
            var table = row.parents(".table");
            var isEdit = table.hasClass("table-edit");

            // in case the table is not editable
            if (!isEdit) {
                // returns immediately
                return;
            }

            // creates the add and remove buttons html
            var addButtonHtml = "<td class=\"table-add\">"
                    + "<div class=\"inline-add\"></div>" + "</td>";
            var removeButtonHtml = "<td class=\"table-remove\">"
                    + "<div class=\"inline-remove\"></div>" + "</td>";

            // adds the add and remove button html to the row
            row.append(removeButtonHtml);
            row.append(addButtonHtml);

            // retrieves the various elements
            var addButton = jQuery(".table-add", row);
            var removeButton = jQuery(".table-remove", row);
            var textField = jQuery(".text-field", row);

            // retrieves the table width, to calculate
            // the add button left margin
            var tableWidth = table.outerWidth();
            var addButtonWidth = addButton.width();
            var addButtonMarginLeft = tableWidth * -1;

            // sets the add button left margin
            addButton.css("margin-left", addButtonMarginLeft + "px");

            // registers for the mouse over event in the row
            row.mouseover(function() {
                        // retrieves the element and sets it as the
                        // the table element
                        var element = jQuery(this);
                        var table = element;

                        // retrieves the add and remove buttons
                        var addButton = jQuery(".table-add", element);
                        var removeButton = jQuery(".table-remove", element);

                        // retrieves the table width, to calculate
                        // the add button left margin
                        var tableWidth = table.outerWidth();
                        var addButtonWidth = addButton.width();
                        var addButtonMarginLeft = tableWidth * -1;

                        // sets the add button left margin, it's important
                        // to re-calculate this value because the table may
                        // be invisible during the first calculus
                        addButton.css("margin-left", addButtonMarginLeft + "px");

                        // updates the buttons visibility
                        addButton.addClass("visible");
                        removeButton.addClass("visible");
                    });

            // registers for the mouse out event in the row
            row.mouseout(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the add and remove buttons
                        var addButton = jQuery(".table-add", element);
                        var removeButton = jQuery(".table-remove", element);

                        // updates the buttons visibility
                        addButton.removeClass("visible");
                        removeButton.removeClass("visible");
                    });

            // registers for the click event in the add button
            addButton.click(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the various elements
                        var table = element.parents(".table");
                        var elementRow = element.parents("tr");

                        // creates a new line in the table
                        _newLine(table, elementRow, options);
                    });

            // registers for the click event in the remove button
            removeButton.click(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the element row (adn table) and
                        // removes it from the table
                        var table = element.parents(".table");
                        var elementRow = element.parents("tr");
                        elementRow.remove();

                        // updates the invalid values on the current
                        // matched object (global reset)
                        _updateInvalid(matchedObject, options);

                        // checks if the current row for which the
                        // line will be added is the last one in such // case the var
                        isLastRow = elementRow.hasClass("last");

                        // in case the current row is not the last one
                        // no need to proceed with the last row update
                        // process (adds last class to the last row)
                        if (!isLastRow) {
                            // triggers the removed line event, sends the removed
                            // line as an event argument, then returns immediately
                            table.triggerHandler("removed_line", [elementRow]);
                            table.triggerHandler("value_change", [elementRow]);
                            return;
                        }

                        // retrieves the current last row and then add the last
                        // class to it (updating it's structure)
                        var lastRow = jQuery("tbody > tr:not(.template):last",
                                matchedObject);
                        lastRow.addClass("last");

                        // triggers the removed line event, sends the removed
                        // line as an event argument, then triggers the value change
                        // event to indicate the changing in the "logical" value
                        table.triggerHandler("removed_line", [elementRow]);
                        table.triggerHandler("value_change", [elementRow]);
                    });

            // registers for the click on the text field
            textField.focus(function() {
                        // rertrieves the current element (text field)
                        var element = jQuery(this);

                        // retrieves the cell and the row associated
                        // with the text field
                        var cell = element.parents("td");
                        var row = element.parents("tr");

                        // retrieves both the next cell and the next row for
                        // the text field
                        var nextCell = cell.next();
                        var nextRow = row.next();

                        // retrieves the current index for the cell and then uses
                        // it to retrieve the equivalent cell in the next row
                        var cellIndex = cell.index();
                        var nextRowCell = jQuery("td:eq(" + cellIndex + ")",
                                nextRow);

                        // adds the next horizontal and next vertical classes to the
                        // next cell and to the next row equivalent cell
                        nextCell.addClass("next-horizontal");
                        nextRowCell.addClass("next-vertical");

                        // checks if the currently selected text field is associated
                        // with the last cell in the table
                        var isLastCell = cell.hasClass("last")
                                && row.hasClass("last");

                        // in case the current cell is not the last one, no
                        // need register for the creation of the newline on
                        // the end of line
                        if (!isLastCell) {
                            // returns immediately no need to register for the
                            // line creation
                            return;
                        }

                        // creates the binder function that handles the
                        // creation of the new line at the end of the
                        // line (on scroll)
                        var binder = function(event) {
                            // retrieves the element
                            var element = jQuery(this);

                            // retrieves the filter
                            var filter = element.parents(".filter");

                            // retrieves the event key code
                            var eventKeyCode = event.keyCode
                                    ? event.keyCode
                                    : event.which;

                            // checks if the shift key is set
                            var shiftKey = event.shiftKey;

                            // in case the shift key is set or the currently
                            // pressed key is not the tab key, no need to
                            // create a new line
                            if (shiftKey || eventKeyCode != 9) {
                                // returns immediately, no need to create
                                // a new line
                                return;
                            }

                            // retrieves the table elements
                            var table = element.parents(".table");
                            var tableBody = jQuery("tbody", table);

                            // creates a new line in the table and inserts
                            // it into the table body
                            _newLine(table, tableBody, options);
                        };

                        // registers for the key up event in the text field
                        // so that is possible to create line on the tab
                        // key pressing (automatic creation of lines at the end
                        // of line)
                        element.keydown(binder);

                        // registers for the blue event so that when the user
                        // steps out of the text field no more line are created
                        // on tab pressing
                        element.blur(function() {
                                    // unbinds the text field from the creation of the new
                                    // lines
                                    element.unbind("keydown", binder);
                                });
                    });

            // registers for the blur event on the text field
            textField.blur(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the table associated with the
                        // element (text field) and then uses it to
                        // retrieve the associated cells
                        var table = element.parents("table");
                        var cells = jQuery("td", table);

                        // removes the next classes from all of the table
                        // cells (no more association)
                        cells.removeClass("next-horizontal");
                        cells.removeClass("next-vertical");
                    });

            // registers for the invalid set event on the text field
            textField.bind("invalid_set", function() {
                        // rertrieves the current element (text field)
                        var element = jQuery(this);

                        // sets the current text field as invalid, updating
                        // all the associated (frontier text fields)
                        _setInvalid(element, options);
                    });

            // registers for the invalid unset event on the text field
            textField.bind("invalid_unset", function() {
                        // rertrieves the current element (text field)
                        var element = jQuery(this);

                        // unsets the current text field as invalid, updating
                        // all the associated (frontier text fields)
                        _unsetInvalid(element, options);
                    });
        };

        var _newLine = function(matchedObject, elementRow, options) {
            // retrieves all the rows from the element reference
            // so that it's possible to check for overlfows
            var rows = jQuery("tbody > tr:not(.template)", matchedObject);
            var rowCount = rows.length;

            // retrieves the value for the maximum number of rows and tries
            // to convert it into an integer representation, then in case it
            // is a valid integere validates it agains the row count value
            // (only in case the maximum number of rows is available)
            var maximumRows = matchedObject.attr("data-maximum_rows");
            var maximumRowsInteger = parseInt(maximumRows);
            if (maximumRows && rowCount >= maximumRowsInteger) {
                return;
            }

            // retrieves the template element
            var template = jQuery(".template", matchedObject);

            // retrieves the current line id from the matched object
            // to set it as the current line in the new template item
            var currentLineId = matchedObject.data("current_line_id");

            // applies no attributes to the template (item)
            // retrieving the resulting template item, avoids
            // the auto apply (avoids problem requesting the form)
            var templateItem = template.uxtemplate({
                        line_id : currentLineId
                    }, {
                        apply : false
                    });

            // chekc if the current table is in edit mode
            var isEdit = matchedObject.hasClass("table-edit");

            // in case the table is editable, must update the
            // associated last element
            if (isEdit) {
                // retrieves the number of children available
                // (number of cells) and then uses it to add the
                // last class to the last cell
                var children = templateItem.children();
                var childrenLength = children.length;
                var lastChild = jQuery(children.get(childrenLength - 1));
                lastChild.addClass("last");
            }

            // sets the line id in the template item (for
            // selector line references)
            templateItem.attr("data-line_id", currentLineId);

            // updates the current line id in the matched object
            matchedObject.data("current_line_id", currentLineId + 1);

            // checks if the element row is in fact a row
            // or it it's something else
            var isRow = elementRow.is("tr");

            // in case the element row is a row the template
            // item must be inserted before the given row
            if (isRow) {
                // inserts the template item before the
                // element's row
                templateItem.insertBefore(elementRow);
            }
            // otherwise the element row is not a row and
            // the template item must be appended to the
            // element row
            else {
                // adds the template item to the element
                // row element
                elementRow.append(templateItem);
            }

            // updates the invalid values on the current
            // matched object (global reset)
            _updateInvalid(matchedObject, options);

            // retrieves all the rows from the element reference
            // so that it's possible to check id the current element
            // is the last in the list
            var rows = jQuery("tbody > tr:not(.template)", matchedObject);
            var rowCount = rows.length;

            // retrieves the index of the current row to check
            // it it's the last row
            var index = templateItem.index();
            var isLastRow = index == rowCount

            // in case the current row is the last one the last
            // classes must be updated to reflect that
            if (isLastRow) {
                // removes the last class from all of the rows
                // and then adds the last class to the tempate item
                // (the newly created row)
                rows.removeClass("last");
                templateItem.addClass("last");
            }

            // runs the apply in the template item
            templateItem.uxapply();

            // registers the handlers for the template item (line)
            _registerLineHandlers(templateItem, options);

            // triggers the added line event, sends the created
            // line as an event argument, the also triggers a value
            // changed event to indicate the changing of the "logical value"
            matchedObject.triggerHandler("created_line", [templateItem]);
            matchedObject.triggerHandler("value_change", [templateItem]);

            // returns the created line
            return templateItem;
        };

        var _setInvalid = function(element, options) {
            // retrieves the cell and the row associated
            // with the text field
            var cell = element.parents("td");
            var row = element.parents("tr");

            // retrieves both the next cell and the next row for
            // the text field
            var nextCell = cell.next();
            var nextRow = row.next();

            // retrieves the current index for the cell and then uses
            // it to retrieve the equivalent cell in the next row
            var cellIndex = cell.index();
            var nextRowCell = jQuery("td:eq(" + cellIndex + ")", nextRow);

            // adds the next horizontal and next vertical classes to the
            // next cell and to the next row equivalent cell
            nextCell.addClass("next-horizontal-invalid");
            nextRowCell.addClass("next-vertical-invalid");
        };

        var _unsetInvalid = function(element, options) {
            // retrieves the cell and the row associated
            // with the text field
            var cell = element.parents("td");
            var row = element.parents("tr");

            // retrieves both the next cell and the next row for
            // the text field
            var nextCell = cell.next();
            var nextRow = row.next();

            // retrieves the current index for the cell and then uses
            // it to retrieve the equivalent cell in the next row
            var cellIndex = cell.index();
            var nextRowCell = jQuery("td:eq(" + cellIndex + ")", nextRow);

            // removes the next horizontal and next vertical classes to the
            // next cell and to the next row equivalent cell
            nextCell.removeClass("next-horizontal-invalid");
            nextRowCell.removeClass("next-vertical-invalid");
        };

        var _updateInvalid = function(matchedObject, options) {
            // retrieves the current set of next horizontal and
            // next vertical invalid values and then remvoes their
            // repsective classes (restores the original next invalid values)
            var allHorizontalInvalid = jQuery(".next-horizontal-invalid",
                    matchedObject);
            var allVerticalInvalid = jQuery(".next-vertical-invalid",
                    matchedObject);
            allHorizontalInvalid.removeClass("next-horizontal-invalid");
            allVerticalInvalid.removeClass("next-vertical-invalid");

            // retrieves all the text fields from the matched object that are valid
            // and then iterates over them to set the proper invalid values
            var textFields = jQuery("tbody > tr:not(.template) .text-field",
                    matchedObject);
            textFields.each(function(index, element) {
                        // retrieves the current iteration element
                        // reference for reference
                        var elementReference = jQuery(element);

                        // in case the current element does not containts
                        // the invalid class no need to update the invalid
                        // stat of it
                        if (!elementReference.hasClass("invalid")) {
                            // no need to update the invalid state, returns
                            // immediately
                            return;
                        }

                        // sets the current text field as invalid, updating
                        // all the associated (frontier text fields)
                        _setInvalid(elementReference, options);
                    });
        };

        var _clear = function(matchedObject, options) {
            // checks if the current table is of type edit, in such
            // case a line should be added in case the table is empty
            // also retrieves the rows for the current element table
            var isEdit = matchedObject.hasClass("table-edit");
            var rows = jQuery("tbody > tr:not(.template)", matchedObject);

            // removes the current set of rows (empties the table)
            // this should be able to set no ui items in the table
            rows.remove();

            // in case the table is of type edit a line must be added
            // to the end of the table in case the table is empty
            if (isEdit) {
                // retrieves the table elements
                var table = matchedObject;
                var tableBody = jQuery("tbody", table);

                // creates a new line in the table and inserts
                // it into the table body
                var _line = _newLine(table, tableBody, options);

                // adds the class default field to the line and register
                // for the key down even on it for the removal of the
                // default field token
                _line.addClass("table-default-field");
                jQuery(".text-field", _line).keydown(function() {
                            _line.removeClass("table-default-field");
                        });
            }

            // triggers the cleared event, no arguments are sent
            // for this event
            matchedObject.triggerHandler("cleared");
        };

        // switches over the method
        switch (method) {
            case "clear" :
                // clears the table contents
                _clear(matchedObject, options);

                // breaks the switch
                break;

            case "reset" :
                // clears the table contents
                _clear(matchedObject, options);

                // breaks the switch
                break;

            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxuploader = function(options) {
        // the default values for the data query json
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the element to insert the
            // input and update it accordingly
            matchedObject.each(function(index, element) {
                // retrieves the element reference
                var _element = jQuery(element);

                // retrieves teh various attributes
                // from the element
                var name = _element.attr("data-name");
                var action = _element.attr("data-action");

                // incase the action value is set the action form
                // must be create enclosing the element, after
                // the wrapping retrieves it for latter usage
                action
                        && _element.wrap("<form action=\""
                                + action
                                + "\" method=\"post\" enctype=\"multipart/form-data\" class=\"form\"></form>");
                var form = _element.parent(".form");

                // inserts the uploader input afeter the element
                // and then retrieves it from the element
                _element.after("<input name=\"" + name
                        + "\" type=\"file\" class=\"uploader-input\" />");
                var uploaderInput = jQuery("+ .uploader-input", _element);

                // in cas the current browser is of type mozilla
                // hides the uploader input (the click event
                // is going to be used)
                jQuery.browser.mozilla && uploaderInput.hide();

                // sets the initial position of the input
                _updateInputPosition(_element, options);

                // registers for the mouse enter event in the uploader input
                uploaderInput.mouseenter(function() {
                            // adds the selected class from the element
                            _element.addClass("selected");
                        });

                // registers for the mouse enter out in the uploader input
                uploaderInput.mouseout(function() {
                            // removes the selected class from the element
                            _element.removeClass("selected");
                        });

                // registers for the change event in the uploader
                // event (detects file changes)
                uploaderInput.change(function() {
                            // in case there is an action value set (needs
                            // to submit the upper form)
                            if (action) {
                                // submits the form (auto submit), only submits
                                // it in case it exists
                                form.submit();
                            }
                            // otherwise the input must be correctly updated
                            // (sets position and updates value)
                            else {
                                // retrieves the input value and sets it as the
                                // new "label" in the element
                                var inputValue = uploaderInput.attr("value");
                                _element.html(inputValue);

                                // updates the input position for the element
                                _updateInputPosition(_element, options);
                            }
                        });

                // registers for the click event in the
                // element (for event propagation)
                _element.click(function() {
                            // triggers the click event in
                            // the uploader input (propagation)
                            uploaderInput.trigger("click");
                        });
            });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        var _updateInputPosition = function(marchedObject, options) {
            // retrievves the uploader input
            var uploaderInput = jQuery("+ .uploader-input", marchedObject);

            // retrieves the matched (outer) width, to be used
            // for the positioning of the input element
            var width = marchedObject.outerWidth();

            // sets the uploader input css attributes according
            // to the matched object attributes
            uploaderInput.css("width", width + "px");
            uploaderInput.css("margin-left", (width * -1) + "px");
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery tag field plugin, this jQuery plugin provides the base infra-structure
 * for the creation of a tag field component.
 *
 * @name jquery-select-list.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxtagfield = function(method, options) {
        // the default values for the panel
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // sets the ux global object representation as text
            // field, this value may be used latter for fast ux
            // object type access (hash based conditions)
            matchedObject.attr("data-object", "tagfield");

            // adds the tag field tags to the matched object, this
            // is the container to the tag representations
            matchedObject.prepend("<div class=\"tag-field-tags\"></div>");

            // iterates over each of the matched object to load
            // its contents
            matchedObject.each(function(index, element) {
                        // retrieves the current element
                        var _element = jQuery(this);

                        // adds the drop field class to the element and
                        // then initializes the drop field compoenent
                        _element.addClass("drop-field");
                        _element.uxdropfield();

                        // retrieves the reference to the container of the
                        // tag element for the current element (tag field)
                        var tagsContainer = jQuery(".tag-field-tags", _element);

                        // retrieves the text field element and calculates its
                        // width and padding to the right to be used to set the
                        // limits on the tags container
                        var textField = jQuery(".text-field", _element);
                        var textFieldWidth = textField.outerWidth();
                        var textFieldPaddingRight = textField.css("padding-right");
                        textFieldPaddingRight = parseInt(textFieldPaddingRight);
                        var textFieldPaddingLeft = textField.css("padding-left");
                        textFieldPaddingLeft = parseInt(textFieldPaddingLeft);

                        // retrieves the original padding top of the text field
                        // and "saves" it under the data structure
                        var textFieldPaddingTop = textField.css("padding-top");
                        textFieldPaddingTop = parseInt(textFieldPaddingTop);
                        textField.data("padding_top", textFieldPaddingTop);

                        // updates the maximum width value for the tag container
                        // according to the size values of the text field
                        tagsContainer.css(
                                "max-width",
                                (textFieldWidth - textFieldPaddingRight - textFieldPaddingLeft)
                                        + "px");

                        // removes the name attribute from the text field to avoid
                        // duplicate submission of values
                        textField.removeAttr("name");

                        // retrieves the reference to the list of tags to be
                        // parsed as the elements of the tag field
                        var tagsList = jQuery(".tags", _element);
                        var tags = jQuery("li", tagsList);

                        // iterates over each of the tags to create their
                        // internal representation
                        tags.each(function(index, element) {
                                    // retrieves the current element (tag) in
                                    // iteration for interpretation
                                    var __element = jQuery(this);

                                    // retrieves the (possible virtual) value of the
                                    // current tag element to be inserted then retrieves
                                    // the html value of the tag (visual value)
                                    var dataValue = __element.attr("data-value");
                                    var dataHtml = __element.html();

                                    // adds a new tag to the tags container, this operation
                                    // will not trigger any layout change
                                    _addTag(_element, options, dataHtml,
                                            dataValue);
                                });

                        // removes the targs list from the tag field, this is
                        // no longer required
                        tagsList.remove();

                        // checks if the element is visible so that appropriate
                        // visibility operation take place for carrect layout update
                        var isVisible = _element.is(":visible");

                        // shows the element momentanely so that appropriate width
                        // height measurements may take place
                        !isVisible && _element.show();

                        // updates (resizes) the tag field, then sets another
                        // update operation for the final part of the update
                        // lifecycle this way a new refresh happends after the
                        // complete layout is rendered
                        _update(_element, options);

                        // in case the element was not visible at the beginning
                        // of the measurement hides it agains (state restore)
                        !isVisible && _element.hide();
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the container of the tags for event
            // registration its going to simulate the "normal"
            // text field events
            var tagsContainer = jQuery(".tag-field-tags", matchedObject);

            // retrieves the text field associated with the current
            // tag field to be handler registration
            var textField = jQuery(".text-field", matchedObject);

            // iterates over each of the matched objects
            // to register them agains the submission of the form
            matchedObject.each(function(index, element) {
                // retrieves the current element for iteration
                var _element = jQuery(element);

                // retrieves the containing form
                var parentForm = _element.parents("form");

                // registers for the submit event on the parent
                // form, in order to be able to create the appropriate
                // structures for proper submission
                parentForm.submit(function() {
                            // retrieves the name of the element, this value is
                            // going to be used in the input element to be create
                            // in case the name does not exists no submission of
                            // values is created (returns immediately)
                            var elementName = _element.attr("name");
                            if (!elementName) {
                                return;
                            }

                            // removes all the input elements contained inside the
                            // current tag field (avoid duplicated submission)
                            _element.remove("input");

                            // retrieves the complete set of tags in the current
                            // tag field this values are going to be used to create
                            // the series of form input elements
                            var tags = jQuery(".tag-field-tag", _element);

                            // iterates over all the elements in the tags to
                            // creates the associated input values
                            for (var index = 0; index < tags.length; index++) {
                                // retrieves the current list items in iteration
                                // and retrieves the value to be used as data value
                                // defaulting to the html value in case none is provided
                                var tag = jQuery(tags[index]);
                                var dataValue = tag.attr("data-value");
                                var displayValue = tag.attr("data-display");
                                dataValue = dataValue
                                        ? dataValue
                                        : displayValue;

                                // adds the input element representing the list item
                                // to the list item itself
                                _element.append("<input type=\"hidden\" name=\""
                                        + elementName
                                        + "\" value=\""
                                        + dataValue + "\" />");
                            }

                            // retrieves the empty field used to submit a default
                            // value in case no tags are selected
                            var tagEmptyField = jQuery(".tag-empty-field",
                                    _element);

                            // in case there are currently tags the empty field must
                            // be removed to avoid unwanted behaviour
                            tags.length && tagEmptyField.remove();
                        });
            });

            matchedObject.bind("value_select",
                    function(event, value, valueLogic, item) {
                        // retrieves the target element clicked
                        var element = jQuery(this);

                        // in case no value is select nothing is to
                        // be done, returns immediately
                        if (!value) {
                            return;
                        }

                        // retrieves the text field assiciated with the
                        // element and resets its value no value present
                        var textField = jQuery(".text-field", element);
                        textField.val("");

                        // adds a new tag to the tags container, this operation
                        // will not trigger any layout change
                        _addTag(element, options, value, valueLogic);

                        // updates the current tag field layout to reflect
                        // the changes of adding the new tag
                        _update(element, options);
                    });

            tagsContainer.mousedown(function(event) {
                        // stops the event propagation and prevents the
                        // default behavior to avoid possible problems
                        event.stopPropagation();
                        event.stopImmediatePropagation();
                        event.preventDefault();
                    });

            tagsContainer.click(function(event) {
                        // retrieves the target element clicked
                        var element = jQuery(this);

                        // retrieves the parent tag field and uses
                        // it to retrieve the associated text field
                        var tagField = element.parent(".tag-field");
                        var textField = jQuery(".text-field", tagField);

                        // focus the cursor in the text field
                        textField.focus();

                        // stops the event propagation and prevents the
                        // default behavior to avoid possible problems
                        event.stopPropagation();
                        event.stopImmediatePropagation();
                        event.preventDefault();
                    });

            tagsContainer.dblclick(function(event) {
                        // retrieves the target element clicked
                        var element = jQuery(this);

                        // retrieves the parent tag field and uses
                        // it to retrieve the associated text field
                        var tagField = element.parent(".tag-field");
                        var textField = jQuery(".text-field", tagField);

                        // selest the text in the text field
                        textField.select();

                        // stops the event propagation and prevents the
                        // default behavior to avoid possible problems
                        event.stopPropagation();
                        event.stopImmediatePropagation();
                        event.preventDefault();
                    });

            textField.focus(function() {
                        // retrieves the current element and the associated
                        // parent tag field
                        var element = jQuery(this);
                        var tagField = element.parents(".tag-field");

                        // updates the layout structure in the current
                        // tag field (focus may change contents)
                        _update(tagField, options);
                    });
        };

        var _addTag = function(matcheObject, options, value, valueLogic) {
            // retrieves the reference to the container of
            // the tags (the place to insert the tags)
            var tagsContainer = jQuery(".tag-field-tags", matcheObject);

            // constructs the tag element and updates its
            // (logic) data value reference in case it exists
            var tag = jQuery("<div class=\"tag-field-tag\">"
                    + "<div class=\"tag-field-label\">" + value + "</div>"
                    + "<div class=\"tag-field-remove\"></div>"
                    + "<div class=\"tag-field-clear\"></div>" + "</div>");
            value && tag.attr("data-display", value);
            valueLogic && tag.attr("data-value", valueLogic);

            // retrieves the reference to the remove element of the tag
            // and registers it for the click event to trigger the removal
            // process for it
            var tagRemove = jQuery(".tag-field-remove", tag);
            tagRemove.click(function() {
                        // retrieves the element and uses it to retrieve
                        // the parent drop field
                        var element = jQuery(this);
                        var tag = element.parent(".tag-field-tag");
                        var dropField = element.parents(".drop-field");

                        // removes the tag from the structures and
                        // runs the update operation to update the layout
                        tag.remove();
                        _update(dropField, options);
                    });

            // adds the tag element representation to the tags
            // container (visual append)
            tagsContainer.append(tag);
        };

        var _update = function(matchedObject, options) {
            // retrieves the container of the tags, the text field and
            // the complete set of tags
            var tagsContainer = jQuery(".tag-field-tags", matchedObject);
            var textField = jQuery(".text-field", matchedObject);
            var tags = jQuery(".tag-field-tag", tagsContainer);

            // retrieves the tags container height and the width
            // of the text field width for future calculus
            var tagsContainerHeight = tagsContainer.outerHeight();
            var textFieldWidth = textField.outerWidth();

            // retrieves the last tag in the tag sequence then uses
            // it to retrieve the reference value to the top (offset y)
            var lastTag = tags.length ? jQuery(tags[tags.length - 1]) : null;
            var referenceTop = lastTag ? lastTag.offset().top : 0;

            // starts the list of tags for the last line, this list will
            // contain the various tags of the last line
            var lineTags = [];

            // iterates over all the tags to gather the ones that are part
            // of the last line
            for (var index = tags.length - 1; index >= 0; index--) {
                // retrieves the current tag and retrieves its
                // ofsset value to the top for comparision
                var tag = jQuery(tags[index]);
                var _referenceTop = tag.offset().top;

                // in case the current reference to the top is not
                // the same the tag is not in the last line, need
                // to break the loop
                if (_referenceTop != referenceTop) {
                    break;
                }

                // adds the tag element to the list of tags in the last
                // line (this tag is present in the last line)
                lineTags.push(tag);
            }

            // converts the tags in the last line and calculates
            // the total width for them
            lineTags = jQuery(lineTags);
            var lineWidth = lineTags.uxwidth();

            // retrieves the tags container padding left and right to be used
            // in the calculus of the line width
            var tagsContainerPaddingLeft = tagsContainer.css("padding-left");
            var tagsContainerPaddingRight = tagsContainer.css("padding-right");
            tagsContainerPaddingLeft = parseInt(tagsContainerPaddingLeft);
            tagsContainerPaddingRight = parseInt(tagsContainerPaddingRight);

            // calculates the width of the line by adding the tags container
            // padding left and right
            lineWidth = lineWidth + tagsContainerPaddingLeft
                    + tagsContainerPaddingRight;

            // calculates the size of the line using the last tag
            // height as reference and then devides the tags container
            // height with the line height to calculate the number of
            // lines in the tags container, using it to calculate the
            // "new" padding to the top
            var lineHeight = lastTag ? lastTag.outerHeight(true) : 0;
            var numberLines = tagsContainerHeight / lineHeight;
            var paddingTop = (numberLines - 1) * lineHeight;

            // retrieves the original padding top value to be used to
            // increment the new padding top
            var textFieldPaddingTop = textField.data("padding_top",
                    textFieldPaddingTop);
            paddingTop += textFieldPaddingTop;

            // retrieves the margin top of the text field
            // to be used in the calculus of the top margin
            // of the tag container
            var textFieldMarginTop = textField.css("margin-top");
            textFieldMarginTop = parseInt(textFieldMarginTop);

            // retrieves the text field height to be used in the calculus
            // of the delta value to the margin top
            var textFieldHeight = textField.height();
            var deltaMarginTop = (textFieldHeight - (lineHeight + 2)) / 2;

            // retrieves the various extra components of the text field
            // and adds them together to calculate the extra pixel values
            // of the text field component
            var textFieldPaddingRight = parseInt(textField.css("padding-right"));
            var textFieldBorderRight = parseInt(textField.css("border-right-width"));
            var textFieldBorderLeft = parseInt(textField.css("border-left-width"));
            var textFieldExtra = lineWidth + textFieldPaddingRight
                    + textFieldBorderRight + textFieldBorderLeft;

            // calculates the "new" width value to be used validating it
            // to be a positive value (avoids possible problems)
            var width = textFieldWidth - textFieldExtra > 0 ? textFieldWidth
                    - textFieldExtra : 0;

            // updates the margin top of the tag container according to the
            // margin top of the text field
            tagsContainer.css("margin-top", (textFieldMarginTop
                            + textFieldPaddingTop + deltaMarginTop)
                            + "px");

            // updates the padding top of the text field according
            // to the calculated value
            textField.css("padding-top", paddingTop + "px");

            // sets the new width and padding left in the text
            // field associated with the tag field
            textField.css("width", width + "px");
            textField.css("padding-left", lineWidth + "px");
        };

        var _value = function(matchedObject, options) {
            // retrieves the complete set of tags in the current
            // tag field this values are going to be used to create
            // the complete "sequenced" value
            var tags = jQuery(".tag-field-tag", matchedObject);

            // starts the string that will hold the complete value
            // to represent the tag field
            var value = "";

            // iterates over all the elements in the tags to
            // creates the sequence value
            for (var index = 0; index < tags.length; index++) {
                // retrieves the current list items in iteration
                // and retrieves the value to be used as data value
                // defaulting to the html value in case none is provided
                var tag = jQuery(tags[index]);
                var dataValue = tag.attr("data-value");
                var displayValue = tag.attr("data-display");
                dataValue = dataValue ? dataValue : displayValue;

                // adds the current data value to the value and then
                // completes it with a comma
                value += dataValue + ","
            }

            // returns the "just" computed sequence value comprising
            // the list of valus separated with comas
            return value;
        };

        // switches over the method
        switch (method) {
            case "value" :
                // retrieves the value
                var value = _value(matchedObject, options);

                // returns the value
                return value;

            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery text field plugin, this jQuery plugin provides the base
 * infra-structure for the creation of a text field component.
 *
 * @name jquery-text-field.js
 * @author João Magalhães <joamag@hive.pt> & Luís Martinho <lmartinho@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function(jQuery) {
    jQuery.fn.uxtextfield = function(method, options) {
        // the default values for the text field
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // sets the ux global object representation as text
            // field, this value may be used latter for fast ux
            // object type access (hash based conditions)
            matchedObject.attr("data-object", "textfield");

            // iterates over all the items in the matched object
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var elementReference = jQuery(element);

                        // retrieves the (data) type of the element reference
                        // and adds it as class to the element reference
                        var type = elementReference.attr("data-type");
                        elementReference.addClass(type);

                        // starts the type specific structures
                        var startMethodName = "__start" + type;
                        type
                                && __callMethod(startMethodName,
                                        elementReference, options);

                        // starts the element
                        __start(elementReference, options);

                        // resets the element
                        __reset(elementReference, options);
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // registers for focus event
            matchedObject.focus(function() {
                        // retrieves the element and runs the focus
                        // mrthod on top of it (focus the text field)
                        var element = jQuery(this);
                        _focus(element, options);
                    });

            // registers for blur event
            matchedObject.blur(function(event) {
                        // retrieves the element and runs the blur
                        // mrthod on top of it (blurs the text field)
                        var element = jQuery(this);
                        _blur(element, options);
                    });

            // registers for the keypress event
            matchedObject.keypress(function(event) {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the attributes
                        var value = element.attr("value");
                        var type = element.attr("data-type");
                        var regexString = element.attr("data-regex");
                        var maximumLength = element.attr("data-maximum_length");
                        var decimalPlaces = element.attr("data-decimal_places");

                        // retrieves the start index of the selection as the
                        // caret position this may be used for validation
                        var caret = this.selectionStart;

                        // retrieves the key value, the key code and
                        // the which value
                        var keyValue = event.keyCode
                                ? event.keyCode
                                : event.charCode ? event.charCode : event.which;
                        var keyCode = event.keyCode;
                        var which = event.which;

                        // in case the pressed key is a backspace,
                        // cursor, enter or any other movement key
                        // the default behavior must be prevented
                        if (keyCode == 8 || keyCode == 13 || keyCode > 8
                                && keyCode <= 46 && which == 0) {
                            // returns since the key press is valid
                            return true;
                        }

                        // checks if the current length of the value is valid and
                        // in case it's not returns in error (avoids writing)
                        var lengthValid = __testlength(value, maximumLength);
                        if (!lengthValid) {
                            // returns in error (avoids writing)
                            return false;
                        }

                        // converts the key value to a string
                        var keyValueString = String.fromCharCode(keyValue);

                        // initializes the valid input flag
                        var validInput = true;

                        // switches over each of the (data) types
                        switch (type) {
                            // in case the type is natural
                            case "natural" :
                                // tests the input against the regular expression
                                validInput = /^\d$/.test(keyValueString);

                                // breaks the switch
                                break;

                            // in case the type is integer
                            case "integer" :
                                // tests the input against the regular expression
                                validInput = /^-|\d$/.test(keyValueString);

                                // breaks the switch
                                break;

                            // in case the type is float
                            case "float" :
                                // tests the input against the regular expression
                                // and then in case the input is still valid runs the test
                                // on the number of decimal places
                                validInput = /^-|\d|\.$/.test(keyValueString);
                                validInput = validInput ? __testplaces(value,
                                        decimalPlaces, caret) : validInput;

                                // breaks the switch
                                break;

                            // in case the type is float positive
                            case "floatp" :
                                // tests the input against the regular expression
                                // and then in case the input is still valid runs the test
                                // on the number of decimal places
                                validInput = /^\d|\.$/.test(keyValueString);
                                validInput = validInput ? __testplaces(value,
                                        decimalPlaces, caret) : validInput;

                                // breaks the switch
                                break;

                            // in case the type is percent
                            case "percent" :
                                // tests the input against the regular expression
                                // and then in case the input is still valid runs the test
                                // on the number of decimal places
                                validInput = /^-|\d|\.$/.test(keyValueString);
                                validInput = validInput ? __testplaces(value,
                                        decimalPlaces, caret) : validInput;

                                // breaks the switch
                                break;

                            // in case the type is regex
                            case "regex" :
                                // tests the input against the regular expression
                                var regex = new RegExp(regexString);
                                validInput = regex.test(keyValueString);

                                // breaks the switch
                                break;
                        }

                        // returns valid input
                        return validInput;
                    });

            // registers for key down event
            matchedObject.keydown(function(event) {
                        // retrieves the element
                        var element = jQuery(this);

                        // retrieves the avoid escape data attribute
                        var avoidEscape = element.data("avoid_escape");

                        // in case the escape key should be escaped
                        // must return immediately nothing to be done
                        if (avoidEscape) {
                            // returns immediately, nothing to be done
                            return;
                        }

                        // retrieves the key value
                        var keyValue = event.keyCode
                                ? event.keyCode
                                : event.charCode ? event.charCode : event.which;

                        // in case the escape key is pressed
                        // need to blur the text field
                        if (keyValue == 27) {
                            // blurs the text field
                            element.blur();
                        }

                        // in case the key value represents an alpha
                        // numeric value the propagation must be avoided
                        if (keyValue > 64 && keyValue < 91) {
                            // stops the event propagation
                            // (avoid problems in global key
                            // listening)
                            event.stopImmediatePropagation();
                        }
                    });

            // registers for key up event
            matchedObject.keyup(function(event) {
                        // retrieves the element
                        var element = jQuery(this);

                        // checks if the text field is "lower"
                        var isLower = element.hasClass("lower");

                        // in case the text field is "lower"
                        if (isLower) {
                            // returns immediately (avoids problems
                            // of double update value calls on blur)
                            return;
                        }

                        // updates the value using the input
                        __updateValue(element, options);

                        // resets the error state
                        __resetError(element, options);

                        // stops the event propagation
                        // (avoid problems in global key
                        // listening)
                        event.stopPropagation();
                    });

            matchedObject.change(function() {
                        // retrieves the element
                        var element = jQuery(this);

                        // resets the error state
                        __resetError(element, options);
                    });

            matchedObject.each(function(index, element) {
                // retrieves the element reference
                var elementReference = jQuery(element);

                // retrieves the containing form
                var parentForm = elementReference.parents("form");

                // registers for the submit event
                parentForm.submit(function() {
                    // checks if the text field is "lower", to be able
                    // to chose between send a hidden field or a normal field
                    var isLower = elementReference.hasClass("lower");

                    // in case the current text field is lowered, must create
                    // an empty field to represent it
                    if (isLower) {
                        // retrieves the name value from the element reference
                        // and then uses it to create a clone of the element
                        // with the hidden type and with the same name
                        var elementName = elementReference.attr("name");
                        var elementClone = jQuery("<input type=\"hidden\" name=\""
                                + elementName + "\"/>");

                        // removes the name attribute from the element, it's
                        // no longer required and avoids unwanted submits
                        elementReference.removeAttr("name");

                        // retrieves the element value, to update the hidden
                        // field accordingly
                        var elementValue = elementReference.attr("data-value");

                        // sets the element value in the cloned element and then
                        // adds the cloned element after the text field
                        elementClone.attr("value", elementValue);
                        elementReference.after(elementClone);
                    }
                    // otherwise it's a normal processing the data value must
                    // be set as the current value
                    else {
                        // retrieves the element value
                        var elementValue = elementReference.attr("data-value");

                        // sets the element value in the input field
                        elementReference.attr("value", elementValue);
                    }
                });

                // registers for the success event
                parentForm.bind("success", function() {
                            __reset(elementReference, options);
                        });

                // registers for the error event
                parentForm.bind("error", function() {
                            __reset(elementReference, options);
                        });

                // sets an interval to check for modifications
                // in the text field
                setInterval(function() {
                            // checks if the text field is "lower"
                            var isLower = elementReference.hasClass("lower");

                            // in case the text field is "lower"
                            if (isLower) {
                                // returns immediately
                                return;
                            }

                            // updates the value conveniently
                            __updateValue(elementReference, options);
                        }, 250);
            });
        };

        var _value = function(matchedObject, options) {
            // tries to retrieve the value from options
            var value = options["value"];

            // in case it's a "normal" get operation
            // (no value defined)
            if (value === undefined) {
                // retrieves the element value
                var elementValue = matchedObject.attr("data-value");

                // retrieves the data type for the matached object
                // and uses it to create the (possible) value type
                // retrieval method then calls it in case it exists
                // otherwise uses the normal element value
                var type = matchedObject.attr("data-type");
                var valueMethodName = "__value" + type;
                var hasMethod = __hasMethod(valueMethodName, matchedObject,
                        options);
                var elementValue = hasMethod ? __callMethod(valueMethodName,
                        matchedObject, options) : elementValue;

                // returns the retrieved value
                return elementValue;
            }
            // otherwise the "target" value is valid
            // it's a set operation
            else {
                // retrieves the data type for the matached object
                // and uses it to create the (possible) format value
                // retrieval method then calls it in case it exists
                // otherwise uses the normal value, note that the method
                // is not called in case the value is empty (nothing will
                // be formatted for such case)
                var type = matchedObject.attr("data-type");
                var valueMethodName = "__fvalue" + type;
                var hasMethod = __hasMethod(valueMethodName, matchedObject,
                        options);
                var value = hasMethod && value != "" ? __callMethod(
                        valueMethodName, matchedObject, value) : value;

                // sets the value in the attributes
                matchedObject.attr("value", value);

                // removes the lower (background) mode class
                matchedObject.removeClass("lower");

                // updates the value using the input
                __updateValue(matchedObject, options);

                // resets the element
                __reset(matchedObject, options);
            }
        };

        var _reset = function(matchedObject, options) {
            _value(matchedObject, {
                        value : ""
                    });
        };

        var _focus = function(matchedObject, options) {
            // retrieves the element as the matched object
            var element = matchedObject;

            // blurs all the active text fields (avoids bluring
            // the current text field)
            __bluractive(element, options);

            // adds the focus class to the text field, signals
            // the focus on it
            element.addClass("focus");

            // adds the active class
            element.addClass("active");

            // removes the lower (background) mode class
            element.removeClass("lower");

            // retrieves the (data) type of the element
            var type = element.attr("data-type");

            // shows the type specific structures
            var showMethodName = "__show" + type;
            type && __callMethod(showMethodName, element, options);

            // retrieves the element value
            var elementValue = element.attr("data-value");

            // sets the element value in the text field
            element.attr("value", elementValue);
        };

        var _blur = function(matchedObject, options) {
            // retrieves the element as the matched object
            var element = matchedObject;

            // retrieves the value of the avoid next flag
            // and updates the state of it to false
            var avoidNext = element.data("avoid_next");
            element.data("avoid_next", false);

            // in case the avoid next flag is set
            // (no blur logic is done)
            if (avoidNext) {
                // re-focus on the element
                element.focus();

                // returns immediately
                return;
            }

            // retrieves the (data) type of the element
            var type = element.attr("data-type");

            // hides the type specific structures
            var hideMethodName = "__hide" + type;
            type && __callMethod(hideMethodName, element, options);

            // removes the active class
            element.removeClass("active");

            // updates the value using the input
            __updateValue(element, options);

            // resets the element
            __reset(element, options);

            // removes the focus class to the text field, signals
            // the blur from it
            element.removeClass("focus");
        };

        var __start = function(matchedObject, options) {
            // retrieves the input value
            var inputFieldValue = matchedObject.attr("value");

            // retrieves the element value
            var elementValue = matchedObject.attr("data-value");

            // retrieves the original value
            var originalValue = matchedObject.attr("data-original_value");

            // retrieves the force complete value, this value controls
            // if the autcomplete feature must be forced in non compliant
            // browsers (eg: firefox)
            var forceComplete = matchedObject.attr("data-force_complete");

            // in case the element value is not provided
            if (elementValue != null) {
                // returns immediately
                return;
            }

            // unsets the autocomplete feature in the text field
            // to avoid possible (unwanted) autocomplete sugestions
            // this is only done in case the force complete flag
            // is unset (default behavior)
            !forceComplete && matchedObject.attr("autocomplete", "off");

            // in case the input field value is the original one
            // this is a known issue with refreshing browser (need
            // to reset to value in order to avoid side effects)
            // in case the autocomplete has been already disabled
            // there is no need to do this because the problem
            // is not observed
            forceComplete && inputFieldValue == originalValue
                    && matchedObject.attr("value", "");

            // updates the error
            __updateError(matchedObject, options);

            // updates the value
            __updateValue(matchedObject, options);
        };

        var __reset = function(matchedObject, options) {
            // retrieves the element value
            var elementValue = matchedObject.attr("data-value");

            // in case the element value is not empty
            if (elementValue != "") {
                // returns immediately
                return;
            }

            // retrieves the original value
            var originalValue = matchedObject.attr("data-original_value");

            // in case the original value is not defined
            if (originalValue == null) {
                // returns immediately
                return;
            }

            // sets the value attribute to the original value
            matchedObject.attr("value", originalValue);

            // adds the lower class
            matchedObject.addClass("lower");
        };

        var __updateValue = function(matchedObject, options) {
            // checks if the input field is lowered (original value
            // is set) in such cases there's no need to update the
            // data value (could cause problems in data sync)
            var isLower = matchedObject.hasClass("lower");
            if (isLower) {
                // returns immediately, no need to update
                // a "lowered" input field
                return;
            }

            // retrieves the (previous) input field value
            // from the data value attribute
            var previousInputFieldValue = matchedObject.attr("data-value");

            // retrieves the input value
            var inputFieldValue = matchedObject.attr("value");

            // sets the data value
            matchedObject.attr("data-value", inputFieldValue);

            // triggers the value change event in case the previous
            // input field value is different from the current
            inputFieldValue != previousInputFieldValue
                    && matchedObject.triggerHandler("value_change",
                            [inputFieldValue]);
        };

        var __updateError = function(matchedObject, options) {
            // retrieves the element error
            var elementError = matchedObject.attr("data-error");

            // in case there is an error
            if (elementError) {
                // adds the invalid mode class and triggers the invalid
                // set event
                matchedObject.addClass("invalid");
                matchedObject.triggerHandler("invalid_set");
            }
        };

        var __resetError = function(matchedObject, options) {
            // removes the invalid mode class and triggers
            // the invalid unset event
            matchedObject.removeClass("invalid");
            matchedObject.triggerHandler("invalid_unset");
        };

        var __callMethod = function(methodName, element, options) {
            // creates the string to be eavluated and then evaluates it
            var evalString = "if(typeof " + methodName
                    + " != \"undefined\") { var result = " + methodName
                    + "(element, options)} else { var result = null; }";
            eval(evalString);
            return result;
        };

        var __hasMethod = function(methodName, element, options) {
            // creates the string to be eavluated and then evaluates it
            var evalString = "var result = typeof " + methodName
                    + " != \"undefined\";";
            eval(evalString);
            return result;
        };

        var __startdatetime = function(element, options) {
            // retrieves the value of the utc offset flag
            // (if the utc flag is set the date is set to work
            // in the utc zone)
            var utc = element.hasClass("utc");

            // retrieves the current (initial) value from the
            // element (text field)
            var currentValue = element.attr("value");
            var currentTimestamp = parseInt(currentValue);

            // in case the parse of the timestamp was not successful
            if (!isNaN(currentTimestamp)) {
                // converts the date object from the
                // current timestamp value
                var date = new Date(currentTimestamp * 1000);

                // retrieves the various components of the date
                var year = utc ? date.getUTCFullYear() : date.getFullYear();
                var month = utc ? date.getUTCMonth() + 1 : date.getMonth() + 1;
                var day = utc ? date.getUTCDate() : date.getDate();
                var hours = utc ? date.getUTCHours() : date.getHours();
                var minutes = utc ? date.getUTCMinutes() : date.getMinutes();
                var seconds = utc ? date.getUTCSeconds() : date.getSeconds();

                // creates the date string from the various
                // date components
                var yearString = String(year);
                var monthString = month > 9 ? String(month) : "0"
                        + String(month);
                var dayString = day > 9 ? String(day) : "0" + String(day);
                var hoursString = hours > 9 ? String(hours) : "0"
                        + String(hours);
                var minutesString = minutes > 9 ? String(minutes) : "0"
                        + String(minutes);
                var secondsString = seconds > 9 ? String(seconds) : "0"
                        + String(seconds);
                var dateString = yearString + "/" + monthString + "/"
                        + dayString + " " + hoursString + ":" + minutesString
                        + ":" + secondsString;

                // updates both the logical value and the real value
                element.attr("data-value", dateString);
                element.attr("value", dateString);
            }

            // retrieves the containing form
            var parentForm = element.parents("form");

            // registers for the submit event in the parent form
            // to create an hidden field that "sends" the converted timestamp
            parentForm.submit(function() {
                        // retrieves the current value and then uses it to parse
                        // it as current timestamp
                        var currentValue = element.attr("value");
                        var currentTimestamp = utc ? Date.parse(currentValue
                                + " UTC")
                                / 1000 : Date.parseUtc(currentValue) / 1000;

                        // retrieves the name attribute from the element
                        // and then removes it to avoid sending the literal date value
                        var name = element.attr("name");
                        element.removeAttr("name");

                        // creates the hidden field to submit the timestamp value
                        // described in the text field
                        element.after("<input type=\"hidden\" name=\"" + name
                                + "\" value=\"" + String(currentTimestamp)
                                + "\" />");
                    });
        };

        var __startdate = function(element, options) {
            // retrieves the reference to the top level
            // window element
            var _window = jQuery(window);

            // checks if the no calendar class (flag) is set
            var noCalendar = element.hasClass("no-calendar")

            // in case the no calendar flag is set
            // no need to create the text field calendar
            if (noCalendar) {
                // creates the empty element representing
                // the calendar
                var calendar = jQuery();
            }
            // otherwise the calendar element must be created
            else {
                // creates the calendar component from the
                // html code and inserts it after the element
                var calendar = jQuery("<div class=\"calendar text-field-calendar\"></div>");
                element.after(calendar);

                // unsets the autocomplete feature in the text field
                // to avoid possible (unwanted) autocomplete sugestions
                element.attr("autocomplete", "off");
            }

            // creates the calendar correctly and then hides it
            calendar.uxcalendar();
            calendar.hide();

            // retrieves the offset and height values
            // from the element to calculate
            // the relative position for the calendar
            var offset = element.offset();
            var height = element.outerHeight();

            // calculates the calendar top and left
            // positions from the element offset and height
            // and then sets them in the calendar
            var calendarTop = offset["top"] + height;
            var calendarLeft = offset["left"];
            calendar.css("top", calendarTop + "px");
            calendar.css("left", calendarLeft + "px");

            // retrieves the current (initial) value from the
            // element (text field)
            var currentValue = element.attr("value");
            var currentTimestamp = parseInt(currentValue);

            // in case the parse of the timestamp was not successful
            if (!isNaN(currentTimestamp)) {
                // converts the date object from the
                // current timestamp value
                var date = new Date(currentTimestamp * 1000);

                // retrieves the various components of the date
                var year = date.getUTCFullYear();
                var month = date.getUTCMonth() + 1;
                var day = date.getUTCDate();

                // sets the calendar value to reflect
                // the initial date value
                calendar.uxcalendar("set", {
                            current : {
                                year : year,
                                month : month,
                                day : day
                            }
                        });

                // creates the date string from the various
                // date components
                var yearString = String(year);
                var monthString = month > 9 ? String(month) : "0"
                        + String(month);
                var dayString = day > 9 ? String(day) : "0" + String(day);
                var dateString = yearString + "/" + monthString + "/"
                        + dayString;

                // updates both the logical value and the real value
                element.attr("data-value", dateString);
                element.attr("value", dateString);
            }

            // registers for the current change event in the calendar
            // to update the text field accordingly
            calendar.bind("current_change", function(event, current) {
                        // unpacks the current structure into year, month and day
                        var year = current["year"];
                        var month = current["month"];
                        var day = current["day"];

                        // creates the date string from the various
                        // date components
                        var yearString = String(year);
                        var monthString = month > 9 ? String(month) : "0"
                                + String(month);
                        var dayString = day > 9 ? String(day) : "0"
                                + String(day);
                        var dateString = yearString + "/" + monthString + "/"
                                + dayString;

                        // updates both the logical value and the real value
                        element.attr("data-value", dateString);
                        element.attr("value", dateString);

                        // triggers the value change event for the element
                        // to notify the event handlers
                        element.triggerHandler("value_change", [dateString]);
                    });

            // registers for the mouse down event on the calendar
            calendar.mousedown(function() {
                        //element to avoid the next (blur)
                        element.data("avoid_next", true);
                    });

            // registers for the mouse up event on the calendar
            calendar.mouseup(function() {
                        // re-focus on the element
                        element.focus();
                    });

            // registers for the value change event on the element
            // to update the value in the calendar
            element.bind("value_change", function(event, inputFieldValue) {
                        // parses the input field value, retrieving
                        // the corresponding timestamp
                        var timestamp = Date.parse(inputFieldValue);

                        // in case the timestamp was not correctly
                        // parsed (not a number)
                        if (isNaN(timestamp)) {
                            // returns immediately
                            return;
                        }

                        // creates the date object from the timestamp
                        var date = new Date(timestamp);

                        var year = date.getFullYear();
                        var month = date.getMonth() + 1;
                        var day = date.getDate();

                        // sets the calendar value to reflect
                        // the text field value changes
                        calendar.uxcalendar("set", {
                                    current : {
                                        year : year,
                                        month : month,
                                        day : day
                                    }
                                });
                    });

            // registers the resize in the window to reposition
            // the calendar in the correct place
            _window.resize(function(event) {
                        // retrieves the offset and height values
                        // from the element to calculate
                        // the relative position for the calendar
                        var offset = element.offset();
                        var height = element.outerHeight();

                        // calculates the calendar top and left
                        // positions from the element offset and height
                        // and then sets them in the calendar
                        var calendarTop = offset["top"] + height;
                        var calendarLeft = offset["left"];
                        calendar.css("top", calendarTop + "px");
                        calendar.css("left", calendarLeft + "px");
                    });

            // retrieves the containing form
            var parentForm = element.parents("form");

            // registers for the submit event in the parent form
            // to create an hidden field that "sends" the converted utc timestamp
            parentForm.submit(function() {
                // retrieves the current value and then uses it to parse
                // it as current timestamp
                var currentValue = element.attr("value");
                var currentTimestamp = Date.parse(currentValue + " UTC") / 1000;

                // retrieves the name attribute from the element
                // and then removes it to avoid sending the literal date value
                var name = element.attr("name");
                element.removeAttr("name");

                // creates the hidden field to submit the timestamp value
                // described in the text field
                element.after("<input type=\"hidden\" name=\"" + name
                        + "\" value=\"" + String(currentTimestamp) + "\" />");
            });

            // sets the calendar in the element
            element.data("calendar", calendar);
        };

        var __fvaluefloatp = function(element, value) {
            // retrieves the decimal places number and tries to
            // parse it as an integer, incase it fails returns
            // immediately the number without processing
            var decimalPlaces = element.attr("data-decimal_places");
            decimalPlaces = parseInt(decimalPlaces);
            if (isNaN(decimalPlaces)) {
                return value;
            }

            // converts teh provided value into a float value and
            // then usees this value to convert it into a fixed
            // representation with the requested number of decimal
            // places (correct specification)
            var valueF = parseFloat(value);
            return valueF.toFixed(decimalPlaces);
        };

        var __fvaluefloat = function(element, value) {
            // retrieves the decimal places number and tries to
            // parse it as an integer, incase it fails returns
            // immediately the number without processing
            var decimalPlaces = element.attr("data-decimal_places");
            decimalPlaces = parseInt(decimalPlaces);
            if (isNaN(decimalPlaces)) {
                return value;
            }

            // converts teh provided value into a float value and
            // then usees this value to convert it into a fixed
            // representation with the requested number of decimal
            // places (correct specification)
            var valueF = parseFloat(value);
            return valueF.toFixed(decimalPlaces);
        };

        var __valuedate = function(element, options) {
            // retrieves the current value and then uses it to parse
            // it as current timestamp then returns it
            var currentValue = element.attr("value");
            var currentTimestamp = Date.parse(currentValue + " UTC") / 1000;
            return currentTimestamp;
        };

        var __showdate = function(element, options) {
            // tries to retrieve the calendar from the element
            var calendar = element.data("calendar")

            // in case no calendar is defined
            if (!calendar) {
                // returns immediately
                return;
            }

            // checks if the calendar is visible
            var isVisible = calendar.is(":visible");

            // in case the calendar is visible
            if (isVisible) {
                // returns immediately
                return;
            }

            // retrieves the offset and height values
            // from the element to calculate
            // the relative position for the calendar
            var offset = element.offset();
            var height = element.outerHeight();

            // calculates the calendar top and left
            // positions from the element offset and height
            // and then sets them in the calendar
            var calendarTop = offset["top"] + height;
            var calendarLeft = offset["left"];
            calendar.css("top", calendarTop + "px");
            calendar.css("left", calendarLeft + "px");

            // "resets" the state of the ux calendar
            calendar.uxcalendar("reset")

            // shows the calendar
            calendar.show();
        };

        var __hidedate = function(element, options) {
            // tries to retrieve the associated
            // calendar and hides it if necessary
            var calendar = element.data("calendar");
            calendar && calendar.hide();
        };

        var __testlength = function(stringValue, length) {
            // converts the (maximum) length into an integer value
            // and then checks if the parsed of length represents
            // a valid number (integer validation)
            var lengthInteger = parseInt(length);
            var isValid = !isNaN(lengthInteger);

            // in case the parsing was not successfull
            // the places test is considered not to be
            // runnable
            if (!isValid) {
                // returns immediately in success, no validation
                // was required for the length
                return true;
            }

            // checks id the length of the current string value is smaller
            // than the maximum allowed length (minus one value)
            valid = stringValue.length <= lengthInteger - 1;

            // returns the result of the length result
            return valid;
        };

        var __testplaces = function(stringValue, decimalPlaces, caret) {
            // converts the decimal places into an integer value
            // and then checks if the parsed number of decimal places
            // represents a valid number
            var decimalPlacesInteger = parseInt(decimalPlaces);
            var isValid = !isNaN(decimalPlacesInteger);

            // in case the parsing was not successfull
            // the places test is considered not to be
            // runnable
            if (!isValid) {
                // returns immediately in success, no validation
                // was required for the places
                return true;
            }

            // retrieves the index for the decimal separator
            // then using it checks if the float number is still
            // valid (decimal places within range)
            var separatorIndex = stringValue.indexOf(".");
            var valid = separatorIndex >= stringValue.length
                    - decimalPlacesInteger
                    || separatorIndex == -1;

            // in case the places validation is valid according
            // to decimal separator validation, no need to run
            // anyting more because no decimal places are found
            if (valid) {
                return valid;
            }

            // checks if the caret is positioned after the decimal
            // separator only in that case the user can change the
            // current string into an invalid one
            valid = caret < stringValue.length - 2;

            // returns the result of the decimal places range result
            return valid;
        };

        var __bluractive = function(matchedObject, options) {
            // retrieves the currently active text fields
            // to blur them in case their are not the current
            var active = jQuery(".text-field.active");

            // iterates over all the elements that are
            // considered to be active text fields
            active.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // checks if the current element reference
                        // dom element is the same as the matched
                        // object (top level reference) in such
                        // case the object cannot be blured
                        if (_element.get(0) == matchedObject.get(0)) {
                            // returns immediately, avoids blur
                            return;
                        }

                        // blurs the current element according to the
                        // the current options map
                        _blur(_element, options);
                    });
        };

        // switches over the method
        switch (method) {
            case "value" :
                // retrieves the value
                var value = _value(matchedObject, options);

                // returns the value
                return value;

            case "reset" :
                // resets the current text field value to
                // its original value
                _reset(matchedObject, options);

                // breaks the switch
                break;

            case "focus" :
                // focus the matched object
                _focus(matchedObject, options);

                // breaks the switch
                break;

            case "blur" :
                // blurs the matched object
                _blur(matchedObject, options);

                // breaks the switch
                break;

            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery toggle field plugin, this jQuery plugin provides the base
 * infra-structure for the creation of a toggle field component.
 *
 * @name jquery-toggle-field.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function(jQuery) {
    jQuery.fn.uxtogglefield = function(method, options) {
        // the default values for the button
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // wraps the matched object around the the toggle field
            // element so that the buttons may be added, then retrieves
            // the "just" created toggle field and adds the button
            // to it (to be used for toggling the state)
            matchedObject.wrap("<div class=\"toggle-field\"></div>");
            var toggleField = matchedObject.parents(".toggle-field");
            toggleField.prepend("<div class=\"button\"></div>");

            // sets the ux global object representation as toggle
            // field, this value may be used latter for fast ux
            // object type access (hash based conditions)
            toggleField.attr("data-object", "togglefield");

            // removes the toggle field from the text field base element
            // and then add the text field class and registers it as a text field
            matchedObject.removeClass("toggle-field");
            matchedObject.addClass("text-field");
            matchedObject.uxtextfield();

            // iterates over all the matched objects to be able to start
            // their modes structure
            matchedObject.each(function(index, element) {
                        // retrieves the current element and uses it to retrieve
                        // the parent toggle field
                        var _element = jQuery(this);
                        var toggleField = _element.parents(".toggle-field");

                        // verifies if the current element is meant to be
                        // positioned to the left and in case it's meant
                        // adds the proper class to the toggle field
                        var isLeft = _element.hasClass("toggle-left");
                        isLeft && toggleField.addClass("toggle-left");

                        // retrieves the value of the attribute that defines
                        // the various modes in case the value is not defined
                        // returns immediately otherwise trims the value and
                        // splits it arround the separator value
                        var modesS = _element.attr("data-modes");
                        if (!modesS) {
                            modesS = "percent";
                        }
                        modesS = modesS.trim();
                        var modes = modesS.split(",");
                        toggleField.data("modes", modes);

                        // sets the initial mode in the toggle field this should
                        // be the first index in the modes sequence
                        _setMode(toggleField, options, 0);
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the toggle field associated with the matched object
            // and then uses it to retrieve the minus and plus buttons
            var toggleField = matchedObject.parents(".toggle-field");
            var button = jQuery(".button", toggleField);

            // registers for the click event on the button
            button.click(function() {
                        // retrieves the current element and the associated
                        // toggle field for changes
                        var element = jQuery(this);
                        var toggleField = element.parents(".toggle-field");
                        var textField = jQuery(".text-field", toggleField);

                        // verifies if the text field element is currently
                        // and in case it's ignores the click event, returning
                        // immediately the control to the caller method
                        var isDisabled = textField.hasClass("disabled");
                        isDisabled = isDisabled || element.hasClass("disabled");
                        if (isDisabled) {
                            return;
                        }

                        // retrieves both the modes sequence and the currently
                        // set index to be used to calculates the new index
                        var modes = toggleField.data("modes");
                        var index = toggleField.data("index");

                        // calculates the new mode index value and sets it in
                        // the (parent) toggle field, note that the text field
                        // is focused while the operation is done this ensures
                        // total text field "emulation"
                        var _index = index == modes.length - 1 ? 0 : index + 1;
                        textField.focus();
                        _setMode(toggleField, options, _index);
                        textField.blur();
                    });

            // binds the toggle field do the enabled event
            // so that is possible to propagate the enabling
            toggleField.bind("enabled", function() {
                        // retrieves the current element and the associated
                        // text field and button elements
                        var element = jQuery(this);
                        var textField = jQuery(".text-field", element);
                        var buttons = jQuery(".button", element);

                        // enables the text field and the buttons associated
                        // with the element (toggle field)
                        textField.uxenable();
                        buttons.uxenable();
                    });

            // binds the toggle field do the disabled event
            // so that is possible to propagate the disabling
            toggleField.bind("disabled", function() {
                        // retrieves the current element and the associated
                        // text field and button elements
                        var element = jQuery(this);
                        var textField = jQuery(".text-field", element);
                        var buttons = jQuery(".button", element);

                        // disables the text field and the buttons associated
                        // with the element (toggle field)
                        textField.uxdisable();
                        buttons.uxdisable();
                    });
        };

        var _reset = function(matchedObject, options) {
            // sets the mode to the oginal zero based index
            // so that the original mode is set
            _setMode(matchedObject, options, 0);
        };

        var _setMode = function(matchedObject, options, index) {
            // retrieves the complete set of modes for the current
            // matched object and in case none is set returns immediately
            var modes = matchedObject.data("modes", modes);
            if (!modes) {
                return;
            }

            // retrieves the underlying text field for the current object
            // it's going to be used in event triggering
            var textField = jQuery(".text-field", matchedObject);

            // retrieves the button associated with the matched object
            // and then iterates over the complete set of modes to remove
            // them from the button
            var button = jQuery(".button", matchedObject);
            for (var _index = 0; _index < modes.length; _index++) {
                var mode = modes[_index];
                button.removeClass(mode);
            }

            // retrieves the "target" mode based on the defined index and
            // adds it as a class to the button
            var mode = modes[index];
            button.addClass(mode);

            // updates the index and mode values for the current matched
            // object so that any further calls will "remember" it
            matchedObject.data("index", index);
            matchedObject.data("mode", mode);
            textField.data("mode", mode);

            // triggers the mode change event so that any listening event
            // handler will be notified about the change, not that the
            // event is triggered both in the matched object and in its
            // containing text field
            matchedObject.triggerHandler("mode_change", [mode, index]);
            textField.triggerHandler("mode_change", [mode, index]);
        };

        // switches over the method
        switch (method) {
            case "reset" :
                // resets the matched object to the value
                // in the current state
                _reset(matchedObject, options);

                // breaks the switch
                break;

            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery window plugin, this jQuery plugin provides the base infra-structure
 * for the creation of a window component.
 *
 * @name jquery-window.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxwindow = function(method, options) {
        // the default values for the window
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // tries to find the window mask
            var windowMask = jQuery(".window-mask", matchedObject);
            var windowMaskExists = windowMask.length > 0;

            // adds the window mask to the window in case it does not exist
            !windowMaskExists
                    && matchedObject.append("<div class=\"window-mask\">"
                            + "<div class=\"window-mask-contents\">Loading "
                            + "<span class=\"window-mask-dots\"></span>"
                            + "</div>" + "</div>");

            // positions the window
            _positionWindow(matchedObject, options);
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the window
            var _window = jQuery(window);

            // retrieves the references to both the close and
            // the accept buttons
            var closeButton = jQuery(".close-button", matchedObject);
            var acceptButton = jQuery(".accept-button", matchedObject);

            // registers for the click in the close button
            closeButton.click(function(event) {
                        // retrieves the element and uses it
                        // to retrieve the parent window
                        var element = jQuery(this);
                        var window = element.parents(".window");

                        // hides the window with the success flag
                        // set to invalid
                        _hide(window, options, false);
                    });

            // registers for the click in the accept button
            acceptButton.click(function(event) {
                        // retrieves the element and uses it
                        // to retrieve the parent window
                        var element = jQuery(this);
                        var window = element.parents(".window");

                        // hides the window with the success flag
                        // set to valid
                        _hide(window, options, true);
                    });

            // registers for the click event in the matched
            // object, to avoid event propagation
            matchedObject.click(function(event) {
                        // stops the event propagation, no need
                        // to propagate the click to the upper levels
                        event.stopPropagation();
                    });

            // iterates over all the elements in the matched object
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // registers the resize in the window
                        // should keep the window centered
                        _window.resize(function(event) {
                                    // positions the window in the screen
                                    _positionWindow(_element, options);
                                });

                        // registers the scroll in the window
                        // should keep the window centered
                        _window.scroll(function() {
                                    // positions the window in the screen
                                    _positionWindow(_element, options);
                                });

                        // registers the changing of contents in
                        // the itnernal structure of the window
                        _element.bind("layout", function() {
                                    // positions the window in the screen
                                    _positionWindow(_element, options);
                                });
                    });
        };

        var _show = function(matchedObject, options) {
            // retrieves the overlay element and forces a resize
            // on it to ensure dimensions (ensures proper size)
            var overlay = jQuery(".overlay");
            overlay.trigger("resize");

            // makes sure that the current object is the only visible
            // window on the screen (ensures modal visibility)
            var pending = __ensureModal(matchedObject, options);
            if (pending) {
                return;
            }

            // shows the overlay and shows at the same time the
            // current object (window)
            overlay.fadeIn(250);
            matchedObject.fadeIn(250);

            // registers for the click event on the global overlay
            // so that the window hides in such case
            __registerClick(matchedObject, options);

            // registers for the key event for the dismissal
            // of the window on the key press
            __registerKey(matchedObject, options);

            // positions the window in the screen
            _positionWindow(matchedObject, options);

            // starts the various forms components contained
            // in the window should reset the form to its
            // original values and layout
            _startForm(matchedObject, options);

            // triggers the show handler so that any handler
            // may be notified about the visibility change
            matchedObject.triggerHandler("show");
        };

        var _hide = function(matchedObject, options, success) {
            // retrieves the overlay element
            var overlay = jQuery(".overlay");

            // unregisters from the click event on the global overlay
            // so that the windows stop respoding from the event
            __unregisterClick(matchedObject, options);

            // unregisters from the key event for the dismissal
            // of the window on the key press
            __unregisterKey(matchedObject, options);

            // hides the overlay and hides at the same time the
            // current object (window)
            overlay.fadeOut(250);
            matchedObject.fadeOut(250);

            // retrieves the appropriate name for the event to be
            // triggered indiccating the state the window has closed
            var name = success ? "success" : "cancel";

            // triggers the hide handler so that any handler
            // may be notified about the visibility change
            matchedObject.triggerHandler("hide");
            matchedObject.triggerHandler(name);
        };

        var _showMask = function(matchedObject, options) {
            // retrieves the window mask
            var mask = jQuery(".window-mask", matchedObject);

            // resizes the mask
            _resizeMask(matchedObject, options);

            // sets the interval for dot update
            var intervalHandler = setInterval(function() {
                        __updateDots(matchedObject, options);
                    }, 500);

            // shows the window mask
            mask.fadeIn(250);

            // sets the interval handler in the mask
            mask.data("interval_handler", intervalHandler)
        };

        var _hideMask = function(matchedObject, options) {
            // retrieves the window mask
            var mask = jQuery(".window-mask", matchedObject);

            // retrieves the interval handler
            var intervalHandler = mask.data("interval_handler");
            window.clearInterval(intervalHandler);

            // hides the window mask
            mask.fadeOut(250);
        };

        var _positionWindow = function(matchedObject, options) {
            // centers the matched object (window)
            matchedObject.uxcenter();
        };

        var _resizeMask = function(matchedObject, options) {
            // retrieves the window mask
            var mask = jQuery(".window-mask", matchedObject);

            // retrieves the matched object dimensions
            var matchedObjectWidth = matchedObject.width();
            var matchedObjectHeight = matchedObject.height();

            // sets the mask dimensions
            mask.width(matchedObjectWidth);
            mask.height(matchedObjectHeight);
        };

        var _startForm = function(matchedObject, options) {
            // retrieves the complete set of fields (form fields)
            // for the current window and then retrieves the first
            // of these elements (to be focused)
            var fields = matchedObject.uxfields()
            var first = jQuery(fields[0]);

            // resets the complete set of form fields and then
            // focus the control on the first field of the window
            // form, providing a rapid interaction scheme for
            // the end user (form reset operation)
            fields.uxreset();
            first.uxfocus();
        };

        var __updateDots = function(matchedObject, options) {
            // retrieves the window mask dots
            var windowMaskDots = jQuery(".window-mask-dots", matchedObject);

            // retrieves the window mask dots contents and length
            var windowMaskDotsContents = windowMaskDots.html();
            windowMaskDotsContentsLength = windowMaskDotsContents.length;

            // in case the dots contents length overflows
            if (windowMaskDotsContentsLength == 3) {
                // resets the dots contents length
                windowMaskDotsContentsLength = 0;
            }
            // otherwise it's a normal increments of dots
            else {
                // increments the dots contents length
                windowMaskDotsContentsLength++;
            }

            // starts the "new" window mask dots contentes
            var windowMaskDotsContents = "";

            // iterates over the dots contents range
            for (index = 0; index < windowMaskDotsContentsLength; index++) {
                // adds a new dot to the contents
                windowMaskDotsContents += "."
            }

            // updates the window mask dots contents
            windowMaskDots.html(windowMaskDotsContents)
        };

        var __registerClick = function(matchedObject, options) {
            // retrieves the overlay element and registers for
            // the click event on it in order to hide the current
            // window then stores it in the data element
            var overlay = jQuery(".overlay");
            var handler = function() {
                var isHiddable = matchedObject.hasClass("window-hide");
                if (!isHiddable) {
                    return;
                }
                matchedObject.uxwindow("hide");
            };
            overlay.click(handler);
            matchedObject.data("click_handler", handler);
        };

        var __unregisterClick = function(matchedObject, options) {
            // retrieves the global overlay and the handle to the
            // callback function then unbinds it from the click
            // even on the overlay
            var overlay = jQuery(".overlay");
            var handle = matchedObject.data("click_handler");
            overlay.unbind("click", handle);
        };

        var __registerKey = function(matchedObject, options) {
            // retrieves the reference to the document element
            // and registers for the key press event on it and
            // sets the key handler in handler key for the
            // current matched object
            var _document = jQuery(document);
            var handler = _document.keydown(function(event) {
                        // retrieves the key value
                        var keyValue = event.keyCode
                                ? event.keyCode
                                : event.charCode ? event.charCode : event.which;

                        // switches over the key value
                        switch (keyValue) {
                            case 27 :
                                _hide(matchedObject, options);
                                break;
                        }
                    });
            matchedObject.data("key_handler", handler);
        };

        var __unregisterKey = function(matchedObject, options) {
            // retrieves the reference to the global document
            // element and then unregisters the key down event
            // handler from it (avoid duplicated events)
            var _document = jQuery(document);
            var handle = matchedObject.data("key_handler");
            _document.unbind("keydown", handle);
        };

        var __ensureModal = function(matchedObject, options) {
            // retrieves the current visible set of windows (only
            // one should be visible at a certain time)
            var visibleWindow = jQuery(".window:visible");
            if (visibleWindow.length == 0) {
                return false;
            }

            // hdies the current set of windows that are visible and
            // at the end of the hide operation shows the window
            visibleWindow.fadeOut(150, function() {
                        matchedObject.uxwindow("show");
                    });
            return true;
        };

        // switches over the method
        switch (method) {
            case "show" :
                // shows the matched object
                _show(matchedObject, options);

                // breaks the switch
                break;

            case "hide" :
                // hides the matched object
                _hide(matchedObject, options);

                // breaks the switch
                break;

            case "show_mask" :
                // shows the mask in the matched object
                _showMask(matchedObject, options);

                // breaks the switch
                break;

            case "hide_mask" :
                // hide the mask in the matched object
                _hideMask(matchedObject, options);

                // breaks the switch
                break;

            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

/**
 * jQuery wizard plugin, this jQuery plugin provides the base infra-structure
 * for the creation of a wizard component.
 *
 * @name jquery-wizard.js
 * @author João Magalhães <joamag@hive.pt>
 * @version 1.0
 * @date March 10, 2010
 * @category jQuery plugin
 * @copyright Copyright (c) 2010-2012 Hive Solutions Lda.
 * @license Hive Solutions Confidential Usage License (HSCUL) -
 *          http://www.hive.pt/licenses/
 */
(function($) {
    jQuery.fn.uxwizard = function(method, options) {
        // the default values for the window
        var defaults = {};

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // retrieves the currently selected panel (if any) and then
            // calculates the initial panel index based on it
            var selectedPanel = jQuery(".panel-stack > .panel.selected",
                    matchedObject);
            var index = selectedPanel.length > 0 ? selectedPanel.index() : 0;

            // tries to update the initial index value based on the index
            // attribute value (declarative setting)
            index = parseInt(matchedObject.attr("data-index")) || index;

            // sets the initial index information in the wizard
            // so that the first page is displayed and then
            // runs the wizard update operation
            matchedObject.data("index", index);
            _update(matchedObject, options);
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the next and previous button for the
            // wizard control
            var buttonNext = jQuery(".button-next", matchedObject);
            var buttonPrevious = jQuery(".button-previous", matchedObject);

            // registers for the click event on the wizard next button
            // (must push the wizard to the next panel)
            buttonNext.click(function() {
                        // rettrieves the element and then uses it to retrieve
                        // the parent wizard
                        var element = jQuery(this);
                        var wizard = element.parents(".wizard");

                        // "runs" to the next element in the wizard
                        _next(wizard, options);
                    });

            // registers for the click event on the wizard previous button
            // (must push the wizard to the previous panel)
            buttonPrevious.click(function() {
                        // rettrieves the element and then uses it to retrieve
                        // the parent wizard
                        var element = jQuery(this);
                        var wizard = element.parents(".wizard");

                        // "runs" to the previous element in the wizard
                        _previous(wizard, options);
                    });
        };

        var _next = function(matchedObject, options) {
            // retrieves the panels associated with the
            // current wizard and then counts them obtain
            // the length of the panels
            var panels = jQuery(".panel-stack > .panel", matchedObject);
            var panelsLength = panels.length;

            // retrieves the last index of the panel either from
            // the attribute in the object or from the default value
            var lastIndex = parseInt(matchedObject.attr("data-last_index"))
                    || panels.length - 1;

            // retrieves the current index from the matched
            // object to update the current wizard index
            var index = matchedObject.data("index");

            // checks if the current index overflows the
            // current count of panels (greater than last index)
            if (index == lastIndex) {
                // returns immediately
                return;
            }

            // updates the index value in the matched object
            // and runs the update function on top of the matched
            // object to update the visuals of the wizard
            matchedObject.data("index", index + 1);
            _update(matchedObject, options);
        };

        var _previous = function(matchedObject, options) {
            // retrieves the current index from the matched
            // object to update the current wizard index
            var index = matchedObject.data("index");

            // retrieves the first index of the panel either from
            // the attribute in the object or from the default value
            var firstIndex = parseInt(matchedObject.attr("data-first_index"))
                    || 0;

            // checks if the current index is the first, in such case
            // it's not possible to go to a previous position
            if (index == firstIndex) {
                // returns immediately
                return;
            }

            // updates the index value in the matched object
            // and runs the update function on top of the matched
            // object to update the visuals of the wizard
            matchedObject.data("index", index - 1);
            _update(matchedObject, options);
        };

        var _set = function(matchedObject, options) {
            // retrieves the target index from the options
            // to update the current wizard index
            var index = options["index"];

            // retrieves the panels associated with the
            // current wizard and then uses then to calculate
            // the first and last indexes
            var panels = jQuery(".panel-stack > .panel", matchedObject);
            var firstIndex = parseInt(matchedObject.attr("data-first_index"))
                    || 0;
            var lastIndex = parseInt(matchedObject.attr("data-last_index"))
                    || panels.length - 1;

            // checks if the current index greater thant the
            // first or the last positions, in such case
            // it's not possible to set the position
            if (index < firstIndex || index > lastIndex) {
                // returns immediately
                return;
            }

            // updates the index value in the matched object
            // and runs the update function on top of the matched
            // object to update the visuals of the wizard
            matchedObject.data("index", index);
            _update(matchedObject, options);
        };

        var _update = function(matchedObject, options) {
            // retrieves the current index information, to know
            // which panel should be displayed
            var index = matchedObject.data("index");

            // retrieves the panels associated with the
            // current wizard and then uses then to calculate
            // the first and last indexes
            var panels = jQuery(".panel-stack > .panel", matchedObject);
            var firstIndex = parseInt(matchedObject.attr("data-first_index"))
                    || 0;
            var lastIndex = parseInt(matchedObject.attr("data-last_index"))
                    || panels.length - 1;

            // retrieves the references to the various buttons
            // associated with the current wizard to update their
            // display "settings"
            var buttonFinish = jQuery(".button-finish", matchedObject);
            var buttonNext = jQuery(".button-next", matchedObject);
            var buttonPrevious = jQuery(".button-previous", matchedObject);

            // in case this is the last index in the wizard
            // the finish button must be displayed
            if (index == lastIndex) {
                // in case the button finish is present and
                // defined (must be shown)
                if (buttonFinish.length > 0) {
                    // shows the finish button and hides the next
                    // buttons (final step situation)
                    buttonFinish.show();
                    buttonNext.hide();
                }
                // otherwise there is no finish button present
                // and so the next button must be disabled
                else {
                    // disables the previous button, removing
                    // the action from it
                    buttonNext.uxdisable();
                }
            }
            // otherwise it's a normal situation and the
            // the next button should be displayed
            else {
                // in case the button finish is present and
                // defined (must be hidden)
                if (buttonFinish.length > 0) {
                    // hides the finish button and shows the next
                    // buttons (normal situation)
                    buttonFinish.hide();
                    buttonNext.show();
                }
                // otherwise there is no finish button present
                // and so the next button must be enabled
                else {
                    // disables the previous button, removing
                    // the action from it
                    buttonNext.uxenable();
                }
            }

            // in case this is the first index in the wizard
            // the previous button must be shown as disabled
            // no more steps back
            if (index == firstIndex) {
                // disables the previous button, removing
                // the action from it
                buttonPrevious.uxdisable();
            }
            // otherwise it's a normal situation and the previous
            // button must be displayed normaly
            else {
                // enables the previous button, adding
                // the action to it
                buttonPrevious.uxenable();
            }

            // retrieves the references to the wizard breadcrumbs and
            // for the panel stack (contains the various wizard panels)
            var breadcrumbs = jQuery(".breadcrumbs", matchedObject);
            var panelStack = jQuery(".panel-stack", matchedObject);

            // updates the breadcrumbs and the panel stack indexes to
            // to reflect the new wizard index (graphical change)
            breadcrumbs.uxbreadcrumbs("set", {
                        index : index
                    });
            panelStack.uxpanelstack("set", {
                        index : index
                    });

            // triggers the index changed in the matched obect
            // so that listeners can change their behaviour accordingly
            matchedObject.triggerHandler("index_changed", [index]);
        };

        // switches over the method
        switch (method) {
            case "next" :
                // increments the wizard index to the next
                // element in the sequence
                _next(matchedObject, options);

                // breaks the switch
                break;

            case "previous" :
                // decrements the wizard index to the previous
                // element in the sequence
                _previous(matchedObject, options);

                // breaks the switch
                break;

            case "set" :
                // sets the wizard index to the selected
                // element in the sequence
                _set(matchedObject, options);

                // breaks the switch
                break;

            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxeval = function(element, options) {
        // the defaut timeout for eval
        var DEFAULT_TIMEOUT = 1000;

        // the default values for the eval
        var defaults = {
            timeout : DEFAULT_TIMEOUT
        };

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
            // iterates over all the elements in the matched object
            matchedObject.each(function(index, element) {
                        // retrieves the element reference
                        var _element = jQuery(element);

                        // retrieves the element eval attribute or html
                        // as the eval string
                        var evalString = _element.attr("data-eval")
                                ? _element.attr("data-eval")
                                : _element.html();

                        // in case the eval string is not valid
                        if (!evalString) {
                            // returns immediately
                            return;
                        }

                        // trims the eval string
                        evalString = evalString.trim();

                        // sets the eval string in the element
                        _element.data("eval_string", evalString);

                        // evaluates the element components
                        _eval(_element, options);
                    });
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // iterates over all the elements in the matched object
            matchedObject.each(function(index, element) {
                // retrieves the element reference
                var _element = jQuery(element);

                // retrieves the timeout for evaluation, first
                // trying to use the timeout attribute and then
                // falling back to the timeout option
                var timeout = _element.attr("data-timeout");
                var timeoutInteger = parseInt(timeout);
                var _timeout = isNaN(timeoutInteger)
                        ? options["timeout"]
                        : timeoutInteger;

                // retrieves the value of the continuous attribute
                // (flag) of the element
                var continuous = _element.attr("data-continuous");

                // retrieves the value of the selector
                var selector = _element.attr("data-selector");

                // sets the interval for continuous evaluation
                // in case the continuous flag is set and there
                // is no (key) selector defined
                continuous && !selector && setInterval(function() {
                            // evaluates the element components
                            _eval(_element, options);
                        }, _timeout);

                // retrieves the selector using a fall back
                // to the body element selector then uses the
                // selector to retrieve the trigger element
                selector = selector ? selector : "body";
                var triggerElement = jQuery(selector);

                // retrieves the various event handlers from the element
                // the handlers are set in case the eval has been run already
                var keyUpHandler = _element.data("evalKeyUpHandler");
                var changeHandler = _element.data("evalChangeHandler");
                var valueChangedHandler = _element.data("evalValueChangedHandler");

                // unbinds the various event handlers from the selected element
                // for the handlers that are already bound (defined in the element)
                keyUpHandler && triggerElement.unbind("keyup", keyUpHandler);
                changeHandler && triggerElement.unbind("change", changeHandler);
                valueChangedHandler
                        && triggerElement.unbind("value_change",
                                valueChangedHandler);

                // sets the key up event handler in the selector in
                // case the continuous flag is set
                continuous && triggerElement.keyup(keyUpHandler = function() {
                    // evaluates the element components
                    _eval(_element, options);
                });

                // sets the change event handler in the selector in
                // case the continuous flag is set
                continuous && triggerElement.change(changeHandler = function() {
                    // evaluates the element components
                    _eval(_element, options);
                });

                // sets the vlaue change event handler in the selector in
                // case the continuous flag is set
                continuous
                        && triggerElement.bind(
                                valueChangedHandler = "value_change",
                                function() {
                                    // evaluates the element components
                                    _eval(_element, options);
                                });

                // saves the various handlers in the element
                // so that any further eveal request will unbind
                // these event handlers
                _element.data("evalKeyUpHandler", keyUpHandler);
                _element.data("evalChangeHandler", changeHandler);
                _element.data("evalValueChangedHandler", valueChangedHandler);
            });
        };

        /**
         * Evaluates the eval string in the matched object emmiting the
         * resulting value to the html contents of it. The evaluation of the
         * matched object is considered dangerous and must be used carefully.
         *
         * @param {Element}
         *            matchedObject The reference to the current matched object.
         * @param {Map}
         *            options The map of options to be used.
         */
        var _eval = function(matchedObject, options) {
            // retrieves the eval string from the
            // matched object
            var evalString = matchedObject.data("eval_string");

            // "evals" the eval string retrieving
            // the (eval) result
            var evalResult = eval(evalString);

            // checks if the matched object is of type input
            // (attribute value oriented) and if it's a text
            // field component
            var isInput = matchedObject.is("input");
            var isTextField = matchedObject.hasClass("text-field");

            // retrieves the current matched object
            // value or html value and compares it to the eval
            // result to check for differences and then checks
            // if the current element has focus
            var current = isInput
                    ? matchedObject.attr("value")
                    : matchedObject.html();
            var different = evalResult != current;
            var hasFocus = matchedObject.hasClass("focus");

            // in case the value is not different or in case there's
            // currently focus on it no need to change it (no propagation)
            if (!different || hasFocus) {
                // returns immediately so that no setting
                // is done in the component
                return;
            }

            // in case the target component is a text field
            // the proper access method must be used
            if (isTextField) {
                // changes the value of the target component
                // according to the result of the eval
                matchedObject.uxtextfield("value", {
                            value : evalResult
                        });
            }
            // in case the target component is an input field
            // the value attribute must be changed
            else if (isInput) {
                // changes the value attribute of the target component
                // according to the result of the eval
                matchedObject.attr("value", evalResult);
            }
            // otherwise it's a general component and the html
            // code must be changed
            else {
                // changes the html code of the target component
                // according to the result of the eval
                matchedObject.html(evalResult);
            }
        };

        // switches over the method
        switch (method) {
            case "eval" :
                // evaluates the matched object
                _eval(matchedObject, options);

                // returns the value
                return value;

            case "default" :
                // initializes the plugin
                initialize();

                // breaks the switch
                break;
        }

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxnamechange = function(options) {
        // the default values for the name change
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // iterates over all the elements in the matched object
            matchedObject.each(function(index, element) {
                // retrieves the element reference
                var _element = jQuery(element);

                // retrieves the parent form
                var form = _element.parents("form");

                // registers for the form submit
                form.submit(function() {
                            // retrieves the element value
                            var value = _element.attr("value");

                            // in case the value is not (need
                            // to change the name attribute)
                            if (!value) {
                                // retrieves the "original" name of the element
                                // to create a backup value
                                var name = _element.attr("name", nameEmpty);

                                // retrieves the name empty value to change the
                                // attribute name in the element
                                var nameEmpty = _element.attr("data-name_empty");
                                _element.attr("name", nameEmpty);

                                // sets the name in the new name old attribute
                                _element.attr("data-name_old", name);
                            }
                        });

                // sets an interval to check for old name
                // values, it's important in some browser to avoid
                // form corruption
                setInterval(function() {
                            // retrieves the name old value
                            var nameOld = _element.attr("data-name_old");

                            // in case no name old value is set
                            if (!nameOld) {
                                // returns immediately
                                return;
                            }

                            // sets the name old value for the name attribute
                            // and removes the name old attribute from the element
                            _element.attr("name", nameOld);
                            _element.removeAttr("data-name_old");
                        }, 250);
            });
        };

        // initializes the plugin
        initialize();

        // returns the object
        return this;
    };
})(jQuery);

(function($) {
    jQuery.fn.uxwidth = function() {
        // sets the jquery matched object
        var matchedObject = this;

        // starts the value for the total width
        // to be computed for the elements
        var width = 0;

        // iterates over all the matched objects
        // to calculate the total width for them
        matchedObject.each(function(index, element) {
                    // retrieves the current element
                    var _element = jQuery(this);

                    // increments the current width counter
                    // with the total width of the element
                    width += _element.outerWidth(true);
                });

        // returns the calculated width
        return width;
    }
})(jQuery);

// registers for the ready event in
// the body element
jQuery(document).ready(function() {
            // retrieves the base element to run
            // the apply (contain ux class)
            var elements = jQuery(".ux");

            // applies the ux to the elements
            elements.uxapply();
        });

// Hive Colony Framework
// Copyright (C) 2008-2012 Hive Solutions Lda.
//
// This file is part of Hive Colony Framework.
//
// Hive Colony Framework is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Hive Colony Framework is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Hive Colony Framework. If not, see <http://www.gnu.org/licenses/>.

// __author__    = João Magalhães <joamag@hive.pt>
// __version__   = 1.0.0
// __revision__  = $LastChangedRevision$
// __date__      = $LastChangedDate$
// __copyright__ = Copyright (c) 2008-2012 Hive Solutions Lda.
// __license__   = GNU General Public License (GPL), Version 3

var Select = Select || {};

Select.map = function(list, _function) {
    // starts the result list as an
    // empty list
    var result = [];

    // iterates over all the
    for (var index = 0; index < list.length; index++) {
        // retrieves the current item from the
        // list (item to be mapped)
        var item = list[index];

        // maps the item using the map function and
        // retrieving the mapped item
        var _item = _function(item);

        // adds the (mapped) item to the result
        // items list
        result.push(_item);
    }

    // returns the list of mapped items
    return result;
}

Select.reduce = function(list, _function) {
    // starts the accumulator with the first
    // element in the list
    var accumulator = list[0];

    // iterates over the (remaining) list elements
    for (var index = 1; index < list.length; index++) {
        // retrieves the current item from the
        // the list
        var item = list[index];

        // calls the reduce function with the current
        // accumulator value and the item, retrieving
        // the "new" accumulator value
        accumulator = _function(accumulator, item);
    }

    // returns the (final) accumulator
    return accumulator;
}

Select.floatValue = function(selector, zerify, defaultValue) {
    // retrieves the element using the
    // given selector
    var element = jQuery(selector);

    // retrieves the float value for the element
    var valueFloat = Select._floatValue(element, zerify, defaultValue);

    // returns the value as float
    return valueFloat;
}

Select.floatValues = function(selector, zerify, defaultValue) {
    // retrieves the element using the
    // given selector
    var element = jQuery(selector);

    // creates the list of value floats
    var valueFloats = [];

    // iterates over all the selected elements
    // to convert their value to float
    element.each(function(index, element) {
                // retrieves the element reference
                var _element = jQuery(element);

                // retrieves the float value for the element
                var valueFloat = Select._floatValue(_element, zerify,
                        defaultValue);

                // adds the value float to the list
                // of value floats
                valueFloats.push(valueFloat);
            });

    // returns the values as floats
    return valueFloats;
}

Select.sum = function(firstSelector, secondSelector, decimalPlaces, defaultValue) {
    // retrieves the first and second values
    var firstValue = Select.floatValue(firstSelector, true);
    var secondValue = Select.floatValue(secondSelector, true);

    // calculates the value and normalizes it
    var value = firstValue + secondValue;
    value = Select._normalizeValue(value, decimalPlaces, defaultValue);

    // returns the calculated value
    return value;
}

/**
 * Sums the various float values resulting from the given selector string. The
 * sum is made using a reduce strategy over a list of elements.
 *
 * @param {String}
 *            selector The string describing the elements to be selected for the
 *            operation.
 * @param {Integer}
 *            decimalPlaces The number of decimal places to be used in the final
 *            number (the value is rounded accordingly).
 * @param {String}
 *            defaultValue The default value to be returned in case no valid
 *            value is calculated.
 * @return {Float} The resulting float value from the sum.
 */
Select.sums = function(selector, decimalPlaces, defaultValue) {
    // retrieves the sum value by adding all the partial values
    var value = Select.reduce(Select.floatValues(selector),
            function(accumulator, item) {
                // "zerifies" the item value (avoids)
                // avoids "extra" erroneous values
                item = isNaN(item) ? 0 : item;

                // returns the addition of the accumulator
                // and the item
                return accumulator + item;
            });

    // normalizes the value according to the given decimal places
    // and default value
    value = Select._normalizeValue(value, decimalPlaces, defaultValue);

    // returns the (reduced) value
    return value;
}

Select.subtract = function(firstSelector, secondSelector, decimalPlaces, defaultValue) {
    // retrieves the first and second values
    var firstValue = Select.floatValue(firstSelector, true);
    var secondValue = Select.floatValue(secondSelector, true);

    // calculates the value and normalizes it
    var value = firstValue - secondValue;
    value = Select._normalizeValue(value, decimalPlaces, defaultValue);

    // returns the calculated value
    return value;
}

/**
 * Subtracts the various float values resulting from the given selector string.
 * The subtraction is made using a reduce strategy over a list of elements.
 *
 * @param {String}
 *            selector The string describing the elements to be selected for the
 *            operation.
 * @param {Integer}
 *            decimalPlaces The number of decimal places to be used in the final
 *            number (the value is rounded accordingly).
 * @param {String}
 *            defaultValue The default value to be returned in case no valid
 *            value is calculated.
 * @return {Float} The resulting float value from the subtraction.
 */
Select.subtracts = function(selector, decimalPlaces, defaultValue) {
    // retrieves the subtraction value by adding all the partial values
    var value = Select.reduce(Select.floatValues(selector),
            function(accumulator, item) {
                // "zerifies" the item value (avoids)
                // avoids "extra" erroneous values
                item = isNaN(item) ? 0 : item;

                // returns the subtraction of the accumulator
                // and the item
                return accumulator - item;
            });

    // normalizes the value according to the given decimal places
    // and default value
    value = Select._normalizeValue(value, decimalPlaces, defaultValue);

    // returns the (reduced) value
    return value;
}

Select.multiply = function(firstSelector, secondSelector, decimalPlaces, defaultValue) {
    // retrieves the first and second values
    var firstValue = Select.floatValue(firstSelector, true, 0);
    var secondValue = Select.floatValue(secondSelector, true, 0);

    // calculates the value and normalizes it
    var value = firstValue * secondValue;
    value = Select._normalizeValue(value, decimalPlaces, defaultValue);

    // returns the calculated value
    return value;
}

Select.multiplys = function(selector, decimalPlaces, defaultValue) {
    // retrieves the multiplication value by multiplying
    // all the partial values
    var value = Select.reduce(Select.floatValues(selector),
            function(accumulator, item) {
                // "zerifies" the item value (avoids)
                // avoids "extra" erroneous values
                item = isNaN(item) ? 1 : item;

                // returns the multiplication of the accumulator
                // and the item
                return accumulator * item;
            });

    // normalizes the value according to the given decimal places
    // and default value
    value = Select._normalizeValue(value, decimalPlaces, defaultValue);

    // returns the (reduced) value
    return value;
}

Select.divide = function(firstSelector, secondSelector, decimalPlaces, defaultValue) {
    // retrieves the first and second values
    var firstValue = Select.floatValue(firstSelector, true, 0);
    var secondValue = Select.floatValue(secondSelector, true, 1);

    // calculates the value and normalizes it
    var value = firstValue / secondValue;
    value = Select._normalizeValue(value, decimalPlaces, defaultValue);

    // returns the calculated value
    return value;
}

Select.divides = function(selector, decimalPlaces, defaultValue) {
    // retrieves the division value by dividing
    // all the partial values
    var value = Select.reduce(Select.floatValues(selector),
            function(accumulator, item) {
                // "zerifies" the item value (avoids)
                // avoids "extra" erroneous values
                item = isNaN(item) ? 1 : item;

                // returns the division of the accumulator
                // and the item
                return accumulator / item;
            });

    // normalizes the value according to the given decimal places
    // and default value
    value = Select._normalizeValue(value, decimalPlaces, defaultValue);

    // returns the (reduced) value
    return value;
}

/**
 * Retrieves a valid float value for the given element. A simple heurisitc is
 * used to determine the correct value to be used in the parsing.
 *
 * An optional zerify flag may be set so that invalid number values are
 * converted to zero.
 *
 * @param {Element}
 *            element The element to be used to retrieve the representation
 *            float value.
 * @param {Boolean}
 *            zerify If the value must be zerified in case an invalid number is
 *            parsed.
 * @param {Float}
 *            defaultValue The default float number value to be used in case the
 *            the zerification process is set.
 * @return {Float} The retrieved and parsed float value for the element.
 */
Select._floatValue = function(element, zerify, defaultValue) {
    // in case the element is itself already
    // a value no need to process it
    if (element.length == 1 && !isNaN(element[0])) {
        // returns the element
        // as the float value (it's a number)
        return element[0];
    }

    // retrieves the value from the element
    // and parses it as an float
    var value = element.attr("value");
    var valueFloat = parseFloat(value);

    // in case the float parse was successfull
    // the found value should be valid
    if (!isNaN(valueFloat)) {
        // returns the float value
        return valueFloat;
    }

    // retrieves the value from the element
    // and parses it as an float
    var value = element.html();
    var valueFloat = parseFloat(value);

    // in case the zerify flag is set, the number
    // must be checked to be a valid number to be
    // "casted" in case it's not
    if (zerify) {
        // "casts" the value into zero (or default value) in
        // case the parsed value is not a valid float number
        valueFloat = isNaN(valueFloat) ? (defaultValue === undefined
                ? 0
                : defaultValue) : valueFloat;
    }

    // returns the float value
    return valueFloat;
}

Select._normalizeValue = function(value, decimalPlaces, defaultValue) {
    // calculates the rounder value from the number of decimal places
    // in case they're defined
    var rounder = decimalPlaces ? Math.pow(10, decimalPlaces) : 0;

    // rounds the value in case the number of decimal places
    // value is defined
    value = decimalPlaces
            ? (Math.round(value * rounder) / rounder).toFixed(decimalPlaces)
            : value;

    // in case the value is not valid (not a number)
    // sets the default value
    if (isNaN(value)) {
        // sets the default value in the value in case it's defined
        value = defaultValue ? defaultValue : "N/A";
    }

    // returns the (normalized) value
    return value;
}

// Hive Colony Framework
// Copyright (C) 2008-2012 Hive Solutions Lda.
//
// This file is part of Hive Colony Framework.
//
// Hive Colony Framework is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Hive Colony Framework is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Hive Colony Framework. If not, see <http://www.gnu.org/licenses/>.

// __author__    = João Magalhães <joamag@hive.pt>
// __version__   = 1.0.0
// __revision__  = $LastChangedRevision$
// __date__      = $LastChangedDate$
// __copyright__ = Copyright (c) 2008-2012 Hive Solutions Lda.
// __license__   = GNU General Public License (GPL), Version 3

var Date = Date || {};

/**
 * Parses the given date string (without utc offset) retrieving an utc timestamp
 * representing the given date.
 *
 * @param {String}
 *            dateString The date string (without utc offset) to be parsed for
 *            retrieval of the timestamp.
 * @return {Integer} The integer representing the utc timestamp in miliseconds.
 */
Date.parseUtc = function(dateString) {
    // creats a new date object
    var date = new Date(dateString);

    // retrieves the time zone name from the date time zone structure
    var dateTimeZoneStructure = date.getTimeZoneStructure();
    var timeZoneName = dateTimeZoneStructure["time_zone_name"];

    // creates the date string from the date string and the time zone name
    // or it uses the new date
    var dateString = dateString ? dateString + " " + timeZoneName : date;

    // parses the date string retrieving the timestamp
    // (in miliseconds) in utc
    var timestamp = Date.parse(dateString);

    // returns the timestamp (in utc)
    return timestamp;
}

/**
 * Retrieves the time zone structure for the current default time zone.
 *
 * @return {Map} The time zone structure for the current default time zone.
 */
Date.prototype.getTimeZoneStructure = function() {
    // retrieves the javascript utc offset
    var javascriptUtcOffset = this.getTimezoneOffset() * -1;

    // calculates the real utc offset from the javascript one
    var utcOffset = javascriptUtcOffset * 60;

    // calculates the absolute javascript utc offset
    var absoluteJavascriptUtcOffset = Math.abs(javascriptUtcOffset);

    // calculates the utc offset in hours
    var utcOffsetHours = Math.floor(absoluteJavascriptUtcOffset / 60);

    // calculates the utc offset in minutes
    var utcOffsetMinutes = absoluteJavascriptUtcOffset % 60;

    // converts the utc offset in hours to string
    var utcOffsetHoursString = utcOffsetHours.toString();

    // converts the utc offset in minutes to string
    var utcOffsetMinutesString = utcOffsetMinutes.toString();

    // retrieves the utc offset in hours string length
    var utcOffsetHoursStringLength = utcOffsetHoursString.length;

    // retrieves the utc offset in minutes string length
    var utcOffsetMinutesStringLength = utcOffsetMinutesString.length;

    // iterates over the remaining digits (while less than two)
    for (var index = utcOffsetHoursStringLength; index < 2; index++) {
        // prepends a zero to the utc offset in hours string
        utcOffsetHoursString = "0" + utcOffsetHoursString;
    }

    // iterates over the remaining digits (while less than two)
    for (var index = utcOffsetMinutesStringLength; index < 2; index++) {
        // prepends a zero to the utc offset in minutes string
        utcOffsetMinutesString = "0" + utcOffsetMinutesString;
    }

    // in case the utc offset is greater or equal to zero
    if (utcOffset >= 0) {
        // prepends the plus operator to the utc offset in hours string
        utcOffsetHoursString = "+" + utcOffsetHoursString;
    } else {
        // prepends the minus operator to the utc offset in hours string
        utcOffsetHoursString = "-" + utcOffsetHoursString;
    }

    // retrieves the time zone name
    var timeZoneName = "GMT" + utcOffsetHoursString + utcOffsetMinutesString;

    // creates the time zone structure
    var timeZoneStructure = {};

    // sets the utc offset value in the time zone structure
    timeZoneStructure["utc_offset"] = utcOffset;

    // sets the time zone name in the time zone structure
    timeZoneStructure["time_zone_name"] = timeZoneName;

    // returns the time zone structure
    return timeZoneStructure;
}

// Hive Colony Framework
// Copyright (C) 2008-2012 Hive Solutions Lda.
//
// This file is part of Hive Colony Framework.
//
// Hive Colony Framework is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Hive Colony Framework is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Hive Colony Framework. If not, see <http://www.gnu.org/licenses/>.

// __author__    = João Magalhães <joamag@hive.pt>
// __version__   = 1.0.0
// __revision__  = $LastChangedRevision$
// __date__      = $LastChangedDate$
// __copyright__ = Copyright (c) 2008-2012 Hive Solutions Lda.
// __license__   = GNU General Public License (GPL), Version 3
// __credits__   = Joseph Myers <e_mayilme@hotmail.com>

var Md5 = Md5 || {};

/**
 * The list of hexadecimal characters available and indexed by position in the
 * radix.
 *
 * @type List
 */
Md5.HEXADECIMAL_CHARACTERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "a", "b", "c", "d", "e", "f"];

/**
 * Retrieves the hexadecimal md5 digest for the given string value.
 *
 * @param {String}
 *            stringValue The string value to be used to calculate the md5
 *            hexadecimal digest
 * @return {String} A string containing the md5 hexadecimal digest value from
 *         the given string value.
 */
Md5.digest = function(stringValue) {
    // retrieves the digest value
    // for the string value and then
    // encodes it into hexadecimal
    var digest = Md5._md5(stringValue);
    var digestHex = Md5.hex(digest);

    // returns the digest in hexadecimal
    return digestHex;
}

/**
 * Converts the given string list (list 32 bit values) and converts it into an
 * hexadecimal string.
 *
 * @param {List}
 *            stringList The list of 32 bit number to be converted to
 *            hexadecimal string.
 * @return {String} The resulting hexadecimal string value from the string list
 *         conversion.
 */
Md5.hex = function(stringList) {
    // allocates the hexadecimal list
    var hexStringList = [];

    // iterates over the string list range
    // to convert the bytes into hexadecimal
    for (var index = 0; index < stringList.length; index++) {
        // converts the current character into hexadecimal
        hexStringList[index] = Md5.rhex(stringList[index]);
    }

    // returns the joininig of the hex
    // string list (creating the string value)
    return hexStringList.join("");
}

/**
 * Converts a number into an hexadecimal string value. The conversion method is
 * static and efficient.
 *
 * @param {Integer}
 *            number The integer "number" to be converted into an hexadecimal
 *            string.
 * @return {String} The hexadecimal string value representing the number
 */
Md5.rhex = function(number) {
    // starts the string value string
    var stringValue = "";

    // iterates over the four bytes in the 32 bit
    // number, to convert them into hexadecimal
    for (var index = 0; index < 4; index++) {
        stringValue += Md5.HEXADECIMAL_CHARACTERS[(number >> (index * 8 + 4))
                & 0x0f]
                + Md5.HEXADECIMAL_CHARACTERS[(number >> (index * 8)) & 0x0f];
    }

    // returns the string value
    return stringValue;
}

/**
 * Adds two values and returns a 32 bit number representing the sum.
 *
 * @param {Integer}
 *            a The first value for the adding.
 * @param {Integer}
 *            b The second value for the adding.
 * @return {Integer} The result of the adding, in 32 bit format.
 */
Md5.add32 = function(a, b) {
    return (a + b) & 0xffffffff;
}

/**
 * Converts the given string value into a list of (32 bit) integer values. This
 * is required in order to deal correctly with the javascript strings.
 *
 * @param {String}
 *            stringValue The string to be converted into a 32 bit integer list
 * @return {List} The list of 32 bit integer values converted from the given
 *         string value.
 */
Md5.md5Block = function(stringValue) {
    // allocates the md5 blocks list
    var md5Blocks = [];

    // iterates over a cycle value
    for (var index = 0; index < 64; index += 4) {
        // calculates the current block value
        md5Blocks[index >> 2] = stringValue.charCodeAt(index)
                + (stringValue.charCodeAt(index + 1) << 8)
                + (stringValue.charCodeAt(index + 2) << 16)
                + (stringValue.charCodeAt(index + 3) << 24);
    }

    // returns the md5 blocks
    return md5Blocks;
}

Md5._md5Cycle = function(x, k) {
    var a = x[0];
    var b = x[1];
    var c = x[2];
    var d = x[3];

    a = Md5._ff(a, b, c, d, k[0], 7, -680876936);
    d = Md5._ff(d, a, b, c, k[1], 12, -389564586);
    c = Md5._ff(c, d, a, b, k[2], 17, 606105819);
    b = Md5._ff(b, c, d, a, k[3], 22, -1044525330);
    a = Md5._ff(a, b, c, d, k[4], 7, -176418897);
    d = Md5._ff(d, a, b, c, k[5], 12, 1200080426);
    c = Md5._ff(c, d, a, b, k[6], 17, -1473231341);
    b = Md5._ff(b, c, d, a, k[7], 22, -45705983);
    a = Md5._ff(a, b, c, d, k[8], 7, 1770035416);
    d = Md5._ff(d, a, b, c, k[9], 12, -1958414417);
    c = Md5._ff(c, d, a, b, k[10], 17, -42063);
    b = Md5._ff(b, c, d, a, k[11], 22, -1990404162);
    a = Md5._ff(a, b, c, d, k[12], 7, 1804603682);
    d = Md5._ff(d, a, b, c, k[13], 12, -40341101);
    c = Md5._ff(c, d, a, b, k[14], 17, -1502002290);
    b = Md5._ff(b, c, d, a, k[15], 22, 1236535329);

    a = Md5._gg(a, b, c, d, k[1], 5, -165796510);
    d = Md5._gg(d, a, b, c, k[6], 9, -1069501632);
    c = Md5._gg(c, d, a, b, k[11], 14, 643717713);
    b = Md5._gg(b, c, d, a, k[0], 20, -373897302);
    a = Md5._gg(a, b, c, d, k[5], 5, -701558691);
    d = Md5._gg(d, a, b, c, k[10], 9, 38016083);
    c = Md5._gg(c, d, a, b, k[15], 14, -660478335);
    b = Md5._gg(b, c, d, a, k[4], 20, -405537848);
    a = Md5._gg(a, b, c, d, k[9], 5, 568446438);
    d = Md5._gg(d, a, b, c, k[14], 9, -1019803690);
    c = Md5._gg(c, d, a, b, k[3], 14, -187363961);
    b = Md5._gg(b, c, d, a, k[8], 20, 1163531501);
    a = Md5._gg(a, b, c, d, k[13], 5, -1444681467);
    d = Md5._gg(d, a, b, c, k[2], 9, -51403784);
    c = Md5._gg(c, d, a, b, k[7], 14, 1735328473);
    b = Md5._gg(b, c, d, a, k[12], 20, -1926607734);

    a = Md5._hh(a, b, c, d, k[5], 4, -378558);
    d = Md5._hh(d, a, b, c, k[8], 11, -2022574463);
    c = Md5._hh(c, d, a, b, k[11], 16, 1839030562);
    b = Md5._hh(b, c, d, a, k[14], 23, -35309556);
    a = Md5._hh(a, b, c, d, k[1], 4, -1530992060);
    d = Md5._hh(d, a, b, c, k[4], 11, 1272893353);
    c = Md5._hh(c, d, a, b, k[7], 16, -155497632);
    b = Md5._hh(b, c, d, a, k[10], 23, -1094730640);
    a = Md5._hh(a, b, c, d, k[13], 4, 681279174);
    d = Md5._hh(d, a, b, c, k[0], 11, -358537222);
    c = Md5._hh(c, d, a, b, k[3], 16, -722521979);
    b = Md5._hh(b, c, d, a, k[6], 23, 76029189);
    a = Md5._hh(a, b, c, d, k[9], 4, -640364487);
    d = Md5._hh(d, a, b, c, k[12], 11, -421815835);
    c = Md5._hh(c, d, a, b, k[15], 16, 530742520);
    b = Md5._hh(b, c, d, a, k[2], 23, -995338651);

    a = Md5._ii(a, b, c, d, k[0], 6, -198630844);
    d = Md5._ii(d, a, b, c, k[7], 10, 1126891415);
    c = Md5._ii(c, d, a, b, k[14], 15, -1416354905);
    b = Md5._ii(b, c, d, a, k[5], 21, -57434055);
    a = Md5._ii(a, b, c, d, k[12], 6, 1700485571);
    d = Md5._ii(d, a, b, c, k[3], 10, -1894986606);
    c = Md5._ii(c, d, a, b, k[10], 15, -1051523);
    b = Md5._ii(b, c, d, a, k[1], 21, -2054922799);
    a = Md5._ii(a, b, c, d, k[8], 6, 1873313359);
    d = Md5._ii(d, a, b, c, k[15], 10, -30611744);
    c = Md5._ii(c, d, a, b, k[6], 15, -1560198380);
    b = Md5._ii(b, c, d, a, k[13], 21, 1309151649);
    a = Md5._ii(a, b, c, d, k[4], 6, -145523070);
    d = Md5._ii(d, a, b, c, k[11], 10, -1120210379);
    c = Md5._ii(c, d, a, b, k[2], 15, 718787259);
    b = Md5._ii(b, c, d, a, k[9], 21, -343485551);

    x[0] = Md5.add32(a, x[0]);
    x[1] = Md5.add32(b, x[1]);
    x[2] = Md5.add32(c, x[2]);
    x[3] = Md5.add32(d, x[3]);
}

Md5._cmn = function(q, a, b, x, s, t) {
    a = Md5.add32(Md5.add32(a, q), Md5.add32(x, t));
    return Md5.add32((a << s) | (a >>> (32 - s)), b);
}

Md5._ff = function(a, b, c, d, x, s, t) {
    return Md5._cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

Md5._gg = function(a, b, c, d, x, s, t) {
    return Md5._cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

Md5._hh = function(a, b, c, d, x, s, t) {
    return Md5._cmn(b ^ c ^ d, a, b, x, s, t);
}

Md5._ii = function(a, b, c, d, x, s, t) {
    return Md5._cmn(c ^ (b | (~d)), a, b, x, s, t);
}

Md5._md5 = function(stringValue) {
    // retrieves the string value lenght as
    // the "number"
    var number = stringValue.length;

    // creates the initial md5 state and the initial
    // tail list value
    var state = [1732584193, -271733879, -1732584194, 271733878];
    var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    // iterates over the "past-initial" string values to run
    // the intermediate md5 cycles
    for (var index = 64; index <= stringValue.length; index += 64) {
        // runs the intermediate md5 cycle
        Md5._md5Cycle(state, Md5.md5Block(stringValue.substring(index - 64,
                        index)));
    }

    // retrieves the initial string value
    stringValue = stringValue.substring(index - 64);

    // runs over the string value length to "calculate" the
    // various tail values
    for (var index = 0; index < stringValue.length; index++) {
        // calculates the current tail value
        tail[index >> 2] |= stringValue.charCodeAt(index) << ((index % 4) << 3);
    }

    // calculates the tail value
    tail[index >> 2] |= 0x80 << ((index % 4) << 3);

    // in case the index is greater that
    // the minimum for the final tail calculation
    if (index > 55) {
        // runs an md5 cycle
        Md5._md5Cycle(state, tail);

        // iterates over all the tail values
        // to reset the tail list
        for (var index = 0; index < 16; index++) {
            // resets the tail element
            tail[index] = 0;
        }
    }

    // sets the final tail value
    // for the last cycle calculation
    tail[14] = number * 8;

    // runs the last md5 cycle
    Md5._md5Cycle(state, tail);

    // returns the state
    return state;
}

// Hive Colony Framework
// Copyright (C) 2008-2012 Hive Solutions Lda.
//
// This file is part of Hive Colony Framework.
//
// Hive Colony Framework is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Hive Colony Framework is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Hive Colony Framework. If not, see <http://www.gnu.org/licenses/>.

// __author__    = João Magalhães <joamag@hive.pt>
// __version__   = 1.0.0
// __revision__  = $LastChangedRevision$
// __date__      = $LastChangedDate$
// __copyright__ = Copyright (c) 2008-2012 Hive Solutions Lda.
// __license__   = GNU General Public License (GPL), Version 3

var Template = Template || {};

/**
 * Normal state for the template engin where it is trying to find new tags.
 */
var TEMPLATE_ENGINE_NORMAL = 1;

/**
 * State where the tempalte engine has just found a dollar sign and is trying to
 * open a tage with an open braces chracter.
 */
var TEMPLATE_ENGINE_DOLLAR = 2;

/**
 * State when the tag has been open and the parser is trying to find the name of
 * the tag.
 */
var TEMPLATE_ENGINE_OPEN = 3;

/**
 * State for the context where the template engine is trying to find the initial
 * part of a "new" parameter inside the tag.
 */
var TEMPLATE_ENGINE_PARAMETERS = 4;

/**
 * State when a new parameter has just been found and the parser is trying to
 * find the limit of it.
 */
var TEMPLATE_ENGINE_PARAMETER = 5;

/**
 * State when the initial part of a value has been found and the parser is
 * trying to find the end of the value.
 */
var TEMPLATE_ENGINE_PARAMETER_VALUE = 6;

/**
 * State where the initial part of a string based value has been found and the
 * end of string is trying to be found for complete string value assert.
 */
var TEMPLATE_ENGINE_PARAMETER_VALUE_STRING = 7;

/**
 * The template node to be used as the root node os the node structure.
 */
var TEMPLATE_NODE_ROOT = 1;

/**
 * The template node representing a "simple" text context.
 */
var TEMPLATE_NODE_TEXT = 2;

/**
 * The template node representing a single open and closing context.
 */
var TEMPLATE_NODE_SINGLE = 3;

/**
 * The template node representing an open (tag) context.
 */
var TEMPLATE_NODE_OPEN = 4;

/**
 * The template node representing an close (tag) context.
 */
var TEMPLATE_NODE_CLOSE = 5;

/**
 * The template node representing an undefined context.
 */
var TEMPLATE_NODE_UNDEFINED = 6;

/**
 * The parameter of type string literal.
 */
var TEMPLATE_PARAMETER_STRING = 1;

/**
 * The parameter of type variable reference it must be dereferenced first.
 */
var TEMPLATE_PARAMETER_REFERENCE = 2;

/**
 * The parameter of type integer, number with no decimal part.
 */
var TEMPLATE_PARAMETER_INTEGER = 3;

/**
 * The parameter of type integer, number with decimal part.
 */
var TEMPLATE_PARAMETER_FLOAT = 4;

var DEFAULT_CALLBACKS = {
    textEnd : function(data, start, end) {
        console.info("textEnd :: '" + data + "'");
    },
    parameter : function(data, start, end) {
        console.info("parameter :: '" + data + "'");
    },
    parameterValue : function(data, start, end) {
        console.info("parameterValue :: '" + data + "'");
    },
    tagEnd : function(data, start, end) {
        console.info("tagEnd :: '" + data + "'");
    }
};

var TemplateEngine = function() {
};

TemplateEngine.prototype.getc = function() {
    var buffer = this.buffer;
    var position = this.position;

    if (position == buffer.length) {
        return null;
    }

    var value = buffer[position];
    this.position++;
    return value;
};

TemplateEngine.prototype.mark = function(value) {
    this.markN(value, 0);
};

TemplateEngine.prototype.markBack = function(value) {
    this.markN(value, 1);
}

TemplateEngine.prototype.markN = function(value, offset) {
    this.marks[value] = this.position - offset;
};

TemplateEngine.prototype.callbackData = function(value) {
    this.callbackDataN(value, 0);
};

TemplateEngine.prototype.callbackDataBack = function(value) {
    this.callbackDataN(value, 1);
};

TemplateEngine.prototype.callbackDataN = function(value, offset) {
    var callback = this.callbacks[value];
    if (!callback) {
        return;
    }

    var start = this.marks[value] || 0;
    var end = this.position - offset;
    var data = this.buffer.slice(start, end);

    callback.call(this.context, data, start, end);
};

TemplateEngine.prototype.callback = function(value) {
    var callback = this.callbacks[value];
    if (!callback) {
        return;
    }

    callback.call(this.context);
};

TemplateEngine.prototype.process = function(template, options) {
    // default the options value to an empty structrue
    // to avoid undefined references
    options = options || {}

    this.buffer = template;
    this.position = 0;
    this.marks = {};
    this.callbacks = options.callbacks || DEFAULT_CALLBACKS;
    this.context = options.context || this;

    var ahead;
    var current;
    var aheadSet = 0;
    var state = TEMPLATE_ENGINE_NORMAL;

    // iterates continuously too run the parser
    // over the complete set of file contents
    while (true) {
        // in case the look ahead mode is set, should
        // read from the look ahead instead of the normal
        // file reading
        if (aheadSet) {
            // sets the current read character as the look
            // ahead character and unsets the ahead set flag
            current = ahead;
            aheadSet = 0;
        }
        // otherwise it must be a normal reading
        else {
            // retrieves the current character
            // from the file stream
            current = this.getc();
        }

        // in case the end of file has been found, or
        // the file size is zero (breaks)
        if (current == null) {
            // breaks the cycle (end of parsing)
            break;
        }

        // switches over the state to determine the appropriate
        // handling to be made for the current character
        switch (state) {
            case TEMPLATE_ENGINE_NORMAL :
                if (current == '$') {
                    state = TEMPLATE_ENGINE_DOLLAR;
                }

                break;

            case TEMPLATE_ENGINE_DOLLAR :
                if (current == '{') {
                    // marks the tag element and calls the text end and tag
                    // begin callbacks
                    this.mark("tagName");
                    this.markN("tagEnd", 2);
                    this.callbackDataN("textEnd", 2);
                    this.callback("tagBegin");

                    // changes the state of the parser to open (tag open)
                    state = TEMPLATE_ENGINE_OPEN;

                    // reads ahead and sets the ahead set flag
                    ahead = this.getc();
                    aheadSet = 1;

                    if (ahead == '/') {
                        this.callback("tagCloseBegin");
                        aheadSet = 0;
                    }
                } else {
                    // resets the state to the "normal"
                    state = TEMPLATE_ENGINE_NORMAL;
                }

                break;

            case TEMPLATE_ENGINE_OPEN :
                if (current == '/') {
                    // reads ahead and sets the ahead set flag
                    ahead = this.getc();
                    aheadSet = 1;

                    if (ahead == '}') {
                        state = TEMPLATE_ENGINE_NORMAL;

                        // unsets the ahead set flag
                        aheadSet = 0;

                        // marks the text end
                        this.mark("textEnd");

                        // calls the tag end and text begin callbacks
                        this.callbackData("tagEnd");
                        this.callback("textBegin");

                        break;
                    }
                }

                if (current == '}') {
                    state = TEMPLATE_ENGINE_NORMAL;

                    this.mark("textEnd");

                    // calls the tag end and text begin callbacks
                    this.callbackData("tagEnd");
                    this.callback("textBegin");

                    break;
                }

                if (current == ' ') {
                    // calls the tag name callback
                    this.callbackDataBack("tagName");

                    // changes the state of the template engine to parametrs
                    // (parameters finding)
                    state = TEMPLATE_ENGINE_PARAMETERS;
                }

                break;

            case TEMPLATE_ENGINE_PARAMETERS :
                if (current == '/') {
                    ahead = this.getc();
                    aheadSet = 1;

                    if (ahead == '}') {
                        state = TEMPLATE_ENGINE_NORMAL;
                        aheadSet = 0;

                        this.mark("textEnd");

                        // calls the tag end and text begin
                        // callbacks
                        this.callbackData("tagEnd");
                        this.callback("textBegin");

                        break;
                    }
                }

                if (current == '}') {
                    state = TEMPLATE_ENGINE_NORMAL;

                    this.mark("textEnd");

                    // calls the tag end and text begin callbacks
                    this.callbackData("tagEnd");
                    this.callback("textBegin");

                    break;
                }

                if (current != ' ') {
                    this.markBack("parameter");

                    state = TEMPLATE_ENGINE_PARAMETER;
                }

                break;

            case TEMPLATE_ENGINE_PARAMETER :
                if (current == '/') {
                    ahead = this.getc();
                    aheadSet = 1;

                    if (ahead == '}') {
                        state = TEMPLATE_ENGINE_NORMAL;
                        aheadSet = 0;

                        this.mark("textEnd");

                        // calls the tag end and text begin
                        // callbacks
                        this.callbackData("tagEnd");
                        this.callback("textBegin");

                        break;
                    }
                }

                if (current == '}') {
                    state = TEMPLATE_ENGINE_NORMAL;

                    this.mark("textEnd");

                    // calls the tag end and text begin callbacks
                    this.callbackData("tagEnd");
                    this.callback("textBegin");

                    break;
                }

                if (current == '=') {
                    // calls the parameter callback and marks the template
                    // engine parameter value
                    this.callbackDataBack("parameter");
                    this.mark("parameterValue");

                    state = TEMPLATE_ENGINE_PARAMETER_VALUE;
                }

                break;

            case TEMPLATE_ENGINE_PARAMETER_VALUE :
                if (current == '/') {
                    ahead = this.getc();
                    aheadSet = 1;

                    if (ahead == '}') {
                        state = TEMPLATE_ENGINE_NORMAL;
                        aheadSet = 0;

                        this.mark("textEnd");

                        // calls the tag end and text begin callbacks
                        this.callbackData("tagEnd");
                        this.callback("textBegin");

                        break;
                    }
                }

                if (current == '}') {
                    state = TEMPLATE_ENGINE_NORMAL;

                    this.mark("textEnd");

                    // calls the th parameter value, tag end and text begin
                    // callbacks
                    this.callbackDataBack("parameterValue");
                    this.callbackData("tagEnd");
                    this.callback("textBegin");

                    break;
                }

                if (current == '\"') {
                    state = TEMPLATE_ENGINE_PARAMETER_VALUE_STRING;
                } else if (current == ' ') {
                    // calls the parameter value callback
                    this.callbackDataBack("parameterValue");

                    state = TEMPLATE_ENGINE_PARAMETERS;
                }

                break;

            case TEMPLATE_ENGINE_PARAMETER_VALUE_STRING :
                if (current == '\"') {
                    // calls the parameter value callback
                    this.callbackData("parameterValue");

                    state = TEMPLATE_ENGINE_PARAMETERS;
                }

                break;
        }
    }

    // in case the current state is engine
    // normal (there must be text to be flushed)
    if (state == TEMPLATE_ENGINE_NORMAL) {
        // calls the text end callback
        this.callbackData("textEnd");
    }
};

var TemplateHandler = function() {
    this.names = {}
};

TemplateHandler.prototype.getValue = function() {
    return this.stringValue;
};

TemplateHandler.prototype.assign = function(name, value) {
    this.names[name] = value;
};

TemplateHandler.prototype.resolve = function(parameter) {
    var value = parameter.value;

    switch (parameter.type) {
        case TEMPLATE_PARAMETER_REFERENCE :
            value = this._get(value);
            break;
    }
    ;

    return value;
};

TemplateHandler.prototype._get = function(name) {
    var names = name.split(".");
    var current = this.names;

    for (var index = 0; index < names.length; index++) {
        var _name = names[index];
        current = current[_name];
    }

    return current;
};

TemplateHandler.prototype.eval = function(item, value, operator) {
    var result = false;

    switch (operator.value) {
        case "eq" :
            result = item === value;
            break;

        case "neq" :
            result = item !== value;
            break;
    }

    return result;
};

TemplateHandler.prototype.process = function(template) {
    this.stringBuffer = [];
    this.nodes = [];
    this.contexts = [];

    // creates the node that will serve as the root node
    // for the tree traversing and then sets it as the
    // current node in iteration
    var rootNode = new TemplateNode(TEMPLATE_NODE_ROOT);
    this.currentNode = rootNode;

    // creates the configuration map to be used for the
    // engine to call the callback methods
    var configuration = {
        callbacks : {
            textBegin : this.onTextBegin,
            textEnd : this.onTextEnd,
            tagBegin : this.onTagBegin,
            tagCloseBegin : this.onTagCloseBegin,
            tagEnd : this.onTagEnd,
            tagName : this.onTagName,
            parameter : this.onParameter,
            parameterValue : this.onParameterValue
        },
        context : this
    };

    // creates a new template engine structure and runs
    // the process command on top of the template string
    var engine = new TemplateEngine();
    engine.process(template, configuration);

    // traverses the top level root node children to create
    // the complete string buffer structure
    this.traverseNode(rootNode);

    // joins the resulting string value into the "final" string
    // value resulting from the template parsing
    this.stringValue = this.stringBuffer.join("");
};

TemplateHandler.prototype.openContext = function() {
    this.contexts.push(this.currentNode);
    this.currentNode = this.temporaryNode;
};

TemplateHandler.prototype.closeContext = function() {
    this.currentNode = this.contexts.pop();
};

TemplateHandler.prototype.onTextBegin = function() {
};

TemplateHandler.prototype.onTextEnd = function(data, start, end) {
    // creates a new template node and sets the template
    // node as the temporary node in the template handler
    var node = new TemplateNode(TEMPLATE_NODE_TEXT);
    this.temporaryNode = node;

    // sets the current data as the name of the node that
    // has just been created
    node.name = data;

    // adds the temporary node to the current list of nodes
    // in the template handler and to the chilren list of
    // the current node
    this.nodes.push(node);
    this.currentNode.children.push(node);
};

TemplateHandler.prototype.onTagBegin = function() {
    // creates a new template node and sets the template
    // node as the temporary node in the template handler
    var node = new TemplateNode(TEMPLATE_NODE_OPEN);
    this.temporaryNode = node;
};

TemplateHandler.prototype.onTagCloseBegin = function() {
    // sets the temporary node type as close
    this.temporaryNode.type = TEMPLATE_NODE_CLOSE;
};

TemplateHandler.prototype.onTagEnd = function(data, start, end) {
    // retrieves the current node to be used as the backup
    // value for the (pvevious) current node before context
    // change actions
    var currentNode = this.currentNode;

    // in case the node does contain the closing
    // symbol at the final part of the tag (assumes single node)
    if (data[data.length - 2] == '/') {
        // sets the temporary node type as single
        this.temporaryNode.type = TEMPLATE_NODE_SINGLE;
    }

    // switches over the temporary node type
    switch (this.temporaryNode.type) {
        case TEMPLATE_NODE_OPEN :
            // opens a new context for the current node
            this.openContext();

            // breaks the switch
            break;

        case TEMPLATE_NODE_CLOSE :
            // closes the current context (node closed)
            this.closeContext();

            // breaks the switch
            break;
    }

    // in case the temporary node is of type close, no need
    // to process it (returns immediately)
    if (this.temporaryNode.type == TEMPLATE_NODE_CLOSE) {
        return;
    }

    // adds the temporary node to the current list of nodes
    // in the template handler and to the chilren list of
    // the temporary node
    currentNode.children.push(this.temporaryNode);
    this.nodes.push(this.temporaryNode);
};

TemplateHandler.prototype.onTagName = function(data, start, end) {
    this.temporaryNode.name = data;
};

TemplateHandler.prototype.onParameter = function(data, start, end) {
    // creates the structure that will hold the complete
    // parameter data, including the value (default to null)
    var parameter = {
        name : data,
        value : null,
        type : null
    }

    this.temporaryNode.temporaryParameter = parameter;
    this.temporaryNode.parameters.push(parameter);
    this.temporaryNode.parametersMap[data] = parameter;
};

TemplateHandler.prototype.onParameterValue = function(data, start, end) {
    var temporaryParameter = this.temporaryNode.temporaryParameter;

    var first = data[0];
    var code = first.charCodeAt(0);

    if (first == '"') {
        temporaryParameter.value = data.slice(1, data.length - 1);
        temporaryParameter.type = TEMPLATE_PARAMETER_STRING;
    } else if (code > 0x2f && code < 0x58) {
        temporaryParameter.value = parseInt(data);
        temporaryParameter.type = TEMPLATE_PARAMETER_INTEGER;
    } else {
        temporaryParameter.value = data;
        temporaryParameter.type = TEMPLATE_PARAMETER_REFERENCE;
    }
};

TemplateHandler.prototype.traverseNode = function(node) {
    // switches over the type of node to be traversed,
    // to print the correct value
    switch (node.type) {
        case TEMPLATE_NODE_ROOT :
            // traverses all the nodes in the root node
            this.traverseNodes(node);

            // breaks the switch
            break;

        case TEMPLATE_NODE_TEXT :
            // adds the node name (text value) to the
            // string buffer
            this.stringBuffer.push(node.name);

            // breaks the switch
            break;

        case TEMPLATE_NODE_SINGLE :
        case TEMPLATE_NODE_OPEN :
            // retrievs the method to be used in the current
            // traverse operation and executes it with the node
            var method = this["traverse_" + node.name];
            method.call(this, node);

            // breaks the switch
            break;
    }
};

TemplateHandler.prototype.traverseNodes = function(node) {
    for (var index = 0; index < node.children.length; index++) {
        var child = node.children[index];
        this.traverseNode(child);
    }
};

TemplateHandler.prototype.traverse_out = function(node) {
    // retrieves the value parameter from the
    // current node to be used to "select" the
    // appropriate output data to be added to
    // the string buffer
    var value = node.getParameter("value");
    var _value = value.value;

    switch (value.type) {
        case TEMPLATE_PARAMETER_STRING :
            this.stringBuffer.push(_value);
            break;

        case TEMPLATE_PARAMETER_REFERENCE :
            _value = this._get(_value);
            var valueS = String(_value);
            this.stringBuffer.push(valueS);
            break;

        case TEMPLATE_PARAMETER_INTEGER :
        case TEMPLATE_PARAMETER_FLOAT :
            var valueS = String(_value);
            this.stringBuffer.push(valueS);
            break;
    }
};

TemplateHandler.prototype.traverse_foreach = function(node) {
    // retrieves the various parameters to be used
    // for the processing of the foreach operation
    var item = node.getParameter("item");
    var from = node.getParameter("from");

    // resolves the from value into the
    // appropriate value
    var value = this.resolve(from);

    for (index = 0; index < value.length; index++) {
        var _value = value[index];
        this.assign(item.value, _value);
        this.traverseNodes(node);
    }
};

TemplateHandler.prototype.traverse_if = function(node) {
    // retrieves the various parameters to be used
    // for the processing of the if operation
    var item = node.getParameter("item");
    var value = node.getParameter("value");
    var operator = node.getParameter("operator");

    // resolves both the item an the value into the
    // appropriate values
    var _item = this.resolve(item);
    var _value = this.resolve(value);

    // evaluates the item and th value using the
    // provided operator and updates the if result
    // context value with it
    var result = this.eval(_item, _value, operator)
    this.assign("if_result", result);

    for (var index = 0; index < node.children.length; index++) {
        var child = node.children[index];

        var _break = false;
        result = this._get("if_result");

        // switches over the type of node to be traversed,
        // to print the correct value
        switch (child.type) {
            case TEMPLATE_NODE_TEXT :
                // adds the node name (text value) to the
                // string buffer
                result && this.stringBuffer.push(child.name);

                // breaks the switch
                break;

            case TEMPLATE_NODE_SINGLE :
            case TEMPLATE_NODE_OPEN :
                _break = result;

                // retrievs the method to be used in the current
                // traverse operation and executes it with the node
                var method = this["traverse_" + child.name];
                !result && method.call(this, child);

                // breaks the switch
                break;
        }

        // in case the break flag is set must break the
        // loop, no more nodes to be traversed
        if (_break) {
            break;
        }
    }
};

TemplateHandler.prototype.traverse_elif = function(node) {
    // retrieves the various parameters to be used
    // for the processing of the if operation
    var item = node.getParameter("item");
    var value = node.getParameter("value");
    var operator = node.getParameter("operator");

    // resolves both the item an the value into the
    // appropriate values
    var _item = this.resolve(item);
    var _value = this.resolve(value);

    // evaluates the item and th value using the
    // provided operator and updates the if result
    // context value with it
    var result = this.eval(_item, _value, operator)
    this.assign("if_result", result);
};

TemplateHandler.prototype.traverse_else = function(node) {
    // sets the if result flag to valid, if this code
    // is reached the next nodes are menat to be executed
    this.assign("if_result", true);
};

var TemplateNode = function(type) {
    this.type = type;
    this.children = [];
    this.parameters = [];
    this.parametersMap = {}
};

TemplateNode.prototype.getParameter = function(name) {
    return this.parametersMap[name];
};

// Hive Colony Framework
// Copyright (c) 2008-2012 Hive Solutions Lda.
//
// This file is part of Hive Colony Framework.
//
// Hive Colony Framework is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Hive Colony Framework is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Hive Colony Framework. If not, see <http://www.gnu.org/licenses/>.

// __author__    = João Magalhães <joamag@hive.pt> & Luís Martinho <lmartinho@hive.pt>
// __version__   = 1.0.0
// __revision__  = $LastChangedRevision$
// __date__      = $LastChangedDate$
// __copyright__ = Copyright (c) 2008-2012 Hive Solutions Lda.
// __license__   = GNU General Public License (GPL), Version 3

(function(jQuery) {
    jQuery.fn.message = function(options) {
        // creates the "final" options map by extending the
        // provided options with the default ones
        var options = jQuery.extend({
                    delay : 1000
                }, options);

        // creates the default callback function to be used when
        // no callback is provided, this is an empty callback
        var callback = function() {
        };

        // defaults the various callback methods so that they may
        // be called safely without any runtime error in case their
        // not defined
        options.complete = options.complete || callback;
        options.success = options.success || callback;
        options.error = options.error || callback;

        // runs the remote call to the server side to provide
        // the correct abstraction for the message process
        jQuery.ajax({
            type : options.type || "get",
            url : options.url,
            data : options.data || {},
            complete : function(request, textStatus) {
                options.complete();
            },
            success : function(data) {
                try {
                    // in case no valid data is received notifies the client
                    // about the error and returns the control immediately
                    if (!data) {
                        throw "Empty message received";
                    }

                    try {
                        // tries to parse the received data as json information
                        // in case it fails raises a message indicating that the
                        // unpacking operation did not succeed
                        data = typeof data == "object"
                                ? data
                                : jQuery.parseJSON(data);
                    } catch (exception) {
                        throw "No valid json data received";
                    }

                    // retrieves the result string value from the (json) data
                    // and notifies the success handler in case the result
                    // was success
                    var result = data["result"];
                    if (result == "success") {
                        options.success(data);
                    }
                    // in case the result value from the message is not succes
                    // notifies the rror handler of the received data
                    else {
                        options.error(data);
                    }
                } catch (message) {
                    options.error({
                                result : "error",
                                message : message
                            });
                    return;
                }
            },
            error : function(request, textStatus, errorThrown) {
                try {
                    // tries to parse the text status as json information
                    // in case it fails or no data is received an invalid
                    // data structure is used instead
                    var data = textStatus ? jQuery.parseJSON(textStatus) : null;
                } catch (exception) {
                    var data = null;
                }

                // in case a valid data is going to be used the error is
                // considered "complete" and the notification process is immediate
                if (data) {
                    options.error(data);
                }
                // otherwise creates a timeout for the notification of the error
                // handler about the error, this avoids excessive error reporting
                // (provides flood controll)
                else {
                    setTimeout(function() {
                                options.error({});
                            }, options.delay);
                }
            }
        });
    };
})(jQuery);

(function(jQuery) {
    jQuery.fn.communication = function(method, options) {
        // the connected status string to be used for
        // refrence in a series of operations
        var CONNECTED_STATUS = "connected";

        // the disconnected status string to be used for
        // refrence in a series of operations
        var DISCONNECTED_STATUS = "disconnected";

        // the error status string to be used for
        // refrence in a series of operations
        var ERROR_STATUS = "error";

        // the default values for the communication
        // extension to be used
        var defaults = {
            timeout : 1000,
            pollTimeout : 50
        };

        // sets the default method value
        var method = method ? method : "default";

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {
        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
            // retrieves the various options that were provided
            // to configure the current matched object
            var url = options["url"];
            var channels = options["channels"];
            var timeout = options["timeout"];
            var pollTimeout = options["pollTimeout"];
            var callbacks = options["callbacks"];

            // updates the matched object with the options that
            // were provided in the initializer
            matchedObject.data("status", DISCONNECTED_STATUS);
            matchedObject.data("url", url);
            matchedObject.data("channels", channels);
            matchedObject.data("timeout", timeout);
            matchedObject.data("poll_timeout", pollTimeout);
            matchedObject.data("callbacks", callbacks);

            // starts the connect command, this should be ran
            // at the end of the handlers registration
            _connect(matchedObject, options);
        };

        var _connect = function(matchedObject, options) {
            // retrieves the url data and the sequence containing
            // the various channels for which the connection is
            // going to be registered
            var url = matchedObject.data("url");
            var channels = matchedObject.data("channels");

            // creates the channels string by joining the various
            // channel names using the comma separator
            var channelsS = channels.join(",")

            // runs the remote call to the server side to provide
            // the connect operation expected behavior
            matchedObject.message({
                        type : "post",
                        url : url,
                        data : {
                            command : "connect",
                            channels : channelsS
                        },
                        success : function(data) {
                            // retrieves the connection id and updates the matched
                            // object data with the id (for latter usage)
                            var connectionId = data["id"];
                            matchedObject.data("id", connectionId);

                            // calls the initial update request and updates
                            // the status of the current connection to connected
                            _update(matchedObject, options);
                            _status(matchedObject, CONNECTED_STATUS);
                        },
                        error : function(data) {
                            // retrieves the timeout data
                            var timeout = matchedObject.data("timeout");

                            // sets the timeout for connection, and
                            // retrieves the timeout handler
                            var timeoutHandler = setTimeout(function() {
                                        _connect(matchedObject, options);
                                    }, timeout);

                            // sets the timeout handler in the current matached
                            // object and updates the current status value
                            matchedObject.data("timeout_handler",
                                    timeoutHandler);
                            _status(matchedObject, DISCONNECTED_STATUS);
                        }
                    });
        };

        var _disconnect = function(matchedObject, options) {
            // retrieves the url data and the current connection
            // identifier to be used in the remote call
            var url = matchedObject.data("url");
            var connectionId = matchedObject.data("id");

            // runs the remote call to the server side to provide
            // the disconnect operation
            matchedObject.message({
                        type : "post",
                        url : url,
                        data : {
                            id : connectionId,
                            command : "disconnect"
                        },
                        success : function(data) {
                            // updates the current connection status to disconnected
                            // because the operation did complete with success
                            _status(matchedObject, DISCONNECTED_STATUS);
                        },
                        error : function(data) {
                            // there must have been a serious low level error in the
                            // current connection so the error status is set in it
                            _status(matchedObject, ERROR_STATUS);
                        }
                    });
        };

        var _data = function(matchedObject, options) {
            // retrieves the data to be send to the other
            // side of the communication (server side)
            var data = options["data"];

            // retrieves the url data and the current connection
            // identifier to be used in the remote call
            var url = matchedObject.data("url");
            var connectionId = matchedObject.data("id");

            // runs the remote call to the server side to provide
            // the disconnect operation
            matchedObject.message({
                        type : "post",
                        url : url,
                        data : {
                            id : connectionId,
                            command : "data",
                            data : data
                        },
                        complete : function() {
                            options.complete && options.complete();
                        },
                        success : function(data) {
                            options.success && options.complete(data);
                        },
                        error : function(data) {
                            options.error && options.error(data);
                        }
                    });
        };

        var _channel = function(matchedObject, options) {
            // retrieves the channel (name) that is going to be used
            // in the channel registration command
            var channel = options["channel"];

            // retrieves the url data and the current connection
            // identifier to be used in the remote call
            var url = matchedObject.data("url");
            var connectionId = matchedObject.data("id");

            // runs the remote call to the server side to provide
            // the disconnect operation
            matchedObject.message({
                        type : "post",
                        url : url,
                        data : {
                            id : connectionId,
                            command : "channel",
                            channel : channel
                        },
                        complete : function() {
                            options.complete && options.complete(channel);
                        },
                        success : function(data) {
                            options.success && options.success(channel);
                        },
                        error : function(data) {
                            options.error && options.error(channel);
                        }
                    });
        };

        var _update = function(matchedObject, options) {
            // retrieves the url data and the current connection
            // identifier to be used in the remote call
            var url = matchedObject.data("url");
            var connectionId = matchedObject.data("id");

            // runs the remote call to the server side to provide
            // the update operation expected behavior
            matchedObject.message({
                        type : "post",
                        url : url,
                        data : {
                            id : connectionId,
                            command : "update"
                        },
                        complete : function() {
                            // retrieves a series of configuration options from
                            // the matched object to be used in the handling
                            var status = matchedObject.data("status");
                            var timeout = matchedObject.data("timeout");

                            // retrieves the proper schedule method to be executed
                            // according to the current status, in case the connection
                            // is currently disconnected tries to connect it again
                            // otherwise runs the "normal" update command to obtain new
                            // data fro the service source
                            var method = status == DISCONNECTED_STATUS
                                    ? _connect
                                    : _update;

                            // sets the timeout for connection, and
                            // retrieves the timeout handler
                            var timeoutHandler = setTimeout(function() {
                                        method(matchedObject, options);
                                    }, timeout);

                            // sets the timeout handler in the matched object
                            // so that it may be retrieved (and used) latter
                            matchedObject.data("timeout_handler",
                                    timeoutHandler);
                        },
                        success : function(data) {
                            // retrieves the result message
                            var _data = data["data"];
                            var dataElement = jQuery(_data);

                            // iterates over each of the data elements received
                            // and for each of them calls the appropriate callbacks
                            dataElement.each(function(index, element) {
                                        _callbacks(matchedObject, options,
                                                element);
                                    });

                            // updates the current status to connected, an update
                            // was successfull so the connection is consired
                            // to be online
                            _status(matchedObject, CONNECTED_STATUS);
                        },
                        error : function(data) {
                            // updates the current connection status to disconnected
                            // as there was an error in the update operation
                            _status(matchedObject, DISCONNECTED_STATUS);
                        }
                    });
        };

        var _callbacks = function(matchedObject, options, data) {
            // retrieves the various callbacks registered for data
            // handling in the current matched object
            var callbacks = matchedObject.data("callbacks");

            // sets the default data callback functions, defaulting
            // to an empty list in case their not provided
            callbacks = callbacks ? callbacks : [];

            // iterates over all the data callback functions and calls
            // each of them with the received data
            jQuery(callbacks).each(function(index, element) {
                        // calls the callback function
                        element(data);
                    });
        };

        var _status = function(matchedObject, status, parameters) {
            // retrieves the status data
            var currentStatus = matchedObject.data("status");

            // in case the "new" status is the same
            // as the current status
            if (currentStatus == status) {
                // returns immediately
                return;
            }

            // switches over the status of the connection to handle
            // the change correctly
            switch (status) {
                case CONNECTED_STATUS :
                    // triggers the stream connected event to notify
                    // the client about the new connection
                    matchedObject.triggerHandler("stream_connected", parameters);

                    // breaks the switch
                    break;
                case DISCONNECTED_STATUS :
                    // triggers the stream disconnected event to notify
                    // the client about the closing of the connection
                    matchedObject.triggerHandler("stream_disconnected",
                            parameters);

                    // breaks the switch
                    break;
                case ERROR_STATUS :
                    // triggers the stream error event to notify
                    // the client about error in the connection infra-structure
                    matchedObject.triggerHandler("stream_error", parameters);

                    // breaks the switch
                    break;
            }

            // sets the status in the data
            matchedObject.data("status", status);
        };

        // switches over the method
        switch (method) {
            case "disconnect" :
                _disconnect(matchedObject, options);
                break;

            case "data" :
                _data(matchedObject, options);
                break;

            case "channel" :
                _channel(matchedObject, options);
                break;

            case "default" :
                // initializes the plugin
                initialize();
                break;
        }

        // returns the object
        return this;
    };
})(jQuery);
