import { IconWhatsapp } from "@/components/ui/icons";
import { siteConfig } from "@/site.config";

/**
 * Botón fijo de WhatsApp, presente en toda la página.
 *
 * Venía del sitio anterior, donde era el atajo de contacto permanente. Es un enlace
 * sin estado, así que no necesita "use client" ni JavaScript en el cliente.
 */
export function FloatingWhatsapp() {
  return (
    <a
      href={siteConfig.contactUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:scale-105 sm:right-6 sm:bottom-6"
    >
      <IconWhatsapp className="size-7" />
    </a>
  );
}
