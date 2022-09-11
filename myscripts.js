//game functionality
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
          let playerChoice = prompt("Chose your weapon: ");
          playRound(playerChoice.toLowerCase(), getComputerChoice());
            if (isWinner == true) {
                score++;
            }
          console.log(score);
        }

    return console.log(`Your final score is ${score}.`)
}
// console.log(game());

//UI functionality
const btn = document.querySelector("#btn");
const startContainer = document.querySelector("#startContainer");
const gameContainer = document.querySelector("#gameContainer");
const endContainer = document.querySelector("#endContainer");

btn.addEventListener('click', start);

function start() {
    gameContainer.style.display="block";
    startContainer.style.display='none';
}