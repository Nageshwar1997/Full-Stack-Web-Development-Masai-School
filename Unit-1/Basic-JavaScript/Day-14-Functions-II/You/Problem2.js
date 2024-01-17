// Code 2 : lastIndexOf

// unique elements
let animals1 = ["Dog", "Cat", "Tiger", "Elephant", "Zebra", "Monkey", "Lion"];

let ans = animals1.lastIndexOf("Lion");
console.log(ans); // 6


// same elements
// When the two or more than two elements are same in the array this method will be return index of last element in an array
let animals2 = ["Dog", "Cat", "Tiger", "Elephant", "Zebra", "Monkey", "Lion", "Tiger", "Elephant", "Zebra", "Monkey"];

console.log(animals2.lastIndexOf("Dog")); // 0
console.log(animals2.lastIndexOf("Cat")); // 1
console.log(animals2.lastIndexOf("Tiger")); // 7
console.log(animals2.lastIndexOf("Elephant")); // 8
console.log(animals2.lastIndexOf("Zebra")); // 9
console.log(animals2.lastIndexOf("Monkey")); // 10
console.log(animals2.lastIndexOf("Lion")); // 6


// when the element is not present in the array it will return -1
console.log(animals2.lastIndexOf("Panther")); // -1