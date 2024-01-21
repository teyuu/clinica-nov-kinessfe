import React from 'react'
import NavItem from './NavItem'


const MobileMenu = ({ nav, handleNav, navItems }) => {

  return (
    <ul className={`${nav ? "left-0" : "left-[-100%]"} z-[1] fixed top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#619b8a] ease-in-out duration-500 lg:hidden `}>
    <div className="w-auto py-2 text-4xl font-extrabold text-white m-4">
      <span className="border-b">KINESSFE</span>
    </div>
    {navItems.map((item) => (
      <NavItem key={item.itemName} {...item} />
    ))}

  </ul>
  )
}

export default MobileMenu