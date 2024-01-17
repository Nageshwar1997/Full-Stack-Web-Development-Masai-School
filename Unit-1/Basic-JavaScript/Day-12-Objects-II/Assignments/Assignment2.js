let grades = [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
];

// console.log(grades[0]);
for(let i=0; i<grades.length; i++){
  
  let obj = grades[i];
  let highScore = -Infinity;
  let scorerName = "";
  let totalMarks = 0;
  
  for(let student in grades[i].students){
    let studentName = grades[i].students[student];
    let stdTotMarks = 0;

    for(let mark in students.marks){
      stdTotMarks += students.marks[mark];
    }
    totalMarks += stdTotMarks;

    if(stdTotMarks > highScore){
      highScore = stdTotMarks;
      scorerName = studentName;
    }
  }
  console.log(obj.grade);
}



// function printSum(marks){
//   let sum = 0;
//   for(let i=0; i<marks.length; i++){
//     sum+=marks[i];
//   }
//   return sum;
// }