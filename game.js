var prompt = require('prompt-sync')();
var colors = require('colors');


var playerEarnings = 100;

function bet() {

  while (playerEarnings > 0){
  var playerBet = prompt("Place your bet (between $5 to $10): ");
  var playerChoice = prompt("Pick a number between 1 to 10: ");
  var computerChoice = Math.floor((Math.random() * 10) + 1);
  
  console.log(computerChoice);

    if (playerChoice == computerChoice){
      console.log("You won this round! Go again".green);
      playerEarnings += parseInt(playerBet);
      console.log(playerEarnings.bold);
    }
    else if (playerChoice - computerChoice == 1 || playerChoice - computerChoice == -1){
      console.log("Very close, you neither won or lost your bet. Try again".blue);
      playerEarnings;
      console.log(playerEarnings.bold);
    }
    else{ 
      console.log("Too bad, you lost your bet".red);
      playerEarnings -= playerBet;
      console.log(playerEarnings.bold);
    }
  }

  if (playerEarnings <= 0) {
    console.log("Game Over!".bgRed);
  }
}

bet();