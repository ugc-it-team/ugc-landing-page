import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function LegalLayout({ children }: LayoutProps<"/legal">) {
  return (
    <>
      <Navbar />
      <main id="contenido">{children}</main>
      <Footer />
    </>
  );
}
