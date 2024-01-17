let student = {
    name: "Nageshwar",
    subject: "JavaScript",
};

function sayHi(age, type) {
    console.log(`Hello, my name is ${this.name}.\nI am learning ${this.subject}.\nmy age is ${age}.\nI'm learning ${type}`);
}

sayHi.call(student, 26, "Full Stack Web Development");
// Hello, my name is Nageshwar.
// I am learning JavaScript.
// my age is 26.
// I'm learning Full Stack Web Development