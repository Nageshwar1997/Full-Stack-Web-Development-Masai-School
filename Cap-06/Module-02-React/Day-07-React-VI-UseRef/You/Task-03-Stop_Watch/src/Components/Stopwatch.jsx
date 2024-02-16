/* import { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(function() {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    function cleanUpFunction() {
      let clean = clearInterval(intervalId);
      return clean;
    }
    return cleanUpFunction;
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{formatTime(time)}</p>
      <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
*/

import { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);

  useEffect(function () {
    // Side Effect
    const intervalId = setInterval(function () {
      console.log("Set Interval Getting Called", Date.now());
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return function() {
      console.log("Clean Up Function Should be Called");
      clearInterval(intervalId);
    }
  }, []);
  return (
    <>
      <h1>Stopwatch</h1>
      <p>{time}</p>
    </>
  );
}

export default Stopwatch;
