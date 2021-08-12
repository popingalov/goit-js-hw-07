const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('change', onInputChange)

function onInputChange({ currentTarget, currentTarget: { value, dataset } }) {
  const validationValue = Number(dataset.length)

  if (value.length === validationValue && !currentTarget.classList.contains('invalid')) {
    currentTarget.classList.add('valid')
    return
  }

  if (value.length === validationValue && currentTarget.classList.contains('invalid')) {
    currentTarget.classList.replace('invalid', 'valid')
    return
  }

  if (!currentTarget.classList.contains('valid')) {
    currentTarget.classList.add('invalid')
    return
  }

  currentTarget.classList.replace('valid', 'invalid')
}
