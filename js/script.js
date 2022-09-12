$(function () {

    // banner 

    $('.banner_cont').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: false,
        nextArrow: false,
    });

    // work

    var containerEl = document.querySelector('.my_work_img');

    var mixer = mixitup(containerEl);

    // about

    $('.about_cont').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: false,
        nextArrow: false,
    });










})