"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { IconCheck } from "@/components/ui/icons";
import { finalCta } from "@/content/es";
import { siteConfig } from "@/site.config";
import {
  emptyLead,
  LEAD_FIELDS,
  submitLead,
  validateField,
  validateLead,
  type LeadErrors,
  type LeadField,
  type LeadType,
  type LeadValues,
} from "@/lib/lead";
import { cn } from "@/lib/cn";

const f = finalCta.form;

const inputBase =
  "w-full rounded-xl border bg-white px-4 text-base text-ink transition-[border-color,box-shadow] duration-200 placeholder:text-[#736e7c] focus:outline-none focus:ring-4";
const inputOk = "border-ink/15 focus:border-brand-600 focus:ring-brand-600/20";
const inputBad = "border-red-600 focus:border-red-600 focus:ring-red-600/20";

/**
 * Formulario de contacto con validación en el navegador y estado de éxito simulado.
 * El envío real se conecta en src/lib/lead.ts (ahí está la explicación para HubSpot / servicios de formularios).
 */
export function LeadForm() {
  const [values, setValues] = useState<LeadValues>(emptyLead);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [touched, setTouched] = useState<Partial<Record<LeadField, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  // Al terminar el envío, el foco pasa al mensaje de éxito (lectores de pantalla lo anuncian)
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const update = <K extends keyof LeadValues>(key: K, value: LeadValues[K]) => {
    const next = { ...values, [key]: value };
    setValues(next);
    if (key !== "website" && touched[key as LeadField]) {
      setErrors((prev) => ({ ...prev, [key]: validateField(key as LeadField, next) }));
    }
  };

  const onBlur = (field: LeadField) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, values) }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    const found = validateLead(values);
    setErrors(found);
    setTouched({ name: true, email: true, company: true, type: true, message: true });

    const firstBad = LEAD_FIELDS.find((k) => found[k]);
    if (firstBad) {
      const target = {
        name: nameRef,
        email: emailRef,
        company: companyRef,
        type: typeRef,
        message: messageRef,
      }[firstBad];
      target.current?.focus();
      return;
    }

    setStatus("sending");
    const res = await submitLead(values);
    setStatus(res.ok ? "success" : "error");
  };

  const reset = () => {
    setValues(emptyLead);
    setErrors({});
    setTouched({});
    setStatus("idle");
  };

  const shell = "rounded-[1.75rem] bg-white p-6 text-ink shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)] sm:p-9";

  if (status === "success") {
    return (
      <div className={shell} role="status">
        <div className="flex flex-col items-center py-8 text-center">
          <motion.span
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="flex size-16 items-center justify-center rounded-full bg-brand-600 text-white shadow-[0_14px_30px_-10px_rgba(93,41,120,0.9)]"
          >
            <IconCheck className="size-8" />
          </motion.span>
          <h3
            ref={successRef}
            tabIndex={-1}
            className="mt-6 font-display text-2xl font-extrabold text-ink outline-none"
          >
            {f.success.title}
          </h3>
          <p className="mt-3 max-w-sm text-base leading-relaxed text-muted">{f.success.text}</p>
          <div className="mt-7">
            <Button variant="secondary" onClick={reset}>
              {f.success.again}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const describedBy = (field: LeadField) => (errors[field] ? `error-${field}` : undefined);
  const errorText = (field: LeadField) =>
    errors[field] ? (
      <p id={`error-${field}`} className="mt-1.5 text-sm font-medium text-red-700">
        {errors[field]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className={shell} aria-labelledby="form-title">
      <h3 id="form-title" className="font-display text-2xl font-extrabold text-ink">
        {f.title}
        <span aria-hidden className="text-brand-600">
          .
        </span>
      </h3>
      <p className="mt-1.5 text-sm text-muted">{f.subtitle}</p>

      <div className="mt-6 grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="lead-name" className="mb-1.5 block text-sm font-semibold text-ink">
              {f.nameLabel}
            </label>
            <input
              ref={nameRef}
              id="lead-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder={f.namePlaceholder}
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              onBlur={() => onBlur("name")}
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={describedBy("name")}
              className={cn(inputBase, "h-12", errors.name ? inputBad : inputOk)}
            />
            {errorText("name")}
          </div>
          <div>
            <label htmlFor="lead-email" className="mb-1.5 block text-sm font-semibold text-ink">
              {f.emailLabel}
            </label>
            <input
              ref={emailRef}
              id="lead-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder={f.emailPlaceholder}
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              onBlur={() => onBlur("email")}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={describedBy("email")}
              className={cn(inputBase, "h-12", errors.email ? inputBad : inputOk)}
            />
            {errorText("email")}
          </div>
        </div>

        <div>
          <label htmlFor="lead-company" className="mb-1.5 block text-sm font-semibold text-ink">
            {f.companyLabel}
          </label>
          <input
            ref={companyRef}
            id="lead-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder={f.companyPlaceholder}
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            onBlur={() => onBlur("company")}
            aria-invalid={errors.company ? true : undefined}
            aria-describedby={describedBy("company")}
            className={cn(inputBase, "h-12", errors.company ? inputBad : inputOk)}
          />
          {errorText("company")}
        </div>

        <fieldset aria-describedby={describedBy("type")}>
          <legend className="mb-1.5 text-sm font-semibold text-ink">{f.typeLegend}</legend>
          <div className="grid grid-cols-2 gap-3">
            {f.typeOptions.map((opt, i) => (
              <label
                key={opt.value}
                className={cn(
                  "flex h-12 cursor-pointer items-center justify-center rounded-xl border bg-white px-3 text-sm font-semibold text-ink transition-[border-color,background-color,box-shadow] duration-200",
                  "hover:border-brand-300 has-[:checked]:border-brand-600 has-[:checked]:bg-brand-50 has-[:checked]:text-brand-700 has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-brand-600/25",
                  errors.type ? "border-red-600" : "border-ink/15",
                )}
              >
                <input
                  ref={i === 0 ? typeRef : undefined}
                  type="radio"
                  name="type"
                  value={opt.value}
                  checked={values.type === opt.value}
                  onChange={() => {
                    update("type", opt.value as LeadType);
                    setTouched((t) => ({ ...t, type: true }));
                  }}
                  className="sr-only"
                />
                {opt.label}
              </label>
            ))}
          </div>
          {errorText("type")}
        </fieldset>

        <div>
          <label htmlFor="lead-message" className="mb-1.5 block text-sm font-semibold text-ink">
            {f.messageLabel}
          </label>
          <textarea
            ref={messageRef}
            id="lead-message"
            name="message"
            rows={4}
            placeholder={f.messagePlaceholder}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            onBlur={() => onBlur("message")}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={describedBy("message")}
            className={cn(inputBase, "resize-y py-3", errors.message ? inputBad : inputOk)}
          />
          {errorText("message")}
        </div>

        {/* Campo trampa anti-spam: oculto para personas, los bots suelen llenarlo */}
        <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Sitio web
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={(e) => update("website", e.target.value)}
            />
          </label>
        </div>

        <div aria-live="polite">
          {status === "error" && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800">{f.failure}</p>
          )}
        </div>

        <Button type="submit" size="lg" disabled={status === "sending"} className="w-full">
          {status === "sending" ? f.sending : f.submit}
        </Button>

        <p className="text-center text-xs leading-relaxed text-muted">
          {f.privacy}{" "}
          <a
            href={siteConfig.legal.privacy}
            className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-600"
          >
            {f.privacyLink}
          </a>
          .
        </p>
      </div>
    </form>
  );
}
