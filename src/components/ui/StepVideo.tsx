"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

/** Proporción de los videos (1600×910 = la grabación original completa). */
export const VIDEO_RATIO = 1600 / 910;

type StepVideoProps = {
  src: string;
  poster: string;
  className?: string;
  /** Sin tarjeta propia (borde, esquinas, sombra): el video llena por completo el recuadro que lo contiene. */
  bare?: boolean;
};

/**
 * Video de un paso de "Cómo funciona": grabación de la plataforma, sin audio, en bucle.
 * - Solo se reproduce mientras está a la vista (ahorra datos y batería) y se pausa al salir.
 * - Con prefers-reduced-motion no se reproduce: queda la imagen previa (poster).
 * - "muted" se fuerza por código: sin eso, iPhone/Safari no permiten la reproducción automática.
 * - Es decorativo: el texto del paso ya explica lo que muestra (por eso aria-hidden).
 */
export function StepVideo({ src, poster, className, bare }: StepVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    if (inView && !reduce) v.play().catch(() => {});
    else v.pause();
  }, [inView, reduce]);

  return (
    <div
      className={
        bare
          ? undefined
          : "overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-[0_30px_70px_-30px_rgba(93,41,120,0.45)]"
      }
    >
      <video
        ref={ref}
        // Misma proporción que el video (1600×910 = la grabación original completa): sin recortes
        className={cn("block aspect-[1600/910] w-full", className)}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        disableRemotePlayback
        aria-hidden
      />
    </div>
  );
}
