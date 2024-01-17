// Write a function to replace spaces in a given string with - (Hyphen)

function replace_spaces(str) {
  let bag = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      bag += "-";
    }
    else {
      bag += str[i];
    }
  }
  return bag;
}

let name = "Nageshwar Pundlikrao Pawar";
let result = replace_spaces(name);

console.log(result); // Nageshwar-Pundlikrao-Pawar