// Number(stringOfNumbers)

// convert string to a number
// it will work only when string contains number only eg--->
let str = "125";


console.log(str); // 125 (but it is a string)
console.log(typeof (str)); // string


console.log(str); // 125
console.log(typeof (Number(str))); // number



// What happens if we try to convert string contains characters to a number
// We cannot convert string contains characters to number, it will shown NaN (Not a Number) but the type of this string is number
let str1 = "Nageshwar";
console.log(typeof (str1)); // string
console.log(Number(str1)); // NaN
console.log(typeof (Number(str1))); // number