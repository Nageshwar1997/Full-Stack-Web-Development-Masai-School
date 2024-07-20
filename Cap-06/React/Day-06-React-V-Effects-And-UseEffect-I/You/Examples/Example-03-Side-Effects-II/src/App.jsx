import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [flag, setFlag] = useState(false);

  // document.title = flag ? "Positive" : "Negative"; /** THIS IS NOT THE RIGHT WAY **/
  useEffect(
    function () {
      document.title = `Flag is ${flag ? "Positive" : "Negative"}`; // this is the right way
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
