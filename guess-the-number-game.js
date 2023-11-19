let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Function to generate a random target number
function generateTarget() {
  var secretNum = Math.floor(Math.random() * 10); // Generate a random integer between 0 and 9
  return secretNum;
}

// Function to compare human and computer guesses to the target number
function compareGuesses(humanGuess, computerGuess, secretNum) {
  const humanDifference = Math.abs(secretNum - humanGuess);
  const computerDifference = Math.abs(secretNum - computerGuess);

  return humanDifference <= computerDifference;
}

// Function to update the score based on the winner
function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

// Function to advance to the next round
function advanceRound() {
  currentRoundNumber++;
}

// Testing the functions
const secretNumber = generateTarget();
const humanGuess = 3; // Replace with actual human guess
const computerGuess = 5; // Replace with actual computer guess

const humanWins = compareGuesses(humanGuess, computerGuess, secretNumber);
console.log(`Human wins: ${humanWins}`);

updateScore('human'); // Increment human score
console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);

advanceRound(); // Increment current round number
console.log(`Current Round: ${currentRoundNumber}`);
