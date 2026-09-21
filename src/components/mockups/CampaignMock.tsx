import { howItWorks } from "@/content/es";
import { MockLabel, MockWindow } from "@/components/mockups/MockWindow";
import { cn } from "@/lib/cn";

/** Paso 1: formulario de brief y presupuesto. */
export function CampaignMock() {
  const m = howItWorks.mocks.campaign;

  const chips = (items: readonly string[], active: number[]) => (
    <div className="flex flex-wrap gap-2">
      {items.map((c, i) => (
        <span
          key={c}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold",
            active.includes(i)
              ? "bg-brand-500 text-white"
              : "border border-brand-200 bg-white text-ink",
          )}
        >
          {c}
        </span>
      ))}
    </div>
  );

  return (
    <MockWindow title={m.title} badge={m.badge}>
      <div className="grid gap-4 p-4 sm:p-5">
        <div className="space-y-1.5">
          <MockLabel>{m.nameLabel}</MockLabel>
          <div className="rounded-xl border border-brand-200 bg-white px-3.5 py-2.5 text-sm font-medium text-ink">
            {m.nameValue}
          </div>
        </div>
        <div className="space-y-2">
          <MockLabel>{m.goalLabel}</MockLabel>
          {chips(m.goals, [2])}
        </div>
        <div className="space-y-2">
          <MockLabel>{m.channelsLabel}</MockLabel>
          {chips(m.channels, [0, 1])}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <MockLabel>{m.budgetLabel}</MockLabel>
            <div className="flex items-center gap-2 rounded-xl border border-brand-200 bg-white px-3.5 py-2.5">
              <span className="text-sm font-semibold text-muted">S/</span>
              <span className="h-2 w-16 rounded-full bg-brand-100" />
            </div>
          </div>
          <div className="space-y-1.5">
            <MockLabel>{m.dateLabel}</MockLabel>
            <div className="flex items-center gap-2 rounded-xl border border-brand-200 bg-white px-3.5 py-2.5">
              <svg aria-hidden viewBox="0 0 20 20" className="size-4 text-brand-500" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <rect x="3" y="4.5" width="14" height="12" rx="2.5" />
                <path d="M3 8.5h14M7 3v3M13 3v3" />
              </svg>
              <span className="h-2 w-14 rounded-full bg-brand-100" />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <span className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(136,82,162,0.8)]">
            {m.cta}
          </span>
        </div>
      </div>
    </MockWindow>
  );
}
