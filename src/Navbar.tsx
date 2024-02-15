import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useCollapse } from "react-collapsed";
import Youtube from "./Assets/youtube.png";
import Facebook from "./Assets/icons8-facebook-48.png";
import X from "./Assets/icons8-twitterx-48.png";
import Login from "./Pages/Login";

function Navbar() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const handleLoginClick = () => {
    <form className="form" id="login">
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
      <span>Remember Password</span>
      <button type="button" className="submitButton">
        Login
      </button>
    </form>;
  };
  const handleRegisterClick = () => {
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
      <span>I agree to the terms & conditions</span>
      <button type="button" className="submitButton">
        Login
      </button>
    </form>;
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

      <div className="formBox" {...getCollapseProps()}>
        <div className="buttonBox">
          <div id="btn"></div>
          <button type="button" className="toggleBtn">
            Log in
          </button>
          <button
            type="button"
            className="toggleBtn"
            onClick={handleRegisterClick}
          >
            Register
          </button>
        </div>
        <div className="socialIcons">
          <img src={Youtube}></img>
          <img src={X}></img>
          <img src={Facebook}></img>
        </div>
      </div>
      <script></script>
    </>
  );
}

export default Navbar;
