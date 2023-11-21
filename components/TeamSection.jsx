import React from "react";
import Image from "next/image";
import Carla from "../assets/teamSection/carla.png";
import Javier from "../assets/teamSection/Javier.png";
import Gisela from "../assets/teamSection/Gisela.png";
import Ruth from "../assets/teamSection/Ruth.png";

const equipo = [
  {
    nombre: "Carla Tellini",
    img: Carla,
    profesion: "Kinesiologa",
  },
  {
    nombre: "Javier Nuñez",
    img: Javier,
    profesion: "Kinesiologo",
  },
  {
    nombre: "Gisela Cervasios",
    img: Gisela,
    profesion: "Terapista ocupacional",
  },
  {
    nombre: "Ruth Montoya",
    img: Ruth,
    profesion: "Nutricionista",
  },
];

const TeamSection = () => {
  return (
    <div className="h-auto ">
      <section className="lg:h-[30rem] h-full xl:px-16 flex flex-col justify-around  p-5]">
        <h1 className="text-4xl border-b-4 w-full uppercase">Equipo</h1>

        <div className="flex flex-col items-center md:flex-row  justify-between flex-wrap ">
          {equipo.map((e) => {
            return (
              <div
                key={e.nombre}
                className="rounded-lg flex flex-col justify-evenly items-center  md:w-[50%] lg:w-auto text-center h-72"
              >
                <Image src={e.img} width={250} alt={e.name} />
                <div>
                  <p>{e.nombre}</p>
                  <p className=" font-bold">{e.profesion}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="lg:h-96 p-5 bg-[#319e5d] text-white text-justify lg:flex items-center">
        <div className=" flex flex-col justify-center items-center gap-14 lg:flex-row ">
          <p className="lg:w-[50%]">
            &quot;En nuestra clínica, contamos con un equipo interdisciplinario
            dedicado y apasionado. Cada miembro, desde nuestros médicos
            especializados hasta nuestros terapeutas, trabaja en armonía para
            ofrecer atención integral y personalizada. Nuestro compromiso radica
            en brindar tratamientos de vanguardia respaldados por una profunda
            empatía, con el objetivo común de mejorar la salud y el bienestar de
            nuestros pacientes. Valoramos la experiencia y la dedicación,
            uniendo esfuerzos para proporcionar un enfoque integral y holístico
            en cada tratamiento que ofrecemos.&quot;
          </p>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
