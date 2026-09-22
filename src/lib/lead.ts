import { finalCta } from "@/content/es";
import { siteConfig } from "@/site.config";

/**
 * ÚNICO LUGAR donde se validan y envían los datos del formulario de contacto.
 * Hoy el envío es SIMULADO (no sale ningún dato de la página).
 *
 * Para conectarlo más adelante tienes dos caminos:
 *
 * 1) Servicio de formularios (Formspree, Getform, Basin, etc.):
 *    pega su URL en `form.endpoint` de src/site.config.ts. Desde ese momento este archivo
 *    enviará los datos por POST (JSON) a esa URL, sin tocar nada más.
 *
 * 2) HubSpot (Forms API): en `submitLead`, cambia la rama del `endpoint` por
 *      POST https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}
 *    con el cuerpo { fields: [{ name: "firstname", value }, { name: "email", value }, ...] }.
 *    Los nombres de campo (firstname, email, company, message…) se ajustan a los del formulario
 *    de HubSpot. [POR CONFIRMAR] portalId, formGuid y nombres de campo.
 */

export type LeadType = "agencia" | "marca";

export type LeadValues = {
  name: string;
  email: string;
  company: string;
  type: LeadType | "";
  message: string;
  /** Trampa anti-spam: es un campo oculto que una persona real nunca llena. */
  website: string;
};

export type LeadField = "name" | "email" | "company" | "type" | "message";
export type LeadErrors = Partial<Record<LeadField, string>>;

export const LEAD_FIELDS: LeadField[] = ["name", "email", "company", "type", "message"];

export const emptyLead: LeadValues = {
  name: "",
  email: "",
  company: "",
  type: "",
  message: "",
  website: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Devuelve el error de un solo campo (o undefined si está bien). */
export function validateField(field: LeadField, values: LeadValues): string | undefined {
  const e = finalCta.form.errors;
  switch (field) {
    case "name":
      return values.name.trim().length < 2 ? e.name : undefined;
    case "email":
      return EMAIL_RE.test(values.email.trim()) ? undefined : e.email;
    case "company":
      return values.company.trim().length < 2 ? e.company : undefined;
    case "type":
      return values.type ? undefined : e.type;
    case "message":
      return values.message.length > 1000 ? e.message : undefined;
  }
}

export function validateLead(values: LeadValues): LeadErrors {
  const errors: LeadErrors = {};
  for (const f of LEAD_FIELDS) {
    const err = validateField(f, values);
    if (err) errors[f] = err;
  }
  return errors;
}

export type SubmitResult = { ok: true } | { ok: false };

export async function submitLead(values: LeadValues): Promise<SubmitResult> {
  // Anti-spam: si el campo trampa viene lleno, fingimos éxito y no enviamos nada.
  if (values.website.trim() !== "") return { ok: true };

  const payload = {
    name: values.name.trim(),
    email: values.email.trim(),
    company: values.company.trim(),
    type: values.type,
    message: values.message.trim(),
    source: "landing",
  };

  const endpoint = siteConfig.form.endpoint;

  if (!endpoint) {
    // SIMULADO: espera un momento y responde "ok". No se envía ni se guarda nada.
    await new Promise((resolve) => setTimeout(resolve, 900));
    return { ok: true };
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok ? { ok: true } : { ok: false };
  } catch {
    return { ok: false };
  }
}
