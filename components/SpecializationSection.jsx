import React from "react";
import Image from "next/image";
import therapist from "../assets/masaje.png";
import TOcupacional from "../assets/tocupacional.png";
import Divan from "../assets/divan.png";
import Nutrition from "../assets/nutrition.png";
import Lotus from "../assets/lotus.png";
import ConsultorioImg from "../assets/logo3.png";

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
    <div className="h-screen flex flex-col gap-5">
      <section className="lg:h-2/5  p-5 flex flex-col justify-evenly">
        <div className="border-b-4">
          <h1 className="text-4xl ">Especialidades</h1>
        </div>

        <div className="flex flex-col flex-wrap lg:flex-row justify-between  md:basis-52 gap-4  text-white">
          {especialidades.map((e) => {
            return (
              <div
                key={e.alt}
                className="rounded-xl bg-[#319e5d] lg:w-[15%] flex flex-col justify-center items-center "
              >
                <Image src={e.img} width={80} height={0} alt={e.alt} />
                <p className="text-xl text-center">{e.nombre}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="lg:h-2/5 p-5 bg-[#319e5d] text-white text-justify lg:flex items-center">
        <div className=" flex flex-col justify-center items-center gap-14 lg:flex-row ">
          <p className="lg:w-[50%]">
            &quot;En nuestra clínica de rehabilitación y medicina integral, nos
            enorgullecemos de ofrecer una gama completa de servicios
            especializados para atender todas las necesidades de nuestros
            pacientes. Nuestro equipo multidisciplinario está compuesto por
            profesionales altamente capacitados en diversas áreas de la salud.
            En conjunto, nuestro equipo trabaja unido con un objetivo común:
            brindar un cuidado integral y personalizado que promueva la
            recuperación, el bienestar y la mejora continua de la calidad de
            vida de nuestros pacientes.&quot;
          </p>
          <Image
  src={ConsultorioImg}
  width={100}
  alt=""
  
/>
        </div>
      </section>
    </div>
  );
};

export default SpecializationSection;

{
  /* <div className="flex items-center ">
<p className="w-[50%] border-b-4 ">
&quot;En nuestra clínica de rehabilitación y medicina integral, nos
  enorgullecemos de ofrecer una gama completa de servicios
  especializados para atender todas las necesidades de nuestros
  pacientes. Nuestro equipo multidisciplinario está compuesto por
  profesionales altamente capacitados en diversas áreas de la salud.
   En conjunto,
  nuestro equipo trabaja unido con un objetivo común: brindar un
  cuidado integral y personalizado que promueva la recuperación, el
  bienestar y la mejora continua de la calidad de vida de nuestros
  pacientes.&quot;
</p>
<Image
  src={ConsultorioImg}
  width={100}
  alt=""
  
/>
</div> */
}
