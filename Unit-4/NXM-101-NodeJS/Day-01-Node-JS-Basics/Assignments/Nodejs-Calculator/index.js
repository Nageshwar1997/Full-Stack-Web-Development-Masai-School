// index.js
//  import the crypto module
const crypto = require("crypto");

const {
  addition,
  subtraction,
  multiplication,
  division,
  sin,
  cos,
  tan,
} = require("./functions.js");

//  get a commands using process.argv
const args = process.argv.slice(2);
const operation = args[0];
const numbers = args.slice(1).map(Number);

// complete the  function

switch (operation) {
  case "add": {
    if (numbers.length <= 0) {
      console.log("Pass arguments correctly");
      break;
    }
    console.log(`Addition of ${numbers.join(" + ")} = ${addition(numbers)}`);
    break;
  }

  case "sub": {
    if (numbers.length < 1) {
      console.log("Pass arguments correctly");
      break;
    }
    console.log(
      `Subtraction of ${numbers.join(" - ")} = ${subtraction(numbers)}`
    );
    break;
  }

  case "mult": {
    if (numbers.length < 1) {
      console.log("Pass arguments correctly");
      break;
    }
    console.log(
      `Multiplication of ${numbers.join(" * ")} = ${multiplication(numbers)}`
    );
    break;
  }
  case "div": {
    if (numbers.length < 1) {
      console.log("Pass arguments correctly");
      break;
    }
    console.log(`Division of ${numbers.join(" / ")} = ${division(numbers)}`);
    break;
  }
  case "sin": {
    if (numbers.length < 1) {
      console.log("Pass arguments correctly");
      break;
    }
    if (numbers.length === 1) {
      console.log(`Sine of ${numbers[0]} = ${sin(numbers)}`);
      break;
    }
    console.log(
      `Sine of [ ${numbers.join(", ")} ] = [ ${sin(numbers).join(", ")} ]`
    );
    break;
  }
  case "cos": {
    if (numbers.length < 1) {
      console.log("Pass arguments correctly");
      break;
    }
    if (numbers.length === 1) {
      console.log(`Cosec of ${numbers[0]} = ${cos(numbers)}`);
      break;
    }
    console.log(
      `Cosec of [ ${numbers.join(", ")} ] = [ ${cos(numbers).join(", ")} ]`
    );
    break;
  }
  case "tan": {
    if (numbers.length < 1) {
      console.log("Pass arguments correctly");
      break;
    }
    if (numbers.length === 1) {
      console.log(`Tangent of ${numbers[0]} = ${tan(numbers)}`);
      break;
    }
    console.log(
      `Tangent of [ ${numbers.join(", ")} ] = [ ${tan(numbers).join(", ")} ]`
    );
    break;
  }
  case "random":
    {
      if (numbers.length < 1) {
        console.log("Pass arguments correctly");
        break;
      }
      if (numbers.length === 1) {
        const randomByte = crypto.randomBytes(numbers[0]).toString("binary");
        console.log(`Random bytes of length ${numbers[0]} = ${randomByte}`); // ë♥êÞ
        break;
      } else {
        console.log(
          `Invalid number of arguments for random operation it requires only one argument`
        );
      }
    }
    break;
  default: {
    console.log("Invalid operation");
    break;
  }
}
