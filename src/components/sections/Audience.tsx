"use client";

import { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { ContactButton } from "@/components/ui/ContactButton";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SegmentedTabs } from "@/components/ui/SegmentedTabs";
import { IconCheck } from "@/components/ui/icons";
import { audience } from "@/content/es";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Para quién es — pestañas interactivas (Marcas / Agencias). Las marcas van primero y son la pestaña activa por defecto.
 * Al cambiar de pestaña: el indicador se desliza y el contenido sale/entra con fundido.
 */
export function Audience() {
  const [active, setActive] = useState(0);
  const tabs = audience.tabs;
  const tab = tabs[active];

  return (
    <section id="para-quien" aria-labelledby="para-quien-title" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={audience.eyebrow}
          title={audience.title}
          accent={audience.titleAccent}
          intro={audience.intro}
          titleId="para-quien-title"
        />

        <Reveal delay={0.2} className="mt-10">
          <SegmentedTabs
            tabs={tabs}
            active={active}
            onChange={setActive}
            label={audience.tablistLabel}
            idPrefix="audience"
            panelId="audience-panel"
          />
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-10 rounded-[2rem] border border-brand-100 bg-brand-50/60 p-5 sm:p-10">
            <AnimatePresence mode="wait" initial={false}>
              <m.div
                key={tab.id}
                id="audience-panel"
                role="tabpanel"
                aria-labelledby={`audience-tab-${tab.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14"
              >
                {/* Mensaje + beneficios */}
                <div>
                  <h3 className="text-balance font-display text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
                    <span className="block">{tab.headline}</span>
                    <span className="block text-brand-600">
                      {tab.headlineAccent}
                      <span aria-hidden>.</span>
                    </span>
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{tab.text}</p>
                  <ul className="mt-7 space-y-3.5">
                    {tab.benefits.map((b, i) => (
                      <m.li
                        key={b}
                        className="flex items-start gap-3 text-[0.97rem] leading-snug text-ink"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease: EASE }}
                      >
                        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                          <IconCheck className="size-3.5" />
                        </span>
                        {b}
                      </m.li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <ContactButton size="lg" audience={tab.id === "agencias" ? "agencia" : "marca"}>
                      {audience.cta}
                    </ContactButton>
                  </div>
                </div>

                {/* Ejemplo de flujo */}
                <div className="rounded-3xl border border-brand-100 bg-white p-6 sm:p-8 lg:self-center">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-700">
                    {tab.flowTitle}
                  </p>
                  <ol className="relative mt-6 space-y-6">
                    <span
                      aria-hidden
                      className="absolute bottom-3 left-[1.05rem] top-3 w-px bg-gradient-to-b from-brand-300 to-brand-100"
                    />
                    {tab.flow.map((step, i) => (
                      <m.li
                        key={step}
                        className="relative flex items-start gap-4"
                        initial={{ opacity: 0, x: 14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45, delay: 0.15 + i * 0.09, ease: EASE }}
                      >
                        <span
                          aria-hidden
                          className="relative z-10 flex size-[2.15rem] shrink-0 items-center justify-center rounded-full border-2 border-brand-600 bg-white font-display text-sm font-bold text-brand-600"
                        >
                          {i + 1}
                        </span>
                        <span className="pt-1 text-[0.97rem] font-medium leading-snug text-ink">{step}</span>
                      </m.li>
                    ))}
                  </ol>
                </div>
              </m.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
