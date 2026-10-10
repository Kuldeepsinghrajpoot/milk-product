"use client";

import WhatsAppIcon from "./WhatsAppIcon";
import { useRef, useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/data";

type Form = { name: string; phone: string; email: string; city: string; type: string; volume: string; message: string };
type Errors = Partial<Record<keyof Form, string>>;

const INIT: Form = { name: "", phone: "", email: "", city: "", type: "Distributor & Agency", volume: "", message: "" };
const TYPES = ["Distributor & Agency", "Retail stocking", "Bulk supply", "Other"];

const cleanPhone = (p: string) => p.replace(/[\s-]/g, "").replace(/^(\+91|91|0)/, "");

function validate(v: Form): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[6-9]\d{9}$/.test(cleanPhone(v.phone))) e.phone = "Enter a valid 10-digit mobile number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Enter a valid email address.";
  if (v.city.trim().length < 2) e.city = "Please enter your city.";
  if (v.volume.trim() && !/^\d+(\.\d+)?$/.test(v.volume.trim())) e.volume = "Numbers only, for example 200.";
  return e;
}

function Field({ k, label, required, error, children }: { k: keyof Form; label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div className={k === "message" ? "full" : ""}>
      <label className="fl2" htmlFor={`f-${k}`}>{label}{required && <span className="req" aria-hidden="true"> *</span>}</label>
      {children}
      {error && <p className="err" id={`e-${k}`} role="alert">{error}</p>}
    </div>
  );
}

export default function ContactForm() {
  const [v, setV] = useState<Form>(INIT);
  const [touched, setTouched] = useState<Partial<Record<keyof Form, boolean>>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [hp, setHp] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const errors = validate(v);
  const show = (k: keyof Form) => (touched[k] ? errors[k] : undefined);
  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setV({ ...v, [k]: e.target.value });
  const blur = (k: keyof Form) => () => setTouched({ ...touched, [k]: true });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    const keys = Object.keys(INIT) as (keyof Form)[];
    setTouched(Object.fromEntries(keys.map((k) => [k, true])));
    const first = keys.find((k) => errors[k]);
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: v.name.trim(),
          phone: `+91 ${cleanPhone(v.phone)}`,
          email: v.email.trim(),
          city: v.city.trim(),
          type: v.type,
          volume: v.volume.trim(),
          message: v.message.trim(),
          company_website: hp,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) throw new Error(json.error || "Something went wrong. Please try again.");
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const aria = (k: keyof Form) => ({ id: `f-${k}`, name: k, "aria-invalid": show(k) ? true : undefined, "aria-describedby": show(k) ? `e-${k}` : undefined }) as const;

  if (sent) {
    return (
      <div className="fm2">
        <div className="okbox" role="status">
          <b>Thank you, {v.name.trim().split(" ")[0]}!</b>
          <p>Your enquiry has been sent to our team. We will get back to you soon.</p>
        </div>
        <div className="frow">
          <a className="btn wa" href={`https://wa.me/${SITE.wa}`} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />Chat on WhatsApp</a>
          <button type="button" className="btn line" onClick={() => { setSent(false); setV(INIT); setTouched({}); }}>Send another enquiry</button>
        </div>
      </div>
    );
  }

  return (
    <form className="fm2" ref={formRef} onSubmit={submit} noValidate>
      <h3 className="fm-t">Send us an enquiry</h3>
      <p className="fm-s">Fields marked <span className="req">*</span> are required.</p>
      <div className="fg2">
        <Field k="name" error={show("name")} label="Full name" required>
          <input className="in" type="text" autoComplete="name" placeholder="Your name" value={v.name} onChange={set("name")} onBlur={blur("name")} {...aria("name")} />
        </Field>
        <Field k="phone" error={show("phone")} label="Mobile number" required>
          <input className="in" type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" value={v.phone} onChange={set("phone")} onBlur={blur("phone")} {...aria("phone")} />
        </Field>
        <Field k="email" error={show("email")} label="Email" required>
          <input className="in" type="email" autoComplete="email" placeholder="you@example.com" value={v.email} onChange={set("email")} onBlur={blur("email")} {...aria("email")} />
        </Field>
        <Field k="city" error={show("city")} label="City" required>
          <input className="in" type="text" autoComplete="address-level2" placeholder="Your city" value={v.city} onChange={set("city")} onBlur={blur("city")} {...aria("city")} />
        </Field>
        <Field k="type" error={show("type")} label="Enquiry for" required>
          <select className="in" value={v.type} onChange={set("type")} {...aria("type")}>
            {TYPES.map((t) => (<option key={t}>{t}</option>))}
          </select>
        </Field>
        <Field k="volume" error={show("volume")} label="Expected volume (litres per day)">
          <input className="in" type="text" inputMode="decimal" placeholder="e.g. 200" value={v.volume} onChange={set("volume")} onBlur={blur("volume")} {...aria("volume")} />
        </Field>
        <Field k="message" error={show("message")} label="Message (optional)">
          <textarea className="in" rows={4} placeholder="Tell us a little about your shop or requirement" value={v.message} onChange={set("message")} {...aria("message")} />
        </Field>
      </div>
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
        <label>Company website<input type="text" name="company_website" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} /></label>
      </div>
      {error && <p className="err" role="alert">{error}</p>}
      <p className="consent">By sending, you agree to be contacted by email, WhatsApp or phone about your enquiry. See our <Link href="/privacy">Privacy Policy</Link>.</p>
      <div className="frow">
        <button className="btn wa" type="submit" disabled={sending}>{sending ? "Sending..." : "Send enquiry"}</button>
        <a className="btn line" href={`tel:${SITE.tel}`}>Call us instead</a>
      </div>
    </form>
  );
}
