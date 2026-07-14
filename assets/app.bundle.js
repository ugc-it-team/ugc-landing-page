/* =====================================================================
   UGConnect — Landing data (editable)
   Reemplaza libremente: marcas, creadores, planes, testimonios, FAQ.
   ===================================================================== */
const UGCONFIG = window.UGCONFIG || {};

window.UGDATA = {
  /* ---- Configuración de integraciones ------------------------------ */
  calcomUrl: UGCONFIG.calcomUrl || "",
  platformUrl: UGCONFIG.platformUrl || "",

  /* ---- Marcas aliadas (logos reales subidos) ----------------------- */
  marcas: [
    { nombre: "Bungu Socks",        logo: "assets/logos/Bungu%20Socks.jpg" },
    { nombre: "Stanley Perú",       logo: "assets/logos/Stanley%20Peru.png" },
    { nombre: "Muamore",            logo: "assets/logos/Muamore.png" },
    { nombre: "La Fábrica",         logo: "assets/logos/La%20Fabrica.jpg" },
    { nombre: "Om Bites",           logo: "assets/logos/Om%20Bites.jpg" },
    { nombre: "Mi Dulce Jengibre",  logo: "assets/logos/Mi%20Dulce%20Jenjibre.jpg" },
    { nombre: "Neosva",             logo: "assets/logos/Neosva.jpg" },
    { nombre: "Pocket Bar",         logo: "assets/logos/Pocket%20Bar.jpg" },
    { nombre: "Sual",               logo: "assets/logos/Sual.jpg" },
    { nombre: "Calcetín",           logo: "assets/logos/Calcetin.jpg" },
  ],

  /* ---- Creadores (mock — reemplazables) ---------------------------- */
  nichos: ["Todos", "Beauty", "Fitness", "Food", "Lifestyle", "Tech", "Fashion"],
  creadores: [
    { nombre: "Lucía Marín",   handle: "@luciacreates",  nicho: "Beauty",    img: "assets/imagery/ugc-beauty-collagen.jpg",    ciudad: "Lima",     formato: "Reels · Unboxing", disponibilidad: "Disponible", rating: "4.9", verificado: true },
    { nombre: "Diego Salas",   handle: "@diegofit",      nicho: "Fitness",   img: "assets/imagery/ugc-fitness-protein.jpg",    ciudad: "Arequipa", formato: "TikTok · Reseña",  disponibilidad: "Disponible", rating: "4.8", verificado: true },
    { nombre: "Camila Ríos",   handle: "@camirios",      nicho: "Food",      img: "assets/imagery/ugc-collagen-kitchen.jpg",   ciudad: "Lima",     formato: "Recetas · Reels",  disponibilidad: "1 cupo",     rating: "5.0", verificado: false },
    { nombre: "Sofía Quispe",  handle: "@sofiaq",        nicho: "Lifestyle", img: "assets/imagery/ugc-lifestyle-coffee.jpg",   ciudad: "Trujillo", formato: "Vlog · Stories",   disponibilidad: "Disponible", rating: "4.7", verificado: true },
    { nombre: "Mateo Flores",  handle: "@mateoshoots",   nicho: "Tech",      img: "assets/imagery/ugc-bts-camera.jpg",         ciudad: "Lima",     formato: "Review · YouTube", disponibilidad: "Agenda llena", rating: "4.9", verificado: true },
    { nombre: "Valeria Cano",  handle: "@valeskin",      nicho: "Beauty",    img: "assets/imagery/ugc-skincare-set.jpg",       ciudad: "Cusco",    formato: "GRWM · Tutorial",  disponibilidad: "Disponible", rating: "4.8", verificado: false },
    { nombre: "Renzo Paredes", handle: "@renzomoves",    nicho: "Fashion",   img: "assets/imagery/ugc-supplement-portrait.jpg",ciudad: "Lima",     formato: "Lookbook · Reels", disponibilidad: "2 cupos",    rating: "4.6", verificado: true },
    { nombre: "Ariana Tello",  handle: "@arifilms",      nicho: "Lifestyle", img: "assets/imagery/ugc-bts-tripod.jpg",         ciudad: "Piura",    formato: "BTS · UGC Ads",    disponibilidad: "Disponible", rating: "4.9", verificado: true },
  ],

  /* ---- Planes — Marcas independientes ------------------------------ */
  planesMarcas: [
    {
      nombre: "Starter", precio: "S/ 179.99", periodo: "/ mes",
      desc: "Para marcas independientes que recién empiezan.",
      destacado: false, cta: "Empezar con Starter",
      features: [
        { t: "Hasta 4 creadores activos", on: true },
        { t: "Hasta 2 campañas en paralelo", on: true },
        { t: "Tablero de gestión básico", on: true },
        { t: "Soporte estándar", on: true },
      ],
    },
    {
      nombre: "Growth", precio: "S/ 349.99", periodo: "/ mes",
      desc: "Para marcas en pleno escalamiento de ventas.",
      destacado: true, cta: "Empezar con Growth",
      features: [
        { t: "Hasta 7 creadores activos", on: true },
        { t: "Hasta 4 campañas en paralelo", on: true },
        { t: "Acceso filtrado a creadores", on: true },
        { t: "Soporte premium prioritario", on: true },
      ],
    },
    {
      nombre: "UGC Pro", precio: "S/ 599.99", periodo: "/ mes",
      desc: "Para marcas consolidadas con alta demanda.",
      destacado: false, cta: "Empezar con UGC Pro",
      features: [
        { t: "Hasta 10 creadores activos", on: true },
        { t: "Hasta 5 campañas en paralelo", on: true },
        { t: "Automatización avanzada de RxH", on: true },
        { t: "Ejecutivo de cuenta asignado", on: true },
      ],
    },
  ],

  /* ---- Planes — Agencias de marketing ------------------------------ */
  planesAgencias: [
    {
      nombre: "Agencia Starter", precio: "S/ 479.99", periodo: "/ mes",
      desc: "Para agencias boutique que inician su oferta UGC.",
      destacado: false, cta: "Empezar Agencia Starter",
      features: [
        { t: "Hasta 3 marcas cliente", on: true },
        { t: "Hasta 1 ejecutivo adicional", on: true },
        { t: "Hasta 3 campañas por marca", on: true },
        { t: "S/ 125 por marca adicional", on: true, muted: true },
      ],
    },
    {
      nombre: "Agencia Growth", precio: "S/ 899.99", periodo: "/ mes",
      desc: "Para agencias en pleno crecimiento de cartera.",
      destacado: true, cta: "Empezar Agencia Growth",
      features: [
        { t: "Hasta 6 marcas cliente", on: true },
        { t: "Hasta 3 ejecutivos adicionales", on: true },
        { t: "Hasta 6 campañas por marca", on: true },
        { t: "S/ 125 por marca adicional", on: true, muted: true },
      ],
    },
    {
      nombre: "Agencia Enterprise", precio: "S/ 1,199.99", periodo: "/ mes",
      desc: "Para grandes corporaciones y agencias consolidadas.",
      destacado: false, cta: "Hablar con ventas",
      features: [
        { t: "Marcas cliente ilimitadas", on: true },
        { t: "Hasta 6 ejecutivos adicionales", on: true },
        { t: "Campañas ilimitadas por marca", on: true },
      ],
    },
  ],

  /* Beneficios incluidos en todos los planes */
  beneficios: [
    { icon: "database",       t: "Acceso a todo el banco de creadores de contenido", d: "Perfiles filtrables por nicho, ciudad, formato y disponibilidad." },
    { icon: "video",          t: "S/ 45 por campaña adicional", d: "Escala campañas cuando tu operación lo necesite." },
    { icon: "user-plus",      t: "S/ 50 por ejecutivo adicional", d: "Suma usuarios para equipos de marketing o cuentas de agencia." },
    { icon: "lock",           t: "Full acceso a la plataforma", d: "Gestión de briefs, avances, pagos y entregables en un solo lugar." },
  ],

  /* ---- Testimonios (PLACEHOLDERS editables) ------------------------ */
  testimonios: [
    { quote: "Lanzamos con 3 creadores y tuvimos los videos en redes en menos de una semana. Nos quitamos el dolor de cabeza de los recibos por honorarios.", nombre: "[ Nombre del cliente ]", cargo: "Gerente de Marketing", empresa: "[ Empresa ]", resultado: "3 videos en 6 días", nicho: "E-commerce", img: "assets/imagery/ugc-creator-ringlight.jpg" },
    { quote: "Dejamos de coordinar por WhatsApp y Excel. Ahora todo el avance de cada creador está en un solo tablero y los pagos salen solos.", nombre: "[ Nombre del cliente ]", cargo: "Fundador", empresa: "[ Empresa ]", resultado: "0% comisión de agencia", nicho: "Startup", img: "assets/imagery/ugc-supplement-portrait.jpg" },
    { quote: "Como agencia gestionamos varias marcas a la vez. El control por campaña y por cliente nos hizo más rápidos y ordenados.", nombre: "[ Nombre del cliente ]", cargo: "Directora de Cuentas", empresa: "[ Agencia ]", resultado: "5 marcas gestionadas", nicho: "Agencia", img: "assets/imagery/ugc-lifestyle-coffee.jpg" },
  ],

  /* ---- FAQ --------------------------------------------------------- */
  faqs: [
    { q: "¿Qué es un creador UGC?", a: "Es una persona real que crea contenido auténtico —videos, reseñas, unboxings— grabado como lo haría un cliente, no como un comercial de estudio. Ese contenido se siente honesto y rinde mejor en redes y en ads." },
    { q: "¿UGConnect es una agencia?", a: "No. Somos una plataforma de software (SaaS) que conecta a tu marca directamente con creadores. Tú mantienes el control total y no pagas comisiones de intermediario sobre el presupuesto de tus creadores." },
    { q: "¿Cuánto cuesta?", a: "Pagas solo un acceso mensual al software, desde S/ 179.99 para marcas independientes. El presupuesto que asignas a tus creadores va completo a ellos: la comisión de plataforma sobre ese monto es 0%." },
    { q: "¿Puedo elegir al creador?", a: "Sí. Filtras por nicho, ciudad, formato y disponibilidad, revisas su trabajo previo y decides con quién trabajar. También puedes recibir un match inteligente según tu brief." },
    { q: "¿Cuánto tarda una campaña?", a: "Publicar un brief toma unos minutos. Según el formato, los primeros entregables suelen llegar en pocos días. Todo el avance lo sigues en tiempo real desde tu tablero." },
    { q: "¿Cómo funcionan los pagos?", a: "Cargas tu presupuesto en la plataforma y nosotros liberamos el pago al creador cuando se aprueba el entregable. Centralizamos validaciones y el manejo de recibos por honorarios (RxH)." },
    { q: "¿Qué incluye la primera campaña gratis?", a: "Tu primera campaña es 100% gratis, e incluye todo el acceso a la plataforma, para que puedas ver cómo UGConnect te ayuda a ahorrar horas de gestión manual, para que puedas enfocarte en los resultados." },
    { q: "¿Puedo usarlo si soy agencia?", a: "Sí. Tenemos planes para agencias que gestionan varias marcas: cuentas por cliente, usuarios ejecutivos y reporting consolidado en un solo lugar." },
  ],
};


