// Print the prime numbers and non-prime numbers from 1 to 10

for (let i = 1; i <= 10; i++) {

  let number = i;
  let factor = 0;
  for (let j = 1; j <= number; j++) {
    if (number % j == 0) {
      factor++;
    }
  }

  if (factor == 2) {
    console.log(number, "is a prime number");
  }
  else {
    console.log(number, "is a non-prime number");
  }
}

// 1 is a non-prime number
// 2 is a prime number
// 3 is a prime number
// 4 is a non-prime number
// 5 is a prime number
// 6 is a non-prime number
// 7 is a prime number
// 8 is a non-prime number
// 9 is a non-prime number
// 10 is a non-prime number