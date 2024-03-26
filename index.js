#! /usr /bin /env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        message: "Guess a number between 1-6:",
        type: "number",
        name: "userGuessedNumber",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congrats! you won");
}
else {
    console.log("you guessed wrong try again!!");
}