/* app/helpers.jsx */
(() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect,
  useRef
} = React;
const UG_ICONS = {
  'arrow-right': '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  'arrow-up-right': '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>',
  'chevron-down': '<polyline points="6 9 12 15 18 9"/>',
  'chevron-right': '<polyline points="9 18 15 12 9 6"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  minus: '<line x1="5" y1="12" x2="19" y2="12"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
  sparkles: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  search: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  'user-plus': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>',
  clock: '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  wallet: '<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>',
  'piggy-bank': '<path d="M19 5c-1.5 0-2.8 1.4-3 2-2.4-1-7.4-1-9 1.5C5.3 9.3 4 11 4 13c0 1.8.8 3 2 4v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h4v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2c.7-.6 1.3-1.3 1.6-2H22v-4h-1.6c-.3-.8-.8-1.5-1.4-2V5z"/><path d="M2 9v1c0 1.1.9 2 2 2h1"/><path d="M16 11h.01"/>',
  'trending-up': '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
  'trending-down': '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>',
  'dollar-sign': '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  'shield-check': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>',
  'badge-check': '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z"/><polyline points="9 12 11 14 15 10"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  'message-square': '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  'message-circle': '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/>',
  'folder-kanban': '<path d="M4 20a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
  'layout-dashboard': '<rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/>',
  'list-checks': '<path d="M3 17l2 2 4-4"/><path d="M3 7l2 2 4-4"/><line x1="13" y1="6" x2="21" y2="6"/><line x1="13" y1="12" x2="21" y2="12"/><line x1="13" y1="18" x2="21" y2="18"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  video: '<path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
  'map-pin': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
  banknote: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01"/><path d="M18 12h.01"/>',
  'credit-card': '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>',
  'file-text': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  'file-pen-line': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="13" y2="13"/><line x1="8" y1="17" x2="11" y2="17"/>',
  smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>',
  coins: '<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/>',
  'refresh-cw': '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"/><path d="M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
  'help-circle': '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  'play-circle': '<circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>',
  building: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>'
};
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  style = {}
}) {
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flex: '0 0 auto',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: UG_ICONS[name] || ''
    }
  });
}
function Reveal({
  children,
  delay = 0,
  as = 'div',
  style = {},
  className = '',
  ...rest
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          el.classList.add('in');
          io.unobserve(el);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return React.createElement(Tag, _extends({
    ref: ref,
    className: `reveal ${className}`,
    style: {
      transitionDelay: `${delay}ms`,
      ...style
    }
  }, rest), children);
}
function Container({
  children,
  style = {},
  ...rest
}) {
  return React.createElement("div", _extends({
    className: "ug-container",
    style: style
  }, rest), children);
}
function Eyebrow({
  children,
  center = false,
  color = 'var(--brand-secondary)',
  style = {}
}) {
  return React.createElement("span", {
    className: `ug-eyebrow${center ? ' center' : ''}`,
    style: {
      color,
      ...style
    }
  }, children);
}
function SectionTitle({
  children,
  style = {}
}) {
  return React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(30px, 4.4vw, 46px)',
      lineHeight: 1.08,
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)',
      ...style
    }
  }, children);
}
function Lead({
  children,
  style = {}
}) {
  return React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'clamp(15px,1.6vw,18px)',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      maxWidth: '60ch',
      ...style
    }
  }, children);
}
function SectionHead({
  eyebrow,
  title,
  lead,
  center = false,
  maxWidth = 640,
  style = {}
}) {
  return React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: center ? 'center' : 'flex-start',
      textAlign: center ? 'center' : 'left',
      maxWidth: center ? maxWidth : undefined,
      margin: center ? '0 auto' : undefined,
      ...style
    }
  }, eyebrow && React.createElement(Eyebrow, {
    center: center
  }, eyebrow), React.createElement(SectionTitle, null, title), lead && React.createElement(Lead, {
    style: {
      margin: center ? '0 auto' : undefined
    }
  }, lead));
}
function Wordmark({
  size = 22,
  color = 'var(--text-strong)',
  tagline = false
}) {
  return React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      lineHeight: 1
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: size,
      letterSpacing: '-0.02em'
    }
  }, React.createElement("span", {
    style: {
      color: 'var(--brand-primary)'
    }
  }, "UGC"), React.createElement("span", {
    style: {
      color
    }
  }, "onnect")), tagline && React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: size * 0.34,
      letterSpacing: '0.02em',
      color: 'var(--text-muted)',
      marginTop: 5
    }
  }, "Connect. Collaborate. Create."));
}
function useCountUp(target, {
  duration = 1400,
  start = 0
} = {}) {
  const [val, setVal] = useState(start);
  const ref = useRef(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !done.current) {
        done.current = true;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) {
          setVal(target);
          return;
        }
        const t0 = performance.now();
        const tick = now => {
          const p = Math.min(1, (now - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(start + (target - start) * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, {
      threshold: 0.4
    });
    io.observe(el);
    return () => io.disconnect();
  }, [target]);
  return [val, ref];
}
window.UGX = {
  Icon,
  Reveal,
  Container,
  Eyebrow,
  SectionTitle,
  Lead,
  SectionHead,
  Wordmark,
  useCountUp
};
})();


