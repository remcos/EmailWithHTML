define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",

    "mxui/dom",
    "dojo/dom",
    "dojo/dom-prop",
    "dojo/dom-geometry",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/dom-construct",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/text",
    "dojo/html",
    "dojo/_base/event"


], function (declare, _WidgetBase, dom, dojoDom, dojoProp, dojoGeometry, dojoClass, dojoStyle, dojoConstruct, dojoArray, dojoLang, dojoText, dojoHtml, dojoEvent) {
    "use strict";

    return declare("EmailWithHTML.widget.EmailWithHTML", [ _WidgetBase ], {

        // Internal variables.
        _handles: null,
        _contextObj: null,
		
		toField: "",
		ccField: "",
		subjectField: "",
		bodyField: "",

        constructor: function () {
            this._handles = [];
        },

        postCreate: function () {
            logger.debug(this.id + ".postCreate");
        },

        update: function (obj, callback) {
            logger.debug(this.id + ".update");
	
            this._contextObj = obj;
            this._updateRendering(callback);
        },

        uninitialize: function () {
          logger.debug(this.id + ".uninitialize");
        },

        _updateRendering: function (callback) {
            logger.debug(this.id + "._updateRendering");
			
            if (this._contextObj !== null) {
				var toField = this._contextObj.get(this.toField);
				var ccField = this._contextObj.get(this.ccField);
				var subjectField = this._contextObj.get(this.subjectField);
				var bodyField = this._contextObj.get(this.bodyField);
						
                cordova.plugins.email.isAvailable( function (isAvailable) {	
					if (isAvailable) {
						// alert('Service is not available') unless isAvailable;
						
						cordova.plugins.email.open({
							to:      toField,
							cc:      ccField,
							subject: subjectField,
							body:    bodyField
						});
						
						mx.ui.back();
					} else {
						console.log("Device not capable of sending emails");
					}
				});	
            } else {
                console.log("No context object.");
            }

            mendix.lang.nullExec(callback);
        }
    });
});

require(["EmailWithHTML/widget/EmailWithHTML"]);
