// Calculator
const calculator = document.querySelector(".calculator");
// Display div
let display = document.querySelector("#primary-display");

// Operator buttons
const sumButton = document.querySelector("#sum");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const equalsButton = document.querySelector("#equals");
const decimalPointButton = document.querySelector("#decimal");
const clearButton = document.querySelector("#clear");

// Number buttons
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const sevenButton = document.querySelector("#seven");
const eightButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");

// Looping through and adding event listeners to all number buttons on the calc.
const calcButtons = document.querySelectorAll(".calc-button");
for (let i = 0; i < calcButtons.length; i++) {
  calcButtons[i].addEventListener("click", (e) => {
    const calcButton = e.target;
    const calcButtonValue = calcButton.textContent;
    let displayValue = display.textContent;
    const type = calcButton.dataset.type;
    const { previousCalcButtonType } = calculator.dataset;

    if (type === "number") {
      if (displayValue === "0" || previousCalcButtonType === "operator") {
        display.textContent = calcButtonValue;
      } else if (previousCalcButtonType === "equals") {
        display.textContent = calcButtonValue;
      } else {
        display.textContent = displayValue + calcButtonValue;
      }
    }

    if (type === "operator") {
      calculator.dataset.firstNumber = displayValue;
      calculator.dataset.operator = calcButton.dataset.key;
    }

    if (type === "equals") {
      const firstNumber = calculator.dataset.firstNumber;
      const operator = calculator.dataset.operator;
      const secondNumber = displayValue;
      console.log(firstNumber, operator, secondNumber);

      display.textContent = calculate(firstNumber, operator, secondNumber);
    }
    calculator.dataset.previousCalcButtonType = type;
  });

  function calculate(firstNumber, operator, secondNumber) {
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    if (operator === "sum") return firstNumber + secondNumber;
    if (operator === "subtract") return firstNumber - secondNumber;
    if (operator === "multiply") return firstNumber * secondNumber;
    if (operator === "divide") return firstNumber / secondNumber;
    if (operator === "square") return firstNumber * firstNumber;
  }
}

// Clear Button
clearButton.addEventListener("click", (e) => {
  display.textContent = "";
});