/* app/sections1.jsx */
(() => {
const {
  useState,
  useEffect,
  useRef
} = React;
const {
  Button,
  Badge,
  Card
} = window.UGConnectDesignSystem_1dd337;
const {
  Icon,
  Reveal,
  Container,
  Eyebrow,
  SectionHead,
  SectionTitle,
  Lead,
  Wordmark
} = window.UGX;
const NAV = [{
  label: "Cómo funciona",
  href: "#como-funciona"
}, {
  label: "Planes",
  href: "#planes"
}, {
  label: "Demo",
  href: "#demo"
}];
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const platformUrl = (window.UGDATA.platformUrl || "#demo").trim() || "#demo";
  const platformTarget = platformUrl.startsWith("#") ? undefined : "_blank";
  const platformRel = platformTarget ? "noopener noreferrer" : undefined;
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0.6)',
      backdropFilter: 'saturate(180%) blur(14px)',
      WebkitBackdropFilter: 'saturate(180%) blur(14px)',
      borderBottom: `1px solid ${scrolled ? 'var(--border-subtle)' : 'transparent'}`,
      boxShadow: scrolled ? 'var(--shadow-xs)' : 'none',
      transition: 'background .25s var(--ease-out), border-color .25s var(--ease-out), box-shadow .25s var(--ease-out)'
    }
  }, React.createElement(Container, {
    style: {
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none'
    },
    "aria-label": "UGConnect"
  }, React.createElement(Wordmark, {
    size: 23
  })), React.createElement("nav", {
    className: "ug-desk-nav",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, NAV.map(n => React.createElement("a", {
    key: n.href,
    href: n.href,
    className: "ug-link"
  }, n.label))), React.createElement("div", {
    className: "ug-desk-cta",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement("a", {
    href: platformUrl,
    target: platformTarget,
    rel: platformRel,
    style: {
      textDecoration: 'none'
    }
  }, React.createElement(Button, {
    variant: "outline",
    size: "md"
  }, "Plataforma")), React.createElement("a", {
    href: "#demo",
    style: {
      textDecoration: 'none'
    }
  }, React.createElement(Button, {
    variant: "primary",
    size: "md",
    iconRight: React.createElement(Icon, {
      name: "arrow-right",
      size: 17
    })
  }, "Agendar demo"))), React.createElement("button", {
    className: "ug-burger",
    onClick: () => setOpen(o => !o),
    "aria-label": "Men\xFA",
    style: {
      display: 'none',
      border: 'none',
      background: 'var(--purple-50)',
      color: 'var(--brand-primary)',
      width: 44,
      height: 44,
      borderRadius: 12,
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Icon, {
    name: open ? 'x' : 'menu',
    size: 22
  }))), open && React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--white)',
      padding: '16px 0'
    }
  }, React.createElement(Container, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, NAV.map(n => React.createElement("a", {
    key: n.href,
    href: n.href,
    onClick: () => setOpen(false),
    style: {
      padding: '12px 8px',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--text-strong)',
      textDecoration: 'none',
      borderRadius: 10
    }
  }, n.label)), React.createElement("a", {
    href: "#demo",
    onClick: () => setOpen(false),
    style: {
      textDecoration: 'none',
      marginTop: 8
    }
  }, React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconRight: React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Agendar demo")))), React.createElement("style", null, `
        @media (max-width: 1024px){ .ug-desk-nav{ display:none !important; } .ug-desk-cta{ display:none !important; } .ug-burger{ display:inline-flex !important; } }
      `));
}
function HeroBullet({
  icon,
  children
}) {
  return React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 9,
      background: 'var(--purple-50)',
      color: 'var(--brand-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, React.createElement(Icon, {
    name: icon,
    size: 16,
    strokeWidth: 2.4
  })), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 14.5,
      color: 'var(--text-body)'
    }
  }, children));
}
function HeroMockup() {
  const steps = [{
    n: 1,
    t: "Brief enviado",
    s: "Lanzamiento Invierno UGC",
    tone: 'done',
    meta: "Hace 2 días"
  }, {
    n: 2,
    t: "Creador aceptado",
    s: "Lucía M. · Camila R. · Diego S.",
    tone: 'done',
    meta: "3 de 4"
  }, {
    n: 3,
    t: "En producción",
    s: "2 videos grabándose",
    tone: 'active',
    meta: "En curso"
  }, {
    n: 4,
    t: "En revisión",
    s: "1 entregable por aprobar",
    tone: 'pending',
    meta: "Tú decides"
  }];
  const toneStyle = {
    done: {
      bg: 'var(--success-100)',
      fg: 'var(--success-600)',
      icon: 'check'
    },
    active: {
      bg: 'var(--purple-100)',
      fg: 'var(--brand-primary)',
      icon: 'video'
    },
    pending: {
      bg: 'var(--line-100)',
      fg: 'var(--text-muted)',
      icon: 'clock'
    }
  };
  return React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '-12% -8% -8% -8%',
      background: 'radial-gradient(60% 60% at 70% 30%, rgba(136,82,162,.26), transparent 70%)',
      filter: 'blur(8px)',
      zIndex: 0
    }
  }), React.createElement(Card, {
    elevation: "lg",
    padding: "0",
    style: {
      position: 'relative',
      zIndex: 1,
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 18px',
      borderBottom: '1px solid var(--border-faint)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 8,
      background: 'var(--brand-primary)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Icon, {
    name: "layout-dashboard",
    size: 14
  })), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 13.5,
      color: 'var(--text-strong)'
    }
  }, "Tablero de campa\xF1a")), React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Activa")), React.createElement("div", {
    style: {
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, React.createElement("div", {
    style: {
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-md)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 11.5,
      fontWeight: 600,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--brand-secondary)'
    }
  }, "Campa\xF1a activa"), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--text-strong)',
      marginTop: 3
    }
  }, "Lanzamiento Invierno UGC")), React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      color: 'var(--brand-primary)',
      lineHeight: 1
    }
  }, "3", React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "/4")), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, "creadores"))), React.createElement("div", {
    style: {
      height: 7,
      borderRadius: 999,
      background: 'var(--purple-100)',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      width: '75%',
      height: '100%',
      borderRadius: 999,
      background: 'var(--brand-primary)',
      animation: 'ug-grow 1.2s var(--ease-out) both'
    }
  }))), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, steps.map(st => {
    const ts = toneStyle[st.tone];
    return React.createElement("div", {
      key: st.n,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        border: '1px solid var(--border-faint)',
        borderRadius: 12
      }
    }, React.createElement("span", {
      className: st.tone === 'active' ? 'ug-live-dot' : '',
      style: {
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: ts.bg,
        color: ts.fg,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 auto'
      }
    }, React.createElement(Icon, {
      name: ts.icon,
      size: 14,
      strokeWidth: 2.4
    })), React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, React.createElement("div", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontWeight: 600,
        fontSize: 13,
        color: 'var(--text-strong)'
      }
    }, st.t), React.createElement("div", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 11.5,
        color: 'var(--text-muted)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, st.s)), React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 11,
        fontWeight: 600,
        color: ts.fg,
        whiteSpace: 'nowrap'
      }
    }, st.meta));
  })))), React.createElement("div", {
    className: "ug-hero-thumb",
    style: {
      position: 'absolute',
      top: -26,
      right: -18,
      zIndex: 3,
      width: 118,
      height: 150,
      borderRadius: 18,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-xl)',
      border: '3px solid var(--white)'
    }
  }, React.createElement("img", {
    src: "assets/imagery/ugc-creator-ringlight.jpg",
    alt: "Creadora grabando contenido UGC",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, transparent 45%, rgba(42,15,56,.55))'
    }
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.92)',
      color: 'var(--brand-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-md)'
    }
  }, React.createElement(Icon, {
    name: "play-circle",
    size: 22
  })), React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 8,
      left: 8,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 10,
      color: '#fff'
    }
  }, React.createElement("span", {
    className: "ug-live-dot",
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--gold-500)'
    }
  }), " UGC en vivo")), React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -22,
      left: -18,
      zIndex: 2,
      background: 'var(--brand-dark)',
      color: '#fff',
      padding: '12px 16px',
      borderRadius: 16,
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: 'rgba(255,255,255,.12)',
      color: 'var(--gold-500)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Icon, {
    name: "sparkles",
    size: 20
  })), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 10.5,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.6)',
      fontWeight: 600
    }
  }, "Piloto gratis"), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 16
    }
  }, "1 campa\xF1a gratis"))));
}
function Hero() {
  return React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: -160,
      right: -120,
      width: 520,
      height: 520,
      borderRadius: '50%',
      background: 'radial-gradient(circle, var(--purple-50), transparent 65%)',
      zIndex: 0
    }
  }), React.createElement(Container, {
    style: {
      position: 'relative',
      zIndex: 1,
      paddingTop: 'clamp(48px, 7vw, 90px)',
      paddingBottom: 'clamp(72px, 9vw, 120px)'
    }
  }, React.createElement("div", {
    className: "ug-hero-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 'clamp(40px, 5vw, 72px)',
      alignItems: 'center'
    }
  }, React.createElement("div", {
    className: "reveal in",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, React.createElement("span", {
    style: {
      alignSelf: 'flex-start'
    }
  }, React.createElement(Badge, {
    tone: "reward",
    style: {
      padding: '7px 14px',
      fontSize: 13
    }
  }, React.createElement(Icon, {
    name: "sparkles",
    size: 15
  }), " Primera campa\xF1a 100% gratis")), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(36px, 5.4vw, 64px)',
      lineHeight: 1.04,
      letterSpacing: 'var(--tracking-tighter)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Coordinar creadores por WhatsApp y Excel te cuesta +40 horas al mes.", ' ', React.createElement("span", {
    style: {
      color: 'var(--brand-primary)'
    }
  }, "Nosotros lo resolvemos en una sola plataforma.")), React.createElement(Lead, {
    style: {
      fontSize: 'clamp(16px,1.7vw,19px)'
    }
  }, "UGConnect es la plataforma pionera en el Per\xFA que automatiza y centraliza la b\xFAsqueda, gesti\xF3n y pagos de creadores de contenido UGC \u2014 pensada para marcas y agencias digitales. Escala tus campa\xF1as, elimina el caos operativo y mant\xE9n control absoluto, sin comisiones ocultas."), React.createElement("div", {
    className: "ug-cta-row",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14
    }
  }, React.createElement("a", {
    href: "#demo",
    style: {
      textDecoration: 'none'
    }
  }, React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: React.createElement(Icon, {
      name: "arrow-right",
      size: 19
    })
  }, "Agendar demo 1-on-1")), React.createElement("a", {
    href: "#como-funciona",
    style: {
      textDecoration: 'none'
    }
  }, React.createElement(Button, {
    variant: "outline",
    size: "lg",
    iconLeft: React.createElement(Icon, {
      name: "play-circle",
      size: 19
    })
  }, "Ver c\xF3mo funciona"))), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px 24px',
      maxWidth: 460,
      marginTop: 4
    }
  }, React.createElement(HeroBullet, {
    icon: "target"
  }, "Match inteligente"), React.createElement(HeroBullet, {
    icon: "zap"
  }, "Campa\xF1as en minutos"), React.createElement(HeroBullet, {
    icon: "list-checks"
  }, "Gesti\xF3n de avances"), React.createElement(HeroBullet, {
    icon: "wallet"
  }, "Pagos centralizados"))), React.createElement("div", {
    className: "reveal in ug-hero-mockup",
    style: {
      transitionDelay: '120ms'
    }
  }, React.createElement(HeroMockup, null)))), React.createElement("style", null, `
        @media (max-width: 860px){
          .ug-hero-grid{ grid-template-columns: 1fr !important; }
          .ug-hero-mockup{ margin-top: 12px; max-width: 460px; }
        }
        @media (max-width: 420px){ .ug-hero-thumb{ display: none; } }
      `));
}
function LogoChip({
  m
}) {
  const [hover, setHover] = useState(false);
  return React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    title: m.nombre,
    style: {
      flex: '0 0 auto',
      width: 168,
      height: 92,
      margin: '0 12px',
      background: 'var(--white)',
      borderRadius: 'var(--radius-md)',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--ring-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 18,
      transition: 'box-shadow .25s var(--ease-out), transform .25s var(--ease-out)',
      transform: hover ? 'translateY(-2px)' : 'none'
    }
  }, React.createElement("img", {
    src: m.logo,
    alt: m.nombre,
    style: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
      filter: hover ? 'none' : 'grayscale(1)',
      opacity: hover ? 1 : 0.62,
      transition: 'filter .3s var(--ease-out), opacity .3s var(--ease-out)'
    }
  }));
}
function Logos() {
  const marcas = window.UGDATA.marcas;
  const loop = [...marcas, ...marcas];
  return React.createElement("section", {
    style: {
      padding: '40px 0 56px',
      borderTop: '1px solid var(--border-faint)',
      borderBottom: '1px solid var(--border-faint)',
      background: 'var(--white)'
    }
  }, React.createElement(Container, null, React.createElement(Reveal, {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginBottom: 28
    }
  }, React.createElement(Eyebrow, {
    center: true,
    style: {
      alignSelf: 'center'
    }
  }, "Marcas que trabajan con nosotros"), React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14.5,
      color: 'var(--text-muted)',
      maxWidth: '60ch',
      margin: '0 auto'
    }
  }, "Equipos de marketing, e-commerce y marcas emergentes ya usan UGConnect para crear contenido aut\xE9ntico."))), React.createElement("div", {
    className: "ug-marquee",
    style: {
      position: 'relative',
      maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)'
    }
  }, React.createElement("div", {
    className: "ug-marquee-track"
  }, loop.map((m, i) => React.createElement(LogoChip, {
    key: i,
    m: m
  })))));
}
function CompareRow({
  icon,
  children,
  kind
}) {
  const ok = kind === 'ok';
  return React.createElement("li", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '12px 0',
      borderTop: ok ? '1px solid rgba(255,255,255,.12)' : '1px solid var(--border-faint)'
    }
  }, React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      flex: '0 0 auto',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: ok ? 'rgba(255,255,255,.16)' : 'var(--danger-100)',
      color: ok ? '#fff' : 'var(--danger-600)'
    }
  }, React.createElement(Icon, {
    name: icon,
    size: 15,
    strokeWidth: 2.6
  })), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14.5,
      lineHeight: 1.45,
      color: ok ? 'rgba(255,255,255,.92)' : 'var(--text-body)'
    }
  }, children));
}
function Problema() {
  return React.createElement("section", {
    style: {
      padding: 'clamp(72px, 9vw, 110px) 0',
      background: 'var(--surface-sunken)'
    }
  }, React.createElement(Container, null, React.createElement(Reveal, null, React.createElement(SectionHead, {
    center: true,
    eyebrow: "El problema",
    title: "Gestionar campa\xF1as a mano es caro, lento y desordenado",
    lead: "Pierdes horas y recursos en trabajos manuales, perdiendo enfoque en brindarle resultados y valor a tus clientes."
  })), React.createElement("div", {
    className: "ug-compare",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      marginTop: 48,
      alignItems: 'stretch'
    }
  }, React.createElement(Reveal, null, React.createElement(Card, {
    elevation: "sm",
    padding: "clamp(24px,3vw,34px)",
    style: {
      height: '100%'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 6
    }
  }, React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 11,
      background: 'var(--danger-100)',
      color: 'var(--danger-600)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Icon, {
    name: "trending-down",
    size: 20
  })), React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 21,
      color: 'var(--text-strong)'
    }
  }, "Proceso tradicional")), React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '10px 0 0'
    }
  }, React.createElement(CompareRow, {
    icon: "x",
    kind: "bad"
  }, "Producci\xF3n de estudio costosa y lenta de agendar."), React.createElement(CompareRow, {
    icon: "x",
    kind: "bad"
  }, "M\xE9tricas y resultados imposibles de consolidar por campa\xF1a."), React.createElement(CompareRow, {
    icon: "x",
    kind: "bad"
  }, "Creadores coordinados por WhatsApp, Excel y correos sueltos."), React.createElement(CompareRow, {
    icon: "x",
    kind: "bad"
  }, "Pagos manuales y recibos por honorarios que persigues uno a uno."), React.createElement(CompareRow, {
    icon: "x",
    kind: "bad"
  }, "Contenido que guardas en un Drive compartido con posibilidad a perderse.")))), React.createElement(Reveal, {
    delay: 100
  }, React.createElement("div", {
    style: {
      height: '100%',
      background: 'var(--brand-dark)',
      borderRadius: 'var(--radius-xl)',
      padding: 'clamp(24px,3vw,34px)',
      color: '#fff',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: -60,
      right: -60,
      width: 220,
      height: 220,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(136,82,162,.45), transparent 70%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 6
    }
  }, React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 11,
      background: 'rgba(255,255,255,.14)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Icon, {
    name: "trending-up",
    size: 20
  })), React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 21,
      color: '#fff'
    }
  }, "Con UGConnect")), React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '10px 0 0',
      position: 'relative'
    }
  }, React.createElement(CompareRow, {
    icon: "check",
    kind: "ok"
  }, "Lanzas un brief en minutos y conectas con creadores reales."), React.createElement(CompareRow, {
    icon: "check",
    kind: "ok"
  }, "Todo el avance por campa\xF1a y por creador en un solo tablero."), React.createElement(CompareRow, {
    icon: "check",
    kind: "ok"
  }, "Revisi\xF3n de observaciones, chats integrados y descarga de documentos a un solo click."), React.createElement(CompareRow, {
    icon: "check",
    kind: "ok"
  }, "Pagos y recibos (RxH) centralizados y validados por nosotros."), React.createElement(CompareRow, {
    icon: "check",
    kind: "ok"
  }, "Contenido aut\xE9ntico, listo para TikTok, Reels y Ads.")))))), React.createElement("style", null, `@media (max-width: 760px){ .ug-compare{ grid-template-columns: 1fr !important; } }`));
}
Object.assign(window, {
  Header,
  Hero,
  Logos,
  Problema
});
})();


/* app/sections2.jsx */
(() => {
const {
  useState,
  useEffect,
  useRef
} = React;
const {
  Button: Btn2,
  Badge: Badge2,
  Card: Card2,
  Avatar: Avatar2,
  Tag: Tag2
} = window.UGConnectDesignSystem_1dd337;
const UGX2 = window.UGX;
function SolutionCard({
  icon,
  title,
  children,
  delay
}) {
  const [hover, setHover] = useState(false);
  return React.createElement(UGX2.Reveal, {
    delay: delay
  }, React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      height: '100%',
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      padding: 'clamp(26px,3vw,34px)',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'all .28s var(--ease-out)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 16,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hover ? 'var(--brand-primary)' : 'var(--purple-50)',
      color: hover ? '#fff' : 'var(--brand-primary)',
      transition: 'all .28s var(--ease-out)'
    }
  }, React.createElement(UGX2.Icon, {
    name: icon,
    size: 26
  })), React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--text-strong)'
    }
  }, title), React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, children)));
}
function Solution() {
  return React.createElement("section", {
    style: {
      padding: 'clamp(72px,9vw,110px) 0',
      background: 'var(--white)'
    }
  }, React.createElement(UGX2.Container, null, React.createElement(UGX2.Reveal, null, React.createElement(UGX2.SectionHead, {
    center: true,
    eyebrow: "La soluci\xF3n",
    title: "Todo lo que necesitas para crear UGC",
    lead: "Una sola plataforma para gestionar todas tus campa\xF1as UGC. Sin chats dispersos, sin hojas de c\xE1lculo, sin perseguir mensajes, sin ser propensos a cometer errores."
  })), React.createElement("div", {
    className: "ug-sol-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 48
    }
  }, React.createElement(SolutionCard, {
    icon: "rocket",
    title: "Lanza tu campa\xF1a en minutos",
    delay: 0
  }, "Publica un brief con objetivos, formato, presupuesto y fechas. Tus creadores ideales lo ven al instante."), React.createElement(SolutionCard, {
    icon: "search",
    title: "Encuentra creadores UGC ideales",
    delay: 90
  }, "Filtra por nicho, ciudad, formato y disponibilidad. Revisa su trabajo y elige con un match inteligente."), React.createElement(SolutionCard, {
    icon: "wallet",
    title: "Gestiona avances y pagos",
    delay: 180
  }, "Sigue cada entregable en tiempo real y libera los pagos al aprobar. Recibos por honorarios incluidos."))), React.createElement("style", null, `@media (max-width: 820px){ .ug-sol-grid{ grid-template-columns: 1fr !important; } }`));
}
function CreatorCardPro({
  c
}) {
  const [hover, setHover] = useState(false);
  const dispTone = c.disponibilidad === 'Agenda llena' ? 'neutral' : c.disponibilidad === 'Disponible' ? 'success' : 'soft';
  return React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'all .28s var(--ease-out)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      height: 150,
      background: 'var(--purple-100)'
    }
  }, React.createElement("img", {
    src: c.img,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.05)' : 'none',
      transition: 'transform .5s var(--ease-out)'
    }
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, React.createElement(Badge2, {
    tone: "solid",
    size: "sm"
  }, React.createElement(UGX2.Icon, {
    name: "instagram",
    size: 12
  }), " ", c.nicho)), React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12
    }
  }, React.createElement(Badge2, {
    tone: dispTone,
    size: "sm",
    dot: true
  }, c.disponibilidad))), React.createElement("div", {
    style: {
      padding: '0 18px 18px',
      marginTop: -28
    }
  }, React.createElement(Avatar2, {
    src: c.img,
    name: c.nombre,
    size: 56,
    ring: c.verificado,
    style: {
      boxShadow: '0 0 0 4px var(--white)',
      borderRadius: '50%'
    }
  }), React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--text-strong)'
    }
  }, c.nombre), c.verificado && React.createElement(UGX2.Icon, {
    name: "badge-check",
    size: 16,
    color: "var(--brand-primary)"
  }), React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, React.createElement(UGX2.Icon, {
    name: "star",
    size: 13,
    color: "var(--gold-500)",
    style: {
      fill: 'var(--gold-500)'
    }
  }), c.rating)), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, c.handle), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      marginTop: 14
    }
  }, React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--text-body)'
    }
  }, React.createElement(UGX2.Icon, {
    name: "map-pin",
    size: 14,
    color: "var(--brand-secondary)"
  }), c.ciudad, ", Per\xFA"), React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--text-body)'
    }
  }, React.createElement(UGX2.Icon, {
    name: "video",
    size: 14,
    color: "var(--brand-secondary)"
  }), c.formato))));
}
function Creators() {
  const {
    creadores,
    nichos
  } = window.UGDATA;
  const [filter, setFilter] = useState('Todos');
  const list = filter === 'Todos' ? creadores : creadores.filter(c => c.nicho === filter);
  const [count, countRef] = UGX2.useCountUp(200, {
    duration: 1600
  });
  return React.createElement("section", {
    id: "creadores",
    style: {
      padding: 'clamp(72px,9vw,110px) 0',
      background: 'var(--surface-sunken)'
    }
  }, React.createElement(UGX2.Container, null, React.createElement("div", {
    className: "ug-creators-head",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, React.createElement(UGX2.Reveal, {
    style: {
      maxWidth: 620
    }
  }, React.createElement(UGX2.Eyebrow, null, "Creadores"), React.createElement("h2", {
    ref: countRef,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(30px,4.4vw,46px)',
      lineHeight: 1.08,
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)',
      marginTop: 14
    }
  }, React.createElement("span", {
    style: {
      color: 'var(--brand-primary)'
    }
  }, "+", Math.round(count)), " creadores activos listos para trabajar con tu marca"), React.createElement(UGX2.Lead, {
    style: {
      marginTop: 14
    }
  }, "Beauty, fitness, food, lifestyle, tech y fashion. Perfiles reales con trabajo verificable y disponibilidad clara.")), React.createElement(UGX2.Reveal, {
    delay: 120,
    style: {
      flex: '0 0 auto'
    }
  }, React.createElement("a", {
    href: "#demo",
    style: {
      textDecoration: 'none'
    }
  }, React.createElement(Btn2, {
    variant: "primary",
    size: "lg",
    iconRight: React.createElement(UGX2.Icon, {
      name: "arrow-right",
      size: 19
    })
  }, "Ver creadores disponibles")))), React.createElement(UGX2.Reveal, {
    delay: 60
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      margin: '34px 0 30px'
    }
  }, nichos.map(n => React.createElement(Tag2, {
    key: n,
    selected: filter === n,
    onClick: () => setFilter(n)
  }, n)))), React.createElement("div", {
    className: "ug-creator-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 22
    }
  }, list.map(c => React.createElement(CreatorCardPro, {
    key: c.handle,
    c: c
  })))), React.createElement("style", null, `
        @media (max-width: 1080px){ .ug-creator-grid{ grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 760px){ .ug-creator-grid{ grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 440px){ .ug-creator-grid{ grid-template-columns: 1fr !important; } }
      `));
}
function HowStep({
  n,
  icon,
  title,
  children,
  delay
}) {
  return React.createElement(UGX2.Reveal, {
    delay: delay,
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      padding: 'clamp(26px,3vw,32px)',
      boxShadow: 'var(--shadow-sm)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 14,
      background: 'var(--purple-50)',
      color: 'var(--brand-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, React.createElement(UGX2.Icon, {
    name: icon,
    size: 24
  })), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 40,
      color: 'var(--purple-100)',
      lineHeight: 1,
      marginLeft: 'auto'
    }
  }, "0", n)), React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 21,
      color: 'var(--text-strong)'
    }
  }, title), React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, children)));
}
function HowItWorks() {
  return React.createElement("section", {
    id: "como-funciona",
    style: {
      padding: 'clamp(72px,9vw,110px) 0',
      background: 'var(--white)'
    }
  }, React.createElement(UGX2.Container, null, React.createElement(UGX2.Reveal, null, React.createElement(UGX2.SectionHead, {
    center: true,
    eyebrow: "C\xF3mo funciona",
    title: "Tu campa\xF1a en 3 pasos",
    lead: "Un flujo claro, sin fricci\xF3n y sin procesos manuales. T\xFA decides; nosotros automatizamos el resto."
  })), React.createElement("div", {
    className: "ug-steps-wrap",
    style: {
      position: 'relative',
      marginTop: 52
    }
  }, React.createElement("div", {
    className: "ug-steps-line",
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: 42,
      left: '16%',
      right: '16%',
      height: 2,
      background: 'repeating-linear-gradient(90deg, var(--brand-soft) 0 8px, transparent 8px 16px)',
      zIndex: 0
    }
  }), React.createElement("div", {
    className: "ug-steps-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, React.createElement(HowStep, {
    n: 1,
    icon: "file-pen-line",
    title: "Lanza tu campa\xF1a",
    delay: 0
  }, "Publica tu brief en minutos y define objetivos, formato, presupuesto y fechas."), React.createElement(HowStep, {
    n: 2,
    icon: "list-checks",
    title: "Gestiona tus avances",
    delay: 90
  }, "Haz seguimiento por campa\xF1a y por creador en tiempo real, sin perder visibilidad."), React.createElement(HowStep, {
    n: 3,
    icon: "credit-card",
    title: "Controla pagos y entregables",
    delay: 180
  }, "Centraliza pagos, validaciones y entregas sin perseguir mensajes sueltos.")))), React.createElement("style", null, `@media (max-width: 820px){ .ug-steps-grid{ grid-template-columns: 1fr !important; } .ug-steps-line{ display:none; } }`));
}
function GalleryTile({
  it
}) {
  const [hover, setHover] = useState(false);
  return React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      flex: '0 0 auto',
      width: 218,
      height: 290,
      margin: '0 9px',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)'
    }
  }, React.createElement("img", {
    src: it.src,
    alt: `Contenido UGC · ${it.tag}`,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.06)' : 'none',
      transition: 'transform .5s var(--ease-out)'
    }
  }), React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(42,15,56,.05) 40%, rgba(42,15,56,.65))'
    }
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: 46,
      height: 46,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.9)',
      color: 'var(--brand-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-md)',
      transition: 'transform .2s var(--ease-out)',
      transform: hover ? 'translate(-50%,-50%) scale(1.1)' : 'translate(-50%,-50%)'
    }
  }, React.createElement(UGX2.Icon, {
    name: "play-circle",
    size: 26
  })), React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 10.5,
      color: '#fff',
      background: 'rgba(0,0,0,.35)',
      padding: '3px 8px',
      borderRadius: 999,
      backdropFilter: 'blur(4px)'
    }
  }, it.dur), React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 12,
      left: 12
    }
  }, React.createElement(Badge2, {
    tone: "solid",
    size: "sm"
  }, it.tag)));
}
function Gallery() {
  const imgs = [{
    src: 'assets/imagery/ugc-creator-ringlight.jpg',
    tag: 'Beauty',
    dur: '0:28'
  }, {
    src: 'assets/imagery/ugc-fitness-protein.jpg',
    tag: 'Fitness',
    dur: '0:35'
  }, {
    src: 'assets/imagery/ugc-lifestyle-coffee.jpg',
    tag: 'Lifestyle',
    dur: '0:22'
  }, {
    src: 'assets/imagery/ugc-beauty-collagen.jpg',
    tag: 'Skincare',
    dur: '0:41'
  }, {
    src: 'assets/imagery/ugc-bts-camera.jpg',
    tag: 'Detrás de cámaras',
    dur: '0:18'
  }, {
    src: 'assets/imagery/ugc-collagen-kitchen.jpg',
    tag: 'Food',
    dur: '0:30'
  }, {
    src: 'assets/imagery/ugc-supplement-portrait.jpg',
    tag: 'Wellness',
    dur: '0:26'
  }, {
    src: 'assets/imagery/ugc-skincare-set.jpg',
    tag: 'Unboxing',
    dur: '0:33'
  }, {
    src: 'assets/imagery/ugc-bts-tripod.jpg',
    tag: 'UGC Ads',
    dur: '0:24'
  }];
  const loop = [...imgs, ...imgs];
  return React.createElement("section", {
    style: {
      padding: 'clamp(64px,8vw,96px) 0',
      background: 'var(--brand-dark)',
      overflow: 'hidden'
    }
  }, React.createElement(UGX2.Container, null, React.createElement(UGX2.Reveal, {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'center',
      maxWidth: 640,
      margin: '0 auto 44px'
    }
  }, React.createElement("span", {
    className: "ug-eyebrow center",
    style: {
      color: 'var(--brand-soft)'
    }
  }, "Contenido real"), React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(30px,4.4vw,46px)',
      lineHeight: 1.08,
      letterSpacing: 'var(--tracking-tight)',
      color: '#fff'
    }
  }, "As\xED se ve el contenido real que conecta para tus clientes"), React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'clamp(15px,1.6vw,18px)',
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.72)',
      maxWidth: '56ch'
    }
  }, "Videos verticales listos para TikTok, Reels y Ads. Grabados por personas reales, con tu producto en la mano."))), React.createElement("div", {
    className: "ug-marquee",
    style: {
      maskImage: 'linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)'
    }
  }, React.createElement("div", {
    className: "ug-marquee-track"
  }, loop.map((it, i) => React.createElement(GalleryTile, {
    key: i,
    it: it
  })))));
}
const FLOW_TONES = {
  done: {
    fg: 'var(--success-600)',
    bg: 'var(--success-100)',
    fill: '100%',
    icon: 'check'
  },
  active: {
    fg: 'var(--brand-primary)',
    bg: 'var(--purple-100)',
    fill: '55%',
    icon: 'video'
  },
  review: {
    fg: 'var(--warning-600)',
    bg: 'var(--warning-100)',
    fill: '30%',
    icon: 'eye'
  },
  approved: {
    fg: 'var(--success-600)',
    bg: 'var(--success-100)',
    fill: '100%',
    icon: 'badge-check'
  }
};
function FlowCard({
  c,
  tone
}) {
  const T = FLOW_TONES[tone];
  return React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 12,
      padding: '10px 11px',
      boxShadow: 'var(--ring-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, React.createElement(Avatar2, {
    src: c.img,
    name: c.n,
    size: 34
  }), React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 12.5,
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, c.n), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 10.5,
      color: 'var(--text-muted)'
    }
  }, c.g))), React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      alignSelf: 'flex-start',
      padding: '4px 9px',
      borderRadius: 999,
      background: T.bg,
      color: T.fg
    }
  }, React.createElement(UGX2.Icon, {
    name: T.icon,
    size: 12,
    strokeWidth: 2.4
  }), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 10.5
    }
  }, c.s)));
}
function LegendItem({
  color,
  label
}) {
  return React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: color
    }
  }), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, label));
}
function DashboardShowcase() {
  const stages = [{
    t: "Brief enviado",
    tone: 'done',
    cards: [{
      n: "Lucía Marín",
      g: "Beauty",
      s: "Enviado",
      img: "assets/imagery/ugc-beauty-collagen.jpg"
    }, {
      n: "Diego Salas",
      g: "Fitness",
      s: "Enviado",
      img: "assets/imagery/ugc-fitness-protein.jpg"
    }]
  }, {
    t: "Creador aceptado",
    tone: 'done',
    cards: [{
      n: "Camila Ríos",
      g: "Food",
      s: "Aceptado",
      img: "assets/imagery/ugc-collagen-kitchen.jpg"
    }]
  }, {
    t: "En producción",
    tone: 'active',
    cards: [{
      n: "Sofía Quispe",
      g: "Lifestyle",
      s: "Grabando",
      img: "assets/imagery/ugc-lifestyle-coffee.jpg"
    }, {
      n: "Renzo Paredes",
      g: "Fashion",
      s: "Grabando",
      img: "assets/imagery/ugc-supplement-portrait.jpg"
    }]
  }, {
    t: "En revisión",
    tone: 'review',
    cards: [{
      n: "Ariana Tello",
      g: "UGC Ads",
      s: "Por aprobar",
      img: "assets/imagery/ugc-bts-tripod.jpg"
    }]
  }, {
    t: "Aprobado",
    tone: 'approved',
    cards: [{
      n: "Valeria Cano",
      g: "Beauty",
      s: "Aprobado",
      img: "assets/imagery/ugc-skincare-set.jpg"
    }]
  }];
  const sideItems = [{
    icon: 'layout-dashboard',
    label: 'Resumen'
  }, {
    icon: 'folder-kanban',
    label: 'Campaña'
  }, {
    icon: 'wallet',
    label: 'Pagos'
  }, {
    icon: 'message-square',
    label: 'Mensajes'
  }, {
    icon: 'trending-up',
    label: 'Reportes'
  }];
  return React.createElement("section", {
    style: {
      padding: 'clamp(72px,9vw,110px) 0',
      background: 'var(--surface-sunken)'
    }
  }, React.createElement(UGX2.Container, null, React.createElement(UGX2.Reveal, null, React.createElement(UGX2.SectionHead, {
    center: true,
    eyebrow: "El producto",
    title: "Tu campa\xF1a completa en un solo tablero",
    lead: "Cada creador, cada estado y cada entregable de tu campa\xF1a, en tiempo real. Esto es lo que ves al iniciar sesi\xF3n."
  })), React.createElement(UGX2.Reveal, {
    delay: 80
  }, React.createElement("div", {
    className: "ug-dash-shell",
    style: {
      marginTop: 48,
      background: 'var(--white)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-xl)',
      overflowX: 'auto',
      overflowY: 'hidden',
      WebkitOverflowScrolling: 'touch',
      border: '1px solid var(--border-faint)'
    }
  }, React.createElement("div", {
    className: "ug-dash-topbar",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 20px',
      borderBottom: '1px solid var(--border-faint)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7
    }
  }, React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#E7E2EC'
    }
  }), React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#E7E2EC'
    }
  }), React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#E7E2EC'
    }
  })), React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center'
    }
  }, React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--surface-sunken)',
      borderRadius: 999,
      padding: '6px 16px',
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, React.createElement(UGX2.Icon, {
    name: "search",
    size: 13
  }), " app.ugconnect.pe")), React.createElement(Avatar2, {
    name: "Bigens Marca",
    size: 28
  })), React.createElement("div", {
    className: "ug-dash-body",
    style: {
      display: 'grid',
      gridTemplateColumns: '210px 1fr'
    }
  }, React.createElement("aside", {
    className: "ug-dash-side",
    style: {
      borderRight: '1px solid var(--border-faint)',
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      background: 'var(--surface-50)'
    }
  }, React.createElement("div", {
    style: {
      padding: '4px 8px 14px'
    }
  }, React.createElement(UGX2.Wordmark, {
    size: 18
  })), sideItems.map((s, i) => React.createElement("div", {
    key: s.label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '10px 12px',
      borderRadius: 11,
      fontFamily: 'var(--font-ui)',
      fontWeight: i === 1 ? 600 : 500,
      fontSize: 13.5,
      color: i === 1 ? 'var(--brand-primary)' : 'var(--text-muted)',
      background: i === 1 ? 'var(--purple-50)' : 'transparent'
    }
  }, React.createElement(UGX2.Icon, {
    name: s.icon,
    size: 17
  }), " ", s.label)), React.createElement("div", {
    style: {
      marginTop: 'auto',
      background: 'var(--brand-dark)',
      borderRadius: 14,
      padding: 14,
      color: '#fff'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 12.5
    }
  }, "Piloto gratis"), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 11,
      color: 'rgba(255,255,255,.65)',
      marginTop: 2
    }
  }, "1 campa\xF1a, sin costo"))), React.createElement("div", {
    className: "ug-dash-main",
    style: {
      padding: 'clamp(18px,2.4vw,26px)'
    }
  }, React.createElement("div", {
    className: "ug-campaign-head",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 14,
      flexWrap: 'wrap',
      marginBottom: 18
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 11.5,
      fontWeight: 600,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--brand-secondary)'
    }
  }, "Campa\xF1a"), React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--text-strong)',
      marginTop: 2
    }
  }, "Lanzamiento Invierno UGC"), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginTop: 8,
      flexWrap: 'wrap'
    }
  }, React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, React.createElement(UGX2.Icon, {
    name: "file-text",
    size: 14,
    color: "var(--text-faint)"
  }), " Brief #UGC-128"), React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, React.createElement(UGX2.Icon, {
    name: "calendar",
    size: 14,
    color: "var(--text-faint)"
  }), " Cierra en 5 d\xEDas"), React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, React.createElement(UGX2.Icon, {
    name: "map-pin",
    size: 14,
    color: "var(--text-faint)"
  }), " Lima, Per\xFA"))), React.createElement(Badge2, {
    tone: "success",
    dot: true
  }, "En curso")), React.createElement("div", {
    className: "ug-flow-head",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      flexWrap: 'wrap',
      marginBottom: 14
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--text-strong)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement(UGX2.Icon, {
    name: "list-checks",
    size: 16,
    color: "var(--brand-secondary)"
  }), " Flujo de la campa\xF1a"), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, React.createElement(LegendItem, {
    color: "var(--success-600)",
    label: "Completado"
  }), React.createElement(LegendItem, {
    color: "var(--brand-primary)",
    label: "En curso"
  }), React.createElement(LegendItem, {
    color: "var(--warning-600)",
    label: "Por aprobar"
  }))), React.createElement("div", {
    className: "ug-pipeline",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 12
    }
  }, stages.map(st => {
    const T = FLOW_TONES[st.tone];
    return React.createElement("div", {
      key: st.t,
      className: "ug-stage",
      style: {
        background: 'var(--surface-sunken)',
        borderRadius: 16,
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        minHeight: 210
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7
      }
    }, React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: T.fg,
        flex: '0 0 auto'
      }
    }), React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontWeight: 600,
        fontSize: 11.5,
        color: 'var(--text-strong)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        flex: 1
      }
    }, st.t), React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontWeight: 600,
        fontSize: 10.5,
        color: 'var(--text-muted)',
        background: 'var(--white)',
        borderRadius: 999,
        padding: '1px 8px',
        boxShadow: 'var(--ring-card)'
      }
    }, st.cards.length)), React.createElement("div", {
      style: {
        height: 3,
        borderRadius: 999,
        background: T.bg
      }
    }, React.createElement("div", {
      style: {
        width: T.fill,
        height: '100%',
        borderRadius: 999,
        background: T.fg
      }
    })), st.cards.map(c => React.createElement(FlowCard, {
      key: c.n,
      c: c,
      tone: st.tone
    })));
  }))))))), React.createElement("style", null, `
        @media (max-width: 860px){
          .ug-dash-shell{ overflow: hidden !important; }
          .ug-dash-topbar, .ug-dash-side, .ug-campaign-head{ display:none !important; }
          .ug-dash-body{ grid-template-columns: 1fr !important; min-width: 0 !important; }
          .ug-dash-main{ padding: clamp(16px,4vw,22px) !important; }
          .ug-flow-head{ align-items:flex-start !important; }
          .ug-pipeline{ grid-template-columns: repeat(2,minmax(0,1fr)) !important; }
          .ug-stage{ min-height: 0 !important; }
        }
        @media (max-width: 560px){
          .ug-flow-head > div:last-child{ display:none !important; }
          .ug-pipeline{ display: grid !important; grid-template-columns: 1fr !important; overflow: visible; gap: 12px; padding-bottom: 0; scroll-snap-type: none; }
          .ug-stage{ flex: initial; scroll-snap-align: initial; }
        }
      `));
}
Object.assign(window, {
  Solution,
  Creators,
  Gallery,
  HowItWorks,
  DashboardShowcase
});
})();


/* app/sections3.jsx */
(() => {
const {
  useState,
  useEffect,
  useRef
} = React;
const {
  Button: B3,
  Badge: Bd3,
  Card: C3,
  Input: In3,
  Select: Sel3,
  Avatar: Av3
} = window.UGConnectDesignSystem_1dd337;
const X3 = window.UGX;
const soles = n => 'S/ ' + Math.round(n).toLocaleString('es-PE');
function Calculator() {
  const [budget, setBudget] = useState(1500);
  const [feePct, setFeePct] = useState(18);
  const fee = budget * (feePct / 100);
  return React.createElement("section", {
    id: "calculadora",
    style: {
      padding: 'clamp(72px,9vw,110px) 0',
      background: 'var(--white)'
    }
  }, React.createElement(X3.Container, null, React.createElement(X3.Reveal, null, React.createElement(X3.SectionHead, {
    center: true,
    eyebrow: "Calculadora de ahorro",
    title: "Cu\xE1nto ahorras sin comisi\xF3n de agencia",
    lead: "Las agencias suelen cobrar entre 15% y 20% sobre tu presupuesto de creadores. En UGConnect esa comisi\xF3n es 0%."
  })), React.createElement(X3.Reveal, {
    delay: 80
  }, React.createElement("div", {
    className: "ug-calc",
    style: {
      marginTop: 48,
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, React.createElement("div", {
    style: {
      background: 'var(--white)',
      padding: 'clamp(28px,3.4vw,44px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 30
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 14
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, "Presupuesto mensual para creadores"), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24,
      color: 'var(--brand-primary)'
    }
  }, soles(budget))), React.createElement("input", {
    type: "range",
    className: "ug-range",
    min: "500",
    max: "10000",
    step: "100",
    value: budget,
    onChange: e => setBudget(+e.target.value)
  }), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 8,
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, React.createElement("span", null, "S/ 500"), React.createElement("span", null, "S/ 10,000"))), React.createElement("div", null, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--text-strong)',
      display: 'block',
      marginBottom: 12
    }
  }, "Comisi\xF3n de agencia promedio"), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, [15, 18, 20].map(p => React.createElement("button", {
    key: p,
    onClick: () => setFeePct(p),
    style: {
      flex: 1,
      minWidth: 80,
      padding: '12px',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 15,
      border: `1.5px solid ${feePct === p ? 'var(--brand-primary)' : 'var(--border-subtle)'}`,
      background: feePct === p ? 'var(--purple-50)' : 'var(--white)',
      color: feePct === p ? 'var(--brand-primary)' : 'var(--text-body)',
      transition: 'all .15s var(--ease-out)'
    }
  }, p, "%")))), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: 14,
      borderRadius: 'var(--radius-md)',
      background: 'var(--purple-50)'
    }
  }, React.createElement(X3.Icon, {
    name: "info",
    size: 18,
    color: "var(--brand-primary)"
  }), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--brand-primary)',
      fontWeight: 500
    }
  }, "Todo tu presupuesto va directo a producir m\xE1s contenido, no a intermediarios."))), React.createElement("div", {
    style: {
      background: 'var(--brand-dark)',
      color: '#fff',
      padding: 'clamp(28px,3.4vw,44px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 28,
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: -70,
      right: -70,
      width: 220,
      height: 220,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(136,82,162,.5), transparent 70%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 11.5,
      fontWeight: 600,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.6)',
      marginBottom: 12
    }
  }, "Tu ahorro mensual estimado"), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(40px,6vw,56px)',
      lineHeight: 1,
      color: '#fff'
    }
  }, soles(fee)), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'rgba(255,255,255,.65)',
      marginTop: 10,
      maxWidth: '34ch'
    }
  }, "Cifra estimada. Lo que antes iba a intermediarios ahora puede captar m\xE1s creadores.")), React.createElement("div", {
    style: {
      position: 'relative',
      borderTop: '1px solid rgba(255,255,255,.14)',
      paddingTop: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13.5,
      color: 'rgba(255,255,255,.7)'
    }
  }, "Comisi\xF3n de agencia (", feePct, "%)"), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 15
    }
  }, soles(fee))), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13.5,
      color: 'rgba(255,255,255,.7)'
    }
  }, "Comisi\xF3n de UGConnect"), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--gold-500)'
    }
  }, "S/ 0"))))))), React.createElement("style", null, `@media (max-width: 760px){ .ug-calc{ grid-template-columns: 1fr !important; } }`));
}
function PlanCard({
  p,
  delay
}) {
  const featured = p.destacado;
  return React.createElement(X3.Reveal, {
    delay: delay,
    style: {
      height: '100%'
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      background: featured ? 'var(--brand-dark)' : 'var(--white)',
      color: featured ? '#fff' : 'inherit',
      borderRadius: 'var(--radius-xl)',
      padding: 'clamp(26px,3vw,34px)',
      boxShadow: featured ? 'var(--shadow-xl)' : 'var(--shadow-sm)',
      outline: featured ? 'none' : '1px solid var(--border-faint)'
    }
  }, featured && React.createElement("div", {
    style: {
      position: 'absolute',
      top: -13,
      left: '50%',
      transform: 'translateX(-50%)'
    }
  }, React.createElement(Bd3, {
    tone: "reward"
  }, "Recomendado")), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: featured ? '#fff' : 'var(--text-strong)'
    }
  }, p.nombre), p.chip && React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 11,
      padding: '4px 10px',
      borderRadius: 999,
      background: featured ? 'rgba(255,255,255,.14)' : 'var(--purple-50)',
      color: featured ? '#fff' : 'var(--brand-primary)'
    }
  }, p.chip)), React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13.5,
      color: featured ? 'rgba(255,255,255,.7)' : 'var(--text-muted)',
      margin: 0
    }
  }, p.desc)), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(30px,3.6vw,40px)',
      color: featured ? '#fff' : 'var(--text-strong)',
      lineHeight: 1
    }
  }, p.precio), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: featured ? 'rgba(255,255,255,.6)' : 'var(--text-muted)'
    }
  }, p.periodo)), React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      borderTop: `1px solid ${featured ? 'rgba(255,255,255,.14)' : 'var(--border-faint)'}`,
      paddingTop: 20
    }
  }, p.features.map((f, i) => React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      fontFamily: 'var(--font-ui)',
      fontSize: 13.5,
      color: f.muted ? featured ? 'rgba(255,255,255,.55)' : 'var(--text-faint)' : featured ? 'rgba(255,255,255,.9)' : 'var(--text-body)'
    }
  }, React.createElement("span", {
    style: {
      marginTop: 1,
      color: f.muted ? featured ? 'rgba(255,255,255,.4)' : 'var(--text-faint)' : featured ? 'var(--gold-500)' : 'var(--brand-primary)',
      flex: '0 0 auto'
    }
  }, React.createElement(X3.Icon, {
    name: f.muted ? 'plus' : 'check',
    size: 16,
    strokeWidth: 2.6
  })), f.t))), React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 6
    }
  }, React.createElement("a", {
    href: "#demo",
    style: {
      textDecoration: 'none'
    }
  }, React.createElement(B3, {
    variant: featured ? 'primary' : 'outline',
    size: "md",
    fullWidth: true
  }, p.cta)))));
}
function Pricing() {
  const [aud, setAud] = useState('marcas');
  const {
    planesMarcas,
    planesAgencias,
    beneficios
  } = window.UGDATA;
  const planes = aud === 'marcas' ? planesMarcas : planesAgencias;
  return React.createElement("section", {
    id: "planes",
    style: {
      padding: 'clamp(72px,9vw,110px) 0',
      background: 'var(--surface-sunken)'
    }
  }, React.createElement(X3.Container, null, React.createElement(X3.Reveal, null, React.createElement(X3.SectionHead, {
    center: true,
    eyebrow: "Planes y precios",
    title: "Paga por el software que le da control y orden a tu criterio",
    lead: "Un acceso mensual claro. Deja de perder horas en trabajo manual y enf\xF3cate en los resultados."
  })), React.createElement(X3.Reveal, {
    delay: 60
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 30
    }
  }, React.createElement("div", {
    style: {
      display: 'inline-flex',
      padding: 5,
      background: 'var(--white)',
      borderRadius: 999,
      boxShadow: 'var(--ring-card)'
    }
  }, [['marcas', 'Marcas independientes'], ['agencias', 'Agencias de marketing']].map(([k, label]) => React.createElement("button", {
    key: k,
    onClick: () => setAud(k),
    style: {
      padding: '10px 22px',
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14,
      background: aud === k ? 'var(--brand-primary)' : 'transparent',
      color: aud === k ? '#fff' : 'var(--text-muted)',
      boxShadow: aud === k ? 'var(--shadow-sm)' : 'none',
      transition: 'all .2s var(--ease-out)'
    }
  }, label))))), React.createElement("div", {
    key: aud,
    className: "ug-plans",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 22,
      marginTop: 40,
      alignItems: 'stretch'
    }
  }, planes.map((p, i) => React.createElement(PlanCard, {
    key: p.nombre,
    p: p,
    delay: i * 80
  }))), React.createElement(X3.Reveal, {
    delay: 60
  }, React.createElement("div", {
    style: {
      marginTop: 26,
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      padding: 'clamp(22px,2.6vw,30px)',
      boxShadow: 'var(--ring-card)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 18,
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'var(--brand-secondary)'
    }
  }, React.createElement(X3.Icon, {
    name: "plus",
    size: 16
  }), " Incluido en todos los planes"), React.createElement("div", {
    className: "ug-benefits",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 18
    }
  }, beneficios.map(b => React.createElement("div", {
    key: b.t,
    style: {
      display: 'flex',
      gap: 13
    }
  }, React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      flex: '0 0 auto',
      borderRadius: 11,
      background: 'var(--purple-50)',
      color: 'var(--brand-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(X3.Icon, {
    name: b.icon,
    size: 19
  })), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, b.t), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginTop: 3,
      lineHeight: 1.5
    }
  }, b.d)))))))), React.createElement("style", null, `
        @media (max-width: 980px){ .ug-benefits{ grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 880px){ .ug-plans{ grid-template-columns: 1fr !important; max-width: 460px; margin-left:auto; margin-right:auto; } }
        @media (max-width: 560px){ .ug-benefits{ grid-template-columns: 1fr !important; } }
      `));
}
function Pilot() {
  return React.createElement("section", {
    style: {
      padding: 'clamp(20px,4vw,40px) 0 0'
    }
  }, React.createElement(X3.Container, null, React.createElement(X3.Reveal, null, React.createElement("div", {
    className: "ug-pilot",
    style: {
      background: 'var(--brand-dark)',
      borderRadius: 'var(--radius-2xl)',
      padding: 'clamp(30px,4vw,52px)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32,
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      bottom: -90,
      left: -60,
      width: 280,
      height: 280,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(136,82,162,.4), transparent 70%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 640
    }
  }, React.createElement("span", {
    style: {
      display: 'inline-block',
      marginBottom: 14
    }
  }, React.createElement(Bd3, {
    tone: "reward"
  }, React.createElement(X3.Icon, {
    name: "sparkles",
    size: 14
  }), " \xBFQuieres probar primero?")), React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(26px,3.6vw,38px)',
      lineHeight: 1.1,
      color: '#fff'
    }
  }, "Tu primera campa\xF1a es 100% gratis"), React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.72)',
      marginTop: 14,
      maxWidth: '56ch'
    }
  }, "Cero costo de plataforma. Gestiona tu primera campa\xF1a totalmente gratis y descubre c\xF3mo UGConnect te ayuda a escalar las campa\xF1as de tus clientes.")), React.createElement("div", {
    style: {
      position: 'relative',
      flex: '0 0 auto'
    }
  }, React.createElement("a", {
    href: "#demo",
    style: {
      textDecoration: 'none'
    }
  }, React.createElement(B3, {
    variant: "primary",
    size: "lg",
    iconRight: React.createElement(X3.Icon, {
      name: "arrow-right",
      size: 19
    })
  }, "Lanzar mi piloto gratis")))))), React.createElement("style", null, `@media (max-width: 760px){ .ug-pilot{ flex-direction: column; align-items: flex-start !important; } }`));
}
function Testimonials() {
  const {
    testimonios
  } = window.UGDATA;
  /* Oculto temporalmente hasta tener testimonios reales de la plataforma nueva.
     Para reactivar: elimina el `return null;` siguiente. */
  return null;
  return React.createElement("section", {
    style: {
      padding: 'clamp(72px,9vw,110px) 0',
      background: 'var(--white)'
    }
  }, React.createElement(X3.Container, null, React.createElement(X3.Reveal, null, React.createElement(X3.SectionHead, {
    center: true,
    eyebrow: "Testimonios",
    title: "Marcas que ya crean con UGConnect",
    lead: "Ejemplos editables \u2014 reempl\xE1zalos con tus propios casos cuando los tengas."
  })), React.createElement("div", {
    className: "ug-testi",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 22,
      marginTop: 48
    }
  }, testimonios.map((t, i) => React.createElement(X3.Reveal, {
    key: i,
    delay: i * 80,
    style: {
      height: '100%'
    }
  }, React.createElement("div", {
    style: {
      height: '100%',
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      padding: 'clamp(24px,3vw,30px)',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3
    }
  }, [0, 1, 2, 3, 4].map(s => React.createElement(X3.Icon, {
    key: s,
    name: "star",
    size: 16,
    color: "var(--gold-500)",
    style: {
      fill: 'var(--gold-500)'
    }
  }))), React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0,
      flex: 1
    }
  }, "\"", t.quote, "\""), React.createElement("span", {
    style: {
      alignSelf: 'flex-start'
    }
  }, React.createElement(Bd3, {
    tone: "soft"
  }, t.resultado)), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      borderTop: '1px solid var(--border-faint)',
      paddingTop: 16
    }
  }, React.createElement(Av3, {
    src: t.img,
    name: "N N",
    size: 42,
    ring: true
  }), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, t.nombre), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, t.cargo, " \xB7 ", t.empresa)))))))), React.createElement("style", null, `@media (max-width: 880px){ .ug-testi{ grid-template-columns: 1fr !important; max-width: 460px; margin-left:auto; margin-right:auto; } }`));
}
function FaqItem({
  q,
  a,
  open,
  onToggle
}) {
  const bodyRef = useRef(null);
  const [h, setH] = useState(0);
  useEffect(() => {
    if (bodyRef.current) setH(open ? bodyRef.current.scrollHeight : 0);
  }, [open]);
  return React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-md)',
      background: open ? 'var(--white)' : 'transparent',
      boxShadow: open ? 'var(--shadow-sm)' : 'none',
      border: '1px solid var(--border-faint)',
      overflow: 'hidden',
      transition: 'box-shadow .2s var(--ease-out)'
    }
  }, React.createElement("button", {
    onClick: onToggle,
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '18px 20px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 15.5,
      color: 'var(--text-strong)'
    }
  }, q), React.createElement("span", {
    style: {
      flex: '0 0 auto',
      color: 'var(--brand-primary)',
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform .25s var(--ease-out)'
    }
  }, React.createElement(X3.Icon, {
    name: "chevron-down",
    size: 20
  }))), React.createElement("div", {
    className: "ug-faq-body",
    style: {
      height: h
    }
  }, React.createElement("p", {
    ref: bodyRef,
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      padding: '0 20px 20px',
      margin: 0
    }
  }, a)));
}
function Faq() {
  const {
    faqs
  } = window.UGDATA;
  const [open, setOpen] = useState(0);
  return React.createElement("section", {
    style: {
      padding: 'clamp(72px,9vw,110px) 0',
      background: 'var(--surface-sunken)'
    }
  }, React.createElement(X3.Container, {
    style: {
      maxWidth: 820
    }
  }, React.createElement(X3.Reveal, null, React.createElement(X3.SectionHead, {
    center: true,
    eyebrow: "Preguntas frecuentes",
    title: "Resolvemos tus dudas"
  })), React.createElement(X3.Reveal, {
    delay: 60
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 40
    }
  }, faqs.map((f, i) => React.createElement(FaqItem, {
    key: i,
    q: f.q,
    a: f.a,
    open: open === i,
    onToggle: () => setOpen(open === i ? -1 : i)
  }))))));
}
function FinalCTA() {
  return React.createElement("section", {
    style: {
      padding: 'clamp(40px,6vw,64px) 0 clamp(72px,9vw,100px)',
      background: 'var(--surface-sunken)'
    }
  }, React.createElement(X3.Container, null, React.createElement(X3.Reveal, null, React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, var(--purple-800), var(--purple-900))',
      borderRadius: 'var(--radius-2xl)',
      padding: 'clamp(40px,6vw,80px)',
      textAlign: 'center',
      color: '#fff'
    }
  }, React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: -100,
      right: -40,
      width: 320,
      height: 320,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(136,82,162,.45), transparent 70%)'
    }
  }), React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      bottom: -120,
      left: -60,
      width: 320,
      height: 320,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(183,138,205,.28), transparent 70%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 22,
      maxWidth: 720,
      margin: '0 auto'
    }
  }, React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(30px,4.6vw,50px)',
      lineHeight: 1.06,
      letterSpacing: 'var(--tracking-tight)',
      color: '#fff'
    }
  }, "Empieza a crear contenido aut\xE9ntico esta semana"), React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'clamp(15px,1.7vw,18px)',
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.78)',
      maxWidth: '54ch'
    }
  }, "Agenda una demo y te ayudamos a configurar tu primera campa\xF1a gratis."), React.createElement("div", {
    className: "ug-cta-row",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14,
      justifyContent: 'center',
      marginTop: 4
    }
  }, React.createElement("a", {
    href: "#demo",
    style: {
      textDecoration: 'none'
    }
  }, React.createElement(B3, {
    variant: "primary",
    size: "lg",
    iconRight: React.createElement(X3.Icon, {
      name: "arrow-right",
      size: 19
    })
  }, "Agendar demo 1-on-1")), React.createElement("a", {
    href: "#demo",
    style: {
      textDecoration: 'none'
    }
  }, React.createElement(B3, {
    variant: "ghost",
    size: "lg",
    style: {
      background: 'rgba(255,255,255,.12)',
      color: '#fff'
    }
  }, "Lanzar mi primera campa\xF1a gratis"))))))));
}
function nextDates(count) {
  const out = [];
  const d = new Date();
  let added = 0;
  while (added < count) {
    d.setDate(d.getDate() + 1);
    const day = d.getDay();
    if (day === 0 || day === 6) continue;
    const label = new Intl.DateTimeFormat('es-PE', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    }).format(d);
    out.push(label.charAt(0).toUpperCase() + label.slice(1));
    added++;
  }
  return out;
}
const TIMES = ['10:00 AM', '11:30 AM', '02:00 PM', '04:00 PM', '05:30 PM'];
function DemoForm() {
  const calcomUrl = (window.UGDATA.calcomUrl || "").trim();
  const dates = useRef(nextDates(5)).current;
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(dates[0]);
  const [time, setTime] = useState(TIMES[0]);
  const [f, setF] = useState({
    nombre: '',
    empresa: '',
    email: '',
    whatsapp: '',
    tipo: 'Marca independiente',
    presupuesto: 'S/ 1,000 – S/ 3,000'
  });
  const set = k => e => setF(s => ({
    ...s,
    [k]: e.target.value
  }));
  return React.createElement("section", {
    id: "demo",
    style: {
      padding: 'clamp(72px,9vw,110px) 0',
      background: 'var(--white)'
    }
  }, React.createElement(X3.Container, null, React.createElement("div", {
    className: "ug-demo",
    style: {
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 'clamp(32px,4vw,56px)',
      alignItems: 'center'
    }
  }, React.createElement(X3.Reveal, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, React.createElement("div", null, React.createElement(X3.Eyebrow, null, "Agenda tu demo"), React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(28px,3.8vw,42px)',
      lineHeight: 1.08,
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)',
      marginTop: 14
    }
  }, "Agenda tu demo 1-on-1"), React.createElement(X3.Lead, {
    style: {
      marginTop: 14
    }
  }, "Una llamada de 15 minutos con un consultor. Te mostramos la plataforma por dentro y configuramos tu primera campa\xF1a gratis.")), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['shield-check', 'Sin compromiso ni tarjeta'], ['clock', 'Solo 15 minutos'], ['rocket', 'Salimos con tu primer brief listo']].map(([ic, tx]) => React.createElement("div", {
    key: tx,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: 'var(--purple-50)',
      color: 'var(--brand-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, React.createElement(X3.Icon, {
    name: ic,
    size: 18
  })), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14.5,
      color: 'var(--text-body)',
      fontWeight: 500
    }
  }, tx)))), React.createElement("div", {
    style: {
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-lg)',
      padding: 22
    }
  }, React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontStyle: 'italic',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0
    }
  }, "\"Lanzamos con 3 creadores y tuvimos los videos en redes en menos de una semana. Nos quitamos el dolor de cabeza de los recibos por honorarios.\""), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 14
    }
  }, React.createElement(Av3, {
    name: "N N",
    size: 34
  }), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--text-strong)'
    }
  }, "[ Nombre del cliente ]"), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, "Gerente de Marketing \xB7 [ Empresa ]"))))), React.createElement(X3.Reveal, {
    delay: 100
  }, React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'clamp(24px,3vw,34px)',
      border: '1px solid var(--border-faint)'
    }
  }, calcomUrl && React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, React.createElement("div", null, React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--text-strong)'
    }
  }, "Elige un horario disponible"), React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, "Calendario conectado con Cal.com.")), React.createElement("iframe", {
    title: "Agenda tu demo UGConnect",
    src: calcomUrl,
    loading: "lazy",
    style: {
      width: '100%',
      minHeight: 620,
      border: '1px solid var(--border-faint)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--white)'
    }
  }), React.createElement("a", {
    href: calcomUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      textDecoration: 'none'
    }
  }, React.createElement(B3, {
    variant: "outline",
    size: "md",
    fullWidth: true,
    iconRight: React.createElement(X3.Icon, {
      name: "arrow-up-right",
      size: 17
    })
  }, "Abrir agenda en Cal.com"))), !calcomUrl && step === 1 && React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, React.createElement("div", null, React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--text-strong)'
    }
  }, "1 \xB7 Elige fecha y hora"), React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, "Disponibilidad del ejecutivo (hora Per\xFA).")), React.createElement("div", null, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      display: 'block',
      marginBottom: 10
    }
  }, "Fecha"), React.createElement("div", {
    className: "ug-date-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 8
    }
  }, dates.map(d => React.createElement("button", {
    key: d,
    onClick: () => setDate(d),
    style: {
      padding: '12px 6px',
      borderRadius: 12,
      cursor: 'pointer',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 12.5,
      lineHeight: 1.3,
      border: `1.5px solid ${date === d ? 'var(--brand-primary)' : 'var(--border-subtle)'}`,
      background: date === d ? 'var(--purple-50)' : 'var(--white)',
      color: date === d ? 'var(--brand-primary)' : 'var(--text-body)',
      transition: 'all .15s var(--ease-out)'
    }
  }, d)))), React.createElement("div", null, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      display: 'block',
      marginBottom: 10
    }
  }, "Hora"), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, TIMES.map(tt => React.createElement("button", {
    key: tt,
    onClick: () => setTime(tt),
    style: {
      padding: '10px 16px',
      borderRadius: 999,
      cursor: 'pointer',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 13,
      border: `1.5px solid ${time === tt ? 'var(--brand-primary)' : 'var(--border-subtle)'}`,
      background: time === tt ? 'var(--purple-50)' : 'var(--white)',
      color: time === tt ? 'var(--brand-primary)' : 'var(--text-body)',
      transition: 'all .15s var(--ease-out)'
    }
  }, tt)))), React.createElement(B3, {
    variant: "dark",
    size: "lg",
    fullWidth: true,
    onClick: () => setStep(2),
    iconRight: React.createElement(X3.Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Continuar")), !calcomUrl && step === 2 && React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10
    }
  }, React.createElement("button", {
    onClick: () => setStep(1),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--brand-primary)'
    }
  }, React.createElement(X3.Icon, {
    name: "chevron-right",
    size: 15,
    style: {
      transform: 'rotate(180deg)'
    }
  }), " Cambiar fecha"), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 12.5,
      color: 'var(--text-strong)'
    }
  }, date, " \xB7 ", time)), React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--text-strong)'
    }
  }, "2 \xB7 Tus datos"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, React.createElement(In3, {
    label: "Nombre",
    placeholder: "Ej. Rodrigo",
    value: f.nombre,
    onChange: set('nombre')
  }), React.createElement(In3, {
    label: "Empresa",
    placeholder: "Ej. Bigens",
    value: f.empresa,
    onChange: set('empresa')
  })), React.createElement(In3, {
    label: "Correo corporativo",
    type: "email",
    placeholder: "rodrigo@empresa.pe",
    value: f.email,
    onChange: set('email'),
    leadingIcon: React.createElement(X3.Icon, {
      name: "mail",
      size: 16
    })
  }), React.createElement(In3, {
    label: "WhatsApp",
    placeholder: "+51 999 999 999",
    value: f.whatsapp,
    onChange: set('whatsapp'),
    leadingIcon: React.createElement(X3.Icon, {
      name: "phone",
      size: 16
    })
  }), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, React.createElement(Sel3, {
    label: "Tipo de marca",
    value: f.tipo,
    onChange: set('tipo'),
    options: ['Marca independiente', 'E-commerce', 'Startup', 'Equipo de marketing', 'Agencia']
  }), React.createElement(Sel3, {
    label: "Presupuesto estimado",
    value: f.presupuesto,
    onChange: set('presupuesto'),
    options: ['Menos de S/ 1,000', 'S/ 1,000 – S/ 3,000', 'S/ 3,000 – S/ 10,000', 'Más de S/ 10,000']
  })), React.createElement(B3, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => setStep(3),
    iconRight: React.createElement(X3.Icon, {
      name: "check",
      size: 18
    })
  }, "Agendar demo")), !calcomUrl && step === 3 && React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px 8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 18
    }
  }, React.createElement("span", {
    style: {
      width: 66,
      height: 66,
      borderRadius: '50%',
      background: 'var(--success-100)',
      color: 'var(--success-600)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(X3.Icon, {
    name: "check-circle",
    size: 34
  })), React.createElement("div", null, React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--text-strong)'
    }
  }, "\xA1Demo agendada!"), React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      marginTop: 8,
      maxWidth: '40ch'
    }
  }, "Te enviamos la confirmaci\xF3n y el enlace a tu correo. Te esperamos el ", React.createElement("strong", {
    style: {
      color: 'var(--brand-primary)'
    }
  }, date, " \xB7 ", time), ".")), React.createElement("div", {
    style: {
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 18px',
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      color: 'var(--text-body)',
      maxWidth: '46ch'
    }
  }, "Mientras tanto, ve pensando el video piloto que te gustar\xEDa lanzar gratis."), React.createElement("button", {
    onClick: () => setStep(1),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--brand-primary)'
    }
  }, "Agendar otra fecha")))))), React.createElement("style", null, `
        @media (max-width: 880px){ .ug-demo{ grid-template-columns: 1fr !important; } }
        @media (max-width: 480px){ .ug-date-grid{ grid-template-columns: repeat(2,1fr) !important; } }
      `));
}
function Footer() {
  const cols = [{
    h: 'Producto',
    items: [{
      label: 'Cómo funciona',
      href: '#como-funciona'
    }, {
      label: 'Planes',
      href: '#planes'
    }, {
      label: 'Demo',
      href: '#demo'
    }]
  }, {
    h: 'Marcas',
    items: [{
      label: 'Agendar demo',
      href: '#demo'
    }, {
      label: 'Primera campaña gratis',
      href: '#demo'
    }, {
      label: 'Para agencias',
      href: '#planes'
    }]
  }, {
    h: 'Legal',
    items: [{
      label: 'T&C Marcas y Agencias',
      href: 'legal/terminos-marcas-agencias-ugconnect.html'
    }, {
      label: 'T&C Creadores',
      href: 'legal/terminos-creadores-ugconnect.html'
    }, {
      label: 'Política de privacidad',
      href: 'legal/privacy-policy/'
    }]
  }];
  return React.createElement("footer", {
    style: {
      background: 'var(--purple-900)',
      color: '#fff',
      padding: 'clamp(48px,6vw,72px) 0 36px'
    }
  }, React.createElement(X3.Container, null, React.createElement("div", {
    className: "ug-foot",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 32
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 300
    }
  }, React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24,
      letterSpacing: '-0.02em'
    }
  }, React.createElement("span", {
    style: {
      color: 'var(--brand-soft)'
    }
  }, "UGC"), React.createElement("span", {
    style: {
      color: '#fff'
    }
  }, "onnect"))), React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.6)',
      marginTop: 14
    }
  }, "Contenido aut\xE9ntico para tu marca, sin agencias ni producciones costosas. Connect. Collaborate. Create.")), cols.map(c => React.createElement("div", {
    key: c.h
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 12.5,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.5)',
      marginBottom: 14
    }
  }, c.h), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.items.map(it => React.createElement("a", {
    key: it.label,
    href: it.href,
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13.5,
      color: 'rgba(255,255,255,.78)',
      textDecoration: 'none'
    }
  }, it.label)))))), React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.12)',
      marginTop: 40,
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      color: 'rgba(255,255,255,.5)'
    }
  }, "\xA9 2026 UGConnect \xB7 Lima, Per\xFA. Todos los derechos reservados."), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, ['instagram', 'message-circle', 'mail'].map(ic => React.createElement("span", {
    key: ic,
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: 'rgba(255,255,255,.1)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, React.createElement(X3.Icon, {
    name: ic,
    size: 17
  })))))), React.createElement("style", null, `@media (max-width: 760px){ .ug-foot{ grid-template-columns: 1fr 1fr !important; } }`));
}
Object.assign(window, {
  Calculator,
  Pricing,
  Pilot,
  Testimonials,
  Faq,
  FinalCTA,
  DemoForm,
  Footer
});
})();


/* app/tweaks-panel.jsx */
(() => {
const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return React.createElement(React.Fragment, null, React.createElement("style", null, __TWEAKS_STYLE), React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, React.createElement("b", null, title), React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), React.createElement("div", {
    className: "twk-body"
  }, children)));
}
function TweakSection({
  label,
  children
}) {
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, React.createElement("div", {
    className: "twk-lbl"
  }, React.createElement("span", null, label), value != null && React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}
function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return React.createElement("div", {
    className: "twk-row twk-row-h"
  }, React.createElement("div", {
    className: "twk-lbl"
  }, React.createElement("span", null, label)), React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const valueRef = React.useRef(value);
  valueRef.current = value;
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return React.createElement("div", {
    className: "twk-num"
  }, React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return React.createElement("div", {
      className: "twk-row twk-row-h"
    }, React.createElement("div", {
      className: "twk-lbl"
    }, React.createElement("span", null, label)), React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && React.createElement("span", null, sup.map((c, j) => React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})();


/* app/main.jsx */
(() => {
const {
  useEffect: useFx
} = React;
const {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakColor,
  TweakRadio,
  TweakToggle
} = window;
const {
  Header,
  Hero,
  Logos,
  Problema,
  Solution,
  Gallery,
  HowItWorks,
  DashboardShowcase,
  Pricing,
  Pilot,
  Testimonials,
  Faq,
  FinalCTA,
  DemoForm,
  Footer
} = window;
const TWEAK_DEFAULTS = {
  "accent": "#5D2978",
  "canvas": "Lavanda",
  "animations": true
};
const ACCENTS = {
  '#5D2978': {
    hover: '#4A1F62',
    press: '#39164C'
  },
  '#4A1F62': {
    hover: '#39164C',
    press: '#2A0F38'
  },
  '#8852A2': {
    hover: '#6F3E88',
    press: '#5D2978'
  },
  '#39164C': {
    hover: '#2A0F38',
    press: '#1E0A2A'
  }
};
const CANVAS = {
  'Lavanda': '#F5EFF8',
  'Gris cálido': '#F3F1F6'
};
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useFx(() => {
    const r = document.documentElement.style;
    const a = ACCENTS[t.accent] || ACCENTS['#5D2978'];
    r.setProperty('--brand-primary', t.accent);
    r.setProperty('--brand-primary-hover', a.hover);
    r.setProperty('--brand-primary-press', a.press);
    r.setProperty('--text-brand', t.accent);
    r.setProperty('--text-link', t.accent);
    r.setProperty('--border-focus', t.accent);
  }, [t.accent]);
  useFx(() => {
    document.documentElement.style.setProperty('--surface-sunken', CANVAS[t.canvas] || CANVAS['Lavanda']);
  }, [t.canvas]);
  useFx(() => {
    document.body.classList.toggle('no-reveal', !t.animations);
  }, [t.animations]);
  return React.createElement(React.Fragment, null, React.createElement(Header, null), React.createElement("main", null, React.createElement(Hero, null), React.createElement(Logos, null), React.createElement(Problema, null), React.createElement(Solution, null), React.createElement(Gallery, null), React.createElement(HowItWorks, null), React.createElement(DashboardShowcase, null), React.createElement(Pricing, null), React.createElement(Pilot, null), React.createElement(Testimonials, null), React.createElement(Faq, null), React.createElement(FinalCTA, null), React.createElement(DemoForm, null)), React.createElement(Footer, null), React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, React.createElement(TweakSection, {
    label: "Marca"
  }), React.createElement(TweakColor, {
    label: "Acento",
    value: t.accent,
    options: ['#5D2978', '#4A1F62', '#8852A2', '#39164C'],
    onChange: v => setTweak('accent', v)
  }), React.createElement(TweakSection, {
    label: "Lienzo"
  }), React.createElement(TweakRadio, {
    label: "Fondo de secciones",
    value: t.canvas,
    options: ['Lavanda', 'Gris cálido'],
    onChange: v => setTweak('canvas', v)
  }), React.createElement(TweakSection, {
    label: "Movimiento"
  }), React.createElement(TweakToggle, {
    label: "Animaciones al hacer scroll",
    value: t.animations,
    onChange: v => setTweak('animations', v)
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
})();
