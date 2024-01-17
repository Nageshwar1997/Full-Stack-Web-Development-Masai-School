// Create a function to check if the number is prime or non-prime

function prime_or_not(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.floor(number / 2); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

// Using the above function to print the prime numbers from 2 to 10

for (let j = 2; j <= 10; j++) {
  let result = prime_or_not(j);
  if (result == true) {
    console.log(j, "is a prime number");
  }
}
/* 
2 is a prime number
3 is a prime number
5 is a prime number
7 is a prime number */