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
    if (!decimalClicked && operation !== "" && secondNumber === "") {
        display.textContent = ".";
        secondNumber = ".";
        decimalClicked = true;
    } else if (!decimalClicked && secondNumber === "") {
        display.textContent += ".";
        firstNumber += ".";
        decimalClicked = true;
    } else if (!decimalClicked && operation !== "") {
        display.textContent += ".";
        secondNumber += ".";
        decimalClicked = true;
    } 
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

const subtract = document.querySelector("#subtract");
let subtractClicked = false;
subtract.addEventListener("click", () => {
    if (!subtractClicked) {
        operation = "-";
        subtractClicked = true;
    }
    decimalClicked = false;
});

const multiply = document.querySelector("#multiply");
let multiplyClicked = false;
multiply.addEventListener("click", () => {
    if (!multiplyClicked) {
        operation = "*";
        multiplyClicked = true;
    }
    decimalClicked = false;
});

const divide = document.querySelector("#divide");
let divideClicked = false;
divide.addEventListener("click", () => {
    if (!divideClicked) {
        operation = "/";
        divideClicked = true;
    }
    decimalClicked = false;
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    display.textContent = "0";
    firstNumber = "";
    secondNumber = "";
    operation = "";
    decimalClicked = false;
    addClicked = false;
    subtractClicked = false;
});

const solve = document.querySelector("#solve");
solve.addEventListener("click", operate);

let result;
function operate() {
    if (operation === "+") {
        result = ((+firstNumber * 10) + (+secondNumber * 10)) / 10;
        addClicked = false;
    } else if (operation === "-") {
        result = ((+firstNumber * 10) - (+secondNumber * 10)) / 10;
        subtractClicked = false;
    } else if (operation === "*") {
        result = (((+firstNumber) * (+secondNumber)) * 10) / 10;
        multiplyClicked = false;
    } else if (operation === "/") {
        result = (((+firstNumber) / (+secondNumber)) * 10) / 10;
        divideClicked = false;
    } else {
        return;
    }
    display.textContent = result;
    firstNumber = result;
    operation = "";
    secondNumber = "";
}
