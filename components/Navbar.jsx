'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../assets/logo3.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navItems = ['Inicio', 'Quienes somos', 'Especialidades', 'Contacto', 'Pedi tu turno'];
  const textColor = 'text-white';
  const bgColor = 'bg-[#000300]';
  const borderColor = 'border-r border-r-gray-900';
  const underline = 'cursor-pointer hover:border-b transition duration-200		'

  const handleNav = () => {
    setNav(prevState => !prevState);
  };

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth > 768) {
        setNav(false);
      }
    };

    window.addEventListener('resize', closeMenuOnResize);

    return () => {
      window.removeEventListener('resize', closeMenuOnResize);
    };
  }, []);

  return (
    <div className='font-PlayfairDisplay flex justify-between items-center h-24  mx-auto px-4 text-white bg-[#319e5d] w-auto'> 

      <div className='flex items-center gap-2'>
      <Image
      src={logo}
      width={60}
      alt='logo'
      
      />
      <h1 className='hidden md:block w-auto text-3xl font-bold text-white  cursor-pointer'> CLINICA KINESSFE</h1>
      </div>
      
      {/* Navigation for larger screens */}
      <ul className={`hidden lg:flex justify-between items-center`}>
        {navItems.map(item => (
          <li key={item} className={`m-4 ${underline} uppercase`}>
            {item}
          </li>
        ))}
      </ul>
      
      {/* Hamburger menu for smaller screens */}
      <div onClick={handleNav} className={`block lg:hidden`}>
        {nav ?  <i className="ri-close-fill"></i> : <i className="ri-menu-fill"></i>}
      </div>

      {/* Dropdown menu for smaller screens */}
      <ul className={`${textColor} fixed left-0 top-0 w-[60%] h-full ${borderColor} ${bgColor} ease-in-out duration-500 ${!nav && 'left-[-100%]'}`}>
        <div className='w-auto py-2 text-4xl font-extrabold text-[#319e5d] m-4'>
          <span className=' border-b'>KINESSFE</span>
        </div>
        {navItems.map(item => (
          <li key={item} className={`p-4 border-b border-gray-600`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
