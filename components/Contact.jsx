import React from "react";

const Contact = () => {
  const contactDetails = [
    {
      icon: "ri-phone-line",
      label: "Numero telefónico",
      text: "342-550243",
    },
    {
      icon: "ri-mail-line",
      label: "Email",
      text: "Kinessfearistobulo@gmail.com",
    },
    {
      icon: "ri-map-pin-line",
      label: "Dirección",
      text: "Av. Aristóbulo del Valle 7289, Santa Fe",
    },
  ];

  return (
    <div className="bg-[#619b8a] text-white">
      <div className="container  lg:h-72 mx-auto py-5 flex flex-col lg:flex-row justify-between items-center gap-5">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex w-full justify-center gap-5 transform hover:scale-90 ease-out transition duration-200">
            <div className="rounded-full border-4 p-2 text-6xl">
              <i className={detail.icon}></i>
            </div>
            <div className="my-auto w-full">
              <p>{detail.label}</p>
              <p>{detail.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

