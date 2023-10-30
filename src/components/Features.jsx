import React from "react";
import chartpie from "../assets/ChartPie.svg";
import Bank from "../assets/Bank.svg";
import ChartLineU from "../assets/ChartLineUp.svg";

const Features = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center md:mx-5 px-[3rem] my-[3rem]">
      <h2 className="text-4xl font-bold ">Jam packed full of features</h2>
      <div className="flex md:flex-row flex-col justify-around items-center gap-[2rem] my-[2rem]">
        <div className="flex flex-col justify-center items-center gap-5">
          <img src={chartpie} alt="Grow" className="w-[70px]" />
          <h3 className="text-2xl font-black">Grow as you go</h3>
          <p>
            Structure gives you a clear view on your Applicants so you don’t
            need to worry about losing and finding them. No mess.{" "}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <img src={Bank} alt="Grow" className="w-[70px]" />
          <h3 className="text-2xl font-black">Get organised better</h3>
          <p>
            Keep an eye on your recruitment team’s progress and workload. Get
            real-time charts and other visual highlights to share status and
            spot potential problems.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <img src={ChartLineU} alt="Grow" className="w-[70px]" />
          <h3 className="text-2xl font-black">Find more clarity</h3>
          <p>
            Manage status on each Applicant. Sort and find the right candidate
            every time. No more missing applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
