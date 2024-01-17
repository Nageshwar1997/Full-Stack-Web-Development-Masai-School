// Code 11: Perform the following tasks :
// 1. Create an array of 6 numbers
// 2. print the numbers array Array 6
// 3. delete last 3 numbers from that array
// 4. print the numbers array

// 1st way
let numbers = [1, 2, 3, 4, 5, 6];

// console.log(numbers); // [ 1, 2, 3, 4, 5 ]

// numbers.pop();
// numbers.pop();
// numbers.pop();

// console.log(numbers); // [ 1, 2 ]


// // 2nd way

let arr = ["a", "b", "c", "d", "e", "f"];
// Here the loop will run till floor value of array's length
// console.log(Math.floor(arr.length/2))

for (let i = 0; i < arr.length; i++) {
  arr.pop();
}
console.log(arr); // [ 'a', 'b', 'c' ]

