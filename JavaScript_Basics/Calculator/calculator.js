function addition (a,b) {
    return a + b;
}

function subtraction (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

// Set inital Display to 0
const display = document.getElementById('display');
display.textContent = "0";




//Get all the number buttons 
const numbers = document.querySelectorAll('.number');

//Update the display when a number is pressed
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        if (display.textContent === "0"){
            display.textContent = ""
        }
        if (display.textContent.includes(".") && e.target.textContent === "."){
            return
        }
        display.textContent += number.textContent
    });
});


//Get the Clear button
const clear = document.getElementById('clear');

//Clear the display when Clear button Clicked
clear.addEventListener('click', () => display.textContent="0")


//Get the Delete button
const deleteButton = document.getElementById('delete');

//Delete the last input number from the display
deleteButton.addEventListener('click', () => display.textContent = display.textContent.slice(0,-1));


//Set Operand inital to false, because we don't have one yet.
let operand = false;

//Get all the Operator buttons
const operators = document.querySelectorAll('.operator');

//Add event listeners to all the operators.
operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        //const firstOperand = Number(display.textContent);
        display.textContent += ` ${e.target.textContent} `
        operand = true;
    })
})