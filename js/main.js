// Carousel
$(document).ready(function() {
    const owl = $('.owl-carousel');
    owl.owlCarousel({
        center: true,
        loop: true,
        margin: 20,
        startPosition: 1,
        items: 3,
        responsive: {
            100: {
                items: 1,
            },
            410: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1200: {
                margin: 30,
            }
        }
    });

    $('.slider__btn--prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });

    $('.slider__btn--next').click(function() {
        owl.trigger('next.owl.carousel');
    });

// Nav icon
const navBtn = document.querySelector('.nav__toggle'); // находим кнопку
const nav  = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function () {
    nav.classList.toggle('nav--mobile'); // открываем/закрываем подложку при клике на крестик бургера, доб/удал. класс nav--mobile
    menuIcon.classList.toggle('menu-icon-active'); // анимация кнопки, добавляя menuIcon класс active
    document.body.classList.toggle('no-scroll'); // убираем скролл на подложке
};

});
