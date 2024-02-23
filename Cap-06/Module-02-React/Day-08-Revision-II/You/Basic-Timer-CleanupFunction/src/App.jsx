import { useState, useEffect } from "react";
import "./App.css";
// import Timer from "./Components/Timer";
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`callback inside useEffect ran`, count); // mount phase

    return () => {
      console.log(`cleanup function called`, count); // unmount phase
    };
  }, [count]); // update phase
  return (
    <div className="App">
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>INC</button>
    </div>
  );
}

export default App;
