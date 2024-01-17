let obj={
  name:"Nageshwar",
  age:26,
  DOB:"01-09-1997",
  gender:"Male",
  city:"Nanded",
  hobbies:"Coding",
  marks:[10,20,30]
};

// Find the total marks
let total = 0;
for(let i=0; i<obj.marks.length; i++){
  total += obj.marks[i];
}
console.log("Total Marks of "+obj["name"]+"is " + total); // Total Marks of Nageshwaris 60