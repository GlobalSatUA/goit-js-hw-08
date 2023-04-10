import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');


const localStorageKey = 'feedback-form-state';

const savedState = JSON.parse(localStorage.getItem(localStorageKey)) || {};

emailInput.value = savedState.email || '';
messageInput.value = savedState.message || '';

feedbackForm.addEventListener('input', throttle(() => {
const state = {
    email: emailInput.value,
    message: messageInput.value,
};
localStorage.setItem(localStorageKey, JSON.stringify(state));
}, 500));

feedbackForm.addEventListener('submit', (event) => {
event.preventDefault();
const state = {
    email: emailInput.value,
    message: messageInput.value,
};
localStorage.removeItem(localStorageKey);
emailInput.value = '';
messageInput.value = '';
console.log(state);
});


