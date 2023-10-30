import React from "react";
import card8 from "./assets/card8.png";

const Card8 = () => {
  return (
    <div className="bg-[#e6ff9e]">
      <div className="md:flex md:flex-row flex-col md:py-[100px] py-[60px] justify-between items-center md:mx-[120px] mx-7 gap-[5rem]">
        <div>
          <img src={card8} alt="card2" className=" rounded-md " />
        </div>
        <div className="md:flex flex-col md:text-left text-center md:mt-0 mt-8 md:gap-5 md:w-[50%]">
          <p className=" uppercase ">Ready available 1000+ job templates</p>
          <h2 className="text-4xl font-bold md:my-2 my-5">
            No more copying job description from other job listings.
          </h2>
          <p>
            Search through our ready available 1000+ job templates and just
            copy-paste your requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card8;
