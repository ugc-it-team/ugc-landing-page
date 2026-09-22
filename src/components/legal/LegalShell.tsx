import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { LegalDoc } from "@/content/legal/registry";

/**
 * Marco compartido de los documentos legales.
 *
 * Reemplaza el <style> que cada HTML legal repetía embebido: portada, índice lateral
 * y tarjeta de contenido viven aquí una sola vez.
 */
export function LegalShell({ doc, children }: { doc: LegalDoc; children: ReactNode }) {
  return (
    <div className="bg-brand-50">
      <Container className="py-16 sm:py-24">
        <header className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
            {doc.eyebrow}
          </span>
          <h1 className="mt-5 font-display text-3xl font-extrabold uppercase leading-tight text-ink sm:text-4xl">
            {doc.heading}
          </h1>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted">{doc.lead}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {doc.pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-muted"
              >
                {pill}
              </span>
            ))}
          </div>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:items-start">
          <nav
            aria-label="Índice"
            className="rounded-3xl border border-line bg-white p-6 lg:sticky lg:top-28"
          >
            <p className="font-display text-sm font-bold text-ink">Índice</p>
            <ul className="mt-4 space-y-2.5">
              {doc.toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block text-sm leading-snug text-muted transition-colors hover:text-brand-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <article className="space-y-10 rounded-3xl border border-line bg-white p-7 sm:p-10 [&_section]:space-y-4">
            {children}
          </article>
        </div>

        <p className="mt-10 text-center text-sm text-muted">
          <Link href="/" className="font-semibold text-brand-600 hover:text-brand-700">
            Volver al inicio
          </Link>
        </p>
      </Container>
    </div>
  );
}
