let a: number = 5;
let b: number = 3.14;
let c: number = a + b;
console.log("c", c);

let firstName: string = "Bob";
let lastName: string = "Marley";
let fullName: string = firstName + " " + lastName;
console.log(fullName);

console.log(`His full name is ${fullName}`);

let isValid: boolean = false;
console.log(a === 5);

let movie: object = {
  id: 1,
  title: "Cool Movie",
  year: 2026,
  rating: "PG",
  director: "Some Dude"
};

console.log("Movie", movie);

let numbers: number[] = [0, 1, 2, 3, 4, 5];
console.log("numbers", numbers);
numbers.push(6);
console.log("numbers", numbers);
numbers.forEach(e => console.log(e));
