
 // Computers choice   
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

    let computerChoice = getComputerChoice();
    let computerChoiceDisplay = document.getElementById("computer-choice");

function playRound(playerSelection, computerSelection) {
    
    if(playerSelection === "rock" && computerSelection === "scissors"){
        computerChoiceDisplay.src = "../images/scissors.png";
        return "You win! Rock beats scissors";
    } else if(playerSelection === "paper" && computerSelection === "rock"){
        computerChoiceDisplay.src = "../images/rock1.png";
        return "You win! Paper beats rock";
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
        computerChoiceDisplay.src = "../images/paper1.png";
        return "You win! Scissors beats paper";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") { 
        computerChoiceDisplay.src = "../images/scissors.png";
        return "A draw. Play again";
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        computerChoiceDisplay.src = "../images/rock1.png";
        return "A draw. Play again";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        computerChoiceDisplay.src = "../images/paper1.png";
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

var startBtn = document.getElementById("start-game-btn");
var startSound = document.getElementById("bell-sound");

startBtn.addEventListener("click", function() {
    startSound.play();
});

let rockBtn = document.getElementById("rock-btn");
let rockSound = document.getElementById("rock-sound");
rockBtn.addEventListener("click", function() {
    rockSound.play();
});

let paperBtn = document.getElementById("paper-btn");
let paperSound = document.getElementById("paper-sound");
paperBtn.addEventListener("click", function() {
    paperSound.play();
});

let scissorsBtn = document.getElementById("scissors-btn");
let scissorsSound = document.getElementById("scissors-sound");
scissorsBtn.addEventListener("click", function() {
    scissorsSound.play();
});


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

            let popUpImg = document.getElementById("pop-up-img");
            if (playerScore < computerScore){
                popUpImg.src = "../images/computerWin2.jpg"
                popUpContent.textContent = "You lost. The computer is the winner";
            } else if (playerScore > computerScore) {
                popUpContent.textContent = "You won! You beat the computer";
                popUpImg.src = "../images/playerWin2.jpg"
            } else if (playerScore === computerScore){
                popUpContent.textContent = "This game is a draw";
                popUpImg.src = "../images/draw.jpg"
            }
        }
    }
}



