import React, {useEffect} from "react";

function MultipleStateUpdatesSolution() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1); // Use functional form of setCount
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    console.log("Count From Multiple State Updates Solution", count); // This will log the updated count correctly
  };

  useEffect(() => {
    console.log("Count From Multiple State Updates Solution", count);
  }, [count]);
  
  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default MultipleStateUpdatesSolution;
