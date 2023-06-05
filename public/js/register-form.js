let form = document.getElementById("register-form");

let radios = document.getElementsByName("userType");
let radio_feedback = document.getElementById("radio-feedback");

for (let i = 0; i < radios.length; i++) {
    let radio_value = '';
    const radio = radios[i];
    if (radio.checked) {
        radio_value = radio.value;
        radio.classList.add("is-valid");
    } else {
        radio.classList.remove("is-valid");
        // radio_feedback.innerHTML = "Debe seleccionar una opción."
    }
    radio.addEventListener('click', function(){
        radio_value = radio.value;
        console.log(radio_value);
        // form.action = '/api/users';
        // console.log(form.action);
        radio.classList.add("is-valid");
    })
}

// Validación
let form_valid = false;
let password_confirm = false;

function usernameValidate(){
    let username_input = document.getElementById("username");
    let username_feedback = document.getElementById("username-feedback");

    username_input.addEventListener('keyup', function(){
        if (username_input.value == '') {
            form_valid = false;
            username_input.classList.remove("is-valid");
            username_input.classList.add("is-invalid");
            username_feedback.innerHTML = "Debe ingresar un nombre de usuario."
        } else if (username_input.value.length < 4) {
            form_valid = false;
            username_input.classList.remove("is-valid");
            username_input.classList.add("is-invalid");
            username_feedback.innerHTML = "El nombre de usuario debe contener un mínimo de 4 caracteres."
        }
        else {
            form_valid = true;
            username_input.classList.add("is-valid");
            username_input.classList.remove("is-invalid");
            username_feedback.innerHTML = '';
        }
        console.log(username_input.value.length, form_valid);
    })

}

function emailValidate() {
    let email_input = document.getElementById("email");
    let email_feedback = document.getElementById("email-feedback");
    let email_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    email_input.addEventListener('keyup', function(){
        if(email_input.value.match(email_format)) {
            form_valid = true;
            email_input.classList.add("is-valid");
            email_input.classList.remove("is-invalid");
            email_feedback.innerHTML = "";
        } else if (email_input.value == '') {
            form_valid = false;
            email_input.classList.add("is-invalid");
            email_input.classList.remove("is-valid");
            email_feedback.innerHTML = "Debe ingresar una dirección de email.";
        }
        else {
            form_valid = false;
            email_input.classList.add("is-invalid");
            email_input.classList.remove("is-valid");
            email_feedback.innerHTML = "Ingrese una dirección de email correcta.";
        }

        console.log(form_valid);
    })
}

function passwordValidate() {
    let password_input = document.getElementById("password");
    let password_feedback = document.getElementById("password-feedback");
    // const password_check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 
    const minusculas = /[a-z]/g;
    const mayusculas = /[A-Z]/g;
    const numeros = /[0-9]/g;


    password_input.addEventListener('keyup', function(){
        if (password_input.value.length < 8) {
            form_valid = false;
            password_input.classList.add("is-invalid");
            password_input.classList.remove("is-valid");
            password_feedback.innerHTML = "La contraseña debe contener un mínimo de 8 caracteres.";
        } else if (!password_input.value.match(minusculas)) {
            form_valid = false;
            password_input.classList.add("is-invalid");
            password_input.classList.remove("is-valid");
            password_feedback.innerHTML = "La contraseña debe contener al menos una letra minúscula.";
        } else if (!password_input.value.match(mayusculas)) {
            form_valid = false;
            password_input.classList.add("is-invalid");
            password_input.classList.remove("is-valid");
            password_feedback.innerHTML = "La contraseña debe contener al menos una letra mayúscula.";
        } else if (!password_input.value.match(numeros)) {
            form_valid = false;
            password_input.classList.add("is-invalid");
            password_input.classList.remove("is-valid");
            password_feedback.innerHTML = "La contraseña debe contener al menos un número.";
        } else {
            form_valid = true;
            password_input.classList.add("is-valid");
            password_input.classList.remove("is-invalid");
        }

        console.log(form_valid);
    })
}

function confirmPassword() {
    let password1 = document.getElementById("password");
    let password2 = document.getElementById("passwordCheck");
    let confirm_password_feedback = document.getElementById("confirm-password-feedback");

    password2.addEventListener('keyup', function(){
        if (password1.value == password2.value) {
            password_confirm = true;
            password2.classList.add("is-valid");
            password2.classList.remove("is-invalid");
        } else {
            password_confirm = false;
            password2.classList.add("is-invalid");
            password2.classList.remove("is-valid");
            confirm_password_feedback.innerHTML = "Las contraseñas deben coincidir."
        }

        console.log(password_confirm);
    })
}

usernameValidate();
passwordValidate();
confirmPassword();
emailValidate();

form.addEventListener('submit', function(ev) {
    let username = document.getElementById("username");
    let username_feedback = document.getElementById("username-feedback");
    let email = document.getElementById("email");
    let email_feedback = document.getElementById("email-feedback");
    let password = document.getElementById("password");
    let password_feedback = document.getElementById("password-feedback");
    let password2 = document.getElementById("passwordCheck");
    let confirm_password_feedback = document.getElementById("confirm-password-feedback");

    if (username.value == '') {
        username.classList.add("is-invalid");
        username_feedback.innerHTML = "Debe completar este campo.";
    } else if (email.value == '') {
        email.classList.add("is-invalid");
        email_feedback.innerHTML = "Debe completar este campo.";
    } else if (password.value == '') {
        password.classList.add("is-invalid");
        password_feedback.innerHTML = "Debe completar este campo.";
    } else if (password2.value == '') {
        password2.classList.add("is-invalid");
        confirm_password_feedback.innerHTML = "Debe completar este campo.";
    } else {
        form.classList.add("was-validated");
    }

    if (form.checkValidity() === false || form_valid === false || password_confirm === false) {
        ev.preventDefault();
        window.history.back();
    }
})