// Code 13: Count the names which contain A in them.

let names = ["Nobita", "Naruto", "Anybody", "Shinchan", "Oswald", "Wild"];

let count = 0;
for (let i = 0; i < names.length; i++) {

  let name = names[i];
  for (let j = 0; j < name.length; j++) {
    if ((name[j] == "A") || (name[j] == "a")) {
      count++;
      break;
    }
  }
}
console.log(count); // count