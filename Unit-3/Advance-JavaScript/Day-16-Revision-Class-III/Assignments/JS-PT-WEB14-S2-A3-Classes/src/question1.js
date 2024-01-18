// ## Problem 1
// Create a class named Person with a constructor that takes name and age as parameters. The object created with class Person should have keys as name and age.
// Add a static method called greet that returns a string "Hello there!".

class Person {

}
// Example usage
// const person = new Person("John", 30);
// console.log(Person.greet());//Hello there!
// console.log(person.name);//John
// console.log(person.age);//30
// console.log(person.greet());//Hello there!

// ## Problem 2:- Create a class named Employee that inherits from Person.
// Add a private property called salary and create a getter and setter for it.
// The getter should return the salary, and the setter should validate that the salary is a positive number if it is a positive number then update the salary or print `Salary must be a positive number.` in console.

class Employee{

}
// Example usage
// const employee = new Employee("Alice", 25, 5000);
// console.log(employee.hasOwnProperty("salaray"));
// console.log(employee.salary); // Output: 5000
// employee.salary = -1234; // Salary must be a positive number.
// employee.salary = 1234;
// console.log(employee.salary); // Output: 1234

// ## Problem 3
// Create a class named Manager that inherits from Employee.
// Add a static method called getRole that returns the role of "Manager".

class Manager {

}
// Example usage
// const manager = new Manager("Bob", 35, 8000);
// console.log(Manager.getRole());//"Manager"

// ## Problem 4
// Create a class named Executive that inherits from Manager.
// Add a private property called bonus and create a getter and setter for it.
// The getter should return the bonus, and the setter should validate that the bonus is a positive number(it should update only when bonus in positive number).

class Executive {
  
}


// Example usage
// const executive = new Executive("Carol", 40, 10000, 2000);
// console.log(executive.bonus); // 2000
// executive.bonus=-1234;
// console.log(executive.bonus); // Will not set the negative value due to the setter validation.
// executive.bonus=1234;
// console.log(executive.bonus);1234

// ## Problem 5 - refer to readme

class Bank {

}

class Account {

}

class SavingsAccount {

}

// Example usage
// const savingsAccount = new SavingsAccount("SBI", 5000, 0.05);
// console.log(savingsAccount)
// console.log(savingsAccount.Balance); // 5000
// console.log(savingsAccount.interestRate); // 0.05
// savingsAccount.interestRate = 0.06; // Setting interestRate using SavingsAccount setter
// console.log(savingsAccount.interestRate); // 0.06

// ## Problem 6 refer to readme

class Animal {

}

class Mammal {

}

class Bird {

}

class Lion {

}

class Cow {

}

class Eagle {

}

class Sparrow {

}

// Example usage
// const lion = new Lion();
// const cow = new Cow();
// const eagle = new Eagle();
// const sparrow = new Sparrow();
// lion.ManeColor="Golden";
// console.log(lion.ManeColor); // Output: Golden
// console.log(lion.Type); // Output: Mammal

export {
  Person,
  Employee,
  Manager,
  Executive,
  Bank,
  Account,
  SavingsAccount,
  Sparrow,
  Bird,
  Eagle,
  Mammal,
  Cow,
  Lion,
  Animal,
};
