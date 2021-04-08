


//modal items

const modal = document.getElementById("email-modal");
const openBtn = document.querySelector(".subscribe-btn")
const closeBtn = document.querySelector(".email-close-btn");
const subsBtn= document.querySelector(".subs-btn");
//Click Events

openBtn.addEventListener("click", function () {
    modal.style.display = "block";
})


closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});


openBtn.addEventListener("click", function () {
    subsBtn.style.display = "none";
})


closeBtn.addEventListener("click", function () {
    subsBtn.style.display = "block";
});




//modal items

const Tmodal = document.getElementById("thankyou-modal");
const TopenBtn = document.querySelector(".modal-btn")
const TcloseBtn = document.querySelector(".thankyou-close-btn");
const TsubsBtn= document.querySelector(".thank-btn");


//Click Events

TopenBtn.addEventListener("click", function () {
    Tmodal.style.display = "block";
})


TcloseBtn.addEventListener("click", function () {
    Tmodal.style.display = "none";
});



TopenBtn.addEventListener("click", function () {
    TsubsBtn.style.display = "none";
})


TcloseBtn.addEventListener("click", function () {
    TsubsBtn.style.display = "block";
});










/***************************************************

==================== JS INDEX ======================

****************************************************

    01. Sticky Js	
    02. Mobile Menu  Js
    03. Data-Background Js
    04. Owl carousel js
    05. Owl carousel js
    06. Scroll To Top Js


****************************************************/


(function ($) {
    "use strict";

    ////////////////////////////////////////////////////

    // 01. Sticky Js

    
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $("#header-sticky").removeClass("sticky");
        } else {
            $("#header-sticky").addClass("sticky");
        }
    });


     ////////////////////////////////////////////////////

    // 02.RESPONSIVE MENU  Js

   

    var body = $('body');
    var menuTrigger = $('.js-menu-trigger');
    var mainOverlay = $('.js-main-overlay');

    menuTrigger.on('click', function () {
        body.toggleClass('menu-is-active');
    });
    
  
   mainOverlay.on('click', function () {
        body.removeClass('menu-is-active');
    });


   $('.links li a').on('click', function () {
        $('body').removeClass("menu-is-active");
    });

      /* $(".close-btn").on("click", function () {
        $('body').removeClass("menu-is-active");
    });
    */



    ////////////////////////////////////////////////////

    // 03. Data-Background Js

    $("[data-background").each(function () {
        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
    });

    
       ////////////////////////////////////////////////////

    // 03. owlCarousel Js


    $('.carousel-item').owlCarousel({
        loop:true,
        margin:20,
        fade: true,
        autoplay: true ,
		autoplaySpeed: 1000,
    	items:1,
    	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        nav:true,
    	dots:false,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:1
            },
            992:{
                items:1
            }
        }
    });
    
    
 // 04. owlCarousel Js

    $('.tailor-carousel').owlCarousel({
        loop:true,
        margin:50,
        fade: true,
  
		autoplaySpeed: 800,
    	items:1,
         nav:true,
    	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    	dots:false,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:1
            },
            992:{
                items:1
            }
        }
    });


    ////////////////////////////////////////////////////

    // 05. Scroll To Top Js

    function smoothSctollTop() {

        $('.smooth-scroll a').on('click', function (event) {

            var target = $(this.getAttribute('href'));

            if (target.length) {

                event.preventDefault();

                $('html, body').stop().animate({

                    scrollTop: target.offset().top - 0

                }, 1500);

            }

        });

    }

    smoothSctollTop();



    // Show or hide the sticky footer button

    $(window).on('scroll', function (event) {

        if ($(this).scrollTop() > 600) {

            $('#scroll').fadeIn(200)

        } else {

            $('#scroll').fadeOut(200)

        }

    });



    //Animate the scroll to yop

    $('#scroll').on('click', function (event) {

        event.preventDefault();



        $('html, body').animate({

            scrollTop: 0,

        }, 1500);

    });



})(jQuery);
