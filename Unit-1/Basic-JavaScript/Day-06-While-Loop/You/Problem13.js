// *** difference between pre decrement and post decrement ***
// 1. Pre Increment (++j)
// Pre decrement operator is used to decrement variable value by 1 before assigning the value to the variable.
let a = 3;
let b = --a;
console.log("a:" + a, "b:" + b); // a:2 b:2

// Here two things is happened
// 1. The value of a will be decreased by 1 ---> a = a-1; a=2;
// 2. The decreased value of a will be  assigned to b ---> b=a; b=2



// 2. Post Increment (i++)
// Post decrement operator is used to decrement variable value by 1 after assigning the value to the variable.
let x = 3;
let y = x--;
console.log("x:" + x, "y:" + y); // x:2 y:3

// Here two things is happened
// 1. The previous value of x is assigned to y ---> x=b; ---> x=3;
// 2. The value of x will be decreased by 1 ---> x = x-1; x=2;