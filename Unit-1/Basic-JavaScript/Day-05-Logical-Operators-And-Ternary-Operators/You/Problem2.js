// Code 2 : AND with numbers

let a = 5 > 3;
let b = 6 > 3;
let c = a && b;
console.log(c); // true


// Code 3 : if...else

// Ist Part : Without AND
if (5 > 3) {
  if (6 > 3) {
    console.log("Both are true");
  }
}

// IInd Part : With AND
if (5 > 3 && 6 > 3) {
  console.log("Both are true");
}
