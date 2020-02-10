const form = document.querySelector("form");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    // prevent default behaviour of the form
    event.preventDefault();

    // validate the firstName input
    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;

    if (checkInputLength(firstNameValue) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    // validate the email input
    const email = document.querySelector("#email");
    const emailError = document.querySelector("#emailError");
    const invalidEmailError = document.querySelector("#invalidEmailError");

    const emailValue = email.value;

    if (checkInputLength(emailValue)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (validateEmail(emailValue)) {
        invalidEmailError.style.display = "none";
    } else {
        invalidEmailError.style.display = "block";
    }

    // validate the message textarea
    const message = document.querySelector("#message");
    const messageError = document.querySelector("#messageError");
    const messageValue = message.value;

    if (checkTextAreaLength(messageValue)) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
}

function checkInputLength(value) {
    // trim the value
    const trimmedValue = value.trim();

    // if the value's length is greater than 0 return true
    if (trimmedValue.length > 0) {
        return true;
    } else {
        return false;
    }
}

function checkTextAreaLength(value) {
    // trim the value
    const trimmedValue = value.trim();

    // if the value's length is greater than or equal to 5 return true
    if (trimmedValue.length >= 5) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
