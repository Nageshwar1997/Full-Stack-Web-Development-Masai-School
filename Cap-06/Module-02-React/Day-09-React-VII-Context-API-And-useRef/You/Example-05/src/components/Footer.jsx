import { useContext } from 'react'
import { ThemeContext } from "../context/ThemeContextProvider";


const Footer = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  console.log("In Footer", theme);
  return (
    <div>
      <span>Footer</span>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}

export default Footer;