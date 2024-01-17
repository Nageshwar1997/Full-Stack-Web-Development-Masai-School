Array.prototype.map = function () {
    return ["Mogambo", "Khush", "Hua"];
}


let arr = ["One", "Two", "Three"];
// console.log(arr); // [ 'One', 'Two', 'Three' ]
// console.dir(arr); // [ 'One', 'Two', 'Three' ]

let newArr = arr.map((el) => {
    return `${el} ji`;
})

console.log(newArr); // [ 'Mogambo', 'Khush', 'Hua' ]

let newArr2 = arr.map((el) => {
    return `${el} hi`;
})

console.log(newArr2); // [ 'Mogambo', 'Khush', 'Hua' ]
