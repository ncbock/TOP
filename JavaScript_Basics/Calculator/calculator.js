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
//tracking for when a decimal is placed in a number
let decimal = false;


//Get all the number buttons 
const numbers = document.querySelectorAll('.number');

//Update the display when a number is pressed
numbers.forEach((number) => {
    number.addEventListener('click', numbersPressed);
});

function numbersPressed(e){
    if (display.textContent === "0"){
        display.textContent = "";
    }
    if (decimal && (e.target.textContent === "." || e.key === ".")){
        return
    }
    if(e.target.textContent === "." || e.key === "."){
        decimal = true
    }
    //If we got a result previously and then a new number is pressed
    //The screen should clear and then we start with the new number
    //instead of chaining together things
    if (!operator && firstOperand !== 0){
        clearButtonPressed();
        display.textContent = "";
    }
    console.log(e)
    if (e.type === "click"){
        display.textContent += e.target.textContent;
    } else {
        display.textContent += e.key;
    }
}



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
deleteButton.addEventListener('click', backSpace);

function backSpace (){
    if (display.textContent.length === 1){
        display.textContent = "0"
    } else {
        display.textContent = display.textContent.slice(0,-1)
    };
};



//Set Operand inital to false, because we don't have one yet.
let operator = false;

//Get all the Operator buttons
const operators = document.querySelectorAll('.operator');

//Add event listeners to all the operators.
operators.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (!operator){
            firstOperand = Number(display.textContent);
        } 
        else {
            // There will be a second operand if there is something after the second space
            // Added by inserting the operator. If there is a second operand perform 
            // the calculations.
            performCalculations();
        };
        operator = true;
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
     secondOperand = display.textContent.slice(startLocation);

     //This function can get called when switching operators. We need to check to see if the
     //Second operand has been entered. We do this by checking the length of the second
     //Operand. If length is > 0 then we set it (to a number).
     if(secondOperand.length > 0){
        secondOperand = Number(secondOperand);
     } else{
        //If it is not > 0 then we reset the screen to be just the first operand. The operator
        //Will then update to the new operator in the "operators" event function.
        //We return at this point and don't perform the calculations yet untill we have 
        //Both operands.
        display.textContent = String(firstOperand);
        return  
     };
     let results = procedures(procedure);
     display.textContent = String(results(firstOperand,secondOperand));
     firstOperand = Number(display.textContent);
     operator = false;
};


document.addEventListener('keydown', (e) => {
    if (Number(e.key) >= 0 && Number(e.key) <= 9 ){
        numbersPressed(e)
    };
    if (e.key === "Backspace"){
        backSpace();
    }
    console.log(e);
})