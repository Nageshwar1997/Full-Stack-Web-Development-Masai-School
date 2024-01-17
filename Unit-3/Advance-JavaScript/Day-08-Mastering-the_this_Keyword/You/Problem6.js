// Write a polyfill for all the Arrays, such that I can invoke the method
// sayHi() on any array and it simple console logs ("Hi From Nageshwar");


let arr = ["One", "Two", "Three"];

Array.prototype.sayHi = function () {
    console.log("Hi From Nageshwar");
}

arr.sayHi();
