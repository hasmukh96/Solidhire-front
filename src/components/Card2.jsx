import React from "react";
import card2 from "../assets/card2.png";
import card2x1 from "../assets/card2x500.png";
import card2x2 from "../assets/card2x800.png";
const Card2 = () => {
  return (
    <div className="bg-[#e6ff9e]">
      <div className="flex py-[80px] justify-between items-center mx-[130px] gap-[3rem]">
        <div>
          <img src={card2} alt="card2" className=" rounded-md " />
        </div>
        <div className="flex  sm:flex-col gap-8">
          <p>Organize</p>
          <h2 className="text-4xl font-bold">Tidy up your applications.</h2>
          <p>
            Get all the applications on a single window. checkout applications,
            resumes, change status, add remarks, etc in an organized way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
