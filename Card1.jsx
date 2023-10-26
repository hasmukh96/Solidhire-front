import React from "react";
import card3x1 from "../assets/card3x1.png";
import card3 from "../assets/card3.png";
const Card1 = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse md:py-[100px] py-4 mt-1 md:mx-[150px] mx-0 justify-center md:mb-[0] gap-10 items-center">
      <div className="md:flex md:flex-col md:text-left text-center">
        <p>Custom Career page</p>
        <h2 className="text-4xl my-2 font-bold">
          Custom Careers page for your company
        </h2>
        <p>
          Get custom careers page for your startup at the click of a button.
        </p>
      </div>
      <div className="md:mt-0 mt-6 md:self-start">
        <img src={card3} alt="" />
      </div>
    </div>
  );
};

export default Card1;
