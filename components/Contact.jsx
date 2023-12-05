import Link from "next/link";
import React from "react";

const SocialMedia = () => {
    const contactDetails = [
          {
            icon: "ri-phone-line",
            label: "Numero telefónico",
            text: "342-550243",
            link:"https://api.whatsapp.com/send/?phone=3426260983&text&type=phone_number&app_absent=0"
          },
          {
            icon: "ri-mail-line",
            label: "Correo",
            text: "Kinessfearistobulo@gmail.com",
            link:'mailto:kinessfearistobulo@gmail.com'
          },
          {
            icon: "ri-map-pin-line",
            label: "Dirección",
            text: "Av. Aristóbulo del Valle 7289, Santa Fe",
            link: "https://www.google.com/maps?ll=-31.601379,-60.692122&z=16&t=m&hl=es-419&gl=AR&mapclient=embed&cid=5110505007982402871"
          },
        ];

  return (
    <div className="bg-[#619b8a] text-white">
      <div className="container  mx-auto py-5 ">
        {/* Title */}
        <div className="p-5 ">
          <h1 className="text-2xl lg:text-4xl text-center  border-b-4 ">
            CONTACTO
          </h1>
        </div>
        {/* Title end */}
        <div className="flex flex-col gap-5 md:flex-row justify-evenly px-3 py-5">
        {contactDetails.map((detail, index) => (
            <Link key={index} href={detail.link}
              
                target="_blank"
                className="flex flex-col w-full  items-center justify-center gap-2 rounded-lg p-4 bg-white text-[#619b8a] hover:bg-opacity-90 transition duration-300"
              >
                <div className="text-4xl">
                  <i className={detail.icon}></i>
                </div>
                <p className="font-semibold">{detail.label}</p>
                <p className="text-sm">{detail.text}</p>
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;


