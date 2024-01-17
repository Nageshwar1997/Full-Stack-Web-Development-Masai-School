let student = {
    name: "Nageshwar",
    subject: "JavaScript",
};

function sayHi() {
    console.log(`Hello, my name is ${this.name}. I am learning ${this.subject}`);
}

student.sayHello = sayHi;

student.sayHello(); // Hello, my name is Nageshwar. I am learning JavaScript
// console.log(student); // { name: 'Nageshwar', subject: 'JavaScript', sayHi: [Function: sayHi] 
