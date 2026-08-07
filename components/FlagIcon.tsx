import type { ReactNode } from "react";

/**
 * Inline SVG flags (24×16). Used instead of emoji flags because emoji flags
 * do not render on Windows/Chrome — they fall back to the two-letter country
 * code. These render identically everywhere. Complex flags are drawn as clean,
 * recognisable simplifications (correct colours + main device).
 */

const Star = ({
  x,
  y,
  s,
  fill,
}: {
  x: number;
  y: number;
  s: number;
  fill: string;
}) => (
  <text
    x={x}
    y={y}
    fontSize={s}
    fill={fill}
    textAnchor="middle"
    dominantBaseline="central"
    fontFamily="serif"
  >
    ★
  </text>
);

const FLAGS: Record<string, ReactNode> = {
  PK: (
    <>
      <rect width="24" height="16" fill="#01411C" />
      <rect width="6" height="16" fill="#fff" />
      <circle cx="15" cy="8" r="3.4" fill="#fff" />
      <circle cx="16.4" cy="8" r="2.8" fill="#01411C" />
      <Star x={17.5} y={6.4} s={3} fill="#fff" />
    </>
  ),
  DE: (
    <>
      <rect width="24" height="16" fill="#FFCE00" />
      <rect width="24" height="10.7" fill="#DD0000" />
      <rect width="24" height="5.34" fill="#000" />
    </>
  ),
  IT: (
    <>
      <rect width="8" height="16" fill="#009246" />
      <rect x="8" width="8" height="16" fill="#fff" />
      <rect x="16" width="8" height="16" fill="#CE2B37" />
    </>
  ),
  PL: (
    <>
      <rect width="24" height="16" fill="#DC143C" />
      <rect width="24" height="8" fill="#fff" />
    </>
  ),
  RU: (
    <>
      <rect width="24" height="16" fill="#D52B1E" />
      <rect width="24" height="10.7" fill="#0039A6" />
      <rect width="24" height="5.34" fill="#fff" />
    </>
  ),
  AE: (
    <>
      <rect width="24" height="16" fill="#fff" />
      <rect x="6" width="18" height="5.34" fill="#00732F" />
      <rect x="6" y="10.66" width="18" height="5.34" fill="#000" />
      <rect width="6" height="16" fill="#FF0000" />
    </>
  ),
  SA: (
    <>
      <rect width="24" height="16" fill="#006C35" />
      <rect x="4" y="9.4" width="16" height="1.1" fill="#fff" />
      <rect x="4" y="5.6" width="12" height="0.9" fill="#fff" />
    </>
  ),
  YE: (
    <>
      <rect width="24" height="16" fill="#fff" />
      <rect width="24" height="5.34" fill="#CE1126" />
      <rect y="10.66" width="24" height="5.34" fill="#000" />
    </>
  ),
  SY: (
    <>
      <rect width="24" height="16" fill="#fff" />
      <rect width="24" height="5.34" fill="#CE1126" />
      <rect y="10.66" width="24" height="5.34" fill="#000" />
      <Star x={9.5} y={8} s={3} fill="#007A3D" />
      <Star x={14.5} y={8} s={3} fill="#007A3D" />
    </>
  ),
  TR: (
    <>
      <rect width="24" height="16" fill="#E30A17" />
      <circle cx="9.5" cy="8" r="3.4" fill="#fff" />
      <circle cx="10.8" cy="8" r="2.7" fill="#E30A17" />
      <Star x={14} y={8} s={3.4} fill="#fff" />
    </>
  ),
  IR: (
    <>
      <rect width="24" height="16" fill="#fff" />
      <rect width="24" height="5.34" fill="#239F40" />
      <rect y="10.66" width="24" height="5.34" fill="#DA0000" />
    </>
  ),
  BG: (
    <>
      <rect width="24" height="16" fill="#D62612" />
      <rect width="24" height="10.7" fill="#00966E" />
      <rect width="24" height="5.34" fill="#fff" />
    </>
  ),
  CN: (
    <>
      <rect width="24" height="16" fill="#DE2910" />
      <Star x={5} y={5} s={5} fill="#FFDE00" />
      <Star x={9.5} y={2.6} s={2} fill="#FFDE00" />
      <Star x={10.5} y={5} s={2} fill="#FFDE00" />
      <Star x={10.5} y={8} s={2} fill="#FFDE00" />
      <Star x={9.5} y={10.4} s={2} fill="#FFDE00" />
    </>
  ),
  IN: (
    <>
      <rect width="24" height="16" fill="#fff" />
      <rect width="24" height="5.34" fill="#FF9933" />
      <rect y="10.66" width="24" height="5.34" fill="#138808" />
      <circle cx="12" cy="8" r="1.9" fill="none" stroke="#000080" strokeWidth="0.6" />
      <circle cx="12" cy="8" r="0.4" fill="#000080" />
    </>
  ),
  ID: (
    <>
      <rect width="24" height="16" fill="#fff" />
      <rect width="24" height="8" fill="#FF0000" />
    </>
  ),
  SG: (
    <>
      <rect width="24" height="16" fill="#fff" />
      <rect width="24" height="8" fill="#EF3340" />
      <circle cx="5.5" cy="4" r="2.2" fill="#fff" />
      <circle cx="6.7" cy="4" r="1.7" fill="#EF3340" />
      <Star x={9} y={2.6} s={1.6} fill="#fff" />
      <Star x={10} y={4.5} s={1.6} fill="#fff" />
      <Star x={8} y={4.5} s={1.6} fill="#fff" />
    </>
  ),
  VN: (
    <>
      <rect width="24" height="16" fill="#DA251D" />
      <Star x={12} y={8} s={7} fill="#FFFF00" />
    </>
  ),
  ZW: (
    <>
      <rect width="24" height="16" fill="#006400" />
      <rect y="2.3" width="24" height="2.3" fill="#FFD200" />
      <rect y="4.6" width="24" height="2.3" fill="#EF3340" />
      <rect y="6.9" width="24" height="2.2" fill="#000" />
      <rect y="9.1" width="24" height="2.3" fill="#EF3340" />
      <rect y="11.4" width="24" height="2.3" fill="#FFD200" />
      <path d="M0 0 L8 8 L0 16 Z" fill="#fff" />
      <Star x={2.4} y={8} s={3.4} fill="#EF3340" />
    </>
  ),
  ZA: (
    <>
      <rect width="24" height="16" fill="#002395" />
      <rect width="24" height="8" fill="#DE3831" />
      <rect y="6.5" width="24" height="3" fill="#fff" />
      <rect y="6.9" width="24" height="2.2" fill="#007A4D" />
      <path d="M0 0 L9 8 L0 16 Z" fill="#fff" />
      <path d="M0 1.6 L7.4 8 L0 14.4 Z" fill="#000" />
      <path d="M0 3 L-1 8 L0 8 Z" fill="#007A4D" />
      <path d="M-2 -1 L6 8 L-2 17 L0.6 8 Z" fill="#007A4D" />
    </>
  ),
  CA: (
    <>
      <rect width="24" height="16" fill="#fff" />
      <rect width="6" height="16" fill="#FF0000" />
      <rect x="18" width="6" height="16" fill="#FF0000" />
      <path
        d="M12 3.5 l0.7 2.1 2.1-0.5-0.7 1.6 1.4 0.4-2 1.5 0.4 0.9-2-0.3 0.1 2.6h-1l0.1-2.6-2 0.3 0.4-0.9-2-1.5 1.4-0.4-0.7-1.6 2.1 0.5z"
        fill="#FF0000"
      />
    </>
  ),
  US: (
    <>
      <rect width="24" height="16" fill="#fff" />
      <g fill="#B22234">
        <rect y="0" width="24" height="2.28" />
        <rect y="4.57" width="24" height="2.28" />
        <rect y="9.14" width="24" height="2.28" />
        <rect y="13.71" width="24" height="2.29" />
        <rect y="2.28" width="24" height="2.29" opacity="0" />
      </g>
      <g fill="#B22234">
        <rect y="6.85" width="24" height="2.29" />
        <rect y="11.42" width="24" height="2.29" />
      </g>
      <rect width="10" height="8.6" fill="#3C3B6E" />
      <g fill="#fff">
        <circle cx="2" cy="2" r="0.5" />
        <circle cx="5" cy="2" r="0.5" />
        <circle cx="8" cy="2" r="0.5" />
        <circle cx="3.5" cy="4.3" r="0.5" />
        <circle cx="6.5" cy="4.3" r="0.5" />
        <circle cx="2" cy="6.5" r="0.5" />
        <circle cx="5" cy="6.5" r="0.5" />
        <circle cx="8" cy="6.5" r="0.5" />
      </g>
    </>
  ),
};

export default function FlagIcon({
  code,
  className = "h-3.5 w-5",
}: {
  code: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-block shrink-0 overflow-hidden rounded-[2px] ring-1 ring-black/10 ${className}`}
    >
      <svg viewBox="0 0 24 16" className="h-full w-full" aria-hidden="true">
        {FLAGS[code] ?? <rect width="24" height="16" fill="#e5e7eb" />}
      </svg>
    </span>
  );
}
