function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Please pick rock, papers, or scissors.");
  return humanChoice;
}