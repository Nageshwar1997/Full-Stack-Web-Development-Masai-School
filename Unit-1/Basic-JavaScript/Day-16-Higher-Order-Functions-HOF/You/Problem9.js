// 4. forEach():-

// forEach() is also like a loop
// It is just used to iterate over the array
// It will take an array as an input but is not return anything
// It cannot return anything


let arr=["Nageshwar","Manjusha","Dhanashree","Suyog"];

arr.forEach(function(element){
  console.log(element); // We cannot use return statement here, if We use return then it will give us undefined as an output
})
/* 
Nageshwar
Manjusha
Dhanashree
Suyog */



let arr2=[1,2,3,4,5,6,7,8,9,10];

arr2.forEach((element,index)=>{
  console.log(index);
});

/* 
0
1
2
3
4
5
6
7
8
9 */