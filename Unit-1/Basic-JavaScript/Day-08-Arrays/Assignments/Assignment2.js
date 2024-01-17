// Problem 2 : Given a character in lower case print the upper case character
let lower = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
let upper = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];

for(let i=0; i<lower.length; i++){
  lower[i]=upper[i];
}
console.log(lower);
// [
//   'Q', 'W', 'E', 'R', 'T', 'Y',
//   'U', 'I', 'O', 'P', 'A', 'S',
//   'D', 'F', 'G', 'H', 'J', 'K',
//   'L', 'Z', 'X', 'C', 'V', 'B',
//   'N', 'M'
// ]