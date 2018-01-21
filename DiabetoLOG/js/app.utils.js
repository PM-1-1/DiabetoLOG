/*global window*/

/**
 * Application common utility module.
 * Provides common methods used by other modules (event triggering).
 *
 * @module app.utils
 * @namespace app.utils
 * @memberof app
 */

// make sure that "app" namespace is created
window.app = window.app || {};

// strict mode wrapper function
(function defineAppUtils(app) {
    'use strict';

    // create namespace for the module
    app.utils = app.utils || {};

    /**
     * Dispatches an event.
     *
     * @memberof app.utils
     * @public
     * @param {string} eventName Event name.
     * @param {*} data Detailed data.
     */
    app.utils.dispatchEvent = function dispatchEvent(eventName, data) {
        var customEvent = new window.CustomEvent(eventName, {
            detail: data,
            cancelable: true
        });

        window.dispatchEvent(customEvent);
    };

})(window.app);
