// Code 15 : For Even Array, print the second half of the array
console.log("Even Array")
let evenArray = ["A", "B", "C", "D", "E", "F", "G", "H"];

let start = Math.floor(evenArray.length / 2)
for (let i = start; i < evenArray.length; i++) {
  console.log(evenArray[i]);
}
// E
// F
// G
// H


// Code 16 : For Even or Odd Array, print the second half of the array

console.log("Odd Array")
let oddArray = ["A", "B", "C", "D", "E", "F", "G"];

// it handles even oddArray
if (oddArray.length % 2 == 0) {
  begains = oddArray.length / 2;
}
// it handles odd oddArray
else {
  begains = Math.floor(oddArray.length / 2);
}

for (let i = begains; i < oddArray.length; i++) {
  console.log(oddArray[i]);
}
// D
// E
// F
// G