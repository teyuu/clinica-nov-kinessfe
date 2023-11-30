import React from "react";
import Image from "next/image";
import therapist from "../assets/masaje.png";
import TOcupacional from "../assets/to.png";
import Divan from "../assets/divan.png";
import Nutrition from "../assets/nutricion.png";
import Lotus from "../assets/lotus.png";
import Link from "next/link";
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
          <h1 className="text-2xl lg:text-4xl text-center xl:text-start border-b-4 ">
            ESPECIALIDADES
          </h1>
        </div>

       
        <div className="flex flex-col sm:flex-row flex-wrap items-center xl:justify-between">
          {especialidades.map((e) => (
            <Link
              key={e.alt}
              className="text-center p-5 space-y-8  w-fit sm:w-[50%] xl:w-fit flex flex-col items-center "
              href='/especialidades'
            >
            
              <div className="transform hover:scale-110 transition ease-out duration-300 bg-white hover:bg-opacity-90 text-[#619b8a] rounded-lg w-48 h-[12rem] flex items-center justify-center  ">
                <Image src={e.img} width={100} alt={e.nombre} />
              </div>
              <p className="text-lg border-b w-48">{e.nombre}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="h-fit space-y-5  px-16 py-10 bg-gray-100 text-black">
        <div className="flex flex-col justify-center items-center gap-14   py-12">
          <p className="font-extrabold text-5xl text-center ">NUESTRA VISIÓN</p>
          <p className="lg:w-[50%] text-lg text-justify">
            &quot;En Clínica Kinessfe, nuestro enfoque se basa en la
            colaboración entre distintas disciplinas para ofrecer una atención
            integral. Buscamos brindar un cuidado personalizado que promueva la
            recuperación y el bienestar de quienes nos eligen, mejorando su
            calidad de vida. Nos dedicamos a proporcionar servicios
            especializados en diversas áreas de la salud, adaptados a las
            necesidades individuales de cada paciente. Trabajamos juntos con un
            objetivo común: asegurar una atención que impulse la recuperación,
            el bienestar continuo y la mejora constante de la calidad de vida de
            cada persona.&quot;
          </p>
        </div>
      </section>
    </div>
  );
};

export default SpecializationSection;
