import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ContactButton } from "@/components/ui/ContactButton";
import { BrandBlobs } from "@/components/ui/BrandBlobs";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVisual } from "@/components/mockups/HeroVisual";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { AnimatedLogo } from "@/components/ui/AnimatedLogo";
import { hero, marquee, stats, clients } from "@/content/es";
import { siteConfig } from "@/site.config";

/** Cuántos logos entran en la fila estática (sm+) antes de saturarla. En mobile van todos en marquesina. */
const HERO_CLIENTS_COUNT = 6;

function HeroClientLogo({ logo }: { logo: (typeof clients.logos)[number] }) {
  return (
    <Image
      src={logo.src}
      alt={logo.name}
      width={logo.width}
      height={logo.height}
      className="h-10 w-auto max-w-[7rem] object-contain opacity-75 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-14 sm:max-w-[11rem]"
    />
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-x-clip pb-16 pt-[calc(var(--nav-h)+2.5rem)] sm:pt-[calc(var(--nav-h)+4rem)]"
    >
      {/* Textura de marca */}
      <BrandBlobs tone="light" />

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        {/* Logo animado sobre el titular. Sin Reveal: su opacity/transform aislaría el mix-blend del GIF. */}
        <AnimatedLogo className="mb-7 max-w-[19rem] sm:mb-9 sm:max-w-[30rem]" />

        <Reveal>
          <p className="inline-block max-w-full text-balance rounded-2xl border border-brand-200 bg-white/80 px-4 py-1.5 text-center text-[11px] font-semibold leading-snug text-brand-700 backdrop-blur min-[400px]:text-xs sm:rounded-full sm:text-sm">
            <span
              aria-hidden
              className="mr-2 inline-block size-1.5 rounded-full bg-brand-600 align-middle"
            />
            {hero.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1
            id="hero-title"
            className="mt-6 text-balance font-display text-[2.15rem] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]"
          >
            <span className="block text-balance">{hero.titleLine1}</span>
            {/* Punto de marca: el titular termina en un punto morado */}
            <span className="block text-balance text-brand-600">
              {hero.titleLine2}
              <span aria-hidden>.</span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <ContactButton size="lg">{hero.primaryCta}</ContactButton>
            <Button href="#como-funciona" variant="secondary" size="lg">
              {hero.secondaryCta}
            </Button>
          </div>
        </Reveal>

        {/* Dato real: creadores registrados */}
        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 inline-flex items-center gap-3 rounded-full border border-brand-200 bg-white/80 py-2 pl-3 pr-5 backdrop-blur">
            <AvatarStack sizeClass="size-7" />
            <span className="text-sm text-ink">
              <strong className="font-display font-extrabold text-brand-600">
                {stats.creators.display}
              </strong>{" "}
              {stats.creators.label}
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.36}>
          <p className="mx-auto mt-5 max-w-lg text-balance text-sm text-muted">{hero.note}</p>
        </Reveal>

        {/* Franja compacta de clientes: mismo dato que la sección `Clients` de más abajo,
            pero reducida. En mobile no entran los logos grandes en una fila sin amontonarse,
            así que corren en marquesina (mismo patrón CSS que `Clients`/`Marquee`); de sm en
            adelante hay espacio de sobra y van estáticos y centrados. */}
        {siteConfig.features.clients && clients.logos.length > 0 && (
          <Reveal delay={0.42}>
            <div className="mx-auto mt-10 max-w-4xl">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {hero.clientsLabel}
              </p>

              <div className="marquee mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] sm:hidden">
                <div className="marquee-track flex w-max animate-marquee will-change-transform">
                  {[false, true].map((hiddenHalf) => (
                    <ul
                      key={hiddenHalf ? "dup" : "main"}
                      aria-hidden={hiddenHalf || undefined}
                      className="marquee-list flex min-w-screen shrink-0 items-center justify-around gap-10 pr-10"
                    >
                      {clients.logos.map((logo) => (
                        <li key={`${hiddenHalf ? "dup" : "main"}-${logo.name}`} className="flex h-12 shrink-0 items-center">
                          <HeroClientLogo logo={logo} />
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>

              <ul className="mt-6 hidden flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:flex">
                {clients.logos.slice(0, HERO_CLIENTS_COUNT).map((logo) => (
                  <li key={logo.name} className="flex h-16 items-center">
                    <HeroClientLogo logo={logo} />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </div>

      <HeroVisual />

      <div className="mt-20 sm:mt-24">
        <Marquee label={marquee.label} items={marquee.items} />
      </div>
    </section>
  );
}
