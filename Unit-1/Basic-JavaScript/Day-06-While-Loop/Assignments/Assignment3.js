// Print the sum of all the multiples of 3 from 0 to the given limit

let number = 0;
let sum = 0;

while (number <= 10) {
  if (number % 3 == 0) {
    sum = sum + number;
  }
  number++;
}
console.log(sum); // 18