import React from "react";
import Image from "next/image";

import { bgGreen } from "@/data/tailwindClasses";

const Footer = () => {
  const clinicDetails = {
    name: "CLINICA KINESSFE",
    hoursOfOperation: [
      "Lunes a viernes: 8 a 20 hs.",
    ],
    phone: "(342) - 6260983",
    address: "Av. Aristóbulo del Valle 7289, Santa Fe",
    email: "Kinessfearistobulo@gmail.com",
  };

  return (
    <>
    <div className={`xl:h-72 min-w-[360px] flex flex-col justify-center items-center gap-3 text-white ${bgGreen}`}>
      <div className="container mx-auto py-8 px-5 flex flex-col xl:flex-row justify-center gap-8">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 ">
            <Image src='/logo1.jpeg' width={70} height={60} alt="Logo" />
          </div>
          <h1 className="font-PlayfairDisplay text-xl font-bold cursor-pointer">
            {clinicDetails.name}
          </h1>
        </div>
        <div className="flex flex-col gap-4 text-lg">
          <p className="font-semibold uppercase">Horarios de atención</p>
          {clinicDetails.hoursOfOperation.map((hours, index) => (
            <p key={index}>{hours}</p>
          ))}
        </div>
        <div className="flex flex-col gap-4 text-lg">
          <p className=" font-semibold uppercase">Teléfono</p>
          <p >{clinicDetails.phone}</p>
          <p >(342) - 4736803</p>
        </div>
        <div className="flex flex-col gap-4 text-lg ">
          <p className="font-semibold">DIRECCIÓN</p>
          <p >{clinicDetails.address}</p>
          <p >Av Blas Parera 8314</p>
        </div>
      </div>
      <div className="container mx-auto flex xl:justify-center px-5 xl:px-0 text-slate-100 ">
      <i className="ri-copyright-line"></i>
      <p > 2025 KINESSFE. ALL RIGHTS RESERVED</p>
    </div>
      </div>
    </>
  );
};

export default Footer;


