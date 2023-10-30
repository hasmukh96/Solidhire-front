import React from "react";
import card1x1 from "./assets/card1x1.png";
const Card3 = () => {
  return (
    <div className="flex md:text-left text-center md:flex-row flex-col-reverse md:py-[100px] py-[60px] md:mx-[150px] mx-0 justify-center gap-10 items-center">
      <div className="flex flex-col gap-10">
        <p>Track all openings at one place</p>
        <h2 className="text-4xl font-bold w">
          Track all of your opening on one dashboard.
        </h2>
        <p>Track and manage all of your openings on one dashboard.</p>
      </div>
      <div className="md:px-0 px-2">
        <img src={card1x1} alt="" />
      </div>
    </div>
  );
};

export default Card3;
