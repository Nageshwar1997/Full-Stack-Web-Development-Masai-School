// var is a functional scope variable
function scopeTest() {
    if (true) {
        var a = 10;
        var a = 5; // var can be redeclare but it is useless (instead of this reassign it)
        console.log(a); // 5
    }
    console.log(a); // 5
}
// console.log(a); // a is not defined
scopeTest();

// let --> can not be redeclare