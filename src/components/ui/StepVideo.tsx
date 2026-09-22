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
  /**
   * Hasta que no sea true no se adjuntan `src` ni `poster`, para no descargar 130 KB de
   * pósters en la carga inicial. Lo decide la sección (ver HowItWorks): aquí no sirve,
   * porque en escritorio este componente se monta y desmonta al cambiar de paso.
   */
  load?: boolean;
};

/**
 * Video de un paso de "Cómo funciona": grabación de la plataforma, sin audio, en bucle.
 * - Solo se reproduce mientras está a la vista (ahorra datos y batería) y se pausa al salir.
 * - Con prefers-reduced-motion no se reproduce: queda la imagen previa (poster).
 * - "muted" se fuerza por código: sin eso, iPhone/Safari no permiten la reproducción automática.
 * - Es decorativo: el texto del paso ya explica lo que muestra (por eso aria-hidden).
 */
export function StepVideo({ src, poster, className, bare, load = true }: StepVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;

    const debeReproducir = () => load && inView && !reduce;
    const intentar = () => {
      if (debeReproducir() && v.paused) v.play().catch(() => {});
    };

    if (debeReproducir()) {
      intentar();
      // Con `preload="none"` el vídeo no tiene datos cuando se pide el play y el
      // navegador lo rechaza; al llegar `canplay` ya sí puede arrancar.
      v.addEventListener("canplay", intentar);
      return () => v.removeEventListener("canplay", intentar);
    }

    v.pause();
  }, [load, inView, reduce]);

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
        src={load ? src : undefined}
        poster={load ? poster : undefined}
        muted
        loop
        playsInline
        preload="none"
        disablePictureInPicture
        disableRemotePlayback
        aria-hidden
      />
    </div>
  );
}
