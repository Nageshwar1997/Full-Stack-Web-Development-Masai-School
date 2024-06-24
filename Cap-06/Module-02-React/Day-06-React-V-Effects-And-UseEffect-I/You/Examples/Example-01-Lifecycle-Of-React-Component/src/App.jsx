import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
  const [showCounter, setShowCounter] = useState(true);
  return (
    <>
      {showCounter ? <Counter /> : null}
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
    </>
  );
}

export default App;
