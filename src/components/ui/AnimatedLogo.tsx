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
 *   (`.animated-logo` en globals.css) para que el hero siga renderizándose en el servidor.
 */
export function AnimatedLogo({ className }: AnimatedLogoProps) {
  const media = "mx-auto h-auto w-full select-none mix-blend-multiply";
  const alt = "UGConnect. Connect. Collaborate. Create.";

  return (
    <div className={cn("animated-logo", className)}>
      <video
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
