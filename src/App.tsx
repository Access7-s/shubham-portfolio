import { useEffect } from "react";
import Lenis from "lenis";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.12 });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="noise relative min-h-screen">
      <CursorGlow />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
    </div>
  );
}
