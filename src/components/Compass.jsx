export function CompassMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 220 220"
      className={className}
      role="img"
      aria-label="Brújula CAE-LIAHONA"
    >
      <circle cx="110" cy="110" r="104" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
      <circle cx="110" cy="110" r="80" fill="none" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      {Array.from({ length: 36 }).map((_, i) => {
        const angle = (i * 10 * Math.PI) / 180;
        const long = i % 9 === 0;
        const r1 = long ? 86 : 92;
        const r2 = 104;
        const x1 = 110 + r1 * Math.sin(angle);
        const y1 = 110 - r1 * Math.cos(angle);
        const x2 = 110 + r2 * Math.sin(angle);
        const y2 = 110 - r2 * Math.cos(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeOpacity={long ? 0.9 : 0.35}
            strokeWidth={long ? 1.4 : 0.8}
          />
        );
      })}
      <g className="cae-needle" style={{ transformOrigin: "110px 110px" }}>
        <path d="M110 34 L124 110 L110 122 L96 110 Z" fill="currentColor" />
        <path d="M110 186 L124 110 L110 98 L96 110 Z" fill="currentColor" fillOpacity="0.35" />
      </g>
      <circle cx="110" cy="110" r="6" fill="currentColor" />
      <text x="110" y="24" textAnchor="middle" fontSize="11" fill="currentColor" fontFamily="IBM Plex Mono, monospace">N</text>
      <text x="110" y="204" textAnchor="middle" fontSize="11" fill="currentColor" fillOpacity="0.6" fontFamily="IBM Plex Mono, monospace">S</text>
      <text x="196" y="114" textAnchor="middle" fontSize="11" fill="currentColor" fillOpacity="0.6" fontFamily="IBM Plex Mono, monospace">E</text>
      <text x="24" y="114" textAnchor="middle" fontSize="11" fill="currentColor" fillOpacity="0.6" fontFamily="IBM Plex Mono, monospace">O</text>
    </svg>
  );
}
