// update already present Information in Objects

let obj={
  name:"Nageshwar",
  age:26,
  DOB:"01-09-1997",
  gender:"Male",
  city:"Nanded",
  hobbies:"Coding",
  marriage:true
}

// 1. Bracket Notation
obj["marriage"]=false; // it will update the marriage value

// 2. Dot Notation
obj.age=25; // it will update age value

console.log(obj);
/* {
  name: 'Nageshwar',
  age: 25,
  DOB: '01-09-1997',
  gender: 'Male',
  city: 'Nanded',
  hobbies: 'Coding',
  marriage: false
} */