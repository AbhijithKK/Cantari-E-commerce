import "./Home.css";
import Header from "../Header/Header";
import Bluebg from "../../Assets/blueLeft.png";
import Black from "../../Assets/blackLeft.png";
import Orangebg from "../../Assets/orangemango.png";
import Oright2 from "../../Assets/orangeright.png";
import roundTxt from "../../Assets/circle/Group 2 836.png";
import imogi from "../../Assets/emo 1.png";
import shadow from "../../Assets/shadow.png";
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

      <div className="show-product">
        <div style={{overflow:'hidden'}}>
        <img src={roundTxt} alt="" className="round-imgss" />
        </div>
        <div className="Img-Container">
          <div className="leftImages">
            <img src={Bluebg} alt="" />
            <img src={Black} alt="" />
            <img src={shadow} alt="" />
          </div>
          <div className="rightImages">
            <img src={Orangebg} alt="" />
            <img src={Oright2} alt="" />
          </div>
        </div>
      </div>
      <div className="products-text">
            <div className="proText1">
            <p><span style={{color:'#1a5797'}}>Products</span> Within</p>
            </div>
            <div className="proText2">
            <p>Your Province</p>
            </div>
        </div>
        <div className="inputbox">
            <select name="" id="">
                <option hidden value="">Select province</option>
                <option value="">option2</option>
                <option value="">option3</option>
            </select>
        </div>
        <div>
        <div className="white-body">
          
        </div>
        </div>
    </>
  );
};

export default Home;
