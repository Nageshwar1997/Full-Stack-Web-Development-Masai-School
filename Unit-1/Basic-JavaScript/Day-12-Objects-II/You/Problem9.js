// let student1={name: "Nageshwar", age:25, location:"Nanded"};

// let student2={name: "Manjusha", age:23, location:"Parbhani"};

// let student3={name: "Dhanashree", age:21, location:"Chandrapur"};


// How to access the information in object inside array
let students = [
  { name: "Nageshwar", age: 25, location: "Nanded" },
  { name: "Manjusha", age: 23, location: "Parbhani" },
  { name: "Dhanashree", age: 21, location: "Chandrapur" }
];

console.log(students[0].name); // Nageshwar
console.log(students[1]["age"]); // 23
console.log(students[2].location); // Chandrapur

console.log(students[0]); // { name: 'Nageshwar', age: 25, location: 'Nanded' }
console.log(students[1]); // { name: 'Manjusha', age: 23, location: 'Parbhani' }
console.log(students[2]); // { name: 'Dhanashree', age: 21, location: 'Chandrapur' }

