import "./HomeLayout.css";
import Donut from "../Assets/donut.png";
import Ramen from "../Assets/Ramen.png";
import Pizza from "../Assets/Pizza.png";

function Home() {
  return (
    <>
      <p className="MenuText">Menu</p>
      <div className="imageRowContainer">
        <div className="imageRow">
          <div className="box">
            <img src={Donut} className="images"></img>
            <h3>Crazy-Donut</h3>
          </div>
          <div className="box">
            <img src={Ramen} className="images"></img>
            <h3>Ramen</h3>
          </div>
          <div className="box">
            <img src={Pizza} className="images"></img>
            <h3>Pep-Pizza</h3>
          </div>
        </div>
      </div>
      <div className="imageRowContainer">
        <div className="imageRow">
          <div className="box">
            <img src={Donut} className="images"></img>
          </div>
          <div className="box">
            <img src={Donut} className="images"></img>
          </div>
          <div className="box">
            <img src={Donut} className="images"></img>
          </div>
        </div>
      </div>
      <div className="imageRowContainer">
        <div className="imageRow">
          <div className="box">
            <img src={Donut} className="images"></img>
          </div>
          <div className="box">
            <img src={Donut} className="images"></img>
          </div>
          <div className="box">
            <img src={Donut} className="images"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
