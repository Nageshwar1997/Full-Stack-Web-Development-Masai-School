import { useState } from 'react'
import './App.css'


const Counter1 = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={handleClick}>INC +1</button>
    </>
  );
}
const Counter2 = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCount) => prevCount + 2);
  }
  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={handleClick}>INC +2</button>
    </>
  );
}
function App() {

  
  return (
    <>
      <h1>Counter 1</h1>
      <Counter1 />
      <h1>Counter 2</h1>
      <Counter2 />
    </>
  )
}

export default App
