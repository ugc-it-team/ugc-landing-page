import { BrandBlobs } from "@/components/ui/BrandBlobs";
import { Button } from "@/components/ui/Button";
import { ContactButton } from "@/components/ui/ContactButton";
import { Container } from "@/components/ui/Container";
import { DarkSheet } from "@/components/ui/DarkSheet";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck, IconMail, IconWhatsapp } from "@/components/ui/icons";
import { LeadForm } from "@/components/forms/LeadForm";
import { finalCta, nav } from "@/content/es";
import { siteConfig } from "@/site.config";

/**
 * CTA final sobre casi negro con la textura de marca.
 * - Con `features.contactForm = true` (site.config.ts): dos columnas, mensaje + formulario.
 * - Con `false` (estado actual): el formulario está OCULTO y la sección queda centrada, con los botones
 *   de WhatsApp y correo. El código del formulario (LeadForm, lib/lead.ts) sigue intacto.
 * id="contacto" se mantiene por si se enlaza a esta sección.
 */
export function FinalCta() {
  const { email, whatsappUrl } = siteConfig.contact;
  const showForm = siteConfig.features.contactForm;

  const points = (
    <ul className={showForm ? "mt-8 space-y-3.5" : "mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3"}>
      {finalCta.points.map((p, i) => (
        <li key={p}>
          <Reveal delay={0.2 + i * 0.08}>
            <span className="flex items-center gap-3 text-base font-medium text-white">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white text-ink">
                <IconCheck className="size-3.5" />
              </span>
              {p}
            </span>
          </Reveal>
        </li>
      ))}
    </ul>
  );

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="on-dark relative isolate text-white"
    >
      <DarkSheet rounded="top" />
      {/* La máscara desvanece las manchas hacia abajo para que no se corten justo antes del footer */}
      <BrandBlobs
        tone="dark"
        className="rounded-t-[2rem] [mask-image:linear-gradient(to_bottom,#000_55%,transparent_95%)] md:rounded-t-[3.5rem]"
      />

      <Container className="py-24 sm:py-32">
        {showForm ? (
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
            <div>
              <SectionHeading
                tone="dark"
                align="left"
                eyebrow={finalCta.eyebrow}
                title={finalCta.title}
                accent={finalCta.titleAccent}
                intro={finalCta.intro}
                titleId="contacto-title"
              />
              {points}

              <Reveal delay={0.45}>
                <div className="mt-10 border-t border-white/10 pt-8">
                  <p className="text-sm font-semibold text-white/70">{finalCta.contactTitle}</p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href={`mailto:${email}`}
                      className="inline-flex items-center gap-2.5 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10"
                    >
                      <IconMail className="size-5 text-brand-300" />
                      <span className="sr-only">{finalCta.emailLabel}: </span>
                      {email}
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10"
                    >
                      <IconWhatsapp className="size-5 text-brand-300" />
                      {finalCta.whatsappLabel}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <LeadForm />
            </Reveal>
          </div>
        ) : (
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              tone="dark"
              eyebrow={finalCta.eyebrow}
              title={finalCta.title}
              accent={finalCta.titleAccent}
              intro={finalCta.intro}
              titleId="contacto-title"
            />
            {points}

            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <ContactButton variant="light" size="lg">
                  {nav.cta}
                </ContactButton>
                <Button href={`mailto:${email}`} variant="outlineLight" size="lg">
                  <IconMail className="size-5 text-brand-300" />
                  <span className="sr-only">{finalCta.emailLabel}: </span>
                  {email}
                </Button>
              </div>
            </Reveal>
          </div>
        )}
      </Container>
    </section>
  );
}
