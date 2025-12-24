import AboutMe from "@/components/About-me"
import RecruiterContactForm from "@/components/contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero-section";
import ProjectList from "@/components/Project";
import Image from "next/image";

export default function Home() {
  return (
     <main className="min-h-screen bg-black/.96 antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <AboutMe/>
      <ProjectList/>
      <RecruiterContactForm/>
      <Footer/>
    </main>
  );
}
