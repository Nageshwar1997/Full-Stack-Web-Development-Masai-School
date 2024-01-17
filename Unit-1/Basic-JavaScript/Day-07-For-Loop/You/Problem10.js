let a=1;
let b="Hi";
console.log(a+b); // 1Hi
console.log(typeof(a+b)); // string
console.log(typeof(a,b)); // string


let c=2;
let d="";
console.log(c+d); // 2
console.log(typeof(c+d)); // string
console.log(typeof(c,d)); // string


console.log(1+2+""+3+4); // 334
console.log(typeof(1+2+""+3+4)); // string

console.log(""+1+2+""+3+4); // 1234
console.log(typeof(""+1+2+""+3+4)); // string


// Concatenation

// number + number ---> number

// string + string ---> string

// number + string ---> string

// number + string + number ---> string