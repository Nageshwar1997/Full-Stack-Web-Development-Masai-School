// Code 3: Add the data field in the given object

let obj={
  name:"Nageshwar",
  gender:"Male",
  city:"Nanded",
  hobbies:"Coding",
  age:26
}

obj["DOB"]="01-09-1997"; // adding key and value inside the object

console.log(obj["DOB"]); // 01-09-1997 (Bracket Notation)

console.log(obj.DOB); // 01-09-1997 (Dot Notation)

console.log(obj); // ---> output
// {
//   name: 'Nageshwar',
//   gender: 'Male',
//   city: 'Nanded',
//   hobbies: 'Coding',
//   age: 26,
//   DOB: '01-09-1997'
// }
