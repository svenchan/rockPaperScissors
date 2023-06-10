
// sound effects
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


function updateOutcomeMessage(message) {
    const outcomeNotification = document.getElementById("message-div");
    outcomeNotification.textContent = message;
}

function updateScores(playerScore, computerScore){
    const computerScoreElement = document.getElementById("computer-score");
    const playerScoreElement = document.getElementById("player-score");
    computerScoreElement.textContent = computerScore.toString();
    playerScoreElement.textContent = playerScore.toString();
}
 
 function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function showEndGamePopUp(winner){
    const popUpContainer = document.getElementById("pop-up-container");
    const closeButton = document.getElementById("close-pop-up");
    const popUpContent = document.getElementById("pop-up-content");
    const popUpImg = document.getElementById("pop-up-img");

    popUpContainer.style.display = "flex";
    closeButton.addEventListener("click", function() {
        popUpContainer.style.display = "none";
    });

    if (winner === "computer") {
        popUpContent.textContent = "You lost. Computer is the winner.";
        popUpImg.src = "images/computerWin2.jpg";
    } else if (winner === "player") {
        popUpContent.textContent = "You won! You beat the Computer!";
        popUpImg.src = "images/playerWin2.jpg";
    } else {
        popUpContent.textContent = "This game is a draw!";
        popUpImg.src = "images/draw.jpg";
    }
}

//Listens for a click event and retrieves id of clicked element
function waitForButtonClick(element) {
    return new Promise(resolve => {
        element.addEventListener("click", function handleClick() {
            resolve(element.id);
        });
    });
}

function playRound(playerSelection, computerSelection) {
    const computerChoiceDisplay = document.getElementById("computer-choice");

    let message = "";
    let winner = 0;

    if (playerSelection === computerSelection) {
        message = "A draw. Play again";
    } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
    ){
        message = `You win! ${playerSelection} beats ${computerSelection}.`
        winner = "player";
    } else {
        message = "you lost!";
        winner = "computer"
    }

    computerChoiceDisplay.src = `images/${computerSelection}.png`;

    updateOutcomeMessage(message);

    return winner;
}

async function game() {
    let computerScore = 0;
    let playerScore = 0;

    updateScores(playerScore, computerScore);

    for (let counter = 0; counter < 5; counter++) {
        playerSelection = "";

        const buttons = document.querySelectorAll(".player-buttons");
        buttons.forEach(function (button) {
            button.addEventListener("click", function handleClick(event) {
                buttons.forEach(function (button) {
                    button.classList.remove("button-clicked");
                });
                button.classList.add("button-clicked");
                playerSelection = button.id.replace("-btn", "");
            });
        });

        //waits for first button clicked and sends back the id
        await Promise.race([
            waitForButtonClick(document.getElementById("rock-btn")),
            waitForButtonClick(document.getElementById("paper-btn")),
            waitForButtonClick(document.getElementById("scissors-btn")),
        ]);

        const computerSelection = getComputerChoice();
        const winner = playRound(playerSelection, computerSelection);

        if (winner === "player") {
            playerScore++;
        } else if (winner === "computer") {
            computerScore++;
        }

        updateScores(playerScore, computerScore);
        
        if (counter === 4) {
            showEndGamePopUp(playerScore > computerScore ? "player" : "computer");
        }
    }

}

    