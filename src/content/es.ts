/**
 * TEXTOS DE LA PÁGINA (español de Perú, tuteo).
 * Edita aquí el copy; los componentes solo lo muestran.
 * Regla: sin cifras inventadas, sin clientes/testimonios falsos, sin precios ni comisiones.
 */

export const meta = {
  title: "UGConnect | Crea y gestiona campañas con creadores en una sola plataforma",
  description:
    "Plataforma para crear y gestionar campañas con creadores de contenido (UGC): brief, selección de creadores, seguimiento, aprobación, pagos y resultados. Más de 700 creadores registrados y acompañamiento consultivo para maximizar tus resultados.",
  ogAlt: "UGConnect: crea y gestiona campañas con creadores en una sola plataforma",
};

/* Datos reales de UGConnect (confirmados por el equipo). Edita aquí y se actualiza en toda la página.
   [POR CONFIRMAR] fecha de corte del dato y cada cuánto se actualiza. */
export const stats = {
  creators: {
    value: 700, // número para el contador animado
    display: "+700", // cómo se muestra
    label: "creadores registrados",
    prose: "más de 700 creadores registrados", // para usar dentro de frases
  },
};

export const nav = {
  // Navbar reducido a lo esencial. El footer conserva la lista completa (ver `footer.links`).
  links: [
    { label: "Cómo funciona", href: "/#como-funciona" },
    { label: "Para quién", href: "/#para-quien" },
    { label: "Planes", href: "/#planes" },
    { label: "FAQ", href: "/#faq" },
  ],
  cta: "Contáctanos",
  ctaHint: "por WhatsApp (se abre en una pestaña nueva)",
  login: "Iniciar sesión",
  openMenu: "Abrir menú",
  closeMenu: "Cerrar menú",
};

export const hero = {
  eyebrow: "Plataforma para marcas que quieren mejorar su presencia digital",
  // El titular se compone en dos líneas: la segunda va en morado.
  titleLine1: "Crea y gestiona campañas con creadores.",
  titleLine2: "En una sola plataforma",
  subtitle:
    "Lleva tu campaña de principio a fin en un solo lugar: brief, creadores, aprobaciones, pagos y resultados. Y si quieres ir más lejos, el equipo de UGConnect te acompaña para maximizar tus resultados.",
  primaryCta: "Contáctanos",
  secondaryCta: "Ver cómo funciona",
  note: "Pensada para marcas que quieren elevar sus ventas y conversiones en sus espacios digitales",
  visualLabel:
    "Vista ilustrativa de la plataforma: campaña, creadores y estados de aprobación",
};

export const marquee = {
  label: "Todo tipo de contenido, en todos los canales",
  items: [
    "UGC Ads",
    "Reels",
    "TikTok",
    "Instagram",
    "Clips de producto",
    "Afiliados",
    "Reseñas en video",
    "Unboxing",
    "Stories",
    "Tutoriales",
  ],
};

/** Datos ilustrativos de las maquetas del hero. Son de ejemplo, no reales. */
export const heroMock = {
  windowTitle: "Campaña · Lanzamiento de producto",
  status: "En curso",
  creatorsTitle: "Creadores",
  creators: [
    { name: "Valeria M.", niche: "Belleza · TikTok", state: "approved" },
    { name: "Diego R.", niche: "Tecnología · Reels", state: "review" },
    { name: "Camila T.", niche: "Estilo de vida · Instagram", state: "pending" },
  ],
  stateLabels: {
    approved: "Aprobado",
    review: "En revisión",
    pending: "Pendiente",
  },
  boardTitle: "Tablero",
  columns: ["Brief", "Producción", "Aprobado"],
  // Pestañas de la vista de campaña, tal como aparecen en el panel real.
  tabs: ["Resumen", "Sugeridos", "Postulaciones", "Aceptados", "Avances"],
  activeTab: 4,
  floatBrief: { title: "Brief enviado", text: "3 creadores recomendados" },
  floatApproved: { title: "Contenido aprobado", chip: "Pago liberado" },
  floatChat: {
    author: "Equipo UGConnect",
    text: "Te recomendamos tres perfiles según tu brief. ¿Los revisamos juntos?",
  },
};

