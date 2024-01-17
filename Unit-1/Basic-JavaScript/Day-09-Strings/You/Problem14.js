// Print how many words in the given string

// when we caught the spaces then add 1 to it to get how many words.

let string = "My name is Nageshwar Pawar";

let count = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i] == " ") {
    count++; // counting the spaces inside the string.
  }
}
console.log("Words :", count + 1); // Words : 5



// OR
let str = "My name is Nageshwar Pawar";

let countWords = 1;
for (let i = 0; i < str.length; i++) {
  if (str[i] == " ") {
    countWords++; // counting the spaces inside the string.
  }
}
console.log("Words :", countWords); // Words : 5