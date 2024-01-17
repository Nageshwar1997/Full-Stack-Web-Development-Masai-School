let arr = ["Nageshwar", 26, function greet() { console.log("Hi"); }];

// let name = arr[0];
// let age = arr[1];
// let greet = arr[2];

// console.log(name); // Nageshwar
// console.log(age); // 26
// console.log(greet); // [Function: greet]
// greet(); // Hi

// Easy Way
let [name, age, greet] = arr;
console.log(name); // Nageshwar
console.log(age); // 26
console.log(greet); // [Function: greet]
greet(); // Hi
console.log(arr); // [ 'Nageshwar', 26, [Function: greet] ]