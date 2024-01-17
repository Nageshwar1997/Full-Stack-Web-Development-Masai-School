// Code 3: updating the data is alredy present in the given object

let obj={
  name:"Nageshwar",
  gender:"Male",
  city:"Nanded",
  hobbies:"Coding",
  age:26
};

console.log(obj);

/* {
  name: 'Nageshwar',
  gender: 'Male',
  city: 'Nanded',
  hobbies: 'Coding',
  age: 26
} */

obj.age = 27; // updating the value of that key

console.log(obj);

/* {
  name: 'Nageshwar',
  gender: 'Male',
  city: 'Nanded',
  hobbies: 'Coding',
  age: 27
} */