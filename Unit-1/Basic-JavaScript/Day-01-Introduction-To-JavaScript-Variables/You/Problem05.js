// const is a fixed variable which cannot be changed at any time.

// let and var variables can be can be changed.

let x=10;
// let x=20; // SyntaxError: Identifier 'x' has already been declared
// we can not use same variable name in block code
console.log(x); // 10

var y=20;
var y=30; // we can use same variable name in code but compiler replace the previous variable value to the new assigned variable value
console.log(y); // 30

const z=30;
// z=40; we can not reuse constant variable if we are declared somewhere because it is a constant value and it can not be changed
console.log(z); // 30