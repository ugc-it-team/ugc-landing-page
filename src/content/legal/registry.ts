import type { ComponentType } from "react";

/**
 * Único origen de verdad de los documentos legales.
 *
 * De aquí salen las rutas estáticas, los metadatos, el índice lateral y las entradas
 * del sitemap. Generado desde los HTML del sitio anterior sin tocar el texto.
 *
 * `legacyPath` es la URL exacta que el sitio sirve hoy y que NO puede cambiar: son las
 * que se registran como URL properties en TikTok for Developers, y romperlas obliga a
 * volver a verificar la propiedad del dominio. nginx las traduce a la ruta interna.
 *
 * Los ids de `toc` llevan tildes porque así están en los documentos originales y ya
 * circulan como enlaces profundos. Se copian literalmente; no los "limpies".
 */
export type LegalDoc = {
  slug: string;
  legacyPath: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  lead: string;
  pills: string[];
  toc: { id: string; label: string }[];
  load: () => Promise<{ default: ComponentType }>;
};

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy-policy",
    legacyPath: "/legal/privacy-policy/",
    title: "Política de privacidad | UGConnect",
    description: "Política de privacidad de UGConnect para marcas, agencias y creadores que usan la plataforma.",
    eyebrow: "Privacidad UGConnect",
    heading: "POLÍTICA DE PRIVACIDAD",
    lead: "Esta política explica cómo UGConnect recopila, usa, conserva y protege los datos personales de marcas, agencias, creadores y visitantes.",
    pills: ["Versión 2026", "Lima, Perú", "Última actualización: 13 de julio de 2026"],
    toc: [
      { id: "section-1-responsable", label: "1. Responsable del tratamiento" },
      { id: "section-2-datos", label: "2. Datos que tratamos" },
      { id: "section-3-finalidades", label: "3. Finalidades" },
      { id: "section-4-base-legal", label: "4. Base legal y consentimiento" },
      { id: "section-5-comparticion", label: "5. Encargados y terceros" },
      { id: "section-6-conservacion", label: "6. Conservación y seguridad" },
      { id: "section-7-derechos", label: "7. Derechos ARCO" },
      { id: "section-8-cookies", label: "8. Cookies y analítica" },
      { id: "section-9-cambios", label: "9. Cambios y contacto" },
    ],
    load: () => import("./privacy-policy.mdx"),
  },
  {
    slug: "terminos-creadores-ugconnect",
    legacyPath: "/legal/terminos-creadores-ugconnect.html",
    title: "Creadores | Términos UGConnect",
    description: "Condiciones aplicables a creadores UGC que participan en campañas gestionadas a través de UGConnect.",
    eyebrow: "Términos UGConnect",
    heading: "TÉRMINOS Y CONDICIONES DE SERVICIO – UGCONNECT (2026)",
    lead: "Condiciones aplicables a creadores UGC que participan en campañas gestionadas a través de UGConnect.",
    pills: ["Audiencia: Creadores", "Versión 2026", "Lima, Perú"],
    toc: [
      { id: "section-1-naturaleza-de-la-relación", label: "1. Naturaleza de la Relación" },
      { id: "section-2-cumplimiento-de-entregables-y-penalidades", label: "2. Cumplimiento de Entregables y Penalidades" },
      { id: "section-3-proceso-de-edición-y-cambios", label: "3. Proceso de Edición y Cambios" },
      { id: "section-4-gestión-documental-y-liberación-de-pagos", label: "4. Gestión Documental y Liberación de Pagos" },
      { id: "section-5-derechos-sobre-el-contenido", label: "5. Derechos sobre el Contenido" },
      { id: "section-6-confidencialidad-y-conducta", label: "6. Confidencialidad y Conducta" },
      { id: "section-7-limitación-de-responsabilidad-y-fuerza-mayor", label: "7. Limitación de Responsabilidad y Fuerza Mayor" },
      { id: "section-8-protección-de-datos-y-uso-de-analytics", label: "8. Protección de Datos y Uso de Analytics" },
      { id: "section-9-resolución-de-conflictos", label: "9. Resolución de Conflictos" },
    ],
    load: () => import("./terminos-creadores-ugconnect.mdx"),
  },
  {
    slug: "terminos-marcas-agencias-ugconnect",
    legacyPath: "/legal/terminos-marcas-agencias-ugconnect.html",
    title: "Marcas y agencias | Términos UGConnect",
    description: "Condiciones aplicables a marcas, equipos de marketing y agencias que usan UGConnect para gestionar campañas UGC.",
    eyebrow: "Términos UGConnect",
    heading: "TÉRMINOS Y CONDICIONES DE SERVICIO – UGCONNECT (2026)",
    lead: "Condiciones aplicables a marcas, equipos de marketing y agencias que usan UGConnect para gestionar campañas UGC.",
    pills: ["Audiencia: Marcas y agencias", "Versión 2026", "Lima, Perú"],
    toc: [
      { id: "section-1-naturaleza-y-contrato-de-mandato", label: "1. Naturaleza y Contrato de Mandato" },
      { id: "section-2-gestión-financiera-y-fondos", label: "2. Gestión Financiera y Fondos" },
      { id: "section-3-cancelaciones-y-política-de-cierre-de-campaña", label: "3. Cancelaciones y Política de Cierre de Campaña" },
      { id: "section-4-propiedad-y-resultados", label: "4. Propiedad y Resultados" },
      { id: "section-5-limitación-de-responsabilidad-y-fuerza-mayor", label: "5. Limitación de Responsabilidad y Fuerza Mayor" },
      { id: "section-6-protección-de-datos-y-uso-de-analytics", label: "6. Protección de Datos y Uso de Analytics" },
      { id: "section-7-modificación-de-términos-y-resolución-de-conflictos", label: "7. Modificación de Términos y Resolución de Conflictos" },
    ],
    load: () => import("./terminos-marcas-agencias-ugconnect.mdx"),
  },
];

export const getLegalDoc = (slug: string) => legalDocs.find((d) => d.slug === slug);
