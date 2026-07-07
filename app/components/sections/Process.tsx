"use client";

import SectionHeader from "../SectionHeader";
import Reveal from "../Reveal";
import { useLang } from "../../lib/i18n";

export default function Process() {
  const { t } = useLang();
  const p = t.process;

  return (
    <section id="process" className="scroll-mt-20 border-t border-line bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeader index="04" label={p.eyebrow} title={p.title} description={p.desc} />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {p.steps.map((step, i) => (
            <Reveal key={i} delay={i * 0.06} as="li" className="bg-canvas">
              <div className="flex h-full flex-col p-7 sm:p-9">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span aria-hidden className="h-px flex-1 bg-line" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
