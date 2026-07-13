import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-nosotros", label: "Sobre nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/blog", label: "Blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-parchment-line bg-parchment/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2.5 font-display text-lg font-semibold text-ink">
          <svg width="26" height="26" viewBox="0 0 24 24" className="text-brass-dark">
            <path d="M12 2 L13.6 10.4 L22 12 L13.6 13.6 L12 22 L10.4 13.6 L2 12 L10.4 10.4 Z" fill="currentColor" />
          </svg>
          CAE-LIAHONA
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-brass-dark" : "text-slate hover:text-ink"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="/servicios" variant="dark">
            Agenda una consulta
          </Button>
        </div>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-parchment-line px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate hover:text-ink"
              >
                {link.label}
              </NavLink>
            ))}
            <Button href="/servicios" variant="dark">
              Agenda una consulta
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
