const form = document.querySelector('.feedback-form');
let formData = {};

form.addEventListener('input', event => {
  (formData.email = form.elements['email'].value.trim()),
    (formData.message = form.elements['message'].value.trim()),
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

function getValue(form) {
  const localStorageValue = localStorage.getItem('feedback-form-state');
  if (localStorageValue) {
    const parsedObj = JSON.parse(localStorageValue);
    form.elements['email'].value = parsedObj.email;
    form.elements['message'].value = parsedObj.message;
  }
}
getValue(form);

const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', event => {
  event.preventDefault();
  if (input.value.trim() !== '' && textarea.value.trim() !== '') {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    input.value = '';
    textarea.value = '';
  }
});
