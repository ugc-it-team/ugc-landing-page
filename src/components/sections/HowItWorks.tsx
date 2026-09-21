"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  m,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/ui/icons";
import { StepVideo, VIDEO_RATIO } from "@/components/ui/StepVideo";
import { CampaignMock } from "@/components/mockups/CampaignMock";
import { CreatorsMock } from "@/components/mockups/CreatorsMock";
import { KanbanMock } from "@/components/mockups/KanbanMock";
import { DashboardMock } from "@/components/mockups/DashboardMock";
import { howItWorks } from "@/content/es";
import { cn } from "@/lib/cn";

const mocks = [CampaignMock, CreatorsMock, KanbanMock, DashboardMock];
const steps = howItWorks.steps;
const videos = howItWorks.videos; // el paso 4 aún no tiene video: usa la maqueta

// Grosor (px) del borde del recuadro. El video lo cubre por completo (sin margen interior).
const PANEL_BORDER = 1;

/**
 * Cómo funciona — scroll fijado (sticky).
 * Escritorio (lg+): una pista alta con un panel pegado a la pantalla. Mientras haces scroll,
 * el paso activo cambia y el panel de la derecha se intercambia con un fundido suave.
 * Móvil: los pasos van apilados, cada uno con su maqueta (sin fijar nada).
 */
