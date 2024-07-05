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
  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }
  return product;
};
const division = (numbers) => {
  let div = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    div /= numbers[i];
  }
  return div;
};
const sin = (numbers) => {
  if (numbers.length === 1) {
    return Math.sin(numbers[0]);
  }
  let sinValues = numbers.map((number) => Math.sin(number));
  return sinValues;
};
const cos = (numbers) => {
  if (numbers.length === 1) {
    return Math.cos(numbers[0]);
  }
  let cosValue = numbers.map((number) => Math.cos(number));
  return cosValue;
};
const tan = (numbers) => {
  if (numbers.length === 1) {
    return;
  }
  let tanValue = numbers.map((number) => Math.abs(Math.tan(number)));
  return tanValue;
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
