// Comparison Operators

// 1. Double equal to (==)---> check only both values are equal or not
console.log("==");

console.log(4 == 4); // true
console.log("Nageshwar" == "Nageshwar"); // true
console.log("5" == 5); // true

console.log(4 == 5); // false
console.log("Nageshwar" == "nageshwar"); // false


// 2. Not equal to (!=)---> it will perform opposite of double equal to(==)
console.log("!=");

console.log(4 != 5); // true
console.log("Nageshwar" !== "nageshwar"); // true

console.log(4 != 4); // false
console.log("Nageshwar" != "Nageshwar"); // false
console.log("5" != 5); // false


// 3. Triple equal to (===)---> it will check both values and it's datatypes are same or not
console.log("===");

console.log(4===4); // true
console.log("Nageshwar"==="Nageshwar"); // true

console.log(4===5); // false
console.log("Nageshwar"==="nageshwar"); // false
console.log("4"===4); // false


// 4. Not double equal to (!==)---> it is use to perform opposite of triple equal to (===)
console.log("!==");

console.log("Nageshwar"!=="Nagesh"); // true
console.log(4!==5); // true
console.log("4"!==4); // true

console.log(3!==3); // false
console.log("Nageshwar"!=="Nageshwar"); // false
