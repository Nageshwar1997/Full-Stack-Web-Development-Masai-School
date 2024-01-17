// do...while
console.log("do...while Loop");
let i = 1;
do {
    console.log(i);
    i++;
}
while (i <= 5);

// 1
// 2
// 3
// 4
// 5

// while
console.log("While Loop");
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}
// 1
// 2
// 3
// 4
// 5

// For
console.log("For Loop");
for (let k = 1; k <= 5; k++) {
    console.log(k);
}
// 1
// 2
// 3
// 4
// 5

// for...in
let obj = {
    a: 1,
    b: 2,
    c: 3
}

console.log("for...in Loop");
for (const key in obj) {
    console.log(`${key}-${obj[key]}`);
}
// a-1
// b-2
// c-3


// for... in loop with array
let arr = ["Nageshwar", "Pundlikrao", "Pawar"];

for (let i in arr) {
    console.log(`index: ${i} --> value: ${arr[i]}`);
}
// index: 0 -- > value: Nageshwar
// index: 1 -- > value: Pundlikrao
// index: 2 -- > value: Pawar


// for...of Loop with Array --->{It will give us only values not indexes or keys}
let array = ["Nageshwar", "Pundlikrao", "Pawar"];
for (let element of array) {
    console.log(element);
}
// Nageshwar
// Pundlikrao
// Pawar