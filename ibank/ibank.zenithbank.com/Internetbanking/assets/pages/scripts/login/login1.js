var errorMesage = 'Password';

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    ios: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    ieMobile: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    Any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.ieMobile() || isMobile.Opera() || isMobile.ios());
    }

}

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

    //var paygilantsessionId = document.getElementById("sfSessionId").value;

    //console.log("paygilantdeviceId: " + paygilantsessionId);    
    //$(".UserSessionId").val(paygilantsessionId);    
    document.getElementById("MainContent_LoginSection_UserSessionID_ctrl").style.display = "none";

    //$(".DeviceID").val(paygilantdeviceId);
    document.getElementById("MainContent_LoginSection_DeviceID_ctrl").style.display = "none";
    //console.log("paygilantdeviceId: " + paygilantdeviceId);

    //$("#MainContent_LoginSection_UserID_Label").remove();
    $("#MainContent_LoginSection_Password_Label").remove();

    $('.Username').attr('maxlength', '10');
    $('.Username').attr('placeholder', 'Account Number');

    var text = $('#ctl00_MainContent_LoginSection_mode_ctrl_Input').val();
    if (text == "Internet Banking Password") {
        $('.Password').attr('placeholder', "Password");
    } else {
        $('.Password').attr('placeholder', text);
    }

    $('.Username').wrap("<div class='input-group'></div>");
    $('.Username').before("<span class='input-group-addon fontawesome-user'><span class='fa fa-user'></span></span>");


    $('.Password').wrap("<div class='input-group'></div>");
    $('.Password').before("<span class='input-group-addon fontawesome-user'><span class='fa fa-unlock-alt'></span></span>");
    $('.Password').after("<span class='input-group-addon fontawesome-user'><i class='glyphicon glyphicon-eye-open' id='showPassExist' data-toggle='tooltip' title='Show PIN'></i></span>");


    var showPassTime = 1000;
    $('#showPassExist').click(function() {
        $('.Password').prop('type', 'text');
        setTimeout(function() {
            $('.Password').prop('type', 'password');
        }, showPassTime)
    })

    $('#ctl00_MainContent_LoginSection_mode_ctrl table').attr("class", "rcbHovered");


    //$(".Username").attr("AUTOCOMPLETE", "disable");
    //if (navigator.userAgent.toLowerCase().indexOf('chrome') >= 0) {
    //    setTimeout(function () {

    //        $(".Username").attr("autocomplete", "off");
    //        $(".Password").attr("autocomplete", "off");
    //    }, 1);
    //}
    //else {
    //    $(".Username").attr("autocomplete", "off");
    //    $(".Password").attr("autocomplete", "off");
    //}


    $(".Username").focus();


    $('.login-bg').backstretch([
        //"../../assets/pages/img/login/Techfair_2024.jpg",
        "../../assets/pages/img/login/Internet_Banking.jpg"
        // "../../assets/pages/img/login/966_Giveaway.jpg"
        //"../../assets/pages/img/login/dubia_promo.jpg",
        //"../../assets/pages/img/login/dubia_promo1.jpg"
        //"../../assets/pages/img/login/bg9.jpg"

        //"../../assets/pages/img/login/save4me.jpg"
        //"../../assets/pages/img/login/Ad_1.jpg",
        //"../../assets/pages/img/login/Ad_2.jpg",
        //"../../assets/pages/img/login/Ad_3.jpg"
        //"../../assets/pages/img/login/zeca.jpg"
        // "../../assets/pages/img/login/dubai.jpg"
        //"../../assets/pages/img/login/bg1.jpg"
        //"../../assets/pages/img/login/bg2.jpg",
        ////"../../assets/pages/img/login/bg3.jpg",
        //"../../assets/pages/img/login/bg4.jpg",
        //"../../assets/pages/img/login/bg5.jpg",
        //"../../assets/pages/img/login/bg6.jpg"
    ], {
        fade: 1000,
        duration: 8000
    });


    startValidation();



});


function OverrideOnClientSelectedIndexChanged(sender, args) {

    var item = args.get_item();
    var type = "";
    var value = item.get_value();
    var text = item.get_text();


    if (sender.get_id() == $('.mode').attr('id')) {
        if (value == '2') {
            $('.Password').attr('placeholder', "PASSWORD");
        } else {
            $('.Password').attr('placeholder', text);
        }
        $('#MainContent_LoginSection_RequiredFieldValidatorPassword').next('small').text('The ' + text + ' is required.');

    }


}



function startValidation() {


    $('#form1').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: '',
            invalid: '',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            Username: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: 'Account number is required.'
                    },

                    stringLength: {
                        max: 10,
                        min: 10,
                        message: 'Enter a valid Account number'
                    },

                }
            },
            Password: {
                validators: {
                    callback: {
                        callback: function(value) {
                            var value = $('.Password').val();
                            var mode = $find($('.mode').attr('id'));

                            if (value.length == 0)
                                return {
                                    valid: false,
                                    message: 'The ' + errorMesage + ' is required.'
                                }
                            else if (mode.get_value() == '1' && value.length != 10)
                                return {
                                    valid: false,
                                    message: 'The PIN & Token must be 10 digits.'
                                }
                            else
                                return true;
                        }
                    },
                }
            },
        }
    });



    $('.Username').keydown(function(e) {
        var keyCode = e.keyCode;
        var backspace = 8;
        var tab = 9;
        var deleteKey = 46;
        var ctrlKey = 17,
            vKey = 86,
            cKey = 67;

        //var yourInput = $(this).val();
        //re = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
        //var isSplChar = re.test(yourInput);
        //if (isSplChar) {
        //    var no_spl_char = yourInput.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
        //    $(this).val(no_spl_char);
        //}

        if (!isMobile.Any()) {
            if ((ctrlKey && (keyCode == vKey || keyCode == cKey)) || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) || keyCode == backspace || keyCode == deleteKey || keyCode == tab) {

                return true;
            } else {

                event.preventDefault();
            }
        } else {
            return true;
        }
    });




    $('.Password').keydown(function(event) {

        var combo = $find($('.mode').attr('id'));


        if (combo.get_value() == "1") {
            var keyCode = event.keyCode;
            var backspace = 8;
            var tab = 9;
            var deleteKey = 46;
            var ctrlKey = 17,
                vKey = 86,
                cKey = 67;



            if ((ctrlKey && (keyCode == vKey || keyCode == cKey)) || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) || keyCode == backspace || keyCode == deleteKey || keyCode == tab) {

                return true;
            } else {

                event.preventDefault();
            }
        }
    });

    $('#MainContent_Buttons_Login').click(function() {

        var paygilantsessionId = document.getElementById("sfSessionId").value;
        var paygilantdeviceId = document.getElementById("sfDeviceId").value;

        $(".UserSessionId").val(paygilantsessionId);
        $(".DeviceID").val(paygilantdeviceId);

        console.log("paygilantsessionId: " + paygilantsessionId);
        console.log("paygilantdeviceId: " + paygilantdeviceId);

        if (!($(".Password").val().length == 0)) {

            var key = CryptoJS.enc.Utf8.parse('8080808080808080');
            var iv = CryptoJS.enc.Utf8.parse('8080808080808080');
            var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse($('.Password').val()), key, {
                keySize: 128 / 8,
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });

            var encryptedBase64Str = window.btoa(encrypted.toString());
            $(".Password").val(encryptedBase64Str);
        }


    });




}