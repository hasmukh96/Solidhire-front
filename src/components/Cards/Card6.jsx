import React from "react";
import card6 from "./assets/card6x2.png";
const Card6 = () => {
  return (
    <div className="bg-[#e6ff9e]">
      <div className="md:flex md:flex-row flex-col md:py-[100px] py-[60px] justify-between items-center md:mx-[120px] mx-7 gap-[5rem]">
        <div>
          <img src={card6} alt="card2" className=" rounded-md " />
        </div>
        <div className="md:flex flex-col md:text-left text-center gap-2 md:mt-0 mt-8">
          <p className=" uppercase ">Easy Filter</p>
          <h2 className="text-4xl font-bold md:my-2 my-5">
            Filter and sort through your data.
          </h2>
          <p>
            Sort and filter through your data easily to find the candidates with
            appropriate recruitment status.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card6;
