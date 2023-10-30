import React from "react";
import form1 from "./assets/form1.png";
const Card4 = () => {
  return (
    <div className="bg-[#e6ff9e]">
      <div className="flex  md:flex-row flex-col md:py-[100px] py-[60px] md:mx-[150px] mx-4 md:justify-between justify-center items-center gap-[3rem]">
        <div className=" ">
          <img
            src={form1}
            alt="card2"
            className="rounded-md md:w-[70%] w-full md:mx-0 px-[5rem]"
          />
        </div>
        <div className="flex md:text-left text-center flex-col md:ml-[1rem] ml-0 md:gap-10 gap-2 md:w-[50%]">
          <p>Communicate</p>
          <h2 className="text-4xl font-bold">
            Send emails to candidates right from Dashboard
          </h2>
          <p>
            Communicate with candidates by sending email right from dashboard.
            The best part? It remembers your email template for each stage so
            that you don't need to rewrite everytime you want to send an email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card4;