/* ───────────── 3. El puente entre marcas y creadores ───────────── */
export const bridge = {
  eyebrow: "La plataforma",
  title: "El puente entre",
  titleAccent: "marcas y creadores",
  intro:
    "UGConnect conecta a quienes necesitan contenido auténtico con quienes lo crean, y ordena todo el camino: del primer brief a los resultados.",
  cards: [
    // Orden definido por UGConnect (2026-09-18)
    {
      icon: "trophy",
      title: "Probar creativos ganadores",
      text: "Encuentra nuevos ganchos, hooks, estilos de video y CTAs, y escala.",
    },
    {
      icon: "video",
      title: "Contenido UGC para tus anuncios",
      text: "Consigue videos con voz de personas reales para tus campañas de pauta y prueba distintas versiones sin empezar de cero.",
    },
    {
      icon: "phone",
      title: "Reels y contenido para redes",
      text: "Planifica piezas para TikTok e Instagram y sigue cada entrega desde un tablero, sin perderte entre chats.",
    },
    {
      icon: "globe",
      title: "Para todos tus espacios digitales",
      text: "Tu página web, tu página de productos, campañas de emailing y más.",
    },
  ],
  // Franja con el dato de creadores registrados (ver `stats` arriba)
  stat: "Una comunidad de creadores registrados en UGConnect para conectar con marcas como la tuya.",
} as const;

/* ───────────── 4. Cómo funciona (4 pasos) ───────────── */
// [POR CONFIRMAR] qué campos tiene realmente el brief, cómo funciona el matching (criterios) y
// qué métricas muestra el dashboard. Las maquetas son ilustrativas y no muestran cifras.
export const howItWorks = {
  eyebrow: "Cómo funciona",
  title: "De la idea a los resultados,",
  titleAccent: "en cuatro pasos",
  intro:
    "Un solo flujo para toda la campaña, del brief a los resultados, sin saltar entre chats y hojas de cálculo.",
  stepLabel: "Paso",
  illustrative: "Vista ilustrativa",
  videoNote: "Vista de la plataforma",
  // Video de cada paso (grabaciones editadas en bucle, en public/videos). null = todavía no hay video: se muestra la maqueta.
  // Los originales están en videosdemo/. [POR CONFIRMAR] video del paso 4 (Mide y mejora).
  videos: [
    { src: "/videos/paso1.mp4", poster: "/videos/paso1-poster.webp" },
    { src: "/videos/paso2.mp4", poster: "/videos/paso2-poster.webp" },
    { src: "/videos/paso3.mp4", poster: "/videos/paso3-poster.webp" },
    null,
  ] as ReadonlyArray<{ src: string; poster: string } | null>,
  steps: [
    {
      title: "Crea tu campaña",
      text: "Define el brief y el presupuesto en pocos minutos: objetivo, canales, entregables y fechas.",
      bullets: ["Brief guiado, paso a paso", "Presupuesto por campaña", "Entregables y fechas claras"],
    },
    {
      title: "Elige creadores",
      text: "El matching inteligente te sugiere perfiles según tu marca, tu público y el tipo de contenido. Revisa cada perfil, compara y decide.",
      bullets: ["Sugerencias según tu brief", "Perfiles para comparar", "Invitaciones desde la plataforma"],
    },
    {
      title: "Da seguimiento y aprueba",
      text: "Cada pieza avanza en un tablero Kanban. Conversa con el creador en el chat integrado y pide correcciones sin salir de la campaña.",
      bullets: ["Tablero Kanban por etapas", "Chat integrado con creadores", "Correcciones y aprobación"],
    },
    {
      title: "Mide y mejora",
      text: "Sigue el rendimiento en un dashboard en tiempo real y decide qué optimizar en tu próxima campaña.",
      bullets: ["Dashboard en tiempo real", "Resultados por pieza y por campaña", "Aprendizajes para la siguiente campaña"],
    },
  ],
  mocks: {
    campaign: {
      title: "Nuevo brief",
      badge: "Borrador",
      nameLabel: "Nombre de la campaña",
      nameValue: "Lanzamiento de producto",
      goalLabel: "Objetivo",
      goals: ["Reconocimiento", "Conversión", "Contenido para anuncios"],
      channelsLabel: "Canales",
      channels: ["TikTok", "Reels", "Clips de producto"],
      budgetLabel: "Presupuesto",
      dateLabel: "Fecha de entrega",
      cta: "Publicar brief",
    },
    creators: {
      title: "Creadores sugeridos",
      badge: "Matching",
      fitLabel: "Afinidad con tu brief",
      invite: "Invitar",
      invited: "Invitado",
      list: [
        { name: "Valeria M.", niche: "Belleza · TikTok", fit: 5, invited: true },
        { name: "Diego R.", niche: "Tecnología · Reels", fit: 4, invited: false },
        { name: "Camila T.", niche: "Estilo de vida · Instagram", fit: 4, invited: false },
        { name: "Andrés P.", niche: "Fitness · TikTok", fit: 3, invited: false },
      ],
    },
    kanban: {
      title: "Tablero de la campaña",
      badge: "En curso",
      columns: ["Brief", "Producción", "En revisión", "Aprobado"],
      cards: [
        { col: 0, who: "A", piece: "Video testimonial" },
        { col: 1, who: "D", piece: "Reel de unboxing" },
        { col: 1, who: "C", piece: "Historia de producto" },
        { col: 2, who: "C", piece: "Clip de producto", tag: "Corrección solicitada" },
        { col: 3, who: "V", piece: "UGC para anuncio", done: true },
      ],
      chatBrand: "¿Puedes mostrar el producto en los primeros segundos?",
      chatCreator: "¡Listo! Te subo la nueva versión hoy.",
    },
    dashboard: {
      title: "Resultados de la campaña",
      badge: "En vivo",
      stats: ["Alcance", "Interacciones", "Piezas aprobadas"],
      weeks: ["Sem. 1", "Sem. 2", "Sem. 3", "Sem. 4"],
      listTitle: "Rendimiento por pieza",
      list: ["UGC para anuncio", "Reel de unboxing", "Historia de producto"],
    },
  },
} as const;

