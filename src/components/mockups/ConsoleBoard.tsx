"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Tablero de campaña, portado del panel real (ugc-console-frontend).
 *
 * No es una maqueta inventada: la estructura, los radios, los espaciados y los colores
 * se extrajeron del DOM de la consola. Se renderiza idéntico porque el panel usa los
 * mismos tokens del branding que adoptamos en globals.css — su `--purple-600` es
 * nuestro brand-600, su `--font-ui` es Poppins, su easing es el nuestro. Por eso se
 * porta en vez de fotografiarse: pesa cero, es accesible y se puede animar.
 *
 * Datos ficticios a propósito. El panel real contiene personas identificables y marcas
 * de terceros, que no pueden aparecer en una web pública.
 */

type Etapa = {
  titulo: string;
  /** La última etapa va en tinta, no en morado: es el cierre del flujo. */
  cierre?: boolean;
  tarjeta?: { iniciales: string; nombre: string; nicho: string; estado: string; tono: "neutro" | "revision" | "aprobado" };
};

const ETAPAS: Etapa[] = [
  {
    titulo: "Creador aceptado",
    tarjeta: {
      iniciales: "CT",
      nombre: "Camila T.",
      nicho: "Estilo de vida · Instagram",
      estado: "Pendiente",
      tono: "neutro",
    },
  },
  { titulo: "Producto enviado" },
  { titulo: "Guion" },
  {
    titulo: "Borrador de video",
    tarjeta: {
      iniciales: "DR",
      nombre: "Diego R.",
      nicho: "Tecnología · Reels",
      estado: "En revisión",
      tono: "revision",
    },
  },
  {
    titulo: "Video final",
    cierre: true,
    tarjeta: {
      iniciales: "VM",
      nombre: "Valeria M.",
      nicho: "Belleza · TikTok",
      estado: "Aprobado",
      tono: "aprobado",
    },
  },
];

const TONOS = {
  neutro: "bg-[#F1ECF5] text-muted",
  revision: "bg-[#F8ECD2] text-[#B5791A]",
  aprobado: "bg-[#DDF3E8] text-[#1F8A5B]",
} as const;

export function ConsoleBoard({ className }: { className?: string }) {
  /**
   * Barrido que recorre las etapas para que se lea como un flujo en marcha.
   * Es solo un índice + transiciones CSS: nada de animaciones de layout, que
   * obligarían a cargar el paquete pesado de motion (ver README).
   */
  const [activa, setActiva] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActiva((i) => (i + 1) % ETAPAS.length), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      aria-hidden
      className={cn(
        // En móvil las cinco columnas caen a ~50px y se recorta todo, así que ahí solo
        // se muestran las etapas con tarjeta: el flujo pendiente → revisión → aprobado
        // se lee igual de bien con tres.
        "grid grid-cols-3 gap-2 font-sans sm:grid-cols-5 sm:gap-3.5",
        className,
      )}
    >
      {ETAPAS.map((etapa, i) => (
        <div
          key={etapa.titulo}
          className={cn(
            "flex min-w-0 flex-col rounded-[20px] bg-brand-50 p-2",
            !etapa.tarjeta && "hidden sm:flex",
          )}
        >
          <div
            className={cn(
              "mb-1 flex items-center justify-between gap-2 rounded-[14px] px-3 py-2.5 text-white transition-[background-color,box-shadow] duration-300 ease-out-expo",
              etapa.cierre ? "bg-ink-soft" : "bg-brand-600",
              activa === i && "shadow-[0_8px_20px_-8px_rgba(93,41,120,0.7)]",
            )}
          >
            <span className="truncate text-[11px] font-semibold">{etapa.titulo}</span>
            <span className="shrink-0 rounded-full bg-white/20 px-1.5 text-[10px] font-bold tabular-nums">
              {etapa.tarjeta ? 1 : 0}
            </span>
          </div>

          {etapa.tarjeta ? (
            <div
              className={cn(
                "rounded-[14px] bg-white p-3 shadow-[inset_0_0_0_1px_rgba(57,22,76,0.05)] transition-transform duration-300 ease-out-expo",
                activa === i && "-translate-y-0.5",
              )}
            >
              <span
                className={cn(
                  "inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold",
                  TONOS[etapa.tarjeta.tono],
                )}
              >
                {etapa.tarjeta.estado}
              </span>
              {/* En móvil la columna mide ~98px: el avatar al lado dejaría ~20px para el
                  nombre. Apilado y centrado sí cabe, y el nicho se oculta por estrecho. */}
              <div className="mt-2.5 flex flex-col items-center gap-1.5 text-center sm:flex-row sm:gap-2 sm:text-left">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-[10px] font-semibold text-white">
                  {etapa.tarjeta.iniciales}
                </span>
                <span className="min-w-0 max-w-full">
                  <span className="block truncate text-[10px] font-semibold text-ink sm:text-[11px]">
                    {etapa.tarjeta.nombre}
                  </span>
                  <span className="hidden truncate text-[10px] text-muted sm:block">
                    {etapa.tarjeta.nicho}
                  </span>
                </span>
              </div>
            </div>
          ) : (
            <p className="py-6 text-center text-[10px] text-[#938C9B]">Vacío</p>
          )}
        </div>
      ))}
    </div>
  );
}
