import { Die } from "./die.class";

export class Dice {
  die1: Die;
  die2: Die;

  constructor() {
    this.die1 = new Die();
    this.die2 = new Die();
  }

  roll(): void {
    this.die1.roll();
    this.die2.roll();
  }

  getSum(): number {
    return this.die1.value + this.die2.value;
  }

  printRoll(): void {
    console.log(`Die 1: ${this.die1.value}`);
    console.log(`Die 1: ${this.die2.value}`);
    console.log(`Total: ${this.getSum()}`);
    if (this.getSum() == 2) {
      console.log("Snake eyes!");
    } else if (this.getSum() == 7) {
      console.log("Craps!");
    } else if (this.getSum() == 12) {
      console.log("Box Cars!");
    }
  }
}
