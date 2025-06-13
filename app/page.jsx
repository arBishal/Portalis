import Hero from "@/components/sections/hero";
import Experiences from "@/components/sections/experiences";
import Competences from "@/components/sections/competences";
import Projects from "@/components/sections/projects";
import Education from "@/components/sections/education";
import Achievements from "@/components/sections/achievements";
import References from "@/components/sections/references";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero/>
      <Experiences/>
      <Competences/>
      <Projects/>
      <Education/>
      <Achievements/>
      <References/>
      <Contact/>
    </>
  );
}
