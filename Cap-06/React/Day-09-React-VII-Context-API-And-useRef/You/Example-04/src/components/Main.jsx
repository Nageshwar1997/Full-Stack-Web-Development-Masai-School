import React from 'react'
import ChildInsideMain from './ChildInsideMain'


const Main = () => {
  return (
    <div
      style={{
        border: "1px dashed black",
        padding: "10px",
        background: "lightgreen",
        margin: "10px",
      }}
    >
      <span>Main</span>
      <ChildInsideMain />
    </div>
  );
}

export default Main
