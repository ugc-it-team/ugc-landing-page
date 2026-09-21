import { cn } from "@/lib/cn";

type BrandBlobsProps = {
  /** "light" para fondos blancos, "dark" para fondos casi negros. */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Textura de marca: manchas lavanda difusas con movimiento muy lento.
 * Son degradados radiales (sin filtros de blur costosos) que solo mueven transform.
 * Con prefers-reduced-motion se quedan quietas (ver globals.css).
 */
export function BrandBlobs({ tone = "light", className }: BrandBlobsProps) {
  const dark = tone === "dark";
  const blob = (color: string) => ({
    background: `radial-gradient(closest-side, ${color}, transparent)`,
  });

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div
        className="brand-blob absolute -left-[12%] -top-[22%] size-[46rem] max-w-[90vw] animate-blob-a will-change-transform"
        style={blob(dark ? "rgba(136,82,162,0.42)" : "rgba(205,180,218,0.75)")}
      />
      <div
        className="brand-blob absolute -right-[14%] top-[2%] size-[40rem] max-w-[85vw] animate-blob-b will-change-transform"
        style={blob(dark ? "rgba(179,137,200,0.22)" : "rgba(228,214,235,0.95)")}
      />
      <div
        className="brand-blob absolute bottom-[-18%] left-[26%] size-[34rem] max-w-[80vw] animate-blob-c will-change-transform"
        style={blob(dark ? "rgba(110,67,132,0.4)" : "rgba(179,137,200,0.35)")}
      />
    </div>
  );
}
