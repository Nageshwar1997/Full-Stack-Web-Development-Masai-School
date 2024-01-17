// Write code to calculate the average of an array
// If there are no items in the array it should return 0
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(getAverage(arr)); // 5


// Create a function to find the sum of elements in an array and use that function to find out the average

function getAverage(arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}