/* ───────────── 5. Funcionalidades (bento) ───────────── */
export const features = {
  eyebrow: "Funcionalidades",
  title: "Todo en un solo lugar,",
  // Segunda línea del titular: va completa en morado (el punto final también)
  titleAccent: "Sin WhatsApp, redes, ni Excel",
  intro:
    "Reemplaza las hojas de cálculo y los chats sueltos con una herramienta pensada para trabajar con creadores.",
  items: {
    matching: {
      title: "Matching inteligente de creadores",
      text: `Te sugerimos perfiles entre ${stats.creators.prose}, según tu marca, tu público y el tipo de contenido que buscas. Tú revisas los perfiles y eliges.`,
      brief: "Tu brief",
      creators: ["Valeria M.", "Diego R.", "Camila T."],
    },
    // [POR CONFIRMAR] cómo funciona realmente la protección del pago (mecanismo, medios de pago,
    // plazos de liberación). El texto es genérico: "se libera al aprobar el contenido".
    payments: {
      title: "Pagos protegidos",
      text: "El pago se libera al creador cuando apruebas el contenido. Tú controlas cada entrega.",
      steps: ["Pago protegido", "Contenido aprobado", "Pago liberado"],
    },
    kanban: {
      title: "Seguimiento tipo Kanban",
      text: "Mira en qué etapa está cada pieza, del brief a la aprobación, sin pedir actualizaciones.",
      columns: ["Brief", "En curso", "Listo"],
    },
    chat: {
      title: "Chat integrado",
      text: "Conversa con cada creador dentro de la campaña. Todo el contexto queda en un mismo lugar.",
      bubbles: [
        "¿Me compartes el guion antes de grabar?",
        "Claro, te lo envío hoy.",
        "Perfecto. Aprobado el guion.",
      ],
    },
    dashboards: {
      title: "Dashboards en tiempo real",
      text: "Sigue el rendimiento de cada pieza y de toda la campaña mientras sucede.",
      live: "En vivo",
    },
  },
} as const;

