let numbers = [1, -1, -2, -3, 6, 0, -5, 2, -6];

//replace the negative elements or number with 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) { // checking which number is less than zero it means negative number
    numbers[i] = 0; // replace the negative number with zero
  }
}
console.log(numers); // [ 1, 0, 0, 0, 6, 0, 0, 2, 0 ]


// let array=[];
// for(let i=0; i<numbers.length; i++){
//   if(numbers[i]<0){ // checking which number is less than zero it means negative number
//     numbers[i]=0; // replace the negative number with zero
//   }
//   array.push(numbers[i]); // pushing the element in new array
// }
// console.log(array); // [ 1, 0, 0, 0, 6, 0, 0, 2, 0 ]