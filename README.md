# Agustín Pérez Farhat — Portfolio

Personal portfolio of Agustín Pérez Farhat, full-stack web developer. Designed and
built from scratch with a restrained, near-monochrome identity (white canvas, ink
type, a single cobalt accent).

## Stack

- **Next.js 15** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** with a token-driven design system (`app/globals.css`)
- **Framer Motion** for scroll reveals and micro-interactions
- **Nodemailer** for the contact form API (`app/api/contact`)
- **Bilingual (EN/ES)** via a lightweight context (`app/lib/i18n.tsx`); all copy in `app/lib/content.ts`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

The `/api/contact` route sends email via Gmail. Set these environment variables
(e.g. in `.env.local`) for it to work:

```bash
EMAIL_USER=your@gmail.com
EMAIL_PASSWORD=your_app_password   # a Gmail App Password, not your login password
```

Without them, the form fails gracefully and asks visitors to email directly.

## Structure

```
app/
  layout.tsx            Fonts, metadata, shell
  page.tsx              Section composition
  globals.css           Design tokens + utilities
  lib/content.ts        All copy & data (single source of truth)
  components/
    Navbar.tsx  Footer.tsx  Reveal.tsx  SectionHeader.tsx
    sections/   Hero · Work · About · Stack · Process · Contact
  api/contact/route.ts  Contact form handler
```

## CVs

Two résumés are served from `public/` and shown in an in-page preview (view without
downloading, plus a download button) via `app/components/CvViewer.tsx`:

- `CV-AgustinPerez.pdf` — English, the original (never edited programmatically).
- `CV-AgustinPerezFarhat-ES.pdf` — Spanish, generated to match the English design.

If you update the English CV, regenerate the Spanish one (macOS):

```bash
python3 -m venv scripts/.venv && scripts/.venv/bin/pip install pymupdf fonttools
scripts/.venv/bin/python scripts/generate_es_cv.py
```

## Build

```bash
npm run build && npm run start
```
