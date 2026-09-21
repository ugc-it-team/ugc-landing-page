"use client";

import { motion } from "motion/react";

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
 */
export function Reveal({ children, delay = 0, y = 18, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
