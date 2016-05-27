!function($) {
    "use strict";

    // Toggle Applications View
    $("#app-toggle-link").click(function() {
        var txt = $(".collapse").is(':visible') ? 'Show All Applications' : 'Show My Applications';
        $("#app-toggle-link").text(txt);
    });

}(window.jQuery);