export function HowItWorks() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length)));
    setActive((prev) => (prev === idx ? prev : idx));
  });

  // Al hacer clic (o Enter) en un paso, se desplaza hasta el punto de la pista donde ese paso está activo.
  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const absTop = window.scrollY + el.getBoundingClientRect().top;
    const travel = el.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: absTop + travel * ((i + 0.5) / steps.length),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  const ActiveMock = mocks[active];
  const activeVideo = videos[active];

  // El cuadro lila se ajusta a la proporción del video (que se ve completo, sin recortes):
  // mide su ancho y calcula la altura exacta. Con la maqueta del paso 4 recupera su altura normal.
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelW, setPanelW] = useState(0);
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const measure = () => setPanelW(el.offsetWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const videoPanelH = panelW
    ? Math.round((panelW - 2 * PANEL_BORDER) / VIDEO_RATIO) + 2 * PANEL_BORDER
    : undefined;

  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-title"
      className="relative bg-brand-50"
    >
      <Container className="pb-12 pt-24 sm:pt-32 lg:pb-16">
        <SectionHeading
          eyebrow={howItWorks.eyebrow}
          title={howItWorks.title}
          accent={howItWorks.titleAccent}
          intro={howItWorks.intro}
          titleId="como-funciona-title"
        />
      </Container>

      {/* ── Escritorio: pista alta + panel pegado ── */}
      <div ref={trackRef} className="relative hidden h-[400vh] lg:block">
        <div className="sticky top-[calc(var(--nav-h)+1rem)] flex h-[calc(100svh-var(--nav-h)-1rem)] items-center">
          <Container>
            <div className="grid grid-cols-[minmax(0,5fr)_minmax(0,6fr)] items-center gap-14">
              {/* Lista de pasos */}
              <ol className="relative space-y-2 pl-16" aria-label={howItWorks.title}>
                {/* Riel: se llena con el avance del scroll (solo transform) */}
                <span aria-hidden className="absolute bottom-6 left-[1.4rem] top-6 w-0.5 rounded-full bg-brand-200" />
                <m.span
                  aria-hidden
                  style={{ scaleY: scrollYProgress }}
                  className="absolute bottom-6 left-[1.4rem] top-6 w-0.5 origin-top rounded-full bg-brand-600"
                />
                {steps.map((step, i) => {
                  const isActive = i === active;
                  return (
                    <li key={step.title} className="relative">
                      <button
                        type="button"
                        onClick={() => goTo(i)}
                        aria-current={isActive ? "step" : undefined}
                        className="group block w-full rounded-2xl py-3 text-left"
                      >
                        <span
                          aria-hidden
                          className={cn(
                            "absolute -left-16 top-3 flex size-11 items-center justify-center rounded-full border-2 font-display text-sm font-bold transition-[transform,background-color,color,border-color] duration-300",
                            isActive
                              ? "scale-110 border-brand-600 bg-brand-600 text-white shadow-[0_10px_24px_-8px_rgba(93,41,120,0.8)]"
                              : i < active
                                ? "border-brand-600 bg-white text-brand-600"
                                : "border-brand-200 bg-brand-50 text-brand-400",
                          )}
                        >
                          {i < active ? <IconCheck className="size-4" /> : i + 1}
                        </span>
                        <span className="sr-only">{howItWorks.stepLabel} {i + 1}: </span>
                        <span
                          className={cn(
                            "block font-display text-2xl font-bold leading-tight transition-opacity duration-300 xl:text-[1.7rem]",
                            isActive ? "text-ink opacity-100" : "text-ink opacity-45 group-hover:opacity-75",
                          )}
                        >
                          {step.title}
                        </span>
                        {/* Descripción: solo el paso activo se despliega */}
                        <span
                          className={cn(
                            "grid transition-[grid-template-rows,opacity] duration-500 ease-out",
                            isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                          )}
                        >
                          <span className="overflow-hidden">
                            <span className="mt-3 block max-w-md text-base leading-relaxed text-muted">
                              {step.text}
                            </span>
                            <span className="mt-4 flex flex-wrap gap-2">
                              {step.bullets.map((b) => (
                                <span
                                  key={b}
                                  className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-700"
                                >
                                  <IconCheck className="size-3" />
                                  {b}
                                </span>
                              ))}
                            </span>
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>

              {/* Panel visual */}
              <div
                ref={panelRef}
                aria-hidden
                style={activeVideo && videoPanelH ? { height: videoPanelH } : undefined}
                className={cn(
                  "relative rounded-[2rem] border border-brand-200/70 bg-gradient-to-br from-brand-100 via-brand-50 to-white transition-[height,padding] duration-500 ease-out",
                  activeVideo
                    ? "p-0"
                    : "h-[min(31rem,calc(100svh-var(--nav-h)-5rem))] p-5",
                )}
              >
                <AnimatePresence mode="wait">
                  <m.div
                    key={active}
                    className="h-full"
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -14, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {activeVideo ? (
                      // Pasos con video: cubre todo el recuadro, con sus mismas esquinas redondeadas.
                      // Se reproduce solo el del paso activo (el panel se vuelve a montar al cambiar).
                      <div className="h-full overflow-hidden rounded-[calc(2rem-1px)]">
                        <StepVideo bare src={activeVideo.src} poster={activeVideo.poster} />
                      </div>
                    ) : (
                      <ActiveMock />
                    )}
                  </m.div>
                </AnimatePresence>
                <p className="absolute -bottom-7 right-2 text-[11px] font-medium text-muted">
                  {activeVideo ? howItWorks.videoNote : howItWorks.illustrative}
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* ── Móvil / tablet: pasos apilados ── */}
      <Container className="pb-24 lg:hidden">
        <ol className="space-y-16">
          {steps.map((step, i) => {
            const Mock = mocks[i];
            const video = videos[i];
            return (
              <li key={step.title}>
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white"
                    >
                      {i + 1}
                    </span>
                    <h3 className="font-display text-2xl font-bold leading-tight text-ink">
                      <span className="sr-only">{howItWorks.stepLabel} {i + 1}: </span>
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-muted">{step.text}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {step.bullets.map((b) => (
                      <li
                        key={b}
                        className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-700"
                      >
                        <IconCheck className="size-3" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div
                    aria-hidden
                    className={cn(
                      "mt-6 rounded-[1.75rem] border border-brand-200/70 bg-gradient-to-br from-brand-100 via-brand-50 to-white",
                      video ? "overflow-hidden" : "p-3 sm:p-5",
                    )}
                  >
                    {video ? <StepVideo bare src={video.src} poster={video.poster} /> : <Mock />}
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
