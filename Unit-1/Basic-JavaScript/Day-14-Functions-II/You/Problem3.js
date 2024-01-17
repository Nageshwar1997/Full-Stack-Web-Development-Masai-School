// Code 3 : indexOf

// When the element is not present in array then it will return -1
let arr = [];
console.log(arr.indexOf("Nageshwar")); // -1


// unique elements
let animals1 = ["Dog", "Cat", "Tiger", "Elephant", "Zebra", "Monkey", "Lion"];

let ans = animals1.indexOf("Lion");
console.log(ans); // 6


// same elements
// When the two or more than two elements are same in the array this method will be return index of first element caught in an array
let animals2 = ["Dog", "Cat", "Tiger", "Elephant", "Zebra", "Monkey", "Lion", "Tiger", "Elephant", "Zebra", "Monkey"];

console.log(animals2.indexOf("Dog")); // 0
console.log(animals2.indexOf("Cat")); // 1
console.log(animals2.indexOf("Tiger")); // 2
console.log(animals2.indexOf("Elephant")); // 3
console.log(animals2.indexOf("Zebra")); // 4
console.log(animals2.indexOf("Monkey")); // 5
console.log(animals2.indexOf("Lion")); // 6

console.log(animals2.indexOf("Panther")); // -1