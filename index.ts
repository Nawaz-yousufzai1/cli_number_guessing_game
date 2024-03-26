#!/user/bin/env node

import inquirer from "inquirer";

console.log("welcome to code with Nawaz-CLI Guessing Game");
const randomNumber= Math.floor(Math.random()*5 +1);
const answer= await inquirer.prompt([
    {
        name:"userGuessNumber",
        type: "number",
        message: "Enter your guess Number limit from 1 to 5",
    },
]);

if(answer.userGuessNumbe===randomNumber){
console.log("Congratulation! you guess a correct number.");
}
else{
    console.log("Sorry, you guess a wrong Number");
}
