import { useState } from "react";
import { Button, Card, Eyebrow, SectionHeading } from "../components/ui";

const services = [
  {
    bearing: "N 020°",
    title: "Nivelación y Refuerzo Escolar",
    text: "Acompañamiento individual para comprender a fondo materias escolares críticas y mejorar el rendimiento académico.",
    features: ["Diagnóstico de nivel académico", "Apoyo en tareas y preparación de exámenes", "Informes mensuales para la familia"],
  },
  {
    bearing: "E 090°",
    title: "Métodos y Técnicas de Estudio",
    text: "Enseñamos técnicas de concentración, esquematización, resúmenes y organización del tiempo escolar.",
    features: ["Creación de rutinas de estudio", "Gestión del tiempo y organización semanal", "Herramientas contra la ansiedad de exámenes"],
  },
  {
    bearing: "S 180°",
    title: "Desarrollo Psicoeducativo",
    text: "Acompañamiento enfocado en la autoestima escolar, manejo de la frustración y motivación por el aprendizaje.",
    features: ["Sesiones individuales de consejería", "Potenciamiento de fortalezas", "Coordinación cercana con padres"],
  },
  {
    bearing: "O 270°",
    title: "Orientación Vocacional y Pre-U",
    text: "Para los grados superiores de secundaria, brindamos test vocacionales y preparación inicial para el salto universitario.",
    features: ["Test de intereses y aptitudes", "Exploración del perfil profesional", "Simulacros de admisión graduales"],
  },
];

const faqs = [
  {
    q: "¿A partir de qué grado escolar reciben alumnos?",
    a: "Acompañamos a estudiantes desde primaria (generalmente a partir de los 8 años) hasta el final de la secundaria y preparación preuniversitaria.",
  },
  {
    q: "¿Cómo ayudan a un estudiante con baja motivación o frustración?",
    a: "A través de nuestro enfoque psicoeducativo. Evaluamos qué bloquea su aprendizaje, diseñamos metas pequeñas que pueda alcanzar rápido para recuperar la confianza, y le enseñamos métodos adaptados a su estilo de aprendizaje.",
  },
  {
    q: "¿Las sesiones son grupales o individuales?",
    a: "Son 100% personalizadas. Cada estudiante trabaja de manera individual con un asesor asignado para asegurar un ritmo y un enfoque adaptados exclusivamente a sus necesidades.",
  },
  {
    q: "¿Cómo se mantiene informada a la familia?",
    a: "Emitimos informes mensuales de avance y mantenemos una comunicación directa y constante con los padres de familia para coordinar esfuerzos en el hogar.",
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
            <div className="mt-10 text-center">
              <p className="font-mono text-sm text-brass-dark">
                ¡Gracias! Estamos redirigiéndote a WhatsApp para iniciar tu consulta.
              </p>
              <p className="mt-2 text-xs text-slate">
                Si no se abre automáticamente, puedes escribirnos directamente a nuestro número.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();

                // 1. Obtener datos del formulario de manera limpia
                const data = new FormData(e.currentTarget);
                const name = data.get("name");
                const email = data.get("email");
                const service = data.get("service");
                const message = data.get("message") || "Sin comentarios adicionales";

                // 2. Construir el mensaje de WhatsApp bien estructurado
                const text = `¡Hola CAE-LIAHONA! 👋\n\nEstoy interesado en agendar una sesión de diagnóstico.\n\n*Mis Datos:*\n• *Nombre:* ${name}\n• *Correo:* ${email}\n• *Servicio de Interés:* ${service}\n\n*Mensaje:* ${message}`;

                // 3. Crear enlace y abrir en nueva pestaña
                const whatsappUrl = `https://wa.me/51938221801?text=${encodeURIComponent(text)}`;
                window.open(whatsappUrl, "_blank");

                // 4. Mostrar feedback de enviado en la interfaz
                setSent(true);
              }}
              className="mt-10 flex flex-col gap-4"
            >
              <input
                required
                name="name"
                placeholder="Nombre completo"
                className="rounded-xl border border-parchment-line bg-white/70 px-4 py-3 text-sm focus:border-brass focus:outline-none"
              />
              <input
                required
                name="email"
                type="email"
                placeholder="Correo electrónico"
                className="rounded-xl border border-parchment-line bg-white/70 px-4 py-3 text-sm focus:border-brass focus:outline-none"
              />
              <select
                required
                name="service"
                defaultValue=""
                className="rounded-xl border border-parchment-line bg-white/70 px-4 py-3 text-sm focus:border-brass focus:outline-none"
              >
                <option value="" disabled>Servicio de interés</option>
                {services.map((s) => (
                  <option key={s.title} value={s.title}>{s.title}</option>
                ))}
              </select>
              <textarea
                name="message"
                placeholder="Cuéntanos brevemente tu situación"
                rows={4}
                className="rounded-xl border border-parchment-line bg-white/70 px-4 py-3 text-sm focus:border-brass focus:outline-none"
              />
              <button
                type="submit"
                className="mt-2 rounded-full bg-brass px-6 py-3 text-sm font-semibold text-midnight hover:bg-brass-light"
              >
                Enviar mensaje por WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
