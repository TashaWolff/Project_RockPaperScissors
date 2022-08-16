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
    let result;

    if (playerChoice === "rock" && computerSelection === "scissors") {
        result = "winner";
    } else if (playerChoice === "rock" && computerSelection === "rock") {
        result = "tie";
    } else if (playerChoice === "paper" && computerSelection === "rock") {
        result = "winner";
    } else if (playerChoice === "paper" && computerSelection === "paper") {
        result = "tie";
    } else if (playerChoice === "scissors" && computerSelection === "paper") {
        result = "winner";
    } else if (playerChoice === "scissors" && computerSelection === "scissors") {
        result = "tie";
    } else {
        result = "lose";
    }

    return giveMessage();
}