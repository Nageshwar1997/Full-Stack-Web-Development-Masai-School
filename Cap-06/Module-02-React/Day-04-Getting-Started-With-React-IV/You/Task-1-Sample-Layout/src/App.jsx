import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

    function Navbar(props) {
      return (
        <div id="navbar">
          <img src={props.logo} alt="Logo" />
          <h1>Navbar</h1>
        </div>
      );
    }

    function Main() {
      return (
        <div id="main">
          <Sidebar URL="https://docs.linn.co.uk/wiki/images/thumb/b/be/Retired-100px.png/180px-Retired-100px.png" />
          <ProductSection URL="https://w7.pngwing.com/pngs/85/114/png-transparent-avatar-user-profile-male-logo-profile-icon-hand-monochrome-head-thumbnail.png" />
        </div>
      );
    }

    function Sidebar(props) {
      return (
        <div id="sidebar">
          <h1>Sidebar</h1>
          <img
            style={{ with: "100%", height: "200px" }}
            src={props.URL}
            alt=""
          />
        </div>
      );
    }
    function ProductSection(props) {
      return (
        <div id="product-section">
          <h1>Product Section</h1>
          <img
            style={{ with: "100%", height: "200px" }}
            src={props.URL}
            alt=""
          />
        </div>
      );
    }

    function Footer(props) {
      return (
        <div id="footer">
          <h1>Footer</h1>
          <p>{props.func()}</p>
        </div>
      );
    }
function App() {
  const [count, setCount] = useState(0);

 function foo() {
   return "Hello World";
 }
 return (
   <>
     <Navbar
       logo={
         "https://students.masaischool.com/static/media/masai-logo.e5c8801d4f26d2da036ec9e4b93cb202.svg"
       }
     />
     <Main />
     <Footer func={foo} />
   </>
 );
}

export default App;
