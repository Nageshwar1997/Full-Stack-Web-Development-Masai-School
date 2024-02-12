// 7. BigInt()
let x=BigInt(12345678901234567890);
console.log(x); // 12345678901234567168n
console.log(typeof(x)); // bigint

let y=BigInt("12345678901234567890");
console.log(y); // 12345678901234567890n
console.log(typeof(y)); // bigint

let z=x*y;
console.log(z); // 152415787532388358588325033183661035520n
console.log(typeof(z)); // bigint



// const previouslyMaxSafeInteger = 9007199254740991n;
// console.log(previouslyMaxSafeInteger); // 9007199254740991n

// const alsoHuge = BigInt(9007199254740991);
// console.log(alsoHuge); // 9007199254740991n

// const hugeString = BigInt("9007199254740991");
// console.log(hugeString); // 9007199254740991n

// const hugeHex = BigInt("0x1fffffffffffff");
// console.log(hugeHex); // 9007199254740991n

// const hugeOctal = BigInt("0o377777777777777777");
// console.log(hugeOctal); // 9007199254740991n

// const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111");
// console.log(hugeBin); // 9007199254740991n