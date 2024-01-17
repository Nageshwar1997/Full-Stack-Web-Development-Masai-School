let a = false;
let b = 0;
let c = null;

let d = a || b || c;

console.log(d); // null

let e = false;
let f = 'Vivek';
let g = 'Rishi';

let z = e || f || g;

console.log(z); // Vivek