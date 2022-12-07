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

const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
    number.addEventListener('click', beenClicked);
});

function beenClicked() {
    console.log("ive been clicked")
}