import React from "react";
import form1 from "../assets/form1.png";
const Card4 = () => {
  return (
    <div className="bg-[#e6ff9e]">
      <div className="flex py-[100px] mx-[150px] justify-between items-center gap-[3rem]">
        <div className="  mx-[1rem]">
          <img src={form1} alt="card2" className="rounded-md w-[70%]" />
        </div>
        <div className="flex  sm:flex-col ml-[1rem] gap-10 w-[50%]">
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
