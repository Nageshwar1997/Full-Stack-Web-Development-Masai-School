let arr=["Nageshwar","Manjusha","Dhanashree","Rutuja","Sonali","Tanuja"];


let result=arr.filter(function(value,index){
  if(value[value.length-1]=="a"){ // we are checking which element's last character is "a", if we found this character in any element returning this value
    console.log(value); // Printing the value in new line
    console.log(index); // Printing only those indexex where is our condition satisfied
  }
});

console.log(result);
// Manjusha
// 1
// Rutuja
// 3
// Tanuja
// 5