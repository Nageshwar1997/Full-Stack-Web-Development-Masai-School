/**
 * We need to write a function
 * that returns a promise object
 * takes in a number
 * 
 * the promise will be fulfilled after 5 seconds
 *  if a -ve number is given
 * the promise will reject with the following string
 *  "cannot sqrt a negative number"
 * 
 * if zero or a positive number is given
 * then the promise will resolve with the square root of the number
 */


// write your code here
// 1 Way
function getSqrt1(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num < 0) {
                reject("cannot sqrt a negative number")
            } else if (num === 0 || num > 0) {
                resolve(Math.sqrt(num))
            }

        }, 5000);
    }).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })
}

getSqrt1(16);
getSqrt1(0);
getSqrt1(-5);


// 2 Way
// function Producing a Promise
function getSqrt2(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num < 0) {
                reject("cannot sqrt a negative number")
            } else if (num === 0 || num > 0) {
                resolve(Math.sqrt(num))
            }

        }, 5000);
    })
}
// Consume the Promise
let promise = getSqrt2(100); // it returns a object not a value
promise.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});


// 3 Way
async function getSqrt3(num) {
    setTimeout(() => {
        try {
            if (num >= 0) {
                console.log(Math.sqrt(num));
            }
            else if (num < 0) {
                console.log("cannot sqrt a negative number");
            }
        } catch (error) {
            return error;
        }
    }, 6000);
}

getSqrt3(15)
getSqrt3(2)
getSqrt3(-5)