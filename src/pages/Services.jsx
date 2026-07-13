import { useState } from "react";
import { Button, Card, Eyebrow, SectionHeading } from "../components/ui";

const services = [
  {
    bearing: "N 020°",
    title: "Asesoría académica personalizada",
    text: "Sesiones individuales quincenales con un asesor fijo asignado durante todo el proceso.",
    features: ["Diagnóstico inicial", "Plan de estudio a medida", "Informe de avance cada mes"],
  },
  {
    bearing: "E 090°",
    title: "Orientación vocacional",
    text: "Test de intereses, entrevistas guiadas y contraste con el mercado laboral real.",
    features: ["Test vocacional certificado", "Sesión con la familia", "Mapa de carreras afines"],
  },
  {
    bearing: "S 180°",
    title: "Preparación para exámenes de admisión",
    text: "Simulacros cronometrados y retroalimentación específica por universidad objetivo.",
    features: ["Banco de simulacros", "Corrección de ensayos", "Entrevistas simuladas"],
  },
  {
    bearing: "O 270°",
    title: "Técnicas de estudio y seguimiento escolar",
    text: "Hábitos de estudio y organización semanal, con seguimiento directo a boletas y avances.",
    features: ["Plan semanal de estudio", "Seguimiento de notas", "Alertas tempranas a la familia"],
  },
];

const faqs = [
  {
    q: "¿Cómo empieza el proceso de asesoría?",
    a: "Con una sesión de diagnóstico gratuita donde identificamos el punto de partida y armamos un plan de trabajo junto al estudiante y su familia.",
  },
  {
    q: "¿Las sesiones son presenciales o virtuales?",
    a: "Ambas modalidades están disponibles. La mayoría de nuestros estudiantes combina sesiones presenciales mensuales con seguimiento virtual quincenal.",
  },
  {
    q: "¿Trabajan con estudiantes de todos los grados?",
    a: "Sí, adaptamos el acompañamiento desde tercero de secundaria hasta el primer ciclo universitario.",
  },
  {
    q: "¿Qué pasa si cambio de carrera a mitad del proceso?",
    a: "Es parte normal del proceso vocacional. Ajustamos el plan sin costo adicional dentro del mismo periodo contratado.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-parchment-line py-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg text-ink">{q}</span>
        <span className={`ml-4 shrink-0 font-mono text-brass-dark transition-transform ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">{a}</p>}
    </div>
  );
}

export default function Services() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-midnight">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <Eyebrow bearing="Rumbo 090°">Nuestros servicios</Eyebrow>
          <h1 className="mt-6 font-display text-4xl font-medium text-parchment sm:text-5xl">
            Acompañamiento diseñado para cada etapa
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-mist">
            Desde la primera duda vocacional hasta el examen de admisión, cada servicio tiene un
            asesor dedicado y una metodología propia.
          </p>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((s) => (
              <Card key={s.title}>
                <span className="font-mono text-xs tracking-[0.2em] text-brass-dark">{s.bearing}</span>
                <h3 className="mt-4 font-display text-2xl font-medium text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{s.text}</p>
                <ul className="mt-6 flex flex-col gap-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate">
                      <span className="h-1 w-1 rounded-full bg-brass" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-parchment-dim">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <SectionHeading align="center" eyebrow="Preguntas frecuentes" title="Antes de empezar, resolvamos tus dudas" />
          <div className="mt-10">
            {faqs.map((f) => (
              <FaqItem key={f.q} {...f} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-midnight">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
          <h2 className="font-display text-3xl font-medium text-parchment sm:text-4xl">
            Agenda tu sesión de diagnóstico gratuita
          </h2>
          <p className="max-w-lg text-mist">
            30 minutos para entender dónde estás y qué servicio se ajusta mejor a tu caso.
          </p>
          <Button href="#contacto">Ir al formulario</Button>
        </div>
      </section>

      <section id="contacto" className="bg-parchment">
        <div className="mx-auto max-w-xl px-6 py-20">
          <SectionHeading align="center" eyebrow="Formulario de contacto" title="Cuéntanos sobre ti" />
          {sent ? (
            <p className="mt-10 text-center font-mono text-sm text-brass-dark">
              Gracias, recibimos tu mensaje. Te contactaremos en menos de 24 horas.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mt-10 flex flex-col gap-4"
            >
              <input required placeholder="Nombre completo" className="rounded-xl border border-parchment-line bg-white/70 px-4 py-3 text-sm focus:border-brass focus:outline-none" />
              <input required type="email" placeholder="Correo electrónico" className="rounded-xl border border-parchment-line bg-white/70 px-4 py-3 text-sm focus:border-brass focus:outline-none" />
              <select required defaultValue="" className="rounded-xl border border-parchment-line bg-white/70 px-4 py-3 text-sm focus:border-brass focus:outline-none">
                <option value="" disabled>Servicio de interés</option>
                {services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
              </select>
              <textarea placeholder="Cuéntanos brevemente tu situación" rows={4} className="rounded-xl border border-parchment-line bg-white/70 px-4 py-3 text-sm focus:border-brass focus:outline-none" />
              <button type="submit" className="mt-2 rounded-full bg-brass px-6 py-3 text-sm font-semibold text-midnight hover:bg-brass-light">
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
