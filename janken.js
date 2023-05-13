function getComputerChoice() {
const options = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * options.length);
return options[randomIndex];
}

let computerScore = 0;
let playerScore = 0;
let counter = 0;
let outcome;


function playRound(playerSelection, computerSelection) {
        
    

        if(playerSelection === "rock" && computerSelection === "scissors"){
            return "You win! Rock beats scissors";
        } else if(playerSelection === "paper" && computerSelection === "rock"){
            return "You win! Paper beats rock";
        } else if(playerSelection === "scissors" && computerSelection === "paper"){
            return "You win! Scissors beats paper";
        } else if (playerSelection === "scissors" && computerSelection === "scissors") { 
            return "A draw. Play again";
          } else if (playerSelection === "rock" && computerSelection === "rock") {
            return "A draw. Play again";
          } else if (playerSelection === "paper" && computerSelection === "paper") {
            return "A draw. Play again";
          } else {
            return "You lost!";
          }
}

function game() {
    while (counter < 5){
        let playersChoice = prompt("Choose: Rock, paper or scissors");
let playerSelection = playersChoice.toLowerCase();
let computerSelection = getComputerChoice();

        outcome = playRound(playerSelection, computerSelection);
        console.log("Player: " + playerSelection);
        console.log("Computer:" + " " + computerSelection);
        console.log(outcome);

        if (outcome.includes("win")){
        playerScore++;
        } else if (outcome.includes("lost")){
        computerScore++;
        } else if (outcome.includes("draw")){

        }
        
        console.log("player score: " + playerScore);
        console.log("Computer score: " + computerScore);
        counter++;
    }

}

game();


