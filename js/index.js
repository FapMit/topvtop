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

    const screenWidth = window.screen.width;
    if (screenWidth < 769) {
        $('.stage__slider').slick({
            swipe: true,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            draggable: false,
            waitForAnimate: false
        })
    }

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

    if (screenWidth < 1100) {
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
            centerMode: true
        })
    }

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
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 1000)
    })
})

const modal = new GraphModal();

document.querySelector('.btn').addEventListener('click', () => {
    new GraphModal().open('second');
});