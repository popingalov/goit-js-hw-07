const categoryEl = document.querySelectorAll('.item')
console.log(`В списке ${categoryEl.length} категории`)

categoryEl.forEach(elem => {
  console.log(
    `В категории ${elem.querySelector('h2').textContent} сидят элементы в количестве ${
      elem.querySelector('ul').children.length
    } шт.`,
  )
})
