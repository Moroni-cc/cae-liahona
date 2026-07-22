import { Logo } from "../components/Logo";
import { Newsletter } from "../components/Newsletter";
import { Button, Eyebrow, SectionHeading, Stars } from "../components/ui";

const pillars = [
  {
    bearing: "N 20°",
    title: "Nivelación y Refuerzo Académico",
    text: "Ayudamos a estudiantes de primaria y secundaria a superar vacíos en materias clave con explicaciones sencillas y a su ritmo.",
  },
  {
    bearing: "E 100°",
    title: "Hábitos y Técnicas de Estudio",
    text: "Enseñamos a planificar, organizar el tiempo y dominar métodos de estudio efectivos para lograr autonomía escolar.",
  },
  {
    bearing: "S 200°",
    title: "Desarrollo Integral y Orientación",
    text: "Potenciamos la confianza del estudiante y, en grados superiores, le ayudamos a descubrir su perfil vocacional.",
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
    quote: "Llegué sin saber qué estudiar y salí con una carrera elegida con criterio propio, no por presión de nadie.",
    name: "María Fernanda R.",
    role: "Estudiante de Ingeniería",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120", // Foto temporal
  },
  {
    quote: "El plan trimestral le dio a mi hijo una estructura que en el colegio nunca tuvo. Se nota la diferencia.",
    name: "Jorge L.",
    role: "Padre de familia",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120", // Foto temporal
  },
  {
    quote: "La preparación para la entrevista de admisión fue clave. Llegué con confianza y respuestas pensadas.",
    name: "Camila S.",
    role: "Estudiante de Medicina",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120", // Foto temporal
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-midnight">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
          <div>
            <Eyebrow bearing="Rumbo 045°">Asesoría Educativa Integral</Eyebrow>
            <h1 className="mt-6 font-display text-4xl font-medium leading-[1.1] text-parchment sm:text-5xl">
              Descubre tu mejor versión académica
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-mist">
              En CAE-LIAHONA acompañamos a estudiantes de primaria y secundaria a superar retos, dominar hábitos de estudio y construir un futuro con confianza.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/servicios">Agenda una consulta gratuita</Button>
              <Button href="/sobre-nosotros" variant="ghost">
                Conoce la academia
              </Button>
            </div>
          </div>

          <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96">
            <div className="absolute inset-0 rounded-full bg-brass/40 blur-3xl" />
            <Logo className="relative h-full w-full text-brass-light" />
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
            title="Nuestra misión"
            description="Somos un equipo de asesores educativos con la única misión de descubrir tu mejor versión. Creemos que cada estudiante de primaria y secundaria tiene un potencial único que solo necesita la guía y las herramientas adecuadas para brillar."
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
            className={`mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
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
                <Button href="/sobre-nosotros" variant="dark">
                  Conocer más
                </Button>
              </div>
            </div>
            <div className="flex aspect-4/3 items-center justify-center rounded-2xl border border-parchment-line bg-white/60">
              <Logo className="h-24 w-24 text-brass/40" />
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
              <div key={t.name} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-8">
                <div>
                  <Stars />
                  <p className="mt-4 text-sm leading-relaxed text-parchment/90">“{t.quote}”</p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wide text-brass-light">{t.name}</p>
                    <p className="text-xs text-mist">{t.role}</p>
                  </div>
                </div>
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
