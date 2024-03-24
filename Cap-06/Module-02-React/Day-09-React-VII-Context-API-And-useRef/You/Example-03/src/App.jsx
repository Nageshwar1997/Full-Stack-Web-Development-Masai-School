import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <>
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? "Hide Timer" : "Show Timer"}
      </button>
      {showComponent ? <Timer /> : null}
    </>
  );
}

export default App;
