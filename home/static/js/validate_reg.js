$(function () {
    /*validate register form*/
    $('.register_form').validate({
        rules: {
            email: {
                email: true,
                required: true
            },
            pass: {
                required: true,
                minlength: 8
            },
            pass_repeat: {
                required: true,
                minlength: 8,
                equalTo: ".password"
            },
            accept_rules: {
                required: true
            }
        },
        messages: {
            email: {
                required: "Email - обязательное поле",
                email: "Email некорректный"
            },
            pass: {
                required: "Пароль - обязательное поле",
                minlength: "Пароль должен быть более 8 символов"
            },
            pass_repeat: {
                required: "Пароль - обязательное поле",
                minlength: "Пароль должен быть более 8 символов",
                equalTo: "Пароли не совпадают"
            },
            accept_rules: {
                required: "Для регистрации нужно принять правила"
            }
        }
    });
});