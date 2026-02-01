// Function to get the useInput on what they choose.
function getHumanChoice(humanChoice){
    return humanChoice;
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
         return `You lost!; Computer's Choice <span id="cs" >${computerChoice} </span> beats Your Choice ${humanChoice}.`;

    }else if (humanChoice === computerChoice){
        return `It's a draw; Your Choice '${humanChoice}' Human Choice '${computerChoice}'.`
    }else {
        humanScore += 1;
        return `You won!; Your Choice ${humanChoice} beats Computer's Choice ${computerChoice}.`
    }

} 

// function to play a game which also calls all the other function
function playGame(humanChoiceResult){
        const userChoice = getHumanChoice(humanChoiceResult);
        const computerChoice = getComputerChoice(Math.random()*20);
        const roundWinner = playRound(userChoice, computerChoice);

        const displayWinner = document.querySelector("#displayWinner");
        if(humanScore < 5 && computerScore < 5) {
            displayWinner.textContent = `Computer Choose: ${computerChoice}`;
        } else {
            displayWinner.textContent = roundWinner;
        }
}


// EventListener
const buttons = document.querySelector(".choicesBtn");
    let result = "";
    buttons.addEventListener("click", (e) => {
    switch(e.target.id) {
        case "rock":
            result = "rock";
            break;
        case "paper":
            result = "paper";
            break;
        case "scissor":
            result = "scissor";
            break;
            
    } 

    if( humanScore < 5 && computerScore < 5) {
       playGame(result);
       const displayHumanScore = document.querySelector("#displayHumanScore");
       displayHumanScore.textContent = `Human Score: ${humanScore}`;

       const displayComputerScore = document.querySelector("#displayComputerScore");
        displayComputerScore.textContent = `Computer Score: ${computerScore}`;
    } 
});


    

