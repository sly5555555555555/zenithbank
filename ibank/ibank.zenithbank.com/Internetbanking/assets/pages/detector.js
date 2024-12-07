function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    return false;
}
$(document).ready(function() {
    var version = detectIE();
    if (version !== false && version < 10) {
        window.location = "../../Custom/General/Compability.aspx";
    }
});