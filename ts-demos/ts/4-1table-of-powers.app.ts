console.log("\nWelcome to the Squares and Cubes table\n");

let rl41 = require("readline-sync");
let choice41: string = "y";
while (choice41 == "y") {
  let powerBoy: number = rl41.questionInt("Enter an integer to be powered! ");
  let squareBoy: number = powerBoy * powerBoy;
  let cubeBoy: number = squareBoy * powerBoy;
  console.log("\nNumber\tSquared\tCubed\n======\t=======\t=====");
  for (let i = 1; i <= powerBoy; i++) {
    console.log(`${i}\t ${i * i}\t ${i * i * i}`);
  }

  choice41 = rl41.question("\nContinue? (y/n): ").toLowerCase();
  console.log("");
}
