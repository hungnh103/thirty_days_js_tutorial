const isPrime = (n) => {
  if (n === 0 || n === 1) return false

  let count = 0
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) count++
    if (count > 1) return false
  }

  return true
}

const getColorByNumberType = (n) => {
  if (isPrime(n)) {
    // Prime numbers background is red
    return '#f05a51'
  } else if (n % 2 === 0) {
    // Even numbers background is green
    return '#65c665'
  } else {
    // Odd numbers background is yellow
    return '#fddb3a'
  }
}

const fillNumbers = (n) => {
  const board = document.querySelector('.board-wrapper')
  board.innerHTML = ''

  for (let i = 0; i < n; i++) {
    const cell = document.createElement('div')
    cell.className = 'number-item'
    cell.textContent = i
    cell.style.background = getColorByNumberType(i)
    board.appendChild(cell)
  }
}

const generateNumbers = () => {
  event.preventDefault()

  const form = event.target
  const userInput = Number(form.amount.value)

  if (isNaN(userInput)) {
    form.querySelector('.error-message').textContent = 'Enter number value on input field to generate numbers'
  } else {
    fillNumbers(userInput)
  }
}
