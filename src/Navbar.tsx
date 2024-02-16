import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useCollapse } from "react-collapsed";
import Youtube from "./Assets/youtube.png";
import Facebook from "./Assets/icons8-facebook-48.png";
import X from "./Assets/icons8-twitterx-48.png";
import { useState } from "react";
import TempSignup from "./TempSignup";
import TempLogin from "./TempLogin";

function Navbar() {
  const customColor = '#1e9bff';
  const customStyle = {
    '--clr': customColor
  };
  const [displayRegister, setDisplayRegister] = useState(true);
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const handleAuthClick = () => {
    setDisplayRegister(!displayRegister);
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/home" className="siteTitle">
              Bean & Brews
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="#" {...getToggleProps()}>
              {isExpanded ? "Login ▽" : "Login △"}{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/home">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>

      {displayRegister ? (
        <div className="formBox">
          <div className="buttonBox">
            <div id="btn"></div>
            <button
              type="button"
              className={`toggleBtn ${displayRegister ? "on" : "off"}`}
              onClick={handleAuthClick}
            >
              Register
            </button>
            <button
              type="button"
              className="toggleBtn"
              onClick={handleAuthClick}
            >
              Login
            </button>
          </div>
          <div className="socialIcons">
            <img src={Youtube}></img>
            <img src={X}></img>
            <img src={Facebook}></img>
          </div>
          <form className="form" id="register">
            <input
              type="text"
              className="inputField"
              placeholder="User ID"
              required
            ></input>
            <input
              type="email"
              className="inputField"
              placeholder="Email"
              required
            ></input>
            <input
              type="text"
              className="inputField"
              placeholder="Password"
              required
            ></input>
            <input type="checkbox" className="checkBox"></input>
            <span className="checkboxStyle">I agree to the terms & conditions</span>
            <button type="button" className="submitButton">
              Register
            </button>
          </form>
        </div>
      ) : (
        <div className="formBox">
          <div className="buttonBox">
            <div id="btn"></div>
            <button
              type="button"
              className="toggleBtn"
              onClick={handleAuthClick}
            >
              Register
            </button>
            <button
              type="button"
              className={`toggleBtn ${displayRegister ? "on" : "off"}`}
              onClick={handleAuthClick}
            >
              Login
            </button>
          </div>
          <div className="socialIcons">
            <img src={Youtube}></img>
            <img src={X}></img>
            <img src={Facebook}></img>
          </div>
          <form className="form" id="register">
            <input
              type="text"
              className="inputField"
              placeholder="User ID"
              required
            ></input>
            <input
              type="text"
              className="inputField"
              placeholder="Password"
              required
            ></input>
            <input type="checkbox" className="checkBox"></input>
            <span className="checkboxStyle">Remember Password</span>
            <button type="button" className="submitButton">
              Login
            </button>
          </form>
          
        </div>
      )}
      
     
    </>
  );
}

export default Navbar;
