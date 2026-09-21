import { ContactButton } from "@/components/ui/ContactButton";
import { Container } from "@/components/ui/Container";
import { DarkSheet } from "@/components/ui/DarkSheet";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/ui/icons";
import { consulting } from "@/content/es";

/*
  Quién lo recibe: marcas con plan Pro y agencias con plan Enterprise.
  [POR CONFIRMAR] Alcance real del acompañamiento: qué incluye, frecuencia de reuniones,
  canales de contacto, tiempos de respuesta y cómo funciona el paso hacia la autonomía.
  El texto de esta sección es genérico a propósito.
*/

export function Consulting() {
  return (
    <section
      id="acompanamiento"
      aria-labelledby="acompanamiento-title"
      className="on-dark relative isolate text-white"
    >
      {/* Transición de color: capa casi negra que aparece con el scroll (solo opacity) */}
      <DarkSheet rounded="all" />
      {/* Brillo tenue de marca, estático */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[2rem] md:rounded-[3.5rem]"
      >
        <div
          className="absolute -right-[10%] -top-[10%] size-[36rem] max-w-[90vw]"
          style={{ background: "radial-gradient(closest-side, rgba(93,41,120,0.28), transparent)" }}
        />
      </div>

      <Container className="py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              tone="dark"
              align="left"
              eyebrow={consulting.eyebrow}
              title={consulting.title}
              accent={consulting.titleAccent}
              intro={consulting.intro}
              titleId="acompanamiento-title"
            />
            <Reveal delay={0.2}>
              <p className="mt-7 inline-flex max-w-md items-start gap-2.5 rounded-2xl border border-brand-400/40 bg-brand-900/40 px-4 py-3 text-sm font-medium leading-snug text-white">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                  <IconCheck className="size-3" />
                </span>
                <span>
                  {consulting.planNote}{" "}
                  <a
                    href="#planes"
                    className="whitespace-nowrap font-semibold text-brand-300 underline underline-offset-2 transition-colors hover:text-white"
                  >
                    {consulting.planLink}
                  </a>
                </span>
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-7">
                <ContactButton variant="light" size="lg">
                  {consulting.cta}
                </ContactButton>
              </div>
            </Reveal>
          </div>

          <ol className="space-y-3.5">
            {consulting.pillars.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 0.09}>
                  <div className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-[transform,background-color,border-color] duration-300 hover:translate-x-1 hover:border-white/25 hover:bg-white/[0.07]">
                    <span
                      aria-hidden
                      className="font-display text-lg font-extrabold text-brand-300 transition-colors group-hover:text-white"
                    >
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-white/70">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        {/* Camino hacia la autonomía: el acompañamiento no es para siempre */}
        <div className="mt-20">
          <Reveal>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-10">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.7fr] lg:items-center lg:gap-14">
                <div>
                  <h3 className="text-balance font-display text-2xl font-extrabold leading-tight sm:text-3xl">
                    <span className="block">{consulting.autonomy.title}</span>
                    <span className="block text-brand-300">
                      {consulting.autonomy.titleAccent}
                      <span aria-hidden>.</span>
                    </span>
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/70">
                    {consulting.autonomy.text}
                  </p>
                </div>

                <ol className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {consulting.autonomy.stages.map((s, i) => {
                    const last = i === consulting.autonomy.stages.length - 1;
                    return (
                      <li
                        key={s.title}
                        className={
                          last
                            ? "rounded-2xl border border-brand-400/60 bg-gradient-to-br from-brand-800/70 to-brand-950 p-5 shadow-[0_0_60px_-24px_rgba(93,41,120,0.9)]"
                            : "rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                        }
                      >
                        {/* Peldaños: suben con cada etapa */}
                        <span aria-hidden className="flex h-6 items-end gap-1">
                          {[0, 1, 2].map((k) => (
                            <span
                              key={k}
                              className={`w-2 rounded-sm ${k <= i ? "bg-brand-400" : "bg-white/15"}`}
                              style={{ height: `${8 + k * 8}px` }}
                            />
                          ))}
                        </span>
                        <p className="mt-3 font-display text-base font-bold text-white">
                          <span className="sr-only">{i + 1}. </span>
                          {s.title}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/70">{s.text}</p>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
