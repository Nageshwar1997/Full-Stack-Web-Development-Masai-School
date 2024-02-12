let arr = [1, 2, 1, 2];
// convert this array into object, this object should have how many times each element is present in the array.

// {
//   '1': 2,
//   '2': 2
// }
let obj = {};

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] == undefined) {
    obj[arr[i]] = 1;
  }
  else {
    obj[arr[i]]++;
  }
}

console.log(obj); // { '1': 2, '2': 2 }