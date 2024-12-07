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

};
(function($) {
    if (!isMobile.Any()) {
        $.fn.extend({
            feedBackBox: function(options) {

                // default options
                this.defaultOptions = {
                    title: 'Other Services',
                    titleMessage: 'Other Services.',
                    userName: '',
                    isUsernameEnabled: true,
                    message: '',
                    ajaxUrl: '../../services/feedback/',
                    successMessage: 'Thank you for your feedback.',
                    errorMessage: 'Something wen\'t wrong!'
                };

                var settings = $.extend(true, {}, this.defaultOptions, options);

                return this.each(function() {
                    var $this = $(this);
                    var thisSettings = $.extend({}, settings);

                    var diableUsername;
                    if (!thisSettings.isUsernameEnabled) {
                        diableUsername = 'disabled="disabled"';
                    }

                    // add feedback box
                    $this.html('<div id="fpi_feedback"><div id="fpi_title"><h3>' +
                        thisSettings.title +
                        '</h3><i class="fa fa-angle-right" style="font-size:36px;color:white"></i></div><div id="fpi_content"><div id="fpi_header_message"><h3>' +
                        thisSettings.titleMessage +
                        '</h3><i class="fa fa-angle-left" style="font-size:36px;color:white"></i></div><ul><li class="dashboard"><a href="https://realtime.zenithbank.com/DotNetRealtime/" target="_blank" class="nav-link nav-toggle"><span class="title">Realtime Access</span></a></li>' +
                        '<li class="dashboard"><a href="https://auth.zenithbank.com/internetbanking/" target="_blank" class="nav-link nav-toggle"><span class="title">Corporate Internet Banking</span></a></li>' +
                        '<li class="dashboard"><a href="http://www.zenithbank.com/IBankSecurity.aspx" target="_blank" class="nav-link nav-toggle"><span class="title">Online Security</span></a></li>' +
                        '<li class="dashboard"><a href="http://www.zenithbank.com/electbankagreement.pdf" target="_blank" class="nav-link nav-toggle"><span class="title">Service Agreement</span></a></li>' +
                        '<ul></div></div>');


                    // open and close animation
                    var isOpen = false;
                    $('#fpi_title').click(function() {
                        toggle(isOpen);
                        isOpen = !isOpen;
                    });



                    $('#fpi_header_message').click(function() {
                        toggle(isOpen);
                        isOpen = !isOpen;
                    });


                    function toggle(isOpen) {

                        if (isOpen) {
                            $('#fpi_feedback').animate({
                                    "width": "+=5px"
                                }, "fast")
                                .animate({
                                    "width": "55px"
                                }, "slow")
                                .animate({
                                    "width": "60px"
                                }, "fast");
                            isOpen = !isOpen;
                            $('#fpi_title').show();
                        } else {
                            $('#fpi_feedback').animate({
                                    "width": "-=5px"
                                }, "fast")
                                .animate({
                                    "width": "365px"
                                }, "slow")
                                .animate({
                                    "width": "360px"
                                }, "fast");
                            $('#fpi_title').hide();
                            // reset properties

                        }

                    }


                });
            }
        });
    }
})(jQuery);