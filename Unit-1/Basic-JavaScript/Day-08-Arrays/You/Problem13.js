// Code 14 : Print the last 3 items of an products array

// **Approach 1 :**
let products1 = ["earphone", "headphones", "mic", "ipad", "cell phone", "laptop"];

let start = products1.length - 3
for (let i = start; i < products1.length; i++) {
  console.log(products1[i]);
}
// ipad
// cell phone
// laptop


// **Approach 2 :**
let products2 = ["earphone", "headphones"];

let starts = 0;
if (products2.length > 3) {
  starts = products2.length - 3;
}
for (let i = starts; i < products2.length; i++) {
  console.log(products2[i]);
}
// earphone
// headphones