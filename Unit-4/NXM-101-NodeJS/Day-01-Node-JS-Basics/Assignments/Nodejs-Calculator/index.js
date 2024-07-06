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
    if (numbers.length > 0) {
      console.log(addition(numbers));
      break;
    }
  }

  case "sub": {
    if (numbers.length > 0) {
      console.log(subtraction(numbers));
      break;
    }
  }

  case "mult": {
    if (numbers.length > 0) {
      console.log(multiplication(numbers));
      break;
    }
  }
  case "divide": {
    if (numbers.length === 2) {
      console.log(division(numbers[0], numbers[1]));
      break;
    }
  }
  case "sin": {
    if (numbers.length === 1) {
      console.log(sin(numbers[0]));
      break;
    }
  }
  case "cos": {
    if (numbers.length === 1) {
      console.log(cos(numbers[0]));
      break;
    }
  }
  case "tan": {
    if (numbers.length === 1) {
      console.log(tan(numbers[0]));
      break;
    }
  }
  case "random": {
    if (numbers.length === 1) {
      crypto.randomBytes(numbers[0], (err, buf) => {
        if (err) {
          console.log(err);
        } else {
          console.log(buf.toString("binary"));
        }
      });
      break;
    } else if (numbers.length < 1) {
      console.log("Provide length for random number generation.");
      break;
    }
  }
  default: {
    console.log("Invalid operation");
    break;
  }
}
