"use client";

import { useState } from "react";
import { IconChevronDown } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

type AccordionProps = {
  items: readonly { q: string; a: string }[];
  /** Prefijo para los ids (aria-controls / aria-labelledby). */
  idPrefix: string;
};

/**
 * Acordeón accesible: un solo panel abierto a la vez, botones con aria-expanded y paneles
 * con role="region". El panel cerrado queda "inert" (sus contenidos no reciben foco).
 * La apertura anima la altura con grid-template-rows (0fr → 1fr) y la opacidad.
 */
export function Accordion({ items, idPrefix }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-brand-100 overflow-hidden rounded-3xl border border-brand-100 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${idPrefix}-boton-${i}`;
        const panelId = `${idPrefix}-panel-${i}`;
        return (
          <div key={item.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-brand-50/70 sm:px-7"
              >
                <span className="font-display text-base font-bold leading-snug text-ink sm:text-lg">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-full transition-[transform,background-color,color] duration-300",
                    isOpen
                      ? "rotate-180 bg-brand-600 text-white"
                      : "bg-brand-100 text-brand-600 group-hover:bg-brand-200",
                  )}
                >
                  <IconChevronDown className="size-5" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl px-5 pb-6 text-base leading-relaxed text-muted sm:px-7">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
