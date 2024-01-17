// 6. Symbol()

let x=Symbol(25);
console.log(x); // Symbol(25)
console.log(typeof(x)); // symbol
console.log(x.description); // 25
console.log(typeof(x.description)); // string


let y=Symbol("Nageshwar");
console.log(y); // Symbol(Nageshwar)
console.log(typeof(y)); // symbol
console.log(y.description); // Nageshwar
console.log(typeof(y.description)); // string


let z=Symbol(true);
console.log(z); // Symbol(true)
console.log(typeof(z)); // symbol
console.log(z.description); // true
console.log(typeof(z.description)); // string


let a=Symbol("@");
console.log(a); // Symbol(@)
console.log(typeof(a)); // symbol
console.log(a.description); // @
console.log(typeof(a.description)); // string



