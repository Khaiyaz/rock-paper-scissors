const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock') {
      return userInput;
    } else if (userInput === 'paper') {
      return userInput;
    } else if (userInput === 'scissors') {
      return userInput;
    } else if (userInput === 'bomb') {
      return userInput;
    } else {
      return('Invalid input');
    }
  }
  
  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
      default:
        return 'Error';
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'The game was a tie.';
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer won!';
      } else {
        return 'User won!';
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer won!';
      } else {
        return 'User won!';
      }
    } else {
      if (computerChoice === 'rock') {
        return 'Computer won!';
      } else {
        return 'User won!';
      }
    }
  }
  
  function playGame() {
    let userChoice = getUserChoice('scissors'); //input user choice here.
    let computerChoice = getComputerChoice();
    console.log(userChoice, computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  playGame();
  