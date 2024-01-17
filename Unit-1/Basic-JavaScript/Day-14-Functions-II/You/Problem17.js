//reverse a string.

//luffy--->yfful

// ["yfful", "ymmom", "dad", "oroz" ]---> result

//1. function---> which takes a string and returns the reverse of it.

//2. run a loop over this array and call the reverse function and push the result of the reverse inside the new array.

// function
function reverseString(string) {
  let bag = "";
  for (let i = string.length - 1; i >= 0; i--) {
    bag += string[i];
  }
  return bag;
}

let newArr = [];
let arr = ["luffy", "mommy", "dad", "zoro"];
for (let i = 0; i < arr.length; i++) {
  let result = reverseString(arr[i]);
  newArr.push(result);
}
console.log(newArr); // [ 'yfful', 'ymmom', 'dad', 'oroz' ]