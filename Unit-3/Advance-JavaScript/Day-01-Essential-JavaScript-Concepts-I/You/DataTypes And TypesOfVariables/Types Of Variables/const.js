function scopeTest() {
    const a = 5;
    if (true) {
        const a = 10; // we can't redeclare variable & we cannot reassign it value
        console.log(a); // 5
    }
    console.log(a); // a is not defined
}
// console.log(a); // a is not defined
scopeTest();

// let --> can not be redeclare