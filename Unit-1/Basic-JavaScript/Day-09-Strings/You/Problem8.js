// Code 9: Update String using array and third variable. [First Method]

// 1st way
let name = "Mageshwar";

let array = [];

for (let i = 0; i < name.length; i++) {
  array.push(name[i]); // pushing the all element in a string to the array
}
// console.log(array); // [ 'M', 'a', 'g', 'e', 's', 'h', 'w', 'a', 'r' ]

array[0] = "N"; // replacing the array's 0th index value to "N" ===> "M"--->"N"
let output = ""; // empty string

for (let i = 0; i < array.length; i++) {
  output += array[i]; // adding the element in a string
}
console.log(output); // Nageshwar