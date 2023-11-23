import "./Home.css";
import text from "../../Assets/text.png";
import Header from "../Header/Header";
import Blue from "../../Assets/blueLeft.png";
import Black from "../../Assets/blackLeft.png";
import Orane1 from "../../Assets/orangeRight.png";
import Oright2 from "../../Assets/orangeright.png";
import curv from "../../Assets/halfRound.png";
import roundTxt from "../../Assets/circle/Group 2 836.png";
import imogi from '../../Assets/emo 1.png'
const Home = () => {
  return (
    <>
      <div className="home-header">
        <Header />
      </div>
      <div className="Home-text">
        <p>unique curry powers</p>
      </div>
      <div className="BigText">
        <div>Wake Up Your</div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <img src={imogi} alt="" />
      </div>
      <div className="BigText1">
      <div>Taste Buds With Us</div> 
      </div>
    </>
  );
};

export default Home;
