
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


function getHumanChoice(){
    let humanChoice;
    humanChoice = prompt("Please enter your decision");
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice !== "rock" && humanChoice !== "scissors" && humanChoice !== "paper"){
        alert("Please enter a valid response ex. rock,paper,scissors");
        getHumanChoice();
    }
    else{
        return humanChoice;
    }
    
}



let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection,computerSelection){
    alert(`You chose: ${humanSelection}, Computer chose: ${computerSelection}`);
    if(humanSelection == computerSelection){
        alert(`It's a draw! Scores: You - ${humanScore}, Computer - ${computerScore}`);
    }
    else if(
        humanSelection == "rock" && computerSelection == "scissors" ||
        humanSelection == "scissors" && computerSelection == "paper" ||
        humanSelection == "paper" && computerSelection == "rock"

    ){
        humanScore++;
        alert(`You won this round! Scores: You - ${humanScore}, Computer - ${computerScore}`);

    }
    else{
        computerScore++;
        alert(`You lost this round! Scores: You - ${humanScore}, Computer - ${computerScore}`);
    }
    
    
}
function playGame(){
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection,computerSelection);
        
    }
    if (humanScore > computerScore) {
        alert("🎉 You win the game!");
    } else if (computerScore > humanScore) {
        alert("😞 You lost the game!");
    } else {
        alert("🤝 The game is a tie!");
    }
}

playGame();