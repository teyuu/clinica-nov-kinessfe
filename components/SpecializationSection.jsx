import React from "react";
import Image from "next/image";
import Link from "next/link";
import { bgGreen, bgYellow } from "@/data/tailwindClasses";
import especialidades from '../data/especialidades.json'

const SpecializationSection = () => {
  return (
    <div id="specializationSection" className={`${bgGreen} h-auto w-full`}>
      <section className="text-white h-fit space-y-5  px-16 py-10">
        <div className="p-5 ">
          <h1 className="text-2xl lg:text-4xl text-center  border-b-4 ">
            ESPECIALIDADES
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center xl:justify-between">
          {especialidades.map((e) => (
            <Link
              key={e.alt}
              className="text-center p-5 space-y-8  w-fit sm:w-[50%] xl:w-fit flex flex-col items-center"
              href="/especialidades"
            >
              <div
                className={`transform hover:scale-110 transition ease-out duration-300 hover:bg-opacity-90  bg-[#f4f9f7] rounded-lg w-48 h-[12rem] flex items-center justify-center`}
              >
                <Image src={e.img} width={100} height={100} alt={e.nombre} />
              </div>
              <p className="text-lg border-b w-48">{e.nombre}</p>
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href={"/especialidades"}>
            <button className="bg-[#31544c] rounded  p-5 hover:bg-opacity-60 transition duration-300">
              Ver más
            </button>
          </Link>
        </div>
      </section>

      <section className="h-fit space-y-5  px-16 py-10 bg-gray-100 text-black">
        <div className="flex flex-col justify-center items-center gap-14   py-12">
          <p className="font-extrabold text-5xl text-center ">NUESTRA VISIÓN</p>
          <p className="lg:w-[50%] text-lg text-justify">
            &quot;En Kinessfe, creemos que la salud debe abordase en equipo. Por
            eso, contamos con profesionales de distintas especialidades que
            trabajan de forma coordinada para brindar una atención
            personalizada. Ofrecemos servicios de calidad en diferentes áreas de
            la salud, ajustados a las características y necesidades de cada
            paciente. Nuestro objetivo es brindar una atención que favorezca la
            recuperación, el bienestar y la calidad de vida de cada
            persona.&quot;
          </p>
        </div>
      </section>
    </div>
  );
};

export default SpecializationSection;
