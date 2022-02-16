let firstNumber;
let secondNumber;
let displayContent = "";
const display = document.querySelector('#calculationText');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');

digits.forEach((digit) => {
    digit.addEventListener(('click'), () => {
        displayContent += digit.value;
        updateDisplay();
    });
});

operators.forEach((operator) => {
    operator.addEventListener(('click'), () => {
        displayContent += operator.value;
        updateDisplay();
    });
});

clearButton.addEventListener(('click'), () => {
    clear();
});

function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}

function operate(a,b,operation) {
    switch(operation) {
        case 'add': 
            add(a,b);
            break;
        case 'subtract': 
            subtract(a,b);
            break;
        case 'multiply': 
            multiply(a,b);
            break;
        case 'divide': 
            divide(a,b);
            break;
    }
}

function updateDisplay() {
    display.textContent = displayContent;
}

function clear() {
    firstNumber = 0;
    secondNumber = 0;
    displayContent="";
    updateDisplay();
}