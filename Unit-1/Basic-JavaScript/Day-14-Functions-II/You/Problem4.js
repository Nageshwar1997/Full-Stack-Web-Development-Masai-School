// Code 4 : shift
// It will remove first element in an array and affect of length of array

let numbers = [1, 2, 3];

let x = numbers.shift(); // removing first element

console.log(numbers); // [ 2, 3 ]
console.log("removed element :", x); // removed element : 1




let people = ["Suchita", "Nageshwar", "Manjusha"];

let remove = people.shift();

console.log(remove); // Suchita
console.log(people); // [ 'Nageshwar', 'Manjusha' ]