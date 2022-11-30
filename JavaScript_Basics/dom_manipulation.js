const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//Create a new paragraph element 
const para = document.createElement("p");

//Add the color red to the new paragraph element
para.style.color = 'red';

//Add text to the paragraph element
para.textContent = "Hey I'm red!"

//Append the child paragraph element to the container parent
container.appendChild(para);

//Create h3 element
const h_3 = document.createElement('h3');

//add style to h3
h_3.style.color = 'blue';

//add text to h3
h_3.textContent = "I'm a blue h3!"

//append h3
container.appendChild(h_3);

//Create a <div> with a black border and pink background that contains an <h1> and a <p>
const myNewDiv = document.createElement('div');

//create <h1> and <p>
const myNewHeading = document.createElement('h1');
const myNewPara = document.createElement('p');

// Add Style to the new div
myNewDiv.style.cssText = 'background: pink; border-style: solid'

//Add text to h1 and p
myNewHeading.textContent = "I'm in a div!"
myNewPara.textContent = "ME TOO!"

//Append child elements to new div;
myNewDiv.appendChild(myNewHeading);
myNewDiv.appendChild(myNewPara);

//Append the Div to the container
container.appendChild(myNewDiv);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});



