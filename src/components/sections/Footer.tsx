import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import {
  IconInstagram,
  IconLinkedin,
  IconMail,
  IconTiktok,
  IconWhatsapp,
  IconYoutube,
} from "@/components/ui/icons";
import { footer } from "@/content/es";
import { siteConfig } from "@/site.config";

const socialIcons = {
  linkedin: IconLinkedin,
  instagram: IconInstagram,
  tiktok: IconTiktok,
  youtube: IconYoutube,
} as const;

const linkClass =
  "text-[0.95rem] text-white/70 transition-colors hover:text-white focus-visible:text-white";

export function Footer() {
  const { email, whatsappUrl, location } = siteConfig.contact;
  const socials = Object.keys(socialIcons) as Array<keyof typeof socialIcons>;

  return (
    <footer className="on-dark bg-ink text-white">
      <Container className="pb-10 pt-16 sm:pt-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          {/* Marca */}
          <div className="col-span-2 lg:col-span-1">
            <a href="/#inicio" aria-label="UGConnect, ir al inicio" className="inline-block">
              <Logo variant="full" tone="dark" className="h-12" />
            </a>
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-white/70">
              {footer.description}
            </p>
            {/* El lema "Connect. Collaborate. Create." ya viene dentro del logo completo (imagen);
                se lee a lectores de pantalla desde el alt del logo. */}
          </div>

          {/* Navegación */}
          <nav aria-label={footer.navTitle}>
            <p className="text-sm font-bold text-white">{footer.navTitle}</p>
            <ul className="mt-4 space-y-3">
              {footer.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal (enlaces de relleno: ver site.config.ts) */}
          <nav aria-label={footer.legalTitle}>
            <p className="text-sm font-bold text-white">{footer.legalTitle}</p>
            <ul className="mt-4 space-y-3">
              {footer.legal.map((l) => (
                <li key={l.key}>
                  <a href={siteConfig.legal[l.key as keyof typeof siteConfig.legal]} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto + redes */}
          <div className="col-span-2 lg:col-span-1">
            <p className="text-sm font-bold text-white">{footer.contactTitle}</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${email}`} className={`${linkClass} inline-flex items-center gap-2.5`}>
                  <IconMail className="size-5 text-brand-300" />
                  {email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} inline-flex items-center gap-2.5`}
                >
                  <IconWhatsapp className="size-5 text-brand-300" />
                  WhatsApp
                </a>
              </li>
              <li className="text-[0.95rem] text-white/70">{location}</li>
            </ul>

            <p className="mt-7 text-sm font-bold text-white">{footer.socialTitle}</p>
            <ul className="mt-4 flex gap-3">
              {socials.map((key) => {
                const href = siteConfig.social[key];
                // Sin perfil publicado todavía: mejor omitir el icono que enlazar a "#".
                if (!href) return null;
                const Icon = socialIcons[key];
                return (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={footer.socialLabels[key]}
                      className="flex size-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-[transform,background-color,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 hover:text-white"
                    >
                      <Icon className="size-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {footer.year} {siteConfig.name}. {footer.rights}
          </p>
          <p lang="en" aria-hidden className="font-display font-semibold text-white/60">
            UGC<span className="text-brand-300">.</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
