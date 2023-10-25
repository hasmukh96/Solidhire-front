import React, { useState } from "react";
import logo from "../assets/Main.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const setToggele = () => {
    setOpen(!open);
  };
  return (
    <div className="flex bg-white top-0 sticky justify-between px-1 py-2 border-b-2">
      <div className="flex gap-1 items-center md:mx-[120px]">
        <img src={logo} alt="logo" />
        <h1 className="text-3xl text-green-500 font-[500] hover:text-green-600">
          SolidHire
        </h1>
      </div>
      <div className="md:flex hidden gap-10 mx-2 p-3 md:mr-[120px]">
        <div
          onClick={() => setToggele}
          className="md:hidden text-3xl absolute right-8 cursor-pointer hover"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul className="flex gap-10 pt-1">
          <li>
            {" "}
            <a href="#">Home</a>
          </li>
          <li>
            {" "}
            <a href="#">Blogs</a>
          </li>
          <li>
            {" "}
            <a href="#">E-books</a>
          </li>
        </ul>
        <button className="m-0 px-[20px] py-[5px] rounded-lg text-white bg-green-500">
          Get Early Access
        </button>
      </div>
    </div>
  );
};

export default Navbar;
