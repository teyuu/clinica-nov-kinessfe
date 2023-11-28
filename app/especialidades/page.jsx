import React from "react";
import Image from "next/image";
import therapist from "../../assets/masaje.png";
import TOcupacional from "../../assets/to.png";
import Divan from "../../assets/divan.png";
import Nutrition from "../../assets/nutricion.png";
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
    // ... (otras especialidades con información similar)
  ];
  
  const EspecialidadesDetalladasSection = () => {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-8 md:px-16 lg:px-32">
          <h2 className="text-4xl font-bold text-center mb-8">Especialidades Detalladas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {especialidades.map((especialidad) => (
              <div key={especialidad.alt} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex justify-center items-center mb-6">
                  <Image
                    src={especialidad.img}
                    alt={especialidad.alt}
                    width={250}
                    height={250}
                    className="rounded-full"
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
