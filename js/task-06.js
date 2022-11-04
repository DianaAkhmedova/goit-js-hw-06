const inputEl = document.querySelector('#validation-input');

const checkInputValue = event => {
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }

  //   console.log(event.currentTarget.value.length);
  //   console.log(Number(inputEl.dataset.length));
  //   console.log(event.currentTarget.value.length === Number(inputEl.dataset.length));
};

inputEl.addEventListener('blur', checkInputValue);
