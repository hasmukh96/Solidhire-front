import React from "react";

const Form = () => {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center gap-10 md:p-[120px] p-[20px] ">
      <h1 className="text-5xl">Get Early Access</h1>
      <p>Our team will contact you asap.</p>
      <form className="flex flex-col gap-5 text-center">
        <label className="text-gray-700">Email Address:</label>
        <input
          type="text"
          placeholder="name@example.com"
          className="w-full border-[2px] border-gray py-2 pl-2 md:pr-[20rem] pr-[10rem] text-left"
        />
        <button
          type="submit"
          className="bg-[#3ac63f] text-white self-center md:py-3 py-2 md:px-8  md:w-auto w-full  text-center md:rounded-xl hover:bg-green-800 
              duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
