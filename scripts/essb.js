        var essb_window = function(oUrl, oService, oInstance) {
            var element = jQuery('.essb_' + oInstance);
            var instance_post_id = jQuery(element).attr("data-essb-postid") || "";
            var instance_position = jQuery(element).attr("data-essb-position") || "";
            var wnd;
            var w = 800;
            var h = 500;
            if (oService == "twitter") {
                w = 500;
                h = 300;
            }
            var left = (screen.width / 2) - (w / 2);
            var top = (screen.height / 2) - (h / 2);
            if (oService == "twitter") {
                wnd = window.open(oUrl, "essb_share_window", "height=300,width=500,resizable=1,scrollbars=yes,top=" + top + ",left=" + left);
            } else {
                wnd = window.open(oUrl, "essb_share_window", "height=500,width=800,resizable=1,scrollbars=yes,top=" + top + ",left=" + left);
            }
            if (typeof(essb_settings) != "undefined") {
                if (essb_settings.essb3_stats) {
                    if (typeof(essb_handle_stats) != "undefined") {
                        essb_handle_stats(oService, instance_post_id, oInstance);
                    }
                }
                if (essb_settings.essb3_ga) {
                    essb_ga_tracking(oService, oUrl, instance_position);
                }
            }
            essb_self_postcount(oService, instance_post_id);
            if (typeof(essb_abtesting_logger) != "undefined") {
                essb_abtesting_logger(oService, instance_post_id, oInstance);
            }
            var pollTimer = window.setInterval(function() {
                if (wnd.closed !== false) {
                    window.clearInterval(pollTimer);
                    essb_smart_onclose_events(oService, instance_post_id);
                }
            }, 200);
        };
        var essb_self_postcount = function(oService, oCountID) {
            if (typeof(essb_settings) != "undefined") {
                oCountID = String(oCountID);
                jQuery.post(essb_settings.ajax_url, {
                    'action': 'essb_self_postcount',
                    'post_id': oCountID,
                    'service': oService,
                    'nonce': essb_settings.essb3_nonce
                }, function(data) {
                    if (data) {}
                }, 'json');
            }
        };
        var essb_smart_onclose_events = function(oService, oPostID) {
            if (oService == "subscribe" || oService == "comments") return;
            if (typeof(essbasc_popup_show) == 'function') {
                essbasc_popup_show();
            }
            if (typeof essb_acs_code == 'function') {
                essb_acs_code(oService, oPostID);
            }
            if (typeof(after_share_easyoptin) != "undefined") {
                essb_toggle_subscribe(after_share_easyoptin);
            }
        };
        var essb_tracking_only = function(oUrl, oService, oInstance, oAfterShare) {
            var element = jQuery('.essb_' + oInstance);
            if (oUrl == "") {
                oUrl = document.URL;
            }
            var instance_post_id = jQuery(element).attr("data-essb-postid") || "";
            var instance_position = jQuery(element).attr("data-essb-position") || "";
            if (typeof(essb_settings) != "undefined") {
                if (essb_settings.essb3_stats) {
                    if (typeof(essb_handle_stats) != "undefined") {
                        essb_handle_stats(oService, instance_post_id, oInstance);
                    }
                }
                if (essb_settings.essb3_ga) {
                    essb_ga_tracking(oService, oUrl, instance_position);
                }
            }
            essb_self_postcount(oService, instance_post_id);
            if (oAfterShare) {
                essb_smart_onclose_events(oService, instance_post_id);
            }
        };
        var essb_pinterest_picker = function(oInstance) {
            essb_tracking_only('', 'pinterest', oInstance);
            var e = document.createElement('script');
            e.setAttribute('type', 'text/javascript');
            e.setAttribute('charset', 'UTF-8');
            e.setAttribute('src', '//assets.pinterest.com/js/pinmarklet.js?r=' + Math.random() * 99999999);
            document.body.appendChild(e);
        };
        var essb_print = function(oInstance) {
            essb_tracking_only('', 'print', oInstance);
            window.print();
        };
        var essb_mailform_opened = false;

        function essb_open_mailform(unique_id) {
            jQuery.fn.extend({
                center: function() {
                    return this.each(function() {
                        var top = (jQuery(window).height() - jQuery(this).outerHeight()) / 2;
                        var left = (jQuery(window).width() - jQuery(this).outerWidth()) / 2;
                        jQuery(this).css({
                            position: 'fixed',
                            margin: 0,
                            top: (top > 0 ? top : 0) + 'px',
                            left: (left > 0 ? left : 0) + 'px'
                        });
                    });
                }
            });
            if (essb_mailform_opened) {
                essb_close_mailform(unique_id);
                return;
            }
            var sender_element = jQuery(".essb_" + unique_id);
            if (!sender_element.length) return;
            var sender_post_id = jQuery(sender_element).attr("data-essb-postid") || "";
            jQuery("#essb_mail_instance").val(unique_id);
            jQuery("#essb_mail_post").val(sender_post_id);
            var win_width = jQuery(window).width();
            var win_height = jQuery(window).height();
            var doc_height = jQuery('document').height();
            var base_width = 300;
            if (win_width < base_width) {
                base_width = win_width - 30;
            }
            var height_correction = 20;
            var element_class = ".essb_mailform";
            var element_class_shadow = ".essb_mailform_shadow";
            jQuery(element_class).css({
                width: base_width + 'px'
            });
            var popup_height = jQuery(element_class).outerHeight();
            if (popup_height > (win_height - 30)) {
                jQuery(element_class).css({
                    height: (win_height - height_correction) + 'px'
                });
            }
            jQuery("#essb_mailform_from").val("");
            jQuery("#essb_mailform_to").val("");
            if (jQuery("#essb_mailform_c").length) jQuery("#essb_mailform_c").val("");
            jQuery(element_class_shadow).css({
                height: (win_height) + 'px'
            });
            jQuery(element_class).center();
            jQuery(element_class).slideDown(200);
            jQuery(element_class_shadow).fadeIn(200);
            essb_mailform_opened = true;
            essb_tracking_only("", "mail", unique_id);
        };

        function essb_close_mailform() {
            var element_class = ".essb_mailform";
            var element_class_shadow = ".essb_mailform_shadow";
            jQuery(element_class).fadeOut(200);
            jQuery(element_class_shadow).fadeOut(200);
            essb_mailform_opened = false;
        };

        function essb_mailform_send() {

            var pageid = jQuery("#pageid").val();
            var sender_email = jQuery("#essb_mailform_from").val();
            var recepient_email = jQuery("#essb_mailform_to").val();
            var captcha_validate = jQuery("#essb_mailform_c").length ? true : false;
            var captcha = captcha_validate ? jQuery("#essb_mailform_c").val() : "";
            var custom_message = jQuery("#essb_mailform_custom").length ? jQuery("#essb_mailform_custom").val() : "";
            if (sender_email == "" || recepient_email == "" || (captcha == "" && captcha_validate)) {
                alert("Please fill all fields in form!");
                return;
            }
            var mail_salt = jQuery("#essb_mail_salt").val();
            var instance_post_id = jQuery("#essb_mail_post").val();
            //console.log("mail salt = " + mail_salt);

            //if (typeof (essb_settings) != "undefined") {
            jQuery.post('/svcs/SendMail.ashx', {
                "action": "essb_mail_action",
                "post_id": instance_post_id,
                "from": sender_email,
                "to": recepient_email,
                "c": captcha,
                "cu": custom_message,
                "salt": mail_salt,
                "nonce": "", //essb_settings.essb3_nonce
                "pageid": pageid
            }, function(data) {
                if (data) {
                    //console.log(data);
                    alert("Email sent!"); //data["message"]
                    if (data["code"] == "1") essb_close_mailform();
                }
            }, 'json');
            //}
        };