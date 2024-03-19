import { useState } from "react";
import "./App.css";
import Stopwatch from "./Components/Stopwatch";
function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <>
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? "Hide Stopwatch" : "Show Stopwatch"}
      </button>
      {/* {(showComponent && <Stopwatch />)} */}
      {/* OR */}
      {showComponent ? <Stopwatch /> : null}
    </>
  );
}

export default App;
