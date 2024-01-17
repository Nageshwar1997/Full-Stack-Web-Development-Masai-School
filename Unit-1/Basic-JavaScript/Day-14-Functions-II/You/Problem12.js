// Code 11 : split()   [it will convert string into an array separated by given separator]

let str1 = 'The quick brown fox';
let x = str1.split(" "); // here this method, when the space is get in string it will convert to an element and push in an array
console.log(x); // [ 'The', 'quick', 'brown', 'fox' ]


let str2 = 'The quick, brown fox';
let y = str2.split(","); // here this method, when the comma will get in a string then it will convert to an element and push in an array
console.log(y); // [ 'The quick', ' brown fox' ]


let str3 = 'The quick, brown fox';
let z = str3.split(""); // here this method, every character spaces also considered as a character and it will convert into an element and push into an array
console.log(z);
/* 
[
  'T', 'h', 'e', ' ', 'q',
  'u', 'i', 'c', 'k', ',',
  ' ', 'b', 'r', 'o', 'w',
  'n', ' ', 'f', 'o', 'x'
] */