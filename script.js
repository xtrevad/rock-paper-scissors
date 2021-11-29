function computerPlay() {
    let result;
    if (Math.random() > ( 2 / 3 )) {
        result = 'ROCK';
    } else if (Math.random() > ( 1 / 3 )) {
        result = 'PAPER';
    } else {
        result = 'SCISSORS';
    }
    return result;
};

function userInput() {
    let input = prompt("Choose your weapon - rock, paper, or scissors!", " ");
    let result = input.toUpperCase();
    if ((result === "ROCK") || (result === "PAPER") || (result === "SCISSORS")) {
        return result;
    } else {
        alert("Please choose either rock, paper, or scissors.", " ");
        userInput();
    }
}

function playRound(playerSelection, computerSelection) {
     playerSelection = userInput();
     computerSelection = computerPlay(); 
        if (playerSelection === computerSelection) {
          alert("It's a tie!");
          return "It's a tie!"
     } else if (((playerSelection === "PAPER") && (computerSelection === "ROCK")) 
          || ((playerSelection === "SCISSORS") && (computerSelection === "PAPER"))
          || ((playerSelection === "ROCK") && (computerSelection === "SCISSORS"))) {
          alert("You win!");
          return "You win!"
     } else {
          alert("You lose!");
          return "You lose!"
      }
}

playerSelection = userInput();
computerSelection = computerPlay();

function game() {
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
}