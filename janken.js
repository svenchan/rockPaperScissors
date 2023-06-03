
 // Computers coice   
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

//
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

// Promise that checks for a click on element and sends back id. 

function waitForButtonClick (element) {
    return new Promise(resolve => {
        element.addEventListener("click", function handleClick() {
            //return element id
            resolve(element.id);
            //remove event listener
            element.removeEvenlistener("click", handleClick);
        });
    });
}

    //Start Game function
async function game() {
    let outcome;
    let counter = 0;
    var computerScore = 0;
    var playerScore = 0;

    //Score update
    var computerScoreElement = document.getElementById("computer-score");
    var playerScoreElement = document.getElementById("player-score");
    var outcomeNotification = document.getElementById("message-div");

    computerScoreElement.textContent = computerScore.toString();
    playerScoreElement.textContent = playerScore.toString();
    outcomeNotification.textContent = "";

    while (counter < 5){
        let playerSelection = "";
        let rock = document.getElementById("rock-btn");
        let paper = document.getElementById("paper-btn");
        let scissors = document.getElementById("scissors-btn");
        
        //waits till a button is clicked then takes it's Id as a value
        let clickedElementId = await Promise.race([
            waitForButtonClick(rock),
            waitForButtonClick(paper),
            waitForButtonClick(scissors)
        ]);

        if (clickedElementId === "rock-btn") {
            playerSelection = "rock";
        } else if (clickedElementId === "paper-btn") {
            playerSelection = "paper";
        } else if (clickedElementId === "scissors-btn") {
            playerSelection = "scissors";
        }

        
        //let playerSelection = prompt("Choose: Rock, paper or scissors").toLocaleLowerCase();
        let computerSelection = getComputerChoice();

        let outcome = playRound(playerSelection, computerSelection)
        console.log("Player: " + playerSelection);
        console.log("Computer:" + " " + computerSelection);
        console.log(outcome);
        outcomeNotification.textContent = outcome.toString;

        if (outcome.includes("win")){
        playerScore++;
        } else if (outcome.includes("lost")){
        computerScore++;
        }
        
        console.log("player score: " + playerScore);
        console.log("Computer score: " + computerScore);
        counter++;
        computerScoreElement.textContent = computerScore.toString();
        playerScoreElement.textContent = playerScore.toString();
        
        if (counter === 5){
            if (playerScore < computerScore){
                console.log("You lost. The computer is the winner")
            } else if (playerScore > computerScore) {
                console.log("You won! You beat the computer")
            } else if (playerScore === computerScore){
                console.log("This game is a draw")
            }
            
            //reStartGame();
        }
    }

}

/*function reStartGame() {
  let restart = prompt("Dou want to play another game?");
  let restartAnswer = restart.toLocaleLowerCase();
  if (restartAnswer === "yes"){
    counter = 0;
    playerScore = 0;
    computerScore = 0;
  } else if (restartAnswer === "no"){
    alert("Thank you for playing");
  }

}*/
//game();



