$(function(){
// Слайдеры
    $('.fairy-tail__slider').slick({
        infinite: true,
        nextArrow: '<button type = "button" class = "slick-btn slick-next"><img src="images/next-arrow.svg" alt="Icon: Next"></ button>',
        prevArrow: '<button type = "button" class = "slick-btn slick-prev"><img src="images/prev-arrow.svg" alt="Icon: Prev"></ button>',
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
    $('.our-trip__slider').slick({
        infinite: true,
        nextArrow: '<button type = "button" class = "slick-btn slick-next"><img src="images/next-arrow.svg" alt="Icon: Next"></ button>',
        prevArrow: '<button type = "button" class = "slick-btn slick-prev"><img src="images/prev-arrow.svg" alt="Icon: Prev"></ button>',
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

// Плавный переход по якорным ссылкам
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $(".our-trip__body").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});