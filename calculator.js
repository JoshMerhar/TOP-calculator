let firstNumber = "";
let operation = "";
let secondNumber = "";
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
    if (display.textContent.length < 15 && operation === "") {
        if (display.textContent === "0") {
            display.textContent = `${numberButton.textContent}`;
            firstNumber = `${numberButton.textContent}`;
        } else {
            display.textContent += `${numberButton.textContent}`;
            firstNumber += `${numberButton.textContent}`;
        }
    }
    if (display.textContent.length < 15 && operation !== "") {
        if (display.textContent === firstNumber || secondNumber === "0" || secondNumber === "") {
            display.textContent = `${numberButton.textContent}`;
            secondNumber = `${numberButton.textContent}`;
        } else {
            display.textContent += `${numberButton.textContent}`;
            secondNumber += `${numberButton.textContent}`;
        }
    }
}));

const decimalButton = document.querySelector("#decimal");
let decimalClicked = false;
decimalButton.addEventListener("click", () => {
    if (!decimalClicked && secondNumber === "") {
        display.textContent += ".";
        firstNumber += ".";
        decimalClicked = true;
    } else if (!decimalClicked && operation !== "") {
        display.textContent += ".";
        secondNumber += ".";
        decimalClicked = true;
    }
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    display.textContent = "0";
    firstNumber = "";
    secondNumber = "";
    operation = "";
    decimalClicked = false;
    addClicked = false;
});

const addition = document.querySelector("#add");
let addClicked = false;
addition.addEventListener("click", () => {
    if (!addClicked) {
        operation = "+";
        addClicked = true;
    }
    decimalClicked = false;
});

const solve = document.querySelector("#solve");
solve.addEventListener("click", operate);

let result;
function operate() {
    if (operation === "+") {
        let subResult = ((+firstNumber * 10) + (+secondNumber * 10));
        result = subResult / 10;
        addClicked = false;
    } else {
        return;
    }
    display.textContent = result;
    firstNumber = result;
    secondNumber = "";
    operation = "";
}
