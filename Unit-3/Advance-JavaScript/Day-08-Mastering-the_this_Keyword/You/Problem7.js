let arr = ["One", "Two", "Three"];


Array.prototype.bacchanify = function () {
    let newArr = this.map(el => `${el} ji`);
    return newArr;
}

let bacchanifyArr1 = arr.bacchanify();

console.log(bacchanifyArr1); // [ 'One ji', 'Two ji', 'Three ji' ]


let arr2 = ["A", "O", "Lo", "Suno"];

let bacchanifyArr2 = arr2.bacchanify();
console.log(bacchanifyArr2); // [ 'A ji', 'O ji', 'Lo ji', 'Suno ji' ]