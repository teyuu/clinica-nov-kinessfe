import React from 'react';


const HeroSection = () => {
  const heroTextStyle = {
    title: "text-4xl md:text-6xl font-bold leading-tight uppercase",
    subtitle: "md:text-2xl font-medium leading-tight uppercase",
  };

  return (
    <div
      className="bg-[url('https://i.ibb.co/kDLdmSz/landing.jpg')] bg-cover bg-center h-[750px] lg:h-screen w-full text-white "
    >
      <div className=" h-full flex flex-col justify-evenly items-center font-PlayfairDisplay">

        <div className=' flex flex-col w-[90%] justify-center text-center gap-5'>
          <h1 className={heroTextStyle.title} >
            Rehabilitación y<br />medicina integral
          </h1>
          <h2 className={heroTextStyle.subtitle}>
            Cuidado integral para una vida plena: Recupera tu vitalidad física, emocional y mental
          </h2>
        </div>

        <button className='btn rounded bg-white text-black border-black  p-4'>Pedi tu turno</button>
      </div>
    </div>
  );
};

export default HeroSection;
