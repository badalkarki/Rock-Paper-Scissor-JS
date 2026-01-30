// Function to get the useInput on what they choose.
function getHumanChoice(userInput){
    userInput = userInput.toLowerCase();
    return userInput;
}

// // Function to get the choice of the computer.
function getComputerChoice(choice){
    if(choice > 12){
        return "rock";
    }else if (choice < 12 && choice > 6){
        return "paper";
    }else {
        return "scissor";
    }
}

    // variables to count the number of rounds won by Human and Computer
    let humanScore = 0;
    let computerScore = 0;



// Function to compare the choices and select winner for round;
function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissor" || humanChoice === "scissor" && computerChoice === "rock"){
        computerScore += 1;
         return `You lost! ${computerChoice} beats ${humanChoice}.`;

    }else if (humanChoice === computerChoice){
        return `It's a draw ${computerChoice} is same as ${humanChoice}.`
    }else {
        humanScore += 1;
        return `You won! ${humanChoice} beats ${computerChoice}.`
    }

} 


// function to play the round of 5 game and decide the winner
function playGame(){

    for(let i = 0; i < 5; i++){
        const userChoice = getHumanChoice(prompt("Choose between rock,paper and scissor"));
        console.log("human choosed: "+ userChoice)

        const computerChoice = getComputerChoice(Math.random()*20);
        console.log("computer choosed: "+ computerChoice);

        const roundWinner = playRound(userChoice, computerChoice);
        console.log(roundWinner);
    }

    if(humanScore > computerScore){
        return ("Yeah Humans are still superior than the computers, you proved it.");
    }else if(computerScore > humanScore) {
        return ("Oh no! Computer are getting dangerous it's beating human on everything.")
    }else {
        return ("That was a tough battle, but it was a draw.")
    }
}
const gameWinner =playGame();

console.log("Human Score: " + humanScore);
console.log("Computer Score: "+ computerScore);

console.log(gameWinner)t