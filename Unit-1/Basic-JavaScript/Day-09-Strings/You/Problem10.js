// Code 11: Remove a char from String

let name = "Nageshwar";

// Approch 1
let output = "";
for (let i = 0; i < name.length; i++) {
  if (name[i] != "a") {
    output += name[i];
  }
}
console.log(output); // Ngeshwr


// Approch 2
let bag = "";
for (let i = 0; i < name.length; i++) {
  if (name[i] == "a") { // checking the condition, when the condition is true,
    name[i] = ""; // then the as per condition value of name[i] is replacing with "empty string"
  }
  else {
    bag = bag + name[i]; // adding all the elements in a bag
  }
}
console.log(bag); // Ngeshwr