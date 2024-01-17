class Person {
    // Constructor Method
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // constructor Properties
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let p1 = new Person("John", 30);
console.log(p1);
p1.sayHello();

// Inheritance Using ES6 Classes

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    teach() {
        console.log(`${this.name} is now teaching ${this.subject}`);
    }
}

let t1 = new Teacher("John", 30, "Math");
console.log(t1);
t1.teach();


console.log(t1.__proto__ === Teacher.prototype);
console.log(Teacher.prototype.__proto__ === Person.prototype);