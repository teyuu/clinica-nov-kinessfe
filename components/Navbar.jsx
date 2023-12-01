"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../assets/logo1.png";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navItems = [
    { itemName: "Inicio", link: "/" },
    { itemName: "Quienes somos", link: "/quienes-somos" },
    { itemName: "Especialidades", link: "/especialidades" },
  ];

  const textColor = "text-white";
  const bgColor = "bg-[#619b8a]";
  const borderColor = "border-r border-r-gray-900";
  const underline = "cursor-pointer hover:border-b transition duration-200		";

  const handleNav = () => {
    setNav((prevState) => !prevState);
  };

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth > 768) {
        setNav(false);
      }
    };

    window.addEventListener("resize", closeMenuOnResize);

    return () => {
      window.removeEventListener("resize", closeMenuOnResize);
    };
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="hidden bg-gray-100 text-gray-600 md:flex justify-end px-5  items-center gap-10 ">
        <p className="text-[0.9rem]">
          {" "}
          Av. Aristóbulo del Valle 7289, Santa Fe - Tel: (342) - 6260983
        </p>
        <div className="text-xl space-x-5"><Link
            href="https://api.whatsapp.com/send/?phone=3426260983&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <i className="ri-whatsapp-line"></i>
          </Link>
          <Link
            href="https://www.instagram.com/clinicakinessfe_/?hl=es-la"
            target="_blank"
          >
            <i className="ri-instagram-line"></i>
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100083596687337"
            target="_blank"
          >
            <i className="ri-facebook-circle-line"></i>
          </Link>
          
        </div>
      </div>

      <nav
        className={`min-w-[360px] font-PlayfairDisplay flex justify-between items-center h-24  mx-auto px-4 text-white bg-[#619b8a] w-full z-10 transition duration-300 ${
          scrolled ? "border-b border-white" : "border-b-0 border-transparent"
        }`}
      >
          <Link href="/">
        <div className="flex items-center gap-2">
          <Image src={logo} width={60} alt="logo" className="border " />
            <h1 className="hidden md:block w-auto text-3xl font-bold text-white  cursor-pointer">
              CLINICA KINESSFE
            </h1>
        </div>
          </Link>

        {/* Navigation for larger screens */}
        <ul className={`hidden lg:flex justify-between items-center `}>
          {navItems.map((e) => (
            <li
              key={e.itemName}
              className={`m-4 ${underline} uppercase font-semibold`}
            >
              <Link href={e.link}>{e.itemName}</Link>
            </li>
          ))}
          <Link
            href="https://api.whatsapp.com/send/?phone=3426260983&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <button className="btn rounded-xl border py-4 px-8 hover:bg-white hover:text-black transition-color duration-200">PEDI TU TURNO</button>
          </Link>
        </ul>

        {/* Hamburger menu for smaller screens */}
        <div onClick={handleNav} className={`block lg:hidden`}>
          {nav ? (
            <i className="ri-close-fill"></i>
          ) : (
            <i className="ri-menu-fill"></i>
          )}
        </div>

        {/* Dropdown menu for smaller screens */}
        <ul
          className={`${textColor} fixed left-0 top-0 w-[60%] h-full ${borderColor} ${bgColor} ease-in-out duration-500 ${
            !nav && "left-[-100%] "
          }`}
        >
          <div className="w-auto py-2 text-4xl font-extrabold text-white m-4 ">
            <span className=" border-b">KINESSFE</span>
          </div>
          {navItems.map((e) => (
            <li key={e.itemName} className={`p-4 border-b border-gray-600 `}>
              <Link href={e.link}>{e.itemName}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
