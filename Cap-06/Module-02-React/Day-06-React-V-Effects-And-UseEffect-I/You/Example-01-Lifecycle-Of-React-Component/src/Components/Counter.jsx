import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);


    function handleCount() {
        setCount((prevCount) => prevCount + 1);
    }
    return (
      <div style={{border: "1px solid black", padding: "10px"}}>
        <h1>Count : {count}</h1>
        <button onClick={handleCount}>Increase Count</button>
      </div>
    );
}

export default Counter;