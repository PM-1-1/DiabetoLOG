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
     * Navigation tint icon.
     *
     * @name navTintIcon
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
         * @type {HTMLElement}
         */
        navSaveIcon = null,
        sugarSection = null,
        bloodSection = null;

    /**
     * Handles click event on navigation tint icon.
     *
     * @function
     * @memberof app
     * @private
     */
    function onNavTintIconClick() {
        if (sugarSection.classList.contains('hidden')) {
            sugarSection.classList.remove('hidden');
        }

        bloodSection.classList.add('hidden');
    }

    /**
     * Handles click event on navigation heart icon.
     *
     * @memberof app
     * @private
     */
    function onNavHeartIconClick() {
        if (bloodSection.classList.contains('hidden')) {
            bloodSection.classList.remove('hidden');
        }

        sugarSection.classList.add('hidden');
    }

    /**
     * Handles click event on navigation PDF icon.
     *
     * @memberof app
     * @private
     */
    function onNavPdfIconClick() {
        app.utils.dispatchEvent('app.NavPdfIconClick', {test: "Testowe Dane"});
        console.log('onNavPdfIconClick event');
    }

    /**
     * Handles click event on navigation save icon.
     *
     * @memberof app
     * @private
     */
    function onNavSaveIconClick() {
        console.log('onNavSaveIconClick');
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
        navPdfIcon.addEventListener('click', onNavPdfIconClick);
        navSaveIcon.addEventListener('click', onNavSaveIconClick);
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
        sugarSection = document.querySelector('.sugar');
        bloodSection = document.querySelector('.blood');
        bindEvents();
        app.controller.init();
    }

    window.addEventListener('load', init);

})(window.app);

