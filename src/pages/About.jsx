import { CompassMark } from "../components/Compass";
import { Button, Eyebrow, SectionHeading, Stat } from "../components/ui";

const team = [
  { name: "Lucía Vargas", role: "Directora académica", bio: "15 años orientando estudiantes hacia carreras STEM y de salud." },
  { name: "Andrés Paredes", role: "Asesor vocacional", bio: "Psicólogo especializado en test de intereses y elección de carrera." },
  { name: "Sofía Chávez", role: "Asesora de admisiones", bio: "Ex-comité de admisión, experta en ensayos y entrevistas universitarias." },
];

const clients = ["Colegio San Marcos", "Instituto Los Andes", "Colegio Newton", "Liceo del Sur"];

export default function About() {
  return (
    <>
      <section className="bg-midnight">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <Eyebrow bearing="Rumbo 000°">Sobre nosotros</Eyebrow>
          <h1 className="mt-6 font-display text-4xl font-medium text-parchment sm:text-5xl">
            Una brújula para quienes aún no saben su norte
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-mist">
            CAE-LIAHONA nació de una pregunta simple: ¿por qué tantos estudiantes eligen carrera
            sin haberse conocido primero a sí mismos? Desde entonces trabajamos para que cada
            decisión académica tenga un rumbo, no una corazonada.
          </p>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Nuestra historia"
              title="Una guía, no un examen más"
              description="Fundada en 2014 por un grupo de psicólogos educativos y ex-comités de admisión, la academia toma su nombre de la Liahona: un instrumento de navegación que respondía según la fe y el esfuerzo de quien lo llevaba. Así entendemos la asesoría: una herramienta que solo funciona si el estudiante se involucra en su propio proceso."
            />
            <div className="mt-6">
              <Button href="/servicios" variant="dark">Ver servicios</Button>
            </div>
          </div>
          <div className="flex aspect-square items-center justify-center rounded-2xl border border-parchment-line bg-white/60">
            <CompassMark className="h-40 w-40 text-brass/50" />
          </div>
        </div>
      </section>

      <section className="bg-parchment-dim">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading align="center" eyebrow="Nuestro equipo" title="Asesores que ya recorrieron el camino" />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="rounded-2xl border border-parchment-line bg-white/70 p-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-ink/5">
                  <CompassMark className="h-10 w-10 text-brass-dark" />
                </div>
                <h3 className="mt-5 font-display text-lg font-medium text-ink">{m.name}</h3>
                <p className="text-xs font-mono uppercase tracking-wide text-brass-dark">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-midnight">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 sm:grid-cols-3">
            <Stat value="1,200+" label="Estudiantes asesorados" />
            <Stat value="11 años" label="De experiencia" />
            <Stat value="92%" label="Ingresó a su primera opción" />
          </div>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-brass-dark">
            Colegios que confían en nosotros
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-slate/70">
            {clients.map((c) => (
              <span key={c} className="font-display text-lg">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-parchment-dim">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
            Conversemos sobre tu rumbo
          </h2>
          <p className="max-w-lg text-slate">
            Cuéntanos en qué punto del camino estás y te ayudamos a trazar el siguiente paso.
          </p>
          <Button href="/servicios">Contáctanos</Button>
        </div>
      </section>
    </>
  );
}
