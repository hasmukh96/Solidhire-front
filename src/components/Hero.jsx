import React from "react";
import hero from "../assets/hero.png";
import Eclipse800 from "../assets/Ellipse-2-p-800.png";

const Hero = () => {
  return (
    <div
      className={`  gap-10 md:flex md:h-[100vh] justify-center items-center`}
      style={{
        background: `url(${Eclipse800}) no-repeat center center/cover fixed`,
      }}
      id="Home"
    >
      <div className="flex md:text-left text-center flex-col p-6 gap-10 md:w-[50%] sm:w-full">
        <h1 className="text-5xl  font-bold leading-tight">
          Hiring Got You Feeling Overwhelmed? SolidHire to the Rescue!
        </h1>
        <div className="border-b-[4px] border-green-500 md:w-[50%] mt-[-30px] "></div>
        <p className=" w-[100%]">
          SolidHire is the ultimate tool for streamlining your hiring process.
          With features like customizable job templates, easy applicant
          tracking, and seamless communication, you can easily manage every step
          of the way. Plus, with the ability to add multiple users and access
          data on-the-go, collaboration with your team is a breeze. Try it out
          now and see why our users hire 5x faster with SolidHire!
        </p>
        <div className="mt-[-30px]">⭐⭐⭐⭐⭐</div>
        <button onClick={() => window.open("https://app.solidhire.io")} className="m-0 md:px-[50px] py-[10px] rounded-lg text-white bg-green-500 duration-300 hover:bg-green-700 sm:w-[50%]">
          Get Free Early Access
        </button>
      </div>
      <div className="md:mx-0 mx-7">
        <img src={hero} alt="" className="w-[500px] " />
      </div>
    </div>
  );
};

export default Hero;
