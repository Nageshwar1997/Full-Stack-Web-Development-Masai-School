// Create a function to check a number is perfect square number or not


function isPerfectSquare(square, callback) {
    if (square < 0) {
        callback(false);
        return;
    }

    let squareRoot = Math.sqrt(square);

    let checkPerfectSquare = squareRoot == Math.floor(squareRoot);

    callback(checkPerfectSquare);
}

let number = 25;

isPerfectSquare(number, print);

function print(result) {
    if (result) {
        console.log(number, "is a perfect square.");
    }
    else {
        console.log(number, "is not a perfect square.");
    }
}