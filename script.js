let firstNumber;
let secondNumber;
let displayContent = "";
let result = 0;
let operatorPresent = false;
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
        if (operatorPresent == false) {
            displayContent += operator.value;
            updateDisplay();
            operatorPresent = true;
        } else {
            resolve(); 
            if (operatorPresent == false) {
                displayContent += operator.value;
                operatorPresent = true;
            }
            updateDisplay();
        }
    });
});

clearButton.addEventListener(('click'), () => {
    clear();
});

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(a, b, operation) {
    switch (operation) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            if (b != 0) {
                result = divide(a, b);
            } else {
                alert("Nice try buddy. Don't divide by zero.")
                clear();
            }
            break;
    }
}

function updateDisplay() {
    display.textContent = displayContent;
}

function clear() {
    firstNumber = 0;
    secondNumber = 0;
    displayContent = "";
    operatorPresent = false;
    result = 0;
    updateDisplay();
}

function resolve() {
    if (operatorPresent == true) {
        let equationArray = displayContent.split(' ');
        console.log(equationArray);
        if (equationArray.length > 2 && equationArray[2] != '') {
            firstNumber = parseFloat(equationArray[0]);
            console.log(firstNumber);
            secondNumber = parseFloat(equationArray[2]);
            console.log(secondNumber);
            operate(firstNumber, secondNumber, equationArray[1]);
            console.log(result);
            displayContent = result;
            operatorPresent = false;
            updateDisplay();
        } else {
            alert("You need 2 numbers and an operator for this to work!");
        }
    } else {
        alert("You need 2 numbers and an operator for this to work!");
    }
}