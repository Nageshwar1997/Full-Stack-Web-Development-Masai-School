class Creature {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating...`);
    }
}

class Humans extends Creature {
    constructor(name) {
        super(name);
    }
    sleep() {
        console.log(`${this.name} is sleeping...`);
    }
}

class Employees extends Humans {
    constructor(name, salary) {
        super(name);
        this.salary = salary;
    }

    ChangeSalary(value) {
        this.salary = value;
    }

    displaySalary() {
        console.log(`${this.name}'s salary is    ${this.salary}`);
    }
}

let e1 = new Employees("Vivek", "500");
console.log(e1)
e1.displaySalary();
e1.ChangeSalary(1000);
e1.displaySalary();