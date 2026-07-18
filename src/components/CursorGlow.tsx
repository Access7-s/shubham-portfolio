import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    let x = innerWidth / 2;
    let y = innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      el.style.transform = `translate(${x - 250}px, ${y - 250}px)`;
      raf = requestAnimationFrame(loop);
    };
    addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[500px] w-[500px] rounded-full opacity-[0.07]"
      style={{
        background:
          "radial-gradient(circle, #a78bfa 0%, #22d3ee 40%, transparent 70%)",
      }}
    />
  );
}
