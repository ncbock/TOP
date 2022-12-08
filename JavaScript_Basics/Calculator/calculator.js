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
    if (b === 0){
        return alert("You can't divide by 0!");
    }
    return a / b;
}

function procedures (str) {
    if (str === "+") {
        return addition;
    };
    if(str === "-"){
        return subtraction;
    };
    if(str ==="x"){
        return multiply;
    };
    if(str === "/"){
        return divide;
    };
}
// Set inital Display to 0
const display = document.getElementById('input');
display.textContent = "0";

// set a and b initial to zero and no procedure by default
let firstOperand;
let secondOperand;
let procedure;
let decimal = false;


//Get all the number buttons 
const numbers = document.querySelectorAll('.number');

//Update the display when a number is pressed
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        if (display.textContent === "0"){
            display.textContent = "";
        }
        if (decimal && e.target.textContent === "."){
            return
        }
        if(e.target.textContent === "."){
            decimal = true
        }
        if (!operand && firstOperand !== 0){
            clearButtonPressed();
            display.textContent = "";
        }
        display.textContent += number.textContent
    });
});



//Get the Clear button
const clear = document.getElementById('clear');

//Clear the display when Clear button Clicked
clear.addEventListener('click', clearButtonPressed);

function clearButtonPressed(){
    display.textContent="0"
    firstOperand = 0;
    secondOperand = 0;
    procedure=""
}


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
        if (!operand){
            firstOperand = Number(display.textContent);
        } 
        else {
            performCalculations();
        };
        operand = true;
        decimal = false;
        procedure = e.target.textContent;
        display.textContent += ` ${e.target.textContent} `;
    });
});

//Get the equal Button
const equalButton = document.getElementById('equal');

//add event listener for equal button
equalButton.addEventListener('click', performCalculations);

function performCalculations(){
     //get the index were the secondnumber starts
     const startLocation = display.textContent.lastIndexOf(" ") + 1;
     //Set the second operand
     secondOperand = Number(display.textContent.slice(startLocation));
     let results = procedures(procedure);
     display.textContent = String(results(firstOperand,secondOperand));
     firstOperand = Number(display.textContent);
     operand = false;
};