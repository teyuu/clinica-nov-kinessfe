import React from "react";
import Image from "next/image";
import teamImage from "../../assets/team-image.jpg"

const QuienesSomosSection = () => {
  return (
    <section className=" bg-gray-100 py-16">
      <div className="container mx-auto px-8 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src={teamImage}
              alt="Equipo"
              className="rounded-lg"
              width={600}
              height={400}
            />
          </div>
          <div>
            <h2 className="text-4xl font-medium mb-4 uppercase">Quiénes Somos</h2>
            <p className="text-lg mb-6">
              Somos una clínica comprometida con la salud y el bienestar integral. Nuestra misión es proporcionar atención médica de calidad, enfocada en el paciente y centrada en brindar soluciones efectivas para mejorar su calidad de vida.
            </p>
            <p className="text-lg mb-6">
              Con un equipo multidisciplinario, nos esforzamos por ofrecer un enfoque integral para cada paciente. Valoramos la empatía, la dedicación y la excelencia en el cuidado de la salud.
            </p>
            <p className="text-lg mb-6">
              Nuestro compromiso se enfoca en el cuidado de la salud, proporcionando servicios innovadores y persiguiendo constantemente la excelencia en el tratamiento y la rehabilitación de nuestros pacientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomosSection;
