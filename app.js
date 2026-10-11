


let firstNumber = '';
let currentInput = '';
let operator = null;


const displayElement = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');



numberButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    currentInput += event.target.textContent;
    updateDisplay(currentInput);
  });
});


operatorButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const value = event.target.textContent;

  
    if (value === 'C') {
      clearCalculator();
      return;
    }

   
    if (firstNumber && currentInput) {
      calculate();
    } else if (currentInput) {
      firstNumber = currentInput;
    }

    operator = value;
    currentInput = '';
  });
});


equalsButton.addEventListener('click', () => {
  if (firstNumber && operator && currentInput) {
    calculate();
    operator = null; 
  }
});


function updateDisplay(value) {
  displayElement.textContent = value;
}

function clearCalculator() {
  firstNumber = '';
  currentInput = '';
  operator = null;
  updateDisplay('');
}

function calculate() {
  const num1 = Number(firstNumber);
  const num2 = Number(currentInput);
  let result = 0;

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    result = num2 === 0 ? 'Error' : num1 / num2;
  }

  updateDisplay(result);
  firstNumber = String(result); 
  currentInput = '';
}