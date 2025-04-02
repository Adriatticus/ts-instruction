export class Die {
  value?: number;

  constructor() {
    //this.value = this.roll();
  }

  roll(): void {
    // generate a random value between 1 and 6
    this.value = Math.floor(Math.random() * 6) + 1;
  }
}
