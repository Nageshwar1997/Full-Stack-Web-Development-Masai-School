// Replace all the positive numbers to 1 and all the negative numbers to 0

let numbers = [1, -1, -2, -3, 6, 0, -5, 2, -6, NaN];

for(let i=0; i<numbers.length; i++){
  if(numbers[i]<0){
    numbers[i]=0;
  }
  else if(numbers[i]>0){
    numbers[i]=1
  }
  else{
    numbers[i]=numbers[i];
  }
}
console.log(numbers); // [ 1, 0, 0, 0, 1, 0, 0, 1, 0 ]