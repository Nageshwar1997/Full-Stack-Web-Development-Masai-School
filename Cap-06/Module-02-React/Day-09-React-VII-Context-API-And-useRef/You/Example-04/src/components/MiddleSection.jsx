import React from 'react'
import Main from "./Main";
import Sidebar from "./Sidebar";

const MiddleSection = () => {
  return (
    <div style={{border: "1px solid black"}}>
      <p>Middle Section Contains</p>
      <Sidebar />
      <Main />
    </div>
  )
}

export default MiddleSection
