type MarqueeProps = {
  label: string;
  items: readonly string[];
};

/**
 * Marquesina infinita en CSS puro (solo transform). Se pausa al pasar el cursor.
 * Con prefers-reduced-motion se muestra como una fila estática (ver globals.css).
 *
 * La animación desplaza el track un -50%, así que el track son dos mitades idénticas.
 * Para que el bucle no deje hueco, cada mitad tiene que cubrir al menos el ancho de la
 * pantalla: `min-w-screen` lo garantiza a cualquier ancho y `justify-around` reparte los
 * elementos cuando sobra espacio. Si el contenido ya es más ancho, ambas quedan inertes.
 */
export function Marquee({ label, items }: MarqueeProps) {
  const list = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="marquee-list flex min-w-screen shrink-0 justify-around gap-3 pr-3"
    >
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
          {list(false)}
          {/* Segunda mitad idéntica: es la que hace que el -50% cierre el bucle sin salto */}
          <div aria-hidden className="marquee-dup contents">
            {list(true)}
          </div>
        </div>
      </div>
    </div>
  );
}
