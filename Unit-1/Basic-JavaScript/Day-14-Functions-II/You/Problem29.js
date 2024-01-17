// create a main function and pass integer, after that
// if that number is even call even function and return square of the number and
// if the number is odd call odd function odd and return cube of the number.using callback

function evenCallback(number) {
    return number ** 2;
}

function oddCallback(number) {
    return number ** 3;
}

function main(number, evenCb, oddCb) {
    if (number % 2 === 0) {
        console.log(evenCb(number));
    }
    else {
        console.log(oddCb(number));
    }
}


let number = 4
main(number, evenCallback, oddCallback);
