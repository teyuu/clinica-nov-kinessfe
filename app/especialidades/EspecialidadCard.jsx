// EspecialidadCard.js
import React from "react";
import Image from "next/image";
import { bgGreen } from "@/data/tailwindClasses";
const EspecialidadCard = ({ especialidad }) => {
  return (
    <div
      className={`bg-[#649d8d] h-[500px] bg-opacity-90 p-6 rounded-lg shadow-md flex flex-col items-center transition duration-300 transform hover:scale-105 hover:shadow-lg`}
    >
      <div className="rounded-full w-32 h-32 flex items-center justify-center bg-white mb-4 transition duration-300 transform hover:rotate-3">
        <Image
          src={especialidad.img}
          alt={especialidad.alt}
          width={80}
          height={120}
        />
      </div>
      <h3 className="text-2xl w-full text-center font-semibold mb-2  text-white">
        {especialidad.nombre}
      </h3>
      {especialidad.tratamientos && (
        <ul className="text-white text-xl w-[65%] tracking-tighter space-y-5 ">
          {especialidad.tratamientos.map((tratamiento, index) => (
            <li className=" list-disc text-center w-full" key={index}>
              {tratamiento}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EspecialidadCard;
