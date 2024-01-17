let str = "Nageshwar";
/* { 
  N: 1, 
  a: 2, 
  g: 1, 
  e: 1, 
  s: 1, 
  h: 1, 
  w: 1, 
  r: 1 
} */
//1. take empty object.
//2. run a loop over the str.
//3. try to add chars into object.
// 4. write a logic in a way where the value only increase.

let object = {};

for (let i = 0; i < str.length; i++) {
  if (object[str[i]] == undefined) {
    object[str[i]] = 1; // adding the value into the object
  }
  else {
    object[str[i]]++; // increasing the value by 1 of already present key
  }
}
console.log(object); // { N: 1, a: 2, g: 1, e: 1, s: 1, h: 1, w: 1, r: 1 }