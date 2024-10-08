//Отложенная загрузка избражений
const observer = lozad('.lozad', {
    threshold: 0.1
  });
  observer.observe();


// Модальное окно
$(document).ready(function () {
    // Маска для поля ввода телефона
    $('#phone').mask('+7 (999) 999-99-99');

    // Отправка формы
    $('#applicationForm').on('submit', function (event) {
        event.preventDefault(); // Останавливаем стандартное поведение отправки формы

        // Проверяем, заполнены ли обязательные поля
        let fullName = $('#fullName').val();
        let phone = $('#phone').val();
        let consentChecked = $('#consent').is(':checked');
        let phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

        if (!fullName) {
            alert('Пожалуйста, введите ваше ФИО.');
            return;
        }

        if (!phoneRegex.test(phone)) {
            alert('Пожалуйста, введите корректный номер телефона.');
            return;
        }

        if (!consentChecked) {
            alert('Пожалуйста, подтвердите согласие на обработку персональных данных.');
            return;
        }


        if (fullName && phone && consentChecked) {
            alert('Заявка отправлена!');
            $.fancybox.close(); // Закрываем модальное окно после отправки
        } else {
            alert('Пожалуйста, заполните все обязательные поля и дайте согласие.');
        }
    });
});



// Реализация выпадающего меню
$(document).ready(function () {
    $('.dropdown').click(function () {
        var submenu = $(this).next('.dropdown-content');

        // Переключить текущее подменю
        submenu.slideToggle();
    });
});

// Реализция мобильного меню
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


// Реализация появления кнопок при наведении на блок сертификата
$(document).ready(function () {
    // При наведении показывать кнопку
    $('.sertificates__box-item').hover(function () {
        $(this).find('.sertificates__btn').show();
    }, function () {
        $(this).find('.sertificates__btn').hide();
    });
});

// Слайдер
var swiper = new Swiper('.mySwiper', {
    slidesPerView: 6,
    hashNavigation: {
        watchState: true,
    },
    spaceBetween: 20,
    simulateTouch: true,
    breakpoints: {
        320: { // Для экранов шириной 320 и больше
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: { // Для экранов шириной 640px и больше
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: { // Для экранов шириной 1024px и больше
            slidesPerView: 6,
            spaceBetween: 20,
        }
    
    }
});


var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 6,
    spaceBetween: 20,
    hashNavigation: {
        watchState: true,
    },
    breakpoints: {
        320: { // Для экранов шириной шириной 320 и больше
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: { // Для экранов шириной 640px и больше
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: { // Для экранов шириной 1024px и больше
            slidesPerView: 6,
            spaceBetween: 20,
        }
    }
});


var swiper3 = new Swiper(".mySwiper-3", {
    // slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true, 

    breakpoints: {
        320: { // Для экранов шириной шириной 320 и больше
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: { // Для экранов шириной 640px и больше
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: { // Для экранов шириной 1024px и больше
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1360: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
});

var swiper4 = new Swiper(".mySwiper-4", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true, 

    breakpoints: {
        320: { // Для экранов шириной шириной 320 и больше
            slidesPerView: 1,
            spaceBetween: 20,
        },

        860: { // Для экранов шириной 860px и больше
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },

        1440: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});

var swiper5 = new Swiper(".mySwiper-5", {
    slidesPerView: 3,
    
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true, 

    breakpoints: {
        320: { // Для экранов шириной шириной 320 и больше
            slidesPerView: 1,
            spaceBetween: 20,
        },

        860: { // Для экранов шириной 860px и больше
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },

        1440: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});

var swiper6 = new Swiper(".mySwiper-6", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true, 

    breakpoints: {
        320: { // Для экранов шириной шириной 320 и больше
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: { // Для экранов шириной 640px и больше
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: { // Для экранов шириной 1024px и больше
            slidesPerView: 3,
            spaceBetween: 30,
        },

        1360:{
            slidesPerView: 4,
            spaceBetween: 20,
        }
        }
});

