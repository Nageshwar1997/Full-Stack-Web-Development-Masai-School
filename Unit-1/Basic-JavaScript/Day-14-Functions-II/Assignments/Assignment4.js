// Write a custom function that has the same behavior of inbuilt String Substring Function

let string = "I am Nageshwar Pawar";
let start = 5; // Starting point of substring
let end = 14; // ending point of substring end excluding

function substring(str, start, end) {
  let bag = "";
  for (let i = start; i < end; i++) { // running for loop from start point to end point
    bag += str[i]; // adding elements to bag
  }
  return bag; // return the bag
}

let ans = substring(string, start, end); // calling the function

// printing the output
console.log(ans); // Nageshwar