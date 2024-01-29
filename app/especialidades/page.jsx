import React from "react";
import EspecialidadCard from "./EspecialidadCard";
import especialidades from "../../data/especialidades.json";
import { bgGreen
 } from "@/data/tailwindClasses";
const page = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-8 md:px-16 lg:px-32">
      <div className="mb-5 flex justify-center">
          <h1 className={`px-3 py-2 w-fit text-white font-bold text-4xl text-center  border-b-4 ${bgGreen} bg-opacity-80`}>
            ESPECIALIDADES Y TRATAMIENTOS
          </h1>
          </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {especialidades.map((especialidad, index) => (
            <EspecialidadCard key={index} especialidad={especialidad} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;

