function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice; 

  while(true) {
    humanChoice = prompt("Please pick rock, paper, or scissors.");
    
    if (!humanChoice) continue; //Skip if statement if null or empty

    humanChoice = humanChoice.toUpperCase();
    if (humanChoice === "ROCK" || humanChoice === "PAPER" || humanChoice === "SCISSORS") {
      return humanChoice;
    } else {
      prompt("You didn't pick rock, paper, or scissors. Please try again.");
    }
  }

}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    computerChoice = computerChoice.toUpperCase();
  
    if (humanChoice === computerChoice) {
      console.log(`It's a tie! You both chose ${humanChoice}.`);
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

  for (let i = 0; i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection);
    console.log(`Your score: ${humanScore} vs Computer score: ${computerScore}`);
  } 
}

playGame();