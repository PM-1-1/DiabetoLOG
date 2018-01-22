/* global window, document, console */

/**
 * Main application module.
 * Handles application life cycle.
 *
 * @author <piotr.maziak@gmail.com>
 * @module app
 * @namespace app
 */

// make sure that "app" namespace is created
window.app = window.app || {};

// strict mode wrapper function
(function defineApp(app) {
    'use strict';

    /**
     * Initializes module.
     *
     * @memberof app
     * @private
     */
    function init() {
        app.ui.init();
        app.controller.init();
        app.model.init();
    }

    window.addEventListener('load', init);

})(window.app);

