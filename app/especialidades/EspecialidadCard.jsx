// EspecialidadCard.js
import React from "react";
import Image from "next/image";

const EspecialidadCard = ({ especialidad }) => {
  return (
    <div className="bg-[#619b8a] p-6 rounded-lg shadow-md flex flex-col items-center transition duration-300 transform hover:scale-105 hover:shadow-lg">
      <div className="rounded-full w-32 h-32 flex items-center justify-center bg-white mb-4 transition duration-300 transform hover:rotate-3">
        <Image
          src={especialidad.img}
          alt={especialidad.alt}
          width={80}
          height={120}
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center text-white">
        {especialidad.nombre}
      </h3>
      <ul className="list-disc text-white ml-6">
  <li>Rehabilitación vestibular</li>
  <li>Rehabilitación cardiorespiratoria</li>
  <li>Rehabilitación traumatológica</li>
  <li>Rehabilitación neurológica</li>
  <li>Rehabilitación respiratoria para niños y adultos</li>
  <li>Reeducación postural con enfoque global</li>
</ul>
    </div>
  );
};

export default EspecialidadCard;
