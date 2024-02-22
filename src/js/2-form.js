'use strict';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');

function loadHandler(event) {
    const formDataString = localStorage.getItem('feedback-form-state');
    if (formDataString !== null) {
        const formData = JSON.parse(formDataString);
        emailInput.value = formData.email || '';
        messageTextarea.value = formData.message || '';
    }
    console.log(formDataString);
}

function inputHandler(event) {
    const formData = {
        email: emailInput.value.trim(),
        message: messageTextarea.value.trim()
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function submitHandler(event) {
    event.preventDefault();
    const result = {
        email: emailInput.value.trim(),
        message: messageTextarea.value.trim()
    };
    localStorage.removeItem('feedback-form-state');
    form.reset()
    console.log(result);
}

form.addEventListener('input', inputHandler);
form.addEventListener('submit', submitHandler);
window.addEventListener('load', loadHandler);


