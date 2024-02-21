'use strict';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

function loadHandler(event) {
    const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
    email.value = formData.email || '';
    message.textContent = formData.message || '';
}


function inputHandler(event) {
    event.preventDefault();
    const trimmedValue = event.target.value.trim();
    localStorage.setItem(event.target.name, trimmedValue);
}

function submitHandler(event) {
    event.preventDefault();
    const result = {
        email: localStorage.getItem('email'),
        message: localStorage.getItem('message')
    };
    form.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(result);
}

form.addEventListener('input', inputHandler);
form.addEventListener('submit', submitHandler);
window.addEventListener('load', loadHandler);

window.addEventListener('beforeunload', () => {
    const formData = {
        email: email.value.trim(),
        message: message.textContent.trim()
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
