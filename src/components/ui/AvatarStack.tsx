import { cn } from "@/lib/cn";

const tints = [
  "from-brand-300 to-brand-500",
  "from-brand-400 to-brand-700",
  "from-brand-200 to-brand-400",
  "from-brand-500 to-brand-800",
  "from-brand-300 to-brand-600",
];

type AvatarStackProps = {
  count?: number;
  /** Tamaño de cada círculo, por ejemplo "size-8". */
  sizeClass?: string;
  /** Color del anillo que separa los círculos: debe coincidir con el fondo. */
  ringClass?: string;
  className?: string;
};

/**
 * Círculos superpuestos que sugieren "una comunidad de creadores".
 * Son decorativos (formas de color, sin rostros ni nombres reales).
 */
export function AvatarStack({
  count = 5,
  sizeClass = "size-8",
  ringClass = "ring-white",
  className,
}: AvatarStackProps) {
  return (
    <span aria-hidden className={cn("flex -space-x-2.5", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "shrink-0 rounded-full bg-gradient-to-br ring-2",
            sizeClass,
            tints[i % tints.length],
            ringClass,
          )}
        />
      ))}
    </span>
  );
}
