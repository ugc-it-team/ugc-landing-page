import type { MDXComponents } from "mdx/types";

/**
 * Estilos de los documentos MDX (hoy solo los legales).
 *
 * Sustituye al <style> que cada HTML legal llevaba embebido y duplicado. Los <h2>
 * conservan el id que traen escrito en el MDX: son anclas ya publicadas.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children, ...props }) => (
      <h2
        className="scroll-mt-28 font-display text-xl font-bold text-ink sm:text-2xl"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="scroll-mt-28 font-display text-lg font-bold text-ink" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className="text-[0.95rem] leading-relaxed text-muted" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-disc space-y-2 pl-5 text-[0.95rem] leading-relaxed text-muted" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="list-decimal space-y-2 pl-5 text-[0.95rem] leading-relaxed text-muted"
        {...props}
      >
        {children}
      </ol>
    ),
    strong: ({ children, ...props }) => (
      <strong className="font-semibold text-ink" {...props}>
        {children}
      </strong>
    ),
    a: ({ children, ...props }) => (
      <a
        className="font-semibold text-brand-600 underline underline-offset-2 hover:text-brand-700"
        {...props}
      >
        {children}
      </a>
    ),
    ...components,
  };
}
