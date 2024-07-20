import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./actions"; // Import actions

function Counter() {
  const count = useSelector((state) => state.count); // Access state
  const dispatch = useDispatch(); // Dispatch actions

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
