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


    let roundResult = playRound(playerSelection, computerSelection);
    console.log("Player: " + playerSelection);
    console.log("Computer:" + " " + computerSelection);
    console.log(roundResult);
    counter = counter += 1; 

    /*function to count the player score by counting when the roundResult includes the word win.
    the game works but the counter stays at 0;

    function playerScore(word, string) {
        let pointCounter = 0;
        const words = string.split(" ");
    
        for (let i = 0; i < words.length; i++){
            if(words[i].toLowerCase() === word.toLowerCase()){
                pointCounter++;
            }
        }
        return pointCounter;
    }
    wordToFind = "win";
    const playerPoints = playerScore(roundResult, wordToFind);
    console.log(`Player score: ${playerPoints}`); */
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
