// Differenc between null and undefined
let object = {
  name: "Nageshwar",
  age: 25
}

console.log(object.name); // Nageshwar
console.log(object["age"]); // 25
console.log(object["location"]); // undefined
console.log(object.location); // undefined

// 1. null
console.log(object["location"] == null); // true
console.log(object["location"] === null); // false


// 2. undefined
console.log(object["location"] == undefined); // true
console.log(object["location"] === undefined); // true