/* ───────────── 6. Acompañamiento consultivo ───────────── */
// Quién lo recibe: marcas con plan Pro y agencias con plan Enterprise (dato confirmado por UGConnect).
// [POR CONFIRMAR] alcance real del acompañamiento (qué incluye, frecuencia, canales, tiempos de
// respuesta) y cómo funciona el paso hacia la autonomía. Estos textos son genéricos a propósito.
export const consulting = {
  eyebrow: "Nuestro diferencial",
  title: "Acompañamiento consultivo",
  titleAccent: "para maximizar tus resultados",
  intro:
    "Un equipo de UGConnect trabaja contigo para que cada campaña rinda más: te ayuda a definir objetivos, recomienda creadores, monitorea el avance y te enseña a leer los resultados para optimizar.",
  planNote: "Incluido en el plan Pro para marcas y en el plan Enterprise para agencias.",
  planLink: "Ver planes",
  cta: "Cuéntanos tu caso",
  pillars: [
    {
      title: "Objetivos y brief",
      text: "Aterrizamos qué quieres lograr y lo convertimos en un brief claro para los creadores.",
    },
    {
      title: "Recomendación de creadores",
      text: "Proponemos perfiles que encajan con tu marca y tu público, y los revisamos contigo.",
    },
    {
      title: "Monitoreo de la campaña",
      text: "Damos seguimiento a entregas, tiempos y correcciones para que nada se quede detenido.",
    },
    {
      title: "Resultados y optimización",
      text: "Te ayudamos a leer los números y a decidir qué ajustar para que la siguiente campaña rinda más.",
    },
  ],
  // Camino hacia la autonomía: el acompañamiento no es para siempre.
  autonomy: {
    title: "Y con el tiempo,",
    titleAccent: "lo manejas tú",
    text: "El objetivo no es que dependas de nosotros: aprendes con el equipo y, cuando estés listo, usas la plataforma por tu cuenta.",
    stages: [
      { title: "Acompañado", text: "El equipo define contigo objetivos, brief y creadores." },
      { title: "Guiado", text: "Tú lideras la campaña y el equipo te orienta en las decisiones clave." },
      { title: "Autónomo", text: "Manejas la plataforma por tu cuenta y nos consultas cuando quieras." },
    ],
  },
} as const;

/* ───────────── 7. Para quién es (pestañas) ───────────── */
export const audience = {
  eyebrow: "Para quién es",
  title: "Pensado para",
  titleAccent: "marcas y agencias",
  intro: "Elige tu caso y mira cómo cambian el mensaje y el flujo de trabajo.",
  tablistLabel: "Tipo de cliente",
  cta: "Contáctanos",
  // Las marcas van primero (prioridad) y son la pestaña activa por defecto.
  tabs: [
    {
      id: "marcas",
      label: "Marcas",
      headline: "Lanza campañas con creadores",
      headlineAccent: "sin necesitar un equipo grande",
      text: "Si tu equipo de marketing es pequeño, UGConnect te da la estructura para trabajar con creadores sin armar todo desde cero: del brief a los resultados, en un solo lugar.",
      benefits: [
        "Un brief guiado para no empezar con la hoja en blanco",
        "Creadores sugeridos según tu marca y tu público",
        "Pagos protegidos: el creador cobra cuando apruebas el contenido",
        "Acompañamiento consultivo del equipo para maximizar tus resultados (plan Pro)",
      ],
      flowTitle: "Ejemplo de flujo para una marca",
      flow: [
        "Defines objetivo y presupuesto de tu campaña",
        "Eliges creadores entre los perfiles sugeridos",
        "Das seguimiento y apruebas cada pieza",
        "Revisas los resultados y decides qué mejorar",
      ],
    },
    {
      id: "agencias",
      label: "Agencias",
      headline: "Lleva las campañas de todos tus clientes",
      headlineAccent: "sin perderte entre chats y hojas de cálculo",
      text: "Si manejas varias marcas a la vez, UGConnect centraliza briefs, creadores y aprobaciones en un solo lugar.",
      benefits: [
        "Una campaña por cliente, cada una con su brief, sus creadores y sus aprobaciones",
        "Seguimiento de entregas sin perseguir a cada creador por WhatsApp",
        "Resultados por campaña a mano para mostrárselos a tu cliente",
        "Acompañamiento consultivo del equipo para maximizar resultados (plan Enterprise)",
      ],
      flowTitle: "Ejemplo de flujo para una agencia",
      flow: [
        "Recibes el brief de tu cliente",
        "Armas la campaña y eliges creadores",
        "Apruebas las piezas y coordinas correcciones",
        "Compartes los resultados con tu cliente",
      ],
    },
  ],
} as const;

