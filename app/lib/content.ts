import type { LucideIcon } from "lucide-react";
import {
  Braces,
  Server,
  Database,
  GitBranch,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

export type Lang = "en" | "es";

/* ================================================================== */
/*  Language-neutral data (structure, links, icons, assets)           */
/* ================================================================== */

export const profile = {
  name: "Agustín Pérez Farhat",
  email: "aguspfarhat02@gmail.com",
  phone: "+54 381 459 8686",
  location: "Tucumán, Argentina",
  timezone: "UTC−3",
  cv: {
    en: "/CV-AgustinPerez.pdf",
    es: "/CV-AgustinPerezFarhat-ES.pdf",
  },
} as const;

export const socials: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "GitHub", href: "https://github.com/aguspfarhat?tab=repositories", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/agustin-perez-farhat-913069238/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/agustinpfarhat/", icon: Instagram },
];

export const navIds = ["work", "about", "stack", "process", "contact"] as const;

export const techRibbon = [
  "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "MongoDB",
  "Mongoose", "PostgreSQL", "Git", "Vercel", "Jira", "Scrum",
];

export const stackMeta: { key: "frontend" | "backend" | "data" | "tooling"; icon: LucideIcon }[] = [
  { key: "frontend", icon: Braces },
  { key: "backend", icon: Server },
  { key: "data", icon: Database },
  { key: "tooling", icon: GitBranch },
];

export type ProjectMeta = {
  slug: "cuidar" | "imac";
  index: string;
  year: string;
  status: "live" | "dev";
  href?: string;
  logo: string;
  logoInvert?: boolean; // logo already has its own dark background (show as-is)
  stack: string[];
};

export const projectMeta: ProjectMeta[] = [
  {
    slug: "imac",
    index: "01",
    year: "2026",
    status: "live",
    href: "https://www.imactucuman.com.ar",
    logo: "/logos/imac-logo.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    slug: "cuidar",
    index: "02",
    year: "2025",
    status: "live",
    href: "https://cuidar-app-delta.vercel.app",
    logo: "/logos/cuidar-logo.png",
    logoInvert: true,
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Mongoose", "Tailwind CSS"],
  },
];

/* ================================================================== */
/*  Localized copy                                                    */
/* ================================================================== */

type ProjectCopy = {
  name: string;
  tagline: string;
  role: string;
  problem: string;
  solution: string;
  highlights: string[];
};

type StackGroupCopy = { title: string; caption: string; items: string[] };

export type Dict = {
  langSwitchTo: string; // label shown on the toggle to switch to the OTHER language
  nav: { work: string; about: string; stack: string; process: string; contact: string; cta: string };
  hero: {
    availability: string;
    lead: string;
    leadAccent: string;
    leadTail: string;
    intro: string;
    metrics: { value: string; label: string }[];
    viewWork: string;
    cvEn: string;
    cvEs: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    role: string;
    facts: { label: string; value: string }[];
    traits: string[];
  };
  stack: {
    eyebrow: string;
    title: string;
    desc: string;
    groups: Record<"frontend" | "backend" | "data" | "tooling", StackGroupCopy>;
    note: string;
  };
  work: {
    eyebrow: string;
    title: string;
    desc: string;
    problemLabel: string;
    solutionLabel: string;
    visit: string;
    status: { live: string; dev: string };
    projects: Record<"cuidar" | "imac", ProjectCopy>;
  };
  process: {
    eyebrow: string;
    title: string;
    desc: string;
    steps: { title: string; body: string }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    body: string;
    emailLabel: string;
    replies: string;
    form: {
      name: string;
      email: string;
      message: string;
      namePh: string;
      emailPh: string;
      messagePh: string;
      send: string;
      sending: string;
      sentTitle: string;
      sentBody: string;
      another: string;
      errGeneric: string;
      errNetwork: string;
    };
  };
  cv: {
    heading: string;
    subEn: string;
    subEs: string;
    download: string;
    openNew: string;
    close: string;
    noPreview: string;
  };
  footer: { tagline: string; sitemap: string; elsewhere: string; rights: string; backToTop: string };
};

