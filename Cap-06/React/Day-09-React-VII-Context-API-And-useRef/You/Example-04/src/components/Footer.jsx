import React, { useContext } from 'react'
import { ThemeContext } from "../main";

const Footer = () => {
  const value = useContext(ThemeContext);
  console.log(value);
  value.theme = "pink";
  console.log(value);
  return (
    <div>Footer</div>
  )
}

export default Footer