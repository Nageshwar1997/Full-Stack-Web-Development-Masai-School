// [0, 1, 1, 2, 3, 5, 8]

function print(num) {
    let arr = [0, 1];
    for (let i = 2; i <= num; i++) {
        let x = arr[i - 1] + arr[i - 2]
        if (x <= 10) {
            arr.push(x)
        }
    }
    return arr;
}

console.log(print(10));