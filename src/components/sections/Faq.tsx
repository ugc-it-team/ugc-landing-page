import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconWhatsapp } from "@/components/ui/icons";
import { faq } from "@/content/es";
import { siteConfig } from "@/site.config";

export function Faq() {
  // Datos estructurados (FAQPage) para buscadores; usan el mismo texto que se ve en pantalla.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "es-PE",
    mainEntity: faq.items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <section id="faq" aria-labelledby="faq-title" className="relative py-24 sm:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)] lg:self-start">
            <SectionHeading
              align="left"
              eyebrow={faq.eyebrow}
              title={faq.title}
              accent={faq.titleAccent}
              intro={faq.intro}
              titleId="faq-title"
            />
            <Reveal delay={0.2}>
              <div className="mt-8 max-w-sm rounded-3xl border border-brand-100 bg-brand-50 p-6">
                <p className="font-display text-lg font-bold text-ink">{faq.helpTitle}</p>
                <p className="mt-1.5 text-sm text-muted">{faq.helpText}</p>
                <div className="mt-5">
                  <Button href={siteConfig.contact.whatsappUrl} variant="secondary">
                    <IconWhatsapp className="size-5 text-brand-600" />
                    {faq.helpWhatsapp}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Accordion items={faq.items} idPrefix="faq" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
