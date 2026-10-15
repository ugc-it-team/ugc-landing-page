const PIXEL_ID = "2555784401592045";

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

/** El script y su cola solo se crean tras aceptar las cookies publicitarias. */
export function ensureMetaPixel() {
  if (window.fbq) return;

  const fbq: Fbq = Object.assign(
    (...args: unknown[]) => {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue.push(args);
    },
    { queue: [] as unknown[][], loaded: true, version: "2.0" },
  );

  window.fbq = window._fbq = fbq;
  fbq("init", PIXEL_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
}

export function trackPageView() {
  window.fbq?.("track", "PageView");
}

/** Mide la apertura del enlace, no el envío de un mensaje ni un lead. */
export function trackWhatsAppClick() {
  window.fbq?.("trackCustom", "WhatsAppClick");
}

export function setMetaConsent(granted: boolean) {
  window.fbq?.("consent", granted ? "grant" : "revoke");
}
