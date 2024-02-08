let arr = [1, 2, 3, 4];


// Impure Function
function updateArr() {
  arr.push(5);
  return arr;
}

console.log(updateArr()); // [ 1, 2, 3, 4, 5 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]
