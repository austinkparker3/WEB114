// =====================================
// Name and Date: Austin Parker.05092026
// JS File for Calculator Final Project
// =====================================


// ==========================
// STEP 1: SELECT ELEMENTS
// ==========================

const num1Input = document.querySelector("#num1");
const num2Input = document.querySelector("#num2");
const addBtn = document.querySelector("#addBtn");
const subtractBtn = document.querySelector("#subtractBtn");
const multiplyBtn = document.querySelector("#multiplyBtn");
const divideBtn = document.querySelector("#divideBtn");
const clearBtn = document.querySelector("#clearBtn");
const resultDisplay = document.querySelector("#result");
const feedbackDisplay = document.querySelector("#feedback");
const dateDisplay = document.querySelector("#dateDisplay");


// ==========================
// STEP 2: Custom Calculator Function
// ==========================

function calculate(operation) {
    let number1 = parseFloat(num1Input.value);
    let number2 = parseFloat(num2Input.value);
    let answer = 0;

    if (isNaN(number1) || isNaN(number2)) {
        resultDisplay.textContent = "Please enter two numbers.";
        return; /* This returns the operator back to correct the non-number variable */
    }

    if (operation === "add") {
        answer = number1 + number2;
    } else if (operation === "subtract") {
        answer = number1 - number2;
    } else if (operation === "multiply") {
        answer = number1 * number2;
    } else if (operation === "divide") {
        if (number2 === 0) {
            resultDisplay.textContent = "You cannot divide by zero."; /* This is an example of how to be helpful 
            in a resultDisplay that returns the user back for rework. */
            return;
        }
    
        answer = number1 / number2;
    
    }
    
    resultDisplay.textContent = "Result: " + answer.toFixed(2);
};

// ==========================
// STEP 3: ADDING EVENT LISTENERS - THESE LISTEN FOR CLICKS TO PERFORM THE INDICATED MATHEMATICS
// ==========================
    
    addBtn.addEventListener("click", function () {
        calculate("add");
    }); /* This is one click */

    subtractBtn.addEventListener("click", function () {
        calculate("subtract");
    });

    multiplyBtn.addEventListener("click", function () {
        calculate("multiply");
    });

    divideBtn.addEventListener("click", function () {
        calculate("divide");
    });

// ==========================
// STEP 4: ADDING A CLEAR BUTTON FUNCTION
// ==========================

    clearBtn.addEventListener("click", function () {
        num1Input.value = "";
        num2Input.value = "";
        resultDisplay.textContent = "Result will appear here.";
        feedbackDisplay.textContent = "Calculator cleared.";
    });

// ==========================
// STEP 5: ADDING A DATE AND MATH
// ==========================

const today = new Date();
dateDisplay.textContent = "Today is: " + today.toLocaleDateString();

let luckyNumber = Math.floor(Math.random() * 10) + 1;
feedbackDisplay.textContent = "Your lucky number is " + luckyNumber + "."; 
