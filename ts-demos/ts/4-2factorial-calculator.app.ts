console.log("Welcome to the Factorial Calculator\n");

let rl42 = require("readline-sync");
let choice42: string = "y";
while (choice42 == "y") {
  let result: number = 1;
  let factorBoy: number = rl42.questionInt("Enter an integer that's greater than 0 and less than 10: ");
  for (let i = 1; i <= factorBoy; i++) {
    result *= i;
  }
  console.log(result);
  choice42 = rl42.question("Continue? (y/n): ");
}
