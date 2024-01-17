// Rest Parameter ---> It is used to convert all the argument to array format and store to a variable

let print = function(...a){
  console.log(a); // [ 1, 2, 3, 4, 5, true, 'Nageshwar' ]
  // for(let i=0; i<a.length; i++){
  //   console.log(a[i]);
  // }
}
print(1,2,3,4,5,true,"Nageshwar");