
// 1. Normal Function
function greet1(name) {
    console.log(`I'm ${name}.`);
}
greet1("Normal Function");

// 2. Arrow Function
let greet2 = (name) => {
    console.log(`I'm ${name}.`);
} // OR
let greet3 = name => console.log(`I'm ${name}.`); // We can not return object with this but we can do it is like ({})
// OR
(name => console.log(`I'm ${name}.`))("Instant Invoked Function");
greet2("Arrow Function");
greet3("Single Line Arrow Function");


// 3. Anonymous Function
let greet4 = function (name) {
    console.log(`I'm ${name}.`);
}
greet4("Anonymous Function")