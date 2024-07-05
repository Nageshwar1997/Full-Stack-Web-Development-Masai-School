// const [sum, sub, prod, div] = require("./main"); // it has a drawback if I miss ordering it will give me wrong results
const { sum, sub, prod, div } = require("./main"); // this is right approach

console.log(sum(1, 2)); // 3
console.log(sub(1, 2)); // -1
console.log(prod(1, 2)); // 2
console.log(div(1, 2)); // 0.5
