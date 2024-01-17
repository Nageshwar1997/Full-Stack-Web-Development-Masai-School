// Code 6 : Differentiate between ,(comma) and +

// case 1 integer and string
let a = 2;
let b = 3;
let c = "xyz";

console.log(a, b, c); // 2 3 xyz
console.log(a + b + c); // 5xyz (concatenation)
console.log(a + c + b); // 2xyz3 (concatenation)


// Case 2 : Integers
let d = 2;
let e = 3;
console.log(d, e); // 2 3
console.log(d + e); // 5


// Case 3 : Strings
let f = "Hello";
let g = "World";
console.log(f, g); // Hello World
console.log(f + g); // HelloWorld


// Case 4 : "\n"
let h = 2;
let i = "hello";
console.log(h, "\n", i);
// 2 
//  hello
console.log(h + "\n" + i);
// 2
// hello




