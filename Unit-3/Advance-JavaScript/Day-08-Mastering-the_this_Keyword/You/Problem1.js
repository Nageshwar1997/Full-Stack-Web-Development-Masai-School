// call apply & bind
// .call & .apply are used to invoke a function & set the value of the this keyword inside of the function
// .bind is used to create a function & set the value of the this keyword inside of the newly created function

function greet(greeting, year, receiver) {
    return `${greeting} ${year} to ${receiver} from ${this.name}!`;
}

// 1. .call({},arg1,arg2,arg3)
// takes in the value of this keyword as the first argument
// and the rest of the arguments are passed as arguments to the function which is separated bya comma
let g = greet.call({ name: "Nageshwar", },"Happy New Year", 2023, "Manjusha");
console.log(g);
// Happy New Year 2023 to Manjusha from Nageshwar!


// 2. .apply({},[arg1,arg2,arg3])
// takes in the value of this keyword as the first argument
// and the rest of the arguments are passed as an array
let h = greet.call({ name: "Nageshwar", },"Happy New Year", 2023, "Manjusha");
console.log(h);

// 3. .bind()
// bind gives you a new function
// in which the this keyword is pre-set for you
// creates a new function & set the value of the this keyword inside of the newly created function
let greetFromNageshwar = greet.bind({ name: "Nageshwar", });
let i = greetFromNageshwar("Happy New Year", 2023, "Manjusha");
console.log(i);