$(".main-content .owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    stagePadding: 0,
    navText: [
      '<i class="iii material-symbols-outlined"> arrow_back_ios_new </i>',
      '<i class="iii material-symbols-outlined"> arrow_forward_ios </i>',
    ],
    navContainer: ".main-content .custom-nav",
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });
  