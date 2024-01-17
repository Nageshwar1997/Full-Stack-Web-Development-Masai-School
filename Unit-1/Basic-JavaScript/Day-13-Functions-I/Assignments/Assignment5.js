// Write a function to convert a character to lower case
function lowerToUpperCase(str){
  let lower = "qwertyuiopasdfghjklzxcvbnm";
  let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";

// Use this function to convert a given word to lower case
  let bag = "";
  for(let i=0; i<str.length; i++){
    for(let j=0; j<upper.length; j++){
      if(str[i]==upper[j]){
        bag += lower[j];
      }
    }
  }
  return bag;
}

// Use that function to convert an array of strings to array of lower case strings

let arr = ["MA","SA","I","SCH","OOL"];
for(let i=0; i<arr.length; i++){
  arr[i]=lowerToUpperCase(arr[i]); // reassigning the value of array elements
}
console.log(arr); // [ 'ma', 'sa', 'i', 'sch', 'ool' ]