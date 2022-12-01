let defaultSize = 16
let currentMode = 'black'

//Grab the conatiner div in the body of the HTML
const container = document.querySelector('#container');

//Create Global Grid Items Variable


function createGrid(size){
    for (let i = 0; i < size * size; i++){
        const div = document.createElement('div');//Create a single div
        div.classList.add("grid-item") 
        container.appendChild(div);
    }
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem) => {
    gridItem.addEventListener('mousedown', changeColor);
    gridItem.addEventListener('mouseover', changeColor);
    });
};

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'random'){
        const randomR = randomColorValue()
        const randomG = randomColorValue()
        const randomB = randomColorValue()
        e.target.style['background-color'] = `rgb(${randomR},${randomG},${randomB})`;
    } else {
    e.target.style['background-color'] = 'black';
    };
};

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', setMode)
})

//Add event listener for the Clear button
const clear = document.getElementById('clear');
clear.addEventListener('click', clearGrid);

//Add event listener for the Size button
const sizeButton = document.getElementById('size');
sizeButton.addEventListener('click', () => {
    changeSize();
    clearGrid();
    createGrid(defaultSize);
});

//Clears the Grid
function clearGrid(){
    gridItems.forEach((gridItem) => {
        gridItem.style['background-color'] = 'white';
        currentMode = 'black'
    })
}

//Sets the current mode
function setMode(e){
    if(e.target.id === 'random'){
        currentMode = e.target.id;
    }else{
        currentMode = 'black'
    }
}

//Creates random RGB value between 1 and 256
function randomColorValue (){
    return Math.floor(Math.random() * 256)
};

function changeSize(){
    defaultSize = prompt('How big would you like the Grid?');
}

window.onload = () => {
    createGrid(defaultSize);
}