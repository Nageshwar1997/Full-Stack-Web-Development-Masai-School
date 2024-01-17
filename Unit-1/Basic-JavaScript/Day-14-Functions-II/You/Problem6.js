// Code 6 : join()   [it will convert arrray into a string]
// The join() method is a built-in JavaScript method that concatenates all the elements of an array into a single string, using a specified separator between each element.


/* // 1. way
let arr = ["M", "A", "N"];
let bag = "";

for (let i = 0; i < arr.length; i++) {
  bag = bag + arr[i];
}
console.log(bag); // MAN
*/

// 2. way Using Bag with join() method

let bag1 = arr.join(); // After applying the join() method, these elements are concatenated into a single string with commas between them.
console.log(bag1); // M,A,N
