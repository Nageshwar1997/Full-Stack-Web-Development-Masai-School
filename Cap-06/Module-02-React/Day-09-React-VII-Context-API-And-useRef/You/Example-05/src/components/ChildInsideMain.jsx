import React from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { AuthContext } from "../context/AuthContextProvider";

const ChildInsideMain = () => {
  const { theme } = React.useContext(ThemeContext);
  const { isLoggedIn, toggleAuth } = React.useContext(AuthContext);
  console.log("In Child",theme);
  console.log(isLoggedIn);
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        background: "pink",
        margin: "10px",
      }}
    >
      Child Inside Main Component
      <div>Current Theme : {theme}</div>
      <div>Is User Logged In ? : {isLoggedIn ? "Yes" : "No"}</div>
      <button onClick={toggleAuth}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
};

export default ChildInsideMain;
