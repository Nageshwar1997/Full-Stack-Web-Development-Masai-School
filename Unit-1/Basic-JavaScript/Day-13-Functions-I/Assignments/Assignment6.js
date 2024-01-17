// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST



function swapCase(char) {
  let lower = "qwertyuiopasdfghjklzxcvbnm";
  let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";

  for (let i = 0; i < lower.length; i++) {
    if (char == lower[i]) {
      return upper[i];
      break;
    }
    else if (char == upper[i]) {
      return lower[i];
      break;
    }
  }
  return char;
}

let str = "Test";
let bag = "";
for (let i = 0; i < str.length; i++) {
  bag += swapCase(str[i]);
}
console.log(bag);