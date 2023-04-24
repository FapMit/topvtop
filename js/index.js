$(function () {
    $('.burger').on('click', function (e) {
        e.preventDefault()
        $('.header__nav').toggleClass('header__nav--open')
        $('.burger').toggleClass('burger--close')
    })

    $('.hero__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        swipe: false,
        dots: true,
        appendDots: $('.hero__dots'),
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    swipe: true
                }
            }
        ]
    })

    $('.functional__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        swipe: false,
        dots: true,
        appendDots: $('.functional__dots'),
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    swipe: true,
                    dots: true
                }
            }
        ]
    })

    $('.safety__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        swipe: false,
        dots: true,
        appendDots: $('.safety__dots'),
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    swipe: true,
                    dots: true
                }
            }
        ]
    })   
    
    $('.stage__slider').slick({
        swipe: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        variableWidth: true,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 2048,
                settings: "unslick"
            },
            {
                breakpoint: 769,
                settings: "slick"
            }
        ]
    })

    $('.community__slider').slick({
        swipe: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,
        variableHeight: true,
        focusOnSelect: true,
        centerMode: true
    })

    $('.team__slider').slick({
        swipe: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,
        variableHeight: true,
        focusOnSelect: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 2048,
                settings: "unslick"
            },
            {
                breakpoint: 1100,
                settings: "slick"
            }
        ]

    })

    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__nav').hasClass('header__nav--open') === false) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    }, 0)

    $(".nav").on("click", "a", function (e) {
        e.preventDefault()
        if ($('.header__nav').hasClass('header__nav--open') === true)
        {
            $('.header__nav').removeClass('header__nav--open')
            $('.burger').removeClass('burger--close')
        } 
        const screenWidth = window.screen.width;
        var id = $(this).attr('href')
        if (screenWidth < 769) {
            var top = $(id).offset().top
        }
        else {
            var top = $(id).offset().top + 50
        }
        $('body,html').animate({ scrollTop: top }, 1000)
    })
})

const modal = new GraphModal();

document.querySelector('.btn').addEventListener('click', () => {
    new GraphModal().open('second');
});




