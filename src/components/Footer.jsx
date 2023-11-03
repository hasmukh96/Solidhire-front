import React from "react";
import linkdin from "../assets/linkdin.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col gap-10 justify-evenly md:m-[2rem] m-[2rem] items-center">
      <h1 className="text-4xl font-bold">Solid Hire</h1>
      <p className="text-center md:w-[40%]">
        Contact : hello@solidhire.io / +91-8149057809 Hustlebug Technologies Pvt
        Ltd, Mumbai, India <br /> © 2022 SolidHire. Made with ❤️ in India
      </p>
      <ul className="flex self-center gap-10">
        <li className=" list-none text-green-500">
          {" "}
          <a href="">Home</a>{" "}
        </li>
        <li className=" list-none text-green-500">
          {" "}
          <a href="">Blogs</a>
        </li>
        <li className=" list-none text-green-500">
          {" "}
          <a href="">eBooks</a>
        </li>
      </ul>
      <ul className="flex md:-mt-0 -mt-4">
        <li>
          {" "}
          <a href="#">
            <img src={linkdin} alt="" />
          </a>
        </li>
        <li>
          {" "}
          <a href="#">
            <img src={twitter} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
