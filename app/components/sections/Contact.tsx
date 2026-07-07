"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Loader2, Mail } from "lucide-react";
import { profile, socials } from "../../lib/content";
import { useLang } from "../../lib/i18n";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const f = c.form;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setError(data.message || f.errGeneric);
      }
    } catch {
      setStatus("error");
      setError(f.errNetwork);
    }
  };

  const sending = status === "sending";

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden bg-night text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />
        <div className="absolute -left-40 top-0 h-[400px] w-[600px] rounded-full bg-accent/20 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="eyebrow tabular-nums text-ghost">05</span>
              <span aria-hidden className="h-px w-8 bg-night-line" />
              <span className="eyebrow text-ghost">{c.eyebrow}</span>
            </div>
            <h2 className="text-h2 mt-5 max-w-md text-white">{c.heading}</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/60 sm:text-lg">{c.body}</p>

            <div className="mt-10 space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-night-line bg-white/[0.02] p-4 transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.04]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-night-line bg-white/5 text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-white/40">{c.emailLabel}</span>
                  <span className="block truncate text-sm text-white">{profile.email}</span>
                </span>
                <ArrowUpRight className="ml-auto h-4 w-4 text-white/40 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <div className="flex flex-wrap gap-2">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-night-line bg-white/[0.02] px-4 py-2 text-sm text-white/70 transition-colors duration-200 hover:border-white/25 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-night-line bg-white/[0.02] p-6 backdrop-blur sm:p-8">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex min-h-[320px] flex-col items-center justify-center text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                  <Check className="h-7 w-7" strokeWidth={2.5} />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">{f.sentTitle}</h3>
                <p className="mt-2 max-w-xs text-sm text-white/60">{f.sentBody}</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-white/60 underline underline-offset-4 transition-colors hover:text-white"
                >
                  {f.another}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Field label={f.name} name="name" type="text" value={form.name} onChange={handleChange} placeholder={f.namePh} autoComplete="name" />
                <Field label={f.email} name="email" type="email" value={form.email} onChange={handleChange} placeholder={f.emailPh} autoComplete="email" />
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-white/70">
                    {f.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder={f.messagePh}
                    className="w-full resize-none rounded-xl border border-night-line bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 transition-colors duration-200 focus:border-white/40 focus:outline-none focus:ring-0"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {sending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {f.sending}
                    </>
                  ) : (
                    <>
                      {f.send}
                      <ArrowUpRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p
                  aria-live="polite"
                  className={`min-h-[1.25rem] text-center text-sm ${status === "error" ? "text-red-400" : "text-white/40"}`}
                >
                  {status === "error" ? error : c.replies}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-white/70">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-night-line bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 transition-colors duration-200 focus:border-white/40 focus:outline-none focus:ring-0"
      />
    </div>
  );
}
