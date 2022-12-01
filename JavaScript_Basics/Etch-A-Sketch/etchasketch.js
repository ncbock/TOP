let size = 16
let currentMode = 'black'

//Grab the conatiner div in the body of the HTML
const container = document.querySelector('#container');

for (let i = 0; i < size * size; i++){
    const div = document.createElement('div');//Create a single div
    div.classList.add("grid-item") 
    //div.textContent = `I'm div ${i}`;
    container.appendChild(div);
}

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((gridItem) => {

    gridItem.addEventListener('mousedown', changeColor);
    gridItem.addEventListener('mouseover', changeColor);
    
});

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'random'){
        e.target.style['background-color'] = 'blue';
    } else {
    e.target.style['background-color'] = 'black';
    };
};

const clear = document.getElementById('clear');

clear.addEventListener('click', clearGrid);

function clearGrid(){
    gridItems.forEach((gridItem) => {
        gridItem.style['background-color'] = 'white';
        currentMode = 'black'
    })
}

const randomColor = document.getElementById('random');
randomColor.addEventListener('click', setMode);

function setMode(e){
    currentMode = e.target.id;
}