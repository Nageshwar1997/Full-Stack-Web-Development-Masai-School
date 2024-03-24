import { useState, useRef } from "react";
import "./App.css";

const ButtonWithUseState = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  console.log("ButtonWithUseState rendering...");

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>BUTTON WITH USE STATE</button>
    </div>
  );
};

const ButtonWithUseRef = () => {
  let ref = useRef(0);
  const [flag, setFlag] = useState(true);

  const handleClick = () => {
    ref.current = ref.current + 1;
    console.log(ref);
  };
  console.log("ButtonWithUseRef rendering...");

  return (
    <div>
      <h1>Count : {ref.current}</h1>
      <button onClick={handleClick}>BUTTON WITH USE REF</button>
      <button onClick={() => setFlag(!flag)}>{flag.toString()}</button>
    </div>
  );
};

function App() {
  return (
    <>
      <h1>Button With useState</h1>
      <ButtonWithUseState />
      <hr />
      <h1>Button With useRef</h1>
      <ButtonWithUseRef />
    </>
  );
}

export default App;
