// Convert below array into object with their occurrences
// Delet the occurrences who are even in number
// Print the object

let arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6];

let obj = {};

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] == undefined) {
    obj[arr[i]] = 1;
  }
  else {
    obj[arr[i]]++;
  }
}

for (let key in obj) {
  if (obj[key] % 2 == 0) {
    delete obj[key];
  }
}
console.log(obj); // { '5': 1, '6': 1 }