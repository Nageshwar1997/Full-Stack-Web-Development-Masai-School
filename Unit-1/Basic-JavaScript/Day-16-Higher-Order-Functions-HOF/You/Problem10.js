elet arr= [1,2,3,4,5,6,7,8,9,10];

//print a array with prime number;--> filter.
let filter1=arr.filter(function(element){
  let count=0;
  for(let i=1; i<=element; i++){
    if(element%i==0){
      count++;
    }
  }
  if(count==2){
    return element;
  }
})
console.log(filter1); // [ 2, 3, 5, 7 ]


// convert this array into string. "1234";
// map()
let map1=arr.map(function(element){
  return element;
});

let output=map1.join("");
console.log(output);



// foreach()

arr.forEach(function(element){
  console.log(element);
})
//forEach when you do not want to use the data anywhere.



// sort()
let sort1=arr.sort(function(small,big){
  //sort in high to low.
  // return (small-big); // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

  // sort function.
  return (big-small); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
});

console.log(sort1);