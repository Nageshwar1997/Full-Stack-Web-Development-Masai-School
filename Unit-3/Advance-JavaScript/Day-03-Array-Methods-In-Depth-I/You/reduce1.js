// Find the total of all the numbers in the array using array.reduce

let arr = [1, 3, 5];
// It takes callback function, initialValue
let initialValue = 0;
let sum = arr.reduce((accumulatedValue, currentValue) => {
    // return accumulatedValue += currentValue;
    let currentSum = accumulatedValue += currentValue;
    return currentSum;
},initialValue)

console.log(sum);