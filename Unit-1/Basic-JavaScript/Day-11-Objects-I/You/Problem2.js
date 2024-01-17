// Code 2 : Accessing the specific information datas in objects

let obj={
  name:"Nageshwar",
  age:26,
  gender:"Male",
  city:"Nanded",
  hobbies:"Coding",
  married:false,
  marks:[10,20,30]
}

// if I want to specifically print a value inside of object.

// 1. Bracket Notation (obj["key"])
console.log(obj["name"]); // Nageshwar
console.log(obj["marks"][0]); // 10
console.log(obj["marks"].length); // 3

// 2. Dot Notation (obj.key)
console.log(obj.age); // 26
console.log(obj.marks[2]); // 30
console.log(obj.marks.length); // 3