import { useState } from "react";
import "./App.css";
import Timer from "./Components/Timer";
function App() {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <>
      <h3>Timer</h3>
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
      {showCounter ? <Timer /> : null}
    </>
  );
}

export default App;
