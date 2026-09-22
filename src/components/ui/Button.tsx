import { cn } from "@/lib/cn";

export type ButtonProps = {
  href?: string;
  /**
   * primary: fondo morado + texto blanco (secciones claras).
   * secondary: blanco con borde (secundario en secciones claras).
   * light: blanco + texto casi negro (principal en secciones oscuras).
   * outlineLight: contorno claro (secundario en secciones oscuras).
   */
  variant?: "primary" | "secondary" | "light" | "outlineLight";
  size?: "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  /** Muestra una flecha que se desplaza al pasar el cursor. */
  arrow?: boolean;
  /** Abrir en pestaña nueva. Por defecto: sí para enlaces externos (http…), no para anclas. */
  newTab?: boolean;
};

const variants = {
  primary:
    "bg-brand-600 text-white shadow-[0_10px_30px_-10px_rgba(93,41,120,0.7)] hover:bg-brand-700",
  secondary: "border border-brand-200 bg-white text-ink hover:border-brand-300 hover:bg-brand-50",
  light: "bg-white text-ink hover:bg-brand-100",
  outlineLight: "border border-white/25 text-white hover:border-white/50 hover:bg-white/10",
} as const;

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-base",
} as const;

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  type = "button",
  disabled,
  onClick,
  arrow,
  newTab,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap",
    "transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out",
    "hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {children}
      {arrow && (
        <svg
          aria-hidden
          viewBox="0 0 20 20"
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 10h12m0 0-5-5m5 5-5 5" />
        </svg>
      )}
    </>
  );

  if (href) {
    const openNew = newTab ?? /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(openNew ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
}
