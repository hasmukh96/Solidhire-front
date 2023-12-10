import React from "react";
import people1 from "../assets/people1.png";
import people2 from "../assets/people2.png";
import people3 from "../assets/people3.png";
import people4 from "../assets/people4.png";

const Testimonial = () => {
  return (
    <div className="flex flex-col gap-20">
      <h1 className="text-5xl font-bold text-center">Should you read it?⬇️</h1>
      <div className="flex md:flex-row justify-center items-center flex-col gap-10 md:mx-[120px] ">
        <div className="flex flex-col justify-between p-[2rem] h-[30rem] w-[250px] shadow-md rounded-sm">
          <p className="text-sm leading-6">
            "As a startup founder, I found this ebook to be an invaluable
            resource for setting up and managing HR policies at our company. The
            step-by-step guide and case studies were particularly helpful in
            helping us to align our HR practices with our company's culture and
            values. Highly recommend!"
          </p>
          <div className="flex gap-5">
            <img src={people1} alt="people1" />
            <p className="text-sm">
              Rachel <br />
              <span className="text-gray-400">Founder & CEO</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between p-[2rem] w-[250px] shadow-md rounded-sm h-[30rem]">
          <p className="text-sm leading-6">
            "As a startup consultant, I've seen firsthand how effective HR
            policies can make a big difference in the success of a company. This
            ebook provides a comprehensive guide to setting up and managing HR
            policies at a startup, and is a must-read for any startup founder or
            HR manager. Great resource!"
          </p>
          <div className="flex gap-5">
            <img src={people2} alt="people2" />
            <div className="flex flex-col text-sm">
              <p>Sam</p>
              <p className="text-gray-400">Startup</p>
              <p className="text-gray-400">Consultant</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between p-[2rem] w-[250px] h-[30rem] shadow-md rounded-sm">
          <p className="text-sm leading-6">
            "As an HR manager at a growing startup, I appreciated the practical
            tips and advice in this ebook. It helped me to understand the
            importance of HR policies and how to craft effective ones that are
            aligned with our company's goals. Would definitely recommend to
            anyone looking to set up HR policies at their startup."
          </p>
          <div className="flex gap-5">
            <img src={people3} alt="people3" />
            <p className="text-sm">
              Jason <br />
              <span className="text-gray-400">HR Manager</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between p-[2rem] w-[250px] h-[30rem] shadow-md rounded-sm">
          <p className="text-sm leading-6">
            "As a startup founder, I found this ebook to be an invaluable
            resource for setting up and managing HR policies at our company. The
            step-by-step guide and case studies were particularly helpful in
            helping us to align our HR practices with our company's culture and
            values. Highly recommend!"
          </p>
          <div className="flex gap-5">
            <img src={people4} alt="people4" />
            <p className="text-sm">
              Emily <br />
              <span className="text-gray-400">Manager</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
