// the implicit binding of 𝑡𝒽𝑖𝓈
// When a method is called as a property of an object, then the this implicity refers to the parent object.If a function attached to an object is called by objectname.methodname() syntax, the this points to the object to which the function is attached.
function sayHello() {
    console.log("Hello! from ", this.name);
}

var john = {
    name: "John Doe",
    age: 30,
    sayName: function () {
        // this.age = 35;
        console.log("My name is ", this.name);
    },
    sayHello: sayHello
};

var james = {
    name: "James Bond",
    age: 27,
    sayName: function () {
        console.log("My name is ", this.name);
    },
    sayHello: sayHello
};

john.sayName();
john.sayHello();

james.sayName();
james.sayHello();



/*
// When a function/class is called with the new operator,
// it gives us a brand new object & the this refers to the newly created object.
function Person(name) {
    this.name = name;

    this.sayHello = function () {
        console.log("Hello! ", this, this.name);
    };
}

var james = new Person("James Bond");
var john = new Person("John Doe");

john.sayHello();
james.sayHello();

*/