/* ───────────── 8a. Clientes (OCULTA hasta tener logos reales) ─────────────
   Sección "Marcas que ya trabajan con nosotros": una tira de logos.
   Se activa con siteConfig.features.clients = true en src/site.config.ts.
   CÓMO AGREGAR CLIENTES:
     1) Guarda cada logo en public/clients/ (mejor SVG o PNG con fondo transparente, en un solo color o a color).
     2) Agrégalo abajo en `logos` con su nombre, ruta y tamaño (width/height = proporción real del archivo).
     3) Cambia `features.clients` a true.
   REGLA: solo clientes REALES que hayan autorizado mostrar su marca. Con la lista vacía no se muestra
   aunque el flag esté encendido. Con 6 o más logos se muestran en una marquesina que corre sola.
   [POR CONFIRMAR] qué clientes autorizaron mostrar su logo. */
export type ClientLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
  /** Enlace opcional al sitio del cliente (se abre en pestaña nueva). */
  href?: string;
};

export const clients: {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  logos: ClientLogo[];
} = {
  eyebrow: "Clientes",
  title: "Marcas que ya",
  titleAccent: "trabajan con nosotros",
  intro:
    "Equipos de marketing, e-commerce y marcas emergentes ya usan UGConnect para producir su contenido.",
  // Migrados desde assets/runtime-config.js del sitio anterior: son las marcas que ya estaban
  // publicadas y autorizadas. Los archivos llevan espacios en el nombre, de ahí el %20.
  logos: [
    { name: "Bungu Socks", src: "/assets/logos/small/Bungu%20Socks-120.webp", width: 120, height: 120 },
    { name: "Stanley Perú", src: "/assets/logos/small/Stanley%20Peru-120.webp", width: 120, height: 120 },
    { name: "Xipe", src: "/assets/logos/small/Xipe-120.webp", width: 120, height: 120 },
    { name: "Starbucks", src: "/assets/logos/small/Starbucks-120.webp", width: 120, height: 120 },
    { name: "Frama Shop", src: "/assets/logos/small/Frama%20Shop-120.webp", width: 120, height: 120 },
    { name: "Fiasco", src: "/assets/logos/small/Fiasco-120.webp", width: 120, height: 120 },
    { name: "Círculo Hub", src: "/assets/logos/small/Circulo%20Hub-120.webp", width: 120, height: 120 },
    { name: "Pocket Bar", src: "/assets/logos/small/Pocket%20Bar-120.webp", width: 120, height: 120 },
    { name: "Sual", src: "/assets/logos/small/Sual-120.webp", width: 120, height: 120 },
    { name: "Bange", src: "/assets/logos/small/Bange-120.webp", width: 120, height: 120 },
  ],
};

/* ───────────── 8b. Prueba social (OCULTA hasta tener datos reales) ─────────────
   Se activa con siteConfig.features.socialProof = true en src/site.config.ts.
   REGLA: cargar aquí SOLO datos verdaderos y autorizados (cifras medidas y testimonios reales con
   nombre y cargo). Mientras las listas estén vacías, la sección no se muestra aunque el flag esté encendido.
   Los logos de clientes van en la sección `clients` (arriba).
   [POR CONFIRMAR] cuándo tendremos métricas y testimonios reales. */
export type SocialMetric = { value: string; label: string };
export type SocialTestimonial = { quote: string; name: string; role: string; company: string };

