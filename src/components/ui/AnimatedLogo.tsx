"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

const WEBM = "/brand/ugconnect-logo-animado.webm";
const MP4 = "/brand/ugconnect-logo-animado.mp4";
const STATIC = "/brand/ugconnect-logo-estatico.png";
const W = 1026;
const H = 132;

type AnimatedLogoProps = {
  className?: string;
};

/**
 * Logo animado: UGConnect. → UGC. → UGCollaborate. → UGC. → UGCreate. → UGC.
 *
 * - Era un GIF de 1.7 MB con fetchPriority alto encima del pliegue; en vídeo son 41 KB.
 * - El vídeo conserva el fondo blanco (venía del GIF, que solo admite transparencia de 1 bit).
 *   `mix-blend-multiply` lo hace desaparecer sobre las manchas lavanda del hero. Solo sirve
 *   sobre fondos claros; no le pongas un contenedor con opacity/transform, que aísla la mezcla.
 * - El PNG estático hace de `poster` y de contenido bajo `prefers-reduced-motion`: es el mismo
 *   archivo, así que el navegador lo descarga una sola vez. El intercambio se hace en CSS
 *   (`.animated-logo` en globals.css).
 * - Es cliente solo por el efecto de reanudación de abajo; el marcado se sigue renderizando
 *   en el servidor, así que el hero no depende de JavaScript para pintarse.
 */
export function AnimatedLogo({ className }: AnimatedLogoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  /**
   * El navegador pausa el vídeo al ocultar la pestaña y no siempre lo reanuda al volver.
   * Un GIF no tenía ese problema; un vídeo sí, y como varios fotogramas de esta animación
   * están casi vacíos, quedarse congelado significa que el logo desaparece. Esto lo devuelve
   * a reproducción al recuperar visibilidad, y cubre además el caso de un autoplay denegado.
   */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const resume = () => {
      if (document.visibilityState === "visible" && video.paused) {
        video.play().catch(() => {});
      }
    };

    resume();
    document.addEventListener("visibilitychange", resume);
    return () => document.removeEventListener("visibilitychange", resume);
  }, []);

  // El `mx-auto` del contenedor es el que centra: es quien recibe el max-w que pasa
  // el hero, así que sin él el logo se pega a la izquierda aunque el vídeo esté
  // centrado respecto a su caja.
  const media = "mx-auto h-auto w-full select-none mix-blend-multiply";
  const alt = "UGConnect. Connect. Collaborate. Create.";

  return (
    <div className={cn("animated-logo mx-auto", className)}>
      <video
        ref={videoRef}
        className={media}
        width={W}
        height={H}
        poster={STATIC}
        autoPlay
        muted
        loop
        playsInline
        aria-label={alt}
      >
        <source src={WEBM} type="video/webm" />
        <source src={MP4} type="video/mp4" />
      </video>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={STATIC} alt={alt} width={W} height={H} className={media} />
    </div>
  );
}
