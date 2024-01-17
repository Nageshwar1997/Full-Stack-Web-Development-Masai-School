// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function

let arr = ["My", "Name", "Is", "Nageshwar", "Pawar"];
let el = "Nageshwar";

function printIndexOf(arr, element) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      index = i;
    }
  }
  return index;
}

let output = printIndexOf(arr, el);

console.log(output); // 3