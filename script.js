const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
    let computerScore = 0;
function getComputerChoice() {
    let randomChoice = choices[Math.floor(Math.random()*choices.length)];
    return randomChoice;
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        return 'You win! scissors beat paper';
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        computerScore++;
        return 'Computer wins! scissors beat paper'; 
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors' ){
        playerScore++;
        return 'You win! rock beats scissors';
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore++;
        return 'Computer wins! paper beats rock';
    } 
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore++;
        return 'You win! paper beats rock';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        computerScore++;
        return 'Computer wins! rock beats scissors';
    } else {
        return "It's a draw!";
    }
}
function game() {
    // get all elements from the DOm
    const buttons = document.querySelectorAll('button');
    const resultDisplay = document.querySelector('.result');
    const choiceDisplay = document.querySelector('.computerChoice');
    const scoreDisplay = document.querySelector('.scores');

    // creates elements to display the scores
    const cScoreDisplay = document.createElement('li');
    const pScoreDisplay = document.createElement('li');
    cScoreDisplay.textContent = 'Computer Score: 0';
    pScoreDisplay.textContent = 'Player Score: 0';

    // add score list items to list: scoreDisplay
    scoreDisplay.appendChild(cScoreDisplay);
    scoreDisplay.appendChild(pScoreDisplay);
    
    // add an event listener to each button
    buttons.forEach(
        (button) => {
            button.addEventListener('click', () => {

                if (playerScore >= 5 || computerScore >= 5) {
                    choiceDisplay.textContent = "";
                    if (playerScore > computerScore){
                    resultDisplay.textContent = "Game over! You win!";
                }else if (playerScore < computerScore){
                    resultDisplay.textContent = "Game over! Computer wins!";
                } else {
                    resultDisplay.textContent = "It's a draw";
                }
                return;
            }


                 const computerChoice = getComputerChoice();
                result = playRound(button.id, computerChoice);
            
                choiceDisplay.textContent = "The computer chose " + computerChoice +  '.';
                resultDisplay.textContent = result;

                cScoreDisplay.textContent = 'Computer score: ' + computerScore;
                pScoreDisplay.textContent = 'Player score: ' + playerScore;


            })
        }
    )
}
game()
   

