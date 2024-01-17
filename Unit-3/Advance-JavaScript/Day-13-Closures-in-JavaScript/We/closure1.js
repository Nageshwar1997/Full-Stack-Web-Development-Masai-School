function myCount() {
    let count = 0;
    function increaseCount() {
        count++;
        console.log(count);
    }

    function decreaseCount() {
        count--;
        console.log(count);
    }

    function increaseCountBySomeValue(val) {
        count = count + val;
        console.log(count);
    }

    function decreaseCountBySomeValue(val) {
        count = count - val;
        console.log(count);
    }
    return {
        increaseCount: increaseCount,
        decreaseCount: decreaseCount,
        increaseCountBySomeValue: increaseCountBySomeValue,
        decreaseCountBySomeValue: decreaseCountBySomeValue
    }
}


let { increaseCount, decreaseCount, increaseCountBySomeValue, decreaseCountBySomeValue } = myCount();

increaseCount(); // 1
increaseCount(); // 2
increaseCount(); // 3

decreaseCount(); // 2

increaseCountBySomeValue(5); // 7

decreaseCountBySomeValue(2); // 5