import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clients } from "@/content/es";
import { siteConfig } from "@/site.config";

/** A partir de esta cantidad de logos, la tira corre sola (marquesina). */
const MARQUEE_FROM = 6;

/**
 * La animación desplaza el track un -50%, así que el track son dos mitades idénticas.
 *
 * Para que el bucle no deje hueco, cada mitad tiene que cubrir al menos el ancho de la
 * pantalla: antes no lo hacía y al cerrar el ciclo parecía que los logos desaparecían.
 * `min-w-screen` lo garantiza a cualquier ancho sin tener que adivinar cuántas copias
 * hacen falta, y `justify-around` reparte los logos cuando sobra espacio. Si el contenido
 * ya es más ancho que la pantalla, ambas reglas quedan inertes y manda el `gap`.
 */
const listClass =
  "marquee-list flex min-w-screen shrink-0 items-center justify-around gap-14 pr-14";

/**
 * En reposo van en gris y algo apagados para que no compitan con el contenido; al pasar
 * el cursor recuperan su color de marca. El hover se dispara desde el <li> (`group`) y no
 * desde la imagen, para que valga todo el área del logo y no solo los píxeles opacos.
 */
const logoClass =
  "h-12 w-auto max-w-[12rem] object-contain opacity-70 grayscale transition duration-300 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 sm:h-14";

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

  const renderItems = (keyPrefix: string) =>
    logos.map((logo) => {
      const img = (
        <Image
          src={logo.src}
          alt={logo.name}
          width={logo.width}
          height={logo.height}
          className={logoClass}
        />
      );
      return (
        <li key={`${keyPrefix}-${logo.name}`} className="group flex h-16 shrink-0 items-center sm:h-20">
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

  const renderHalf = (halfKey: string, hiddenHalf: boolean) => (
    <ul aria-hidden={hiddenHalf || undefined} className={listClass}>
      {renderItems(halfKey)}
    </ul>
  );

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
              {renderHalf("a", false)}
              {/* Segunda mitad idéntica: es la que hace que el -50% cierre el bucle sin salto */}
              <div aria-hidden className="marquee-dup contents">
                {renderHalf("b", true)}
              </div>
            </div>
          </div>
        ) : (
          <Container>
            <ul className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
              {renderItems("static")}
            </ul>
          </Container>
        )}
      </Reveal>
    </section>
  );
}
