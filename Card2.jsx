import React from "react";
import card2 from "../assets/card2.png";
import card2x1 from "../assets/card2x500.png";
import card2x2 from "../assets/card2x800.png";
const Card2 = () => {
  return (
    <div className="bg-[#e6ff9e]">
      <div className="md:flex md:flex-row flex-col md:py-[80px] py-4 justify-between items-center md:mx-[130px] mx-7 gap-[3rem]">
        <div>
          <img src={card2} alt="card2" className=" rounded-md " />
        </div>
        <div className="md:flex md:text-left text-center sm:gap-8">
          <p>Organize</p>
          <h2 className="text-4xl font-bold my-5">
            Tidy up your applications.
          </h2>
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
