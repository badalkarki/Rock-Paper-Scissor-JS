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
         return `You lost! ${computerChoice} beats ${humanChoice}.`;

    }else if (humanChoice === computerChoice){
        return `It's a draw ${computerChoice} is same as ${humanChoice}.`
    }else {
        humanScore += 1;
        return `You won! ${humanChoice} beats ${computerChoice}.`
    }

} 


function playGame(humanChoiceResult){
        const userChoice = getHumanChoice(humanChoiceResult);
        const computerChoice = getComputerChoice(Math.random()*20);
        const roundWinner = playRound(userChoice, computerChoice);

      
            console.log("human choice: "+ userChoice);
            console.log("computer choice: "+ computerChoice);
            console.log(roundWinner);
        
}



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
        console.log(humanScore < 5);
        console.log(computerScore < 5);
       console.log("Human Score: " + humanScore);
       console.log("Computer Score: "+ computerScore);
    } 
})

    

    

