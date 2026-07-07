"""Regenerate the Spanish CV from the English one, preserving the exact design.

The English CV (public/CV-AgustinPerez.pdf) is dark text on a white background.
This script white-outs each text span and redraws it in Avenir Next (a close match
to the original TT Commons Pro, with full Spanish accent coverage), translating
EN->ES where needed and leaving names/tech/dates/photo/icons/layout untouched.

Usage (macOS, needs the system Avenir Next font):
    python3 -m venv .venv && .venv/bin/pip install pymupdf fonttools
    .venv/bin/python scripts/generate_es_cv.py

Only re-run this if you change the English CV. Never edit the English PDF by hand
here — it is the client's original.
"""
import os
import fitz  # pymupdf
from fontTools.ttLib import TTCollection

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "public", "CV-AgustinPerez.pdf")
OUT = os.path.join(ROOT, "public", "CV-AgustinPerezFarhat-ES.pdf")
AVENIR_TTC = "/System/Library/Fonts/Avenir Next.ttc"
FONT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), ".fonts")

# Avenir Next collection face indices: Regular=7, Bold=0, Italic=4
AVENIR_FACES = {"rg": 7, "bd": 0, "it": 4}


def ensure_fonts():
    os.makedirs(FONT_DIR, exist_ok=True)
    col = TTCollection(AVENIR_TTC)
    paths = {}
    for style, idx in AVENIR_FACES.items():
        out = os.path.join(FONT_DIR, f"avenir-{style}.ttf")
        if not os.path.exists(out):
            col.fonts[idx].save(out)
        paths[style] = out
    return paths


TR = {
    "SOFTWARE DEVELOPER": "DESARROLLADOR DE SOFTWARE",
    "March 2022 - May 2025": "Marzo 2022 - Mayo 2025",
    "CUIDAR - PERSONAL PROJECT": "CUIDAR - PROYECTO PERSONAL",
    "Spanish": "Español", "Mother language": "Lengua materna",
    "English": "Inglés", "Advanced": "Avanzado",
    "PROJECT": "PROYECTO", "EDUCATION": "EDUCACIÓN",
    "LANGUAGES": "IDIOMAS", "SKILLS": "APTITUDES",
    "January 2025 - April 2025": "Enero 2025 - Abril 2025",
    "Technologies. NextJS, Tailwind CSS, NodeJS, MongoDB, Mongoose":
        "Tecnologías. NextJS, Tailwind CSS, NodeJS, MongoDB, Mongoose",
}
PARA = {
    5: ("Desarrollé una plataforma para facilitar el alquiler de productos ortopédicos. "
        "Implementé productos categorizados, geolocalización y una interfaz intuitiva usando "
        "NextJS. Gestioné el ciclo de vida del proyecto de forma individual, asegurando código "
        "de alta calidad y una interfaz de usuario fluida."),
    7: ("Trabajo en equipo · Comunicación · Proactividad · Adaptabilidad · Pensamiento sistémico · "
        "Aprendizaje rápido · Resolución de problemas · Principios ágiles · Pensamiento pragmático · "
        "TypeScript · HTML · CSS · React · NodeJS · NextJS · SQL · NoSQL · Mongoose · Scrum"),
    8: ("Desarrollador web fullstack recién graduado con una Tecnicatura universitaria en Desarrollo "
        "y Calidad de Software en la Universidad de Santo Tomás de Aquino. Competente en tecnologías "
        "front-end como React y Tailwind CSS, además de una sólida base en TypeScript. Dedicado a "
        "construir interfaces de usuario responsivas e intuitivas y comprometido con el aprendizaje "
        "continuo y a mantenerme actualizado con las nuevas tendencias de la industria."),
}
PARA_BOTTOM = {5: 402, 7: 628, 8: 193.5}
WHITE = (1, 1, 1)
MAX_X = 562


def style_of(font):
    return "bd" if "Bd" in font else "it" if "It" in font else "rg"


def color_of(c):
    return ((c >> 16 & 255) / 255, (c >> 8 & 255) / 255, (c & 255) / 255)


def main():
    fonts = ensure_fonts()
    measure = {k: fitz.Font(fontfile=v) for k, v in fonts.items()}
    alias = {"rg": "av-rg", "bd": "av-bd", "it": "av-it"}

    doc = fitz.open(SRC)
    page = doc[0]

    for bi, b in enumerate(page.get_text("dict")["blocks"]):
        if "lines" not in b:
            continue

        if bi in PARA:
            span = b["lines"][0]["spans"][0]
            st = style_of(span["font"])
            col = color_of(span["color"])
            x0 = min(l["spans"][0]["bbox"][0] for l in b["lines"])
            y0 = b["bbox"][1]
            rect = fitz.Rect(x0, y0 - 1.5, MAX_X, PARA_BOTTOM[bi])
            page.draw_rect(fitz.Rect(x0 - 1, y0 - 2, rect.x1 + 2, rect.y1 + 1), color=WHITE, fill=WHITE, width=0)
            fs = round(span["size"], 1)
            while fs > 5:
                if page.insert_textbox(rect, PARA[bi], fontname=alias[st], fontfile=fonts[st],
                                       fontsize=fs, color=col, align=0, lineheight=1.42) >= 0:
                    break
                fs -= 0.2
            continue

        for line in b["lines"]:
            spans = line["spans"]
            for i, s in enumerate(spans):
                if not s["font"].startswith("TTCommonsPro") or s["text"].strip() == "":
                    continue
                new = TR.get(s["text"], s["text"])
                st = style_of(s["font"])
                col = color_of(s["color"])
                x0, y0, x1, y1 = s["bbox"]
                clip_r = spans[i + 1]["bbox"][0] - 0.5 if i + 1 < len(spans) else MAX_X + 3
                page.draw_rect(fitz.Rect(x0 - 1, y0 - 1.5, min(x1 + 2, clip_r), y1 + 1.5),
                               color=WHITE, fill=WHITE, width=0)
                fs = round(s["size"], 1)
                while fs > 5 and measure[st].text_length(new, fs) > (MAX_X - s["origin"][0]):
                    fs -= 0.2
                page.insert_text(fitz.Point(*s["origin"]), new, fontname=alias[st],
                                 fontfile=fonts[st], fontsize=fs, color=col)

    doc.subset_fonts()
    doc.save(OUT, garbage=4, deflate=True)
    print("Saved", OUT)


if __name__ == "__main__":
    main()
