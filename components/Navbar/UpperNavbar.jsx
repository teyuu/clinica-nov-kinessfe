import React from 'react'
import Link from 'next/link'

const UpperNavbar = () => {
  return (
    <div className="hidden bg-gray-100 text-gray-600 md:flex justify-end px-5 items-center gap-10">
    <p className="text-[0.9rem]">
      Av. Aristóbulo del Valle 7289, Santa Fe - Tel: (342) - 6260983
    </p>
    <div className="text-xl space-x-5">
      <Link href="https://api.whatsapp.com/send/?phone=3426260983&text&type=phone_number&app_absent=0" target="_blank">
        <i className="ri-whatsapp-line"></i>
      </Link>
      <Link href="https://www.instagram.com/clinicakinessfe_/?hl=es-la" target="_blank">
        <i className="ri-instagram-line"></i>
      </Link>
      <Link href="https://www.facebook.com/profile.php?id=100083596687337" target="_blank">
        <i className="ri-facebook-circle-line"></i>
      </Link>
    </div>
  </div>
  )
}

export default UpperNavbar