//  import the crypto module

const crypto = require("crypto");

//  get a commands using process.argv
// const nodeVersion = process.argv[0];
// const moduleName = process.argv[1];

const arguments = process.argv.slice(2);

const operation = arguments[0];

const numbers = arguments.slice(1).map(Number);

// complete the  function

switch (operation) {
  case "add": {
    const addition = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(`Addition of ${numbers.join(" + ")} is ${addition}`);
    break;
  }
  case "sub": {
    const subtraction = numbers.reduce((acc, curr) => acc - curr);
    console.log(`Subtraction of ${numbers.join(" - ")} is ${subtraction}`);
    break;
  }
  case "mult": {
    const multiplication = numbers.reduce((acc, curr) => acc * curr, 1);
    console.log(
      `Multiplication of ${numbers.join(" * ")} is ${multiplication}`
    );
    break;
  }
  case "divide": {
    const division = numbers
      .slice(1)
      .reduce((acc, curr) => acc / curr, numbers[0]);
    console.log(`Division of ${numbers.join(" / ")} is ${division}`);
    break;
  }
  case "sin": {
    if (numbers.length === 1) {
      const sin = Math.sin(numbers[0]);
      console.log(`sin(${numbers[0]}) = ${sin}`);
      break;
    } else {
      console.log(
        "Invalid number of arguments for sin operation it requires only one argument"
      );
    }
    break;
  }
  case "cos": {
    if (numbers.length === 1) {
      const cos = Math.cos(numbers[0]);
      console.log(`cos(${numbers[0]}) = ${cos}`);
      break;
    } else {
      console.log(
        `Invalid number of arguments for cos operation it requires only one argument`
      );
    }
    break;
  }
  case "tan": {
    if (numbers.length === 1) {
      const tan = Math.tan(numbers[0]);
      console.log(`tan(${numbers[0]}) = ${tan}`);
      break;
    } else {
      console.log(
        `Invalid number of arguments for tan operation it requires only one argument`
      );
    }
    break;
  }
  case "random": {
    if (numbers.length === 1) {
      const randomByte = crypto.randomBytes(numbers[0]).toString("binary");
      console.log(`Random bytes of length ${numbers[0]} = ${randomByte}`); // ë♥êÞ
      break;
    } else {
      console.log(
        `Invalid number of arguments for random operation it requires only one argument`
      );
    }
    break;
  }
  default: {
    console.log("Invalid operation");
  }
}
