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
    if (!addClicked && firstNumber && secondNumber) {
        operate(firstNumber, secondNumber);
        operation = "+";
    } else if (!addClicked) {
        operation = "+";
        addClicked = true;
    } else if (addClicked && firstNumber && secondNumber) {
        operate(firstNumber, secondNumber);
        operation = "+";
    } 
    decimalClicked = false;
});

const subtract = document.querySelector("#subtract");
let subtractClicked = false;
subtract.addEventListener("click", () => {
    if (!subtractClicked && firstNumber && secondNumber) {
        operate(firstNumber, secondNumber);
        operation = "-";
    } else if (!subtractClicked) {
        operation = "-";
        subtractClicked = true;
    } else if (subtractClicked && firstNumber && secondNumber) {
        operate(firstNumber, secondNumber);
        operation = "-";
    } 
    decimalClicked = false;
});

const multiply = document.querySelector("#multiply");
let multiplyClicked = false;
multiply.addEventListener("click", () => {
    if (!multiplyClicked && firstNumber && secondNumber) {
        operate(firstNumber, secondNumber);
        operation = "*";
    } else if (!multiplyClicked) {
        operation = "*";
        multiplyClicked = true;
    } else if (multiplyClicked && firstNumber && secondNumber) {
        operate(firstNumber, secondNumber);
        operation = "*";
    }
    decimalClicked = false;
});

const divide = document.querySelector("#divide");
let divideClicked = false;
divide.addEventListener("click", () => {
    if (!divideClicked && firstNumber && secondNumber) {
        operate(firstNumber, secondNumber);
        operation = "/";
    } else if (!divideClicked) {
        operation = "/";
        divideClicked = true;
    } else if (divideClicked && firstNumber && secondNumber) {
        operate(firstNumber, secondNumber);
        operation = "/";
    } 
    decimalClicked = false;
});

const exponent = document.querySelector("#exponent");
let exponentClicked = false;
exponent.addEventListener("click", () => {
    if (!exponentClicked && firstNumber && secondNumber) {
        operate(firstNumber, secondNumber);
        operation = "^";
    } else if (!exponentClicked) {
        operation = "^";
        exponentClicked = true;
    } else if (exponentClicked && firstNumber && secondNumber) {
        operate(firstNumber, secondNumber);
        operation = "^";
    }
    decimalClicked = false;
});

const square = document.querySelector("#sqrt");
square.addEventListener("click", () => {
    result = Math.sqrt(+firstNumber);
    display.textContent = result;
    firstNumber = result;
});

const signButton = document.querySelector("#sign");
let signClicked = false;
signButton.addEventListener("click", () => {
    if (!signClicked && secondNumber === "") {
        firstNumber = "-" + firstNumber;
        display.textContent = firstNumber;
        signClicked = true;
    } else if (!signClicked && secondNumber !== "") {
        secondNumber = "-" + secondNumber;
        display.textContent = secondNumber;
        signClicked = true;
    } else if (signClicked && secondNumber === "") {
        firstNumber = firstNumber.slice(1);
        display.textContent = firstNumber;
        signClicked = false;
    } else if (signClicked && secondNumber !== "") {
        secondNumber = secondNumber.slice(1);
        display.textContent = secondNumber;
        signClicked = false;
    }
});

const percent = document.querySelector("#percent");
percent.addEventListener("click", () => {
    display.textContent = (+display.textContent / 100);
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clear);

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
        if (secondNumber === "0") {
            clear;
            return alert("You know what you've done...");
        }
        result = (((+firstNumber) / (+secondNumber)) * 10) / 10;
        divideClicked = false;
    } else if (operation === "^") {
        result = (((+firstNumber) ** (+secondNumber)) * 10) / 10;
        exponentClicked = false;
    } else {
        return;
    }
    display.textContent = result;
    firstNumber = result;
    operation = "";
    secondNumber = "";
    signClicked = false;
    return result;
}

function clear() {
    display.textContent = "0";
    firstNumber = "";
    secondNumber = "";
    operation = "";
    decimalClicked = false;
    signClicked = false;
    addClicked = false;
    subtractClicked = false;
}
