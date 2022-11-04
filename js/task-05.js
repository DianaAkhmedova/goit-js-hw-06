const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

function onInputChange(event) {
  refs.nameOutput.textContent = event.currentTarget.value;
}

refs.nameInput.addEventListener('input', onInputChange);
