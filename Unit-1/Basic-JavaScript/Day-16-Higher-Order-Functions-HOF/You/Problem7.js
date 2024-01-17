// Difference between map() and filter()

let arr=[1,2,3,4,5];
// Print the output using map()
let map1=arr.map(function(element){
  if(element%2==0){
    return element;
  }
})
console.log(map1); // [ undefined, 2, undefined, 4, undefined ]

// Print the output using filter()
let filter1=arr.filter(function(element){
  if(element%2==0){
    return element;
  }
})

console.log(filter1); // [ 2, 4 ]