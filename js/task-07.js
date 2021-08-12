const inputRangeRef = document.querySelector('#font-size-control')
const textOutputRef = document.querySelector('#text')

inputRangeRef.value = Number.parseInt(window.getComputedStyle(textOutputRef).fontSize)
setTimeout(() => {
  console.log(inputRangeRef.value)
}, 3000)

inputRangeRef.addEventListener('input', onInputChange)

function onInputChange({ currentTarget }) {
  textOutputRef.style.fontSize = `${currentTarget.value}px`
}
