// Delete Information in Objects

let obj={
  name:"Nageshwar",
  age:26,
  DOB:"01-09-1997",
  gender:"Male",
  city:"Nanded",
  hobbies:"Coding",
  marks:[10,20,30]
}
// Brackt Notation --> delete object["key"]

delete obj["marks"]; // it will delete key and value


// Dot Notation --> delete object.key;

delete obj.age; // it will delete key and value

console.log(obj);
// {
//   name: 'Nageshwar',
//   DOB: '01-09-1997',
//   gender: 'Male',
//   city: 'Nanded',
//   hobbies: 'Coding'
// }