import { Dice } from "./dice.class";
let readline = require("readline-sync");

console.log("Welcome to the Dice Roller App");

let choice: string = readline.question("Roll the dice? (y/n): ");

while (choice == "y") {
  console.log("");
  let dice: Dice = new Dice();
  dice.roll();
  dice.printRoll();
  console.log("");
  choice = readline.question("Roll again? (y/n): ");
}
console.log("\nBye!");

//let dice: Dice = new Dice();
