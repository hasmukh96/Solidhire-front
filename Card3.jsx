import React from "react";
import card1 from "../assets/Card1.png";
import card1x1 from "../assets/card1x1.png";
import card1x2 from "../assets/card1x2.png";
const Card3 = () => {
  return (
    <div className="flex md:text-left text-center md:flex-row flex-col-reverse md:py-[80px] py-4 md:mx-[150px] mx-0 justify-center gap-10 items-center">
      <div className="flex flex-col gap-10">
        <p>Track all openings at one place</p>
        <h2 className="text-4xl font-bold w">
          Track all of your opening on one dashboard.
        </h2>
        <p>Track and manage all of your openings on one dashboard.</p>
      </div>
      <div>
        <img src={card1x1} alt="" />
      </div>
    </div>
  );
};

export default Card3;
