let array=[2,3,4,5,6,7,8,-20,30];

let minimum=+Infinity; // it will give us lowest value in JavaScript
let maximum=-Infinity; // it will give us biggest value in JavaScript

for(let i=0; i<array.length; i++){
  if(array[i]<minimum){
    minimum=array[i]; // assigning the value of i index to the minimum
  }
  else if(array[i]>maximum){
    maximum=array[i]; // assigning the value of i index to the maximum
  }
}
console.log("Minimum :",minimum,"\n"+"Maximum :",maximum);
// Minimum : -20 
// Maximum : 30