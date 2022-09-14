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
        results.textContent = `You Win! ${playerChoice} beats ${computerSelection}`;
        plyrScore++;
    } else if (playerChoice === "rock" && computerSelection === "rock") {
        results.textContent = `It's a Tie!`;
    } else if (playerChoice === "paper" && computerSelection === "rock") {
        results.textContent = `You Win! ${playerChoice} beats ${computerSelection}`;
        plyrScore++;
    } else if (playerChoice === "paper" && computerSelection === "paper") {
        results.textContent = `It's a Tie!`;
    } else if (playerChoice === "scissors" && computerSelection === "paper") {
        results.textContent = `You Win! ${playerChoice} beats ${computerSelection}`;
        plyrScore++;
    } else if (playerChoice === "scissors" && computerSelection === "scissors") {
        results.textContent = `It's a Tie!`;
    } else {
        results.textContent = `You Lose! ${computerSelection} beats ${playerChoice}`;
        compScore++;
    }
    displayScore();
}

//UI functionality
const btnStart = document.querySelector("#btnStart");
const btnEnd = document.querySelector("#btnEnd")
const startContainer = document.querySelector("#startContainer");
const gameContainer = document.querySelector("#gameContainer");
const endContainer = document.querySelector("#endContainer");
const results = document.querySelector("#results");
const pScore = document.querySelector(".plyrScore");
const cScore = document.querySelector(".compScore");

//initialize game
let plyrScore = 0;
let compScore = 0;
gameContainer.style.display="none";
endContainer.style.display="none";

btnStart.addEventListener("click", start);
btnEnd.addEventListener("click", end);

function start() {
    gameContainer.style.display="flex";
    startContainer.style.display="none";
}

function end() {
//  accept fate -> return to start screen
    endContainer.style.display="none";
    startContainer.style.display="flex";
}

const choice = document.querySelectorAll('.choice');

choice.forEach((selection) => {
    selection.addEventListener('click', () => {
        playRound(selection.id, getComputerChoice());
        console.log(plyrScore, compScore);
        if (plyrScore === 5) {
            gameOver(true);
        } else if (compScore === 5) {
            gameOver(false);
        }
    });
});

const endResult = document.querySelector("#endContainer h1")

function gameOver(isWinner) {
    gameContainer.style.display="none";
    endContainer.style.display="flex"
    plyrScore = 0;
    compScore = 0;
    displayScore();
    if (isWinner) {
        endResult.textContent = "Winner!"
    } else {
        endResult.textContent = "Loser..."
    }
}

function displayScore() {
    pScore.textContent = "score: " + plyrScore;
    cScore.textContent = "score: " + compScore;
}
