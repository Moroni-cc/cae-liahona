import { CompassMark } from "../components/Compass";
import { Newsletter } from "../components/Newsletter";
import { Button, Eyebrow, SectionHeading, Stars } from "../components/ui";

const pillars = [
  {
    bearing: "N 20°",
    title: "Orientación vocacional y profesional",
    text: "Descubre tus fortalezas e intereses reales con evaluaciones y conversaciones guiadas, antes de elegir una carrera.",
  },
  {
    bearing: "E 100°",
    title: "Planificación académica estratégica",
    text: "Trazamos un plan de estudio con metas trimestrales, para que cada esfuerzo tenga un rumbo claro.",
  },
  {
    bearing: "S 200°",
    title: "Preparación para admisiones universitarias",
    text: "Te acompañamos en exámenes de admisión, ensayos y entrevistas de las universidades que te interesan.",
  },
];

const benefits = [
  {
    tag: "Ruta personal",
    title: "Descubre tu verdadera dirección académica",
    text: "Nada de rutas genéricas. Cada estudiante recibe un diagnóstico inicial y un plan de acompañamiento diseñado a su propio ritmo, intereses y contexto familiar.",
  },
  {
    tag: "Resultados medibles",
    title: "Estudiantes que logran sus metas universitarias",
    text: "Hacemos seguimiento trimestral de avances con indicadores concretos: notas, simulacros de admisión y postulaciones, para ajustar el rumbo a tiempo.",
  },
  {
    tag: "Acompañamiento continuo",
    title: "Acompañamiento en cada etapa de tu carrera",
    text: "Desde la elección vocacional hasta el primer ciclo universitario, un asesor asignado sigue tu proceso de cerca, sesión a sesión.",
  },
];

const testimonials = [
  {
    quote:
      "Llegué sin saber qué estudiar y salí con una carrera elegida con criterio propio, no por presión de nadie.",
    name: "María Fernanda R.",
    role: "Estudiante de Ingeniería",
  },
  {
    quote:
      "El plan trimestral le dio a mi hijo una estructura que en el colegio nunca tuvo. Se nota la diferencia.",
    name: "Jorge L.",
    role: "Padre de familia",
  },
  {
    quote:
      "La preparación para la entrevista de admisión fue clave. Llegué con confianza y respuestas pensadas.",
    name: "Camila S.",
    role: "Estudiante de Medicina",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-midnight">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
          <div>
            <Eyebrow bearing="Rumbo 045°">Academia de asesoría académica</Eyebrow>
            <h1 className="mt-6 font-display text-4xl font-medium leading-[1.1] text-parchment sm:text-5xl">
              Tu camino hacia la excelencia académica comienza aquí
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-mist">
              En CAE-LIAHONA convertimos la incertidumbre vocacional en un plan claro, con
              asesores que caminan contigo desde la elección de carrera hasta la universidad.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/servicios">Agenda una consulta gratuita</Button>
              <Button href="/sobre-nosotros" variant="ghost">
                Conoce la academia
              </Button>
            </div>
          </div>

          <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96">
            <div className="absolute inset-0 rounded-full bg-brass/10 blur-2xl" />
            <CompassMark className="relative h-full w-full text-brass-light" />
          </div>
        </div>
      </section>

      {/* Encabezado / misión */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <SectionHeading
            align="center"
            eyebrow="Nuestra misión"
            bearing="N 000°"
            title="Formamos estudiantes excepcionales"
            description="Creemos que ningún estudiante debería elegir su futuro a ciegas. Por eso combinamos orientación vocacional, planificación académica y preparación para admisiones en un solo acompañamiento, con la Liahona como recordatorio de que todo rumbo necesita una guía confiable."
          />
        </div>
      </section>

      {/* Lista de características / 3 pilares */}
      <section className="bg-parchment-dim">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            align="center"
            eyebrow="Lo que hacemos en CAE-LIAHONA"
            title="Tres coordenadas, un mismo rumbo"
            description="Cada servicio marca un punto cardinal en el trayecto del estudiante, desde el autoconocimiento hasta la puerta de la universidad."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-parchment-line bg-white/70 p-8">
                <span className="font-mono text-xs tracking-[0.2em] text-brass-dark">{pillar.bearing}</span>
                <h3 className="mt-4 font-display text-xl font-medium text-ink">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios alternados */}
      {benefits.map((benefit, i) => (
        <section key={benefit.title} className={i % 2 === 0 ? "bg-parchment" : "bg-parchment-dim"}>
          <div
            className={`mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <Eyebrow tone="dark" bearing={`Punto ${i + 1}`}>
                {benefit.tag}
              </Eyebrow>
              <h3 className="mt-4 font-display text-2xl font-medium text-ink sm:text-3xl">
                {benefit.title}
              </h3>
              <p className="mt-4 max-w-md text-slate leading-relaxed">{benefit.text}</p>
              <div className="mt-6">
                <Button href="/servicios" variant="dark">
                  Conocer más
                </Button>
              </div>
            </div>
            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-parchment-line bg-white/60">
              <CompassMark className="h-24 w-24 text-brass/40" />
            </div>
          </div>
        </section>
      ))}

      {/* Testimonios */}
      <section className="bg-midnight">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            tone="dark"
            align="center"
            eyebrow="Historias reales"
            title="Estudiantes que ya encontraron su rumbo"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <Stars />
                <p className="mt-4 text-sm leading-relaxed text-parchment/90">“{t.quote}”</p>
                <p className="mt-6 font-mono text-xs uppercase tracking-wide text-brass-light">{t.name}</p>
                <p className="text-xs text-mist">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-parchment">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-20 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
              Comienza tu transformación hoy
            </h2>
            <p className="mt-3 max-w-lg text-slate">
              Agenda una primera sesión sin costo y conversemos sobre el punto de partida más
              adecuado para ti.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/servicios">Agenda tu consulta</Button>
            <Button href="/sobre-nosotros" variant="dark">
              Conoce al equipo
            </Button>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
