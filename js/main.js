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