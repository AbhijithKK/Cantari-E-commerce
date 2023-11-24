import React from "react";
import "./Product.css";
import cart from '../../Assets/add2cart.png'
type Props={
    tag:string,
    img:any,
    name:string,
    kg:string,
    color:string
}
const Product = ({tag,img,name,kg,color}:Props) => {
  return (
    <>
      <div className="main-Pro-body">
        <div className="productBody" style={{
            backgroundColor:color
        }}>
          <div className="newTad">
            <div>{tag}</div>
          </div>
          <div className="product-image">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="footer">
          <div>{name}</div>
          <div style={{
            display:'flex',
            justifyContent:'flex-end'}}>
          <img  src={cart} alt="" />
          </div>
          <div className="footer-txt">
            <div>{kg}</div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Product;
