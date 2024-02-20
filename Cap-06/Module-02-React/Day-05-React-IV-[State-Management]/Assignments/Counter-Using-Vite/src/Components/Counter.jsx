import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(1);

    function increaseCount() {
        return setCount(()=>count + 1);
    }

    function decreaseCount() {
        return setCount(()=>count - 1);
    }

    useEffect(() => {
        console.log(`Current count value is: ${count}`);
    }, [count]);

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={increaseCount}>Increase Count By 1</button>
            <button onClick={decreaseCount}>Decrease Count By 1</button>
        </>
    )
}

export default Counter;