export const socialProof: {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  metrics: SocialMetric[];
  testimonials: SocialTestimonial[];
} = {
  eyebrow: "Resultados",
  title: "Lo que dicen quienes",
  titleAccent: "ya trabajan con UGConnect",
  intro: "",
  metrics: [],
  testimonials: [],
};

/* ───────────── 9. Preguntas frecuentes ─────────────
   [POR CONFIRMAR] varias respuestas son genéricas a propósito: pagos (mecanismo, medios, plazos),
   alcance del acompañamiento, número de rondas de corrección, modelo comercial y cobertura. */
export const faq = {
  eyebrow: "Preguntas frecuentes",
  title: "Resolvemos",
  titleAccent: "tus dudas",
  intro: "Si no encuentras lo que buscas, escríbenos y te respondemos.",
  helpTitle: "¿Tienes otra pregunta?",
  helpText: "Cuéntanos tu caso y te ayudamos.",
  helpWhatsapp: "Escribir por WhatsApp",
  items: [
    {
      q: "¿Qué es UGConnect?",
      a: "Es una plataforma para crear y gestionar campañas con creadores de contenido (UGC) en un solo lugar: brief, selección de creadores, seguimiento, aprobación del contenido, pagos y resultados. Además, ofrecemos acompañamiento consultivo para maximizar tus resultados.",
    },
    {
      q: "¿Para quién es?",
      a: "Principalmente para marcas que quieren trabajar con creadores de forma ordenada y medible, y también para agencias de marketing digital que gestionan campañas de varios clientes. Es ideal si hoy usas WhatsApp, Excel o Notion para coordinar creadores.",
    },
    {
      q: "¿Qué es el acompañamiento consultivo y quién lo recibe?",
      a: "Es el apoyo de nuestro equipo para maximizar tus resultados: te ayudamos a definir objetivos y brief, recomendamos creadores, monitoreamos la campaña y te ayudamos a interpretar los resultados. Está incluido en el plan Pro para marcas y en el plan Enterprise para agencias, y la idea es que con el tiempo puedas usar la plataforma por tu cuenta.",
    },
    {
      q: "¿Cómo elijo a los creadores?",
      a: `Contamos con ${stats.creators.prose}. La plataforma te sugiere perfiles según tu marca, tu público y el tipo de contenido que buscas. Tú revisas los perfiles y decides. Si tu plan incluye acompañamiento, el equipo también te recomienda y lo revisan juntos.`,
    },
    {
      q: "¿Cómo funcionan los pagos?",
      a: "Los pagos están protegidos: el pago al creador se libera cuando apruebas el contenido. Contáctanos y te explicamos el proceso en detalle.",
    },
    {
      q: "¿Puedo pedir correcciones a los creadores?",
      a: "Sí. Cada pieza pasa por una etapa de revisión en el tablero, y puedes conversar con el creador en el chat integrado para pedir ajustes antes de aprobar el contenido.",
    },
    {
      q: "¿Qué planes hay?",
      a: "Tenemos planes para marcas y para agencias: desde Marketplace para campañas puntuales hasta planes mensuales con más campañas e invitaciones a creadores. Puedes ver el detalle y los precios (sin IGV) en la sección de planes, o contactarnos y te ayudamos a elegir el que mejor se adapta a ti.",
    },
    {
      q: "¿Cómo empiezo?",
      a: "Contáctanos o déjanos tus datos en el formulario. Estamos lanzando en Perú y te escribiremos para conocer tu caso. Si ya tienes cuenta, puedes iniciar sesión desde la parte superior de la página.",
    },
  ],
} as const;

