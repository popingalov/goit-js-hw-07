const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы']

const ingredientsEl = document.querySelector('#ingredients')

const ingredientEl = ingredients.map(item => {
  const itemEl = document.createElement('li')
  itemEl.textContent = item

  return itemEl
})

ingredientsEl.append(...ingredientEl)
