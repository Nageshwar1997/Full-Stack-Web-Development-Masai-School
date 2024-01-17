// let is local scope variable
function scopeTest() {
    if (true) {
        let a = 5;
        // let a = 5; // we can't redeclare variable
        console.log(a); // 5
    }
    // console.log(a); // a is not defined
}
// console.log(a); // a is not defined
scopeTest();

// let --> can not be redeclare

function scopeTest2() {
    let num = 5;
    if (true) {
        let num = 10;
        console.log(num); // 10
    }
    console.log(num); // 5
}
scopeTest2();