import React from 'react'
import Link from 'next/link'

const NavItem = ({ link, itemName }) => {
  return (
    <li className={`m-4 uppercase font-semibold hover:border-b-2 duration-100  `}>
    <Link href={link}>{itemName}</Link>
  </li>
  )
}

export default NavItem