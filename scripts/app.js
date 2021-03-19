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

// Looping through and adding event listeners to all number buttons on the calc.
const calcNumberButtons = document.querySelectorAll(".number");
for (let i = 0; i < calcNumberButtons.length; i++) {
  calcNumberButtons[i].addEventListener("click", (e) => {
    // Cause the primary display to reflect which number button is clicked.
    let calcNumberButton = e.target;
    let calcNumberButtonValue = calcNumberButton.textContent;
    let primaryDisplayValue = primaryDisplay.textContent;
    // Prevent '0s' being concatenated if it's the first button clicked.
    if (primaryDisplayValue === "0") {
      primaryDisplay.textContent = calcNumberButtonValue;
    } else {
      primaryDisplay.textContent += calcNumberButtonValue;
    }
  });
}
// Clear Button
clearButton.addEventListener("click", (e) => {
  primaryDisplay.textContent = "";
});
