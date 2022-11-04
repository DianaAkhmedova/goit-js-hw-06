const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

const onInputChange = event => {
  refs.nameOutput.textContent =
    event.currentTarget.value.trim() !== '' ? event.currentTarget.value : 'Anonymous';
};

refs.nameInput.addEventListener('input', onInputChange);
