import { Link } from "react-router-dom";

export function Eyebrow({ bearing, children, tone = "light" }) {
  const color = tone === "light" ? "text-brass-light" : "text-brass-dark";
  return (
    <div className={`flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase ${color}`}>
      {bearing && (
        <span className="inline-flex items-center gap-1.5">
          <svg width="10" height="10" viewBox="0 0 10 10" className="shrink-0">
            <path d="M5 0 L6.5 3.5 L10 5 L6.5 6.5 L5 10 L3.5 6.5 L0 5 L3.5 3.5 Z" fill="currentColor" />
          </svg>
          {bearing}
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}

export function SectionHeading({ eyebrow, bearing, title, description, align = "left", tone = "light" }) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const titleColor = tone === "light" ? "text-ink" : "text-parchment";
  const descColor = tone === "light" ? "text-slate" : "text-mist";
  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <Eyebrow bearing={bearing} tone={tone === "light" ? "dark" : "light"}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl font-medium leading-tight ${titleColor}`}>
        {title}
      </h2>
      {description && <p className={`text-base sm:text-lg leading-relaxed ${descColor}`}>{description}</p>}
    </div>
  );
}

export function Button({ children, variant = "primary", href, to, ...props }) {
  const target = to || href;
  const isExternal =
    target?.startsWith("http") ||
    target?.startsWith("mailto:") ||
    target?.startsWith("tel:");

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";

  const variants = {
    primary: "bg-brass text-midnight hover:bg-brass-light",
    ghost: "border border-parchment/30 text-parchment hover:border-brass hover:text-brass-light",
    dark: "border border-ink/20 text-ink hover:border-brass hover:text-brass-dark",
  };

  const className = `${base} ${variants[variant] || variants.primary}`;

  // 1. Navegación interna dentro de React Router (evita el 404 en Vercel)
  if (target && !isExternal) {
    return (
      <Link to={target} className={className} {...props}>
        {children}
      </Link>
    );
  }

  // 2. Enlaces externos (ej. WhatsApp, URL externa)
  if (isExternal) {
    return (
      <a href={target} target="_blank" rel="noopener noreferrer" className={className} {...props}>
        {children}
      </a>
    );
  }

  // 3. Elemento <button> tradicional para eventos onClick
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-parchment-line bg-white/60 p-8 ${className}`}>
      {children}
    </div>
  );
}

export function Stat({ value, label }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-display text-4xl sm:text-5xl text-brass-light">{value}</span>
      <span className="text-sm text-mist tracking-wide">{label}</span>
    </div>
  );
}

export function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1 text-brass" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill={i < count ? "currentColor" : "none"} stroke="currentColor">
          <path d="M10 1.5l2.6 5.6 6 .7-4.4 4.1 1.2 6-5.4-3-5.4 3 1.2-6L1.4 7.8l6-.7z" strokeWidth="1" />
        </svg>
      ))}
    </div>
  );
}