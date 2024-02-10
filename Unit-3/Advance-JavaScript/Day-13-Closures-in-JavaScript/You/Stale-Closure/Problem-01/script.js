// Closure Scope

function outerFunction() {
    let outerVariable = "I am outer variable";
    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}


let foo = outerFunction(); // this return's inner function

foo(); // I am a outer variable