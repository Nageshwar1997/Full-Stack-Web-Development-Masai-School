import {
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
} from "../question1";
//import { Mammal2, createHuman, createEmployee } from "../question2";

global.score = 1;

describe("Problem 1: Class Person", () => {
  let person;

  beforeAll(() => {
    person = new Person("John", 30);
  });

  test("Constructor properties", () => {
    expect(person.name).toBe("John");
    expect(person.age).toBe(30);
    global.score += 1;
  });

  test("Static method greet", () => {
    expect(Person.greet()).toBe("Hello there!");
    global.score += 1;
  });
  test("Prototype method canSleep", () => {
    // Check if canSleep is added to the prototype (not a direct instance property)
    expect(Object.getPrototypeOf(person).hasOwnProperty("canSleep")).toBe(true);
    expect(person.hasOwnProperty("canSleep")).toBe(false);
    expect(person.canSleep()).toBe("John is sleeping");
    global.score += 1; // Marks: 2 for the prototype method test
  });

  // Marks: 2
});

describe("Problem 2: Employee", () => {
  let employee;

  beforeAll(() => {
    employee = new Employee("Alice", 25, 60000);
  });

  test("salary is private field", () => {
    expect(employee.salary).toBe(60000);
    expect(employee.hasOwnProperty("salary")).toBe(false);
    expect(employee.hasOwnProperty("#salary")).toBe(false);
    global.score += 1;
  });

  test("Constructor properties", () => {
    expect(employee.name).toBe("Alice");
    expect(employee.age).toBe(25);
    expect(employee.salary).toBe(60000);
    global.score += 1;
  });

  test("Negative salary validation", () => {
    const employee = new Employee("Bob", 30, 60000);
    employee.salary = -5000;
    expect(employee.salary).toBe(60000);
    global.score += 1;
  });

  test("Positive salary validation", () => {
    employee.salary = 1234;
    employee.salary = -1234;
    expect(employee.salary).toBe(1234);
    global.score += 1;
  });

  test("Prototype method working", () => {
    expect(Object.getPrototypeOf(employee).hasOwnProperty("working")).toBe(
      true
    );
    expect(employee.hasOwnProperty("working")).toBe(false);
    expect(employee.working()).toBe("Alice is working");
    global.score += 1; // Marks: 1 for the prototype method test
  }); // Marks: 4
});

describe("Problem 3: Manager", () => {
  test("Static method getRole", () => {
    expect(Manager.getRole()).toBe("Manager");
    global.score += 1;
  });
  test("Prototype method working", () => {
    let manager = new Manager("Mac", 30, 123456);
    expect(Object.getPrototypeOf(manager).hasOwnProperty("managing")).toBe(
      true
    );
    expect(manager.hasOwnProperty("managing")).toBe(false);
    expect(manager.managing()).toBe("Mac is managing");
    global.score += 1; // Marks: 1 for the prototype method test
  });

  // Marks: 1
});

describe("Problem 4: Executive", () => {
  let executive;

  beforeAll(() => {
    executive = new Executive("Carol", 40, 10000, 2000);
  });

  test("Check Constructor properties and private fields", () => {
    expect(executive.name).toBe("Carol");
    expect(executive.age).toBe(40);
    expect(executive.salary).toBe(10000);
    expect(executive.hasOwnProperty("bonus")).toBe(false);
    expect(executive.hasOwnProperty("#bonus")).toBe(false);
    expect(
      Object.getPrototypeOf(Executive.prototype) === Manager.prototype
    ).toBe(true);
    global.score += 1;
  });

  test("Negative bonus validation", () => {
    executive.bonus = -1234;
    expect(executive.bonus).toBe(2000); // Bonus won't change due to validation
    global.score += 1;
  });

  test("Positive bonus validation", () => {
    executive.bonus = 3000;
    executive.bonus = -3000;
    expect(executive.bonus).toBe(3000);
    global.score += 1;
  });

  // Marks: 3
});

describe("Problem 5: Bank and Accounts", () => {
  let bank, account, savingsAccount;

  beforeAll(() => {
    bank = new Bank("MyBank");
    account = new Account("Alice", 1000);
    savingsAccount = new SavingsAccount("Bob", 2000, 0.05);
  });

  test("Bank constructor properties", () => {
    expect(bank.Name).toBe("MyBank");
    global.score += 1;
  });

  test("Account constructor properties", () => {
    expect(account.Balance).toBe(1000);
    global.score += 1;
  });

  test("SavingsAccount constructor properties", () => {
    expect(savingsAccount.Name).toBe("Bob");
    expect(savingsAccount.Balance).toBe(2000);
    expect(savingsAccount.interestRate).toBe(0.05);
    global.score += 1;
  });

  test("SavingsAccount interest rate setter", () => {
    expect(savingsAccount.Name).toBe("Bob");
    savingsAccount.interestRate = 0.1;
    expect(savingsAccount.interestRate).toBe(0.1);
    global.score += 1;
  });

  test("Account inheritance from Bank", () => {
    expect(account instanceof Bank).toBe(true);
    global.score += 1;
  });

  test("SavingsAccount inheritance from Account", () => {
    expect(savingsAccount instanceof Account).toBe(true);
    global.score += 1;
  });

  // Marks: 6
});

describe("Problem 6: Animal Hierarchy", () => {
  let lion, cow, eagle, sparrow;

  beforeAll(() => {
    lion = new Lion();
    cow = new Cow();
    eagle = new Eagle();
    sparrow = new Sparrow();
  });

  test("Lion constructor properties", () => {
    expect(lion.Type).toBe("Mammal");
    expect(lion.maneColor).toBe("Brown");
    global.score += 1;
  });

  test("Cow constructor properties", () => {
    expect(cow.Type).toBe("Mammal");
    expect(cow.MilkProduction).toBe("High");
    global.score += 1;
  });

  test("Eagle constructor properties", () => {
    expect(eagle.Type).toBe("Bird");
    expect(eagle.Wingspan).toBe("Large");
    global.score += 1;
  });

  test("Sparrow constructor properties", () => {
    expect(sparrow.Type).toBe("Bird");
    expect(sparrow.wingspan).toBe("Small");
    global.score += 1;
  });

  test("Lion inheritance from Mammal", () => {
    expect(lion instanceof Mammal).toBe(true);
    global.score += 1;
  });

  test("Cow inheritance from Mammal", () => {
    expect(cow instanceof Mammal).toBe(true);
    global.score += 1;
  });

  test("Eagle inheritance from Bird", () => {
    expect(eagle instanceof Bird).toBe(true);
    global.score += 1;
  });

  test("Sparrow inheritance from Bird", () => {
    expect(sparrow instanceof Bird).toBe(true);
    global.score += 1;
  });
  // Marks: 8
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
