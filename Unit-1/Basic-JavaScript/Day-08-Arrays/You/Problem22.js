// Print the array in a reverse manner
let array = [1, 2, 3, 4, 5, 6];

let arr = []; // empty array
let start = array.length - 1; // loop starts from last index
for (let i = start; i >= 0; i--) {
  arr.push(array[i]); // pushing the elements in empty array
}

console.log(arr); // [ 6, 5, 4, 3, 2, 1 ]


// OR
// revers() :- This method will print the array in reverse manner
console.log(array.reverse()); // [ 6, 5, 4, 3, 2, 1 ]