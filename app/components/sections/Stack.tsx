"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import Reveal, { revealContainer, revealItem } from "../Reveal";
import { stackMeta } from "../../lib/content";
import { useLang } from "../../lib/i18n";

export default function Stack() {
  const { t } = useLang();
  const s = t.stack;

  return (
    <section id="stack" className="scroll-mt-20 border-t border-line bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeader index="03" label={s.eyebrow} title={s.title} description={s.desc} />

        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-4 sm:grid-cols-2"
        >
          {stackMeta.map(({ key, icon: Icon }) => {
            const group = s.groups[key];
            return (
              <motion.div
                key={key}
                variants={revealItem}
                className="group rounded-2xl border border-line bg-canvas p-6 transition-all duration-300 hover:border-line-strong hover:shadow-card sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-panel text-ink transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent-soft group-hover:text-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="eyebrow text-right">{group.caption}</span>
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{group.title}</h3>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-line-soft bg-panel px-2.5 py-1.5 text-sm text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        <Reveal delay={0.1} className="mt-4">
          <p className="text-sm text-faint">{s.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
