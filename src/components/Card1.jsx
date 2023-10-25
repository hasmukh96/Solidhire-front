import React from "react";
import card3x1 from "../assets/card3x1.png";
import card3 from "../assets/card3.png";
const Card1 = () => {
  return (
    <div className="flex py-[80px] md:mx-[150px] justify-center gap-10 items-center">
      <div className="flex  sm:flex-col gap-10">
        <p>Custom Career page</p>
        <h2 className="text-4xl font-bold">
          Custom Careers page for your company
        </h2>
        <p>
          Get custom careers page for your startup at the click of a button.
        </p>
      </div>
      <div>
        <img src={card3} alt="" />
      </div>
    </div>
  );
};

export default Card1;
