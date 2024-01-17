// ## The explicit binding of 𝑡𝒽𝑖𝓈 using call/apply
// When a function is called using the call or apply methods, then this refers to the value passed as the first argument of the call or apply function.
function sayHello() {
    console.log("Hello! ", this);
}

var john = {
    name: "John Doe",
    age: 30
};

var james = {
    name: "James Bond",
    age: 30
};

sayHello.call(james);
sayHello.call(john);
