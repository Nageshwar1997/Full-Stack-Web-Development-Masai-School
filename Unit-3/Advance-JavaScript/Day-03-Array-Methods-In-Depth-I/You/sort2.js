let shapes = [
    { sides: 2, color: 'red' },
    { sides: 1, color: 'blue' },
    { sides: 4, color: 'blue' },
    { sides: 3, color: 'red' }
];

shapes.sort(function (a, b) {
    // console.log(a.color, b.color);

    // return (a.color < b.color) ? -1 : 1;
    return (a.sides < b.sides) ? -1 : (a.sides < b.sides) ? 1 : 0;


    // iteration: 1
    // a: {sides: 1, color: 'blue'}
    // b: {sides: 4, color: 'red'}

    // the logic can return 
    // 0 : a and b are of equal order
    // -1 : a should come before b 
    // 1 : a should come after b
});

// console.log(shapes);


let a = 'clue'
let b = 'brange'
let c = 'aaaa'
let d = 'âaaa'


console.log(a.localeCompare(b));
console.log(a.localeCompare(b));