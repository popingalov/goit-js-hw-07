const categoryEl = document.querySelectorAll('.item')
console.log(`В списке ${categoryEl.length} категории`)

categoryEl.forEach(elem => {
  console.log('Категория:', elem.querySelector('h2').textContent),
    console.log('Количество элементов:', elem.querySelector('ul').children.length)
})
