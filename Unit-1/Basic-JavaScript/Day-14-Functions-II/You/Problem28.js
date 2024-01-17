// write a program and pass integer,if the value is divisible 3 print A, if the number is divisible by 5 print  B,
// if the number is divisible by both 3 and 5, it will AB,


let number = 15;

function isDivisible(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return "AB";
    }
    else if (num % 3 == 0) {
        return "A";
    }
    else if (num % 5 == 0) {
        return "B";
    }
    else {
        return num;
    }
}


for (let i = 1; i <= number; i++){
    console.log(isDivisible(i));
}