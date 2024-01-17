// Create an object with the following Functionality
// 1. Ability to add 3 students details and their marks in 3 subjects 
// 2. method to find the student name with least total ----> Using Function
// 3. method to find the student name with highest total ----> Using Function


let studentDetails = {
  data: [],

  // 1. Ability to add 3 students details and their marks in 3 subjects 
  addStudent: function(name, physics, chemistry, mathematics) {
    let obj = {};
    obj.Name = name;
    obj["Phy"] = physics;
    obj.Chem = chemistry;
    obj["Math"] = mathematics;

    this.data.push(obj);
  },
  // 2. method to find the student name with least total ----> Using Function
  leastTotal: function() {
    let lowerScore = +Infinity;
    let lowStudent = undefined; // null
    for (let i = 0; i < this.data.length; i++) {
      let totalMarks = (this.data[i].Phy) + (this.data[i].Chem) + (this.data[i].Math);

      if (totalMarks < lowerScore) {
        lowerScore = totalMarks;
        lowStudent = this.data[i].Name;
      }
    }
    console.log(lowStudent, "Score:", lowerScore);
  },
  // 3. method to find the student name with highest total ----> Using Function
  highTotal: function() {
    let highStudent = null; // undefined
    let highScore = -Infinity;

    for (let j = 0; j < this.data.length; j++) {
      let totalMarks = this.data[j].Phy + this.data[j].Chem + this.data[j].Math;

      if (totalMarks > highScore) {
        highScore = totalMarks;
        highStudent = this.data[j].Name;
      }
    }
    console.log(highStudent, "Score:", highScore);
  }
}
studentDetails.addStudent("Nageshwar", 85, 84, 83);
studentDetails.addStudent("Manjusha", 86, 85, 82);
studentDetails.addStudent("Dhanashree", 81, 82, 83);
studentDetails.leastTotal(); // Dhanashree Score: 246
studentDetails.highTotal(); // Manjusha Score: 253


// console.log(studentDetails.data);
/* 
[
  { Name: 'Nageshwar', Phy: 85, Chem: 84, Math: 83 },
  { Name: 'Manjusha', Phy: 86, Chem: 85, Math: 82 },
  { Name: 'Dhanashree', Phy: 81, Chem: 82, Math: 83 }
] 
*/