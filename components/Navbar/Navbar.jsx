"use client";
/// Navbar.js
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo1.png";
import NavItem from "./NavItem";
import UpperNavbar from "./UpperNavbar";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const navItems = [
    { itemName: "Inicio", link: "/" },
    { itemName: "Quienes somos", link: "/quienes-somos" },
    { itemName: "Especialidades", link: "/especialidades" },
  ];

  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = () => setNav((prevState) => !prevState);

  return (
    <>
      <UpperNavbar />

      <nav
        className={`min-w-[360px] font-PlayfairDisplay flex justify-between items-center h-24 mx-auto px-4 text-white bg-[#619b8a] w-full z-10 transition duration-300 ${
          scrolled ? "border-b border-white" : "border-b-0 border-transparent"
        }`}
      >
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src={logo} width={60} alt="logo" className="border" />
            <h1 className="hidden md:block w-auto text-3xl font-bold text-white  cursor-pointer">
              CLINICA KINESSFE
            </h1>
          </div>
        </Link>

        <ul className="hidden lg:flex justify-between items-center">
          {navItems.map((item) => (
            <NavItem key={item.itemName} {...item} />
          ))}
          <Link
            href="https://api.whatsapp.com/send/?phone=3426260983&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <button className="btn rounded-xl border py-4 px-8 hover:bg-white hover:text-black transition-color duration-200">
              PEDI TU TURNO
            </button>
          </Link>
        </ul>

        <div onClick={handleNav} className={`block lg:hidden`}>
          {nav ? (
            <i className="ri-close-fill"></i>
          ) : (
            <i className="ri-menu-fill"></i>
          )}
        </div>

        <MobileMenu nav={nav} handleNav={handleNav} navItems={navItems} />
      </nav>
    </>
  );
};

export default Navbar;
