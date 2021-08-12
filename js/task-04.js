const counter = {
  value: 0,
  test: null,
  increment() {
    this.test = setInterval(() => {
      this.value += 1

      valueEL.textContent = counter.value
    }, 130)
  },
  click() {
    this.value += 1
    valueEL.textContent = counter.value
  },
  clickDec() {
    this.value -= 1
    valueEL.textContent = counter.value
  },
  decrement() {
    this.test = setInterval(() => {
      this.value -= 1

      valueEL.textContent = counter.value
    }, 130)
  },
  stopDecrement() {
    clearInterval(this.test)
  },
}

const decrementButton = document.querySelector('.js-decrement')
const incrementButton = document.querySelector('.js-increment')
const valueEL = document.querySelector('.js-value')
console.dir(decrementButton)
decrementButton.addEventListener('mousedown', function () {
  counter.decrement()
})
decrementButton.addEventListener('mouseup', function () {
  counter.stopDecrement()
})
incrementButton.addEventListener('mousedown', function () {
  counter.increment()
})
incrementButton.addEventListener('mouseup', function () {
  counter.stopDecrement()
})
decrementButton.addEventListener('mousedown', function () {
  counter.clickDec()
})
incrementButton.addEventListener('mousedown', function () {
  counter.click()
})
