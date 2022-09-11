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
        alert(`You Win! ${playerChoice} beats ${computerSelection}`);
        isWinner = true;
    } else if (playerChoice === "rock" && computerSelection === "rock") {
        alert(`It's a Tie!`);
        isWinner = false;
    } else if (playerChoice === "paper" && computerSelection === "rock") {
        alert(`You Win! ${playerChoice} beats ${computerSelection}`);
        isWinner = true;
    } else if (playerChoice === "paper" && computerSelection === "paper") {
        alert(`It's a Tie!`);
        isWinner = false;
    } else if (playerChoice === "scissors" && computerSelection === "paper") {
        alert(`You Win! ${playerChoice} beats ${computerSelection}`);
        isWinner = true;
    } else if (playerChoice === "scissors" && computerSelection === "scissors") {
        alert(`It's a Tie!`);
        isWinner = false;
    } else {
        alert(`You Lose! ${computerSelection} beats ${playerChoice}`);
        isWinner = false;
    }
    return isWinner;
}

// function game() {
//     let score = 0;

//     for (let i = 0; i < 5; i++) {
//           playRound(getPlayerChoice(), getComputerChoice());
//             if (isWinner == true) {
//                 score++;
//             }
//           console.log(score);
//         }

//     return console.log(`Your final score is ${score}.`)
// }
// console.log(game());

//UI functionality
const btnStart = document.querySelector("#btnStart");
const startContainer = document.querySelector("#startContainer");
const gameContainer = document.querySelector("#gameContainer");
const endContainer = document.querySelector("#endContainer");

btnStart.addEventListener('click', start);

function start() {
    gameContainer.style.display="block";
    startContainer.style.display='none';
}

//game UI
const choice = document.querySelectorAll('.choice');

choice.forEach((selection) => {
    selection.addEventListener('click', () => {
        playRound(selection.id, getComputerChoice());
    });
});