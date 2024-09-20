$(document).ready(function () {
    $('.dropdown').click(function () {
        var submenu = $(this).next('.dropdown-content');

        // Переключить текущее подменю
        submenu.slideToggle();
    });
});


$(document).ready(function () {
    // Открытие меню при нажатии на бургер
    $('.burger').on('click', function () {
        $('.sidenav').addClass('active');
    });

    // Закрытие меню при нажатии на крестик
    $('.sidenav-close').on('click', function () {
        $('.sidenav').removeClass('active');
    });
});

// $(document).ready(function () {
//     $('.burger').click(function () {
//         $('.sidenav').css('right', '0');
//     });

//     $('.sidenav-close').click(function () {
//         $('.sidenav').css('right', '-360px');
//     });
// });

$(document).ready(function () {
    // При наведении показывать кнопку
    $('.sertificates__box-item').hover(function () {
        $(this).find('.sertificates__btn').show();
    }, function () {
        $(this).find('.sertificates__btn').hide();
    });
});




var swiper = new Swiper('.mySwiper', {
    slidesPerView: 2,
    hashNavigation: {
        watchState: true,
    },
    spaceBetween: 20,
    simulateTouch: true,

});



var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 2,
    spaceBetween: 20,
    hashNavigation: {
        watchState: true,
    },
});