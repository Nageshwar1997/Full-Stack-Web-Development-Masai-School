// How to find the length of an object

// syntax--->
// Obect.key(objectName).length

let obj = {
  name: "Nageshwar",
  age: 26,
  mobile: 9730870409,
  city: "Nanded",
  girlfriend: "Manjusha",
  hobbies: "COding"
}
// It will give us length of the object

console.log(Object.keys(obj).length); // 6

obj["marriage"] = false;
obj.licence = true;

let strength = Object.keys(obj).length;
console.log(strength); // 8