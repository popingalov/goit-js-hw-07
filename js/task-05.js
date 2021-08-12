const inputEl = document.querySelector('#name-input')
const valueEl = document.querySelector('#name-output')
const defaultText = valueEl.textContent

inputEl.addEventListener('input', onInputChange)

function onInputChange({ currentTarget: { value } }) {
  valueEl.textContent = value.length === 0 ? `${defaultText}` : value
}
