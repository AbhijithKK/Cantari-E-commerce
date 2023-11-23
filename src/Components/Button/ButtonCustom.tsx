import React from "react";

const ButtonCustom = ({ name, textColor, bgColor, wt, ht, fn }: any) => {
  return (
    <>
      <button
        style={{
          color: textColor,
          backgroundColor: bgColor,
          width: wt,
          height: ht,
        }}
        onClick={fn}
        type="button"
      >
        {name}
      </button>
    </>
  );
};

export default ButtonCustom;
