$('.owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    margin: 10,
    stagePadding: 50,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        768: {
            items: 2,
            // nav:false
        },
        992: {
            items: 3,
            // nav:false
        },
        1000: {
            items: 6,
            // nav:true,
            loop: false
        },
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    }
});


// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     stagePadding: 30,
//     nav: true,
//     dots: false,
//     responsiveClass: true,
//     responsive: {
//         0: {
//             items: 1,
//             nav: true
//         },
//         768: {
//             items: 2,
//             // nav:false
//         },
//         992: {
//             items: 3,
//             // nav:false
//         },
//         1000: {
//             items: 6,
//             // nav:true,
//             loop: false
//         }
//     },


//     navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']

    // navText: [
    //     '<span class="arrow-owl arrow-left"></span>',
    //     '<span class="arrow-owl arrow-right"></span>'
    //   ],



// $(".next_button").click(function () {
//     owl.trigger("next.owl.carousel");
// });

// $(".prev_button").click(function () {
//     owl.trigger("prev.owl.carousel");
// });