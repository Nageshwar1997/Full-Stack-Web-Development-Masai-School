//print the elements whos occurance(how many times) is 2 or more

let arr = [1, 2, 3, 4, 5, 6, 7, 1, 3, 7, 1, 2, 1, 1];

let obj = {};

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] == undefined) {
    obj[arr[i]] = 1;
  }
  else {
    obj[arr[i]]++;
  }
}
console.log(obj);

// for....in loop

for (let key in obj) {
  if (obj[key] >= 2) { // checking which key occurence greater than or equal to 2 
    console.log(key); // printing only keys
  }
}
// 1
// 2
// 3
// 7