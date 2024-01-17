// *** Difference between Pre Incerement and Post Increment ***

// Pre Increment (++a)
let a = 3;
let b = ++a;
// In the pre-increment the operator increases the variable var1 by 1 but returns the value after incrementing. e.g--->
console.log("a:" + a, "b:" + b); // a:4 b:4

// Here two things is happened
// 1. The value of a will be increased by 1 ---> a = a+1; ---> a=4
// 2. The increased value of a is assigned to b ---> b=a ---> b=4

// Post Increment (x++)
let x = 3;
let y = x++;
// In the post-increment the operator increases the variable var1 by 1 but returns the value before incrementing. e.g--->
console.log("x:" + x, "y:" + y); // x:4 y:3

// Here two things is happened
// 1. The previous value of x is assigned to y ---> y=a; ----> y=3
// 2. The value of x will be increased by 1 -----> x = x+1 ----> x=4