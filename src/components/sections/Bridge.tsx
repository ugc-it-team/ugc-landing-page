import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconGlobe, IconPhone, IconTrophy, IconVideo } from "@/components/ui/icons";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { CountUp } from "@/components/ui/CountUp";
import { bridge, stats } from "@/content/es";

const icons = {
  video: IconVideo,
  phone: IconPhone,
  trophy: IconTrophy,
  globe: IconGlobe,
} as const;

export function Bridge() {
  return (
    <section id="plataforma" aria-labelledby="plataforma-title" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={bridge.eyebrow}
          title={bridge.title}
          accent={bridge.titleAccent}
          intro={bridge.intro}
          titleId="plataforma-title"
        />

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {bridge.cards.map((card, i) => {
            const Icon = icons[card.icon];
            return (
              <li key={card.title}>
                {/* Entrada escalonada; el hover vive en el <article> para no chocar con la animación */}
                <Reveal delay={i * 0.09} className="h-full">
                  <article className="group relative h-full rounded-3xl border border-brand-100 bg-white p-6 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-2 hover:border-brand-300 hover:shadow-[0_32px_60px_-28px_rgba(110,67,132,0.45)] sm:p-7">
                    <div className="flex items-start justify-between">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                        <Icon className="size-6" />
                      </span>
                      <span
                        aria-hidden
                        className="font-display text-sm font-bold text-brand-300 transition-colors group-hover:text-brand-500"
                      >
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-bold leading-snug text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{card.text}</p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>

        {/* Dato real: creadores registrados, con contador animado (una sola vez) */}
        <Reveal delay={0.1} className="mt-12">
          <div className="flex flex-col items-center gap-6 rounded-[2rem] border border-brand-100 bg-brand-50 px-6 py-8 text-center sm:flex-row sm:justify-between sm:px-10 sm:text-left">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <AvatarStack sizeClass="size-10" ringClass="ring-brand-50" />
              <p>
                <CountUp
                  to={stats.creators.value}
                  prefix="+"
                  className="font-display text-5xl font-extrabold leading-none text-brand-500 sm:text-6xl"
                />
                <span className="mt-1 block text-base font-semibold text-ink">
                  {stats.creators.label}
                </span>
              </p>
            </div>
            <p className="max-w-md text-base leading-relaxed text-muted">{bridge.stat}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
