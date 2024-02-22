import { useState, useEffect } from "react";
import styles from "./App.module.css";
function App() {
  const [count, setCount] = useState(0);

  function checkEvenOdd() {
    if (count % 2 == 0) {
      return true;
    }
    return false;
  }

  function checkPrime() {
    if (count < 2) {
      return false;
    }
    for (let i = 2; i <= Math.floor(count / 2); i++) {
      if (count % i == 0) {
        return false;
      }
    }
    return true;
  }

  useEffect(() => {
    checkEvenOdd();
  });
  return (
    <div id={styles.main}>
      <h1>
        <span>Welcome to Counter 2.0</span>
      </h1>
      <div>
        <button
          disabled={count === 0}
          onClick={() => setCount(count - 1)}
          className="minusonebtn"
        >
          -1
        </button>
        <button onClick={() => setCount(count + 1)} className="plusonebtn">
          +1
        </button>
        <div>
          <button className="resetbtn" onClick={() => setCount(0)}>
            Reset Count
          </button>
        </div>
      </div>
      <span className="counter">
        Count:{" "}
        <strong className={checkEvenOdd() ? styles.green : styles.red}>
          {count}
        </strong>
      </span>
      <div>
        <span className="odd-or-even">
          This Number is:{" "}
          <strong className={checkEvenOdd() ? styles.green : styles.red}>
            {checkEvenOdd() ? "Even" : "Odd"}
          </strong>
        </span>
        <br />
        <span className="is-prime">
          Prime Number:{" "}
          <strong className={checkPrime() ? styles.green : styles.red}>
            {checkPrime() ? "true" : "false"}
          </strong>
        </span>
      </div>
    </div>
  );
}

export default App;
