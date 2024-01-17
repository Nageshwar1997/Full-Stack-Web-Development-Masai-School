// Code 8 : OR Operator (||)
// If any of the statement is true , then the result will be true

// Observation :
// 1. If any of the case is true then the final result will be true.
// 2. If all the cases are false, then only the result will be false.


let a = true;
let b = true;
let c = a || b;
console.log(c); // true

a = true;
b = false;
console.log(a || b); // true

a = false;
b = true;
console.log(a || b); // true

a = false;
b = false;
console.log(a || b); // false
