import React from "react";

const ButtonCustom = ({ name, textColor, bgColor, wt, ht, fn ,img}: any) => {
  return (
    <>
      <button
        style={{
          color: textColor,
          backgroundColor: bgColor,
          width: wt,
          height: ht,
          borderRadius:'12px',
          border:"0px solid transparent",
          fontWeight:'bolder',
          cursor:'pointer'
        }}
        onClick={fn}
        type="button"
      >
        {name}&nbsp;
        <img src={img} alt=""style={{
            height:'13px'
        }} />
      </button>
    </>
  );
};

export default ButtonCustom;
