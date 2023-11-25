import "./Shop.css";
import ShopHeader from "../../Components/ShopHeader/ShopHeader";
import Product from "../Product/Product";
import img1 from "../../Assets/p1.png";
import ButtonCustom from "../Button/ButtonCustom";
import btnsymbol from "../../Assets/downarrow.png";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { AllProducts } from "../../Api/api";
import { Link } from "react-router-dom";

const Shop = () => {
  const colors = [ "","#DDE4FD", "#F7FDDD","#F2E7FF",
    "","#DDE4FD","#F7FDDD","#F2E7FF","","#DDE4FD",
    "#F7FDDD","#F2E7FF","","#DDE4FD","#F7FDDD",
    "#F2E7FF","","#DDE4FD","#F7FDDD","#F2E7FF",
    "","#DDE4FD","#F7FDDD","#F2E7FF",
  ];
  const [prolimit, setProlimit] = useState<string[]>([]);
  const [product, setProduct] = useState<string[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  const GetAllProduct = async () => {
    const data = await AllProducts();
    const newdata = await data.map((val: any, i: number): string => {
      val.color = colors[i];
      return val;
    });
    setProduct(newdata);
    const limitdata = await newdata.filter((val: any, i: number): any => {
      let arr = [];
      arr.push(val);
      if (i <= 8) {
        return arr;
      }
    });
    setProlimit(limitdata);
  };
  const MoreProduct = () => {
    setProlimit(product);
    setRefresh(!refresh);
  };
  useEffect(() => {
    setProlimit(product);
  }, [refresh,product]);
  useEffect(() => {
    GetAllProduct();
  }, []);
  return (
    <div>
      <ShopHeader />
      <div className="shop-container">
        <div className="product-count">
          Showing {prolimit?.length} of {product?.length}
        </div>
        <div className="shop-product-show">
          {prolimit.map((val: any, i) => (
            <div key={i} className="inner-disply3">
                <Link to={`/details/${val?.id}`} style={{textDecoration:'none'}}>
              <Product
                tag="New"
                img={val?.image}
                name={val?.title}
                kg={val?.price}
                color={val?.color}
                />
                </Link>
            </div>
          ))}
        </div>
        <div className="shop-moreButton">
          {refresh === false ? (
            <ButtonCustom
              name="More"
              textColor="white"
              bgColor="#0051A0"
              wt="70px"
              ht="35px"
              fn={MoreProduct}
              img={btnsymbol}
            />
          ) : (
            ""
          )}
        </div>
        <div className="shop-like-text-container">
          <div className="shop-like-text">
            You May <span>Also Like</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="shop-arrow1">&lt;</div>
            <div className="shop-arrow2">&gt;</div>
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
        <Footer />
      </div>
    </div>
  );
};

export default Shop;
