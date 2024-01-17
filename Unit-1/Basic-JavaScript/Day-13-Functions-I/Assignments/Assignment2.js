// Write code to find the absolute difference of two numbers


// function for the absolute defference of two numbers
function absDifference(num1,num2){
  let diff = num1 - num2;
  return Math.abs(diff);
}

let num1 = 12;
let num2 = 4;

let num3 = 4;
let num4 = 18;

let ans1 = absDifference(num1,num2);
let ans2 = absDifference(num3,num4);

console.log(ans1); // 8
console.log(ans2); // 14