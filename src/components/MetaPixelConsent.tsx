"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ensureMetaPixel,
  setMetaConsent,
  trackPageView,
  trackWhatsAppClick,
} from "@/lib/meta-pixel";

const STORAGE_KEY = "ugconnect-meta-pixel-consent";
const CHANGE_EVENT = "ugconnect-meta-pixel-consent-change";
type Choice = "loading" | "unset" | "accepted" | "rejected";
let fallbackChoice: Choice = "unset";

function readChoice(): Choice {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "accepted" || stored === "rejected" ? stored : fallbackChoice;
  } catch {
    return fallbackChoice;
  }
}

function subscribeToChoice(notify: () => void) {
  window.addEventListener("storage", notify);
  window.addEventListener(CHANGE_EVENT, notify);
  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener(CHANGE_EVENT, notify);
  };
}

export function MetaPixelConsent() {
  const pathname = usePathname();
  const choice = useSyncExternalStore(subscribeToChoice, readChoice, () => "loading");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (choice === "loading") return;
    if (choice !== "accepted") {
      setMetaConsent(false);
      lastTrackedPath.current = null;
      return;
    }

    if (!pathname) return;
    ensureMetaPixel();
    setMetaConsent(true);
    if (lastTrackedPath.current === pathname) return;
    trackPageView();
    lastTrackedPath.current = pathname;
  }, [choice, pathname]);

  useEffect(() => {
    if (choice !== "accepted") return;

    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest("a[href]");
      if (anchor?.getAttribute("href")?.startsWith("https://wa.me/")) {
        trackWhatsAppClick();
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [choice]);

  const saveChoice = (next: "accepted" | "rejected") => {
    fallbackChoice = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // La preferencia sigue vigente durante esta visita si el almacenamiento está bloqueado.
    }
    if (next === "rejected") lastTrackedPath.current = null;
    setMetaConsent(next === "accepted");
    window.dispatchEvent(new Event(CHANGE_EVENT));
    setSettingsOpen(false);
  };

  if (choice === "loading") return null;

  const showPanel = choice === "unset" || settingsOpen;

  return (
    <>
      {!showPanel && (
        <button
          type="button"
          onClick={() => setSettingsOpen(true)}
          className="fixed bottom-4 left-4 z-[90] rounded-full border border-ink/15 bg-white px-4 py-2 text-xs font-semibold text-ink shadow-lg hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:bottom-6 sm:left-6"
        >
          Configurar cookies
        </button>
      )}
      {showPanel && (
        <section
          aria-label="Preferencias de cookies publicitarias"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-2xl rounded-2xl border border-ink/10 bg-white p-5 text-ink shadow-2xl sm:bottom-6 sm:p-6"
        >
          <h2 className="font-display text-lg font-bold">Cookies publicitarias</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Si aceptas, usamos el píxel de Meta para medir visitas y clics hacia WhatsApp desde
            esta web, y evaluar nuestras campañas. Puedes cambiar tu elección aquí cuando quieras. {" "}
            <Link className="font-semibold text-brand-700 underline" href="/legal/privacy-policy/#section-8-cookies">
              Política de privacidad
            </Link>
            .
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => saveChoice("accepted")}
              className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              Aceptar
            </button>
            <button
              type="button"
              onClick={() => saveChoice("rejected")}
              className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              Rechazar
            </button>
          </div>
        </section>
      )}
    </>
  );
}
