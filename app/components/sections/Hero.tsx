"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { profile, socials, techRibbon } from "../../lib/content";
import { useLang } from "../../lib/i18n";
import CvButtons from "../CvViewer";

export default function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade opacity-70" />
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] max-w-[95vw] -translate-x-1/2 rounded-full bg-accent-soft blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pt-36 lg:pt-40">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-canvas/70 py-1.5 pl-2.5 pr-4 text-sm text-muted shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 animate-ping-slow" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t.hero.availability}
              <span className="text-ghost">·</span>
              <span className="text-faint">{profile.location}</span>
            </span>
          </motion.div>

          {/* Name — the hero of the hero */}
          <motion.h1 variants={item} className="text-display mt-6 text-ink">
            {profile.name}
          </motion.h1>

          {/* Positioning line */}
          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-xl font-medium leading-snug tracking-tight text-ink-soft sm:text-2xl"
          >
            {t.hero.lead}{" "}
            <span className="relative whitespace-nowrap text-accent">
              {t.hero.leadAccent}
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-accent/35"
              >
                <path
                  d="M2 8 C 60 2, 120 2, 180 6 S 260 10, 298 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            {t.hero.leadTail}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            {t.hero.intro}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.03] active:scale-95"
            >
              {t.hero.viewWork}
              <ArrowDownRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
            <CvButtons />
            <div className="ml-1 hidden items-center gap-1 lg:flex">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-faint transition-colors duration-200 hover:bg-panel-2 hover:text-ink"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.dl
            variants={item}
            className="mt-14 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line"
          >
            {t.hero.metrics.map((m) => (
              <div key={m.label} className="bg-canvas px-3 py-4 sm:px-4">
                <dt className="text-[15px] font-semibold leading-tight tracking-tight text-ink sm:text-xl">
                  {m.value}
                </dt>
                <dd className="mt-1 text-xs text-faint">{m.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>

      {/* Tech ribbon */}
      <div className="relative border-y border-line bg-panel/60">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-canvas to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-canvas to-transparent" />
        <div className="flex overflow-hidden py-4">
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
            {[...techRibbon, ...techRibbon].map((tech, i) => (
              <span key={i} className="whitespace-nowrap font-mono text-sm text-faint">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
