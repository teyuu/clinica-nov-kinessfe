import React from "react";
import Image from "next/image";
import therapist from "../assets/masaje.png";
import TOcupacional from "../assets/to.png";
import Divan from "../assets/divan.png";
import Nutrition from "../assets/nutricion.png";
import Lotus from "../assets/lotus.png";
// import ConsultorioImg from "../assets/logo3.png";

const especialidades = [
  {
    nombre: "Kinesiología y Fisiatría",
    img: therapist,
    alt: "therapist",
  },
  {
    nombre: "Terapia ocupacional",
    img: TOcupacional,
    alt: "TOcupacional",
  },
  {
    nombre: "Psicología",
    img: Divan,
    alt: "Divan",
  },
  {
    nombre: "Nutrición",
    img: Nutrition,
    alt: "Nutrition",
  },
  {
    nombre: "Medicina Integral",
    img: Lotus,
    alt: "Lotus",
  },
];

const SpecializationSection = () => {
  return (
    <div className="h-auto w-full">
       
      <section className="text-white bg-[#619b8a] h-fit space-y-5  px-16 py-10">
        
        <div className="p-5 ">
          <h1 className="text-2xl lg:text-4xl text-center xl:text-start border-b-4 ">ESPECIALIDADES</h1>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center xl:justify-between">
          {especialidades.map((e) => (
            <div key={e.alt} className="text-center p-5 space-y-8  w-fit sm:w-[50%] xl:w-fit flex flex-col items-center">
              <div className="bg-gray-100 rounded-3xl w-48 h-[12rem] flex items-center justify-center border-4 ">
                <Image src={e.img} width={100} alt={e.nombre} />
              </div>
              <p className="text-lg border-b w-48">{e.nombre}</p>
            </div>
          ))}
        </div>
      </section>

 <section className="h-fit space-y-5  px-16 py-10 bg-gray-100 text-black">
        <div className="flex flex-col justify-center items-center gap-14   py-12">
          <p className="font-extrabold text-5xl text-center ">
            ¿QUÉ VAS A ENCONTRAR?
          </p>
          <p className="lg:w-[50%] text-lg text-justify">
          &quot;En nuestra clínica de rehabilitación y medicina integral, nos
            enorgullecemos de ofrecer una gama completa de servicios
            especializados para atender todas las necesidades de nuestros
            pacientes. Nuestro equipo multidisciplinario está compuesto por
            profesionales altamente capacitados en diversas áreas de la salud.
            En conjunto, nuestro equipo trabaja unido con un objetivo común:
            brindar un cuidado integral y personalizado que promueva la
            recuperación, el bienestar y la mejora continua de la calidad de
            vida de nuestros pacientes&quot; 
          </p>
        </div>
      </section> 
    </div>
  );
};

export default SpecializationSection;
