// find how many characters are there.

let arr = ["masai", "school", "web", "full", "stack"];

// 1st way
count = 0
for (let i = 0; i < arr.length; i++) {
  count = count + arr[i].length; // here arr[i].length it will give us the length of first element in array or length of string in an array
}
console.log(count); // 23




// 2nd way (using nested loop)
let count1 = 0;
for (let i = 0; i < arr.length; i++) {

  let element = arr[i];
  for (let j = 0; j < element.length; j++) {
    count1++
  }
}
console.log(count1); // 23
