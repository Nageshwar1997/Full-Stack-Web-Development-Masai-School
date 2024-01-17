// The NCO is written as two question Marks (??)
//  As it treat null and undefined similarly ()

let a=null;

a ?? console.log("I'm null");

let b;
b ?? console.log("I'm undefined");

let c = NaN;
// let c = 0;
// let c = "";
let result = c ?? "I'm null / undefined";
console.log(result); // valueof(c);