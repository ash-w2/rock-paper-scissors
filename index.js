//define choices
const choices = ["rock", "paper", "scissors"];

//Write a function that plays a single round of Rock Paper Scissors.
//The function should take two parameters - the playerSelection and computerSelection
//- and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

//play single round of Rock, Paper, Scissors
function playRound() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();

  if (computerSelection == "paper") {
    console.log("You lost! Paper beats Rock!");
  } else console.log("Wrong");
}

//get random choice from computer
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

//get choice from user
function getPlayerChoice() {
  let userInput = prompt("Please choose rock, paper or scissors");
  //console.log(userInput);
}

//check who wins the round
function checkWinner(choiceP, choiceC) {
    if (choiceP == "rock" && choiceC == "scissors" || choiceP == "scissors" && choiceC == "paper" || choiceP == "paper" && choiceC == "rock") 
    console.log("Player, you win!!");
};

playRound();

//validateInput()
