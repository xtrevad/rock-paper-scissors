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

const computerSelection = computerPlay();

const buttons = document.querySelectorAll("button");

const para = document.querySelector("p");

const test = Array.from([1, 2, 66]);

// this calls a round every time a button is clicked, with the button's ID being the player selection.
for (const button of buttons) {
    button.addEventListener('click', () => {
        playRound(button.id, computerSelection);
    });
};

const results = document.querySelector('#results')

let playerPoints = 0;
let computerPoints = 0;
let gameOutput = "Click to play!";

let feedback = document.createElement('div');
feedback.classList.add('feedback');
feedback.textContent = gameOutput;

let playerScore = document.createElement('div');
playerScore.classList.add('results');
playerScore.textContent = ("Your score: " + playerPoints);

let computerScore = document.createElement('div');
computerScore.classList.add('results');
computerScore.textContent = ("Computer score: " + computerPoints);

results.appendChild(playerScore);
results.appendChild(computerScore);
results.appendChild(feedback);

function playAgain() {
    // for (const button of buttons) {
    //     button.removeEventListener('click', () => {
    //         playRound(button.id, computerSelection);
    //     });
    // };
    let anotherGame = document.createElement('button');
    anotherGame.classList.add('anotherGame');
    anotherGame.textContent = ('Play again?');
    anotherGame.addEventListener('click', () => {
        playerPoints = 0;
        computerPoints = 0;
        gameOutput = "Click to play!";
        playerScore.textContent = ("Your score: " + playerPoints);
        computerScore.textContent = ("Computer score: " + computerPoints);
        feedback.textContent = gameOutput;
        gameOutput = "Click to play!";
        results.removeChild(anotherGame);
    })
    results.appendChild(anotherGame);
}

function playRound(playerSelection, computerSelection) {
     computerSelection = computerPlay(); 
        if (playerSelection === computerSelection) {
          // alert("It's a tie!");
          feedback.textContent = "It's a tie!";
          return (gameOutput = "It's a tie!");
     } else if (((playerSelection === "PAPER") && (computerSelection === "ROCK")) 
          || ((playerSelection === "SCISSORS") && (computerSelection === "PAPER"))
          || ((playerSelection === "ROCK") && (computerSelection === "SCISSORS"))) {
          // alert("You win!");
          feedback.textContent = "You win!";
          playerPoints += 1;
          playerScore.textContent = ("Your score: " + playerPoints);
          if (playerPoints >= 5) {
            feedback.textContent = "You win the game! Congratulations!";
            computerScore.textContent = ":(";
            // break the buttons so you can't play again and insert a "play again" button:
            // make this a function, e.g. 'endOfGame()'
            playAgain();
            return;
          }
          // gameOutput = "You win!";
          return "You win!"
     } else {
          // alert("You lose!");
          feedback.textContent = "You lose!"
          computerPoints += 1;
        }
          computerScore.textContent = ("Computer score: " + computerPoints);
          if (computerPoints >= 5) {
            feedback.textContent = "You lose the game! Loser!"
            playerScore.textContent = ":(";
            playAgain();
            return;
          }
          // gameOutput = "You lose!"
          return "You lose!"
      
}