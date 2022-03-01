$(document).ready(function () {
    $('.carousel').carousel({
        interval: 6000
    });

    // $('.owl-carousel').owlCarousel();
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        autoplayHoverPause: true,
        responsiveClass: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                nav: false,
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});

$(".ts-testimonial").owlCarousel({
    items: 2,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    autoplayHoverPause: true,
    responsiveClass: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
        0: {
            nav: false,
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});