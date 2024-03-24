/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemeContext = createContext();
function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const contextValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
      {/* <App /> */}
    </ThemeContext.Provider>
  );
}
export default ThemeContextProvider;
