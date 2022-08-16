function getComputerChoice() {
    let choice = Math.random() * 100;
    if (choice > 0 && choice < 33) {
        return "rock"
    } else if (choice >= 33 && choice < 66) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(playerChoice, computerSelection) {
    if (playerChoice === "rock" && computerSelection === "scissors") {
        console.log(`You Win! ${playerChoice} beats ${computerSelection}`);
        isWinner = true;
    } else if (playerChoice === "rock" && computerSelection === "rock") {
        console.log(`It's a Tie!`);
        isWinner = false;
    } else if (playerChoice === "paper" && computerSelection === "rock") {
        console.log(`You Win! ${playerChoice} beats ${computerSelection}`);
        isWinner = true;
    } else if (playerChoice === "paper" && computerSelection === "paper") {
        console.log(`It's a Tie!`);
        isWinner = false;
    } else if (playerChoice === "scissors" && computerSelection === "paper") {
        console.log(`You Win! ${playerChoice} beats ${computerSelection}`);
        isWinner = true;
    } else if (playerChoice === "scissors" && computerSelection === "scissors") {
        console.log(`It's a Tie!`);
        isWinner = false;
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerChoice}`);
        isWinner = false;
    }
    return isWinner;
}

function game() {
    let score = 0;

    for (let i = 0; i < 5; i++) {
          //get player input
          playRound(playerChoice, getComputerChoice());
            if (isWinner == true) {
                score++;
            }
          console.log(score);
        }
}

let isWinner;
let playerChoice = "rock";

console.log(game());