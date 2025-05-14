let randomNum;
let computerChoice;
let humanChoice;
function computerDecide() {
    if(randomNum <= 0.3){
        computerChoice = "rock";
    }
    else if (randomNum > 0.3 && randomNum <= 0.6)
    {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    return(computerChoice);
}

function humanDecide() {
    humanChoice = prompt("Please make your decision. (Rock, Paper, Scissors)");
    humanChoice = humanChoice.toLowerCase();
    if( humanChoice !=="rock" && humanChoice !== "paper" && humanChoice !== "scissors"){       
        alert("Please make a valid decision!")
        humanDecide();
    }
    else{
        return(humanChoice);
    }
}

function playGame(){
    randomNum = Math.random();
    computerDecide();
    humanDecide();
    if (humanChoice == "rock" && computerChoice == "paper") {
        alert("Computer choose: " + computerChoice+", You lost!")
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        alert("Computer choose: " + computerChoice+", You won!")
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        alert("Computer choose: " + computerChoice+", You won!")
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        alert("Computer choose: " + computerChoice+", You lost!")
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        alert("Computer choose: " + computerChoice+", You lost!")
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        alert("Computer choose: " + computerChoice+", You win!")
    }
    else if (humanChoice == computerChoice){
        alert("Computer choose: " + computerChoice+ " It's a draw!")
    }
    playGame();
}

playGame();
