import "./Shop.css";
import ShopHeader from "../../Components/ShopHeader/ShopHeader";
import Product from "../Product/Product";
import img1 from "../../Assets/p1.png";
import ButtonCustom from "../Button/ButtonCustom";
import btnsymbol from '../../Assets/downarrow.png'
import Footer from "../Footer/Footer";

const Shop = () => {
  return (
    <div>
      <ShopHeader />
      <div className="shop-container">
        <div className="product-count">Showing 09 of 15</div>
        <div className="shop-product-show">
          <div className="inner-disply3">
            <Product tag="New" img={img1} name="ffff" kg="10kg" color="" />
          </div>
          <div className="inner-disply3">
            <Product tag="New" img={img1} name="ffff" kg="10kg" color="" />
          </div>
          <div className="inner-disply3">
            <Product tag="New" img={img1} name="ffff" kg="10kg" color="" />
          </div>
          <div className="inner-disply3">
            <Product tag="New" img={img1} name="ffff" kg="10kg" color="" />
          </div>
        </div>
        <div className="shop-moreButton">
        <ButtonCustom name='More' textColor='white' bgColor='#0051A0' wt='70px' ht='35px' fn img={btnsymbol} />
        </div>
        <div className="shop-like-text-container">
            <div className="shop-like-text">
                You May <span>Also Like</span> 
            </div>
           <div style={{
            display:'flex',
            justifyContent:'space-between'
           }}>
           <div className="shop-arrow1">
                &lt;
            </div>
            <div className="shop-arrow2">
                &gt;
            </div>
           </div>
        </div>
        <div className="shop-product-show">
          <div className="inner-disply3">
            <Product tag="New" img={img1} name="ffff" kg="10kg" color="" />
          </div>
          <div className="inner-disply3">
            <Product tag="New" img={img1} name="ffff" kg="10kg" color="" />
          </div>
          <div className="inner-disply3">
            <Product tag="New" img={img1} name="ffff" kg="10kg" color="" />
          </div>
          </div>
      </div>
      <div className="shopp-footer">
      <Footer/>
      </div>
    </div>
  );
};

export default Shop;
