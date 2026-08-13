import BackgroundGrid from "@/components/BackgroundGrid";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-blue-500/30 selection:text-blue-200">
      {/* Dynamic Grid Background Overlay */}
      <BackgroundGrid />

      {/* Floating Header */}
      <Navbar />

      {/* Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
