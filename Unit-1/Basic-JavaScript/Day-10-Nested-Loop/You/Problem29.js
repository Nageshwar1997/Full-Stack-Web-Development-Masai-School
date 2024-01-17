let str = "google";

let bag = "";

for (let i = (str.length / 2) - 1; i >= 0; i--) {
  bag += str[i];
}

for (let i = str.length - 1; i >= str.length / 2; i--) {
  bag += str[i];
}
console.log(bag);