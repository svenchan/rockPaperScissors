
 // Computers choice   
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}


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
            element.removeEventListener("click", handleClick);
        });
    });
}

    //Start Game function
async function game() {
    let counter = 0;
    var computerScore = 0;
    var playerScore = 0;

    //Score update
    var computerScoreElement = document.getElementById("computer-score");
    var playerScoreElement = document.getElementById("player-score");
    computerScoreElement.textContent = computerScore.toString();
    playerScoreElement.textContent = playerScore.toString();
    
    while (counter < 5){
        let playerSelection = "";

        var buttons = document.querySelectorAll(".player-buttons");

        function handleClick(event){
            //targets button that trigered the event
            var clickedButton = event.target;

            //removes class from all buttons
            buttons.forEach(function(button){
                button.classList.remove("button-clicked");
            })
            //Ads class to clicked button
            clickedButton.classList.add("button-clicked");
        }

        buttons.forEach(function(button){
            button.addEventListener("click", handleClick)
        });

        let rock = document.getElementById("rock-btn");
        let paper = document.getElementById("paper-btn");
        let scissors = document.getElementById("scissors-btn");
       
        
        // Player input

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

        
        let computerSelection = getComputerChoice();
        let outcome = playRound(playerSelection, computerSelection);
        var outcomeNotification = document.getElementById("message-div");
        outcomeNotification.textContent = outcome;

        // Score update
        if (outcome.includes("win")){
        playerScore++;
        } else if (outcome.includes("lost")){
        computerScore++;
        }
        counter++;
        computerScoreElement.textContent = computerScore.toString();
        playerScoreElement.textContent = playerScore.toString();
        
        if (counter === 5){
            var popUpContainer = document.getElementById("pop-up-container");
            popUpContainer.style.display = "flex";

            var closeButton = document.getElementById("close-pop-up");
            var popUpContent = document.getElementById("pop-up-content");
            
            closeButton.addEventListener("click", function() {
                popUpContainer.style.display = "none";
            });

            if (playerScore < computerScore){
                popUpContent.textContent = "You lost. The computer is the winner";
            } else if (playerScore > computerScore) {
                popUpContent.textContent = "You won! You beat the computer";
            } else if (playerScore === computerScore){
                popUpContent.textContent = "This game is a draw";
            }
        }
    }
}



