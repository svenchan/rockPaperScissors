function getComputerChoice() {
const options = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * options.length);
return options[randomIndex];
}

let roundResult;

function game() {
    let counter = 0;
    while (counter < 5) {
    function playRound(playerSelection, computerselection) {
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
    
    let playersChoice = prompt("Choose: Rock, paper or scissors");
    let playerSelection = playersChoice.toLowerCase();
    let computerSelection = getComputerChoice();

    let roundResult = playRound(playerSelection, computerSelection);
    console.log("Player: " + playerSelection);
    console.log("Computer:" + " " + computerSelection);
    console.log(roundResult);
    counter = counter += 1; 
    }
}

game();
console.log("Player:" + " " + playerSelection);
console.log("Computer:" + " " + computerSelection);
console.log(roundResult);


/* Things to add
- a way of keeping the score of rounds won and lost. 
    change the outcome tosomthing that is counatble??
- a final score anouncement.
- a prompt to start a new game. */
