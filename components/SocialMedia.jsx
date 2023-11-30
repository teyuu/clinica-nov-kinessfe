import Link from "next/link";
import React from "react";

const SocialMedia = () => {
  const contactDetails = [
    {
      icon: "ri-instagram-line",
      label: "Instagram",
      text: "@clinicakinessfe_",
      link: "https://www.instagram.com/clinicakinessfe_/?hl=es-la",
    },
    {
      icon: "ri-facebook-fill",
      label: "Facebook",
      text: "Clínica Kinessfe",
      link: "https://www.facebook.com/profile.php?id=100083596687337",
    },
  ];

  return (
    <div className="bg-[#619b8a] text-white">
      <div className="container  mx-auto py-5 ">
        {/* Title */}
        <div className="p-5 ">
          <h1 className="text-2xl lg:text-4xl text-center  border-b-4 ">
            NUESTRAS REDES
          </h1>
        </div>
        {/* Title end */}
        <div className="flex flex-col gap-5 md:flex-row justify-evenly px-3 py-5">
        {contactDetails.map((detail, index) => (
            <Link key={index} href={detail.link}
              
                target="_blank"
                className="flex flex-col md:w-[35%] items-center justify-center gap-2 rounded-lg p-4 bg-white text-[#619b8a] hover:bg-opacity-90 transition duration-300"
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

{
  /* <div className="w-full">

<div className="p-5 ">
    <h1 className="text-2xl lg:text-4xl text-center xl:text-start border-b-4 ">
      ESPECIALIDADES
    </h1>
  </div>
  {contactDetails.map((detail, index) => (
    <Link key={index} href={detail.link} target="_blank" className="flex xl:flex-row  justify-center item gap-5">
      <div className="rounded-full border-4 p-2 text-6xl  transform hover:scale-110 ease-out transition duration-200">
        <i className={detail.icon}></i>
      </div>
      <div className="my-auto w-full">
        <p>{detail.label}</p>
        <p>{detail.text}</p>
      </div>
    
    </Link>
  ))}
</div> */
}
