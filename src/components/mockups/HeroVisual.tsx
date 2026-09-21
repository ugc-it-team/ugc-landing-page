"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { heroMock, hero } from "@/content/es";
import { cn } from "@/lib/cn";

/*
  Composición ilustrativa de la plataforma, hecha solo con HTML/CSS.
  Los datos (nombres, estados) son de ejemplo, no reales.
  Movimiento: la ventana y las tarjetas flotantes se desplazan a distinta velocidad
  con el scroll (parallax, solo transform) y flotan muy suave.
*/

const EASE = [0.22, 1, 0.36, 1] as const;

function Check({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="m4.5 10.5 3.5 3.5 7.5-8" />
    </svg>
  );
}

const stateStyles = {
  approved: "bg-emerald-50 text-emerald-800",
  review: "bg-amber-50 text-amber-800",
  pending: "bg-ink/5 text-muted",
} as const;

const avatarTints = [
  "from-brand-400 to-brand-600",
  "from-brand-300 to-brand-500",
  "from-brand-200 to-brand-400",
];

/** Tarjeta flotante: parallax (scroll) > entrada > flotación continua */
function Float({
  y,
  delay,
  floatDelay,
  className,
  children,
}: {
  y: MotionValue<number> | undefined;
  delay: number;
  floatDelay: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div className={cn("absolute z-10", className)} style={y ? { y } : undefined}>
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay, ease: EASE }}
      >
        <div className="float-y animate-float" style={{ animationDelay: floatDelay }}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

const card =
  "rounded-2xl border border-brand-100 bg-white/95 p-3.5 shadow-[0_20px_50px_-18px_rgba(58,30,75,0.35)] backdrop-blur";

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const yWindow = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const yBrief = useTransform(scrollYProgress, [0, 1], [70, -90]);
  const yApproved = useTransform(scrollYProgress, [0, 1], [40, -110]);
  const yChat = useTransform(scrollYProgress, [0, 1], [90, -50]);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={hero.visualLabel}
      className="relative mx-auto mt-14 w-full max-w-5xl px-4 sm:mt-16 sm:px-6"
    >
      {/* Ventana principal */}
      <motion.div style={reduce ? undefined : { y: yWindow }}>
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
          className="overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-[0_40px_100px_-30px_rgba(93,41,120,0.45)]"
        >
          {/* Barra superior */}
          <div className="flex items-center gap-3 border-b border-brand-100 bg-white px-4 py-3 sm:px-5">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-brand-200" />
              <span className="size-2.5 rounded-full bg-brand-200" />
              <span className="size-2.5 rounded-full bg-brand-200" />
            </div>
            <p className="min-w-0 flex-1 truncate text-center text-xs font-semibold text-ink sm:text-sm">
              {heroMock.windowTitle}
            </p>
            <span className="rounded-full bg-brand-100 px-2.5 py-1 text-[11px] font-semibold text-brand-700">
              {heroMock.status}
            </span>
          </div>

          <div className="grid gap-4 bg-brand-50/60 p-4 text-left sm:grid-cols-[1.05fr_1fr] sm:p-5">
            {/* Creadores */}
            <div className="rounded-2xl border border-brand-100 bg-white p-3.5">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                {heroMock.creatorsTitle}
              </p>
              <ul className="space-y-2.5">
                {heroMock.creators.map((c, i) => (
                  <li key={c.name} className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-white",
                        avatarTints[i],
                      )}
                    >
                      {c.name[0]}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-ink">{c.name}</span>
                      <span className="block truncate text-xs text-muted">{c.niche}</span>
                    </span>
                    <span
                      className={cn(
                        "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold",
                        stateStyles[c.state as keyof typeof stateStyles],
                      )}
                    >
                      {heroMock.stateLabels[c.state as keyof typeof heroMock.stateLabels]}
                    </span>
                  </li>
                ))}
              </ul>
              {/* Avance (sin cifras: es ilustrativo) */}
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-brand-100">
                <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-brand-400 to-brand-500" />
              </div>
            </div>

            {/* Tablero */}
            <div className="hidden rounded-2xl border border-brand-100 bg-white p-3.5 sm:block">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                {heroMock.boardTitle}
              </p>
              <div className="grid grid-cols-3 gap-2">
                {heroMock.columns.map((col, ci) => (
                  <div key={col} className="space-y-2">
                    <p className="truncate text-[11px] font-semibold text-ink">{col}</p>
                    {Array.from({ length: ci === 1 ? 2 : 1 }).map((_, k) => (
                      <div
                        key={k}
                        className="space-y-1.5 rounded-lg border border-brand-100 bg-brand-50/70 p-2"
                      >
                        <div className="h-1.5 w-4/5 rounded-full bg-brand-200" />
                        <div className="h-1.5 w-3/5 rounded-full bg-brand-100" />
                        <div className="flex items-center justify-between pt-1">
                          <span className="size-4 rounded-full bg-gradient-to-br from-brand-300 to-brand-500" />
                          {ci === 2 && <Check className="size-3.5 text-emerald-600" />}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Flotante: brief enviado */}
      <Float
        y={reduce ? undefined : yBrief}
        delay={0.9}
        floatDelay="0s"
        className="hidden sm:-left-2 sm:top-16 sm:block sm:w-56 xl:-left-14"
      >
        <div className={card}>
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
              <svg aria-hidden viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5h12v9H8l-4 3V5Z" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="truncate text-xs font-bold text-ink">{heroMock.floatBrief.title}</p>
              <p className="truncate text-[11px] text-muted">{heroMock.floatBrief.text}</p>
            </div>
          </div>
        </div>
      </Float>

      {/* Flotante: contenido aprobado */}
      <Float
        y={reduce ? undefined : yApproved}
        delay={1.1}
        floatDelay="-2.4s"
        className="hidden sm:-right-3 sm:top-[46%] sm:block sm:w-44 xl:-right-14 xl:w-52"
      >
        <div className={card}>
          <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-500 via-brand-400 to-brand-300">
            <span className="flex size-9 items-center justify-center rounded-full bg-white/95 text-brand-600">
              <svg aria-hidden viewBox="0 0 20 20" className="ml-0.5 size-4" fill="currentColor">
                <path d="M6 4.5v11l9-5.5-9-5.5Z" />
              </svg>
            </span>
          </div>
          <div className="mt-2.5 flex items-center justify-between gap-2">
            <p className="flex items-center gap-1 text-xs font-bold text-ink">
              <Check className="size-3.5 shrink-0 text-emerald-600" />
              <span className="truncate">{heroMock.floatApproved.title}</span>
            </p>
          </div>
          <p className="mt-1.5 inline-flex rounded-full bg-brand-100 px-2 py-0.5 text-[11px] font-semibold text-brand-700">
            {heroMock.floatApproved.chip}
          </p>
        </div>
      </Float>

      {/* Flotante: el equipo acompaña (diferencial) */}
      <Float
        y={reduce ? undefined : yChat}
        delay={1.3}
        floatDelay="-4.2s"
        className="-bottom-9 left-3 w-60 sm:bottom-[-2.25rem] sm:left-10 sm:w-72"
      >
        <div className={card}>
          <div className="flex items-start gap-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ink text-[11px] font-bold text-white">
              UG<span className="text-brand-300">.</span>
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-brand-700">{heroMock.floatChat.author}</p>
              <p className="mt-0.5 text-xs leading-snug text-ink">{heroMock.floatChat.text}</p>
            </div>
          </div>
        </div>
      </Float>
    </div>
  );
}
