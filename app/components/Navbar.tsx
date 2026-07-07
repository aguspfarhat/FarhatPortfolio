"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navIds, profile } from "../lib/content";
import { useLang } from "../lib/i18n";
import BrandMark from "./BrandMark";

export default function Navbar() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  const sections = navIds.map((id) => ({ id, label: t.nav[id] }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    navIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-line bg-canvas/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="group flex items-center gap-2.5" aria-label={`${profile.name} — home`}>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-white transition-transform duration-300 group-hover:-rotate-6">
              <BrandMark className="h-[22px] w-[22px]" />
            </span>
            <span className="hidden text-sm font-medium tracking-tight text-ink sm:block">
              {profile.name}
            </span>
          </a>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`relative rounded-full px-3.5 py-2 text-sm transition-colors duration-200 ${
                    active === s.id ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {active === s.id && (
                    <span className="absolute inset-0 rounded-full bg-panel-2" aria-hidden />
                  )}
                  <span className="relative">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <LangToggle lang={lang} onToggle={toggle} switchTo={t.langSwitchTo} />
            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.03] active:scale-95 md:inline-flex"
            >
              {t.nav.cta}
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 bottom-0 top-16 z-40 origin-top bg-canvas px-5 pb-8 pt-4 transition-all duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <ul className="flex flex-col divide-y divide-line-soft">
          {sections.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 text-lg text-ink"
              >
                <span>{s.label}</span>
                <span className="eyebrow tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-6 flex items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-3 text-sm font-medium text-white"
        >
          {t.nav.cta}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function LangToggle({ lang, onToggle, switchTo }: { lang: string; onToggle: () => void; switchTo: string }) {
  return (
    <button
      onClick={onToggle}
      className="group relative inline-flex items-center rounded-full border border-line-strong bg-canvas p-0.5 text-xs font-medium"
      aria-label={`Switch language to ${switchTo}`}
      title={`Switch language to ${switchTo}`}
    >
      <span
        className={`relative z-10 rounded-full px-2.5 py-1 transition-colors ${
          lang === "en" ? "text-white" : "text-muted"
        }`}
      >
        EN
      </span>
      <span
        className={`relative z-10 rounded-full px-2.5 py-1 transition-colors ${
          lang === "es" ? "text-white" : "text-muted"
        }`}
      >
        ES
      </span>
      <span
        aria-hidden
        className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-ink transition-transform duration-300 ease-out ${
          lang === "es" ? "translate-x-[calc(100%+0px)]" : "translate-x-0"
        }`}
        style={{ left: 2 }}
      />
    </button>
  );
}
