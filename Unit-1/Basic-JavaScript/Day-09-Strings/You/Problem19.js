// Perform the following tasks and print the string

// 1. if we found the "%" then replace it to "a";
// 2. if we found the "$" then replace it to "g";
// 3. if we found the "&" then replace it to "e";
// 4. if we found the "." then remove it;

let str = "N%$&.s.h.w%.r";
let bag = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] == "%") {
    bag += "a";
  }
  else if (str[i] == "$") {
    bag += "g";
  }
  else if (str[i] == "&") {
    bag += "e";
  }
  else if (str[i] == ".") {
    bag += "";
  }
  else {
    bag += str[i];
  }
}
console.log(bag); // Nageshwar