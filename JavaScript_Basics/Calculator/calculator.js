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