export const dict: Record<Lang, Dict> = {
  /* ---------------------------- English --------------------------- */
  en: {
    langSwitchTo: "ES",
    nav: { work: "Work", about: "About", stack: "Stack", process: "Process", contact: "Contact", cta: "Get in touch" },
    hero: {
      availability: "Open to work",
      lead: "Full-stack developer building fast, intuitive",
      leadAccent: "web products",
      leadTail: "— from problem to production.",
      intro:
        "I own products end-to-end — from data models and APIs to the interface people actually touch. My core is React, Next.js and TypeScript.",
      metrics: [
        { value: "Full-stack", label: "Front & back end" },
        { value: "End-to-end", label: "Owned lifecycle" },
        { value: "2022→", label: "Building products" },
      ],
      viewWork: "View selected work",
      cvEn: "Résumé · EN",
      cvEs: "Résumé · ES",
    },
    about: {
      eyebrow: "About",
      title: "Full-stack developer with an eye for the details users feel.",
      paragraphs: [
        "I’m a full-stack developer based in Tucumán, Argentina, with a technical degree in Software Development and Quality from Universidad de Santo Tomás de Aquino.",
        "I work across the whole stack — data models, APIs and the pixels users touch — with a bias toward clarity, performance and interfaces that feel effortless. My core is React, Next.js and TypeScript, backed by a habit of shipping: I’ve designed, built and deployed complete platforms on my own, owning every stage from problem definition to production.",
      ],
      role: "Full-Stack Web Developer",
      facts: [
        { label: "Based in", value: "Tucumán, Argentina · UTC−3" },
        { label: "Education", value: "Software Dev. & Quality — UNSTA" },
        { label: "Languages", value: "Spanish (native) · English (advanced)" },
        { label: "Focus", value: "Front-end architecture & full-stack delivery" },
      ],
      traits: ["Problem solving", "Systems thinking", "Ownership", "Fast learner", "Clear communication", "Pragmatism"],
    },
    stack: {
      eyebrow: "Stack",
      title: "The tools I reach for, grouped by what they do.",
      desc: "A focused toolkit rather than a laundry list — chosen for building fast, maintainable products end to end.",
      groups: {
        frontend: { title: "Frontend", caption: "Interfaces that feel effortless", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML & CSS"] },
        backend: { title: "Backend", caption: "APIs and application logic", items: ["Node.js", "Next.js API Routes", "REST APIs", "Authentication"] },
        data: { title: "Data", caption: "Modeling and persistence", items: ["MongoDB", "Mongoose", "SQL", "NoSQL", "Schema design"] },
        tooling: { title: "Tooling & Workflow", caption: "How the work gets shipped", items: ["Git & GitHub", "Vercel", "Jira", "Scrum / Agile", "Claude Code"] },
      },
      note: "Also comfortable pairing with AI tooling like Claude Code to move faster without cutting corners on quality.",
    },
    work: {
      eyebrow: "Selected work",
      title: "Products I designed, built and shipped on my own.",
      desc: "Each one started as a real problem and ended in production. Sole developer across the full lifecycle — from data model to deployed interface.",
      problemLabel: "The problem",
      solutionLabel: "The solution",
      visit: "Visit live site",
      status: { live: "Live", dev: "In development" },
      projects: {
        imac: {
          name: "IMAC Tucumán",
          tagline: "A patient-facing platform for a diagnostic imaging center",
          role: "Sole developer",
          problem:
            "A diagnostic imaging center needed a clear, modern way for patients to find information and access their studies online.",
          solution:
            "A user-friendly platform that streamlines how studies and information are presented, with location support and a clean, accessible interface — now live in production.",
          highlights: [
            "Streamlined presentation of studies and info",
            "Location support for patients",
            "Accessible, responsive interface",
            "Managed the full project lifecycle",
          ],
        },
        cuidar: {
          name: "Cuidar",
          tagline: "A marketplace for orthopedic equipment rentals",
          role: "Sole developer — end-to-end",
          problem:
            "Affordable orthopedic equipment is hard to reach for the people who need it most, while usable gear sits idle in homes long after recovery.",
          solution:
            "A platform that connects people who need orthopedic products with those who no longer use theirs — a categorized catalog, geolocation and a rental flow designed to be usable by non-technical users.",
          highlights: [
            "Categorized product catalog with search",
            "Geolocation to match supply with demand",
            "Rental flow built for non-technical users",
            "Owned the full lifecycle, from idea to deploy",
          ],
        },
      },
    },
    process: {
      eyebrow: "Process",
      title: "How I turn a vague problem into something shipped.",
      desc: "A simple, repeatable way of working that keeps quality high and scope honest.",
      steps: [
        { title: "Understand before building", body: "First solve the problem, then write the code. I frame the real problem, map the constraints, then design the smallest thing that genuinely solves it." },
        { title: "Design for the person", body: "The interface is the product for most people. I build flows a non-technical user can navigate without a manual — accessible, responsive, unambiguous." },
        { title: "Ship, then refine", body: "In technology, standing still is moving backwards. I get things into production, learn from real use, and iterate instead of polishing in a vacuum." },
        { title: "Simplicity is the goal", body: "Simplicity is the soul of efficiency. I prefer clear code and lean interfaces over clever ones — fewer moving parts, easier to trust and maintain." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let’s build something worth shipping.",
      body: "Open to full-time roles, freelance work and collaborations. Tell me what you’re building — I’ll get back to you.",
      emailLabel: "Email",
      replies: "Typically replies within a day.",
      form: {
        name: "Name", email: "Email", message: "Message",
        namePh: "Jane Doe", emailPh: "jane@company.com", messagePh: "What are you building?",
        send: "Send message", sending: "Sending…",
        sentTitle: "Message sent", sentBody: "Thanks for reaching out — I’ll get back to you soon.",
        another: "Send another message",
        errGeneric: "Something went wrong. Please try again.",
        errNetwork: "Couldn’t reach the server. Try again or email me directly.",
      },
    },
    cv: {
      heading: "Résumé",
      subEn: "English version",
      subEs: "Spanish version",
      download: "Download PDF",
      openNew: "Open in new tab",
      close: "Close",
      noPreview: "Preview isn’t available here. Open the PDF in a new tab or download it.",
    },
    footer: {
      tagline: "Full-Stack Web Developer building fast, intuitive web products from Tucumán, Argentina.",
      sitemap: "Sitemap", elsewhere: "Elsewhere",
      rights: "Designed & built from scratch.", backToTop: "Back to top",
    },
  },

  /* ---------------------------- Español --------------------------- */
  es: {
    langSwitchTo: "EN",
    nav: { work: "Proyectos", about: "Sobre mí", stack: "Stack", process: "Proceso", contact: "Contacto", cta: "Hablemos" },
    hero: {
      availability: "Disponible para trabajar",
      lead: "Desarrollador full-stack que construye productos web",
      leadAccent: "rápidos e intuitivos",
      leadTail: "— del problema a producción.",
      intro:
        "Llevo los productos de punta a punta — desde los modelos de datos y las APIs hasta la interfaz que la gente realmente toca. Mi base es React, Next.js y TypeScript.",
      metrics: [
        { value: "Full-stack", label: "Front y back" },
        { value: "Integral", label: "Ciclo completo" },
        { value: "2022→", label: "Creando productos" },
      ],
      viewWork: "Ver proyectos",
      cvEn: "CV · Inglés",
      cvEs: "CV · Español",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Desarrollador full-stack con ojo para los detalles que el usuario percibe.",
      paragraphs: [
        "Soy desarrollador full-stack en Tucumán, Argentina, con una Tecnicatura universitaria en Desarrollo y Calidad de Software de la Universidad de Santo Tomás de Aquino.",
        "Trabajo en todo el stack — modelos de datos, APIs y los píxeles que el usuario toca — con una inclinación por la claridad, el rendimiento y las interfaces que se sienten naturales. Mi base es React, Next.js y TypeScript, respaldada por el hábito de entregar: diseñé, construí y desplegué plataformas completas por mi cuenta, haciéndome cargo de cada etapa, de la definición del problema a producción.",
      ],
      role: "Desarrollador Web Full-Stack",
      facts: [
        { label: "Ubicación", value: "Tucumán, Argentina · UTC−3" },
        { label: "Formación", value: "Desarrollo y Calidad de Software — UNSTA" },
        { label: "Idiomas", value: "Español (nativo) · Inglés (avanzado)" },
        { label: "Enfoque", value: "Arquitectura front-end y entrega full-stack" },
      ],
      traits: ["Resolución de problemas", "Pensamiento sistémico", "Responsabilidad", "Aprendizaje rápido", "Comunicación clara", "Pragmatismo"],
    },
    stack: {
      eyebrow: "Stack",
      title: "Las herramientas que uso, agrupadas por lo que hacen.",
      desc: "Un conjunto enfocado y no una lista interminable — elegido para construir productos rápidos y mantenibles de punta a punta.",
      groups: {
        frontend: { title: "Frontend", caption: "Interfaces que se sienten naturales", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML y CSS"] },
        backend: { title: "Backend", caption: "APIs y lógica de aplicación", items: ["Node.js", "Next.js API Routes", "APIs REST", "Autenticación"] },
        data: { title: "Datos", caption: "Modelado y persistencia", items: ["MongoDB", "Mongoose", "SQL", "NoSQL", "Diseño de esquemas"] },
        tooling: { title: "Herramientas y flujo", caption: "Cómo se entrega el trabajo", items: ["Git y GitHub", "Vercel", "Jira", "Scrum / Agile", "Claude Code"] },
      },
      note: "También me manejo con herramientas de IA como Claude Code para avanzar más rápido sin resignar calidad.",
    },
    work: {
      eyebrow: "Proyectos destacados",
      title: "Productos que diseñé, construí y llevé a producción por mi cuenta.",
      desc: "Cada uno empezó como un problema real y terminó en producción. Desarrollador único en todo el ciclo — del modelo de datos a la interfaz desplegada.",
      problemLabel: "El problema",
      solutionLabel: "La solución",
      visit: "Ver sitio en vivo",
      status: { live: "En vivo", dev: "En desarrollo" },
      projects: {
        imac: {
          name: "IMAC Tucumán",
          tagline: "Una plataforma para pacientes de un centro de diagnóstico por imágenes",
          role: "Desarrollador único",
          problem:
            "Un centro de diagnóstico por imágenes necesitaba una forma clara y moderna de que los pacientes encontraran información y accedieran a sus estudios en línea.",
          solution:
            "Una plataforma clara que ordena cómo se presentan los estudios y la información, con soporte de ubicación y una interfaz accesible — ahora en producción.",
          highlights: [
            "Presentación ordenada de estudios e información",
            "Soporte de ubicación para pacientes",
            "Interfaz accesible y responsiva",
            "Gestión del ciclo de vida completo del proyecto",
          ],
        },
        cuidar: {
          name: "Cuidar",
          tagline: "Un marketplace para el alquiler de equipamiento ortopédico",
          role: "Desarrollador único — de punta a punta",
          problem:
            "Conseguir equipamiento ortopédico accesible es difícil para quienes más lo necesitan, mientras que material en buen estado queda sin uso en los hogares tras la recuperación.",
          solution:
            "Una plataforma que conecta a quienes necesitan productos ortopédicos con quienes ya no usan los suyos — catálogo categorizado, geolocalización y un flujo de alquiler pensado para usuarios no técnicos.",
          highlights: [
            "Catálogo de productos categorizado con búsqueda",
            "Geolocalización para cruzar oferta y demanda",
            "Flujo de alquiler pensado para usuarios no técnicos",
            "Ciclo de vida completo, de la idea al deploy",
          ],
        },
      },
    },
    process: {
      eyebrow: "Proceso",
      title: "Cómo convierto un problema difuso en algo entregado.",
      desc: "Una forma de trabajar simple y repetible que mantiene alta la calidad y honesto el alcance.",
      steps: [
        { title: "Entender antes de construir", body: "Primero resuelvo el problema, después escribo el código. Defino el problema real, mapeo las restricciones y diseño lo más pequeño que de verdad lo resuelve." },
        { title: "Diseñar para la persona", body: "Para la mayoría, la interfaz es el producto. Construyo flujos que un usuario no técnico puede recorrer sin manual — accesibles, responsivos, sin ambigüedades." },
        { title: "Entregar y luego refinar", body: "En tecnología, quedarse quieto es retroceder. Llevo las cosas a producción, aprendo del uso real e itero en lugar de pulir en el vacío." },
        { title: "La simplicidad es el objetivo", body: "La simplicidad es el alma de la eficiencia. Prefiero código claro e interfaces sobrias antes que ingeniosas — menos piezas, más fáciles de confiar y mantener." },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      heading: "Construyamos algo que valga la pena lanzar.",
      body: "Disponible para roles full-time, trabajo freelance y colaboraciones. Contame qué estás construyendo — te respondo.",
      emailLabel: "Email",
      replies: "Suelo responder dentro de un día.",
      form: {
        name: "Nombre", email: "Email", message: "Mensaje",
        namePh: "Juan Pérez", emailPh: "juan@empresa.com", messagePh: "¿Qué estás construyendo?",
        send: "Enviar mensaje", sending: "Enviando…",
        sentTitle: "Mensaje enviado", sentBody: "Gracias por escribir — te respondo pronto.",
        another: "Enviar otro mensaje",
        errGeneric: "Algo salió mal. Probá de nuevo.",
        errNetwork: "No se pudo contactar al servidor. Probá otra vez o escribime directamente.",
      },
    },
    cv: {
      heading: "Currículum",
      subEn: "Versión en inglés",
      subEs: "Versión en español",
      download: "Descargar PDF",
      openNew: "Abrir en pestaña nueva",
      close: "Cerrar",
      noPreview: "La vista previa no está disponible aquí. Abrí el PDF en una pestaña nueva o descargalo.",
    },
    footer: {
      tagline: "Desarrollador Web Full-Stack creando productos web rápidos e intuitivos desde Tucumán, Argentina.",
      sitemap: "Secciones", elsewhere: "En la web",
      rights: "Diseñado y construido desde cero.", backToTop: "Volver arriba",
    },
  },
};
