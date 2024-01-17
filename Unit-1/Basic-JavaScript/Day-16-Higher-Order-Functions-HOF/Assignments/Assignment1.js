// Problem 1: Find the average of elements present at odd index of the following array.

let arr = [10, 24, 56, 72, -10, -88, 100, 564];


let avg = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / arr.length;
console.log(avg); // 91