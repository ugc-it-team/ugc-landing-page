"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";

type CountUpProps = {
  /** Valor final. */
  to: number;
  /** Texto antes del número, por ejemplo "+". */
  prefix?: string;
  duration?: number;
  className?: string;
};

/**
 * Número que sube de 0 al valor final, una sola vez, cuando entra en pantalla.
 * Sin JS o con prefers-reduced-motion se muestra el valor final directamente.
 * Lectores de pantalla leen siempre el valor final (el número animado va oculto para ellos).
 */
export function CountUp({ to, prefix = "", duration = 1.6, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const reduce = useReducedMotion();
  const value = useMotionValue(to);
  const text = useTransform(value, (v) => `${prefix}${Math.round(v)}`);

  useEffect(() => {
    if (!inView || reduce) return;
    value.set(0);
    const controls = animate(value, to, { duration, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, reduce, to, duration, value]);

  return (
    <span className={className}>
      <span className="sr-only">
        {prefix}
        {to}
      </span>
      <motion.span ref={ref} aria-hidden className="tabular-nums">
        {text}
      </motion.span>
    </span>
  );
}
