import { cn } from "@/lib/cn";

/* Piezas compartidas por las maquetas de interfaz (todas ilustrativas). */

export function MockWindow({
  title,
  badge,
  children,
  className,
}: {
  title: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-[0_30px_70px_-30px_rgba(93,41,120,0.45)]",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-brand-100 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-brand-200" />
          <span className="size-2.5 rounded-full bg-brand-200" />
          <span className="size-2.5 rounded-full bg-brand-200" />
        </div>
        <p className="min-w-0 flex-1 truncate text-center text-xs font-semibold text-ink sm:text-sm">
          {title}
        </p>
        {badge ? (
          <span className="rounded-full bg-brand-100 px-2.5 py-1 text-[11px] font-semibold text-brand-700">
            {badge}
          </span>
        ) : (
          <span className="w-10" />
        )}
      </div>
      <div className="min-h-0 flex-1 bg-brand-50/50">{children}</div>
    </div>
  );
}

const tints = [
  "from-brand-400 to-brand-600",
  "from-brand-300 to-brand-500",
  "from-brand-200 to-brand-400",
  "from-brand-500 to-brand-800",
];

export function MockAvatar({
  letter,
  index = 0,
  className,
}: {
  letter: string;
  index?: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-bold text-white",
        tints[index % tints.length],
        className ?? "size-8 text-xs",
      )}
    >
      {letter}
    </span>
  );
}

export function MockLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">{children}</p>
  );
}
