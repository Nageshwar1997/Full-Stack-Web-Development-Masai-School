// Convert this string into an array

let str = 'The quick brown fox jumps over the lazy dog.';

function mySplit(str) {
  let bag = "";
  let output = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      bag = bag + str[i];
    }
    else {
      if (bag != "") {
        output.push(bag);
      }
      bag = "";
    }
  }
  output.push(bag);
  console.log(output);
}

// dry run of this code----> home work

mySplit(str);
/* [
  'The',   'quick',
  'brown', 'fox',
  'jumps', 'over',
  'the',   'lazy',
  'dog.'
] */