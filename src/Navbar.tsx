import "./Navbar.css";
import ReactSwitch from "react-switch";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a className="siteTitle">Bean And Brew</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <a href="">Contacts</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
