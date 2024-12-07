 $(document).ready(function() {
     var getLoginType = function() {

         return $("#loginType").val();
     }
     var loginTypeIsPassword = function() {

         return $("#loginType").val() == "password";
     }
     var loginTypeIsToken = function() {

         return $("#loginType").val() == "pinPlusToken";
     }
     //Testing for browser compactability
     var nVer = navigator.appVersion;
     var nAgt = navigator.userAgent;
     var browserName = navigator.appName;
     var fullVersion = '' + parseFloat(navigator.appVerison);
     var nameOffset, verOffset, ix;

     //In Opera, the true version is afetr "Opera" or after "Version" 
     if ((verOffset = nAgt.indexOf("Opera")) != -1) {
         browserName = "Opera";
         fullVerison = nAgt.substring(verOffset + 6);
         if ((verOffset = nAgt.indexOf("Version")) != -1)
             fullVersion = nAgt.substring(verOffset + 8);
     }
     //In MSIE, the true version is after "MSIE" in userAgent
     else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
         browserName = "Microsoft Internet Explorer";
         fullVersion = nAgt.substring(verOffset + 5);
     }
     // In Chrome, the true version is after "Chrome" 
     else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
         browserName = "Chrome";
         fullVersion = nAgt.substring(verOffset + 7);
     }
     // In Safari, the true version is after "Safari" or after "Version" 
     else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
         browserName = "Safari";
         fullVersion = nAgt.substring(verOffset + 7);
         if ((verOffset = nAgt.indexOf("Version")) != -1)
             fullVersion = nAgt.substring(verOffset + 8);
     }
     // In Firefox, the true version is after "Firefox" 
     else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
         browserName = "Firefox";
         fullVersion = nAgt.substring(verOffset + 8);
     }
     // In most other browsers, "name/version" is at the end of userAgent 
     else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
         (verOffset = nAgt.lastIndexOf('/'))) {
         browserName = nAgt.substring(nameOffset, verOffset);
         fullVersion = nAgt.substring(verOffset + 1);
         if (browserName.toLowerCase() == browserName.toUpperCase()) {
             browserName = navigator.appName;
         }
     }
     // trim the fullVersion string at semicolon/space if present
     if ((ix = fullVersion.indexOf(";")) != -1)
         fullVersion = fullVersion.substring(0, ix);
     if ((ix = fullVersion.indexOf(" ")) != -1)
         fullVersion = fullVersion.substring(0, ix);

     majorVersion = parseInt('' + fullVersion, 10);
     if (isNaN(majorVersion)) {
         fullVersion = '' + parseFloat(navigator.appVersion);
         majorVersion = parseInt(navigator.appVersion, 10);
     }


     if (browserName == "Chrome" && majorVersion <= 43 || browserName == "Microsoft Internet Explorer" && majorVersion <= 9) {
         window.location.href = "compatibility.jsp";
     }
     //End Testing for browser compatability


     //Detect if browser is Desktop or Mobile     
     var isMobile = {
         Android: function() {
             return navigator.userAgent.match(/Android/i);
         },
         BlackBerry: function() {
             return navigator.userAgent.match(/BlackBerry/i);
         },
         iOS: function() {
             return navigator.userAgent.match(/iPhone|iPad|iPod/i);
         },
         Opera: function() {
             return navigator.userAgent.match(/Opera Mini/i);
         },
         Windows: function() {
             return navigator.userAgent.match(/IEMobile/i);
         },
         any: function() {
             return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
         }
     };

     if (!isMobile.any()) {
         var ga = document.createElement("script");
         ga.type = 'text/javascript';
     }
     //End to Detect if browser is Desktop or Mobile 



     //Existing User
     $('#btnSignIn').prop('disabled', true)
     $('#btnSignIn').css({
         'background-color': '#515356'
     });

     //New User
     $('#btnNewUser').prop('disabled', true)
     $('#btnNewUser').css({
         'background-color': '#515356'
     });

     //New User validation
     $("#loginidNew, #newPin, #confirmPin, #tokenCode").keyup(function() {

         if (($("#loginidNew").val().length <= 0) || ($("#newPin").val().length <= 0) || ($("#confirmPin").val().length <= 0) || ($("#tokenCode").val().length <= 0)) {
             $('#btnNewUser').prop('disabled', true).css({
                 'background-color': '#ccc'
             });
         } else {
             $('#btnNewUser').prop('disabled', false)
             $('#btnNewUser').css({
                 'background-color': '#e54e53'
             });
         }

     })

     //Show password and set time out
     var showPassTime = 1000;
     $('#showPassExist').click(function() {
         var chck1 = false;
         if ($("#pin").prop('type') === 'text') {
             chck1 = true;

             $("#pin").removeClass("disableChrome");
         } else {
             $("#pin").prop('type', 'text');
         }
         setTimeout(function() {
             if (chck1) {
                 $("#pin").addClass("disableChrome");
             } else {
                 $("#pin").prop('type', 'password');
             }
         }, showPassTime)
     })

     $('#showPassExist2').click(function() {
         $("#newPin").prop('type', 'text');
         setTimeout(function() {
             $("#newPin").prop('type', 'password');
         }, showPassTime)
     })

     $('#showPassExist3').click(function() {
         $("#confirmPin").prop('type', 'text');
         setTimeout(function() {
             $("#confirmPin").prop('type', 'password');
         }, showPassTime)
     });

     $('#showPassWordExist').click(function() {
         var chck2 = false;
         if ($("#password").prop('type') === 'text') {
             chck2 = true;
             $("#password").removeClass("disableChrome");
         } else {
             $("#password").prop('type', 'text');
         }
         setTimeout(function() {
             if (chck2) {
                 $("#password").addClass("disableChrome");
             } else {
                 $("#password").prop('type', 'password');
             }
         }, showPassTime)
     });
     //disallow special characters    
     $('#pin,#token,#newPin,#confirmPin,#tokenCode').keypress(function(e) {
         var a = [];
         var k = e.which;

         var keycode = e.keyCode || e.which;
         if (keycode === 8) {
             return;
         }
         if (keycode === 9) {
             return;
         }

         for (i = 48; i < 58; i++)
             a.push(i);

         if (!($.inArray(k, a) >= 0))
             e.preventDefault();

     });

     //function not to allow for sequential numbers
     function invalidPin(pin) {
         var inValidNumbers = ['0000', '1111', '2222', '3333', '4444', '5555', '6666', '7777', '8888', '9999', '1234', '4321'];
         if (inValidNumbers.indexOf(pin) === -1) //returns the index of the selected element
         {
             return true;
         }
         return false;
     }


     //Existing Users Validation   
     $('#signInForm').bootstrapValidator({
         // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
         feedbackIcons: {
             invalid: 'fa fa-times',
             validating: 'fa fa-reload'
         },
         fields: {
             loginid: {
                 validators: {
                     notEmpty: {
                         message: 'Username is required'
                     }
                 }
             },

             bPassword: {
                 message: 'Password is required',
                 validators: {
                     stringLength: {
                         min: 3,

                         message: 'Password must be more than 3 letters'
                     },
                     notEmpty: {
                         message: 'Password is required'
                     },

                 }
             }, //end
             pin: {
                 message: 'PIN is required',
                 validators: {
                     stringLength: {
                         min: 4,
                         max: 8,
                         message: 'PIN must be between 4 to 8 digits'
                     },
                     notEmpty: {
                         message: 'PIN is required'
                     },

                 }
             }, //end of pin
             token: {
                 message: 'Token Code is required',
                 validators: {
                     stringLength: {
                         min: 6,
                         max: 6,
                         message: 'Invalid Token Code'
                     },
                     notEmpty: {
                         message: 'Token Code is required'
                     }
                 }
             },


         }
     });

     //End of Validation for Existing Users


     //Existing User validation
     $("#loginid, #pin, #token, #passwordloginid, #password").keyup(function() {

         if (loginTypeIsToken()) {
             if (($("#loginid").val().length <= 0) || ($("#pin").val().length <= 0) || ($("#token").val().length <= 0)) {
                 $('#btnSignIn').prop('disabled', true).css({
                     'background-color': '#ccc'
                 });
             } else {
                 $('#btnSignIn').prop('disabled', false)
                 $('#btnSignIn').css({
                     'background-color': '#e54e53'
                 });

             }

         } else if (loginTypeIsPassword()) {

             if (($("#password").val().length <= 0) || ($("#passwordloginid").val().length <= 0)) {
                 $('#btnSignIn').prop('disabled', true).css({
                     'background-color': '#ccc'
                 });
             } else {
                 $('#btnSignIn').prop('disabled', false)
                 $('#btnSignIn').css({
                     'background-color': '#e54e53'
                 });

             }
         }

     })

     function disableButton(btnId) {

         $('#' + btnId).prop('disabled', true) //21032018
         $('#' + btnId).css({
             'background-color': '#515356'
         }); //21032018

     }

     function enableButton(btnId) {
         $('#' + btnId).prop('disabled', false)
         $('#' + btnId).css({
             'background-color': 'rgb(229, 78, 83)'
         });
     }

     //Existing Loging In
     $('#btnSignIn').click(function(e) {
         e.preventDefault();

         //paramaeters to be sent
         var loginid = $('#loginid').val();
         var pin = $('#pin').val();
         var tokencode = $('#token').val();
         var status = $('#status').val();

         var deviceId = $('#sfDeviceId').val();
         var sessionId = $('#sfSessionId').val();

         // var userstate = $('#userstate').val();  
         $('#btnSignIn').prop('disabled', true) //21032018
         $('#btnSignIn').css({
             'background-color': '#515356'
         }); //21032018

         if (loginTypeIsPassword()) {

             if ($('#passwordloginid').val().length <= 0) {
                 $("#alert").show();
                 $('#alert').css({
                     'background-color': '#F2DEDE'
                 }, {
                     'border-color': '#EBCCD1'
                 }).html('<center style="color: #A94442; padding: 5px; "><i class="glyphicon glyphicon-warning-sign">&nbsp;&nbsp;</i>Username is required</center>');
                 return false;
             } else if ($('#password').val().length < 3) {
                 $("#alert").show();
                 $('#alert').css({
                     'background-color': '#F2DEDE'
                 }, {
                     'border-color': '#EBCCD1'
                 }).html('<center style="color: #A94442; padding: 5px; "><i class="glyphicon glyphicon-warning-sign">&nbsp;&nbsp;</i>Password must be more than 3 letters.</center>');
                 return false;
             }



         } else {
             if ($('#loginid').val().length <= 0) {
                 $("#alert").show();
                 $('#alert').css({
                     'background-color': '#F2DEDE'
                 }, {
                     'border-color': '#EBCCD1'
                 }).html('<center style="color: #A94442; padding: 5px; "><i class="glyphicon glyphicon-warning-sign">&nbsp;&nbsp;</i>Username is required</center>');
                 return false;
             } else if ($('#pin').val().length <= 0) {
                 $("#alert").show();
                 $('#alert').css({
                     'background-color': '#F2DEDE'
                 }, {
                     'border-color': '#EBCCD1'
                 }).html('<center style="color: #A94442; padding: 5px; "><i class="glyphicon glyphicon-warning-sign">&nbsp;&nbsp;</i>PIN is required</center>');
                 return false;
             } else if ($('#token').val().length <= 0) {
                 $("#alert").show();
                 $('#alert').css({
                     'background-color': '#F2DEDE'
                 }, {
                     'border-color': '#EBCCD1'
                 }).html('<center style="color: #A94442; padding: 5px; "><i class="glyphicon glyphicon-warning-sign">&nbsp;&nbsp;</i>Token Code is required</center>');
                 return false;
             }

         }
         //Added Taiwo 23012020 for plaintext encryption
         var iterationCount = 1000;
         var keySize = 128;
         var plaintext = $("#password").val();
         var passphrase = $("#passwordloginid").val();
         var Encryptfour = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
         var Encryptsalt = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
         var aesUtil = new AesUtil(keySize, iterationCount);

         if (loginTypeIsPassword()) {
             var EncryptPass = aesUtil.encrypt(Encryptsalt, Encryptfour, passphrase, plaintext);
             $("#password").val(EncryptPass);
             //alert("1 : " + $('#password').val());
         } else {
             var EncryptPin = aesUtil.encrypt(Encryptsalt, Encryptfour, loginid, pin);
             var Encrypttoken = aesUtil.encrypt(Encryptsalt, Encryptfour, loginid, tokencode);
             $('#pin').val(EncryptPin);
             $('#token').val(Encrypttoken);
             //alert("pin : " + $('#pin').val());
             //alert("token : " + $('#token').val());
         }


         //Ended Taiwo 23012020 for plaintext encryption
         var url = loginTypeIsPassword() ? "PasswordLogin" : "VascoLogin";
         var data = loginTypeIsPassword() ? {
                 "loginId": $("#passwordloginid").val(),
                 "password": $("#password").val(),
                 "param1": Encryptsalt,
                 "param2": Encryptfour
             } :
             {
                 "loginid_PASS": loginid,
                 "pin_PASS": $('#pin').val(),
                 "tokencode_PASS": $('#token').val(),
                 "User_Status": status,
                 "param1": Encryptsalt,
                 "param2": Encryptfour,
                 "sessionId": sessionId,
                 "deviceId": deviceId
             }; //Edited Taiwo 23012020 for plaintext encryption

         $.ajax({
             url: url,
             type: "POST",
             data: data,
             success: function(data) {

                 if (data.errorMsg) {

                     $("#alert").show();
                     $('#alert').css({
                         'background-color': '#F2DEDE'
                     }, {
                         'border-color': '#EBCCD1'
                     }).html('<center style="color: #A94442; padding: 5px; "><i class="glyphicon glyphicon-warning-sign">&nbsp;&nbsp;</i>' + data.errorMsg + '</center>');
                     //retain input values
                     $('#loginid').val($('#loginid').val());
                     $('#pin').val("");
                     $('#token').val("");
                 } else {

                     $('#alert').html('<center style="color: #0CD10C; padding: 5px; display: none; ">' + data + '</center>');
                     $('#loginid').val($('#loginid').val());
                     $('#pin').val("");
                     $('#token').val("");
                     //document.form.submit();
                 }

             },
             error: function(data) {
                 if (data.status == 403) {

                     data.errorMsg = "Page Expired Kindly Refresh or Contact Support!";
                 } else if (!data.errorMsg) {
                     data.errorMsg = "Unexpected Error Processing Request!.";

                 }
                 $('#alert').show();

                 $('#alert').css({
                     'background-color': '#F2DEDE'
                 }, {
                     'border-color': '#EBCCD1'
                 }).html('<center style="color: #A94442; padding: 5px; "><i class="glyphicon glyphicon-warning-sign">&nbsp;&nbsp;</i>' + data.errorMsg + '</center>');
             },
             complete: function() {

             }
         });



     });
     //End Existing Users Loging In


     //New Users Validation   
     $('#newUser').bootstrapValidator({
         // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
         feedbackIcons: {
             //valid: 'glyphicon glyphicon-ok',
             invalid: 'glyphicon glyphicon-remove',
             validating: 'glyphicon glyphicon-refresh'
         },
         fields: {
             loginidNew: {
                 validators: {
                     notEmpty: {
                         message: 'Invalid Username'
                     }
                 }
             },
             newPin: {
                 message: 'PIN is required',
                 validators: {
                     stringLength: {
                         min: 4,
                         max: 4,
                         message: 'PIN must be 4 digits'
                     },
                     notEmpty: {
                         message: 'PIN is required'
                     },
                     callback: {
                         callback: function(value) {
                             if (invalidPin(value)) {
                                 return true;
                             } else {
                                 return false;
                             }

                         },
                         message: 'Invalid PIN. Avoid using repeated or sequential numbers such as 1111 or 1234'
                     }
                 }
             }, //end of new pin            
             confirmPin: {
                 message: 'PIN is required',
                 validators: {

                     notEmpty: {
                         message: 'PIN is required'
                     },
                     identical: {
                         field: 'newPin',
                         message: ' <b>New PIN</b> and <b>Confirm PIN</b> do not match'
                     },

                 }

             },
             tokenCode: {
                 message: 'Token Code is required',
                 validators: {
                     stringLength: {
                         min: 6,
                         max: 6,
                     },
                     notEmpty: {
                         message: 'Please supply a token code'
                     }
                 }
             },


         }
     });
     //End of Validation for New Users


     //Redirecting to homepage after PIN is created by New Users 



     //Redirecting to homepage after PIN is created by New Users 
     $(document).on('click', '#linkd', function() {
         var hidd_form = document.getElementById('hidd_form');
         //hidd_form.action = 'https://corpdemo.zenithbank.com/coporate-internetbanking-demo/ProcessLogin_CreatePin'; 
         document.getElementById('hidd_form').action = 'ProcessLogin_CreatePin.jsp?csrfPreventionSalt=' + token.content;
         document.getElementById('hidd_form').method = 'post';
         document.getElementById('hidd_form').submit();
         //$(hidd_form).trigger('submit');  
     });



     //New User Creating Pin and Loging In
     $('#newUserA').click(function() {

         //clears value inside text input
         var loginId = $('#loginidNew').val('');
         var newPinn = $('#newPin').val('');
         var confirmPinn = $('#confirmPin').val('');
         var tokenCodee = $('#token').val('');

         $('#signIn').hide();
         $('#forgotPin').hide();
         $('#newUser').show();

         $('#btnNewUser').click(function(e) {
             e.preventDefault();
             disableButton("btnNewUser");

             //paramaeters to be sent
             var loginid = $('#loginidNew').val();
             var newPin = $('#newPin').val();
             var confirmPin = $('#confirmPin').val();
             var tokenCode = $('#tokenCode').val();
             var status = $('#statusId').val();

             var newIterationCount = 1000;
             var newKeySize = 128;
             var newKeyFour = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
             var newSalt = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
             var newAES = new AesUtil(newKeySize, newIterationCount);


             if ($('#loginidNew').val().length <= 0) {
                 $('#alert2').show();
                 $('#alert2').css({
                     'background-color': '#F2DEDE'
                 }, {
                     'border-color': '#EBCCD1'
                 }).html('<center style="color: #A94442; padding: 5px;"><i class="glyphicon glyphicon-warning-sign">&nbsp;&nbsp;</i>Username is required</span>');
                 return false;
             } else if ($('#newPin').val().length <= 0) {
                 $('#alert2').show();
                 $('#alert2').css({
                     'background-color': '#F2DEDE'
                 }, {
                     'border-color': '#EBCCD1'
                 }).html('<center style="color: #A94442; padding: 5px;"><i class="glyphicon glyphicon-warning-sign">&nbsp;&nbsp;</i>PIN is required</center>');
                 return false;
             } else if ($('#confirmPin').val().length <= 0) {
                 $('#alert2').show();
                 $('#alert2').css({
                     'background-color': '#F2DEDE'
                 }, {
                     'border-color': '#EBCCD1'
                 }).html('<center style="color: #A94442; padding: 5px; "><i class="glyphicon glyphicon-warning-sign">&nbsp;&nbsp;</i>Confirm PIN is required</center>');
                 return false;
             } else if ($('#tokenCode').val().length <= 0) {
                 $('#alert2').show();
                 $('#alert2').css({
                     'background-color': '#F2DEDE'
                 }, {
                     'border-color': '#EBCCD1'
                 }).html('<center style="color: #A94442; padding: 5px;"><i class="glyphicon glyphicon-warning-sign">&nbsp;&nbsp;</i>Token Code is required</center>');
                 return false;
             } else {

                 var EncryptPin = newAES.encrypt(newSalt, newKeyFour, loginid, newPin);
                 var EncryptConPin = newAES.encrypt(newSalt, newKeyFour, loginid, confirmPin);
                 var Encrypttoken = newAES.encrypt(newSalt, newKeyFour, loginid, tokenCode);

                 $('#newPin').val(EncryptPin);
                 $('#confirmPin').val(EncryptConPin);
                 $('#tokenCode').val(Encrypttoken);


                 disableButton('btnNewUser');
                 $.ajax({
                     url: "VascoLogin",
                     type: "POST",
                     dataType: "json",
                     data: {
                         loginid_PASS: loginid,
                         newPin_PASS: $('#newPin').val(),
                         verifyPin_PASS: $('#confirmPin').val(),
                         tokencode_PASS: $('#tokenCode').val(),
                         User_Status: status,
                         sParam: newSalt,
                         kParam: newKeyFour
                     },
                     success: function(data) {
                         var loginId = data.loginId;
                         var accessCode = data.accesscode;

                         $('#hidd_user').val(loginId);
                         $('#hidd_acc').val(accessCode);
                         if (data.errorMsg) {
                             $('#alert2').show();
                             $('#alert2').css({
                                 'background-color': '#F2DEDE'
                             }, {
                                 'border-color': '#EBCCD1'
                             }).html('<center style="color: #A94442;line-height:-3px !important; padding: 5px; "><i class="glyphicon glyphicon-warning-sign">&nbsp;&nbsp;</i>' + data.errorMsg + '</center>');
                             //retain values when loging in
                             $('#loginidNew').val($('#loginidNew').val());
                             $('#newPin').val("");
                             $('#confirmPin').val("");
                             $('#tokenCode').val("");
                             return false;
                         } else {
                             $('#alert2').css({
                                 'background-color': '#D1F9D7'
                             }, {
                                 'border-color': '#EBCCD1'
                             }).html('<center style="color: #515356; padding: 5px; "><i style="color: #515356; text-transform: capitalize; line-height:2px; ">&nbsp;&nbsp;</i>' + data.successMsg + ' <br>  <u> <a href="javascript:void(0)" id="linkd" style="color: #515356" > Continue To Login Page</a> </u></center>');

                             //retain values when loging in and make readonly
                             $('#loginidNew').prop("readonly", true);
                             $('#newPin').prop("readonly", true);
                             $('#confirmPin').prop("readonly", true);
                             $('#tokenCode').prop("readonly", true);
                             //$('#serialNo').prop("readonly", true);

                             $('#newPin').val("");
                             $('#confirmPin').val("");
                             $('#tokenCode').val("");
                             //$('#serialNo').val();
                             $('#loginidNew').val("");

                             return true;

                         }
                     },
                     error: function(data) {
                         $('#alert2').show();
                         if (data.status == 403) {

                             data.errorMsg = "Page Expired Kindly Refresh or Contact Support!";
                         } else if (!data.errorMsg) {
                             data.errorMsg = "Unexpected Error Processing Request!.";

                         }
                         $('#alert2').css({
                             'background-color': '#F2DEDE'
                         }, {
                             'border-color': '#EBCCD1'
                         }).html('<center style="color: #A94442; padding: 5px;"><i class="glyphicon glyphicon-warning-sign">&nbsp;&nbsp;</i>' + data.errorMsg + '</center>');

                     },
                     complete: function() {
                         //disableButton('btnNewUser');
                         //$('#btnNewUser').removeAttr("disabled");   
                     }
                 });

             }


         });


     });
     //End New User



     //Back to login
     $('#backToSignIn').on('click', function() {
         $('#newUser').hide();
         //clears text input
         var loginidd = $('#loginid').val('');
         var pinn = $('#pin').val('');
         var tokencodee = $('#tokencode').val('');
         $('#signIn').show();
     });
     //End Back to Login  



     //  $('#feedbackForm').validate();





     //Send Feedback Mail
     //Existing Loging In
     $('#btnSendMail').click(function(e) {
         e.preventDefault();

         //paramaeters to be sent
         var companyName = $('#companyName').val();
         var custUsername = $('#custUsername').val();
         var email = $('#email').val();
         var phoneNumber = $('#phoneNumber').val();
         var comment = $('#commentBox').val();

         if ($('#companyName').val().length <= 0 || $('#companyName').val() == '') {
             $("#alertus").show();
             $('#alertus').css({
                 'background-color': '#F2DEDE'
             }, {
                 'border-color': '#EBCCD1'
             }).html('<center style="color: #A94442; padding: 5px; "><i class="glyphicon glyphicon-warning-sign">&nbsp;&nbsp;</i>Company Name is required</center>');
             return false;
         } else if ($.trim(email).length == 0) {
             $("#alertus").show();
             $('#alertus').css({
                 'background-color': '#F2DEDE'
             }, {
                 'border-color': '#EBCCD1'
             }).html('<center style="color: #A94442; padding: 5px; "><i class="glyphicon glyphicon-warning-sign">&nbsp;&nbsp;</i>Email Address is required</center>');
             return false;
         } else if (!validateEmail(email)) {
             $("#alertus").show();
             $('#alertus').css({
                 'background-color': '#F2DEDE'
             }, {
                 'border-color': '#EBCCD1'
             }).html('<center style="color: #A94442; padding: 5px; "><i class="glyphicon glyphicon-warning-sign">&nbsp;&nbsp;</i>Invalid Email Address</center>');
             return false;
         } else {
             $.ajax({
                 //url: "FeedBack",                                 
                 url: "FeedBack.jsp",
                 type: "POST",
                 data: {
                     "company_Name": companyName,
                     "cust_Username": custUsername,
                     "email": email,
                     "phoneNumber": phoneNumber,
                     "comment": comment
                 },
                 success: function(data) {

                     var resp = JSON.parse(JSON.stringify(data));
                     // console.log('data is ::: ' + JSON.stringify(data) );
                     if (resp.fatalMsg) {
                         $("#alertus").show();
                         $('#alertus').css({
                             'background-color': '#F2DEDE'
                         }, {
                             'border-color': '#EBCCD1'
                         }).html('<center style="color: #A94442; padding: 5px; "><i class="glyphicon glyphicon-warning-sign">&nbsp;&nbsp;</i>' + resp.errorMsg + '</center>');

                     } else if (resp.successMsg) {
                         $('#alertus').css({
                             'background-color': '#0CD10C'
                         }, {
                             'border-color': '#EBCCD1'
                         }).html('<center style="color: #fff; padding: 5px;">' + resp.successMsg + '</center>');
                         setTimeout(function() {
                             $('#myModal').modal('hide');
                         }, 3000)
                     }
                     //                                      else if(resp.fatalMsg)
                     //                                      {
                     //                                            $('#alertus').show();
                     //                                            $('#alertus').css({'background-color':'#F2DEDE'},{'border-color':'#EBCCD1'}).html('<center style="color: #A94442; padding: 5px; "><i class="glyphicon glyphicon-warning-sign">&nbsp;&nbsp;</i>'+ resp.fatalMsg +'</center>');
                     //                                                                               
                     //                                                setTimeout(function(){
                     //                                                    $('#myModal').modal('hide');                                                                             
                     //                                                },3000) 
                     //                                       }

                 },
                 error: function(data) {
                     var resps = JSON.parse(JSON.stringify(data));
                     $('#alertus').show();
                     $('#alertus').css({
                         'background-color': '#F2DEDE'
                     }, {
                         'border-color': '#EBCCD1'
                     }).html('<center style="color: #A94442; padding: 5px; "><i class="glyphicon glyphicon-warning-sign">&nbsp;&nbsp;</i>' + resps.fatalMsg + '</center>');

                 },
                 complete: function() {
                     $('#companyName').val('');
                     $('#custUsername').val('');
                     $('#email').val('');
                     $('#phoneNumber').val('');
                     $('#commentBox').val('');
                 }
             });

         }

     });
     //End Existing Users Loging In

     //disallow special characters    
     $('#phoneNumber').keypress(function(e) {
         var a = [];
         var k = e.which;

         var keycode = e.keyCode || e.which;
         if (keycode === 8) {
             return;
         }
         if (keycode === 9) {
             return;
         }

         for (i = 48; i < 58; i++)
             a.push(i);

         if (!($.inArray(k, a) >= 0))
             e.preventDefault();

     });



     //Email Validation
     function validateEmail(sEmail) {
         var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
         if (filter.test(sEmail)) {
             return true;
         } else {
             return false;
         }
     }






     //-===========================

     var changeType = function() {
         $("#alert").hide();
         var paymentType = $(this).val();
         $("#TokenContainer :input").val("");
         $("#PasswordContainer :input").val("");

         disableButton("btnSignIn");

         if (paymentType == "password") {
             $("#TokenContainer").css({
                     "display": "none"
                 })
                 .fadeOut('slow', function() {

                     $("#PasswordContainer").css({
                         "display": "block"
                     });
                 });




         } else {

             $("#PasswordContainer").css({
                     "display": "none"
                 })
                 .fadeOut('slow', function() {

                     $("#TokenContainer").css({
                         "display": "block"
                     });
                 });

         }




     }

     $('#loginType').on('change', changeType);



 });