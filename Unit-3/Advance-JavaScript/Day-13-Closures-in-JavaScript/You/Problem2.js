function greet() {
    let n = "Nageshwar";
    return function () {
        console.log(n);
    };
}


let res = greet(); // it will give me function

// res(); // it will give me output Nageshwar

let x = res;
x();