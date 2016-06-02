/**
 * Theme: Adminto Admin Template
 * Author: Coderthemes
 * SweetAlert
 */

!function ($) {
    "use strict";

    var SweetAlert = function () {
    };

    //examples 
    SweetAlert.prototype.init = function () {

        //A title with a text under
        $('.unimplemented').click(function () {
            swal("Not Yet Implemented!", "Oops we haven't gptten around to creating a demo for that feature. Please keep clicking around to experience the things we have actually completed. - Acada+ Development Team")
        });

    },
        //init
        $.SweetAlert = new SweetAlert, $.SweetAlert.Constructor = SweetAlert
}(window.jQuery),

//initializing 
    function ($) {
        "use strict";
        $.SweetAlert.init()
    }(window.jQuery);