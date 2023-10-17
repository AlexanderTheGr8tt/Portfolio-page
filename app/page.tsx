import Navbar from "@/components/navBar/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollToNextSection from "@/components/shared/ScrollToTheNextSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between scroll-smooth ">
      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Contact />

      <ScrollToNextSection />
    </div>
  );
}
