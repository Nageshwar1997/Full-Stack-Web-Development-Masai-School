import React, { useEffect } from "react";

function DelayedStateUpdateSolution() {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    console.log("Count From Delayed State Update Solution", count); // Log the updated count value
  }, [count]); // Run this effect whenever count changes

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default DelayedStateUpdateSolution;
