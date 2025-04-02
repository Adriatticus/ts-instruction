export class Item {
  id: number;
  name: string;

  constructor(id: number = 0, name: string = "") {
    this.id = id;
    this.name = name;
  }

  details(): string {
    return `${this.id}|${this.name}`;
  }
}
