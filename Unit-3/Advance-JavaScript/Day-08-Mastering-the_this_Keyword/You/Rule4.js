// the hard binding of 𝑡𝒽𝑖𝓈 using bind
// bind creates a new function hard bound to the object that we have specified.
function sayHello() {
    console.log("Hello! ", this, this.name);
}

var John = {
    name: "John Doe",
    age: 30
};

var johnSayHello = sayHello.bind(John);

johnSayHello();
