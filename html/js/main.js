(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
    // REGULAR SCRIPT
    new WOW({
        offset: 100
    }).init();
    $('.news-ticker').newsTicker({
        itemWidth: 0
    });
    if ($(window).width() > 1199) {
        // $('.top-nav').scrollToFixed({
        //     zIndex: 500,
        //     marginTop: 150,
        // })
    } else {
            // $('.top-nav').scrollToFixed({
            //     zIndex: 500,
            //     marginTop: 70,
            // })
        }
    $('[data-toggle="tooltip"]').tooltip();
    $(".pagename").append($('.breadcrumb li a').eq(1).find('span').html());
    $('.btn-expand').click(function () {
        var $this = $(this);
        $this.toggleClass('active');
        $('.policy-wrap').toggleClass('open');
        if ($this.hasClass('active')) {
            $this.text('Thu gọn');
        } else {
            $this.text('Xem thêm');
        }
    });
    $('#responsivetabs').responsiveTabs({
        startCollapsed: 'accordion'
    });

    // $('.fly-menu a[href^="#"]').click(function(e) {
    //     e.preventDefault();
    //     $('html,body').animate({
    //         scrollTop: $(this.hash).offset().top - 160
    //     }, 700);
    //     $('.fly-menu li').removeClass('active');
    //     $(this).parent('li').addClass('active');
    //     return false;
    // });

    // HEADER SCRIPT
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('hide');
        } else {
            $('header').removeClass('hide');
        }
    });
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });

    // UP SCRIPT
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 500) {
            $('.up').addClass('active');
        } else {
            $('.up').removeClass('active');
        }
    });
    $('.up').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });

    // MENU SCRIPT
    if ($(window).width() < 1200) {}

    $('.btn-togglemenu').click(function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('open');
        $('.overlay').toggleClass('active');
        // $('html').toggleClass('deactive');
    });
    $('.overlay').click(function () {
        $(this).removeClass('active');
        $('.btn-togglemenu').removeClass('active');
        // $('html').removeClass('deactive');
        $('.menu').removeClass('open');
    });

    // CAREER SCRIPT
    $('.btn-apply').click(function () {
        $('.apply-form').slideToggle(300);
    });

    // CONTACT SCRIPT
    $('#map').click(function () {
        $(this).find('iframe').addClass('active');
    }).mouseleave(function () {
        $(this).find('iframe').removeClass('active');
    });
    $('.addresslist .address').click(function () {
        $('.addresslist .address').removeClass('active');
        $(this).addClass('active');
    });

    // SLIDE
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        pauseOnHover: false
    });
    $('.home-service .service-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 500,
        infinite: false
    });
    $('.home-product .product-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 500,
        infinite: false
    });
    // PRODUCT SLIDE

    $('.product-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        fade: true,
        asNavFor: '.product-nav'
    });
    $('.product-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.product-slide',
        dots: false,
        focusOnSelect: true,
        infinite: true,
        swipe: true,
        swipeToSlide: true,
        vertical: true,
        verticalSwiping: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 5,
                vertical: false,
                verticalSwiping: false
            }
        }]
    });
    $('.other-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        swipe: true,
        swipeToSlide: true,
        infinite: true,
        arrows: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    // INPUT NUMBER SCRIPT
    $('.btn-spin').click(function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();

        if ($button.text() == '+') {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }

        $button.parent().find('input').val(newVal);
    });
});

// // REVOLUTION SLIDER
// var tpj = jQuery;

// var banner001;
// tpj(document).ready(function() {
//     if (tpj("#banner001").revolution == undefined) {
//         revslider_showDoubleJqueryError("#banner001");
//     } else {
//         banner001 = tpj("#banner001").show().revolution({
//             sliderType: "standard",
//             sliderLayout: 'auto',
//             dottedOverlay: "none",
//             delay: 5000,
//             navigation: {
//                 keyboardNavigation: "off",
//                 keyboard_direction: "horizontal",
//                 mouseScrollNavigation: "off",
//                 onHoverStop: "off",
//                 touch: {
//                     touchenabled: "on",
//                     swipe_threshold: 75,
//                     swipe_min_touches: 50,
//                     swipe_direction: "horizontal",
//                     drag_block_vertical: false
//                 },
//                 arrows: {
//                     enable: true,
//                     style: 'uranus',
//                     tmp: '',
//                     rtl: false,
//                     hide_onleave: true,
//                     hide_onmobile: true,
//                     hide_under: 0,
//                     hide_over: 9999,
//                     hide_delay: 300,
//                     hide_delay_mobile: 1200,
//                     left: {
//                         container: 'slider',
//                         h_align: 'left',
//                         v_align: 'center',
//                         h_offset: 50,
//                         v_offset: 0
//                     },

//                     right: {
//                         container: 'slider',
//                         h_align: 'right',
//                         v_align: 'center',
//                         h_offset: 50,
//                         v_offset: 0
//                     }
//                 },
//                 bullets: {
//                     enable: true,
//                     style: 'hermes',
//                     tmp: '',
//                     direction: 'horizontal',
//                     rtl: false,

//                     container: 'slider',
//                     h_align: 'center',
//                     v_align: 'bottom',
//                     h_offset: 0,
//                     v_offset: 20,
//                     space: 10,

//                     hide_onleave: false,
//                     hide_onmobile: false,
//                     hide_under: 0,
//                     hide_over: 9999,
//                     hide_delay: 200,
//                     hide_delay_mobile: 1200

//                 }
//             },
//             responsiveLevels: [1024, 991, 767, 543],
//             visibilityLevels: [1024, 991, 767, 543],
//             gridwidth: [1600, 1024, 768, 575],
//             gridheight: [580, 400, 300, 200],
//             lazyType: "none",
//             // parallax: {
//             //     type: "scroll",
//             //     origo: "slidercenter",
//             //     speed: 50,
//             //     levels: [5000]
//             // },
//             shadow: 0,
//             spinner: "off",
//             stopLoop: "off",
//             shuffle: "off",
//             autoHeight: "off",
//             fullScreenAutoWidth: "off",
//             fullScreenAlignForce: "off",
//             fullScreenOffsetContainer: "",
//             fullScreenOffset: "",
//             disableProgressBar: "on",
//             hideThumbsOnMobile: "off",
//             hideSliderAtLimit: 0,
//             hideCaptionAtLimit: 0,
//             hideAllCaptionAtLilmit: 0,
//             debugMode: false,
//             fallbacks: {
//                 simplifyAll: "off",
//                 nextSlideOnWindowFocus: "off",
//                 disableFocusListener: false
//             }
//         });
//     }
// })

},{}]},{},[1])

//# sourceMappingURL=main.js.map
