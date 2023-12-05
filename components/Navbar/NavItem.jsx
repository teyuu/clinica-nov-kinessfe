import React from 'react'
import Link from 'next/link'

const NavItem = ({ link, itemName }) => {
  return (
    <li className={`m-4 uppercase font-semibold`}>
    <Link href={link}>{itemName}</Link>
  </li>
  )
}

export default NavItem