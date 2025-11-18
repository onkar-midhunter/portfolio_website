import AboutMe from "@/components/About-me"
import HeroSection from "@/components/Hero-section";
import ProjectList from "@/components/Project";
import Project from "@/components/project-discription-card"
import Image from "next/image";

export default function Home() {
  return (
     <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <AboutMe/>
      <ProjectList/>
      <Project/>
    </main>
  );
}
