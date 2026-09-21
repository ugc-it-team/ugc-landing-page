import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconQuote } from "@/components/ui/icons";
import { socialProof } from "@/content/es";
import { siteConfig } from "@/site.config";

/**
 * Prueba social: métricas y testimonios (los logos de clientes van en la sección Clients).
 * ESTÁ OCULTA. Para mostrarla:
 *   1) carga datos REALES en `socialProof` (src/content/es.ts), y
 *   2) cambia `features.socialProof` a true en src/site.config.ts.
 * Si el flag está apagado, o las dos listas están vacías, no dibuja nada.
 */
export function SocialProof() {
  const { metrics, testimonials } = socialProof;
  const hasData = metrics.length + testimonials.length > 0;
  if (!siteConfig.features.socialProof || !hasData) return null;

  return (
    <section
      id="prueba-social"
      aria-labelledby="prueba-social-title"
      className="relative py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow={socialProof.eyebrow}
          title={socialProof.title}
          accent={socialProof.titleAccent}
          intro={socialProof.intro || undefined}
          titleId="prueba-social-title"
        />

        {metrics.length > 0 && (
          <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <li key={m.label}>
                <Reveal delay={i * 0.08} className="h-full">
                  <div className="h-full rounded-3xl border border-brand-100 bg-brand-50 p-6 text-center">
                    <p className="font-display text-4xl font-extrabold text-brand-500 sm:text-5xl">
                      {m.value}
                    </p>
                    <p className="mt-2 text-sm font-medium text-muted">{m.label}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        )}

        {testimonials.length > 0 && (
          <ul className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <li key={t.name}>
                <Reveal delay={i * 0.08} className="h-full">
                  <figure className="flex h-full flex-col rounded-3xl border border-brand-100 bg-brand-50 p-7">
                    <IconQuote className="size-8 text-brand-300" />
                    <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3">
                      <span
                        aria-hidden
                        className="flex size-10 items-center justify-center rounded-full bg-brand-500 font-display text-sm font-bold text-white"
                      >
                        {t.name[0]}
                      </span>
                      <span className="text-sm">
                        <span className="block font-semibold text-ink">{t.name}</span>
                        <span className="block text-muted">
                          {t.role}, {t.company}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
