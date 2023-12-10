import React from "react";
import removebg from "../assets/removebg.png";

const Ebooks_hero = () => {
  return (
    <div className="flex md:flex-row flex-col  md:text-left md:mx-auto m-[2rem] text-center justify-center items-center md:h-[100vh] gap-10 flex-1">
      <div className="flex flex-col md:w-[50%] gap-6">
        <h1 className="text-5xl font-bold ">
          Transform Your Startup's HR Practices with Our Comprehensive Guide
        </h1>
        <p className="text-[90%] md:w-[50%] w-auto text-gray-500">
          Learn how to set up and manage effective HR policies that align with
          your company's culture and values, and ensure compliance with laws and
          regulations
        </p>
        <h4 className="text-4xl font-semibold">
          Price: $ 9.99 <span className="text-green-400">$ 0.00</span>
        </h4>
        <h4 className="text-red-600 text-4xl font-bold">
          Limited time period Offer!🎁
        </h4>
        <button
          type="submit"
          className="bg-[#3ac63f] text-white md:w-fit w-full px-7 py-4 md:text-left text-center rounded-xl  hover:bg-green-800 
              duration-300"
        >
          Get your FREE copy now
        </button>
      </div>
      <img src={removebg} alt="bg" />
    </div>
  );
};

export default Ebooks_hero;
