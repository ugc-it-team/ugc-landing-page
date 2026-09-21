import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ChartVisual,
  ChatVisual,
  KanbanVisual,
  MatchingVisual,
  PaymentVisual,
} from "@/components/mockups/BentoVisuals";
import { features } from "@/content/es";
import { cn } from "@/lib/cn";

type CardProps = {
  title: string;
  text: string;
  visual: React.ReactNode;
  className?: string;
  /** "brand" = tarjeta morada (texto blanco). */
  tone?: "light" | "brand";
  /** Tarjeta ancha: texto a la izquierda y visual a la derecha desde md. */
  wide?: boolean;
  delay?: number;
};

function FeatureCard({ title, text, visual, className, tone = "light", wide, delay = 0 }: CardProps) {
  const brand = tone === "brand";
  return (
    <Reveal delay={delay} className={cn("h-full", className)}>
      <article
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 sm:p-8",
          brand
            ? "border-brand-600 bg-brand-500 text-white hover:shadow-[0_34px_60px_-26px_rgba(110,67,132,0.8)]"
            : "border-brand-100 bg-white hover:shadow-[0_34px_60px_-30px_rgba(110,67,132,0.5)]",
          wide && "md:flex-row md:items-center md:gap-8",
        )}
      >
        <div className={cn(wide && "md:w-[38%] md:shrink-0")}>
          <h3 className={cn("font-display text-xl font-bold leading-snug sm:text-2xl", brand ? "text-white" : "text-ink")}>
            {title}
          </h3>
          <p className={cn("mt-3 text-[0.95rem] leading-relaxed", brand ? "text-white/85" : "text-muted")}>
            {text}
          </p>
        </div>
        <div className={wide ? "mt-7 min-w-0 md:mt-0 md:flex-1" : "mt-auto pt-7"}>{visual}</div>
      </article>
    </Reveal>
  );
}

export function Features() {
  const it = features.items;
  return (
    <section id="funcionalidades" aria-labelledby="funcionalidades-title" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={features.eyebrow}
          title={features.title}
          accent={features.titleAccent}
          intro={features.intro}
          titleId="funcionalidades-title"
        />

        {/* Grilla bento: 3 columnas en escritorio */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            className="md:col-span-2"
            wide
            title={it.matching.title}
            text={it.matching.text}
            visual={<MatchingVisual />}
          />
          {/* [POR CONFIRMAR] cómo se protege y libera el pago (mecanismo, medios de pago, plazos) */}
          <FeatureCard
            tone="brand"
            delay={0.08}
            title={it.payments.title}
            text={it.payments.text}
            visual={<PaymentVisual />}
          />
          <FeatureCard title={it.kanban.title} text={it.kanban.text} visual={<KanbanVisual />} delay={0.04} />
          <FeatureCard title={it.chat.title} text={it.chat.text} visual={<ChatVisual />} delay={0.12} />
          <FeatureCard title={it.dashboards.title} text={it.dashboards.text} visual={<ChartVisual />} delay={0.2} />
        </div>
      </Container>
    </section>
  );
}
