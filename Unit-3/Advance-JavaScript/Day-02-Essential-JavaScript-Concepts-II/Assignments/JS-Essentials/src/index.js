function studentData(firstName, lastName, age, marksArray, ...hobbies) {

  let stdDataObj = {};
  stdDataObj.fullName = `${firstName} ${lastName}`;
  stdDataObj.age = age;
  stdDataObj.hobbies = hobbies;
  stdDataObj.getInfo = function () {
    return `${this.fullName}'s age is ${this.age}.`;
  };
  stdDataObj.getResult = function () {
    let totalMarks = 0;
    for (let mark of marksArray) {
      totalMarks += mark;
    }

    let averageMarks = Math.floor(totalMarks / marksArray.length);

    return (averageMarks < 50) ? "Result: FAIL" : "Result: PASS";
  };
  return stdDataObj;
};

export {
  studentData
}