/* ───────────── 10. CTA final + formulario ───────────── */
export const finalCta = {
  eyebrow: "Empieza hoy",
  title: "Hablemos de",
  titleAccent: "tu próxima campaña",
  intro:
    "Cuéntanos qué necesitas y te mostramos cómo funcionaría UGConnect en tu caso.",
  points: [
    "Revisamos tu caso y tus objetivos",
    "Te mostramos la plataforma en acción",
    "Te ayudamos a elegir el plan que mejor se adapta a ti",
  ],
  contactTitle: "¿Prefieres escribirnos?",
  emailLabel: "Escríbenos por correo",
  whatsappLabel: "Escríbenos por WhatsApp",
  form: {
    title: "Contáctanos",
    subtitle: "Déjanos tus datos y te contactamos.",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo de trabajo",
    emailPlaceholder: "tu@empresa.com",
    companyLabel: "Empresa",
    companyPlaceholder: "Nombre de tu agencia o marca",
    typeLegend: "Somos",
    // Las marcas van primero (prioridad).
    typeOptions: [
      { value: "marca", label: "Una marca" },
      { value: "agencia", label: "Una agencia" },
    ],
    messageLabel: "Mensaje (opcional)",
    messagePlaceholder: "Cuéntanos qué campaña tienes en mente",
    submit: "Contáctanos",
    sending: "Enviando…",
    // [POR CONFIRMAR] texto legal de consentimiento (Ley de Protección de Datos Personales del Perú)
    privacy: "Al enviar aceptas que usemos tus datos para contactarte sobre UGConnect. Más información en nuestra",
    privacyLink: "política de privacidad",
    errors: {
      name: "Escribe tu nombre.",
      email: "Escribe un correo válido, por ejemplo tu@empresa.com.",
      company: "Escribe el nombre de tu empresa.",
      type: "Elige si son una marca o una agencia.",
      message: "El mensaje es demasiado largo (máximo 1000 caracteres).",
    },
    failure: "No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos por correo.",
    // [POR CONFIRMAR] plazo real de respuesta del equipo
    success: {
      title: "¡Gracias, recibimos tu solicitud!",
      text: "Te escribiremos pronto al correo que nos dejaste para conversar sobre tu campaña.",
      again: "Enviar otra solicitud",
    },
  },
} as const;

/* ───────────── 11. Footer ───────────── */
export const footer = {
  description:
    "La plataforma para crear y gestionar campañas con creadores, con acompañamiento consultivo para maximizar tus resultados.",
  navTitle: "Navegación",
  links: [
    { label: "Plataforma", href: "/#plataforma" },
    { label: "Cómo funciona", href: "/#como-funciona" },
    { label: "Acompañamiento", href: "/#acompanamiento" },
    { label: "Para quién", href: "/#para-quien" },
    { label: "Planes", href: "/#planes" },
    { label: "FAQ", href: "/#faq" },
  ],
  legalTitle: "Legal",
  legal: [
    { key: "privacy", label: "Política de privacidad" },
    { key: "terms", label: "Términos para marcas y agencias" },
    { key: "termsCreators", label: "Términos para creadores" },
    { key: "cookies", label: "Política de cookies" },
  ],
  contactTitle: "Contacto",
  socialTitle: "Redes sociales",
  socialLabels: {
    linkedin: "LinkedIn",
    instagram: "Instagram",
    tiktok: "TikTok",
    youtube: "YouTube",
  },
  rights: "Todos los derechos reservados.",
  year: 2026,
} as const;

/* ───────────── Planes (dinámico: Marcas / Agencias) ─────────────
   Datos tomados de las capturas de planes que compartió UGConnect (2026-09-18).
   REGLA: el plan recomendado es SIEMPRE el que tenga id === RECOMMENDED_PLAN_ID ("growth"),
   tanto en marcas como en agencias. No marques otro como recomendado.
   Confirmado por UGConnect: todos los precios son SIN IGV; el "+" de las capturas significa "hasta";
   Marketplace = S/ 50 para lanzar la campaña + 10% del valorizado total (canje o pago monetario
   a cada creador, según cuántos creadores se quieran sumar).
   [POR CONFIRMAR]
   - A qué se aplica exactamente el "mínimo S/ 120" de Marketplace (¿al 10%?, ¿al total?).
   - Límites y condiciones de "Whitelabel" y de las invitaciones a creadores. */
export const RECOMMENDED_PLAN_ID = "growth";

