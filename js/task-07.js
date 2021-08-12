const inputRangeRef = document.querySelector('#font-size-control')
const textOutputRef = document.querySelector('#text')

inputRangeRef.value = Number.parseInt(window.getComputedStyle(textOutputRef).fontSize)

inputRangeRef.addEventListener('input', onInputChange)

function onInputChange({ currentTarget }) {
  textOutputRef.style.fontSize = `${currentTarget.value}px`
}
