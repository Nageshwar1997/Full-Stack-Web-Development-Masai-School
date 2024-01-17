// You are given a number, stored in a variable with the name nus

// Find the sum of all even numbers greater than zero, and less than or qual to the value stored in num

// 2
// 6
// 12
// 20
// 30

let num=10;
let sum=0;

for(let i=1; i<=num; i++){
  if(i%2==0){
    sum+=i;
    console.log(sum);
  }
}