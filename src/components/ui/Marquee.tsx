type MarqueeProps = {
  label: string;
  items: readonly string[];
};

/**
 * Marquesina infinita en CSS puro (solo transform). Se pausa al pasar el cursor.
 * La lista se duplica para que el bucle no tenga saltos; la copia se oculta a lectores de pantalla.
 * Con prefers-reduced-motion se muestra como una fila estática (ver globals.css).
 */
export function Marquee({ label, items }: MarqueeProps) {
  const list = (extra: string) => (
    <ul className={`marquee-list flex shrink-0 gap-3 pr-3 ${extra}`}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2.5 rounded-full border border-brand-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink"
        >
          <span aria-hidden className="size-1.5 rounded-full bg-brand-600" />
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee">
      <p className="px-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
      <div className="mt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <div className="marquee-track flex w-max animate-marquee will-change-transform">
          {list("")}
          <div aria-hidden className="marquee-dup contents">
            {list("")}
          </div>
        </div>
      </div>
    </div>
  );
}
