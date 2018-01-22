/* global window, document, console, init */

/**
 * Main application module.
 * Handles application ui life cycle.
 *
 * @author <piotr.maziak@gmail.com>
 * @module app.ui
 * @namespace app.ui
 */

// make sure that "app" namespace is created
window.app = window.app || {};

// strict mode wrapper function
(function defineApp(app) {
    'use strict';

    // create namespace for the module
    app.ui = app.ui || {};

    /**
     * Navigation tint icon.
     *
     * @name navTintIcon
     * @memberof app.ui
     * @private
     * @type {HTMLElement}
     */
    var navTintIcon = null,

        /**
         * Navigation heart icon.
         *
         * @memberof app.ui
         * @private
         * @type {HTMLElement}
         */
        navHeartIcon = null,

        /**
         * Navigation PDF icon.
         *
         * @memberof app.ui
         * @private
         * @type {HTMLElement}
         */
        navPdfIcon = null,

        /**
         * Navigation save icon.
         *
         * @memberof app.ui
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
     * @memberof app.ui
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
     * @memberof app.ui
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
     * Dispatch event to the controller.
     *
     * @memberof app.ui
     * @private
     */
    function onNavPdfIconClick() {
        console.log('Uzytkownik kliknal generacje PDF');
        console.log('UI powiadamia controllera');
        app.utils.dispatchEvent('app.NavPdfIconClick',
            {poziom_cukru:           "120",
             data_pomiaru_cukru:     "10-11-2018",
             cisnienie_skurczowe:    "120",
             cisnienie_rozkurczowe:  "80",
             data_pomiaru_cisnienia: "11-11-2018"});

    }

    /**
     * Handles click event on navigation save icon.
     *
     * @memberof app.ui
     * @private
     */
    function onNavSaveIconClick() {
        console.log('onNavSaveIconClick');
    }
    /**
     * Handles event on pdfGenerated.
     *
     * @memberof app.ui
     * @private
     */
    function onPdfGenerated(e) {
        console.log("Model powiadamil ui o koniecznosci przerenderowania 'sceny'");
        console.log("np status zapisu do PDF.........." + e.detail.pdf_status);
    }

    /**
     * Registers event listeners.
     *
     * @memberof app.ui
     * @private
     */
    function bindEvents() {
        navTintIcon.addEventListener('click', onNavTintIconClick);
        navHeartIcon.addEventListener('click', onNavHeartIconClick);
        navPdfIcon.addEventListener('click', onNavPdfIconClick);
        navSaveIcon.addEventListener('click', onNavSaveIconClick);
        window.addEventListener('model.onPdfGenerated', onPdfGenerated);
    }

    /**
     * Initializes module.
     *
     * @memberof app.ui
     * @public
     */
    function init() {
        navTintIcon = document.getElementById('nav-tint');
        navHeartIcon = document.getElementById('nav-heart');
        navPdfIcon = document.getElementById('nav-pdf');
        navSaveIcon = document.getElementById('nav-save');
        sugarSection = document.querySelector('.sugar');
        bloodSection = document.querySelector('.blood');
        bindEvents();
    }
    app.ui = {
        init: init
    };

})(window.app);

