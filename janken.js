function getComputerChoice() {
const options = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * options.length);
return options[randomIndex];
}

function playRound(playerSelection, Computerselection) {
    if(playerSelection === "rock" && computerSelection === "scissors"){
         outcome = "You win! Rock beats scissors";
    } else {
            outcome = "code is false";
         }
         return outcome;
    } 

let playerSelection = "rock";
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
