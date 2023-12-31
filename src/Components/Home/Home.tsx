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
import recipe1 from "../../Assets/recipe1.png";
import recipe2 from "../../Assets/recipe2.png";
import ButtonCustom from "../Button/ButtonCustom";
import btnPic from "../../Assets/circle/Vector.png";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { HomePage } from "../../Api/api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const colors=['','#DDE4FD','#F7FDDD','#F2E7FF']
  const [products,setProducts]=useState<string[]>([])
  const GetProducts=async()=>{
    let data=await HomePage()
    const newData=await data?.map((val:any,i:number):any=>{
      val.color=colors[i]
      return val
    })
    setProducts(newData)
  }
  const Navigate=useNavigate()
  const GetMoreProduct=()=>{
    Navigate('/shop')
  }
 useEffect(()=>{
  GetProducts()
 },[])
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
          {
           products.map((val:any, i) => ( 
          <>
            <div key={i} className={i%2===0 ?"inner-disply1":"inner-disply2"}>
              <Product tag="New" img={val?.image} name={val?.title} kg={val?.price} color={val?.color} />
            </div>
          </>
           ))}
        </div>
        <div className="more-product">
          <ButtonCustom
            name="More Products"
            textColor="white"
            bgColor="#0051A0"
            wt="197px"
            ht="56px"
            fn={GetMoreProduct}
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
            Next Recipe &gt;
            </div>
          </div>
          <div className="recipe-image">
            <div className="recipe-img-bg">
              <div className="recipe-img-title">
              <h2>step01----</h2>
              <h2>step02----</h2>
              <h2>step3</h2>
              </div>
              <p>Prepared with Currease’s Duck roast instant curry mix, the tender and juicy meat with its crispy skin glazed with honey can be the perfect holiday main dish for occasions such as Thanksgiving, Christmas, or New Year’s eve.</p>
              <p>Honey can be the perfect holiday main dish for occasions such as Thanksgiving, Christmas, or New Year’s eve.</p>
            </div>
            <img src={recipe1} alt="" />
            <img src={recipe2} alt="" />
          </div>
         
        </div>
      {/* </div> */}
      <div className="home-footer">
      <Footer/>
      </div>
    </>
  );
};

export default Home;
