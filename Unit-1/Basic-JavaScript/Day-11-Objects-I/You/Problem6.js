// Loops in Objects

let obj={
  name:"Nageshwar",
  age:26,
  DOB:"01-09-1997",
  gender:"Male",
  city:"Nanded",
  hobbies:"Coding",
  marks:[10,20,30]
}

// for...in loop (it will work with onject only)

for(let key in obj){
  console.log(key); // it will give us only keys present in object
}
// name
// age
// DOB
// gender
// city
// hobbies
// marks


for(let key in obj){
  console.log(obj[key]); // it will give us only values of keys present inside the object
}
// Nageshwar
// 26
// 01-09-1997
// Male
// Nanded
// Coding
// [ 10, 20, 30 ]