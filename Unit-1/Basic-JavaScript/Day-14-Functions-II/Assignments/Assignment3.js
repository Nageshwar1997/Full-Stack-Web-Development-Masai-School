// Write a custom function that has the same behavior of inbuilt Array Slice Function

let arr = ["My", "Name", "Is", "Nageshwar", "Pawar"];

let start = 1;
let end = -10;

function toSlice(arr, start, end) {
  let newArr = [];

  if (start == end) {
    return newArr;
  }

  if (start == undefined && end == undefined) {
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr; // [ 'My', 'Name', 'Is', 'Nageshwar', 'Pawar' ]
  }

  if (start == undefined && end > 0) {
    for (let i = 0; i < end; i++) {
      newArr.push(arr[i]);
    }
    return newArr; // [ 'My', 'Name', 'Is' ]
  }

  if (start >= 0 && end == undefined) {
    for (let i = start; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr; // [ 'Is', 'Nageshwar', 'Pawar' ]
  }

  if (start >= 0 && start < arr.length && end <= arr.length) {
    for (let i = start; i < end; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
}

let output = toSlice(arr, start, end);
console.log(output);