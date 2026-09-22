import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalShell } from "@/components/legal/LegalShell";
import { getLegalDoc, legalDocs } from "@/content/legal/registry";

export function generateStaticParams() {
  return legalDocs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/legal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) return {};

  return {
    title: doc.title,
    description: doc.description,
    // El canonical apunta a la URL legacy (con barra final o con .html), no a la ruta
    // interna de Next: es la que está publicada, indexada y registrada en TikTok.
    alternates: { canonical: doc.legacyPath },
    openGraph: {
      type: "article",
      url: doc.legacyPath,
      title: doc.title,
      description: doc.description,
    },
  };
}

export default async function LegalPage({ params }: PageProps<"/legal/[slug]">) {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) notFound();

  const { default: Document } = await doc.load();

  return (
    <LegalShell doc={doc}>
      <Document />
    </LegalShell>
  );
}
