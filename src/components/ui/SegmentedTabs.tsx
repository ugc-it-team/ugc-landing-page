"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type SegmentedTabsProps = {
  tabs: ReadonlyArray<{ id: string; label: string }>;
  active: number;
  onChange: (index: number) => void;
  /** Etiqueta accesible del grupo de pestañas. */
  label: string;
  /** Los ids de cada pestaña serán `${idPrefix}-tab-${id}`. */
  idPrefix: string;
  /** id del panel que controlan las pestañas (aria-controls). */
  panelId: string;
};

/**
 * Selector de pestañas accesible (role="tablist"): flechas ← →, Inicio y Fin; solo la pestaña
 * activa entra en el orden de Tab.
 *
 * El indicador morado se desliza midiendo el botón activo y moviendo un único span con
 * transform. Antes esto usaba `layoutId` de motion, que obliga a cargar el paquete de
 * animaciones de layout (bastante más pesado) solo por este efecto.
 */
export function SegmentedTabs({ tabs, active, onChange, label, idPrefix, panelId }: SegmentedTabsProps) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  const measure = useCallback(() => {
    const el = refs.current[active];
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active]);

  useLayoutEffect(() => {
    measure();
    // El ancho depende de la tipografía, que puede cargar después del primer render.
    const ro = new ResizeObserver(measure);
    refs.current.forEach((el) => el && ro.observe(el));
    return () => ro.disconnect();
  }, [measure]);

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = tabs.length - 1;
    else return;
    e.preventDefault();
    onChange(next);
    refs.current[next]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label={label}
      className="relative mx-auto flex w-fit max-w-full rounded-full border border-brand-200 bg-brand-50 p-1.5"
    >
      {indicator && (
        <span
          aria-hidden
          className="absolute top-1.5 bottom-1.5 left-0 rounded-full bg-brand-600 shadow-[0_10px_24px_-10px_rgba(93,41,120,0.8)] transition-[transform,width] duration-300 ease-out-expo motion-reduce:transition-none"
          style={{ width: indicator.width, transform: `translateX(${indicator.left}px)` }}
        />
      )}
      {tabs.map((t, i) => {
        const selected = i === active;
        return (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            type="button"
            id={`${idPrefix}-tab-${t.id}`}
            aria-selected={selected}
            aria-controls={panelId}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className="relative rounded-full px-5 py-2.5 text-sm font-semibold sm:px-7 sm:text-base"
          >
            <span
              className={cn(
                "relative transition-colors duration-200",
                selected ? "text-white" : "text-ink hover:text-brand-600",
              )}
            >
              {t.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
