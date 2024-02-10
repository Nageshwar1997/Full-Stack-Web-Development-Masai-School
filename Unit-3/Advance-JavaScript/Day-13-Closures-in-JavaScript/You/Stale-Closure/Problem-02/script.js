function counter(initValue) {
    let count = initValue;


    function increment() {
        count = count + 1;
        console.log(count);
    }

    // let message = `Count is ${count}`; // it will give us unexpected output
    function getCount() {
        let message = `Count is ${count}`; // stale closure
        console.log(message);
    }

    return [increment, getCount];
}

// console.log(counter(3));

const [increment, getCount] = counter(3);

increment(); // 4
getCount(); // Count is 3

increment(); // 5
getCount(); // Count is 3

increment(); // 6
getCount(); // Count is 3