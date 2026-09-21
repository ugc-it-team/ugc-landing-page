import type { Metadata, Viewport } from "next";
import "./globals.css";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { garet, poppins } from "@/lib/fonts";
import { siteConfig } from "@/site.config";
import { meta } from "@/content/es";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: meta.title,
  description: meta.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/",
    siteName: siteConfig.name,
    title: meta.title,
    description: meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
  // El favicon (icon.png), apple-icon.png y las imágenes de redes
  // (opengraph-image.png / twitter-image.png) se toman de src/app por convención.
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-PE"
      data-scroll-behavior="smooth"
      className={`${garet.variable} ${poppins.variable}`}
    >
      <body className="min-h-screen bg-white font-sans text-ink antialiased">
        <a
          href="#contenido"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white focus:translate-y-0"
        >
          Saltar al contenido
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
