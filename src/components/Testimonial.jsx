import React from "react";
import people1 from "../assets/people1.png";
import people2 from "../assets/people2.png";
import people3 from "../assets/people3.png";
import people4 from "../assets/people4.png";

const Testimonial = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-5xl font-bold text-center">Should you read it?⬇️</h1>
      <div className="flex gap-6 px-8">
        <div classname="flex">
          <p classname="">
            "As a startup founder, I found this ebook to be an invaluable
            resource for setting up and managing HR policies at our company. The
            step-by-step guide and case studies were particularly helpful in
            helping us to align our HR practices with our company's culture and
            values. Highly recommend!"
          </p>

          <div className="flex gap-6">
            <img src={people1} alt="" />
            <div>
              {" "}
              <h3 className="font-black">Rachel</h3>
              <p>Founder & CEO</p>
            </div>
          </div>
        </div>
        <div classname="flex">
          <p classname="">
            "As a startup consultant, I've seen firsthand how effective HR
            policies can make a big difference in the success of a company. This
            ebook provides a comprehensive guide to setting up and managing HR
            policies at a startup, and is a must-read for any startup founder or
            HR manager. Great resource!"
          </p>

          <div className="flex gap-6">
            <img src={people2} alt="" />
            <div>
              {" "}
              <h3 className="font-black">Sam</h3>
              <p>Startup </p>
              <p>Consultant</p>
            </div>
          </div>
        </div>
        <div classname="flex">
          <p classname="">
            "As an HR manager at a growing startup, I appreciated the practical
            tips and advice in this ebook. It helped me to understand the
            importance of HR policies and how to craft effective ones that are
            aligned with our company's goals. Would definitely recommend to
            anyone looking to set up HR policies at their startup."
          </p>

          <div className="flex gap-6">
            <img src={people3} alt="" />
            <div>
              {" "}
              <h3 className="font-black">Jason</h3>
              <p>HR Manager</p>
            </div>
          </div>
        </div>
        <div classname="flex">
          <p classname="">
            "As a startup employee, I found this ebook to be a great resource
            for understanding my rights and responsibilities as an employee. The
            clear and concise explanations of HR policies were easy to
            understand, and the case studies provided valuable insights into how
            other startups have implemented effective HR policies. Highly
            recommend to anyone working at a startup."
          </p>

          <div className="flex gap-6">
            <img src={people4} alt="" />
            <div>
              {" "}
              <h3 className="font-black">Emily</h3>
              <p>Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
