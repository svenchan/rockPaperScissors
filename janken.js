function getComputerChoice() {
const options = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * options.length);
return options[randomIndex];
}

function playRound(playerSelection, Computerselection) {
    let outcome;
    if(playerSelection === "rock" && computerSelection === "scissors"){
         outcome = "You win! Rock beats scissors";
    } else if(playerSelection === "paper" && computerSelection === "rock"){
        outcome = "You win! Paper beats rock";
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
        outcome = "You win! Scissors beats paper";
    } else {
        outcome = "You lost!"
    }
       return outcome;
    } 

let playersChoice = "RocK";
let playerSelection = playersChoice.toLowerCase();
let computerSelection = getComputerChoice();
console.log("Player:" + " " + playerSelection);
console.log("Computer:" + " " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
