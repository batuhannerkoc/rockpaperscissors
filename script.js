
function getComputerChoice(){
    let computerChoiceNum = Math.floor(Math.random() * 3);
    let computerChoice;
    if(computerChoiceNum == 0){
        computerChoice = "rock";
    }
    else if(computerChoiceNum == 1){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors";
    }
    return (computerChoice);
}

function getHumanChoice(buttonId){
    if (buttonId === 'rock-button') {
        return 'rock';
    } else if (buttonId === 'paper-button') {
        return 'paper';
    } else if (buttonId === 'sc-button') {
        return 'scissors';
    }
}

function gameOver(gameText,computerScore,humanScore){
    if(humanScore == 5){
    gameText.innerText = "The game is over\n:(\n\nThe results are\nAI: "+ computerScore +"\nYou: " + humanScore+"\n\nwell congrats"
    }
    else{
    gameText.innerText = "The game is over\n:(\n\nThe results are\nAI: "+ computerScore +"\nYou: " + humanScore+"\n\nwell u suck"
    }
    
}

function playGame(){
    const humanScoreText = document.querySelector("#user-score")
    const aiScoreText = document.querySelector("#ai-score")
    const buttonsContainer = document.querySelector('.buttons-container');
    buttonsContainer.addEventListener('click', function (e) {
        // Eğer tıklanan öğe bir button ya da h3 ise
        if (e.target && (e.target.classList.contains('button') || e.target.tagName === 'H3')) {
            // Eğer h3'e tıklanmışsa, div'in id'sini al
            const humanChoice = getHumanChoice(e.target.closest('.button').id); // Tıklanan öğe div ise, id'yi al
            const computerChoice = getComputerChoice();
            const gameText = document.querySelector('#game-text');

            if(humanScore == 0 && computerScore == 0){
                console.log("Started");
                console.log("Computer's choice:", computerChoice);
                console.log("Your choice:", humanChoice);
                calculateRound(humanChoice,computerChoice);
                if(calculateRound(humanChoice,computerChoice) == "lose"){
                    gameText.innerText = 'You picked:\n'+humanChoice+ "\n\nAi picked:\n"+computerChoice+"\n\nYOU LOST THE ROUND!";
                    computerScore = computerScore + 1;
                    aiScoreText.textContent = computerScore;

                    
                }
                else if(calculateRound(humanChoice,computerChoice) == "draw"){
                     gameText.innerText = 'You picked:\n'+humanChoice+ "\n\nAi picked:\n"+computerChoice+"\n\nITS DRAW!";
                }
                else{
                    gameText.innerText = 'You picked:\n'+humanChoice+ "\n\nAi picked:\n"+computerChoice+"\n\nYOU WON THE ROUND!";
                    humanScore = humanScore + 1;
                    humanScoreText.textContent = humanScore;
                }
                
            }
            else if(humanScore == 5 || computerScore == 5){
                console.log("Game Over.")
                gameOver(gameText,computerScore,humanScore);
                return;
            }
            else {
                console.log("Computer's choice:", computerChoice);
                console.log("Your choice:", humanChoice);
                if(calculateRound(humanChoice,computerChoice) == "lose"){
                    gameText.innerText = 'You picked:\n'+humanChoice+ "\n\nAi picked:\n"+computerChoice+"\n\nYOU LOST THE ROUND!";
                    computerScore = computerScore + 1;
                    aiScoreText.textContent = computerScore;
                }
                else if(calculateRound(humanChoice,computerChoice) == "draw"){
                     gameText.innerText = 'You picked:\n'+humanChoice+ "\n\nAi picked:\n"+computerChoice+"\n\nITS DRAW!";
                }
                else{
                    gameText.innerText = 'You picked:\n'+humanChoice+ "\n\nAi picked:\n"+computerChoice+"\n\nYOU WON THE ROUND!";
                    humanScore = humanScore + 1;
                    humanScoreText.textContent = humanScore;
                }
            }
        }
    });
}

function calculateRound(humanChoice,computerChoice){
    if(humanChoice == computerChoice){
        return "draw";
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
        
        return "lose"
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        
        return "win"
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        
        return "win"
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        
        return "lose"
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        
        return "win"
    }
    else if(humanChoice == "rock" && computerChoice == "rock"){
        
        return "lose"
    }

}
let computerScore = 0;
let humanScore = 0;
playGame();


