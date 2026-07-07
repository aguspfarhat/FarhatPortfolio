"use client";

import { MapPin } from "lucide-react";
import Reveal from "../Reveal";
import { profile } from "../../lib/content";
import { useLang } from "../../lib/i18n";

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="scroll-mt-20 border-t border-line bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="eyebrow tabular-nums">02</span>
                <span aria-hidden className="h-px w-8 bg-line-strong" />
                <span className="eyebrow">{a.eyebrow}</span>
              </div>
              <h2 className="text-h2 mt-5 text-ink">{a.title}</h2>
            </Reveal>

            <div className="mt-7 space-y-5">
              {a.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
              {a.traits.map((trait) => (
                <span
                  key={trait}
                  className="rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-sm text-ink-soft"
                >
                  {trait}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-canvas p-2 shadow-card">
              <div className="relative overflow-hidden rounded-xl border border-line bg-ink px-6 py-8 text-white">
                <div aria-hidden className="absolute inset-0 bg-dot opacity-[0.15]" />
                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/50">
                      {a.role}
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight">{profile.name}</p>
                    <p className="mt-1.5 flex items-center gap-1.5 text-sm text-white/60">
                      <MapPin className="h-3.5 w-3.5" />
                      {profile.location}
                    </p>
                  </div>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 font-mono text-xl font-semibold">
                    APF
                  </span>
                </div>
              </div>

              <dl className="divide-y divide-line-soft px-4">
                {a.facts.map((f) => (
                  <div
                    key={f.label}
                    className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <dt className="eyebrow shrink-0">{f.label}</dt>
                    <dd className="text-sm text-ink-soft sm:text-right">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
