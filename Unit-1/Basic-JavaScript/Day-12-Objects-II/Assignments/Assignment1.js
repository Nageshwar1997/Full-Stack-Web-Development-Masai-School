// ## **Problem-1 User Age Filter**

// - Given a list of user data with name and age, create a list of key-value pairs from the input
// - From the generated data, print the users whose age is more than 30


let arr = [
  {
    grade: "V",
    students: [
      { name: "Nrupul", marks: [10, 20, 30] },
      { name: "Prateek", marks: [20, 30, 40] }
    ]
  },
  {
    grade: "VI",
    students: [
      { name: "Aman", marks: [10, 20, 30] },
      { name: "Albert", marks: [20, 30, 40] }
    ]
  },
  {
    grade: "VII",
    students: [
      { name: "Yogesh", marks: [10, 20, 30] },
      { name: "Sandhya", marks: [20, 30, 40] }
    ]
  }
];

// console.log(arr[0].students[0].marks.length); // 3

for (let i = 0; i < arr.length; i++) {
  let obj = arr[i];
  let max = -Infinity;
  let person = "";
  for (let j = 0; j < obj.students.length; j++) {
    let sum = 0;
    for (let k = 0; k < obj.students[j].marks.length; k++) {
      sum += obj.students[j].marks[k];
    }
    if(sum > max){
      max = sum;
      person = obj.students[j].name;
      
    }
  }
  console.log(obj.grade + "-" + person + "-" + max);
}
// V-Prateek-90
// VI-Albert-90
// VII-Sandhya-90
