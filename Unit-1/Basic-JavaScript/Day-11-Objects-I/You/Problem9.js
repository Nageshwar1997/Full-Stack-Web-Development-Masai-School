let obj={
  name:"Nageshwar",
  age:26,
  DOB:"01-09-1997",
  gender:"Male",
  city:"Nanded",
  hobbies:"Coding",
  friends:["Mahesh","Vishnu","Karan"]
}

// Access the array data inside the object

// 1. Bracket Notation
console.log(obj["friends"][0]); // Mahesh
console.log(obj["friends"][1]); // Vishnu
console.log(obj["friends"][2]); // Karan

// 2. Dot Notation
console.log(obj.friends[0]); // Mahesh
console.log(obj.friends[1]); // Vishnu
console.log(obj.friends[2]); // Karan