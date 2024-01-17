// Code 7: Update Character in String

// Strings are immutable
let name = "Mageshwar";

name[0] = "N"; // Once the string is declared and initialized, it cannot be updated later.

console.log(name); // Magehswar

// But we can update string using arrays properties (details in next problem)




// Let’s use an array to update the string

// Code 8: Update Character in array

// Arrays are mutable
let array = ["M", "a", "g", "e", "s", "h", "w", "a", "r"];
array[0] = "N";

console.log(array); // [ 'N', 'a', 'g', 'e', 's', 'h', 'w', 'a', 'r' ]
