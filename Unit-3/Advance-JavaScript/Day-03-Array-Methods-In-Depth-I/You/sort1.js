let shapes = [
    { sides: 4, color: 'red' },
    { sides: 3, color: 'blue' },
    { sides: 4, color: 'blue' },
    { sides: 3, color: 'red' }
];

shapes.sort(function (a, b) {
    return a.color.localeCompare(b.color);
});

console.log(shapes);

// Output: [
//   {sides: 3, color: 'blue'},
//   {sides: 4, color: 'blue'},
//   {sides: 3, color: 'red'},
//   {sides: 4, color: 'red'}
// ]