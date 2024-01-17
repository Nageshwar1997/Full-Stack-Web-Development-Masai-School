// Code 12: Count the names starting with N or n

let names = ["Nobita", "Naruto", "noddy", "Shinchan", "Oswald"];


// 1st way
let count = 0;
for (let i = 0; i < names.length; i++) {
  if ((names[i][0] == "N") || (names[i][0] == "n")) {
    count++;
  }
}
console.log(count);


// 2nd way
let count1 = 0;
for (let i = 0; i < names.length; i++) {
  let name = names[i];
  for (let j = 0; j < name.length; j++) {
    if ((name[0] == "N") || (name[0] == "n")) {
      count1++;
      break;
    }
  }
}
console.log(count1);