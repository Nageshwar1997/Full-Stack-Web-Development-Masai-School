// Code 1 : using toString vs Number()


// 1. Initially we have two numbers and it's data type are also number
let num1 = 5;
let num2 = -6;

console.log(num1); // 5
console.log(num2); // -6

console.log(typeof (num1)); // number
console.log(typeof (num2)); // number


// 2. Now we converted this numbers, number into a string, now this datatype is string
num1 = num1.toString(); // 5 ---> "5"
num2 = num2.toString(); // -6 ---> "-6"

console.log(num1); // 5
console.log(num2); // -6

console.log(typeof (num1)); // string
console.log(typeof (num2)); // string


// 3. Here we convert this numbers which is in quote, string to a number
num1 = Number(num1); // "5" ---> 5
num2 = Number(num2); // "-6" ---> -6

console.log(num1); // 5
console.log(num2); // -6

console.log(typeof (num1)); // number
console.log(typeof (num2)); // number