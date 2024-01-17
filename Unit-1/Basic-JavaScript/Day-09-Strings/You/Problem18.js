// Print the output in the below fashion
// hcsloo

// 1st way
let str = "school";

let bag = "";
for (let i = (str.length / 2) - 1; i >= 0; i--) {
  bag += str[i];
}
// console.log(bag); // hcs

for (let i = str.length - 1; i >= str.length / 2; i--) {
  bag += str[i];
}
console.log(bag); // hcsloo



// 2nd way
let bag1 = "";
for (let i = (str.length / 2) - 1; i >= 0; i--) {
  bag1 = bag1 + str[i];
}

let bag2 = "";
for (let i = str.length - 1; i >= str.length / 2; i--) {
  bag2 = bag2 + str[i];
}

console.log(bag1 + bag2); // hcsloo