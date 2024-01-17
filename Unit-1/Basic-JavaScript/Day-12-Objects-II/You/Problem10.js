// access the data in object inside array using for loop

let students = [
  { name: "Nageshwar", age: 25, location: "Nanded" },
  { name: "Manjusha", age: 23, location: "Parbhani" },
  { name: "Dhanashree", age: 21, location: "Chandrapur" }
];

for (let i = 0; i < students.length; i++) {
  if (students[i].name == "Nageshwar") { // Dot Notation
    console.log(students[i]); // { name: 'Nageshwar', age: 25, location: 'Nanded' }
  }
  if (students[i]["age"] == 23) { // Bracket Notation
    console.log(students[i]); // { name: 'Manjusha', age: 23, location: 'Parbhani' }
  }
  if (students[i].location == "Chandrapur") { // Dot Notation
    console.log(students[i]); // { name: 'Dhanashree', age: 21, location: 'Chandrapur' }
  }
}