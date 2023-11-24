import "./Home.css";
import Header from "../Header/Header";
import Bluebg from "../../Assets/blueLeft.png";
import Black from "../../Assets/blackLeft.png";
import Orangebg from "../../Assets/orangemango.png";
import Oright2 from "../../Assets/orangeright.png";
import roundTxt from "../../Assets/circle/Group 2 836.png";
import imogi from "../../Assets/emo 1.png";
import shadow from "../../Assets/shadow.png";
import Product from "../Product/Product";
import img1 from "../../Assets/p1.png";
import img2 from "../../Assets/p2.png";
import img3 from "../../Assets/p3.png";
import img4 from "../../Assets/p4.png";
import ButtonCustom from "../Button/ButtonCustom";
import btnPic from "../../Assets/circle/Vector.png";
const Home = () => {
  let arr: string[];
  return (
    <>
      <div className="home-header">
        <Header />
      </div>
      <div style={{ overflow: "hidden" }}>
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
          <div style={{ overflow: "hidden" }}>
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
      </div>
      <div className="products-text">
        <div className="proText1">
          <p>
            <span style={{ color: "#1a5797" }}>Products</span> Within
          </p>
        </div>
        <div className="proText2">
          <p>Your Province</p>
        </div>
      </div>
      <div className="inputbox">
        <select name="" id="">
          <option hidden value="">
            Select province
          </option>
          <option value="">option2</option>
          <option value="">option3</option>
        </select>
      </div>
      <div>
        <div className="white-body"></div>
        <div className="Product_display">
          {/* { */}
          {/* arr.map((val, i) => ( */}
          <>
            <div className="inner-disply1">
              <Product tag="New" img={img1} name="ffff" kg="10kg" color="" />
            </div>
            <div className="inner-disply2">
              <Product
                tag="New"
                img={img2}
                name="ffff"
                kg="10kg"
                color="#DDE4FD"
              />
            </div>
            <div className="inner-disply1">
              <Product
                tag="New"
                img={img3}
                name="ffff"
                kg="10kg"
                color="#F7FDDD"
              />
            </div>
            <div className="inner-disply2">
              <Product
                tag="New"
                img={img4}
                name="ffff"
                kg="10kg"
                color="#F2E7FF"
              />
            </div>
          </>
          {/* ))} */}
        </div>
        <div className="more-product">
          <ButtonCustom
            name="More Products"
            textColor="white"
            bgColor="#0051A0"
            wt="197px"
            ht="56px"
            fn
            img={btnPic}
          />
        </div>
        </div>
        <div className="fav-recipe">
          <div className="recipe-txt">
          <span>Cook &nbsp;</span> With Favorite Recipe
          </div>
          
          <div className="recipe-txt01">
            <div>

          YUMMY DUCK ROAST
            </div>
            <div>
            Next Recipe
            </div>
          </div>
          <div className="recipe-image">
            <div className="recipe-img-bg">
              <div className="recipe-img-title">
              <h1>step2</h1>
              <h1>step2</h1>
              <h1>step2</h1>
              </div>
              <p></p>
            </div>
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Home;
