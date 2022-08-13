$('.owl-carousel').owlCarousel({
    margin: 10,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});
$(".owl-next").html('<i class="material-symbols-outlined"> arrow_back_ios </i>');
$(".owl-prev").html('<i class="material-symbols-outlined"> arrow_forward_ios </i>');
