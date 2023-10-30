import React from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";

const Companies = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto md:py-12 py-8 text-center">
        <div className="container mx-auto p-3 text-center">
          <h2 className="text-4xl">Used at companies you know.</h2>
          <div className="flex flex-wrap justify-evenly items-center md:gap-2 gap-[1rem] mt-4 md:ml-0 md:px-0 px-[5rem]">
            <img src={logo1} className="w-24 md:w-32" alt="" />
            <img src={logo4} className="w-20 md:w-24" alt="" />
            <img src={logo2} className="w-24 md:w-32" alt="" />
            <img src={logo3} className="w-24 md:w-32" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
