"use client";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const heroTextStyle = {
    title:
      "text-4xl md:text-6xl font-bold leading-tight uppercase transform duration-1000 ease-in-out",
    subtitle:
      "md:text-2xl font-medium leading-tight uppercase transform duration-1000 ease-in-out",
  };

  return (
    <div
      style={{ backgroundImage: `url(/landing.jpg)` }}
      className={`bg-cover bg-center h-[750px] lg:h-screen w-full text-white relative overflow-hidden`}
    >
      <div className="h-full flex flex-col justify-evenly items-center font-PlayfairDisplay">
        <div className="flex flex-col w-[90%] justify-center text-center gap-5">
          <h1
            className={`${heroTextStyle.title} ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Rehabilitación y<br />
            medicina integral
          </h1>
          <h2
            className={`${heroTextStyle.subtitle} ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Cuidado integral para una vida plena: Recupera tu vitalidad física,
            emocional y mental
          </h2>
        </div>
        <Link
          href="https://api.whatsapp.com/send/?phone=3426260983&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <button className={`${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } rounded bg-white text-black border-black py-4 px-8 hover:bg-[#619b8a] hover:text-white transition-color duration-200 uppercase`}>
            Pedi tu turno
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
