function isPalindrome(number) {

  let originalNumber = number;
  let reversedNumber = 0;

  while (number > 0) {
    let digit = number % 10;
    reversedNumber = reversedNumber * 10 + digit;
    number = Math.floor(number / 10);
  }

  if(originalNumber == reversedNumber){
    return true;
  }
  else{
    return false;
  }
}


let number = 121;
if (isPalindrome(number)) {
  console.log(number , "is a palindrome.");
} else {
  console.log(number , "is not a palindrome.");
}