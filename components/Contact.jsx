import Link from "next/link";
import React from "react";

const Contact = () => {
  const contactDetails = [
    {
      icon: "ri-phone-line",
      label: "Numero telefónico",
      text: "342-550243",
      link:"https://api.whatsapp.com/send/?phone=3426260983&text&type=phone_number&app_absent=0"
    },
    {
      icon: "ri-mail-line",
      label: "Email",
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
      <div className="container  lg:h-72 mx-auto py-5 flex flex-col lg:flex-row justify-between items-center gap-5">
        {contactDetails.map((detail, index) => (
          <Link key={index} href={detail.link} target="_blank" className="flex w-full justify-center gap-5">
            <div className="rounded-full border-4 p-2 text-6xl  transform hover:scale-110 ease-out transition duration-200">
              <i className={detail.icon}></i>
            </div>
            <div className="my-auto w-full">
              <p>{detail.label}</p>
              <p>{detail.text}</p>
            </div>
          
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Contact;

