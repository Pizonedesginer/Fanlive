new WOW().init();

$('.testimonial-slide .owl-carousel').owlCarousel({
    /*loop:true,*/
    margin: 0,
    nav: true,
    rewindNav: false,
    responsive: {

        0: {
            items: 5,
            autoWidth: true,
            loop: true,
            center: false,
            margin: 30

        },
        767: {
            items: 3
        }
    }
})

$('.notre-slide .owl-carousel').owlCarousel({
    /*loop:true,*/
    // rewindNav: false,
    margin: 0,
    margin:20,
    nav: true,
    dots:false,
    items: 3,
    responsive: {
        0: {
            items: 1.3,
            // autoWidth: true,
            nav:false,            
            loop: true,
            center: false,
            margin: 15.8,
        },
        // 768: {
        //     items: 2
        // },
        767: {
            items: 3
        }
    }
})

$('.ranking-slide .owl-carousel').owlCarousel({
    loop: false,
    margin: 40,
    nav: false,
    responsive: {
        0: {
            items: 1.2,
            // autoWidth: true,
            loop: true,
            center: false,
            margin: 20,
        },
        
        767: {
            items: 3
        }
    }
})


$(document).ready(function () {

    $(window).scroll(function () {

        if ($(window).scrollTop() > 50) {

            $('.header').addClass('header-sticky');

        } else {

            $('.header').removeClass('header-sticky');

        }
    });


});





/*================Menu JS==============*/
function checkWidth() {
    var windowWidth = $(window).width();
    if (windowWidth >= 991) {
        $(".top-navigation").show();
    }
}


checkWidth();
$(window).resize(function () {
    checkWidth();
});
$(".top-navigation li").on("click", function () {

    event.preventDefault();

    if ($(".top-navigation").hasClass("openMenu")) {
        $(".main-sec").removeClass('changbannner');
        $(".top-navigation").removeClass("openMenu");
        $("html").removeClass('bodyfixed');
        $(".overlay_menu").removeClass('active');
        $(".menu-icon").removeClass('active');
    }
    

});



(function( $ ) {
    $(document).ready(function(){
        
    
    $(".menu-icon").on("click", function (event) {
    
    event.preventDefault();
    
    $(".overlay_menu").addClass("active");
        $(".main-sec").addClass('changbannner');
        $("html").addClass('bodyfixed');
    
    
    if (!$(this).hasClass("active")) {
    
    $(this).addClass("active");
    
    } else {
    $(this).removeClass("active");
    
    }
    
    
    
    
    
    
    if (!$(".top-navigation").hasClass("openMenu")) {
    
        $(".top-navigation").addClass("openMenu");
    
    
    
    } else {
    
        $(".top-navigation").removeClass("openMenu");
    
        $(".overlay_menu").removeClass("active");
        $(".main-sec").removeClass('changbannner');
        $("html").removeClass('bodyfixed');
    }
    });
    
     $(document).on("click",".menu-close",CloseMenu);
     $(document).on("click",".overlay_menu",CloseMenu);		
    
    });
    
    
    function CloseMenu(event){
     event.preventDefault();
    if($(".top-navigation").hasClass("openMenu")){
    $(".top-navigation").removeClass("openMenu");
    
    } 
    if($(".overlay_menu").hasClass("active")){
    
    $(".overlay_menu").removeClass("active");
    }
    
    if (!$(".overlay_menu").hasClass("active")) {
    
        $(".main-sec").removeClass('changbannner');
        $(".top-navigation").removeClass("openMenu");
        $("html").removeClass('bodyfixed');
        $(".overlay_menu").removeClass('active');
    
    }
    
    
    if($(".menu-icon").hasClass("active")){
    $(".menu-icon").removeClass("active");
    
    }	
    }
    
    })( jQuery );
    
    
/*================Menu JS End==============*/

