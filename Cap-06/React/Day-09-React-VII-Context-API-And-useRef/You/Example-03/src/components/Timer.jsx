import { useRef } from "react";
import { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(10);

  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      // unmount phase
      console.log("cleanup function called");
      stopTimer();
    };
  }, []);

  const startTimer = () => {
    if (intervalRef.current !== null) {
      console.log("Do not go further and return from here as it is already running");
      return;
    }

    console.log("Timer Started");
    intervalRef.current = setInterval(() => {
      console.log("Timer Running", Date.now());
      setCount((prevCount) => {
        if (prevCount === 1) {
          clearInterval(intervalRef.current);
        }
        return prevCount - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    console.log("Timer Stopped");
    clearInterval(intervalRef.current); // Clear the interval when stopping
      intervalRef.current = null; // setting the default value to null
  };

  const resetTimer = () => {
      console.log("Timer Reset");
      stopTimer();
    setCount(10);
  };

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h1>Timer</h1>
      <h3>Count: {count}</h3>
      <button disabled={count === 0} onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
};

export default Timer;
