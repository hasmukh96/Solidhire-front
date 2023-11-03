import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/Main.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Blogs", link: "/blog" },
    { name: "E-books", link: "/ebooks" },
  ];
  let [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const closeMenu = (e) => {
      if (
        !menuRef.current.contains(e.target) &&
        !menuIconRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("click", closeMenu);
    } else {
      document.removeEventListener("click", closeMenu);
    }

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [open]);

  return (
    <div className="  shadow-md w-full sticky top-0 left-0">
      <div className="md:flex md:px-10 items-center justify-between bg-white py-4 ">
        <div className="flex gap-1 items-center">
          <a href="#Home">
            <img src={logo} alt="logo" />
          </a>

          <h1 className="text-3xl text-green-500 hover:text-green-600">
            SolidHire
          </h1>
        </div>

        <div
          ref={menuIconRef}
          onClick={toggleMenu}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          ref={menuRef}
          className={`md:flex md:items-center text-center md:pb-0 pb-12 absolute md:static bg-white  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 px-5 transition-all  duration-500 ease-in ${
            open ? "top-9 " : "top-[-400px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 md:my-0 my-8 md:hover:-translate-y-1 duration-300"
              style={{
                transition: 0.3,
              }}
            >
              <Link
                to={link.link}
                className="text-gray-800 hover:text-gray-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div
            className="bg-green-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-green-800 hover:-translate-y-1
              duration-300"
          >
            <button>Get Started</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
