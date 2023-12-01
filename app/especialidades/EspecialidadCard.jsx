// EspecialidadCard.js
import React from "react";
import Image from "next/image";

const EspecialidadCard = ({ especialidad }) => {
  return (
    <div className="bg-[#619b8a] p-6 rounded-lg shadow-md flex flex-col items-center transition duration-300 transform hover:scale-105 hover:shadow-lg">
      <div className="rounded-full w-32 h-32 flex items-center justify-center bg-gray-200 mb-4 transition duration-300 transform hover:rotate-3">
        <Image src={especialidad.img} alt={especialidad.alt} width={80} height={120} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center text-white">{especialidad.nombre}</h3>
      <p className="text-gray-100  text-justify ">{especialidad.descripcion}</p>
    </div>
  );
};



export default EspecialidadCard;