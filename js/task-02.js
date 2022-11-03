const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listIngredientsEL = document.querySelector('#ingredients');

const list = ingredients.map(ingredient => {
  const itemsEl = document.createElement('li');
  itemsEl.textContent = ingredient;
  itemsEl.classList.add('item');

  return itemsEl;
});

listIngredientsEL.append(...list);
