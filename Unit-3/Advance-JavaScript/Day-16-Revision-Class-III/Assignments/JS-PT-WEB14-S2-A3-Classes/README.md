# JS-PT-WEB14-S2-A3

#### Classes

## Submission Instructions [Please note]

## Installation

```
npm install --engine-strict
```

## Test

```
npm test
```

## Test (Watch mode)

```
npm test -- --watchAll
```

## Maximum marks - 28

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces, for example /js-201 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## file structure

most of your work would happen in the 
 - `src/question1.js`

<span style="color: green"> Read the test results carefully, they may provide you with some extra information.</span>

### Test cases

```
✅ able to submit the app - 1 mark (minimum score)

--- test cases for Person CF ---
✅ Constructor properties - 1 mark
✅ Static method greet - 1 mark
✅ Prototype method working - 1 mark

--- test cases for Employee CF ---
✅ salary is private field - 1 mark
✅ Constructor properties - 1 mark
✅ Negative salary validation - 1 mark
✅ Positive salary validation - 1 mark
✅ Prototype method working - 1 mark

--- test cases for Manager CF ---
✅ Static method getRole - 1 mark
✅ Prototype method working - 1 mark

--- test cases for Executive CF ---
✅ Check Constructor properties and private fields - 1 mark
✅ Negative bonus validation - 1 mark
✅ Positive bonus validation - 1 mark

--- test cases for Bank and Accounts CF ---
✅ Bank constructor properties - 1 mark
✅ Account constructor properties - 1 mark
✅ SavingsAccount constructor properties - 1 mark
✅ SavingsAccount interest rate setter - 1 mark
✅ Account inheritance from Bank - 1 mark
✅ SavingsAccount inheritance from Account - 1 mark

--- test cases for Animal Hierarchy CF ---
✅ Lion constructor properties - 1 mark
✅ Cow constructor properties - 1 mark
✅ Eagle constructor properties - 1 mark
✅ Sparrow constructor properties - 1 mark
✅ Lion inheritance from Mammal - 1 mark
✅ Cow inheritance from Mammal - 1 mark
✅ Eagle inheritance from Bird - 1 mark
✅ Sparrow inheritance from Bird - 1 mark

```
_<span style=" color: red">Note: all the return statements/ messages while creating methods are case sensitive please try to follow as it is you can check using a running test case otherwise you will lose marks for a particular part</span>._

<h3 style="color:#215dc8">
Question 1:- Class
</h3>

Create a class named `Person` with a constructor that takes `name` and `age` as parameters.

Add a static method called `greet` that returns a string `Hello there!`.

Add method to the prototype called canSleep that will return `<name> is sleeping` . Here name should be the name of the person

We should be able to achieve the following output if we create any object from the class you created.
```
const person = new Person("John", 30);
console.log(Person.greet());//Hello there!
console.log(person.name);//John
console.log(person.age);//30
console.log(person.canSleep());//John is sleeping
```

<h3 style="color:#215dc8">
Question 2:- Create a class named Employee that inherits from Person.
</h3>
Create a class named Employee that inherits from Person.

Add a private property called `salary` and create a getter and setter for it.

The getter should return the salary, and the setter should validate that the salary is a positive number if it is a positive number then update the salary or print `Salary must be a positive number.` in console.

Add method to the prototype called `working` that will return `<name> is working` . Here name should be the name of the person

<h3 style="color:#215dc8">
Question 3:- Create a class named Manager that inherits from Employee.
</h3>

Create a class named `Manager` that inherits from `Employee`.

Add a static method called `getRole` that returns the string `Manager`.

Add method to the prototype called `managing` that will return `<name> is managing` . Here name should be the name of the person

<h3 style="color:#215dc8">
Question 4:-Class Definition: Executive.
</h3>

Create a class named `Executive` that extends the existing `Manager` class

The `Executive` class should have a private field `bonus` to store the `bonus` specific to the executive.

Implement a getter method for the bonus property. This getter should return the value of the `bonus` field.

Implement a setter method for the bonus property. This setter should update the `bonus` field only if the provided value is greater than 0.

<h3 style="color:#215dc8">
Question 5:-Problem: Inheritance - Bank, Account, and SavingsAccount Classes
</h3>

<h4>Class Definition: Bank</h4>

Create a class named Bank that represents a bank. The Bank class should have a private field `name` to store the name of the bank.

The Bank class constructor should accept one parameter: name (a string). It should use this parameter to initialize the `name` field.

Implement a getter method called `Name` within the Account class. This method should return the value of the `name` field.


<h4>Class Definition: Account</h4>

Create a class named Account that extends the Bank class. The Account class should have a private field balance to store the account balance.

<h4>Getter: get Balance</h4>

