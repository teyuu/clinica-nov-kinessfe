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
    <div className="h-auto flex flex-col">
      <section className="xl:h-[30rem] text-white bg-[#619b8a] px-16 p-5 flex flex-col justify-evenly">
        
        <div className="border-b-4">
          <h1 className="text-4xl ">ESPECIALIDADES</h1>
        </div>

        <div className="flex flex-wrap lg:flex-row justify-between gap-4">
          {especialidades.map((e) => (
            <div key={e.alt} className="text-center space-y-8 border-b p-5">
              <div className="bg-white rounded-3xl h-[12rem] w-48 flex items-center justify-center">
                <Image src={e.img} width={100} alt={e.nombre} />
              </div>
              <p className="text-lg">{e.nombre}</p>
            </div>
          ))}
        </div>
      </section>

 <section className="lg:h-[30rem] p-5 bg-cover bg-center bg-white text-black">
        <div className="flex flex-col justify-center items-center gap-14   py-12">
          <p className="font-extrabold text-5xl ">
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
// bg-[#9BB0A5]