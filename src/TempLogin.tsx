import Youtube from "./Assets/youtube.png";
import Facebook from "./Assets/icons8-facebook-48.png";
import X from "./Assets/icons8-twitterx-48.png";

function TempLogin() {
  return (
    <>
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
      </form>
    </>
  );
}

export default TempLogin;