Implement a getter method called Balance() within the Account class. This method should return the value of the balance field.

<h4>Class Definition: SavingsAccount</h4>

Create a class named SavingsAccount that extends the Account class. The SavingsAccount class should have a private field #interestRate to store the interest rate associated with the savings account.

<h4>Getter and Setter: interestRate</h4>

Implement a getter method (`interestRate`) for the interestRate property within the SavingsAccount class. This getter should return the value of the `interestRate` field.

Implement a setter method(`interestRate`) for the interestRate property. This setter should update the `interestRate` field with the provided value.



<h3 style="color:#215dc8">
Question 6:-Problem: Inheritance - Animal Hierarchy
</h3>


```
           Animal
              |
        -------------
        |           |
      Mammal       Bird
        |           |
   ------------   -------
   |          |   |     |
  Lion      Cow  Eagle  Sparrow
 

```

<h4>Class Definition: Animal</h4>

Create a class named Animal that serves as the base class for various animal types. The Animal class should have a private field `type` to store the type of the animal.

<h4>Getter: Type</h4>

Implement a getter method called `Type()` within the Animal class. This method should return the value of the `type` field.

<h4>Class Definition: Mammal</h4>

Create a class named `Mammal` that extends the Animal class. The Mammal class should represent mammals in the animal hierarchy.

<h3>Mammal Constructor</h3>
The Mammal class constructor should not require any parameters. It should call the parent class constructor using super("Mammal") to initialize the #type field inherited from the Animal class.

<h3>Class Definition: Bird</h3>

Create a class named `Bird` that extends the `Animal` class. The Bird class should represent birds in the animal hierarchy.(The type of the Bird should be `Bird`)


<h3>Class Definition: Lion</h3>

Create a class named `Lion` that extends the `Mammal` class. The `Lion` class should represent `lions` in the animal hierarchy.

<h3>Lion Constructor</h3>

The Lion class constructor should not require any parameters. It should call the parent class constructor using super() to initialize the #type field inherited from the Mammal class. Additionally, the constructor should have a private field #maneColor to store the color of the lion's mane(The color should be "Brown" be default).

<h3>Getter and Setter: maneColor</h3>

Implement a getter method called `maneColor` within the Lion class. This method should return the value of the `maneColor` field.

Implement a setter method called `maneColor` within the Lion class. This setter should update the `maneColor` field with the provided value.

*****
<h3>Class Definition: Cow</h3>

Create a class named `Cow` that extends the `Mammal` class. The Cow class should represent cows in the animal hierarchy.

<h3>Cow Constructor</h3>

The Cow class constructor should not require any parameters. It should call the parent class constructor using super() to initialize the `type` field inherited from the Mammal class. Additionally, the constructor should have a private field `milkProduction` to store the milk production level of the cow. (default value of milkProduction is "High")

<h3>Getter and Setter: milkProduction</h3>

Implement a getter method called `MilkProduction` within the Cow class. This method should return the value of the `milkProduction` field.

Implement a setter method called `MilkProduction` within the Cow class. This setter should update the `milkProduction` field with the provided value.


<h3>Class Definition: Eagle</h3>

Create a class named `Eagle` that extends the `Bird` class. The Eagle class should represent eagles in the animal hierarchy.

<h3>Eagle Constructor</h3>

The Eagle class constructor should not require any parameters. It should call the parent class constructor using super() to initialize the #type field inherited from the Bird class. Additionally, the constructor should have a private field `wingspan` to store the wingspan of the eagle. (The default value will be `Large`)

<h3>Getter and Setter: wingspan</h3>

Implement a getter method called `Wingspan` within the Eagle class. This method should return the value of the `wingspan` field.

Implement a setter method called `Wingspan` within the Eagle class. This setter should update the `wingspan` field with the provided value.

<h3>Class Definition: Sparrow</h3>

Create a class named `Sparrow` that extends the `Bird` class. The Sparrow class should represent sparrows in the animal hierarchy.

<h3>Sparrow Constructor</h3>

The Sparrow class constructor should not require any parameters. It should call the parent class constructor using super() to initialize the `type` field. Additionally, the constructor should have a private field `wingspan` to store the wingspan of the sparrow(by default the value should be `Small`).

<h3>Getter and Setter: wingspan</h3>

Implement a getter method called `wingspan` within the Sparrow class. This method should return the value of the `wingspan` field.

Implement a setter method called `wingspan` within the Sparrow class. This setter should update the `wingspan` field with the provided value.

#### The Problem is tested on CP

<img src="" height="500px" />

### General guidelines

- Example inputs are just for example. The tests may check the functions by invoking them with different inputs of the same shape.
- Before writing a single line of code please read the problem statement very carefully.
- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
