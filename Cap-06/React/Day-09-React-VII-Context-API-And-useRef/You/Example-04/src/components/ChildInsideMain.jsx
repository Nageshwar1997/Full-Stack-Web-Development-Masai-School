import React from "react";
import { ThemeContext } from "../main";

const ChildInsideMain = () => {
  const value = React.useContext(ThemeContext);
  console.log("value", value);
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        background: `${value.theme}`,
        margin: "10px",
      }}
    >
      ChildInsideMain
    </div>
  );
};

export default ChildInsideMain;
