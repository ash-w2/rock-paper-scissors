//define choices
const choices = ["rock", "paper", "scissors"];

//play single round of Rock, Paper, Scissors
function playRound() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  console.log(winner);
}

//get random choice from computer
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

//get choice from user
function getPlayerChoice() {
  let userInput = prompt("Please choose rock, paper or scissors");
  return userInput;
}

//check who wins the round
function checkWinner(choiceP, choiceC) {
  if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "scissors" && choiceC === "paper") ||
    (choiceP === "paper" && choiceC === "rock")
  )
    return "Player, you win!!";
  else if (choiceP === choiceC) {
    return "It's a draw!";
  } else {
    return "Computer, you win!!";
  }
}

//play 5 rounds
function game() {
  for (let r = 0; r < 5; r++) {
    playRound();
  }
  window.alert("End of game!");
}

game();
