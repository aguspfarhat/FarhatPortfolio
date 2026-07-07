/**
 * Brand glyph — code brackets `< >` wrapping an AI spark.
 * Renders in currentColor so callers control the tile/background.
 */
export default function BrandMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* left bracket */}
      <path
        d="M8.7 7 L4.6 12 L8.7 17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* right bracket */}
      <path
        d="M15.3 7 L19.4 12 L15.3 17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* AI spark */}
      <path
        d="M12 8.7 C 12.35 11, 13 11.65, 14.6 12 C 13 12.35, 12.35 13, 12 15.3 C 11.65 13, 11 12.35, 9.4 12 C 11 11.65, 11.65 11, 12 8.7 Z"
        fill="currentColor"
      />
    </svg>
  );
}
