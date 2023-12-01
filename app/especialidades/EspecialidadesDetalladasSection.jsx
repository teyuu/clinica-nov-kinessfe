import React from "react";
import Image from "next/image";
import EspecialidadCard from "./EspecialidadCard";
import especialidades from "../../data/especialidades.json";

const EspecialidadesDetalladasSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-8 md:px-16 lg:px-32">
      <div className="p-5 ">
          <h1 className="font-PlayfairDisplay font-medium text-2xl lg:text-4xl text-center  border-b-4 ">
            ESPECIALIDADES
          </h1>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {especialidades.map((especialidad, index) => (
            <EspecialidadCard key={index} especialidad={especialidad} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EspecialidadesDetalladasSection;