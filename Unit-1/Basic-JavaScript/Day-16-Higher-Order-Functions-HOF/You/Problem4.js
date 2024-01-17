// 1. map():-

// In this map method input well be always an array
// When returned something in map, it will give us array.
// map()--> it will iterate over the whole array and return a new array
// HOF ---> It takes another function as an argument or parameter


let array=[1,2,3,4,5];

// Way: 1
let result1=array.map(function(element/*value*/){
  // If i do console.log(element) here it will iterate over all the values in array
  return (element**2);
});
// console.log(result1); // [ 1, 4, 9, 16, 25 ]



// Way: 2
let result2=array.map((element,index)=>{
  // console.log(element); // it will iterate over all the values in array
  // console.log(index); // it will iterate over all the indexes in that array;
  return (element+":"+index);
})
console.log(result2); // [ '1:0', '2:1', '3:2', '4:3', '5:4' ]
