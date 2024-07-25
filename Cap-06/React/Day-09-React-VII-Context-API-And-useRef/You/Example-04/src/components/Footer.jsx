import { useContext } from "react";
import { ThemeContext } from "../main";

const Footer = () => {
  const value = useContext(ThemeContext);
  console.log(value);
  value.theme = "pink";
  console.log(value);
  return (
    <div
      style={{
        backgroundColor: `${value.theme}`,
        padding: "10px 0",
        border: "1px solid black",
      }}
    >
      Footer
    </div>
  );
};

export default Footer;
