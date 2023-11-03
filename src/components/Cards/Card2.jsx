import React from "react";
import card2 from "./assets/card2.png";

const Card2 = () => {
  return (
    <div className="bg-[#e6ff9e]">
      <div className="md:flex md:flex-row flex-col md:py-[100px] py-[60px] justify-between md:gap-[5rem] items-center md:mx-[130px] mx-7">
        <div>
          <img src={card2} alt="card2" className=" rounded-md sm:mb-2" />
        </div>
        <div className="md:flex flex-col md:text-left text-center md:mt-0 mt-4 gap-2">
          <p>Organize</p>
          <h2 className="text-4xl font-bold md:my-2 my-5">
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
