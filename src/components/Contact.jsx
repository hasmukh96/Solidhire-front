import React from "react";
const Contact = () => {
  return (
    <div className="bg-[#effaf8] mt-[2rem] py-[4rem]">
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="bg-white md:p-[120px] p-[20px] md:m-0 m-[1rem] flex flex-col justify-left rounded-3xl">
          <h1 className="text-5xl text-gray-600 font-bold">
            Get Your Free Copy Now
          </h1>
          <p className="mt-5">
            To get your Free copy, fill up the below form, and we will email it
            to you.
          </p>
          <form className="flex flex-col gap-2 mt-10 text-left">
            <label className="text-gray-700">Your First Name</label>
            <input
              type="text"
              className="w-full border-[2px] rounded-sm border-gray py-2 pl-2 md:pr-[20rem] pr-[10rem] focus:border-blue-500 text-left"
              required
            />
            <label className="text-gray-700">Your Last Name</label>
            <input
              type="text"
              className="w-full border-[2px] rounded-sm border-gray py-2 pl-2 md:pr-[20rem] pr-[10rem] focus:border-blue-500 text-left"
              required
            />
            <label className="text-gray-700">Your Work Email</label>
            <input
              type="email"
              className="w-full border-[2px] rounded-sm border-gray py-2 pl-2 md:pr-[20rem] pr-[10rem] focus:border-blue-500 text-left"
              required
            />
            <label className="text-gray-700">Your Company's Website</label>
            <input
              type="url"
              className="w-full border-[2px] rounded-sm border-gray py-2 pl-2 md:pr-[20rem] pr-[10rem] focus:border-blue-500 text-left"
              required
            />
            <label className="text-gray-700">
              <input type="checkbox" required /> Send me more content on
              building better HR practices at my startup
            </label>

            <button
              type="submit"
              className="bg-[#0b0f8f] text-white self-end md:py-3 py-2 md:px-8 md:w-auto w-full mt-10 text-center md:rounded-xl hover:bg-violet-600 
                duration-300"
            >
              Get your copy now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
