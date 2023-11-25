import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import Map from "@/components/Map";
import SpecializationSection from "@/components/SpecializationSection";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <div className="h-screen min-w-[360px] font-Roboto ">
      <Navbar />
      <HeroSection/>  
      <SpecializationSection/> 
      <Map/>
      {/* <TeamSection/> */}
    </div>
  );
}
