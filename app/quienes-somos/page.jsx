import React from "react";
import Image from "next/image";
import { bgGreen } from "@/data/tailwindClasses";


const QuienesSomosSection = () => {
  return (
    <section className="xl:h-[90vh] flex items-center bg-gray-100 py-16">
      <div className="container mx-auto px-8 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src='/team-image.jpg'
              alt="Equipo"
              className="rounded-lg"
              width={600}
              height={400}
            />
          </div>
          <div className="text-justify tracking-tighter">
         
          <h1 className={`p-2 mb-10  font-bold text-2xl lg:text-4xl text-start  border-b-4 text-white ${bgGreen} bg-opacity-80`}>
            QUIENES SOMOS
          </h1>
          
            <p className="text-xl mb-6 font-light">
              Somos una clínica comprometida con la salud y el bienestar integral. Nuestra misión es proporcionar atención médica de calidad, enfocada en el paciente y centrada en brindar soluciones efectivas para mejorar su calidad de vida.
            </p>
            <p className="text-xl mb-6">
              Con un equipo multidisciplinario, nos esforzamos por ofrecer un enfoque integral para cada paciente. Valoramos la empatía, la dedicación y la excelencia en el cuidado de la salud.
            </p>
            <p className="text-xl mb-6">
              Nuestro compromiso se enfoca en el cuidado de la salud, proporcionando servicios innovadores y persiguiendo constantemente la excelencia en el tratamiento y la rehabilitación de nuestros pacientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomosSection;
