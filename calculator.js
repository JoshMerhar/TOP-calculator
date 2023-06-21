let firstNumber;
let operation;
let secondNumber;
let display = document.querySelector(".display-text"); 

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "darkgray";
}));

buttons.forEach(button => button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "";
}));

const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach(numberButton => numberButton.addEventListener("click", () => {
    if (display.textContent.length < 15) {
        if (display.textContent === "0") {
            display.textContent = `${numberButton.textContent}`;
        } else {
            display.textContent += `${numberButton.textContent}`;
        }
    }
}));

const decimalButton = document.querySelector("#decimal");
let clicked = false;
decimalButton.addEventListener("click", () => {
    if (!clicked) {
        display.textContent += ".";
        clicked = true;
    }
})

function operate(firstNumber, operation, secondNumber) {
    const equation = firstNumber + operation + secondNumber;
}