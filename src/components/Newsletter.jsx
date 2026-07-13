import { useState } from "react";

export function Newsletter() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="bg-ink-2">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl font-medium text-parchment sm:text-4xl">
          Mantente informado sobre educación
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-mist">
          Recibe consejos de estudio, fechas de admisión y novedades de la academia directo en tu
          correo, una vez al mes, sin ruido.
        </p>

        {sent ? (
          <p className="mt-8 font-mono text-sm text-brass-light">
            Listo, ya estás suscrito. Nos vemos en tu bandeja de entrada.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Correo electrónico
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="tu@correo.com"
              className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-parchment placeholder:text-mist/70 focus:border-brass focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-brass px-6 py-3 text-sm font-semibold text-midnight transition-colors hover:bg-brass-light"
            >
              Suscribirme
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
