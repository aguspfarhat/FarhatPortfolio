"use client";

import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import SectionHeader from "../SectionHeader";
import Reveal from "../Reveal";
import { projectMeta, type ProjectMeta } from "../../lib/content";
import { useLang } from "../../lib/i18n";

export default function Work() {
  const { t } = useLang();
  const w = t.work;

  return (
    <section id="work" className="scroll-mt-20 border-t border-line bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeader index="01" label={w.eyebrow} title={w.title} description={w.desc} />

        <div className="mt-14 space-y-6">
          {projectMeta.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoTile({ project }: { project: ProjectMeta }) {
  const copy = useLang().t.work.projects[project.slug];
  if (project.logoInvert) {
    return (
      <span className="flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-xl border border-white/10 sm:h-14 sm:w-14">
        <Image src={project.logo} alt={`${copy.name} logo`} width={56} height={56} className="h-full w-full object-cover" />
      </span>
    );
  }
  return (
    <span className="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-white p-2 sm:h-14 sm:w-14">
      <Image src={project.logo} alt={`${copy.name} logo`} width={44} height={44} className="h-full w-full object-contain" />
    </span>
  );
}

function ProjectCard({ project }: { project: ProjectMeta }) {
  const { t } = useLang();
  const w = t.work;
  const copy = w.projects[project.slug];
  const live = project.status === "live";

  return (
    <article className="group overflow-hidden rounded-3xl border border-line bg-canvas transition-all duration-300 hover:border-line-strong hover:shadow-card">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        {/* Identity panel */}
        <div className="relative flex flex-col justify-between overflow-hidden border-b border-line bg-ink p-8 text-white lg:border-b-0 lg:border-r">
          <div aria-hidden className="absolute inset-0 bg-grid opacity-[0.08]" />
          <div
            aria-hidden
            className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/25 blur-3xl transition-transform duration-500 group-hover:scale-125"
          />
          <div className="relative flex items-center justify-between gap-4">
            <LogoTile project={project} />
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wider ${
                live
                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                  : "border-white/15 bg-white/5 text-white/60"
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${live ? "bg-emerald-400" : "bg-white/50"}`} />
              {live ? w.status.live : w.status.dev}
            </span>
          </div>

          <div className="relative mt-10 lg:mt-0">
            <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{copy.name}</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/60">{copy.tagline}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/50">
              <span className="font-mono">{project.index}</span>
              <span className="h-3 w-px bg-white/15" />
              <span className="font-mono">{project.year}</span>
              <span className="h-3 w-px bg-white/15" />
              <span>{copy.role}</span>
            </div>
          </div>
        </div>

        {/* Case study */}
        <div className="p-7 sm:p-9">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="eyebrow">{w.problemLabel}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{copy.problem}</p>
            </div>
            <div>
              <p className="eyebrow">{w.solutionLabel}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{copy.solution}</p>
            </div>
          </div>

          <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
            {copy.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-ink-soft">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-line-soft pt-6">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-line-soft bg-panel px-2.5 py-1 font-mono text-xs text-ink-soft"
              >
                {tech}
              </span>
            ))}
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.03] active:scale-95"
              >
                {w.visit}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
