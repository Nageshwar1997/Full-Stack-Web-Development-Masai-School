//print sum of the elements whos occurance(how many times) is 2 or more

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

// for....in loop

let sum = 0;
for (let key in obj) {
  if (obj[key] >= 2) { // checking which key occurence greater than or equal to 2 
    sum += Number(key);  // it will conver string to a number (but only those numbers which is in a string eg. "546"---->546)
  }
}
console.log(sum); // 13   (1+3+5+7=13)
