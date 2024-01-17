let array=[1,2,3,4,5,6];

let powerArray= function (array,power){
  let newArray=[];
  for(let i=0; i<array.length; i++){
    let output=array[i]**power;
    newArray.push(output);
  }
  console.log(newArray);
}

powerArray(array,2);
// [ 1, 4, 9, 16, 25, 36 ]


powerArray(array,3);
// [ 1, 8, 27, 64, 125, 216 ]