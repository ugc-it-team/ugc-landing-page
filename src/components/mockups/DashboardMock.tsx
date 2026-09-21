"use client";

import { useId } from "react";
import { motion } from "motion/react";
import { howItWorks } from "@/content/es";
import { MockLabel, MockWindow } from "@/components/mockups/MockWindow";

/**
 * Paso 4: dashboard en tiempo real. Gráfico dibujado en SVG (datos ilustrativos,
 * sin cifras). La línea se dibuja una vez al aparecer (pathLength).
 */
const LINE = "M0 118 C40 108 70 98 100 88 S160 72 200 74 S270 42 310 46 S372 22 400 14";
const sparks = [
  "M0 22 L14 18 L28 20 L42 12 L56 14 L70 6",
  "M0 20 L14 22 L28 14 L42 16 L56 8 L70 10",
  "M0 24 L14 20 L28 21 L42 15 L56 12 L70 5",
];
const bars = ["w-[88%]", "w-[64%]", "w-[46%]"];

export function DashboardMock() {
  const m = howItWorks.mocks.dashboard;
  // id único: esta maqueta se dibuja también en la lista móvil (evita ids duplicados)
  const gradId = useId();
  return (
    <MockWindow title={m.title} badge={m.badge}>
      <div className="flex h-full flex-col gap-3 p-4 sm:p-5">
        <div className="grid grid-cols-3 gap-2.5">
          {m.stats.map((s, i) => (
            <div key={s} className="rounded-xl border border-brand-100 bg-white p-2.5">
              <p className="truncate text-[11px] font-semibold text-muted">{s}</p>
              <svg viewBox="0 0 70 28" className="mt-2 h-6 w-full" fill="none" aria-hidden>
                <path
                  d={sparks[i]}
                  stroke="#8852a2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-brand-100 bg-white p-3">
          <svg viewBox="0 0 400 150" className="h-28 w-full" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8852a2" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#8852a2" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[30, 70, 110].map((y) => (
              <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="#f2eaf6" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            ))}
            <motion.path
              d={`${LINE} L400 150 L0 150 Z`}
              fill={`url(#${gradId})`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.path
              d={LINE}
              stroke="#8852a2"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>
          <div className="mt-1 flex justify-between px-1 text-[10px] font-medium text-muted">
            {m.weeks.map((w) => (
              <span key={w}>{w}</span>
            ))}
          </div>
        </div>

        <div className="space-y-2 rounded-xl border border-brand-100 bg-white p-3">
          <MockLabel>{m.listTitle}</MockLabel>
          {m.list.map((row, i) => (
            <div key={row} className="flex items-center gap-3">
              <span className="w-28 shrink-0 truncate text-[11px] font-medium text-ink sm:w-32">{row}</span>
              <span className="h-1.5 flex-1 rounded-full bg-brand-100">
                <span className={`block h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-500 ${bars[i]}`} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </MockWindow>
  );
}
