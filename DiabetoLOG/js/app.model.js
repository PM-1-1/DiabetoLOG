/* global window, document, console */

/**
 * Application model module.
 * Handles application life cycle.
 *
 * @author <piotr.maziak@gmail.com>
 * @module app.model
 * @namespace app.model
 */

// make sure that "app" namespace is created
window.app = window.app || {};

// strict mode wrapper function
(function defineAppController(app) {
    'use strict';

    // create namespace for the module
    app.model = app.model || {};

    function dataToPdf(detail)
    {
        console.log("Pobieram dane z bazy");
        console.log("Model Obrabia dane");
        var pdf3 = new jsPDF();
        pdf3.text(20,20,"Pomiary cisnienia");
        pdf3.text(20,30,(1 + ". Data: "
            + detail.data_pomiaru_cisnienia
            + " Pomiar cisnienia "
            + detail.cisnienie_skurczowe
            + ' / '
            + detail.cisnienie_rozkurczowe));
        pdf3.text(20,40, "Pomiary cukru");
        pdf3.text(20,50,(1 + ". Data: "
            + detail.data_pomiaru_cukru
            + " Pomiar cukru: "
            + detail.poziom_cukru));

        pdf3.save();
        console.log("Model wykonal 'obliczenia'");
        console.log("Model wysyla update do UI");
        app.utils.dispatchEvent('model.onPdfGenerated',{pdf_status: "SUCCESS"});
    }
    /**
     *
     *
     * @memberof app.model
     * @private
     */
    function onNavPdfIconPressed(e) {
        console.log("Model otrzymal od controllera zadanie generowania PDF");
        dataToPdf(e.detail);
    }


    /**
     * Registers event listeners.
     *
     * @memberof app.model
     * @private
     */
    function bindEvents() {
        window.addEventListener('controller.onNavPdfIconPressed', onNavPdfIconPressed);
    }

    /**
     * Initializes module.
     *
     * @memberof app.model
     * @private
     */
    function init() {
        bindEvents();
    }

    app.model = {
        init: init
    };


})(window.app);