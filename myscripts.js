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
        return `You Win! ${playerChoice} beats ${computerSelection}`;
    } else if (playerChoice === "rock" && computerSelection === "rock") {
        return `It's a Tie!`;
    } else if (playerChoice === "paper" && computerSelection === "rock") {
        return `You Win! ${playerChoice} beats ${computerSelection}`;
    } else if (playerChoice === "paper" && computerSelection === "paper") {
        return `It's a Tie!`;
    } else if (playerChoice === "scissors" && computerSelection === "paper") {
        return `You Win! ${playerChoice} beats ${computerSelection}`;
    } else if (playerChoice === "scissors" && computerSelection === "scissors") {
        return `It's a Tie!`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerChoice}`;
    }
}

const playerChoice = "rock";
let computerSelection = getComputerChoice();
console.log(playRound(playerChoice, computerSelection));