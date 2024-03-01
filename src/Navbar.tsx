import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
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
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/home">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
