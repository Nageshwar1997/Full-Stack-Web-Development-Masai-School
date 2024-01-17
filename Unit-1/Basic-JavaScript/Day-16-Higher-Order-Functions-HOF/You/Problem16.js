let arr=["Suyog","Manju","Rutuja","Dhanu","Nageshwar","Sonali","Tanuja","Suraj","Mahi","Pawar","Praju"];

let result=arr.filter(function(element){
  if(element.length%2!=0){
    return element;
  }
});
console.log(result); // [ 'Suyog', 'Manju', 'Dhanu', 'Nageshwar', 'Suraj', 'Pawar', 'Praju' ]


// If we are not returning anything we don't need to take variable
console.log("map----->");
result.map(function(oddLengthElement,index){
  if(index%2!=0){
    console.log(oddLengthElement);
  }
})
// map----->
// Manju
// Nageshwar
// Pawar

console.log("filter----->");
result.filter(function(oddLengthElement,index){
  if(index%2==0){
    console.log(oddLengthElement);
  }
})
// filter----->
// Suyog
// Dhanu
// Suraj
// Praju

console.log("sort----->")
let sort=result.sort(function(small,big){
  return big.length-small.length
});
console.log(sort);
// sort----->
// [ 'Nageshwar', 'Suyog', 'Manju', 'Dhanu', 'Suraj', 'Pawar', 'Praju' ]



console.log("forEach----->");
result.forEach(function(element){
  console.log(element);
})
// forEach----->
// Suyog
// Manju
// Dhanu
// Nageshwar
// Suraj
// Pawar
// Praju