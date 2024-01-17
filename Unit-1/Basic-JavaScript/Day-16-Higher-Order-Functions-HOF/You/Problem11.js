let arr=["Nageshwar","Manjusha","Dhanashree","Rutuja","Sonali","Tanuja","Suyog"];

// fliter()
let result=arr.filter(function(value){
  if(value[value.length-1]=="a"){ // we are checking which element's last character is "a", if we found this character in any element returning this value
    return value; // storing founded element in new array
  }
});

console.log(result); // [ 'Manjusha', 'Rutuja', 'Tanuja' ]

// forEach()
// Print those elements which last index is not equal to "a"
let count=0;
let output=arr.forEach(function (element){
  if(element[element.length-1]!=="a"){
    count++;
  }
})
console.log(count); // 4
