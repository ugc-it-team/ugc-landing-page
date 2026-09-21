# UGConnect — Landing page

Sitio público de [ugconnect.pe](https://ugconnect.pe). Next.js 16 (App Router, TypeScript,
Tailwind v4), sin backend: no llama a ningún servicio ni necesita variables de entorno.

## Desarrollo

```bash
npm ci
npm run dev
```

## Estructura

```
src/app/            rutas (App Router). La home es una sola página; /legal/[slug] los legales
src/components/     sections/ (bloques de la home) · ui/ · mockups/ · legal/ · forms/
src/content/es.ts   TODO el copy de la home. Los componentes no llevan texto
src/content/legal/  los tres documentos legales en MDX + registry.ts
src/site.config.ts  dominio, contacto, URLs y feature flags
src/fonts/          Garet y Poppins, subseteadas al rango latino
docs/design-system/ tokens de color originales del branding (referencia, no se sirven)
```

Para cambiar textos, precios o enlaces: `src/content/es.ts` y `src/site.config.ts`. No hace
falta tocar componentes.

## Documentos legales

Viven en `src/content/legal/*.mdx` y se renderizan con `/legal/[slug]`. El registro
(`registry.ts`) es el único origen de verdad: de ahí salen las rutas, los metadatos y el índice
lateral de cada documento.

**Las URLs publicadas no se pueden cambiar.** Son estas, y así deben seguir respondiendo:

| URL | Respuesta |
|---|---|
| `/legal/privacy-policy/` | 200 |
| `/legal/terminos-creadores-ugconnect.html` | 200 |
| `/legal/terminos-marcas-agencias-ugconnect.html` | 200 |
| `/legal/pryvacy-policy/` | 308 → privacy-policy |

Next normaliza la barra final y trata como archivo cualquier ruta cuyo último segmento lleve un
punto, así que `skipTrailingSlashRedirect` y los `rewrites` de `next.config.ts` son los que las
mantienen vivas. Si tocas esa config, comprueba las cuatro con `curl -I` contra `npm start`
(no contra `npm run dev`, que normaliza distinto).

Importan porque están indexadas y porque son las que se registran como **URL properties** en
TikTok for Developers: romperlas obliga a volver a verificar la propiedad del dominio.

Los ids de los `<h2>` están escritos a mano en el MDX y varios llevan tilde. Son enlaces
profundos ya publicados: no los "limpies" ni añadas `rehype-slug`.

## Verificación de TikTok

Pendiente de completar. Hace falta:

1. Verificar el dominio en TikTok for Developers → URL properties. Recomendado el registro
   **DNS TXT**, que cubre `ugconnect.pe` y sus subdominios de una vez. La alternativa es el
   archivo de firma, que iría en `public/` y se serviría solo.
2. Registrar como URL properties la home, la política de privacidad y los términos.
3. Rellenar `siteConfig.company` (razón social, RUC y domicilio fiscal). Mientras esté vacío el
   footer no muestra el bloque: TikTok rechaza apps con datos incompletos o inventados, así que
   es preferible no mostrarlos a mostrarlos mal.

## Despliegue

Railway, construyendo desde el `Dockerfile` (`railway.json` fija el builder; los otros proyectos
del stack usan Nixpacks, este no, porque la imagen lleva nginx además de Node).

Imagen Docker con nginx al frente y Next en modo `standalone` detrás. nginx escucha en `${PORT}`
(lo inyecta Railway) y sirve `/_next/static` y `/assets` desde disco con caché inmutable; el resto
va por proxy a Node en el 3000.

```bash
docker build -t ugc-landing .
docker run -e PORT=8080 -p 8080:8080 ugc-landing
```

El healthcheck apunta a `/`, que pasa por el proxy hasta Next a propósito: si solo comprobara algo
servido por nginx, un Next caído daría 502 con el healthcheck en verde. Por la misma razón, el
entrypoint tumba el contenedor entero si el proceso de Node muere, en vez de dejar a nginx sirviendo
errores.

A diferencia del sitio anterior, ahora hay una etapa de build (`npm ci` + `next build`), que tarda
unos minutos y necesita ≥2 GB de RAM en el builder. Conviene comprobar ese límite antes del primer
despliegue.

## Rendimiento

Es una landing: el peso importa. Al cambiar algo, compruébalo.

- El logo animado del hero es **vídeo**, no GIF. El GIF original pesaba 1.7 MB y se cargaba con
  prioridad alta encima del pliegue; en WebM son 41 KB. No vuelvas a meter un GIF ahí.
- Las fuentes están subseteadas al rango latino y solo con los pesos que se usan (87 KB en total,
  frente a los ~360 KB que pesaban los TTF sin subsetear). Si añades un peso, subsetéalo.
- `MotionProvider` usa `LazyMotion` con `domAnimation`. **No uses `layoutId` ni `layout`**: eso
  obliga a cargar `domMax`, que es bastante más pesado. El indicador de `SegmentedTabs` se
  desliza con CSS justamente por eso, y `strict` hace que usar `motion.*` en vez de `m.*` falle.
- `Reveal` es IntersectionObserver + CSS, no motion: envuelve casi todos los bloques de la
  página y arrastrar la librería hasta ahí costaba más de lo que vale el efecto.

## Nota sobre las fuentes

Garet es una fuente propietaria auto-hospedada (ya lo estaba en el sitio anterior). Conviene
confirmar que la licencia cubre su uso en `ugconnect.pe`.
