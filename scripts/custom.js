jQuery(document).ready(function() {
    var windowHeight = parseInt(jQuery(window).height(), 10);

    jQuery('#cregital-slider-1').css('height', windowHeight);

});

jQuery(document).ready(function() {
    jQuery("#ninja_forms_field_11").on("click", function(e) {
        e.preventDefault();
        jQuery("#ninja_forms_field_11").attr("disabled", "disabled");
        feedback_send();
        jQuery("#ninja_forms_field_11").removeAttr("disabled");
    });

});

function feedback_send() {

    var name = jQuery("#ninja_forms_field_10").val();
    var phone = jQuery("#ninja_forms_field_15").val();
    var email = jQuery("#ninja_forms_field_13").val();
    var comments = jQuery("#ninja_forms_field_14").val();
    var pageid = jQuery("#pageid").val();

    if (name == "" || phone == "" || email == "") {
        alert("Please fill all fields in form!");
        return;
    }


    //if (typeof (essb_settings) != "undefined") {
    jQuery.post('/svcs/SendMailFeedback.ashx', {
        "name": name,
        "phone": phone,
        "email": email,
        "comments": comments,
        "pageid": pageid
    }, function(data) {
        if (data) {
            //console.log(data);
            alert("Email sent!"); //data["message"]
            if (data["code"] == "1") {
                jQuery("#ninja_forms_field_10").val('');
                jQuery("#ninja_forms_field_15").val('');
                jQuery("#ninja_forms_field_13").val('');
                jQuery("#ninja_forms_field_14").val('');
            }
        }
    }, 'json');
    //}
};

jQuery('#search-form-1').on('submit', function(e) {

    if (jQuery('#ctrlValue').val() == 0) {
        e.preventDefault();
        var currentVal = jQuery('#fs-search-input').val();

        jQuery('#fs-search-input').val(currentVal.replace(/<(?:.|\n)*?>/gm, ''));
        jQuery('#ctrlValue').val("1");
        jQuery(this).submit();
    }
    return true;
});