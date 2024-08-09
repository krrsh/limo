import React from "react";
import { selects } from "../data/data";
import bg from "../assets/images/bg.png";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full h-screen pb-[50px] lg:p-[80px]"
    >
      <div className="flex flex-col items-center pt-5 gap-10">
        <h1 className="text-[40px] lg:text-[70px] font-bold text-white text-center">Find Your Car @ LimoCart</h1>
        <h2 className="lg:text-[30px] text-[20px] text-white px-5 text-center">We have many best rental car collections.</h2>
        <div className="text-white lg:flex-row w-[400px] lg:w-[700px] flex flex-col gap-5">
          {selects.map((item, index) => (
            <div className="relative" key={index}>
                <span className="font-semibold">{item.title}</span>
              <img className="absolute right-5 bottom-4" src={item.icon} alt="icon" />
              <select className="text-slate-800 mt-3 appearance-none outline-none p-2 w-full h-[50px]" name={item.title} id={index}>
                {item.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <button className="bg-primary text-white transition-transform transform duration-300 hover:scale-105 hover:shadow-md w-[400px] lg:w-[700px] uppercase p-1 h-[50px]">Find your car</button>
      </div>
    </section>
  );
};

export default Hero;
