// 3. sort():-

// It takes an array as an input and it returns new array

let arr=[8,5,9,7,0,6,2,53,58,1,65,478,5221,39,5526545,452]

let result=arr.sort(function(small,big){
  return (small-big); // lower number to bigger number
  // return (big-small); // bigger number to lower number
})

console.log(result);
/* [
        0,   1,    2,
        5,   6,    7,
        8,   9,   39,
       53,  58,   65,
      452, 478, 5221,
  5526545
] */


let arr2=["Nageshwar","Manjusha","Dhanashree","Suyog"];

let result2=arr2.sort(function(small,big){
  // return (small.length - big.length);
  return (big.length - small.length);
})

console.log(result2);
// [ 'Dhanashree', 'Nageshwar', 'Manjusha', 'Suyog' ]