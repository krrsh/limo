import React from "react";
import { steps } from "../data/data";

const Steps = () => {
  return (
    <section className="bg-white w-full h-auto">
      <div className="lg:flex-row flex lg:flex-wrap flex-col gap-8 lg:justify-evenly items-center p-[100px]">
        {steps.map((item, index) => (
          <div className=" flex flex-col items-center" key={index}>
            <span className="text-[40px] text-placeholder font-bold italic">
              {item.id}
            </span>
            <span className="font-bold">{item.title}</span>
            <span className="text-description">{item.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
