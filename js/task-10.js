function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const box = document.querySelector('#boxes');
// console.log(box);

let amount = 0;
const getAmount = () => {
  amount = event.currentTarget.value;
  console.log(amount);
};
input.addEventListener('input', getAmount);

const newBoxes = document.createElement('div');

function createBoxes(amount) {
  newBoxes.style.width = '30px';
  newBoxes.style.height = '30px';
  newBoxes.style.backgroundColor = getRandomHexColor();
  return box.append(newBoxes);
}

buttonCreate.addEventListener('click', () => {
  createBoxes(amount);
});

const destroyBoxes = () => {
  newBoxes.remove();
};

buttonDestroy.addEventListener('click', destroyBoxes);
