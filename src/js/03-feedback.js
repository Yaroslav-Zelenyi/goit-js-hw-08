import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
let formData = {};

function handleFormData(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('input', throttle(handleFormData, 500));
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  console.log(formData);
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  formData = {};
}

const localForm = localStorage.getItem('feedback-form-state');
if (localForm) {
  formData = JSON.parse(localForm);

  emailInput.value = formData.email || '';
  messageInput.value = formData.message || '';
}
