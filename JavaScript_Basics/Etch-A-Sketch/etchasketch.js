let defaultSize = 16
let currentMode = 'black'

//Grab the conatiner div in the body of the HTML
const container = document.getElementById('container');

//Function for creating the grid on load and when grid is resized
function createGrid(size){
    const grid = document.getElementById('container');
    grid.style.gridTemplateColumns = `repeat(${size},auto)`;
    grid.style.gridTemplateRows = `repeat(${size},auto)`;
    
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


//determine if the mouse is down or not. If mouse not down squares will not change color.
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//Change color of squares
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
    changeSize(); // get the size of new grid
    removeOldGridItems(); //remove old items created
    createGrid(defaultSize);//create new items with correct size
});


//Remove old divs when size is changed
function removeOldGridItems(){
    const items = document.getElementById("container");
    while(items.lastElementChild){
        items.removeChild(items.lastElementChild);
    }
}
//Clears the Grid
function clearGrid(){
    gridItems = document.querySelectorAll('.grid-item')
    gridItems.forEach((gridItem) => {
        gridItem.style['background-color'] = 'white';
        currentMode = 'black'
    })
}

//Sets the current mode
function setMode(e){
    if(e.target.id === 'random'){
        currentMode = e.target.id;
    }else if (e.target.id === 'black'){
        currentMode = e.target.id;
    }else {
        currentMode = currentMode;
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