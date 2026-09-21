import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // El contenedor corre `node server.js` detrás de nginx; standalone recorta node_modules
  // al mínimo trazado. Ojo: no copia public/ ni .next/static — el Dockerfile lo hace a mano.
  output: "standalone",

  images: {
    formats: ["image/avif", "image/webp"],
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

export default nextConfig;
