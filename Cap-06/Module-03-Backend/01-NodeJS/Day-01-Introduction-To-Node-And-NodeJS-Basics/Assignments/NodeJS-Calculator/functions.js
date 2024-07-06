const addition = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
const subtraction = (numbers) => {
  let sub = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    sub -= numbers[i];
  }
  return sub;
};
const multiplication = (numbers) => {
  let product = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    product *= numbers[i];
  }
  return product;
};
const division = (num1, num2) => {
  return num1 / num2;
};
const sin = (number) => {
  return Math.sin(number);
};
const cos = (number) => {
  return Math.cos(number);
};
const tan = (number) => {
  return Math.tan(number);
};

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  sin,
  cos,
  tan,
};
