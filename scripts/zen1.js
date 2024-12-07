function loadModalFrames() {
    jQuery('#modal-1 .tab-content #online-account-opening #accountopenframe').prop('src', frame1src);
    jQuery('#modal-1 .tab-content #atmbranch-locator #locatorframe1').prop('src', frame3src1);
    jQuery('#modal-1 .tab-content #atmbranch-locator #locatorframe2').prop('src', frame3src2);
}


jQuery(window).load(function() {
    //activate all pointer-events on investors page
    jQuery('.post-1472.page section.row.seeAccordionLargeWithFiles.seeAccordionCategories').css('pointer-events', 'all');
});

jQuery(document).ready(function($) {

    //for pdf.
    $(function() {
        if (/iPhone|iPod|iPad/.test(navigator.userAgent))
            $('iframe').wrap(function() {
                var $this = $(this);
                return $('<div />').css({
                    width: $this.attr('width'),
                    height: $this.attr('height'),
                    overflow: 'auto',
                    '-webkit-overflow-scrolling': 'touch'
                });
            });
    })


    if ($("div#7017.post-7017").length > 0) {
        $(".page-heading > .heading-text.container h3").append('<br/><br/><a class="cg-button standard white default" style="margin: 0px; padding: 7px 15px 7px 15px;" href="https://www.zenithbank.com/images/ZEDSTORES-DISCLAIMER.pdf" target="_blank"><span class="text">Terms & Conditions</span></a>');
    }

    //agree to the policy checkbox
    $("div#ninja_forms_field_11_div_wrap").prepend('<span style="margin: 10px 0px;font-size: 12px;display:block;"><input type="checkbox" class="agree_check"> I consent to my information being stored in relation to dealing with my enquiry. <a href="https://www.zenithbank.com/customer-service/privacy-policy/" target="blank">Learn more about our Privacy Policy</a></span>');
    $('input#ninja_forms_field_11').attr("disabled", "true");

    $('.agree_check').click(function() {

        var the_parent = $(this).parent().closest('div').attr("id");

        if ($(this).is(':checked')) {
            $('#' + the_parent + ' input[type="submit"]').removeAttr("disabled");
        } else {
            $('#' + the_parent + ' input[type="submit"]').attr("disabled", "true");
        }

    });

    //new-2020
    $(".mobile-header-opts").append("<a id='mobile-quicklink'><i class='fa fa-share-square-o'></i><span>LINKS</span></a>");
    $("#mobile-top-text").append('<div id="floating-quicklink" style="display: none;"><section class="row"><div class="cpb_content_element col-sm-12"><div class="cpb-asset-content"><ul><li><a href="https://onlineac.zenithbank.com/">Open Account</a></li> <li><a href="https://realtime.zenithbank.com/onlinevirtualcard" target="_blank">Virtual Card</a></li>  <li><a href="https://www.zenithbank.com/apps">Apps</a></li> <li><a href="https://www.zenithbank.com/customer-service/#self-service">Self-Service</a></li><li><a href="https://www.zenithbank.com/customer-service/find-a-branch-atm/">ATM/Branch Locator</a></li><li><a href="https://www.zenithbank.com/letter-of-credit-application-form/">Forms</a></li><li><a href="https://www.zenithbank.com/customer-service/faqs/">FAQs</a></li></ul></div></div></section> </div>');


    $(".mobile-header-opts").append("<div class='mobile_flag'><div class='menu-flag parent'>\
	 <a href='#' class='flag-hover'><img src='/media/2384/nigeria.png' style='width: 30px; margin-top: -5px;' /> <i class='cg-icon-chevron-down'></i><p>Countries</p></a>\
    <ul class='sub-menu' style='top: 100px; display:none; min-width: 155px;'>\
	<li class='submenu-content'>\
	<ul class='country-flag'>\
	<li class='heading'><h5 class='submenu-heading'>Select Country</h5></li>\
    <li class='country'><a href='http://www.zenithbank.gm/' target='_blank'>Gambia <img src='/media/2382/gambia.png' /></a></li>\
    <li class='country'><a href='https://www.zenithbank.com.gh/' target='_blank'>Ghana <img src='/media/2383/ghana.png' /></a></li>\
    <li class='country current'><a href='https://www.zenithbank.com/' target='_blank'>Nigeria <img src='/media/2384/nigeria.png' /></a></li>\
    <li class='country'><a href='http://www.zenithbank.com.sl/' target='_blank'>Sierra Leone <img src='/media/2385/sierra-leone.png' /></a></li>\
    <li class='country'><a href='http://www.zenith-bank.co.uk/' target='_blank'>United Kingdom <img src='/media/2386/united-kingdom.png' /></a></li>\
    </ul>\
	<div>\
	<ul class='other-links country-flag'>\
	<li class='heading'><h5 class='submenu-heading'>Select Other Nigerian Subsidiaries</h5></li>\
    <li class='links'><a href='http://www.zenithnominees.com/' target='_blank'>Zenith Nominees Limited</a></li>\
	<li class='links'><a href='http://www.quantumzenithtrustees.com.ng/' target='_blank'>Quantum Zenith Trustees</a></li>\
	<li class='links'><a href='https://quantumzenithsecurities.com.ng/' target='_blank'>Quantum Zenith Securities</a></li>\
	<li class='links'><a href='http://www.quantumzenithasset.com.ng/' target='_blank'>Quantum Zenith Asset Management</a></li>\
	<li class='links'><a href='http://www.quantumzenithcapital.com.ng/' target='_blank'>Quantum Zenith Capital</a></li>\
	</ul>\
	</div></div>");


    // $(".aux-item.aux-search .menu").prepend("<li class='menu-flag parent'>    <a href='#' class=''><h1 class='textChange'><div class='textChange__container'><div class='textChange__sprite'><b>Subsidiaries</b><b>Language</b><b>Text Size</b><b>Speech</b>\t<b>Subsidiaries</b><b>Language</b><b>Text Size</b><b>Speech</b>\t<b>Subsidiaries</b><b>Language</b><b>Text Size</b><b>Speech</b>\t</div></div></h1><img src='/media/2384/nigeria.png' style='width: 30px; margin-top: -5px;' /> <i class='cg-icon-chevron-down'></i></a>    <ul class='sub-menu' style='top: 100px; display:none; min-width: 155px;'>\t<li class='submenu-content'>\t<ul class='country-flag'>\t<li class='heading'><h5 class='submenu-heading'>Select Country</h5></li>    <li class='country'><a href='http://www.zenithbank.gm/' target='_blank'>Gambia <img src='/media/2382/gambia.png' /></a></li>    <li class='country'><a href='https://www.zenithbank.com.gh/' target='_blank'>Ghana <img src='/media/2383/ghana.png' /></a></li>    <li class='country current'><a href='https://www.zenithbank.com/' target='_blank'>Nigeria <img src='/media/2384/nigeria.png' /></a></li>    <li class='country'><a href='http://www.zenithbank.com.sl/' target='_blank'>Sierra Leone <img src='/media/2385/sierra-leone.png' /></a></li>    <li class='country'><a href='http://www.zenith-bank.co.uk/' target='_blank'>United Kingdom <img src='/media/2386/united-kingdom.png' /></a></li>    </ul>\t<div>\t<ul class='other-links'>\t<li class='heading'><h5 class='submenu-heading'>Select Other Nigerian Subsidiaries</h5></li>    <li class='links'><a href='http://www.zenithnominees.com/' target='_blank'>Zenith Nominees Limited</a></li>\t<li class='links'><a href='http://www.quantumzenithtrustees.com.ng/' target='_blank'>Quantum Zenith Trustees</a></li>\t<li class='links'><a href='https://quantumzenithsecurities.com.ng/' target='_blank'>Quantum Zenith Securities</a></li>\t<li class='links'><a href='http://www.quantumzenithasset.com.ng/' target='_blank'>Quantum Zenith Asset Management</a></li>\t<li class='links'><a href='http://www.quantumzenithcapital.com.ng/' target='_blank'>Quantum Zenith Capital</a></li>\t</ul>\t</div>\t</li>\t<li class='select-language'>\t<div id='google_language_translator' class='google_language_translator'>\t<h5 class='submenu-heading'>Language</h5>\t</div>\t<div class='toggle-wrap'>\t<h5 class='submenu-heading'>Text Size</h5>\t<div class='toggle-fontsize'>\t<a id='big' href='javascript:void(0);'>+</a>\t<a id='reset' title='Reset' href='javascript:void(0);'>A</a>\t<a id='small' href='javascript:void(0);'>-</a></div></div>\t<div class='text-to-speech'>\t<div class='speech-initiate first-step show-step'><h5 class='submenu-heading'>Text to Speech</h5>\t<a href='#' id='speak-open' class='cg-button standard accent default'>Speak</a></div>\t<div class='speech-content second-step'>\t<div class='speech-row'>      <h5 class='submenu-heading' style='margin-top: 0'>Choose voice</h5>      <select id='voices'></select>\t\t<a href='#' id='speak' class='cg-button standard accent default'>Start Speaking</a>\t<a href='#' id='stop-speech' class='cg-button standard accent default'>Stop</a>    </div>\t<div id='modal1' class='error-msg'>\t  <h4>Speech Synthesis not supported</h4>\t  <p>Your browser does not support speech synthesis.</p>\t  <p>We recommend you use Google Chrome.</p>\t  <div class='action-bar'><a href='#' class='cg-button standard accent default'>Close</a></div>\t</div></div>\t</div>\t</li>\t</ul></li>");

    $("#speak-open").on("click", function() {
        $(this).closest('.text-to-speech').find(".first-step").removeClass("show-step");
        $(this).closest('.text-to-speech').find(".second-step").addClass("show-step");
    });

    $(function() {
        if ('speechSynthesis' in window) {
            speechSynthesis.onvoiceschanged = function() {
                var $voicelist = $('#voices');

                if ($voicelist.find('option').length == 0) {
                    speechSynthesis.getVoices().forEach(function(voice, index) {
                        var $option = $('<option>')
                            .val(index)
                            .html(voice.name + (voice.default ? ' (default)' : ''));

                        $voicelist.append($option);
                    });
                }
            }

            $('#speak').click(function() {
                var text = $('.page-content').text();
                var msg = new SpeechSynthesisUtterance();
                var voices = window.speechSynthesis.getVoices();
                msg.voice = voices[$('#voices').val()];
                msg.text = text;

                msg.onend = function(e) {
                    console.log('Finished in ' + event.elapsedTime + ' seconds.');
                };

                speechSynthesis.speak(msg);
                $('#stop-speech').css('display', 'block');
                $('#speak').css('display', 'none');
            });

            $('#stop-speech').click(function(e) {
                e.preventDefault();
                window.speechSynthesis.cancel();
                $('#stop-speech').css('display', 'none');
                $('#speak').css('display', 'block');
            });

        } else {
            $('#modal1').show();
        }
    });

    window.speechSynthesis.cancel();

    $('.flag-hover').click(function() {
        $(this).siblings('.sub-menu').toggleClass('open')
    });

    //INCREASE FONT SIZE
    var size = parseInt($('body').css('font-size'));
    $("#big").on("click", function() {
        size += 2;
        $("p").css({
            "font-size": size + "px",
            "line-height": "1.5"
        });
    });

    $("#reset").on("click", function() {
        size = 15;
        $("p").css({
            "font-size": size + "px",
            "line-height": "1.5"
        });
    });
    $("#small").on("click", function() {
        size -= 2;
        if (size >= 0) {
            $("p").css({
                "font-size": size + "px",
                "line-height": "1.5"
            });
        } else {
            size = 15
            $("p").css({
                "font-size": size + "px",
                "line-height": "1.5"
            });
        }
    });


    //for deeplinking to expandable rows
    if (window.location.hash) {

        var deeplink_id = window.location.hash.substring(1);

        if ($("a[id='#" + deeplink_id + "']").length || $("#" + deeplink_id).length) {

            if ($("#" + deeplink_id).hasClass('row')) {
                $("#" + deeplink_id + ' .cpb-row-expand-text.container').addClass('row-open');
                $("#" + deeplink_id + ' .cpb-row-container.cpb-row-expanding').addClass('cpb-row-expanding-open');
            } else {
                $('html, body').animate({
                    scrollTop: $("a[id='#" + deeplink_id + "']").offset().top
                }, 500);
            }
        }
    }

    //naked header for search
    if ($('.header-wrap.full-center').hasClass("page-header-standard")) {
        $('.header-wrap.full-center').removeClass("page-header-standard");
        $('.header-wrap.full-center').addClass("page-header-naked-light");
    }

    $('.share-title .close').click(function(event) {
        $('.flt-share-bar').fadeOut(300);
    });


    $('.floating-sidebar .m-open-acc').click(function(event) {
        $('#modal-1 li').removeClass("active");
        $('#modal-1 li:nth-child(1)').addClass("active");
        $('#modal-1 .tab-content .tab-pane').removeClass("active");
        $('#modal-1 .tab-content #online-account-opening').addClass("active");
        loadModalFrames();
    });

    $('.floating-sidebar .m-loan-calc').click(function(event) {
        $('#modal-1 li').removeClass("active");
        $('#modal-1 li:nth-child(2)').addClass("active");
        $('#modal-1 .tab-content .tab-pane').removeClass("active");
        $('#modal-1 .tab-content #loan-calculator').addClass("active");
        loadModalFrames();
    });

    $('.floating-sidebar .m-locator').click(function(event) {
        $('#modal-1 li').removeClass("active");
        $('#modal-1 li:nth-child(3)').addClass("active");
        $('#modal-1 .tab-content .tab-pane').removeClass("active");
        $('#modal-1 .tab-content #atmbranch-locator').addClass("active");
        loadModalFrames();
    });

    $('.floating-sidebar .m-social').click(function(event) {
        $('#modal-1 li').removeClass("active");
        $('#modal-1 li:last-child').addClass("active");
        $('#modal-1 .tab-content .tab-pane').removeClass("active");
        $('#modal-1 .tab-content #follow-us').addClass("active");
        loadModalFrames();
    });



    $("div[aria-labelledby='Banking Tools'] .modal-dialog, div[aria-labelledby='Zenith Economic Quarterly July 2016'] .modal-dialog").css({
        width: '75%',
        top: '50%',
        height: '90%',
        'max-height': '90%',
        'max-width': '900px',
        left: '50%'
    });


    /* end of news page filter */


    //animating the bar
    $(".zen-icon").prepend("<div class='divider-wrap col-sm-12'>\
    <div class='cpb_divider thin cpb_content_element menu-slidetop' style='margin-top: 0px; margin-bottom: 0px;'></div>\
    </div>");

    $('.home-icon-2, .home-icon-3, .home-icon-4, .home-icon-5, .zen-icon').mouseenter(function(event) {
        $('.menu-slidetop').css('width');
        $('.menu-slidetop').delay(200).animate({
            'width': '100%',
            'opacity': '1'
        }, 1500);
    });
    $('.home-icon-2, .home-icon-3, .home-icon-4, .home-icon-5, .zen-icon').mouseleave(function(event) {
        $('.menu-slidetop').css({
            width: '0%',
            opacity: '0'
        });
    });



    $('.flt-social-bar .nav').click(function() {
        if ($('.flt-social-bar .essb_links').hasClass("show")) {
            $('.flt-social-bar .essb_links').removeClass('show');
            $('.flt-social-bar .nav img, .flt-social-bar .nav .cg-icon-close').toggle();

        } else {
            $('.flt-social-bar .essb_links').addClass('show');
            $('.flt-social-bar .nav img, .flt-social-bar .nav .cg-icon-close').toggle();
        }
    });




    /* hidinng expanded row before showing the next */
    //.post-228 section.row-has-id, .post-182 section.row-has-id, .post-5634 section.row-has-id, .post-11 section.row-has-id, .post-5630 section.row-has-id
    $('section.seeAccordion, section.seeAccordionLarge, section.seeAccordionNested').click(function(e) {

        var elemnt = "section:not(#" + $(this).attr('id') + ")";
        elemnt2 = "section#" + $(this).attr('id');

        //if ($( elemnt + " .cpb-row-container").hasClass('cpb-row-expanding-open')) {
        //console.log('closing other ones now');
        $(elemnt + " .cpb-row-container").removeClass('cpb-row-expanding-open');
        $(elemnt + " .cpb-row-expand-text").removeClass('row-open');
        /*} else {
            console.log( elemnt2 + ' currently opened, closing now');
            $( ".post-228 section .cpb-row-container").removeClass('cpb-row-expanding-open');
            $( ".post-228 section .cpb-row-expand-text").removeClass('row-open');
        } */

    });



    //mobile menu interaction starts here


    $('#mobile-top-search, #mobile-top-login').removeAttr('href');
    $('.menu-is-left').addClass('closed');

    $.fn.showMobileIcons = function() {
        $('.mobile-menu-link').addClass('active');
        $('#mobile-top-login, #mobile-top-search, #mobile-quicklink, .mobile_flag, #floating-login, #floating-search, #floating-quicklink').hide();
    }


    $('#mobile-top-search').click(function() {

        if ($('.mobile-menu-link').hasClass('active')) {
            $('.mobile-menu-link').removeClass('active');
            $('#mobile-top-login, #mobile-top-search, #mobile-quicklink, .mobile_flag').show();
            $('#floating-search').slideUp();
        } else {
            if ($('#mobile-menu-wrap').offset().top > 200) {
                $('html, body').animate({
                        scrollTop: 0
                    }, "slow",
                    function() {
                        $('#mobile-top-login, #mobile-top-search, #mobile-quicklink, .mobile_flag').hide();
                        $('.menu-is-left').addClass('closed');
                    });
            }

            $().showMobileIcons();
            $('#floating-search').slideToggle();
        }
    });

    $('#mobile-quicklink').click(function() {

        if ($('.mobile-menu-link').hasClass('active')) {
            $('.mobile-menu-link').removeClass('active');
            $('#mobile-top-login, #mobile-top-search, #mobile-quicklink, .mobile_flag').show();
            $('#floating-search').slideUp();
        } else {
            if ($('#mobile-menu-wrap').offset().top > 200) {
                $('html, body').animate({
                        scrollTop: 0
                    }, "slow",
                    function() {
                        $('#mobile-top-login, #mobile-top-search, .mobile_flag').hide();
                        $('.menu-is-left').addClass('closed');
                    });
            }

            $().showMobileIcons();
            $('#floating-quicklink').slideToggle();
        }
    });


    $('#mobile-top-login').click(function() {
        if ($('.mobile-menu-link').hasClass('active')) {
            $('.mobile-menu-link').removeClass('active');
            $('#mobile-top-login, #mobile-top-search, #mobile-quicklink, .mobile_flag').show();
            $('#floating-login').slideUp();
        } else {

            if ($('#mobile-menu-wrap').offset().top > 200) {
                $('html, body').animate({
                        scrollTop: 0
                    }, "slow",
                    function() {
                        $('#mobile-top-login, #mobile-top-search, #mobile-quicklink, .mobile_flag').hide();
                        $('.menu-is-left').addClass('closed');
                    });
            }
            $().showMobileIcons();
            $('#floating-login').slideToggle();
        }
    });

    $('.mobile-menu-link').click(function() {

        if ($('.mobile-menu-link').hasClass('active')) {
            $('#mobile-top-login, #mobile-top-search, #mobile-quicklink, .mobile_flag').show();
            $('.menu-is-left').addClass('closed');
            $('#floating-search, #floating-login, #floating-quicklink').slideUp();
            $('.mobile-menu-link').removeClass('active');

            //hiding the floating-sidebar if active
            $('.floating-sidebar.mobile div').removeClass('reveal-up');

        } else {
            $().showMobileIcons();
            $('.menu-is-left').removeClass('closed');
        }
    });


    //hiding all tools on scroll
    $(window).bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            //do nothing
        } else {
            $('#mobile-top-login, #mobile-top-search, #mobile-quicklink, .mobile_flag').show();
            $('.menu-is-left').addClass('closed');
            $('#floating-search, #floating-login, #floating-quicklink').slideUp();
            $('.mobile-menu-link').removeClass('active');
            $('.floating-sidebar.mobile div').removeClass('reveal-up');
        }
    });
    //end of mobile menu interaction


    $(".floating-sidebar.mobile li").click(function() {
        var id = $(this).attr('id');
        $('.floating-sidebar.mobile .' + id).addClass('reveal-up');

        $('.mobile-menu-link').addClass('active');
        $('#mobile-top-login, #mobile-top-search, #mobile-quicklink, .mobile_flag, #floating-login, #floating-search, #floating-quicklink').hide();
    });


    $.fn.scrollView = function() {
        var offset = 700;
        var width = $(window).width();
        console.log(width);
        if (width >= 1440) {
            offset = 590;
        } else if (width <= 1349) {
            offset = 450;
        } else if (width <= 1025) {
            offset = 150;
        } else {
            offset = 700;
        }
        return this.each(function() {
            if ($(window).scrollTop() == 0) {
                $('html, body').animate({
                    scrollTop: $(this).offset().top - offset
                }, 500);
            }
        });
    }

    $.fn.showFloats = function() {
        //console.log('showing floating stuffs');
        $('.floating-sidebar').fadeIn(300);
        $('.flt-social-bar').fadeIn(300);
    }

    $.fn.hideFloats = function() {
        $('.flt-social-bar').fadeOut(300);
    }


    $(document).scroll(function() {
        var y = $(this).scrollTop();
        var threshold = 500;
        var b = y;

        if (y > 0) {
            $(".bars").each(function() {
                b = b - 30;
                $(this).css({
                    opacity: '1',
                    transform: 'translateX(-' + b + 'px)'
                });
            });
        } else {
            $(".bars").each(function() {
                $(this).css({
                    opacity: '0',
                    transform: 'none'
                });
            });
        }

        if (y > 600 && $(location).attr('href') == "/") {
            $().showFloats();
        } else if (y < 600 && $(location).attr('href') == "/") {
            //$().hideFloats();
        } else if (y > 250 && $(location).attr('href') != "/") {
            /* inner pages */
            $().showFloats();
        } else if (y < 250 && $(location).attr('href') != "/") {
            $().hideFloats();
        } else if ($('.floating-sidebar').hasClass('activ') && ($(window).height() - y) > 445) {
            console.log('hiding all');
            //$('.flt-social-bar').fadeOut(300);
            /* $('.floating-sidebar').fadeOut(300); */
        }

    });


    $('.home-icon-menu').mouseover(function(event) {
        $('.home-icon-menu').addClass('open');
        $('.home-icon-menu').removeClass('closed');
    });

    $('.home-icon-menu').mouseleave(function(event) {
        $('.zen-icon').slideUp("300");
        $('.home-icon-menu').addClass('closed');
        $('.home-icon-menu').removeClass('open');
    });


    $('.zen-icon').mouseleave(function(event) {
        $('.zen-icon').slideUp("300");
    });

    $('.home-icon-2').mouseover(function(event) {
        if ($('.home-icon-2-content').css('display') != 'block') {
            $('.zen-icon').css("display", "none");
            $('.home-icon-2-content').slideDown();
            $('.home-icon-menu').scrollView();
        } ///else $('.zen-icon').slideUp("500");
    });

    $('.home-icon-3').mouseover(function(event) {
        if ($('.home-icon-3-content').css('display') != 'block') {
            $('.zen-icon').css("display", "none");
            $('.home-icon-3-content').slideDown();
            $('.home-icon-menu').scrollView();
        } //else $('.zen-icon').slideUp("500");
    });

    $('.home-icon-4').mouseover(function(event) {
        if ($('.home-icon-4-content').css('display') != 'block') {
            $('.zen-icon').css("display", "none");
            $('.home-icon-4-content').slideDown();
            $('.home-icon-menu').scrollView();
        } //else $('.zen-icon').slideUp("500");
    });

    $('.home-icon-5').mouseover(function(event) {
        if ($('.home-icon-5-content').css('display') != 'block') {
            $('.zen-icon').css("display", "none");
            $('.home-icon-5-content').slideDown();
            $('.home-icon-menu').scrollView();
        } //else $('.zen-icon').slideUp("500");
    });

    $('.home-icon-6').mouseover(function(event) {
        if ($('.home-icon-6-content').css('display') != 'block') {
            $('.zen-icon').css("display", "none");
            $('.home-icon-6-content').slideDown();
            $('.home-icon-menu').scrollView();
        } //else $('.zen-icon').slideUp("500");
    });

    $('.home-icon-nochildren-2').mouseover(function(event) {
        $('.zen-icon').css("display", "none");
    });
    $('.home-icon-nochildren-3').mouseover(function(event) {
        $('.zen-icon').css("display", "none");
    });
    $('.home-icon-nochildren-4').mouseover(function(event) {
        $('.zen-icon').css("display", "none");
    });
    $('.home-icon-nochildren-5').mouseover(function(event) {
        $('.zen-icon').css("display", "none");
    });
    $('.home-icon-nochildren-6').mouseover(function(event) {
        $('.zen-icon').css("display", "none");
    });

    /* CALCULATOR */
    $("#loaninterestrate").slider();
    $("#loanduration").slider();

    $("#loanamount").slider({
        //ticks: [0, 2500000, 5000000, 7500000, 10000000],
        // ticks_labels: ["0", "2.5M", "5M", "7.5M", "10M"],
        ticks_snap_bounds: 100000
    });


    $("#savingsinterestrate").slider();
    $("#savingduration").slider();

    $("#monthlycontribution").slider({
        ticks: [0, 2500000, 5000000, 7500000, 10000000],
        ticks_labels: ["0", "2.5M", "5M", "7.5M", "10M"],
        ticks_snap_bounds: 100000
    });

    function format2(n) {
        return "₦ " + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    }

    $('#loanamount, #loaninterestrate, #loanduration').on("slide", function(slideEvt) {
        var loan_amount = $('#loanamount').val();
        if (loan_amount == '') {} else {
            var loan_amount = parseFloat(loan_amount.replace(/[^0-9 | ^.]/g, ''));
            var interest_rate = $('#loaninterestrate').val();
            var interest_total = loan_amount * interest_rate / 100;
            var amount_and_interest = loan_amount + interest_total;
            var monthly_pay = amount_and_interest / $('#loanduration').val();
            $('#monthlypayment').val(format2(monthly_pay));
        }
    });

    $('#monthlycontribution, #savingsinterestrate, #savingduration').on("slide", function(slideEvt) {
        var monthly_contr = $('#monthlycontribution').val();
        if (monthly_contr == '') {} else {
            var monthly_contr = parseFloat(monthly_contr.replace(/[^0-9 | ^.]/g, ''));
            var interest_rate = $('#savingsinterestrate').val();
            var savings_duration = $('#savingduration').val();
            var interest_total = monthly_contr * interest_rate / 100;
            var amount_and_interest = monthly_contr + interest_total;
            var total_saved = amount_and_interest * savings_duration;
            $('#totalsumacquired').val(format2(total_saved));
        }
    });

    $('#calc_percentage_of').click(function() {
        var what_percentage = $('#what_percentage').val();
        var amount = $('#amount').val();
        if (what_percentage == '') {} else {
            var percentage = amount * what_percentage / 100;
            $('#percentage').val(percentage);
        }
    });

    $('#calc_percentage_for').click(function() {
        var what_percentage = $('#what_percentage2').val();
        var amount = $('#amount2').val();
        if (what_percentage == '') {} else {
            var percentage = (what_percentage / amount) * 100;
            $('#percentage2').val(percentage);
        }
    });


    $('.chat-head, .chat-notify').click(function() {

        if ($('.chat-body').hasClass('open')) {
            $('.chat-body, .chat-head').removeClass('open');
            $('.floating-sidebar.desktop, .chat-head .cg-icon-close').toggle();
            $('.chat-notify').hide();
            clearTimeout(run);
            var run = setInterval(chat_bubble_notify, 10000);
        } else {
            $('.chat-body, .chat-head').addClass('open');
            $('.floating-sidebar.desktop, .chat-head .cg-icon-close').toggle();
            $('.chat-notify').hide();
            clearTimeout(run);
        }
    });


    function chat_bubble_notify() {
        if (!$('.chat-body').hasClass('open')) {

            if ($('.chat-notify').hasClass('hide')) {
                $('.chat-notify').removeClass('hide');
                //$('.chat-head').addClass('hide');
            } else {
                $('.chat-notify').addClass('hide');
                //$('.chat-head').removeClass('hide');
            }
        }
    }
    var run = setInterval(chat_bubble_notify, 10000);



    // var newArray = new Array();
    var total = 0;
    $('.quiz-section-answers button').click(function() {
        //newArray.push($(this).val());

        /**for (var i = 0; i < newArray.length; i++) {
            total += newArray[i] << 0;
        }*/
        total += parseInt($(this).val());
        //console.log(total);

        var tw_link_text;
        var today = new Date();
        var christmas = new Date('12/25/2018');
        var timeDiff = Math.abs(christmas.getTime() - today.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

        dailySavings = Math.round(total / diffDays);
        weekSavings = Math.round(total / (diffDays / 7));

        if (total > 0 && total <= 100000) {
            $('.result').text('Low-key');
            $('.result_caption').text("You're going to have a quiet Christmas this year. Not bad.");
            tw_link_text = "I just realised I am going to have a quiet Christmas this year";
            $('.result_img').attr('src', '/media/2397/lowkey.jpg');
        } else if (total >= 100001 && total <= 300000) {
            $('.result').text('Swag');
            $('.result_caption').text("You're going to enjoy this Christmas without breaking the bank");
            tw_link_text = "I just realized I won't be breaking the bank this Christmas";
            $('.result_img').attr('src', '/media/2399/swag.jpg');
        } else if (total >= 301000 && total <= 1000000) {
            $('.result').text('Living Large');
            $('.result_caption').text("You're definitely going to be making a statement this Christmas");
            $('.result_img').attr('src', '/media/2396/living-large.jpg');
            tw_link_text = "I am going to be making a statement this Christmas";
        } else if (total >= 1001000) {
            $('.result').text('Boss mode');
            $('.result_caption').text("You're going all out with no limits");
            $('.result_img').attr('src', '/media/2392/boss-mode.jpg');
            tw_link_text = "I am going all out with no limits this Christmas";
        } else {
            $('.result').text('nothing');
        }
        var tw_url = "https://twitter.com/intent/tweet?text=" + escape(tw_link_text) + "%20" + escape("https://www.zenithbank.com/save4xmas/?utm_source=zenith&utm_medium=twitter-share") + "%20via%20@zenithbank&t=menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600";

        $('.social_icons2 a:nth-child(2)').attr('href', tw_url);
        $('.totalBudget').text(total.toLocaleString('en'));
        $('.weeklySavings').text(weekSavings.toLocaleString('en'));
        $('.dailySavings').text(dailySavings.toLocaleString('en'));
    });


    var QuizApp = {
        init: function() {
            var nextButtons = document.querySelectorAll('.quiz-button-start, .quiz-button-answer, .quiz_img_btn');

            [].forEach.call(nextButtons, function(button) {
                button.addEventListener('click', QuizApp.nextScreen, false);

            });

            var retakeButton = document.querySelector('.quiz-button-restart');

            if (retakeButton) {
                retakeButton.addEventListener('click', QuizApp.restartQuiz, false);
            }
        },

        currentScreen: function() {
            return document.querySelector('.quiz-screen-active');
        },

        nextScreen: function() {
            console.log('next screen called');

            var currentScreen = $(QuizApp.currentScreen()),
                nextScreen = currentScreen.next();

            QuizApp.hideScreen(currentScreen);
            QuizApp.showScreen(nextScreen);
        },

        prevScreen: function() {},

        hideScreen: function(screen) {
            $(screen).removeClass('quiz-screen-active');
        },

        showScreen: function(screen) {
            $(screen).addClass('quiz-screen-active');
        },

        restartQuiz: function() {
            var firstQuizScreen = $('.quiz')
                .children('.quiz-screen')
                .first();
            QuizApp.hideScreen(QuizApp.currentScreen());
            QuizApp.showScreen(firstQuizScreen);
            //newArray = [];
            total = 0;
        }
    };

    QuizApp.init();

    /**$(".quiz_img_btn").click(function() {
        window.location = $(this).find("button"); 
        return false;
      });**/







    /* new loan calculator page */
    $('#znloanamount, #znloaninterestrate, #znloanduration').on("keyup change", function() {
        var znloan_amount = $('#znloanamount').val();
        if (znloan_amount == '') {} else {
            var znloan_amount = parseFloat(znloan_amount.replace(/[^0-9 | ^.]/g, ''));
            var months = $('#znloanduration').val();

            if (months == 0) {
                months = 1;
            }

            var interest_rate = $('#znloaninterestrate').val();
            var interest_total = znloan_amount * interest_rate / 100;
            var amount_and_interest = znloan_amount + interest_total;
            var monthly_pay = amount_and_interest / months;
            $('#monthlypayment').val(format2(monthly_pay));
            $('#totalpayment').val(format2(monthly_pay * months));
            $('#monthlyprincipal').val(format2(znloan_amount / months));
            $('#monthlyinterest').val(format2(interest_total / months));
        }
    });

    /** Add by Toluwalase **/
    $(window).load(function() {
        $(".goog-logo-link").empty();
        $('.goog-te-gadget').html($('.goog-te-gadget').children());

        $('select.goog-te-combo > option:first-child')
            .text('English');
    })

    //for pdf.
    $(function() {
        if (/iPhone|iPod|iPad/.test(navigator.userAgent))
            $('iframe').wrap(function() {
                var $this = $(this);
                return $('<div />').css({
                    width: $this.attr('width'),
                    height: $this.attr('height'),
                    overflow: 'auto',
                    '-webkit-overflow-scrolling': 'touch'
                });
            });
    })


    $("#speak-open").on("click", function() {
        $(this).closest('.text-to-speech').find(".first-step").removeClass("show-step");
        $(this).closest('.text-to-speech').find(".second-step").addClass("show-step");
    });

    $(function() {
        if ('speechSynthesis' in window) {
            speechSynthesis.onvoiceschanged = function() {
                $('#modal1').hide();
                var $voicelist = $('#voices');

                if ($voicelist.find('option').length == 0) {
                    speechSynthesis.getVoices().forEach(function(voice, index) {
                        var $option = $('<option>')
                            .val(index)
                            .html(voice.name + (voice.default ? ' (default)' : ''));

                        $voicelist.append($option);
                    });
                }
            }

            $('#speak').click(function() {
                var text = $('.page-content').text();
                var msg = new SpeechSynthesisUtterance();
                var voices = window.speechSynthesis.getVoices();
                msg.voice = voices[$('#voices').val()];
                msg.text = text;

                msg.onend = function(e) {
                    console.log('Finished in ' + event.elapsedTime + ' seconds.');
                };

                speechSynthesis.speak(msg);
                $('#stop-speech').css('display', 'block');
                $('#speak').css('display', 'none');
            });

            $('#stop-speech').click(function(e) {
                e.preventDefault();
                window.speechSynthesis.cancel();
                $('#stop-speech').css('display', 'none');
                $('#speak').css('display', 'block');
            });

        } else {
            $('#modal1').show();
        }
    });

    window.speechSynthesis.cancel();

    //INCREASE FONT SIZE
    var size = parseInt($('body').css('font-size'));
    $("#big").on("click", function() {
        size += 2;
        $("p").css({
            "font-size": size + "px",
            "line-height": "1.5"
        });
    });

    $("#reset").on("click", function() {
        size = 15;
        $("p").css({
            "font-size": size + "px",
            "line-height": "1.5"
        });
    });
    $("#small").on("click", function() {
        size -= 2;
        if (size >= 0) {
            $("p").css({
                "font-size": size + "px",
                "line-height": "1.5"
            });
        } else {
            size = 15
            $("p").css({
                "font-size": size + "px",
                "line-height": "1.5"
            });
        }
    });


    /*********************/


    /*
    $(document).ready(function () {

        $('.start-autoplay').on('click', function () {
            
            $('.video-wrap').show();
            //var swiper = new Swiper('.swiper-container');
            //swiper.startAutoplay();
        });
        $('.stop-autoplay').on('click', function () {
            var swiper = new Swiper('.swiper-container');
            swiper.stopAutoplay();
            $('.video-wrap').hide();
        });
    });
        */

});