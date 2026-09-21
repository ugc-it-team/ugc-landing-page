"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: React.ReactNode;
  /** Retraso en segundos: úsalo para escalonar elementos hermanos. */
  delay?: number;
  /** Desplazamiento vertical inicial en px. */
  y?: number;
  className?: string;
};

/**
 * Entrada al hacer scroll: aparece con fundido y un leve desplazamiento hacia arriba.
 * Solo se reproduce una vez. Anima únicamente opacity y transform.
 *
 * Usa IntersectionObserver y una transición CSS en vez de motion: este componente
 * envuelve casi todos los bloques de la página, así que arrastrar la librería de
 * animación hasta aquí costaba mucho más de lo que vale el efecto.
 *
 * Si JavaScript no llega a ejecutarse, el contenido queda visible: el estado inicial
 * oculto solo se aplica cuando el observer ya está montado.
 */
export function Reveal({ children, delay = 0, y = 18, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }

    setArmed(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        io.disconnect();
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("motion-reduce:!translate-y-0 motion-reduce:!opacity-100", className)}
      style={
        armed
          ? {
              opacity: shown ? 1 : 0,
              transform: shown ? "none" : `translateY(${y}px)`,
              transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
              willChange: shown ? undefined : "opacity, transform",
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
