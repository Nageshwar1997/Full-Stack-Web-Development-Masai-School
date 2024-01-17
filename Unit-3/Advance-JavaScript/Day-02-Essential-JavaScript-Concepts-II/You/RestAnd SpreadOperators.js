// 1st argument = name;
// 2nd argument = age;
// 3rd argument = user Hobbies;

// Rest Operator
// Rest means all of them
function printUserDetails(name, age, ...hobbies) {
    console.log(name, age, hobbies);
}
printUserDetails("Nageshwar", 26, "Singing", "Coding", "Reading", "Tracking");

// Spread Operator
let arr1 = [1, 2, 3, 4];
let arr2 = [...arr1];
console.log(arr2); // [ 1, 2, 3, 4 ]
