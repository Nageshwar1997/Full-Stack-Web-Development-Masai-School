let obj = {
    name: "Nageshwar",
    age: 26,
    greet: function () {
        console.log("Hi");
    }
}

// let name = obj.name;
// let age = obj.age;
// let greet = obj.greet;
// console.log(name, age, greet); // Nageshwar 26 [Function: greet]
// greet(); // Hi

// Easy Way
let { name, age, greet } = obj;
console.log(name); // Nageshwar
console.log(age); // 26
console.log(greet); // [Function: greet]
greet(); // Hi