"use client";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

import { bgGreen } from "@/data/tailwindClasses";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const heroTextStyle = {
    title:
      "text-4xl md:text-6xl font-bold leading-tight text-center w-fit uppercase  font-Lato  ",
    subtitle:
      "md:text-2xl font-medium leading-tight uppercase  text-center",
  }

  return (
    <div
      style={{ backgroundImage: `url(/landing.png)` }}
      className="bg-cover bg-center h-[750px] lg:h-screen w-full text-white  overflow-hidden"
    >
      <div className="h-full flex flex-col justify-evenly items-center font-PlayfairDisplay px-2">
        <div className= {`${ bgGreen} shadow-xl shadow-gray-400  flex flex-col  justify-center items-center gap-5  bg-opacity-90 w-fit lg:w-[60%] rounded-xl p-10 `}>
          <div
            className={`${heroTextStyle.title} flex flex-col  `}
          >
            <span className="  ">Rehabilitación</span> <span>y</span>
           <span className="">medicina integral</span> 
          </div>
          <h2
            className={`${heroTextStyle.subtitle} ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Cuidado integral para una vida plena: Recupera tu<br/>vitalidad física,
            emocional y mental
          </h2>
        </div>
        <Link
          href="#specializationSection"
         
   
       
        >
          <button className={`rounded-full border w-[80px] bg-[#649d8d] bg-opacity-100 py-5`}>
          <i className="ri-arrow-down-line text-2xl"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
