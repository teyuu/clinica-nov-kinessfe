import React from "react";
import Image from "next/image";
import therapist from "../../assets/masaje.png";
import TOcupacional from "../../assets/to.png";
import Divan from "../../assets/divan.png";
import Nutricion from "../../assets/nutricion.png";
import Lotus from "../../assets/lotus.png";

const especialidades = [
    {
      nombre: "Kinesiología y Fisiatría",
      img: therapist,
      alt: "therapist",
      descripcion:
        "Especialidad enfocada en la rehabilitación física y el tratamiento de lesiones musculoesqueléticas. Nuestros especialistas trabajan en la recuperación y el fortalecimiento del sistema musculoesquelético para mejorar la movilidad y la calidad de vida.",
    },
    {
      nombre: "Terapia Ocupacional",
      img: TOcupacional,
      alt: "TOcupacional",
      descripcion:
        "Servicio dedicado a ayudar a las personas a recuperar habilidades para realizar actividades diarias, ofreciendo terapias personalizadas para mejorar la independencia y la funcionalidad en entornos laborales y cotidianos.",
    },
    {
      nombre: "Nutricion",
      img: Nutricion,
      alt: "Nutricion",
      descripcion:
        "...",
    },
    {
      nombre: "Psicologia",
      img: Divan,
      alt: "Divan",
      descripcion:".."
    },
    {
      nombre: "Medicina Integral",
      img: Lotus,
      alt: "Lotus",
      descripcion:"..."
    }, 
  ];
  
  const EspecialidadesDetalladasSection = () => {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-8 md:px-16 lg:px-32">
          <h2 className="text-4xl font-medium text-center uppercase mb-8">Especialidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {especialidades.map((especialidad) => (
              <div key={especialidad.alt} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center ">
                <div className="  rounded-3xl w-48 h-[12rem] flex items-center justify-center border-2 mb-5 ">
                  <Image
                    src={especialidad.img}
                    alt={especialidad.alt}
                    width={80}
                    height={80}

                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{especialidad.nombre}</h3>
                <p className="text-gray-700 text-center">{especialidad.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  
  export default EspecialidadesDetalladasSection;
