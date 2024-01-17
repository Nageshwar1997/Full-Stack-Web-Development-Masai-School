// Code 18 : Given marks, find the total marks

let marks = [10, 20, 30, 40, 50]

let total = 0; // let total=null;

for (let i = 0; i < marks.length; i++) {
  total += marks[i];
}
console.log("Total Marks :", total); // Total Marks : 150

// Code 19 : Find the average of all total marks.

let average = Math.floor(total / marks.length);
console.log("Average :", average); // Average : 30

// Code 20 : Given marks, find the maximum marks

let maxMarks = -Infinity;
for (let i = 0; i < marks.length; i++) {
  if (marks[i] > maxMarks) {
    maxMarks = marks[i];
  }
}
console.log("Maximum Marks :", maxMarks); // Maximum Marks : 50