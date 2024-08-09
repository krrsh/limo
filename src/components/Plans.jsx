import React, { useState } from "react";
import { plans } from "../data/data";

const Plans = () => {
  const [active, setActive] = useState("Monthly");
  const toggleFunc = ()=>{
    setActive((prev)=>prev === 'Monthly' ? 'Annually' : 'Monthly')
  }

  return (
    <section className="flex flex-col text-center items-center mx-[10px] gap-10 mb-[100px]">
      <h1 className="uppercase font-bold text-[30px] ">
        save by choosing best plans for you
      </h1>
      <div className="flex gap-10 font-semibold items-center text-[20px]">
        <span onClick={() => setActive("Monthly")} className="cursor-pointer">
          Monthly
        </span>

        <span
          onClick={toggleFunc}
          className={` h-[40px] w-[80px] bg-[#E8E8E8] border-[#DFDFDF] cursor-pointer rounded-3xl flex p-[5px]`}
        >
          <div
            className={`bg-primary w-[40%] rounded-full transition-transform duration-300 ${
              active === "Monthly"
                ? "transform translate-x-0"
                : "transform translate-x-[150%]"
            }`}
          ></div>
        </span>

        <span onClick={() => setActive("Annually")} className="cursor-pointer">
          Annually
        </span>
      </div>
      <div className="flex flex-col gap-10 lg:mt-[70px] lg:flex-row justify-evenly">
        {plans.map((item, index) => (
          <div
            className={`${
              item.title === "recommended"
                ? "bg-cardbg lg:scale-110"
                : "bg-[#F5F5F5]"
            } flex flex-col items-center gap-6 p-10  border rounded-xl hover:cursor-pointer hover:shadow-lg w-[350px]`}
            key={index}
          >
            <h2 className="text-title uppercase font-bold">{item.title}</h2>
            <h1 className="text-title text-[40px] font-bold">{item.price}</h1>
            <div className="text-description text-[15px] text-left">
              {item.services.map((services, index) => (
                <div key={index}>{services}</div>
              ))}
            </div>
            <button
              className={`${
                item.title === "recommended" ? "bg-primary" : "bg-title"
              } text-white w-full px-5 py-3 transition-transform transform duration-300 hover:scale-105`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
