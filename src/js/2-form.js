const form = document.querySelector('.feedback-form');
form.addEventListener('input', event => {
  event.preventDefault();
  let objValue = {
    email: form.elements['email'].value,
    message: form.elements['message'].value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(objValue));
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

form.addEventListener('submit', event => {
  event.preventDefault();
  let objValue = {
    email: form.elements['email'].value,
    message: form.elements['message'].value,
  };
  console.log(objValue);
  localStorage.removeItem('feedback-form-state');
  const input = document.querySelector('input');
  input.value = '';
  const textarea = document.querySelector('textarea');
  textarea.value = '';
});
