/**
 * Datos del sitio en UN solo archivo.
 * Todos los valores marcados como [POR CONFIRMAR] son de relleno (placeholder):
 * cámbialos aquí y se actualizan en toda la página.
 */
// WhatsApp de UGConnect (confirmado): +51 989 381 647. Formato internacional, sin "+".
const WHATSAPP_NUMBER = "51989381647";
// Mensajes que se abren escritos en WhatsApp al pulsar "Contáctanos".
// El de marcas es el general; el de agencias solo se usa en los botones que hablan a agencias.
const WHATSAPP_MESSAGE =
  "Hola, soy una marca y me gustaría activar mi primera campaña en UGConnect";
const WHATSAPP_MESSAGE_AGENCY =
  "Hola, soy una agencia y me gustaría activar mi primera campaña en UGConnect";
const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const siteConfig = {
  name: "UGConnect",
  // [POR CONFIRMAR] dominio definitivo (se usa para metadatos y la imagen de redes)
  url: "https://ugconnect.pe",
  locale: "es-PE",
  tagline: "Connect. Collaborate. Create.",

  contact: {
    // Correo de contacto (confirmado)
    email: "rodrigo.saldana@ugconnect.pe",
    whatsappNumber: WHATSAPP_NUMBER,
    // Chat de WhatsApp sin mensaje (footer, FAQ, sección de contacto)
    whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}`,
    // Chat de WhatsApp con el mensaje de marca ya escrito
    whatsappCampaignUrl: waLink(WHATSAPP_MESSAGE),
    // Chat de WhatsApp con el mensaje de agencia ya escrito
    whatsappAgencyUrl: waLink(WHATSAPP_MESSAGE_AGENCY),
    // [POR CONFIRMAR] ciudad / dirección si se quiere mostrar
    location: "Lima, Perú",
  },

  /**
   * Datos registrales de la empresa.
   *
   * TikTok for Developers pide que los datos de la validación de empresa coincidan con
   * los que muestra el sitio, así que el footer los publica. Mientras estén vacíos, el
   * bloque no se renderiza: es preferible no mostrarlos a mostrarlos inventados, que es
   * causa declarada de rechazo en la revisión.
   *
   * [POR CONFIRMAR] razón social exacta, RUC y domicilio fiscal.
   */
  company: {
    legalName: "",
    taxId: "",
    address: "",
  },

  // Destino de TODOS los botones "Contáctanos" (navbar, hero, planes, etc.): el WhatsApp de UGConnect.
  // contactUrl = mensaje de marca; contactAgencyUrl = mensaje de agencia (pestaña/planes de agencias).
  // El formulario de la página sigue existiendo al final (#contacto), pero ningún botón lo enlaza.
  contactUrl: waLink(WHATSAPP_MESSAGE),
  contactAgencyUrl: waLink(WHATSAPP_MESSAGE_AGENCY),

  // App de UGConnect (confirmado). Se abre en la misma pestaña.
  appUrl: "https://app.ugconnect.pe/",
  // Destino del botón "Crea tu campaña ya" del plan Marketplace.
  createCampaignUrl: "https://app.ugconnect.pe/",
  // Destino del botón "Iniciar sesión" (navbar y menú móvil).
  loginUrl: "https://app.ugconnect.pe/",

  // Perfiles reales, tomados de llms.txt del sitio anterior.
  // [POR CONFIRMAR] linkedin y youtube: no hay perfil publicado todavía.
  social: {
    linkedin: "",
    instagram: "https://www.instagram.com/ugconnect.pe/",
    tiktok: "https://www.tiktok.com/@ugconnect.pe",
    youtube: "",
  },

  // URLs legales publicadas. Son las que se registran como URL properties en
  // TikTok for Developers, así que no pueden cambiar sin volver a verificar el dominio.
  // La política de cookies vive dentro de la de privacidad (sección 8).
  legal: {
    privacy: "/legal/privacy-policy/",
    terms: "/legal/terminos-marcas-agencias-ugconnect.html",
    termsCreators: "/legal/terminos-creadores-ugconnect.html",
    cookies: "/legal/privacy-policy/#section-8-cookies",
  },

  features: {
    // Prueba social (métricas, logos, testimonios): apagada hasta tener datos reales.
    // Cámbiala a true SOLO cuando cargues datos verdaderos en src/content/es.ts
    socialProof: false,
    // Clientes (tira de logos): activa con las 10 marcas que ya estaban publicadas y
    // autorizadas en el sitio anterior (migradas desde assets/runtime-config.js).
    clients: true,
    // Formulario de contacto del final de la página: OCULTO por ahora (2026-09-18).
    // Con false, esa sección muestra solo el llamado a escribir por WhatsApp o correo.
    // Cámbialo a true para volver a mostrarlo (el código del formulario sigue intacto).
    contactForm: false,
  },

  form: {
    // [POR CONFIRMAR] destino del formulario (HubSpot, Formspree, etc.).
    // Ver src/lib/lead.ts, que es el único lugar donde se envían los datos.
    endpoint: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
