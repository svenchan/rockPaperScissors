function getComputerChoice() {
const options = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * options.length);
return options[randomIndex];
}

let computerScore = 0;
let playerScore = 0;

function game() {

    let roundResult;
    let counter = 0;

    while (counter < 5) {
    function playRound(playerSelection, computerSelection) {
        let outcome;
        if(playerSelection === "rock" && computerSelection === "scissors"){
            outcome = "You win! Rock beats scissors";
        } else if(playerSelection === "paper" && computerSelection === "rock"){
            outcome = "You win! Paper beats rock";
        } else if(playerSelection === "scissors" && computerSelection === "paper"){
            outcome = "You win! Scissors beats paper";
        }else if(playerSelection === "scissors" && computerSelection === "scissors"){
                outcome = "A draw. Play again";
        }else if(playerSelection === "rock" && computerSelection === "rock"){
                outcome = "A draw. Play again";
        }else if(playerSelection === "paper" && computerSelection === "paper"){
                outcome = "A draw. Play again";
        } else {
            outcome = "You lost!"
        }
        return outcome;
        } 

    let playersChoice = prompt("Choose: Rock, paper or scissors");
    let playerSelection = playersChoice.toLowerCase();
    let computerSelection = getComputerChoice();


    roundResult = playRound(playerSelection, computerSelection);
    console.log("Player: " + playerSelection);
    console.log("Computer:" + " " + computerSelection);
    console.log(roundResult);
 
    if (/win/.test(roundResult)){
	playerScore++;
	} else if (/lost/.test(roundResult)){
	computerScore++;
	}
    console.log("player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    counter++; 

    }

}

game();

console.log("GAME OVER");
console.log("player score: " + playerScore);
console.log("Computer score: " + computerScore);

if (playerScore > computerScore){
    console.log("The winner is PLAYER");
    } else if (playerScore < computerScore){
    console.log("The winner is COMPUTER");
    } else {
    console.log("It's a draw");
    }

let playAgain = confirm("Do you want to play another game?");

if (playAgain){
    playerScore = 0;
    computerScore = 0;
    game();
    } else {
    alert("Thank you for playing");
    }  





/* Things to add

- a prompt to start a new game. */
