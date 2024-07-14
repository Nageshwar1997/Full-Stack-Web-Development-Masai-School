let arr= ["harshdeep", "luffy","tanumay","ravi","deepak","tapish", "nishant", "luffy"];

// ["luffy","tanumay","luffy"]
//use only HOF--> filter


let result= arr.filter(function(a){
  // console.log(a.length);
  if(a[a.length-1]== "y"){
    return a;
  }
})
// console.log(result);//--> use this array for forEach

// forEach
let count=0;
let output= arr.forEach(function(a){
  if(a[a.length-1] !=="y"){
    count++;
  }
})
console.log(count);