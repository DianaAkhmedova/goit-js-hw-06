function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const button = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

const changeColor = event => {
  const colorHex = (body.style.backgroundColor = getRandomHexColor());
  colorValue.textContent = `${colorHex}`;
};

button.addEventListener('click', changeColor);
