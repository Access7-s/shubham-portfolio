import { useEffect } from "react";
import Lenis from "lenis";
import { RouterProvider, useRouter } from "./lib/router";
import { setLenis } from "./lib/smooth";
import Home from "./pages/Home";
import Case from "./pages/Case";
import { projects } from "./data";

const HOME_TITLE =
  "Shubham Neupane — Full-Stack Engineer & Co-Founder, Aurora Studios | Kathmandu, Nepal";

function Routes() {
  const { path } = useRouter();

  const slug = path.startsWith("/work/") ? path.slice("/work/".length).replace(/\/$/, "") : null;
  const project = slug ? projects.find((p) => p.slug === slug) : undefined;

  useEffect(() => {
    if (!project) document.title = HOME_TITLE;
  }, [project]);

  if (project) return <Case project={project} />;
  return <Home />;
}

export default function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.1 });
    setLenis(lenis);

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  return (
    <RouterProvider>
      <Routes />
    </RouterProvider>
  );
}
