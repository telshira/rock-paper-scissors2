let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Please pick rock, paper, or scissors.");
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toUpperCase();
  computerChoice = computerChoice.toUpperCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if  (humanChoice === "ROCK" && computerChoice === "SCISSORS" 
    || humanChoice === "PAPER" && computerChoice==="ROCK"
    || humanChoice === "SCISSORS" && computerChoice ==="PAPER") {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}. Congrats!`);
  } else {
    computerScore++;
    console.log(`You lose!  ${humanChoice} loses to ${computerChoice}. Better luck next time!`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);