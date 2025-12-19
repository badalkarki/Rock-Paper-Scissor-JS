// Function to get the useInput on what they choose.
function getHumanChoice(userInput){
    userInput = userInput.toLowerCase();
    return userInput;
}
const userChoice = getHumanChoice(prompt("Choose between rock,paper and scissor"));
console.log(userChoice)

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
const computerChoice = getComputerChoice(Math.random()*20);
console.log(computerChoice);