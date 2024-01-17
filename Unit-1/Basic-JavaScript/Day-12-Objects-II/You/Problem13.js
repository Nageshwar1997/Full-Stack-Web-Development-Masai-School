/* convert this below two arrays into a given format and print the array strength.
[
  { name: 'Nageshwar', score: 95 },
  { name: 'Manjusha', score: 97 },
  { name: 'Dhanashree', score: 93 },
  { name: 'Rutuja', score: 94 }
] */

// Hint:-->
// 1. we need empty array
// 2. we need empty object
// 3. Run for loop
// 4. push every object into the array

let student = ["Nageshwar", "Manjusha", "Dhanashree", "Rutuja"];

let score = [95, 97, 93, 94];


let result = []; // empty array

for (let i = 0; i < student.length; i++) {

  let obj = {}; // empty object

  if (obj[student[i]] == undefined) {
    obj["name"] = student[i];
  }
  if (obj[score[i]] == undefined) {
    obj["score"] = score[i];
  }
  result.push(obj); // pushing every object into array
}
console.log(result);

console.log(result.length); // 4