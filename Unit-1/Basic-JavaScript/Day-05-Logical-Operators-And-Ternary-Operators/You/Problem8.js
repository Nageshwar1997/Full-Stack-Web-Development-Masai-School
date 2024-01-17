// Code 9 : [Student Task ] OR Operator

// 1. true || false || true
// 2. false || true || false
// 3. false || false || true

console.log(true || false || true); // true
console.log(false || true || false); // true
console.log(false || false || true); // false


console.log((true || false || true) + "\n" + (false || true || false) + "\n" + (false || false || false));
// true
// true
// false
// it will give me same output but data type of the output is string
console.log(typeof ((true || false || true) + "\n" + (false || true || false) + "\n" + (false || false || false)));