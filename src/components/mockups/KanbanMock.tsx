import { howItWorks } from "@/content/es";
import { MockAvatar, MockWindow } from "@/components/mockups/MockWindow";
import { IconCheck } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

/** Paso 3: tablero Kanban + chat integrado. */
export function KanbanMock() {
  const m = howItWorks.mocks.kanban;
  return (
    <MockWindow title={m.title} badge={m.badge}>
      <div className="flex h-full flex-col gap-3 p-4 sm:p-5">
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {m.columns.map((col, ci) => (
            <div key={col} className="min-w-0 space-y-2">
              <p className="truncate text-[11px] font-bold text-ink">{col}</p>
              {m.cards
                .filter((c) => c.col === ci)
                .map((c, k) => {
                  const tag = "tag" in c ? c.tag : undefined;
                  const done = "done" in c && c.done;
                  return (
                    <div
                      key={c.piece + k}
                      className={cn(
                        "space-y-2 rounded-xl border bg-white p-2.5",
                        tag ? "border-amber-200" : "border-brand-100",
                      )}
                    >
                      <p className="text-[11px] font-semibold leading-tight text-ink">{c.piece}</p>
                      {tag && (
                        <span className="inline-flex rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold leading-tight text-amber-800">
                          {tag}
                        </span>
                      )}
                      <div className="flex items-center justify-between">
                        <MockAvatar letter={c.who} index={ci} className="size-5 text-[10px]" />
                        {done && <IconCheck className="size-3.5 text-emerald-600" />}
                      </div>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>

        {/* Chat integrado */}
        <div className="mt-auto space-y-2 rounded-2xl border border-brand-100 bg-white p-3">
          <div className="flex max-w-[85%] items-start gap-2">
            <MockAvatar letter="M" index={3} className="size-6 text-[10px]" />
            <p className="rounded-2xl rounded-tl-md bg-brand-50 px-3 py-2 text-xs text-ink">
              {m.chatBrand}
            </p>
          </div>
          <div className="ml-auto flex max-w-[85%] items-start justify-end gap-2">
            <p className="rounded-2xl rounded-tr-md bg-brand-500 px-3 py-2 text-xs text-white">
              {m.chatCreator}
            </p>
            <MockAvatar letter="C" index={2} className="size-6 text-[10px]" />
          </div>
        </div>
      </div>
    </MockWindow>
  );
}
