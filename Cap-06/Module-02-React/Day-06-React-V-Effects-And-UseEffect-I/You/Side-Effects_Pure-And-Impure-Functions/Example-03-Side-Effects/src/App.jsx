import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [flag, setFlag] = useState(false);

  useEffect(
    function () {
      document.title = `Flag is ${flag ? "Positive" : "Negative"}`;
    },
    [flag]
  );
  return (
    <>
      <div className="App">
        <button onClick={() => setFlag(!flag)}>{flag.toString()}</button>
      </div>
    </>
  );
}

export default App;
