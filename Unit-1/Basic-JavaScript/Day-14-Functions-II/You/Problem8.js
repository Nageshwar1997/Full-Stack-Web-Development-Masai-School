// Code 8 : Slice
// syntax:- newArray=array.slice(start,end);
// start--> index of the element (it will included in the extraction)
// end--> index of the element which we want to stop the extraction (it will not included in the extraction)

let animals = ["cat", "dog", "rat", "lion"];
let x = animals.slice(1, 3); // 1 is include but 3 is not include

console.log(x); // [ 'dog', 'rat' ]
console.log(animals); // [ 'cat', 'dog', 'rat', 'lion' ]



let a = animals.slice(); // every element will be extracted
console.log(a); // [ 'cat', 'dog', 'rat', 'lion' ]

let b = animals.slice(1, 1); // nothing will be extracted only new array will be created because start index and end index will be same
console.log(b); // []

let c = animals.slice(1, animals.length); // from starting element to the length of array will be extracted
console.log(c); // [ 'dog', 'rat', 'lion' ]

let d = animals.slice(2, 4); // from 2nd index element to 4th index element will be extracted
console.log(d); // [ 'rat', 'lion' ]

let e = animals.slice(3); // from 3rd index element to the end of the array elements will be extracted
console.log(e); // [ 'lion' ]

let f = animals.slice(0, 2); // starts from 0th index element and end at 2nd index element will be extracted
console.log(f); // [ 'cat', 'dog' ]
