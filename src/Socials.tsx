import Youtube from "./Assets/youtube.png";
import Facebook from "./Assets/icons8-facebook-48.png";
import X from "./Assets/icons8-twitterx-48.png";
function Socials() {
  return (
    <div className="socialIcons">
      <img src={Youtube}></img>
      <img src={X}></img>
      <img src={Facebook}></img>
    </div>
  );
}
export default Socials;
