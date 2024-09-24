/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let firstNumber = null
let secondNumber = null
let operation = null
let operationDisplay
let result = 0
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator')
const displayResultElement = document.querySelector('.display')

displayResultElement.textContent = result

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  console.log(event.target.innerText)

  if (event.target.classList.contains('number')) {
    if (firstNumber === null) {
      firstNumber = parseInt(event.target.innerText)
      displayResultElement.textContent = firstNumber
    } else if (secondNumber === null) {
      secondNumber = parseInt(event.target.innerText)
      displayResultElement.textContent = secondNumber
    }
  }

  // Example
  if (event.target.innerText === '+') {
    operation = '+'
    displayResultElement.textContent = operation
  } else if (event.target.innerText === '-') {
    operation = '-'
    displayResultElement.textContent = operation
  } else if (event.target.innerText === '*') {
    operation = '*'
    displayResultElement.textContent = operation
  } else if (event.target.innerText === '/') {
    operation = '/'
    displayResultElement.textContent = operation
  }

  if (
    event.target.innerText === '=' &&
    firstNumber !== null &&
    secondNumber !== null &&
    operation !== null
  ) {
    if (operation === '+') {
      result = firstNumber + secondNumber
      displayResultElement.textContent = result
    }
    if (operation === '-') {
      result = firstNumber - secondNumber
      displayResultElement.textContent = result
    }
    if (operation === '*') {
      result = firstNumber * secondNumber
      displayResultElement.textContent = result
    }
    if (operation === '/') {
      result = firstNumber / secondNumber
      displayResultElement.textContent = result
    }
  }

  if (event.target.innerText === 'C') {
    firstNumber = null
    secondNumber = null
    operation = null
    result = 0
  }
})

/*-------------------------------- Functions --------------------------------*/
