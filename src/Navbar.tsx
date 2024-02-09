import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useCollapse } from 'react-collapsed';

function Navbar() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/home" className="siteTitle" >
            Bean & Brews
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/login" {...getToggleProps()}>{isExpanded ? 'Login' : 'Login'}</NavLink>
            <div className="loginContainer" {...getCollapseProps()}>
              <form>
                <p className="formTitle">Login</p>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <input type="submit" placeholder="SUBMIT"/>
              </form>
            </div>
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
