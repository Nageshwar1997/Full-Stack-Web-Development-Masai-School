import { useState } from 'react'
import './App.css'

function App() {
  const [balance, setBalance] = useState(0);

  function handleDeposit(amount) {
    setBalance((prevBalance) => prevBalance + amount);
    // console.log(balance);
  }

  function handleWithdraw(amount) {
    if (balance > 0) {
      setBalance((prevBalance) => prevBalance - amount);
    }
    // console.log(balance);
  }
  // console.log(balance);
  return (
    <>
      <div className="App">
        <h1>Bank Account</h1>
        <h2>Current Balance : {balance}</h2>
        <div style={{ display: 'flex' }}>
          <button onClick={()=>handleDeposit(100)}>Deposit 100</button>
          <button onClick={()=>handleWithdraw(100)}>Withdraw 100</button>
        </div>
      </div>
    </>
  )
}

export default App
