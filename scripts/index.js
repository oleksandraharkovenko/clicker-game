'use strict';

const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const nameInputError = document.querySelector('.name-input-error');
const emailInputError = document.querySelector('.email-input-error');
const createUserButton = document.querySelector('.create-user-button');

const createAccount = () => {
    var isFormValid = validateForm();
    if (isFormValid) {
        saveUserData();
        location.href = 'pages/game.html';
    }
}

createUserButton.addEventListener("click", createAccount);

const validateForm = () => {
    let isFormValid = true;

    if (!isNameValid(nameInput.value)) {
        showErrorMessage(nameInputError);
        isFormValid = false;
    } else {
        hideErrorMessage(nameInputError);
    }

    if (!isEmailValid(emailInput.value)) {
        showErrorMessage(emailInputError);
        isFormValid = false;
    } else {
        hideErrorMessage(emailInputError);
    }

    return isFormValid;
}

const isNameValid = (name) => {
    const namePattern = /^[A-Za-z]+$/;

    return namePattern.test(name)
}

const isEmailValid = (email) => {
    const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    return emailPattern.test(email.toLowerCase());
}

const showErrorMessage = (element) => {
    element.style.display = 'block';
}

const hideErrorMessage = (element) => {
    element.style.display = 'none';
}

const saveUserData = () => {
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("email", emailInput.value);
}