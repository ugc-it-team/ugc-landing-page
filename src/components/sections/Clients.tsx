import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clients } from "@/content/es";
import { siteConfig } from "@/site.config";

/** A partir de esta cantidad de logos, la tira corre sola (marquesina). */
const MARQUEE_FROM = 6;

const logoClass =
  "h-9 w-auto max-w-[9.5rem] object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-10";

/**
 * Clientes: tira de logos de las marcas que trabajan con UGConnect.
 * ESTÁ OCULTA. Para mostrarla:
 *   1) agrega logos REALES y autorizados en `clients.logos` (src/content/es.ts; archivos en public/clients/), y
 *   2) cambia `features.clients` a true en src/site.config.ts.
 * Si el flag está apagado o la lista está vacía, no dibuja nada.
 * Con pocos logos van centrados; con 6 o más corren en una marquesina (se pausa al pasar el cursor
 * y con prefers-reduced-motion queda como una fila estática, ver globals.css).
 */
export function Clients() {
  const { logos } = clients;
  if (!siteConfig.features.clients || logos.length === 0) return null;

  const items = logos.map((logo) => {
    const img = (
      <Image src={logo.src} alt={logo.name} width={logo.width} height={logo.height} className={logoClass} />
    );
    return (
      <li key={logo.name} className="flex h-14 shrink-0 items-center">
        {logo.href ? (
          <a
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${logo.name} (se abre en una pestaña nueva)`}
          >
            {img}
          </a>
        ) : (
          img
        )}
      </li>
    );
  });

  return (
    <section id="clientes" aria-labelledby="clientes-title" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={clients.eyebrow}
          title={clients.title}
          accent={clients.titleAccent}
          intro={clients.intro || undefined}
          titleId="clientes-title"
        />
      </Container>

      <Reveal delay={0.2} className="mt-12">
        {logos.length >= MARQUEE_FROM ? (
          <div className="marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
            <div className="marquee-track flex w-max animate-marquee will-change-transform">
              <ul className="marquee-list flex shrink-0 items-center gap-14 pr-14">{items}</ul>
              {/* Copia para que el bucle no tenga saltos; se oculta a lectores de pantalla */}
              <div aria-hidden className="marquee-dup contents">
                <ul className="marquee-list flex shrink-0 items-center gap-14 pr-14">{items}</ul>
              </div>
            </div>
          </div>
        ) : (
          <Container>
            <ul className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">{items}</ul>
          </Container>
        )}
      </Reveal>
    </section>
  );
}
