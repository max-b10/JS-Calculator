// Calculator
const calculator = document.querySelector(".calculator");
// Display divs
let secondaryDisplay = document.querySelector("#secondary-display");
let primaryDisplay = document.querySelector("#primary-display");

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

// Clear Button
clearButton.addEventListener("click", (e) => {
  primaryDisplay.textContent = "";
  secondaryDisplay.textContent = "";
});

// Looping through and adding event listeners to all number buttons on the calc.
const calcButtons = document.querySelectorAll(".calc-button");
for (let i = 0; i < calcButtons.length; i++) {
  calcButtons[i].addEventListener("click", (e) => {
    // Cause the primary display to reflect which  button is clicked.
    const calcButton = e.target;
    const calcButtonValue = calcButton.textContent;
    const primaryDisplayValue = primaryDisplay.textContent;
    const type = calcButton.dataset.type;
    // Prevent '0s' being concatenated if it's the first button clicked.
    // Behaviour if it is a number button:
    if (type === "number") {
      if (primaryDisplayValue === "0") {
        primaryDisplay.textContent = calcButtonValue;
      } else {
        primaryDisplay.textContent += calcButtonValue;
      }
    }
    // Behaviour if it is an operator button:
    if (type === "operator") {
      secondaryDisplay.textContent = e.target.textContent;
      // 'dataset' creates a custom attribute. See html for the data-type assignment on the buttons.
      calculator.dataset.previousKeyType = "operator";
    }
  });

  // function calculate(firstNumber, operator, secondNumber){
  //   firstNumber = parseInt(firstNumber);
  //   secondNumber = parseInt(secondNumber);
}
