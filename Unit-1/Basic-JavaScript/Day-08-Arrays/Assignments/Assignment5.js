// Problem 2 : Given an array of string count the overall total number of characters

let arr = ["Nageshwar", "Pundlikrao", "Pawar"];
let countOfChar = 0;
for (let i = 0; i < arr.length; i++) {
  countOfChar += arr[i].length;
}
console.log(countOfChar); // 24