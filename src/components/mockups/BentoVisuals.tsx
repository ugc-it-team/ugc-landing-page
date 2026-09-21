import { features } from "@/content/es";
import { MockAvatar } from "@/components/mockups/MockWindow";
import { IconCheck } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

/*
  Visuales pequeños de la grilla bento. Todos reaccionan al pasar el cursor por la tarjeta
  (el padre lleva la clase "group") y solo animan transform u opacity.
  Son ilustrativos: sin cifras ni datos reales.
*/

/** Matching: el brief se conecta con tres creadores; el mejor perfil se resalta al pasar el cursor. */
export function MatchingVisual() {
  const f = features.items.matching;
  const fits = [5, 4, 3];
  return (
    <div className="flex h-44 items-stretch gap-0" aria-hidden>
      <div className="flex items-center">
        <span className="rounded-2xl bg-brand-500 px-3.5 py-2.5 text-xs font-bold text-white shadow-[0_12px_28px_-10px_rgba(136,82,162,0.8)] transition-transform duration-300 group-hover:scale-105">
          {f.brief}
        </span>
      </div>

      {/* Conexiones: línea base + línea resaltada que aparece al hover */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full min-w-8 flex-1" fill="none">
        {[16.67, 50, 83.33].map((y, i) => (
          <path
            key={y}
            d={`M0 50 C50 50 50 ${y} 100 ${y}`}
            stroke="#cdb4da"
            strokeWidth="2"
            strokeDasharray="4 4"
            vectorEffect="non-scaling-stroke"
            opacity={i === 0 ? 0.6 : 1}
          />
        ))}
        <path
          d="M0 50 C50 50 50 16.67 100 16.67"
          stroke="#8852a2"
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </svg>

      <ul className="flex w-40 shrink-0 flex-col justify-between sm:w-44">
        {f.creators.map((name, i) => (
          <li
            key={name}
            className={cn(
              "flex h-[3.1rem] items-center gap-2.5 rounded-2xl border bg-white px-2.5 transition-[transform,box-shadow,border-color] duration-300",
              i === 0
                ? "border-brand-200 group-hover:-translate-x-1 group-hover:border-brand-500 group-hover:shadow-[0_0_0_3px_rgba(136,82,162,0.16)]"
                : "border-brand-100",
            )}
          >
            <MockAvatar letter={name[0]} index={i} className="size-8 text-xs" />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-xs font-semibold text-ink">{name}</span>
              <span className="mt-1 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <span
                    key={k}
                    className={cn("h-1 flex-1 rounded-full", k < fits[i] ? "bg-brand-500" : "bg-brand-100")}
                  />
                ))}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Kanban: al pasar el cursor, una tarjeta avanza de "Producción" a "Aprobado". */
export function KanbanVisual() {
  const cols = features.items.kanban.columns;
  const card = "rounded-lg border border-brand-100 bg-white p-2 space-y-1.5";
  const lines = (
    <>
      <span className="block h-1.5 w-4/5 rounded-full bg-brand-200" />
      <span className="block h-1.5 w-3/5 rounded-full bg-brand-100" />
    </>
  );
  return (
    <div className="grid grid-cols-3 gap-2" aria-hidden>
      {cols.map((c, ci) => (
        <div key={c} className="min-w-0 rounded-xl bg-brand-50 p-2">
          <p className="mb-2 truncate text-[10px] font-bold text-muted">{c}</p>
          <div className="min-h-[5.5rem] space-y-2">
            {ci === 0 && <div className={card}>{lines}</div>}
            {ci === 1 && (
              <>
                <div className={card}>{lines}</div>
                {/* Esta tarjeta "viaja" a la columna siguiente */}
                <div
                  className={cn(
                    card,
                    "relative z-10 border-brand-300 shadow-sm transition-transform duration-500 ease-out group-hover:translate-x-[calc(100%+1.5rem)]",
                  )}
                >
                  {lines}
                </div>
              </>
            )}
            {ci === 2 && (
              <div className={cn(card, "flex items-center justify-between")}>
                <span className="space-y-1.5">{lines}</span>
                <IconCheck className="size-3.5 text-emerald-600" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Chat: un tercer mensaje aparece al pasar el cursor. */
export function ChatVisual() {
  const b = features.items.chat.bubbles;
  return (
    <div className="space-y-2.5" aria-hidden>
      <div className="flex max-w-[88%] items-start gap-2">
        <MockAvatar letter="M" index={3} className="size-6 text-[10px]" />
        <p className="rounded-2xl rounded-tl-md bg-brand-50 px-3 py-2 text-xs text-ink">{b[0]}</p>
      </div>
      <div className="ml-auto flex max-w-[88%] items-start justify-end gap-2">
        <p className="rounded-2xl rounded-tr-md bg-brand-500 px-3 py-2 text-xs text-white">{b[1]}</p>
        <MockAvatar letter="C" index={2} className="size-6 text-[10px]" />
      </div>
      <div className="flex max-w-[88%] translate-y-2 items-start gap-2 opacity-0 transition-[transform,opacity] duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <MockAvatar letter="M" index={3} className="size-6 text-[10px]" />
        <p className="rounded-2xl rounded-tl-md bg-brand-50 px-3 py-2 text-xs text-ink">{b[2]}</p>
      </div>
    </div>
  );
}

/** Pagos: el candado se abre y el pago pasa a "liberado" al pasar el cursor. Tarjeta sobre fondo morado. */
export function PaymentVisual() {
  const steps = features.items.payments.steps;
  return (
    <div className="space-y-5" aria-hidden>
      <div className="flex items-center gap-3">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-white/15 text-white">
          <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="11" width="14" height="10" rx="2.5" />
            <path
              d="M8 11V8a4 4 0 0 1 8 0v3"
              className="origin-[85%_100%] [transform-box:fill-box] transition-transform duration-300 group-hover:-translate-y-[3px] group-hover:-rotate-[24deg]"
            />
          </svg>
        </span>
        <span className="relative inline-flex h-8 items-center">
          <span className="rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white transition-opacity duration-300 group-hover:opacity-0">
            {steps[0]}
          </span>
          <span className="absolute left-0 whitespace-nowrap rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {steps[2]}
          </span>
        </span>
      </div>

      {/* Línea de progreso: se completa al hover */}
      <div>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-full origin-left scale-x-[0.34] rounded-full bg-white transition-transform duration-700 ease-out group-hover:scale-x-100" />
        </div>
        <div className="mt-2 flex justify-between text-[11px] font-semibold text-white/85">
          {steps.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Dashboard: las barras crecen a un segundo estado al pasar el cursor. */
export function ChartVisual() {
  const f = features.items.dashboards;
  // --a: altura inicial, --b: altura al hover (escala 0–1)
  const bars: Array<[number, number]> = [
    [0.35, 0.55],
    [0.5, 0.42],
    [0.42, 0.7],
    [0.62, 0.6],
    [0.55, 0.85],
    [0.7, 1],
  ];
  return (
    <div aria-hidden>
      <div className="mb-3 flex items-center gap-2">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-60 motion-reduce:animate-none" />
          <span className="relative inline-flex size-2 rounded-full bg-brand-500" />
        </span>
        <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700">{f.live}</span>
      </div>
      <div className="flex h-24 items-end gap-2">
        {bars.map(([a, b], i) => (
          <span
            key={i}
            style={{ "--a": a, "--b": b } as React.CSSProperties}
            className="h-full flex-1 origin-bottom rounded-t-lg bg-gradient-to-t from-brand-500 to-brand-300 transition-transform duration-500 ease-out [transform:scaleY(var(--a))] group-hover:[transform:scaleY(var(--b))]"
          />
        ))}
      </div>
    </div>
  );
}
