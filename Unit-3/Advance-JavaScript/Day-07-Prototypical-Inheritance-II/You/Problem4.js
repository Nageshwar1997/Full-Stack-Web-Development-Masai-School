// Person
//   name
//   age
//   increaseAge() // will increase the age by 1
//   sayName() // return 'my name is <name>'
  
// Employee extends Person
//   salary
//   increaseSalary(amt)
//   decreaseSalary(amt)
//   introduce() // return `my name is <name>, I am <age> years old & my salary is <salary>`

function Person(name, age) {
    this.name = name;
    this.age = age;
}


Person.prototype.sayName = function () {
    console.log(`my name is ${this.name}`);
}

Person.prototype.increaseAge = function () {
    return this.age += 1;
}

let p1 = new Person("Nageshwar", 21);
console.log(p1);
console.log(p1.increaseAge());


Object.setPrototypeOf(Employee.prototype, Person.prototype);

Employee.prototype.increaseSalary = function (amt) {
    return this.salary += amt;
}

Employee.prototype.decreaseSalary = function (amt) {
    return this.salary -= amt;
}

Employee.prototype.introduce = function () {
    console.log(`my name is ${this.name}, I am ${this.age} years old & my salary is ${this.salary}`);
}
function Employee(name, age, salary) {
    Person.call(this, name, age);
    this.salary = salary;
}

let e1 = new Employee("Nageshwar", 21, 20000);

console.log(e1);
e1.sayName()
console.log(e1.increaseAge());
console.log(e1.increaseSalary(5000));
console.log(e1.decreaseSalary(1000));
e1.introduce()