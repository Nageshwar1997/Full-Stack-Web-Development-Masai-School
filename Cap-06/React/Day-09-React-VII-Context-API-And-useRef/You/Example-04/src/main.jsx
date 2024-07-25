import { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// CPC :- (Create, Provide, Consume)
// 1. Create a context
// 2. Provide a context
// 3. Consume the context
export const ThemeContext = createContext();
// console.log(ThemeContext);
// console.log(ThemeContext.Provider);
// console.log(ThemeContext.Consumer);

// <ThemeContext.Provider></ThemeContext.Provider>

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContext.Provider value={{ theme: "red" }}>
    <App />
  </ThemeContext.Provider>
);