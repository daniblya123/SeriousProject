import Youtube from "./Assets/youtube.png";
import Facebook from "./Assets/icons8-facebook-48.png";
import X from "./Assets/icons8-twitterx-48.png";
import "./Signup.css";

function TempSignup() {
  return (
    <>
      <div className="formBox">
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
          <span>I agree to the terms & conditions</span>
          <button type="button" className="submitButton">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default TempSignup;
