// Primitive Datatypes
let string = 'Vivek';
console.log(typeof (string)); // string

let number = 1;
console.log(typeof (number)); // number

let boolean = true;
console.log(typeof (boolean)); // boolean

let undef = undefined;
console.log(typeof (undef)); // undefined

let veryBigNum = 1234567890123456789012345678901234567890n; // // the "n" at the end means it's a BigInt
console.log(typeof (veryBigNum)); // bigint

let symbol = Symbol('hello');
console.log(typeof (symbol)); // symbol

let nul1 = null; // a bug in JS :)
console.log(typeof (nul1)); // object

// Non-Primitive Datatypes
let object = { name: 'Vivek' };
console.log(typeof object); // object

let array = [1, 2, 3]; // you should use Array.isArray(a) and not typeof
console.log(typeof array); // object

let function1 = function () {
    console.log('Hello')
}
console.log(typeof function1); // function
function1(); // Hello