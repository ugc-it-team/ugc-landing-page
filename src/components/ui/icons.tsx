/** Íconos de trazo (24×24) hechos a mano; heredan el color con currentColor. */
type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function IconVideo({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="6" width="13" height="12" rx="3" />
      <path d="m16 10.5 5-3v9l-5-3" />
    </svg>
  );
}

export function IconRocket({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 19c.4-2.6 1.7-4 3.6-4.6M9.5 14.5C10.6 9.8 14.4 5.5 20 5c-.5 5.6-4.8 9.4-9.5 10.5l-1-1Z" />
      <circle cx="15" cy="9.5" r="1.4" />
      <path d="M8 16 6 18" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.6" />
      <path d="M10.8 18.2h2.4" />
    </svg>
  );
}

export function IconLayers({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m12 3.5 9 4.7-9 4.7-9-4.7 9-4.7Z" />
      <path d="m3 12.4 9 4.7 9-4.7" />
      <path d="m3 16.6 9 4.4 9-4.4" />
    </svg>
  );
}

export function IconGlobe({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  );
}

export function IconTrophy({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 6H5v1a3 3 0 0 0 3 3M16 6h3v1a3 3 0 0 1-3 3" />
      <path d="M12 13v4M9 20h6M10 17h4" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg {...base} strokeWidth={2.4} className={className}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function IconMinus({ className }: IconProps) {
  return (
    <svg {...base} strokeWidth={2.4} className={className}>
      <path d="M6 12h12" />
    </svg>
  );
}

export function IconChevronDown({ className }: IconProps) {
  return (
    <svg {...base} strokeWidth={2.2} className={className}>
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7.5 8 5.5 8-5.5" />
    </svg>
  );
}

export function IconWhatsapp({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 20l1.3-4.1A8 8 0 1 1 8.2 18.8L4 20Z" />
      <path d="M9.4 8.9c.3 2.7 2.4 4.8 5.1 5.2l1-1.2-1.9-1-.9.6c-.9-.4-1.7-1.2-2.1-2.1l.6-.9-1-1.9-.8 1.3Z" />
    </svg>
  );
}

export function IconLinkedin({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="4.5" />
      <path d="M8 10.5V16M8 8v.01M12 16v-5.5m0 2.2c0-1.4 1-2.2 2.2-2.2S16.5 11.3 16.5 13v3" />
    </svg>
  );
}

export function IconInstagram({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8v.01" />
    </svg>
  );
}

export function IconTiktok({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14 3.5v10.3a3.6 3.6 0 1 1-3.6-3.6M14 3.5c.3 2.3 1.9 4 4.5 4.3" />
    </svg>
  );
}

export function IconYoutube({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.2 9.4v5.2l4.6-2.6-4.6-2.6Z" />
    </svg>
  );
}

export function IconQuote({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M9.5 6C6.5 7 4.5 9.6 4.5 13v5h6v-6h-3c0-1.8 1-3 2.5-3.6L9.5 6Zm9 0c-3 1-5 3.6-5 7v5h6v-6h-3c0-1.8 1-3 2.5-3.6L18.5 6Z" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg {...base} strokeWidth={2} className={className}>
      <path d="M5 12h14m0 0-5-5m5 5-5 5" />
    </svg>
  );
}
