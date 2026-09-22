import { howItWorks } from "@/content/es";
import { MockAvatar, MockLabel, MockWindow } from "@/components/mockups/MockWindow";
import { cn } from "@/lib/cn";

/** Paso 2: creadores sugeridos con nivel de afinidad. */
export function CreatorsMock() {
  const m = howItWorks.mocks.creators;
  return (
    <MockWindow title={m.title} badge={m.badge}>
      <div className="p-4 sm:p-5">
        <MockLabel>{m.fitLabel}</MockLabel>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {m.list.map((c, i) => (
            <li
              key={c.name}
              className={cn(
                "rounded-2xl border bg-white p-3.5",
                i === 0
                  ? "border-brand-600 shadow-[0_0_0_3px_rgba(93,41,120,0.14)]"
                  : "border-brand-100",
              )}
            >
              <div className="flex items-center gap-3">
                <MockAvatar letter={c.name[0]} index={i} className="size-10 text-sm" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink">{c.name}</p>
                  <p className="truncate text-xs text-muted">{c.niche}</p>
                </div>
              </div>
              {/* Nivel de afinidad: 5 segmentos, sin cifras */}
              <div className="mt-3 flex gap-1" aria-hidden>
                {Array.from({ length: 5 }).map((_, k) => (
                  <span
                    key={k}
                    className={cn("h-1.5 flex-1 rounded-full", k < c.fit ? "bg-brand-600" : "bg-brand-100")}
                  />
                ))}
              </div>
              <div className="mt-3">
                <span
                  className={cn(
                    "inline-flex rounded-full px-3 py-1 text-[11px] font-semibold",
                    c.invited
                      ? "bg-emerald-50 text-emerald-800"
                      : "border border-brand-200 bg-white text-brand-700",
                  )}
                >
                  {c.invited ? m.invited : m.invite}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </MockWindow>
  );
}
