// Problem 1 : Given an array print the position (starting with 1) and the element in a single line.

let arr = [1,2,3,4,5,6,7,8,9,10];
let bag="";
for(let i=0; i<arr.length; i++){
  bag+=arr[i]+" ";
}
console.log(bag);