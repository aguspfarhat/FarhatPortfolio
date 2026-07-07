"use client";

import { ArrowUp } from "lucide-react";
import { navIds, profile, socials } from "../lib/content";
import { useLang } from "../lib/i18n";
import BrandMark from "./BrandMark";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-night-line bg-night text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-ink">
                <BrandMark className="h-[22px] w-[22px]" />
              </span>
              <span className="text-sm font-medium tracking-tight text-white">{profile.name}</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/50">{t.footer.tagline}</p>
          </div>

          <nav aria-label={t.footer.sitemap} className="flex flex-col gap-3">
            <span className="eyebrow text-white/40">{t.footer.sitemap}</span>
            {navIds.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                {t.nav[id]}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="eyebrow text-white/40">{t.footer.elsewhere}</span>
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-night-line pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">
            © {year} {profile.name}. {t.footer.rights}
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-xs text-white/50 transition-colors duration-200 hover:text-white"
          >
            {t.footer.backToTop}
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
