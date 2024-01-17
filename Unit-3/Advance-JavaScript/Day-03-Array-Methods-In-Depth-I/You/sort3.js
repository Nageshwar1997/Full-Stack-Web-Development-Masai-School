let shapes = [
    { sides: 4, color: 'âred' },
    { sides: 1, color: 'blue' },
    { sides: 3, color: 'crange' },
    { sides: 2, color: 'dreen' }
];

// output: 
// sorted by the color.

shapes.sort(function (a, b) {
    console.log(a.color, b.color)
    // iteration: 1
    // a: {sides: 1, color: 'blue'}
    // b: {sides: 4, color: 'âred'}

    if (a.color.localeCompare(b.color) === -1) {
        return -1
    }

    if (a.color.localeCompare(b.color) === 1) {
        return 1
    }

    return 0;

    // the logic can return 
    // 0 : a and b are of equal order
    // -1 : a should come before b 
    // 1 : a should come after b
});

console.log(shapes);

// How does array.prototype.sort works in javascript
// its an array method
// it mutates the input array (in place)
// it takes in a callback function
// the callback function gets two items of the input array usually stored as a , b
// the callback function is expected to return either 0, a -ve number or a +ve number
// if the callback returns a -ve number this means that a should come before b;
// if the callback returns a +ve number this means that a should come after b;
// if the callback returns 0, this means, no change in order is required