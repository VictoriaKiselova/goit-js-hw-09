const form = document.querySelector('.feedback-form');
form.addEventListener('input', event => {
  event.preventDefault();
  let objValue = {
    email: form.elements['email'].value,
    message: form.elements['message'].value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(objValue).trim());
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
  if (input.value !== '' && textarea.value !== '') {
    let objValue = {
      email: form.elements['email'].value,
      message: form.elements['message'].value,
    };
    console.log(objValue);
    localStorage.removeItem('feedback-form-state');
    input.value = '';
    textarea.value = '';
  }
});
