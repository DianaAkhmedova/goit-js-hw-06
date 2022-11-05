function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  box: document.querySelector('#boxes'),
};

let amount = 0;
const getAmount = event => {
  amount = event.target.value;
};

function createBoxes(amount) {
  let boxSize = 20;

  for (let i = 1; i <= amount; i += 1) {
    const newBoxes = document.createElement('div');

    boxSize += 10;

    newBoxes.style.width = `${boxSize}px`;
    newBoxes.style.height = `${boxSize}px`;
    newBoxes.style.backgroundColor = getRandomHexColor();
    refs.box.append(newBoxes);
  }
}

const handleClickButtonCreate = () => {
  createBoxes(amount);
};

const destroyBoxes = () => {
  refs.box.innerHTML = '';
};

refs.input.addEventListener('change', getAmount);
refs.buttonCreate.addEventListener('click', handleClickButtonCreate);
refs.buttonDestroy.addEventListener('click', destroyBoxes);
