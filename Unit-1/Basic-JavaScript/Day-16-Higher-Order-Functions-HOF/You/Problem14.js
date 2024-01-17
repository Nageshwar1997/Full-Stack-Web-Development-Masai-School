// Use multiple HOF in a single variable

let arr=["Nageshwar","Manjusha","Dhanashree","Rutuja","Sonali","Tanuja","Suyog"];

let result=arr.map(function(element){
  return (element.length);
}).sort(function(smalllength, biglength){
  return smalllength-biglength;
}).filter(function(value){
  if(value%2==0){
    return value;
  }
});

console.log(result);