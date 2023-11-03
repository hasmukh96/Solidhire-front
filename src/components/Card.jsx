import React from "react";
import lime from "../assets/Lime-Shape-1.svg";
// import lime2 from "../assets/Lime-Shape-2.svg";

const Card = () => {
  return (
    <div className="bg-[#3ac63f] flex text-white justify-center items-center pl-[6rem] h-[40vh] text-center">
      <h1 className="md:text-5xl text-3xl">
        "Makes it extremely easy to manage hiring"
      </h1>
      <img
        src={lime}
        className="self-start -mt-[3rem] w-[100px]"
        alt="lime-logo"
      />
    </div>
  );
};

export default Card;
