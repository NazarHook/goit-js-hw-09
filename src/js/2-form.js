'use strict'
const form = document.querySelector('.feedback-form')
const email = document.querySelector('input')
const message = document.querySelector('textarea')
const result = {}
function loadHandler(event) {
if (localStorage.length >= 1) {
    event.preventDefault()  
    const messageValue = localStorage.getItem('message')
    const emailValue = localStorage.getItem('email')
    email.value = emailValue
    message.textContent = messageValue
} else {
email.value = ''
message.textContent = ''
}
}

function inputHandler(event) {
    event.preventDefault()
    localStorage.setItem(event.target.name, event.target.value)
}
function submitHandler(event, emailValue, messageValue) {
    event.preventDefault()
    result.email = localStorage.getItem('email')
    result.message = localStorage.getItem('message')
    form.reset()
    message.textContent = ''
    localStorage.removeItem('email')
    localStorage.removeItem('message')
console.log(result)
}
form.addEventListener('input', inputHandler)
form.addEventListener('submit', submitHandler)
window.addEventListener('load', loadHandler)