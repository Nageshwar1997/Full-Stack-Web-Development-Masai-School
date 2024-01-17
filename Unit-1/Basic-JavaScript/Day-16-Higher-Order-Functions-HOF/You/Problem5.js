// Inside HOF we cannot use continue or break

let arr=[1,2,3,4,5,6,7,8,9,10];

let result=arr.map(function(element){
  if(element%2==0){
    return element;
  }
});
console.log(result);
/* 
[
  undefined, 2,
  undefined, 4,
  undefined, 6,
  undefined, 8,
  undefined, 10
] */


//map always returns an array, --> store to a variable.
// If we missed return statement it will return an array with all the values as undefined.
/* [
  undefined, undefined,
  undefined, undefined,
  undefined, undefined,
  undefined, undefined,
  undefined, undefined
] */