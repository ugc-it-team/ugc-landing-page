import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Bridge } from "@/components/sections/Bridge";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Consulting } from "@/components/sections/Consulting";
import { Audience } from "@/components/sections/Audience";
import { Clients } from "@/components/sections/Clients";
import { SocialProof } from "@/components/sections/SocialProof";
import { Plans } from "@/components/sections/Plans";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsapp } from "@/components/ui/FloatingWhatsapp";
import { siteConfig } from "@/site.config";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Bridge />
        <HowItWorks />
        <Features />
        <Consulting />
        <Audience />
        {/* Clientes (logos): las 10 marcas migradas del sitio anterior (site.config.ts → features.clients) */}
        {siteConfig.features.clients && <Clients />}
        {/* Prueba social: oculta hasta tener datos reales (site.config.ts → features.socialProof) */}
        {siteConfig.features.socialProof && <SocialProof />}
        <Plans />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
