const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' ||userInput === 'scissors'){
      return userInput;
    }else{
      console.log('enter a valid choice.');
    }
  };
  
  function getComputerChoice() {
   let compInput = Math.floor(Math.random()*3);
    if (compInput === 0){
      return 'rock';
    }else if (compInput === 1){
      return 'paper';
    }else if (compInput === 2){
      return 'scissors';
    }
    
  };
  
  function determineWinner(userInput, compInput){
    if (userInput === compInput){
      console.log('it was a tie')
    }else{
    if (userInput === 'rock'){
          if (compInput === 'scissors'){
        return 'you won!!';
      }else{
        return 'the computer won';
      }
    }
    
    if (userInput === 'paper'){
      if (compInput === 'rock'){
          return 'you won!!';
      }else{
        return 'the computer won';
      }
    }
    
    if (userInput === 'scissors'){
      if (compInput === 'paper'){
        return 'you won!!';
      }else{
        return 'the computer won';
      }
    }
  }
  }  
  function playGame() {
    let userChoice = getUserChoice('scissors');
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  