"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { ContactButton } from "@/components/ui/ContactButton";
import { nav } from "@/content/es";
import { siteConfig } from "@/site.config";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Fondo translúcido + blur + sombra cuando se hace scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape cierra el menú móvil y devuelve el foco al botón
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Si se agranda la ventana, cierra el menú móvil
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Fondo translúcido: solo cambia opacity (no anima el color) */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 bg-white/75 shadow-[0_1px_0_rgba(10,10,10,0.06),0_10px_30px_-14px_rgba(10,10,10,0.18)] backdrop-blur-xl transition-opacity duration-300",
          scrolled || open ? "opacity-100" : "opacity-0",
        )}
      />

      <nav
        aria-label="Principal"
        className="relative mx-auto flex h-[var(--nav-h)] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a href="#inicio" aria-label="UGConnect, ir al inicio" className="flex items-center">
          {/* Logo completo en escritorio/tablet, reducido en móvil */}
          <Logo variant="full" priority className="hidden h-10 md:block" />
          <Logo variant="short" priority className="h-7 md:hidden" />
        </a>

        {/* Enlaces: desde 1024 px. Por debajo, viven en el menú hamburguesa. */}
        <ul className="hidden items-center gap-8 lg:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative whitespace-nowrap text-sm font-medium text-ink/80 transition-colors hover:text-brand-600 after:absolute after:inset-x-0 after:-bottom-1.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-500 after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Escritorio: "Iniciar sesión" al costado de "Contáctanos" */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button href={siteConfig.loginUrl} variant="secondary" newTab={false}>
              {nav.login}
            </Button>
            {/* "Contáctanos" de la navbar: abre WhatsApp con el mensaje ya escrito */}
            <ContactButton>{nav.cta}</ContactButton>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-brand-100 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="size-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            className="relative border-t border-ink/5 bg-white lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="mx-auto flex max-w-7xl flex-col px-4 pb-4 pt-2 sm:px-6">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex h-14 items-center border-b border-ink/5 font-display text-lg font-semibold text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="flex flex-col gap-3 pt-4">
                <ContactButton size="lg" className="w-full">
                  {nav.cta}
                </ContactButton>
                <Button
                  href={siteConfig.loginUrl}
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  newTab={false}
                >
                  {nav.login}
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
