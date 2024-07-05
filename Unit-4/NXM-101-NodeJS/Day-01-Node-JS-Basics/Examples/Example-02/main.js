const sum = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const prod = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

// module.exports = [ sum, sub, prod, div ]; // this is also valid way of exporting things but it has drawback if i miss it's order or index
module.exports = { sum, sub, prod, div }; // this is a right approach
