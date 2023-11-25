import React from "react";

const Map = () => {
  return (
    <div className="bg-[#619b8a] flex flex-col justify-between space-y-5 px-16 py-10">

      <section className="">
        <h1 className="text-4xl text-center xl:text-start border-b-4 text-white">
          ¿DONDE ESTAMOS?
        </h1>
      </section>
      
      <section className="flex flex-col items-center gap-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.1855754943354!2d-60.69469692371232!3d-31.601374405219683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b50742a5066d91%3A0x46ec293a67a55d37!2sCl%C3%ADnica%20Kinessfe%20Aristobulo%20del%20valle%20kinesiologia!5e0!3m2!1ses-419!2sar!4v1700868249190!5m2!1ses-419!2sar"
          height="450"
          className="border w-full"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
         <div>
          
          <i className="ri-map-pin-2-line text-white text-3xl">Aristobulo del valle 3045</i>
    
        </div>
      </section>
    </div>
  );
};

export default Map;
