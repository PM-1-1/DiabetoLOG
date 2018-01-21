/* global window, document, console */

/**
 * Application controller module.
 * Handles application life cycle.
 *
 * @author <piotr.maziak@gmail.com>
 * @module app.controller
 * @namespace app.controller
 */

// make sure that "app" namespace is created
window.app = window.app || {};

// strict mode wrapper function
(function defineAppController(app) {
    'use strict';

    // create namespace for the module
    app.controller = app.controller || {};

    /**
     *
     *
     * @memberof app
     * @private
     */
    function onNavPdfIconPressed(e) {
        console.log("PDF Pressed");
        console.log(e.detail.test);
    }


    /**
     * Registers event listeners.
     *
     * @memberof app
     * @private
     */
    function bindEvents() {
        window.addEventListener('app.NavPdfIconClick', onNavPdfIconPressed);
    }

    /**
     * Initializes module.
     *
     * @memberof app.controller
     * @private
     */
    function init() {
        bindEvents();
    }

    app.controller = {
        init: init
    };


})(window.app);