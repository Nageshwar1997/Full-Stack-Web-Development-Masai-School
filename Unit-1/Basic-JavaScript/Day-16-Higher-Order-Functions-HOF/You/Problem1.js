// find the element which are divisible by 2 and print them.

// 1. write a function wheather a number is divisible by 2 or not.
// if a number is not divisible return false.
//   if it is divisible return true

// 2// write a function ,
// use the above function and with the result of it, print the elements which result value is true

let array=[1,2,3,4,5,6,7,8,9,10];

function divisible(number,devider){
  if(number%devider!=0){
    return false;
  }
  else{
    return true;
  }
}

function print(array,number){
  for(let i=0; i<array.length; i++){
    if(divisible(array[i],number)==true){ // Calling a function as an arguments
      console.log(array[i]);
    }
  }
}
print(array,2);
// 2
// 4
// 6
// 8
// 10