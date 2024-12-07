/*
 * Copyright (C) 2012 PrimeBox (info@primebox.co.uk)
 * 
 * This work is licensed under the Creative Commons
 * Attribution 3.0 Unported License. To view a copy
 * of this license, visit
 * http://creativecommons.org/licenses/by/3.0/.
 * 
 * Documentation available at:
 * http://www.primebox.co.uk/projects/cookie-bar/
 * 
 * When using this software you use it at your own risk. We hold
 * no responsibility for any damage caused by using this plugin
 * or the documentation provided.
 */
(function($) {
    $.cookieBar = function(options, val) {
        if (options == 'cookies') {
            var doReturn = 'cookies';
        } else if (options == 'set') {
            var doReturn = 'set';
        } else {
            var doReturn = false;
        }
        var defaults = {
            message: '<p>We take your privacy seriously and only process your personal information to make your experience better while you use this website. Following Nigeria Data Protection Act, 2023 and any applicable regulations, continuing to use this platform indicates your consent to the processing of your data by Zenith Bank Plc., its subsidiaries and partners as detailed in our <a href="/customer-service/privacy-policy/" target="_blank">Privacy Policy</a>.</p> <p>Our site also uses cookies to enhance your experience while you are here. You can modify your preference using the option below. For more detailed information about the cookies we use, see our <a href="/customer-service/cookie-policy/" target="_blank">Cookie Policy</a></p>', //Message displayed on bar
            acceptButton: true, //Set to true to show accept/enable button
            acceptText: 'Accept Cookies', //Text on accept/enable button
            acceptFunction: function(cookieValue) {
                if (cookieValue != 'enabled' && cookieValue != 'accepted') window.location = window.location.href;
            }, //Function to run after accept
            declineButton: true, //Set to true to show decline/disable button
            declineText: 'Disable Cookies', //Text on decline/disable button
            declineFunction: function(cookieValue) {
                if (cookieValue == 'enabled' || cookieValue == 'accepted') window.location = window.location.href;
            }, //Function to run after decline
            policyButton: true, //Set to true to show Privacy Policy button
            policyText: 'Cookie Preference', //Text on Privacy Policy button
            policyURL: '/privacy-policy/', //URL of Privacy Policy
            autoEnable: true, //Set to true for cookies to be accepted automatically. Banner still shows
            acceptOnContinue: false, //Set to true to accept cookies when visitor moves to another page
            acceptOnScroll: false, //Set to true to accept cookies when visitor scrolls X pixels up or down
            acceptAnyClick: false, //Set to true to accept cookies when visitor clicks anywhere on the page
            expireDays: 365, //Number of days for cookieBar cookie to be stored for
            renewOnVisit: false, //Renew the cookie upon revisit to website
            forceShow: false, //Force cookieBar to show regardless of user cookie preference
            effect: 'slide', //Options: slide, fade, hide
            element: 'body', //Element to append/prepend cookieBar to. Remember "." for class or "#" for id.
            append: false, //Set to true for cookieBar HTML to be placed at base of website. Actual position may change according to CSS
            fixed: false, //Set to true to add the class "fixed" to the cookie bar. Default CSS should fix the position
            bottom: false, //Force CSS when fixed, so bar appears at bottom of website
            zindex: '', //Can be set in CSS, although some may prefer to set here
            domain: String(window.location.hostname), //Location of privacy policy
            referrer: String(document.referrer), //Where visitor has come from
            saveText: 'Save & Continue'
        };
        var options = $.extend(defaults, options);


        //Sets expiration date for cookie
        var expireDate = new Date();
        expireDate.setTime(expireDate.getTime() + (options.expireDays * 86400000));
        expireDate = expireDate.toGMTString();

        var cookieEntry = 'cb-enabled={value}; expires=' + expireDate + '; path=/';

        //Retrieves current cookie preference
        var i, cookieValue = '',
            aCookie, aCookies = document.cookie.split('; ');
        for (i = 0; i < aCookies.length; i++) {
            aCookie = aCookies[i].split('=');
            if (aCookie[0] == 'cb-enabled') {
                cookieValue = aCookie[1];
            }
        }
        //Sets up default cookie preference if not already set
        if (cookieValue == '' && doReturn != 'cookies' && options.autoEnable) {
            cookieValue = 'enabled';
            document.cookie = cookieEntry.replace('{value}', 'enabled');
        } else if ((cookieValue == 'accepted' || cookieValue == 'declined') && doReturn != 'cookies' && options.renewOnVisit) {
            document.cookie = cookieEntry.replace('{value}', cookieValue);
        }
        if (options.acceptOnContinue) {
            if (options.referrer.indexOf(options.domain) >= 0 && String(window.location.href).indexOf(options.policyURL) == -1 && doReturn != 'cookies' && doReturn != 'set' && cookieValue != 'accepted' && cookieValue != 'declined') {
                doReturn = 'set';
                val = 'accepted';
            }
        }
        if (doReturn == 'cookies') {
            //Returns true if cookies are enabled, false otherwise
            if (cookieValue == 'enabled' || cookieValue == 'accepted') {
                return true;
            } else {
                return false;
            }
        } else if (doReturn == 'set' && (val == 'accepted' || val == 'declined')) {
            //Sets value of cookie to 'accepted' or 'declined'
            document.cookie = cookieEntry.replace('{value}', val);
            if (val == 'accepted') {
                return true;
            } else {
                return false;
            }
        } else {
            //Sets up enable/accept button if required
            var message = options.message.replace('{policy_url}', options.policyURL);

            if (options.acceptButton) {
                var acceptButton = '<a href="" class="cb-enable">' + options.acceptText + '</a>';
            } else {
                var acceptButton = '';
            }
            //Sets up disable/decline button if required
            if (options.declineButton) {
                var declineButton = '<a href="" class="cb-disable">' + options.declineText + '</a>';
            } else {
                var declineButton = '';
            }
            //Sets up privacy policy button if required
            if (options.policyButton) {
                var policyButton = '<a href="' + options.policyURL + '" class="cb-policy">' + options.policyText + '</a>';
            } else {
                var policyButton = '';
            }
            //Whether to add "fixed" class to cookie bar
            if (options.fixed) {
                if (options.bottom) {
                    var fixed = ' class="fixed bottom"';
                } else {
                    var fixed = ' class="fixed"';
                }
            } else {
                var fixed = '';
            }
            if (options.zindex != '') {
                var zindex = ' style="z-index:' + options.zindex + ';"';
            } else {
                var zindex = '';
            }

            //Displays the cookie bar if arguments met
            //if(options.forceShow || cookieValue=='enabled' || cookieValue==''){
            //	if(options.append){
            //		$(options.element).append('<div id="cookie-bar"'+fixed+zindex+'><p>'+message+'</p>'+acceptButton+declineButton+policyButton+'</div>');
            //	}else{
            //		$(options.element).prepend('<div id="cookie-bar"'+fixed+zindex+'><p>'+message+'</p>'+acceptButton+declineButton+policyButton+'</div>');
            //	}
            //	$(document.body).addClass('cookies-on'); //rufus modifications
            //}

            // modal window open			
            if (options.forceShow || cookieValue === 'enabled' || cookieValue === '') {
                $('#cookie-modal .modal-content p').html(message);
                $(document.body).addClass('cookies-on'); //rufus modifications
                $('#cookie-modal .modal-content').append('<button class="cg-button standard accent default" id="accept-button">' + acceptButton + '</button>');
                $('#cookie-modal .modal-content').append('<button class="cg-button standard accent default" id="decline-button">' + declineButton + '</button>');
                $('#cookie-modal .modal-content').append('<button class="cg-button standard accent default" id="preference-button">' + policyButton + '</button>');
                $('#cookie-modal').css('display', 'block');
            }

            // Close the modal when the close button is clicked
            $('#accept-button').click(function() {
                // Handle the "Continue" button click, e.g., close the modal
                $('#cookie-modal').css('display', 'none');
                // Call the acceptFunction to handle cookie acceptance
                options.acceptFunction(cookieValue);
                cookieAccept();
            });

            $('#preference-button').click(function(e) {
                e.preventDefault();

                let html = document.querySelector('#cookie-modal .modal-content');
                console.log(html.innerHTML);
                let firstScreen = html.cloneNode(true);
                html.style.overflowY = 'scroll';
                html.style.maxHeight = '90%';
                html.style.maxWidth = '820px';
                html.style.textAlign = 'left';

                document.querySelector('#cookie-modal .modal-content h3').innerText = 'Cookie Preference';
                document.querySelector('#cookie-modal .modal-content h3').style.textAlign = 'center';

                let p = document.querySelector('#cookie-modal .modal-content p');
                p.remove();

                document.querySelectorAll('button').forEach(b => b.remove());

                function addDataToTable(table, cookieName, cookieText) {
                    let row = document.createElement('tr');
                    let td1 = document.createElement('td');
                    let td2 = document.createElement('td');
                    td1.innerText = cookieName;
                    td2.innerText = cookieText;
                    row.appendChild(td1);
                    row.appendChild(td2);
                    table.appendChild(row);
                }

                // create cookies info
                // Strictly Necessary
                let esHeader = document.createElement('h4');
                esHeader.style.marginTop = '30px';
                esHeader.innerText = 'Strictly Necessary';
                let esInfo = document.createElement('p');
                esInfo.innerText = 'Necessary cookies are absolutely essential for the website to function properly. This category only includes cookies that ensures basic functionalities and security features of the website. These cookies do not store any personal information.';

                let esTable = document.createElement('table');

                addDataToTable(esTable, 'cb-enable', 'Remembers cookie policy acceptance to avoid repeated notifications.');
                addDataToTable(esTable, 'reset84', 'Incapsula non-captcha mode.');
                addDataToTable(esTable, 'visid_incap_*, nlbi_*', 'Incapsula DDoS Protection and Web Application Firewall.');

                html.appendChild(esHeader);
                html.appendChild(esInfo);
                html.appendChild(esTable);

                // Non-Necessary
                let nonHeader = document.createElement('h4');
                nonHeader.style.marginTop = '30px';
                nonHeader.innerText = 'Non-Necessary';
                let nonInfo = document.createElement('p');
                nonInfo.innerText = 'Cookies that are not necessary for the website to function and are used to collect user personal data via analysis, ads and other embedded contents.';

                let label = document.createElement('label');
                label.classList.add('switch');
                let input = document.createElement('input');
                input.type = 'checkbox';
                input.id = 'non-nec-cookies';
                let span = document.createElement('span');
                span.classList.add('slider-input', 'round');

                let spanInfo = document.createElement('span');
                spanInfo.style.width = '60px';
                spanInfo.style.display = 'inline-block';
                spanInfo.innerText = 'Disabled';
                spanInfo.id = 'non-nec-state';

                let nonEsTable = document.createElement('table');

                addDataToTable(nonEsTable, 'AEC', 'AEC cookies ensure requests in a session are user-initiated.');
                addDataToTable(nonEsTable, 'YSC', 'Used by YouTube to remember user input and associate actions');
                addDataToTable(nonEsTable, '__Secure-ENID', 'Used by Google to prevent fraudulent login attempts.');
                addDataToTable(nonEsTable, 'DV', 'Used by Google ads.');
                addDataToTable(nonEsTable, 'SOCS', `Used by Google to store a user's state regarding their cookies choice`);
                addDataToTable(nonEsTable, 'VISITOR_INFO1_LIVE', `Youtube cookie that collects data about content preferences`);


                label.appendChild(input);
                label.appendChild(span);


                html.appendChild(nonHeader);
                html.appendChild(nonInfo);
                html.appendChild(nonEsTable);
                html.appendChild(spanInfo);
                html.appendChild(label);

                let toggle = document.querySelector('#non-nec-cookies');
                toggle.addEventListener('change', (e) => {
                    let text = document.querySelector('#non-nec-state');
                    text.innerText = e.target.checked ? 'Enabled' : 'Disabled';
                });

                let acceptBtn = document.createElement('button');
                acceptBtn.id = 'accept-button';
                acceptBtn.style.marginTop = '30px';
                acceptBtn.innerHTML = '<a href="" class="cb-enable">' + options.saveText + '</a>';
                acceptBtn.classList.add('cg-button', 'standard', 'accent', 'default');
                html.appendChild(acceptBtn);

                $('#accept-button').click(function() {
                    $('#cookie-modal').css('display', 'none');
                    options.acceptFunction(cookieValue);
                    cookieAccept();
                });

                $('#back-button').click(function(e) {
                    window.reloadLocation();
                });


            });


            $('#decline-button').click(function() {
                // Handle the "Continue" button click, e.g., close the modal
                $('#cookie-modal').css('display', 'none');
                // Call the acceptFunction to handle cookie acceptance
                options.declineFunction(cookieValue);
                cookieDecline();
            });


            var removeBar = function(func) {
                if (options.acceptOnScroll) $(document).off('scroll');
                if (typeof(func) === 'function') func(cookieValue);
                if (options.effect == 'slide') {
                    $('#cookie-bar').slideUp(300, function() {
                        $('#cookie-bar').remove();
                    });
                } else if (options.effect == 'fade') {
                    $('#cookie-bar').fadeOut(300, function() {
                        $('#cookie-bar').remove();
                    });
                } else {
                    $('#cookie-bar').hide(0, function() {
                        $('#cookie-bar').remove();
                    });
                }
                $(document.body).removeClass('cookies-on'); //rufus modifications
                $(document).unbind('click', anyClick);
            };
            var cookieAccept = function() {
                document.cookie = cookieEntry.replace('{value}', 'accepted');
                removeBar(options.acceptFunction);
            };
            var cookieDecline = function() {
                var deleteDate = new Date();
                deleteDate.setTime(deleteDate.getTime() - (864000000));
                deleteDate = deleteDate.toGMTString();
                aCookies = document.cookie.split('; ');
                for (i = 0; i < aCookies.length; i++) {
                    aCookie = aCookies[i].split('=');
                    if (aCookie[0].indexOf('_') >= 0) {
                        document.cookie = aCookie[0] + '=0; expires=' + deleteDate + '; domain=' + options.domain.replace('www', '') + '; path=/';
                    } else {
                        document.cookie = aCookie[0] + '=0; expires=' + deleteDate + '; path=/';
                    }
                }
                document.cookie = cookieEntry.replace('{value}', 'declined');
                removeBar(options.declineFunction);
            };
            var anyClick = function(e) {
                if (!$(e.target).hasClass('cb-policy')) cookieAccept();
            };

            $('#cookie-bar .cb-enable').click(function() {
                cookieAccept();
                return false;
            });
            $('#cookie-bar .cb-disable').click(function() {
                cookieDecline();
                return false;
            });
            if (options.acceptOnScroll) {
                var scrollStart = $(document).scrollTop(),
                    scrollNew, scrollDiff;
                $(document).on('scroll', function() {
                    scrollNew = $(document).scrollTop();
                    if (scrollNew > scrollStart) {
                        scrollDiff = scrollNew - scrollStart;
                    } else {
                        scrollDiff = scrollStart - scrollNew;
                    }
                    if (scrollDiff >= Math.round(options.acceptOnScroll)) cookieAccept();
                });
            }
            if (options.acceptAnyClick) {
                $(document).bind('click', anyClick);
            }
        }
    };
})(jQuery);