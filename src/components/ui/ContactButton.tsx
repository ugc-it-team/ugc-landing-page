import { Button, type ButtonProps } from "@/components/ui/Button";
import { IconWhatsapp } from "@/components/ui/icons";
import { nav } from "@/content/es";
import { siteConfig } from "@/site.config";

type ContactButtonProps = Omit<ButtonProps, "href" | "arrow" | "newTab"> & {
  /** "agencia" usa el mensaje de WhatsApp para agencias; por defecto, el de marcas. */
  audience?: "marca" | "agencia";
};

/**
 * Botón "Contáctanos": abre el WhatsApp de UGConnect con el mensaje ya escrito.
 * Lleva el ícono de WhatsApp y avisa a lectores de pantalla que abre WhatsApp en una pestaña nueva.
 * Los destinos viven en src/site.config.ts (contactUrl / contactAgencyUrl).
 */
export function ContactButton({ audience = "marca", children, ...props }: ContactButtonProps) {
  const href = audience === "agencia" ? siteConfig.contactAgencyUrl : siteConfig.contactUrl;
  return (
    <Button {...props} href={href}>
      <IconWhatsapp className="size-5" />
      {children}
      <span className="sr-only"> {nav.ctaHint}</span>
    </Button>
  );
}
