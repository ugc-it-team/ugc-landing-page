import localFont from "next/font/local";

/**
 * Fuentes del branding oficial de UGConnect (Garet + Poppins), auto-hospedadas.
 *
 * Sustituyen a Montserrat + Inter, que eran las de la plantilla. Los archivos vienen del
 * design system del sitio anterior (`docs/design-system/`), subseteados al rango latino
 * y convertidos a woff2: Poppins pasó de 156 KB por peso en TTF a ~9 KB.
 *
 * Garet solo existe en dos pesos reales (Book y Heavy). Heavy se declara para 700 y 800
 * para que los titulares en negrita no salgan sintetizados por el navegador.
 */

export const garet = localFont({
  src: [
    { path: "../fonts/Garet-Book.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Garet-Heavy.woff2", weight: "700", style: "normal" },
    { path: "../fonts/Garet-Heavy.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-garet",
  display: "swap",
});

export const poppins = localFont({
  src: [
    { path: "../fonts/Poppins-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Poppins-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Poppins-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Poppins-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/Poppins-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});
