// [1,2,3,4,5]==> '12345'
// write a function to make array to string.

// your chose---> console.log() or return;

function arrayToString(element) {
  let bag = "";
  for (let i = 0; i < element.length; i++) {
    bag += element[i];
  }
  return bag;
}

let arr = [1, 2, 3, 4, 5];

let result = arrayToString(arr);
console.log(result); // 12345

console.log(typeof (result)); // string
