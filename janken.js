function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

let computerScore = 0;
let playerScore = 0;



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
    var computerScoreElement = document.getElementById("computerScore");
    computerScoreElement.textContent = computerScore.toString();

    var playerScoreElement = document.getElementById("playerScore");
    playerScoreElement.textContent = playerScore.toString();
    let outcome;
    let counter = 0;

    while (counter < 5){
        let playerSelection = prompt("Choose: Rock, paper or scissors").toLocaleLowerCase();
        let computerSelection = getComputerChoice();

        let outcome = playRound(playerSelection, computerSelection)
        console.log("Player: " + playerSelection);
        console.log("Computer:" + " " + computerSelection);
        console.log(outcome);

        if (outcome.includes("win")){
        playerScore++;
        } else if (outcome.includes("lost")){
        computerScore++;
        }
        
        console.log("player score: " + playerScore);
        console.log("Computer score: " + computerScore);
        counter++;

        if (counter === 5){
            if (playerScore < computerScore){
                console.log("You lost. The computer is the winner")
            } else if (playerScore > computerScore) {
                console.log("You won! You beat the computer")
            } else if (playerScore === computerScore){
                console.log("This game is a draw")
            }
            
            reStartGame();
        }
    }

}

function reStartGame() {
  let restart = prompt("Dou want to play another game?");
  let restartAnswer = restart.toLocaleLowerCase();
  if (restartAnswer === "yes"){
    counter = 0;
    playerScore = 0;
    computerScore = 0;
  } else if (restartAnswer === "no"){
    alert("Thank you for playing");
  }

}
game();


