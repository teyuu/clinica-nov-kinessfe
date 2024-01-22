import React from 'react'
import NavItem from './NavItem'


const MobileMenu = ({ nav, handleNav, navItems }) => {

  return (
    <div className={`${nav ? "left-0" : "left-[-100%]"} z-[1] fixed top-0 w-[100%] h-full border-r border-r-gray-900 bg-[#619b8a] ease-in-out duration-500 lg:hidden `}>
    
    <div className=' h-[10vh] flex items-center justify-end'>
    <i className="ri-close-fill text-4xl mr-4  rounded-full border bg-white bg-opacity-20" onClick={handleNav}/>
    </div>
<div className='flex justify-center h-1/2 items-center'>

    <ul className='w-fit flex flex-col items-center gap-5'>
    {navItems.map((item) => (
      <NavItem key={item.itemName} {...item} handleNav={handleNav}/>
    ))}
    <button className="bg-[#31544c] uppercase font-bold bg-opacity-80 rounded-xl px-4 py-3 ">
              PEDí TU TURNO
            </button>
    </ul>
    
</div>


  </div>
  )
}

export default MobileMenu