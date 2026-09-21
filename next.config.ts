import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // El contenedor corre `node server.js` detrás de nginx; standalone recorta node_modules
  // al mínimo trazado. Ojo: no copia public/ ni .next/static — el Dockerfile lo hace a mano.
  output: "standalone",

  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Next normaliza la barra final y, si el último segmento tiene un punto, lo trata como
  // archivo. Con el comportamiento por defecto, /legal/privacy-policy/ se va en 308 y las
  // dos URLs .html dan 404. Aquí se apaga para servirlas tal cual las piden.
  skipTrailingSlashRedirect: true,

  // Las URLs legales publicadas no pueden cambiar: están indexadas y son las que se
  // registran como URL properties en TikTok for Developers, donde romperlas obliga a
  // volver a verificar el dominio. Se mapean a la ruta interna sirviendo 200, sin redirigir.
  // La lista canónica vive en src/content/legal/registry.ts (campo legacyPath).
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/legal/privacy-policy/", destination: "/legal/privacy-policy" },
        {
          source: "/legal/terminos-creadores-ugconnect.html",
          destination: "/legal/terminos-creadores-ugconnect",
        },
        {
          source: "/legal/terminos-marcas-agencias-ugconnect.html",
          destination: "/legal/terminos-marcas-agencias-ugconnect",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },

  // El sitio anterior capturaba el typo con un <meta http-equiv="refresh">.
  // Un 308 real es mejor para los rastreadores.
  async redirects() {
    return [
      { source: "/legal/pryvacy-policy", destination: "/legal/privacy-policy/", permanent: true },
      { source: "/legal/pryvacy-policy/", destination: "/legal/privacy-policy/", permanent: true },
    ];
  },

  // Cuando se muestren imágenes que vengan del backend (por ejemplo, fotos de creadores con next/image),
  // hay que autorizar el dominio donde están alojadas. Descomentar y ajustar:
  //
  // images: {
  //   remotePatterns: [
  //     { protocol: "https", hostname: "cdn.ugconnect.pe", pathname: "/creators/**" },
  //   ],
  // },
};

// Sin plugins de remark/rehype: los documentos legales traen los ids de sus <h2>
// escritos a mano porque son enlaces profundos ya publicados. rehype-slug los
// regeneraria distintos y romperia el indice lateral.
const withMDX = createMDX({});

export default withMDX(nextConfig);
