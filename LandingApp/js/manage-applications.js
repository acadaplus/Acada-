!function($) {
    "use strict";

    // Toggle Applications View
    $("#parent-portal-toggle").change(function() {
        if (this.checked) {
            $(".checkbox-inline").removeAttr("disabled");
        } else {
            $(".checkbox-inline").attr("disabled", true);
        }
    });

}(window.jQuery);