export type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  /** "/mes" en los planes mensuales; vacío en Marketplace. */
  period?: string;
  /** Texto pequeño junto al precio (Marketplace). */
  priceExtra?: string;
  priceMin?: string;
  /** Explicación breve de cómo se calcula el precio (Marketplace). */
  detail?: string;
  features: string[];
  /** Incluye el acompañamiento consultivo del equipo (solo Pro y Enterprise). */
  consulting?: boolean;
  /** Texto propio del botón. Si no se indica, usa `plans.cta` ("Contáctanos"). */
  cta?: string;
  /** "create" = el botón lleva a crear la campaña (siteConfig.createCampaignUrl) en vez de a contacto. */
  action?: "create";
};

export type PlanTab = { id: string; label: string; description: string; plans: Plan[] };

const marketplace: Plan = {
  id: "marketplace",
  name: "Marketplace",
  tagline: "Para campañas puntuales",
  price: "S/ 50",
  priceExtra: "+ 10% del valorizado total",
  priceMin: "(mínimo S/ 120)",
  // Marketplace es de autoservicio: su botón invita a crear la campaña, no a contactar.
  cta: "Crea tu campaña ya",
  action: "create",
  detail:
    "Pagas S/ 50 para lanzar tu campaña, más el 10% del valorizado total: el valorizado del canje o del pago monetario a cada creador, según la cantidad de creadores con los que quieras trabajar.",
  features: [
    "Acceso a creadores que postulan",
    "Chat para coordinar",
    "Creadores ilimitados para trabajar",
  ],
};

export const plans: {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  tablistLabel: string;
  recommended: string;
  consultingLabel: string;
  cta: string;
  vatNote: string;
  footnote: string;
  tabs: PlanTab[];
} = {
  eyebrow: "Planes",
  title: "Elige el plan que se adapta",
  titleAccent: "a tu forma de trabajar",
  intro:
    "Empieza con campañas puntuales o elige un plan mensual para trabajar con creadores de forma continua.",
  tablistLabel: "Tipo de plan",
  recommended: "Recomendado",
  consultingLabel: "Incluye acompañamiento consultivo",
  cta: "Contáctanos",
  vatNote: "Precio sin IGV",
  footnote: "Todos los precios están en soles peruanos (S/) y no incluyen IGV.",
  tabs: [
    {
      id: "marcas",
      label: "Marcas",
      description: "Para marcas que quieren trabajar con creadores de forma ordenada y medible.",
      plans: [
        marketplace,
        {
          id: "growth",
          name: "Growth",
          tagline: "Para marcas consolidando campañas con creadores",
          price: "S/ 349.99",
          period: "/mes",
          features: ["Hasta 5 campañas", "Hasta 2 ejecutivos", "20 invitaciones a creadores a tus campañas"],
        },
        {
          id: "pro",
          name: "Pro",
          tagline: "Para marcas con un sistema de creadores de contenido",
          price: "S/ 499.99",
          period: "/mes",
          features: ["Hasta 10 campañas", "Hasta 5 ejecutivos", "100 invitaciones a creadores", "Whitelabel"],
          consulting: true,
        },
      ],
    },
    {
      id: "agencias",
      label: "Agencias",
      description: "Para agencias que gestionan campañas con creadores para varias marcas.",
      plans: [
        marketplace,
        {
          id: "growth",
          name: "Agencia Growth",
          tagline: "Para agencias en pleno crecimiento de cartera",
          price: "S/ 899.99",
          period: "/mes",
          features: [
            "Hasta 6 marcas clientes",
            "Hasta 6 campañas por marca",
            "Hasta 3 ejecutivos",
            "20 invitaciones a creadores por marca",
          ],
        },
        {
          id: "enterprise",
          name: "Agencia Enterprise",
          tagline: "Para grandes corporaciones y agencias consolidadas",
          price: "S/ 1,199.99",
          period: "/mes",
          features: [
            "Marcas ilimitadas",
            "Campañas ilimitadas",
            "Hasta 10 ejecutivos",
            "Invitaciones a creadores ilimitadas",
            "Whitelabel",
          ],
          consulting: true,
        },
      ],
    },
  ],
};
