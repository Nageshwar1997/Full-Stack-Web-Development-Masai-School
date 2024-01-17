// * Multiple named import
// import { name, add, multiply } from "./sourse.js";

// console.log(name);

// console.log(add(10, 20));

// console.log(multiply(10, 20));

// * One default and multiple names import
import multiply, { name, add } from "./sourse.js";

console.log(name);

console.log(add(10, 20));

console.log(multiply(10, 20));


