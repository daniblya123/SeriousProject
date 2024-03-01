import { useState } from "react";
import Socials from "../Socials";
function Login() {
  const [displayRegister, setDisplayRegister] = useState(true);
  const handleAuthClick = () => {
    setDisplayRegister(!displayRegister);
  };
  return (
    <>
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
          <Socials />
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
            <span className="checkboxStyle">
              I agree to the terms & conditions
            </span>
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
          <Socials />
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
export default Login;
