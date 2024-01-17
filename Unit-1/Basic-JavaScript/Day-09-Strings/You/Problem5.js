// Code 5: Run loop on the string and add each character to the third variable and print that variable.

let name = "Nageshwar";

let bag = ""; // empty string
for (let i = 0; i < name.length; i++) {
  bag += name[i]; // adding the every character of a string in the bag
}
console.log(bag); // Nageshwar