const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

const newTarget = Object.assign(target, source);
console.log(target); // { a: 1, b: 3, c: 4 }
console.log(newTarget === target); // true