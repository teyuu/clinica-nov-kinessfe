import HeroSection from "@/components/HeroSection";
import Map from "@/components/Map";
import SpecializationSection from "@/components/SpecializationSection";
import Contact from "@/components/Contact";
import InstagramFeed from "@/components/InstagramFeed";


export default function Home() {

 
  
  return (
    <main className="h-auto min-w-[360px] font-Roboto ">
    <HeroSection/>  
      <SpecializationSection/>
    <Contact/>
      <InstagramFeed/>
      <Map/>
    </main>
  );
}
