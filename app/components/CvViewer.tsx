"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ExternalLink, FileText, X } from "lucide-react";
import { useLang } from "../lib/i18n";
import { profile } from "../lib/content";

type CvLang = "en" | "es";

export default function CvButtons() {
  const { t } = useLang();
  const [open, setOpen] = useState<CvLang | null>(null);

  return (
    <>
      <div className="inline-flex items-center rounded-full border border-line-strong bg-canvas p-1">
        <span className="hidden pl-2.5 pr-1 text-faint sm:inline">
          <FileText className="h-4 w-4" />
        </span>
        <button
          onClick={() => setOpen("en")}
          className="rounded-full px-3.5 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:bg-panel-2"
        >
          {t.hero.cvEn}
        </button>
        <span aria-hidden className="h-4 w-px bg-line-strong" />
        <button
          onClick={() => setOpen("es")}
          className="rounded-full px-3.5 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:bg-panel-2"
        >
          {t.hero.cvEs}
        </button>
      </div>

      <CvModal open={open} onClose={() => setOpen(null)} />
    </>
  );
}

function CvModal({ open, onClose }: { open: CvLang | null; onClose: () => void }) {
  const { t } = useLang();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!mounted) return null;

  const src = open ? profile.cv[open] : "";
  const filename = open === "es" ? "Agustin-Perez-Farhat-CV-ES.pdf" : "Agustin-Perez-Farhat-CV-EN.pdf";

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-night/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t.cv.heading}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-full w-full flex-col overflow-hidden bg-panel shadow-card-hover sm:h-[88vh] sm:max-w-4xl sm:rounded-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 border-b border-line bg-canvas px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-ink">{t.cv.heading}</p>
                <p className="truncate text-xs text-faint">
                  {open === "es" ? t.cv.subEs : t.cv.subEn}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden items-center gap-1.5 rounded-full border border-line-strong px-3 py-2 text-sm text-ink transition-colors hover:border-ink sm:inline-flex"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t.cv.openNew}
                </a>
                <a
                  href={src}
                  download={filename}
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-95"
                >
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">{t.cv.download}</span>
                </a>
                <button
                  onClick={onClose}
                  aria-label={t.cv.close}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-ink"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Preview */}
            <div className="relative flex-1 bg-panel-2">
              <iframe
                key={src}
                src={`${src}#view=FitH`}
                title={`${t.cv.heading} — ${open === "es" ? t.cv.subEs : t.cv.subEn}`}
                className="h-full w-full"
              />
              <noscript>{t.cv.noPreview}</noscript>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
