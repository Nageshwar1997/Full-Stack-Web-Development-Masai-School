// 2. fiter():-


let arr=[1,2,3,4,5,6,7,8,9,10];

let result=arr.filter(function(element,index){
  // console.log(element); // it will iterate over all the values in an array
  // console.log(index); // it will iterate over all the indexes in an array
  if(element%2==0){
    return element;
  }
})
console.log(result); // [ 2, 4, 6, 8, 10 ]





let array=["luffy","zoro","nami","sanji"];

let output=array.filter(function(element){
  if(element.length>4){
    return element;
  }
});

console.log(output); // [ 'luffy', 'sanji' ]

