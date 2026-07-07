import Reveal from "./Reveal";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
};

const tones = {
  light: { eyebrow: "text-faint", title: "text-ink", desc: "text-muted", rule: "bg-line-strong" },
  dark: { eyebrow: "text-ghost", title: "text-white", desc: "text-white/60", rule: "bg-night-line" },
};

export default function SectionHeader({
  index,
  label,
  title,
  description,
  tone = "light",
  align = "left",
}: SectionHeaderProps) {
  const c = tones[tone];
  const centered = align === "center";

  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="eyebrow tabular-nums">{index}</span>
        <span aria-hidden className={`h-px w-8 ${c.rule}`} />
        <span className={`eyebrow ${c.eyebrow}`}>{label}</span>
      </div>
      <h2 className={`text-h2 mt-5 ${c.title}`}>{title}</h2>
      {description ? (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${c.desc}`}>{description}</p>
      ) : null}
    </Reveal>
  );
}
