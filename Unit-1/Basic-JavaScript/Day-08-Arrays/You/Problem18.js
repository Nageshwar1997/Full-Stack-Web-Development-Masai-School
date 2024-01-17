// Spread Operator (...arrayName1,...arrayName2) :--> copying the arrays

let movieNames1 = ["Ambala", "Bagbaan", "Gajhini"];
let movieNames2 = ["RRR", "KGF", "Bahubali"];

let movieNames = [...movieNames1, ...movieNames2];

console.log(movieNames); // [ 'Ambala', 'Bagbaan', 'Gajhini', 'RRR', 'KGF', 'Bahubali' ]
