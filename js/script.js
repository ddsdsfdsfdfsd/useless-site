
$('.slider').slick({
    slidesToShow: 2,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // fade:true,
    lazyLoad: 'ondemand',
    responsive: [{
        breakpoint: 769,
        settings: {
            slidesToShow: 2
        },
    }, {
        breakpoint: 577,
        settings: {
            slidesToShow: 1,
            fade: true,
            arrows: false
        }
    }]
});


$('.slider2').slick({
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    fade: true,
    lazyLoad: 'ondemand',
    responsive: [{
        breakpoint: 769,
        settings: {
            slidesToShow: 2
        },
    }, {
        breakpoint: 577,
        settings: {
            slidesToShow: 1,
            arrows: false
        }
    }]
});



