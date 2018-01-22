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
        console.log("Controller przekazuje do modelu zadanie generowania PDF:");
        console.log("POZIOM CUKRU");
        console.log("Data pomiaru: " + e.detail.data_pomiaru_cukru +" Poziom cukru: " + e.detail.poziom_cukru);
        console.log("POZIOM CISNIENIA");
        console.log("Data pomiaru cisnienia: " + e.detail.data_pomiaru_cisnienia);
        console.log("Cisnienie skurczowe: "    + e.detail.cisnienie_skurczowe);
        console.log("Cisnienie rozkurczowe: "  + e.detail.cisnienie_rozkurczowe);

        app.utils.dispatchEvent('controller.onNavPdfIconPressed',e.detail);
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