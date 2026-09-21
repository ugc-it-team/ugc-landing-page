"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/cn";

type DarkSheetProps = {
  /** "all" = esquinas redondeadas arriba y abajo. "top" = solo arriba (la sección oscura sigue con el footer). */
  rounded?: "all" | "top";
};

/**
 * Fondo casi negro de las secciones de contraste. Va como primer hijo de una sección con
 * "relative isolate". Aparece con opacity ligada al scroll mientras la sección entra en pantalla,
 * así la transición blanco → casi negro no anima el color de fondo (solo opacity).
 * Con prefers-reduced-motion aparece ya completo.
 */
export function DarkSheet({ rounded = "all" }: DarkSheetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 55%"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      aria-hidden
      style={{ opacity: reduce ? 1 : opacity }}
      className={cn(
        "absolute inset-0 -z-10 bg-ink",
        rounded === "all"
          ? "rounded-[2rem] md:rounded-[3.5rem]"
          : "rounded-t-[2rem] md:rounded-t-[3.5rem]",
      )}
    />
  );
}
