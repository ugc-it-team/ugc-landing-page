"use client";

import { useRef } from "react";
import {
  m,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { ConsoleBoard } from "@/components/mockups/ConsoleBoard";
import { heroMock, hero } from "@/content/es";
import { cn } from "@/lib/cn";

/*
  Ventana de la plataforma. El tablero de dentro NO es una maqueta: está portado del
  panel real (ver ConsoleBoard). Los datos sí son ficticios, porque el panel contiene
  personas identificables y marcas de terceros.
  Movimiento: la ventana y las tarjetas flotantes se desplazan a distinta velocidad
  con el scroll (parallax, solo transform) y flotan muy suave.
*/

const EASE = [0.22, 1, 0.36, 1] as const;

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
    <m.div className={cn("absolute z-10", className)} style={y ? { y } : undefined}>
      <m.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay, ease: EASE }}
      >
        <div className="float-y animate-float" style={{ animationDelay: floatDelay }}>
          {children}
        </div>
      </m.div>
    </m.div>
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
      <m.div style={reduce ? undefined : { y: yWindow }}>
        <m.div
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

          {/* Pestañas de la campaña, como en el panel */}
          <div className="flex items-center gap-4 border-b border-brand-100 bg-white px-4 pb-2.5 text-[11px] sm:px-5">
            {heroMock.tabs.map((tab, i) => (
              <span
                key={tab}
                className={cn(
                  "whitespace-nowrap pb-1.5",
                  i === heroMock.activeTab
                    ? "border-b-2 border-brand-600 font-semibold text-brand-600"
                    : "text-muted",
                )}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Tablero de la campaña, portado del panel real */}
          <div className="bg-brand-50/60 p-4 text-left sm:p-5">
            <ConsoleBoard />
          </div>
        </m.div>
      </m.div>

      {/* Flotante: notificación de postulación */}
      <Float
        y={reduce ? undefined : yBrief}
        delay={0.9}
        floatDelay="0s"
        className="hidden sm:-left-6 sm:-top-6 sm:block sm:w-52 xl:-left-24 xl:w-56"
      >
        <div className={card}>
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
              <svg aria-hidden viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 3.5c-2.5 0-4 1.8-4 4.2v2.4c0 .5-.2 1-.6 1.4l-.9.9c-.5.5-.2 1.4.5 1.4h9.9c.7 0 1-.9.5-1.4l-.9-.9c-.4-.4-.6-.9-.6-1.4V7.7c0-2.4-1.5-4.2-4-4.2Z" />
                <path d="M8.3 15.5a1.8 1.8 0 0 0 3.4 0" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="truncate text-xs font-bold text-ink">{heroMock.floatApplications.title}</p>
              <p className="truncate text-[11px] text-muted">{heroMock.floatApplications.text}</p>
            </div>
          </div>
        </div>
      </Float>

      {/* Flotante: chat con el creador */}
      <Float
        y={reduce ? undefined : yApproved}
        delay={1.1}
        floatDelay="-2.4s"
        className="hidden sm:-right-6 sm:top-full sm:mt-4 sm:block sm:w-52 xl:-right-24 xl:w-60"
      >
        <div className={card}>
          <div className="flex items-start gap-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-[10px] font-semibold text-white">
              DR
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-brand-700">{heroMock.floatChat.author}</p>
              <p className="mt-0.5 text-xs leading-snug text-ink">{heroMock.floatChat.text}</p>
            </div>
          </div>
        </div>
      </Float>

      {/* Flotante: invitar creador */}
      <Float
        y={reduce ? undefined : yChat}
        delay={1.3}
        floatDelay="-4.2s"
        className="-bottom-12 left-3 w-60 sm:bottom-[-4rem] sm:left-4 sm:w-72"
      >
        <div className={card}>
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ink text-white">
              <svg aria-hidden viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="7" r="3" />
                <path d="M2.5 16.5c0-2.8 2.5-5 5.5-5s5.5 2.2 5.5 5" />
                <path d="M15.5 6.5v5M13 9h5" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="truncate text-xs font-bold text-ink">{heroMock.floatInvite.title}</p>
              <p className="truncate text-[11px] text-muted">{heroMock.floatInvite.text}</p>
            </div>
          </div>
        </div>
      </Float>
    </div>
  );
}
