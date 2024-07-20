import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 1) {
          clearInterval(intervalId);
        }
        return prevCount - 1;
      });
    }, 1000);
    function cleanupFunction() {
      clearInterval(intervalId);
    }
    return cleanupFunction; // unmount Phase
  }, []);

  return (
    <div>
      <h3>Count: {count}</h3>
    </div>
  );
}

export default Timer;
