// Function to get the useInput on what they choose.
function getHumanChoice(userInput){
    userInput = userInput.toLowerCase();
    return userInput;
}
const userChoice = getHumanChoice(prompt("Choose between rock,paper and scissor"));
console.log(userChoice)


