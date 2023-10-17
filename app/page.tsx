import Navbar from "@/components/navBar/Navbar";
import Hero from "@/components/Hero";
// import Image from "next/image";
import { Image } from "@nextui-org/react";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToNextSection from "@/components/shared/ScrollToTheNextSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between scroll-smooth ">
      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Contact />

      <Footer />
      <ScrollToNextSection />
    </div>
  );
}
