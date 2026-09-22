import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  /** "full" = UGConnect + lema. "short" = UGC. */
  variant?: "full" | "short";
  /** "light" = para fondos claros. "dark" = para fondos oscuros (texto negro pasa a blanco). */
  tone?: "light" | "dark";
  className?: string;
  priority?: boolean;
};

const SRC = {
  full: { light: "/brand/logo-full.png", dark: "/brand/logo-full-white.png", w: 496, h: 104 },
  short: { light: "/brand/logo-short.png", dark: "/brand/logo-short-white.png", w: 365, h: 110 },
} as const;

/**
 * Logo oficial (PNG transparente de la carpeta brand/, recortado).
 *
 * TEMPORAL: los archivos "-white.png" son una versión derivada (el negro del logo
 * pasado a blanco) para fondos oscuros. Reemplázalos por la versión oficial invertida,
 * idealmente en SVG, cuando exista. Lo mismo aplica a logo-full.png / logo-short.png
 * (los PNG de origen son de solo 500 px de ancho; un SVG se vería más nítido).
 */
export function Logo({ variant = "full", tone = "light", className, priority }: LogoProps) {
  const s = SRC[variant];
  return (
    <Image
      src={tone === "dark" ? s.dark : s.light}
      alt={variant === "full" ? "UGConnect. Connect. Collaborate. Create." : "UGC."}
      width={s.w}
      height={s.h}
      priority={priority}
      className={cn("w-auto select-none", className)}
    />
  );
}
