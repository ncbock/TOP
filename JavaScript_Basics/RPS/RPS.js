function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let compChoice = Math.floor(Math.random()*3);
    return choices[compChoice];
}

function capitalize (str) {
    return str.charAt(0).toUpperCase()  + str.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return [null, `You both select ${capitalize(playerSelection)}, pick again!`];
    } else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
              (playerSelection.toLowerCase()=== "paper" && computerSelection === "rock") ||
              (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"))
    {
        return [true, `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`];
    } else {
        return [false, `You lose... ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`];
    }
}

//Create variables for your score and the computer score
let yourScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');

//grab the container div created
const container = document.querySelector('#container')

//Create elements for displaying round winner and current scores. These elements are contained in a Div.
const div = document.createElement('div');
//const thisRoundsResults = document.createElement('p');
// const scores = document.createElement('p');

//Create varible to contain text to start the game.
const startGame = 'Choose Rock, Paper, or Scissors to start the game.'
const thisRoundsResults = document.createElement('p');
thisRoundsResults.textContent = startGame;

//Create and append Element for displaying the score
const scores = document.createElement('p');
//scores.textContent = `Your Score: ${yourScore}     Computer's Score: ${computerScore}`

//Append the round results to the Parent Div.
div.appendChild(thisRoundsResults);
div.appendChild(scores);
container.appendChild(div);



//use the .forEach method to iterate through each button.
buttons.forEach((button) => {

    //add event listener for each button
    button.addEventListener('click', () => {
        let computersChoice = getComputerChoice();
        let thisRound = playRound(button.id, computersChoice);
        //Update text for this rounds results
        thisRoundsResults.textContent = thisRound[1];
        //Check if their was a round winner
        if (thisRound[0] !== null){
            if (thisRound[0]){
                yourScore++;
            }
            else {
                computerScore++;
            }
        }
        scores.textContent = `Your Score: ${yourScore}     Computer's Score: ${computerScore}`
        if (yourScore === 5 || computerScore === 5) {
            if (yourScore === 5) {
                scores.textContent = `You won the Game! You beat the computer ${yourScore} - ${computerScore}`
            } else {
                scores.textContent = `Oh no, you lost! The computer won ${computerScore} - ${yourScore}`
            }
            thisRoundsResults.textContent = startGame;
            yourScore = 0;
            computerScore =0;
        }
      });
});





/* function playGame() {
    let yourScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Pick: Rock, Paper, or Scissors.");
        computerSelection = getComputerChoice();
        let roundResults = playRound(playerSelection, computerSelection);
        if (roundResults[0] !== null) {
            if (roundResults[0]){
                yourScore++;
            }
            else {
                computerScore++;
            }
        }
        else {
            i--;
        }
        console.log(roundResults[1]);
        console.log(`Your Score: ${yourScore}     Computer's Score: ${computerScore}`)
    }
} */