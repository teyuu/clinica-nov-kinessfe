import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import SpecializationSection from "@/components/SpecializationSection";

export default function Home() {
  return (
    <div className="h-screen min-w-[360px] font-Roboto ">
      <Navbar />
      <HeroSection/>  
       <SpecializationSection/> 
    </div>
  );
}
