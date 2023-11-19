console.log('hi');

const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    return 'error';
  }
}

function getComputerChoice(){
  var randomNumber = Math.floor(Math.random() * 3);
  if(randomNumber === 0){
    return 'rock';
  } else if (randomNumber === 1){
    return 'paper';
  } else if (randomNumber === 2){
    return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice){
  if(userChoice === computerChoice){
    return 'The game is a tie!';
  } else if(userChoice === 'bomb'){
    return 'You win (Cheat code activated)';
  } else if(userChoice === 'rock'){
    return computerChoice === 'paper' ? 'Computer wins' : 'You win';
  } else if(userChoice === 'paper'){
    return computerChoice === 'scissors' ? 'Computer wins' : 'You win';
  } else if(userChoice === 'scissors'){
    return computerChoice === 'rock' ? 'Computer wins' : 'You win';
  }
}

function playGame() {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();

  console.log(`User Choice: ${userChoice}`);
  console.log(`Computer Choice: ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();
