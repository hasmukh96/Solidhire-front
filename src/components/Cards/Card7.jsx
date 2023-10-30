import React from "react";
import card7 from "./assets/card7.png";

const Card7 = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse md:py-[100px] py-[60px]  mt-1 md:mx-[150px] mx-0 justify-center md:mb-[0] gap-[4rem] items-center">
      <div className="md:flex md:flex-col md:text-left text-center md:w-[70%] w-auto">
        <p>Multiple users</p>
        <h2 className="text-4xl my-2 font-bold">
          Add Multiple users with restricted access to your data.
        </h2>
        <p>
          Add unlimited users under 2 minutes that gets access to your data
          making it easy to collaborate.
        </p>
      </div>
      <div className="md:mt-0 mt-6 md:self-start ">
        <img src={card7} alt="" />
      </div>
    </div>
  );
};

export default Card7;
