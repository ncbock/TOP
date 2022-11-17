function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let compChoice = Math.floor(Math.random()*3);
    return choices[compChoice];
}

function capitalize (str) {
    return str.charAt(0).toUpperCase()  + str.slice(1).toLowerCase();
}

function playRound(playerSelecton, computerSelection) {
    if (playerSelecton.toLowerCase() === computerSelection) {
        return [null, `You both select ${capitalize(playerSelection)}, pick again!`];
    } else if ((playerSelecton.toLowerCase() === "rock" && computerSelection === "scissors") ||
              (playerSelecton.toLowerCase()=== "paper" && computerSelection === "rock") ||
              (playerSelecton.toLowerCase() === "scissors" && computerSelection === "paper"))
    {
        return [true, `You win! ${capitalize(playerSelecton)} beats ${capitalize(computerSelection)}`];
    } else {
        return [false, `You lose... ${capitalize(computerSelection)} beats ${capitalize(playerSelecton)}`];
    }
}

function playGame() {
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
}