// map()
// Print the length of each element using map()
let arr=["Nageshwar","Manjusha","Dhanashree","Rutuja","Sonali","Tanuja","Suyog"];

let result=arr.map(function(element){
  return (element.length);
});
console.log(result); // [ 9, 8, 10, 6, 6, 6,  5 ]


// sort()
// Print result's element assending to dessending order
let output=result.sort((small, big)=>{
  return (small-big);
});
console.log(output); // [ 5, 6,  6, 6, 8, 9, 10 ]

// filter()
// Print output's elements which value is even
let even=output.filter((element)=>{
  if(element%2==0){
    return element;
  }
});
console.log(even); // [ 6, 6, 6, 8, 10 ]