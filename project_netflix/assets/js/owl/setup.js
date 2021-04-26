$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items: 2
        },
        600:{
            items: 4
        },
        1000:{
            items: 6
        },
        1400:{
            items: 8
        },
        2000:{
            items: 10
        }
    }
})