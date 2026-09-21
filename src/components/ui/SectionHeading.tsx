import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  /** Segunda línea del titular, completa en morado (con el punto final). Opcional. */
  accent?: string;
  intro?: string;
  /** id del <h2>, para usarlo en aria-labelledby de la sección */
  titleId: string;
  align?: "center" | "left";
  /** "dark" para fondos casi negros */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Encabezado de sección: etiqueta + titular grueso que termina en el punto morado
 * de la marca + introducción. El punto se agrega aquí, no en los textos.
 */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  intro,
  titleId,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl", className)}>
      <Reveal>
        <p
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold sm:text-sm",
            dark
              ? "border-white/15 bg-white/5 text-brand-300"
              : "border-brand-200 bg-brand-50 text-brand-700",
          )}
        >
          <span aria-hidden className={cn("size-1.5 rounded-full", dark ? "bg-brand-400" : "bg-brand-500")} />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.07}>
        <h2
          id={titleId}
          className={cn(
            "mt-5 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl",
            dark ? "text-white" : "text-ink",
          )}
        >
          {accent ? (
            <>
              <span className="block">{title}</span>
              {/* Mismo morado de marca (#8852a2) sobre fondo claro u oscuro: es un titular grande (contraste AA para texto grande) */}
              <span className="block text-brand-500">
                {accent}
                <span aria-hidden>.</span>
              </span>
            </>
          ) : (
            <>
              {title}
              <span aria-hidden className="text-brand-500">
                .
              </span>
            </>
          )}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.14}>
          <p
            className={cn(
              "mt-5 text-pretty text-base leading-relaxed sm:text-lg",
              dark ? "text-white/70" : "text-muted",
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
