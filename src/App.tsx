import { useEffect } from "react";
import Lenis from "lenis";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";

export default function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1 });
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
    <div className="grain relative min-h-screen">
      <Preloader />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Capabilities />
        <Projects />
        <Experience />
        <Timeline />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
