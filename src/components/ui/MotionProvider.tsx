"use client";

import { domAnimation, LazyMotion, MotionConfig } from "motion/react";

/**
 * Respeta prefers-reduced-motion en todas las animaciones de la página.
 *
 * `LazyMotion` con `domAnimation` carga solo el subconjunto que el sitio usa
 * (animaciones, variantes, presencia y gestos), no el bundle completo de motion.
 * Por eso los componentes importan `m` en vez de `motion`: `strict` hace que usar
 * `motion.*` falle en desarrollo en lugar de colarse y volver a inflar el bundle.
 *
 * Nada aquí puede usar animaciones de layout (`layoutId`, `layout`): eso exigiría
 * `domMax`, que es bastante más pesado. El indicador de SegmentedTabs se desliza
 * con CSS justamente por eso.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
