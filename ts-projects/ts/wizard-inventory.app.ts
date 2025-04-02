let readline = require("readline-sync");
import { Item } from "./item.class";
let items: Item[] = [new Item(1, "wooden staff"), new Item(2, "wizard hat"), new Item(1, "cloth shoes")];

console.log("Welcome to the Wizard inventory app");

let command: string = "";
while (command != "exit") {
  // disply menue
  displayMenu();
  // prompt command
  command = readline.question("Command: ");

  // do the command
  switch (command) {
    case "show":
      showItem();
      break;
  }
  switch (command) {
    case "grab":
      grabItem();
      break;
  }
  switch (command) {
    case "edit":
      editItem();
      break;
  }
  switch (command) {
    case "drop":
      dropItem();
      break;
  }
  switch (command) {
    case "exit":
      break;
  }
  // repeat - until "exit"
}

console.log("Bye");

function displayMenu() {
  console.log("Command Menu");
  console.log("Show all Items");
  console.log("Grab some shit - add item");
  console.log("Edit - edit an item");
  console.log("Drop - delete item");
  console.log("exit - exit app");
  console.log("");
}
function dropItem() {
  console.log("\nDelete Items: ");
  let id: number = readline.questionInt("Item ID?");
  // find the item in the list that matches the id entered
  // remove that item
  //   let idx: number = 0;
  //   let name: string = "";
  //   items.forEach((item, index) => {
  //     if (item.id == id) {
  //       idx = index;
  //       name = item.name;
  //     }
  //   });
  //   items.splice(idx, 1);
  let item: Item = findItem(id);
  let idx: number = items.indexOf(item);
  items.splice(idx, 1);
  console.log(`${item.name} was removed`);
}

function editItem() {
  console.log("\nShow Items: ");
  let id: number = readline.questionInt("Item ID?");
  let item: Item = findItem(id);
  let newName: string = readline.question("New Name: ");
  item.name = newName;
  console.log(`Item ${id} was updated.`);
}

function grabItem() {
  console.log("\nShow Items: ");
  if (items.length == 4) {
    console.log("You can't carry anymore items please drop.");
  } else {
    let id: number = readline.questionInt("ID?");
    let name: string = readline.question("Name? ");
    let item: Item = new Item(id, name);
    items.push(item);
    console.log(`${name} was added`);
  }
}

function showItem() {
  console.log("\nShow Items: ");
  for (let item of items) {
    console.log(`${item.id}: ${item.name}`);
  }
  throw new Error("Function not implemented.");
}

function findItem(id: number): Item {
  let item: Item = new Item();
  for (let i of items) {
    if (i.id == id) {
      item = i;
      break;
    }
  }
  return item;
}
