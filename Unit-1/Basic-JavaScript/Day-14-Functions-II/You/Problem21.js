// Convert lowercase character into uppercase character and uppercase Character into lowercase character

// Way : I
let str = "NaGeShWaR";

function convert(char) {
  if (char == char.toLowerCase()) {
    return char.toUpperCase();
  }
  else {
    return char.toLowerCase();
  }
}

let bag = "";
for (let i = 0; i < str.length; i++) {
  let convertedChar = convert(str[i]);
  bag += convertedChar;
}
console.log(bag)

// Way : II

// let str = "NaGeShWaR";
// let convertedStr = str.split('');
// let output=convertedStr.map(function(char) {
//   if (char === char.toLowerCase()) {
//     return char.toUpperCase();
//   } else {
//     return char.toLowerCase();
//   }
// }).join('');

// console.log(output); // nAgEsHwAr