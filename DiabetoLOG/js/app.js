/* global window, document, console */

/**
 * Main application module.
 * Handles application life cycle.
 *
 * @module app
 * @namespace app
 */

// make sure that "app" namespace is created
window.app = window.app || {};

// strict mode wrapper function
(function defineApp(app) {
    'use strict';

    /**
     * Navigation tint icon.
     *
     * @memberof app
     * @private
     * @type {HTMLElement}
     */
    var navTintIcon = null,

        /**
         * Navigation heart icon.
         *
         * @memberof app
         * @private
         * @type {HTMLElement}
         */
        navHeartIcon = null,

        /**
         * Navigation PDF icon.
         *
         * @memberof app
         * @private
         * @type {HTMLElement}
         */
        navPdfIcon = null,

        /**
         * Navigation save icon.
         *
         * @memberof app
         * @private
         * @type {null}
         */
        navSaveIcon = null;

    /**
     * Handles click event on navigation tint icon.
     *
     * @memberof app
     * @private
     */
    function onNavTintIconClick() {
        console.log('onNavTintClick event');
    }

    function onNavHeartIconClick() {
        console.log('onNavTintClick event');
    }
    /**
     * Registers event listeners.
     *
     * @memberof app
     * @private
     */
    function bindEvents() {
        navTintIcon.addEventListener('click', onNavTintIconClick);
        navHeartIcon.addEventListener('click', onNavHeartIconClick);
    }

    /**
     * Initializes module.
     *
     * @memberof app
     * @private
     */
    function init() {
        navTintIcon = document.getElementById('nav-tint');
        navHeartIcon = document.getElementById('nav-heart');
        navPdfIcon = document.getElementById('nav-pdf');
        navSaveIcon = document.getElementById('nav-save');
        bindEvents();
    }

    window.addEventListener('load', init);

})(window.app);

