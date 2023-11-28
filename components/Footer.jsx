import React from "react";
import Image from "next/image";
import LogoImage from "../assets/logo1.png";

const Footer = () => {
  const clinicDetails = {
    name: "CLINICA KINESSFE",
    hoursOfOperation: [
      "Lunes a viernes de 8 a 20 hs.",
    ],
    phone: "(342) - 6260983",
    address: "Av. Aristóbulo del Valle 7289, Santa Fe",
    email: "Kinessfearistobulo@gmail.com",
  };

  return (
    <div className="xl:h-80 min-w-[360px] flex items-center text-white bg-[#619b8a]">
      <div className="container mx-auto py-8 px-5 flex flex-col xl:flex-row justify-center gap-8">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 border">
            <Image src={LogoImage} width={64} height={64} alt="Logo" />
          </div>
          <h1 className="font-PlayfairDisplay text-xl font-bold cursor-pointer">
            {clinicDetails.name}
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-medium">Horarios de atención:</p>
          {clinicDetails.hoursOfOperation.map((hours, index) => (
            <p key={index}>{hours}</p>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-medium">Teléfono: {clinicDetails.phone}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-medium">Dirección: {clinicDetails.address}</p>
          <p className="font-medium">Email: {clinicDetails.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;


