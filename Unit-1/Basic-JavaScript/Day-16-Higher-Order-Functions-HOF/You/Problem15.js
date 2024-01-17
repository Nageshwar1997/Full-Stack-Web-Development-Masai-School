let arr=["Suyog","Manju","Rutuja","Dhanu","Nageshwar","Sonali","Tanuja","Suraj","Mahi","Pawar","Praju"];

let result=arr.filter(function(element){
  if(element.length%2!=0){ // checking which element length is odd
    return element;
  }
}).map(function(value,index){ // We can use here filter(), forEach(), map()
  if(index%2!==0){ // checking which element takes odd index
    console.log(value);
  }
})/* .forEach(function(value,index){
  if(index%2!=0){
    console.log(value);
  }
}) */
// Manju
// Nageshwar
// Pawar