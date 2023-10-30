import React, { useState } from "react";
import logo from "../assets/Main.png";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Blogs", link: "/" },
    { name: "E-books", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full sticky top-0 left-0">
      <div className="md:flex md:px-10 items-center justify-between bg-white py-4 ">
        <div className="flex gap-1 items-center">
          <img src={logo} alt="logo" />
          <h1 className="text-3xl text-green-500  hover:text-green-600">
            SolidHire
          </h1>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center text-center md:pb-0 pb-12 absolute md:static bg-white  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 px-5 transition-all  duration-500 ease-in ${
            open ? "top-20 " : "top-[-400px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 md:my-0 my-8 md:hover:-translate-y-1"
              style={{
                transition: 0.3,
              }}
            >
              <a href={link.link} className="text-gray-800 hover:text-gray-400">
                {link.name}
              </a>
            </li>
          ))}
          <div
            className="bg-green-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-green-800 
              duration-500"
          >
            <button>Get Started</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
