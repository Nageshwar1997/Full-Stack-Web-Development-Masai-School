// Print the average of even numbers from 1 to 100 (both included)

let n = 1;
let evenSum = 0;
let count = 0;

while (n <= 100) {
  if (n % 2 == 0) {
    evenSum += n;
    count++;
  }
  n++;
}
console.log(evenSum / count); // 51

// find the sum of number in between 1-5

// 1. you will declare a variable called sum=0;

//2 you will use this sum inside the loop,
// and at every loop the sum values increase

//3 to find the count , we need declare another variable count=0;

//4 we need to increase the count by using the count variable inside the loop