"use client";

import { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { Button } from "@/components/ui/Button";
import { ContactButton } from "@/components/ui/ContactButton";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SegmentedTabs } from "@/components/ui/SegmentedTabs";
import { IconCheck } from "@/components/ui/icons";
import { plans, RECOMMENDED_PLAN_ID, type Plan } from "@/content/es";
import { siteConfig } from "@/site.config";
import { cn } from "@/lib/cn";

const EASE = [0.22, 1, 0.36, 1] as const;

function PlanCard({ plan, audience }: { plan: Plan; audience: "marca" | "agencia" }) {
  // Regla de negocio: el recomendado es SIEMPRE Growth (ver RECOMMENDED_PLAN_ID en content/es.ts)
  const recommended = plan.id === RECOMMENDED_PLAN_ID;

  return (
    <article
      className={cn(
        "relative flex h-full w-full flex-col rounded-3xl bg-white p-7 transition-[transform,box-shadow,border-color] duration-300 ease-out sm:p-8",
        recommended
          ? "border-2 border-brand-600 shadow-[0_40px_90px_-32px_rgba(93,41,120,0.65)] lg:-translate-y-3 lg:hover:-translate-y-4"
          : "border border-brand-200 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-[0_34px_60px_-32px_rgba(93,41,120,0.5)]",
      )}
    >
      {recommended && (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-brand-600 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_-10px_rgba(93,41,120,0.9)]">
          {plans.recommended}
        </span>
      )}

      <h3 className="font-display text-xl font-extrabold text-ink sm:text-2xl lg:text-xl xl:text-2xl">
        {plan.name}
      </h3>
      <p className="mt-1.5 min-h-10 text-sm leading-snug text-muted">{plan.tagline}</p>

      {/* En escritorio, altura mínima igual en las 3 tarjetas para que la línea divisoria quede alineada */}
      <div className="mt-6 flex flex-wrap content-start items-end gap-x-3 gap-y-1 border-b border-ink/10 pb-6 lg:min-h-[8.25rem]">
        <p className="font-display text-4xl font-extrabold tracking-tight text-ink">
          <span className="sr-only">Precio: </span>
          {plan.price}
          {plan.period && (
            <span className="ml-1 text-base font-medium tracking-normal text-muted">
              <span aria-hidden>{plan.period}</span>
              <span className="sr-only"> al mes</span>
            </span>
          )}
        </p>
        {plan.priceExtra && (
          <p className="pb-0.5 text-sm font-semibold leading-tight text-ink">
            {plan.priceExtra}
            {plan.priceMin && <span className="block font-medium text-muted">{plan.priceMin}</span>}
          </p>
        )}
        <p className="basis-full text-xs font-medium text-muted">{plans.vatNote}</p>
      </div>

      {plan.detail && <p className="mt-5 text-sm leading-relaxed text-muted">{plan.detail}</p>}

      <ul className="mt-6 space-y-3.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-[0.95rem] leading-snug text-ink">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
              <IconCheck className="size-3" />
            </span>
            {f}
          </li>
        ))}
        {plan.consulting && (
          <li className="flex items-start gap-3 rounded-xl bg-brand-50 p-3 text-sm font-semibold leading-snug text-brand-700">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
              <IconCheck className="size-3" />
            </span>
            {plans.consultingLabel}
          </li>
        )}
      </ul>

      <div className="mt-auto pt-8">
        {plan.action === "create" ? (
          // "Crea tu campaña ya": lleva a la app en la misma pestaña
          <Button
            href={siteConfig.createCampaignUrl}
            variant={recommended ? "primary" : "secondary"}
            size="lg"
            className="w-full"
            newTab={false}
          >
            {plan.cta ?? plans.cta}
            <span className="sr-only"> (plan {plan.name})</span>
          </Button>
        ) : (
          // "Contáctanos": abre WhatsApp (mensaje de agencia en los planes de agencias)
          <ContactButton
            variant={recommended ? "primary" : "secondary"}
            size="lg"
            className="w-full"
            audience={audience}
          >
            {plan.cta ?? plans.cta}
            <span className="sr-only"> (plan {plan.name})</span>
          </ContactButton>
        )}
      </div>
    </article>
  );
}

/**
 * Planes — dinámico: el selector Marcas / Agencias cambia los planes con animación.
 * Las marcas van primero. El plan recomendado es siempre Growth.
 */
export function Plans() {
  const [active, setActive] = useState(0);
  const tab = plans.tabs[active];

  return (
    <section
      id="planes"
      aria-labelledby="planes-title"
      className="relative overflow-x-clip bg-brand-50 py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow={plans.eyebrow}
          title={plans.title}
          accent={plans.titleAccent}
          intro={plans.intro}
          titleId="planes-title"
        />

        <Reveal delay={0.2} className="mt-10">
          <SegmentedTabs
            tabs={plans.tabs}
            active={active}
            onChange={setActive}
            label={plans.tablistLabel}
            idPrefix="plans"
            panelId="plans-panel"
          />
        </Reveal>

        <Reveal delay={0.28}>
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={tab.id}
              id="plans-panel"
              role="tabpanel"
              aria-labelledby={`plans-tab-${tab.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p className="mx-auto mt-6 max-w-xl text-center text-base text-muted">{tab.description}</p>

              <ul className="mx-auto mt-14 grid max-w-md grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3 lg:gap-6">
                {tab.plans.map((plan, i) => {
                  const recommended = plan.id === RECOMMENDED_PLAN_ID;
                  return (
                    <m.li
                      key={plan.id}
                      className="relative isolate flex"
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                    >
                      {recommended && (
                        <div
                          aria-hidden
                          className="pointer-events-none absolute -inset-6 -z-10 lg:-inset-10"
                          style={{
                            background:
                              "radial-gradient(closest-side, rgba(93,41,120,0.22), transparent)",
                          }}
                        />
                      )}
                      <PlanCard plan={plan} audience={tab.id === "agencias" ? "agencia" : "marca"} />
                    </m.li>
                  );
                })}
              </ul>
            </m.div>
          </AnimatePresence>
        </Reveal>

        <p className="mt-12 text-center text-sm text-muted">{plans.footnote}</p>
      </Container>
    </section>
  );
}
